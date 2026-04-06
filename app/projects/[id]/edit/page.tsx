"use client";

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { ProjectDefinition } from '@/types';
import { getProjectById, saveProject } from '@/lib/projects/storage';
import { EditorSidebar } from '@/components/editor/EditorSidebar';
import { RenderProject } from '@/components/engine/RenderProject';
import { motion } from 'framer-motion';
import { ArrowLeft, Monitor, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  
  const [project, setProject] = useState<ProjectDefinition | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [savedStatus, setSavedStatus] = useState<'saved' | 'unsaved' | 'saving'>('saved');

  useEffect(() => {
    setIsClient(true);
    const p = getProjectById(resolvedParams.id);
    if (!p) {
      router.replace('/projects');
    } else {
      setProject(p);
    }
  }, [resolvedParams.id, router]);

  const handleProjectUpdate = (updated: ProjectDefinition) => {
    setProject(updated);
    setSavedStatus('unsaved');
  };

  const handleSave = () => {
    if (!project) return;
    setSavedStatus('saving');
    setTimeout(() => {
      saveProject(project);
      setSavedStatus('saved');
    }, 500); // Simulate network
  };

  if (!isClient || !project) return <div className="h-screen flex items-center justify-center font-medium bg-slate-50">טוען סביבת עריכה...</div>;

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-900 absolute top-0 left-0 z-50">
      
      {/* SIDEBAR EDITOR */}
      <EditorSidebar 
        project={project} 
        onChange={handleProjectUpdate} 
        onSave={handleSave} 
      />

      {/* PREVIEW CONTAINER */}
      <div className="flex-1 flex flex-col items-center h-full max-h-screen relative overflow-hidden">
        
        {/* Editor Topbar */}
        <div className="w-full absolute top-0 left-0 right-0 h-16 bg-slate-900/90 backdrop-blur border-b border-white/10 flex items-center justify-between px-6 z-10 text-white shadow-sm">
          <Link href="/projects" className="flex items-center gap-2 hover:text-primary transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> חזור ללוח בקרה
          </Link>
          
          <div className="flex items-center bg-slate-800 rounded-lg p-1">
            <button 
              className={`p-2 rounded-md transition-colors ${previewMode === 'desktop' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setPreviewMode('desktop')}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button 
              className={`p-2 rounded-md transition-colors ${previewMode === 'mobile' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setPreviewMode('mobile')}
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-slate-400">
              {savedStatus === 'saved' && 'כל השינויים שמורים ✔'}
              {savedStatus === 'unsaved' && 'ישנם שינויים שלא נשמרו'}
              {savedStatus === 'saving' && 'שומר שינויים...'}
            </span>
            <a 
              href={`/preview/${project.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-emerald-500 hover:text-white transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              צפה באתר החי
            </a>
          </div>
        </div>

        {/* Live Preview Frame */}
        <div className="flex-1 w-full pt-16 flex justify-center items-center overflow-hidden relative">
          <motion.div 
            layout
            initial={false}
            animate={{ 
              width: previewMode === 'desktop' ? '100%' : '375px',
              height: previewMode === 'desktop' ? '100%' : '812px',
              borderRadius: previewMode === 'desktop' ? '0px' : '40px',
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`bg-white shadow-2xl relative overflow-hidden ${previewMode === 'mobile' ? 'ring-8 ring-slate-800 my-8' : ''}`}
          >
            <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth relative pointer-events-none sm:pointer-events-auto">
              <RenderProject project={project} />
            </div>
            
            {/* Mobile Frame Notch (Visual Only) */}
            {previewMode === 'mobile' && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-800 rounded-b-3xl z-50"></div>
            )}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
