"use client";

import { useState } from 'react';
import { ProjectDefinition } from '@/types';
import { getTemplateById } from '@/lib/templates/registry';
import { Palette, Type, Image as ImageIcon, Save, Check, RotateCcw, DownloadCloud, Sparkles } from 'lucide-react';
import { downloadProjectManifest } from '@/lib/export/exportEngine';
import { mockGenerateContentForBusiness } from '@/lib/ai/mockGenerate';

interface EditorSidebarProps {
  project: ProjectDefinition;
  onChange: (updatedProject: ProjectDefinition) => void;
  onSave: () => void;
}

export function EditorSidebar({ project, onChange, onSave }: EditorSidebarProps) {
  const [activeTab, setActiveTab] = useState<'content' | 'theme' | 'ai'>('content');
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const template = getTemplateById(project.templateId);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!template) return <div className="p-4 text-red-500">תבנית לא קיימת</div>;

  const handleExport = () => downloadProjectManifest(project);

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    const result = await mockGenerateContentForBusiness({
      businessName: project.projectName,
      businessType: project.businessType,
      city: 'תל אביב',
      shortDescription: 'השירות המקצועי ביותר באחריות.',
      services: ['שירות מהיר'],
      targetAudience: 'כולם',
      writingStyle: 'שיווקי'
    });
    
    onChange({
      ...project,
      content: { ...project.content, ...result.content }
    });
    setIsGenerating(false);
  };


  const handleContentChange = (key: string, value: any) => {
    onChange({
      ...project,
      content: { ...project.content, [key]: value }
    });
  };

  const handleThemeChange = (key: string, value: string) => {
    onChange({
      ...project,
      theme: { ...project.theme, [key]: value }
    });
  };

  const resetTheme = () => {
    onChange({ ...project, theme: template.defaultTheme });
  };

  return (
    <div className="w-[400px] h-screen bg-white border-l shadow-2xl flex flex-col relative z-20 shrink-0">
      
      {/* Header Info */}
      <div className="p-6 border-b shrink-0 bg-slate-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-xl text-slate-800 hidden md:block">מצב עריכה</h2>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleExport}
              className="bg-slate-200 text-slate-700 p-2 rounded-lg hover:bg-slate-300 transition shadow-sm"
              title="ייצא פרויקט כקובץ"
            >
              <DownloadCloud className="w-4 h-4" />
            </button>
            <button 
              onClick={onSave}
              className="bg-primary text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:bg-primary/90 transition flex items-center gap-2 text-sm"
            >
              <Save className="w-4 h-4" /> שמור שינויים
            </button>
          </div>
        </div>
        <input 
          type="text" 
          value={project.projectName}
          onChange={(e) => onChange({ ...project, projectName: e.target.value })}
          className="w-full font-bold text-lg border-b border-transparent hover:border-gray-300 focus:border-primary focus:bg-white outline-none bg-transparent transition-colors px-1 py-1" 
          placeholder="שם הפרויקט"
        />
        <div className="text-xs text-slate-500 mt-1 mr-1 font-mono">/{project.slug}</div>
      </div>

      {/* Tabs */}
      <div className="flex border-b bg-white shrink-0">
        <button 
          className={`flex-1 py-4 font-medium text-sm flex justify-center items-center gap-2 border-b-2 transition-colors ${activeTab === 'content' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          onClick={() => setActiveTab('content')}
        >
          <Type className="w-4 h-4" /> תוכן
        </button>
        <button 
          className={`flex-1 py-4 font-medium text-sm flex justify-center items-center gap-2 border-b-2 transition-colors ${activeTab === 'theme' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          onClick={() => setActiveTab('theme')}
        >
          <Palette className="w-4 h-4" /> עיצוב וצבעים
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50 relative p-4 space-y-4">
        
        {activeTab === 'content' && (
          <div className="space-y-4">
            <button 
              onClick={handleGenerateAI}
              disabled={isGenerating}
              className={`w-full py-3 rounded-xl border border-indigo-200 shadow-sm flex items-center justify-center gap-2 font-bold transition-all ${isGenerating ? 'bg-indigo-50 text-indigo-300' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:shadow-md'}`}
            >
              <Sparkles className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
              {isGenerating ? 'ה-AI כותב עבורך לחשים קסומים...' : 'צור תוכן אוטומטי בעזרת AI'}
            </button>
            
            {template.sections.map((section) => (
              <div key={section.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <button 
                  className="w-full p-4 flex justify-between items-center font-bold text-slate-800 hover:bg-slate-50 transition-colors text-right outline-none"
                  onClick={() => setActiveSectionId(activeSectionId === section.id ? null : section.id)}
                >
                  <span>{section.name}</span>
                  <span className={`text-slate-400 transform transition-transform ${activeSectionId === section.id ? 'rotate-180' : ''}`}>▼</span>
                </button>
                
                {activeSectionId === section.id && (
                  <div className="p-4 pt-0 space-y-4 border-t border-slate-100 mt-2 bg-slate-50/50">
                    {section.fields.map((field) => (
                      <div key={field.id}>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">{field.label}</label>
                        {field.type === 'text' && (
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 ring-primary/20 outline-none transition-shadow"
                            value={project.content[field.id] || ''}
                            onChange={(e) => handleContentChange(field.id, e.target.value)}
                          />
                        )}
                        {field.type === 'textarea' && (
                          <textarea 
                            rows={3}
                            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 ring-primary/20 outline-none transition-shadow resize-y"
                            value={project.content[field.id] || ''}
                            onChange={(e) => handleContentChange(field.id, e.target.value)}
                          />
                        )}
                        {field.type === 'image' && (
                          <div className="flex items-center gap-2">
                            <input 
                              type="text" 
                              className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                              placeholder="URL לתמונה"
                              value={project.content[field.id] || ''}
                              onChange={(e) => handleContentChange(field.id, e.target.value)}
                            />
                            <label 
                              className="w-10 h-10 cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-600 flex items-center justify-center shrink-0 transition-colors shadow-sm"
                              title="העלאת תמונה מהמחשב"
                            >
                              <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden" 
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onload = (ev) => handleContentChange(field.id, ev.target?.result);
                                    reader.readAsDataURL(file);
                                  }
                                }}
                              />
                              <ImageIcon className="w-4 h-4" />
                            </label>
                          </div>
                        )}
                        {['services', 'testimonials'].includes(field.type) && (
                          <div className="text-xs text-amber-600 bg-amber-50 p-2 rounded-lg border border-amber-100 flex items-center gap-2">
                            <Check className="w-3 h-3" />
                            עריכת מערכים זמינה בגרסת הפרו
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'theme' && (
          <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-slate-800">צבעי המותג</h3>
              <button 
                onClick={resetTheme}
                className="text-xs text-slate-500 hover:text-primary flex items-center gap-1 transition"
              >
                <RotateCcw className="w-3 h-3" /> שחזר למקור
              </button>
            </div>
            
            <div className="space-y-4">
              <ColorPicker 
                label="צבע ראשי" 
                value={project.theme.primary} 
                onChange={(v) => handleThemeChange('primary', v)} 
              />
              <ColorPicker 
                label="צבע משני" 
                value={project.theme.secondary} 
                onChange={(v) => handleThemeChange('secondary', v)} 
              />
              <ColorPicker 
                label="צבע רקע דף" 
                value={project.theme.background} 
                onChange={(v) => handleThemeChange('background', v)} 
              />
              <ColorPicker 
                label="צבע טקסט ראשי" 
                value={project.theme.text} 
                onChange={(v) => handleThemeChange('text', v)} 
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function ColorPicker({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
  return (
    <div className="flex items-center justify-between group">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="flex items-center gap-3">
        <span className="text-xs text-slate-400 font-mono uppercase bg-slate-50 px-2 py-1 rounded">{value}</span>
        <label className="relative flex cursor-pointer hover:scale-110 transition-transform">
          <input 
            type="color" 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
          />
          <div 
            className="w-8 h-8 rounded-full border-2 border-slate-200/50 shadow-inner" 
            style={{ backgroundColor: value }}
          ></div>
        </label>
      </div>
    </div>
  );
}
