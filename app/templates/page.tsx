"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { templates } from '@/lib/templates/registry';
import { createNewProject } from '@/lib/projects/storage';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function TemplatesPage() {
  const router = useRouter();
  const [loadingTemplate, setLoadingTemplate] = useState<string | null>(null);

  const handleCreateProject = (template: typeof templates[0]) => {
    setLoadingTemplate(template.id);
    const projectName = `אתר ${template.name} חדש`;
    const newProject = createNewProject(
      template.id,
      projectName,
      template.businessType,
      template.defaultContent,
      template.defaultTheme
    );
    
    // Simulate slight delay for "creation"
    setTimeout(() => {
      router.push(`/projects/${newProject.id}/edit`);
    }, 600);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ספריית תבניות</h1>
        <p className="text-xl text-gray-600">בחרו את נקודת ההתחלה שלכם. כל התבניות בנויות לעסקים ישראליים ומוכנות להתאמה אישית מלאה.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, idx) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col"
          >
            <div className="h-48 relative overflow-hidden bg-gray-100 flex items-center justify-center">
              {/* Fallback pattern if image is missing */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${template.previewImage})` }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <button
                  onClick={() => handleCreateProject(template)}
                  disabled={loadingTemplate !== null}
                  className="bg-white text-gray-900 font-bold px-6 py-2 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
                >
                  {loadingTemplate === template.id ? 'מייצר פרויקט...' : 'בחר תבנית זו'}
                </button>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{template.name}</h3>
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                  {template.businessType}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {template.description}
              </p>
              
              <button
                onClick={() => handleCreateProject(template)}
                disabled={loadingTemplate !== null}
                className={`w-full py-3 rounded-xl font-medium transition-colors ${
                  loadingTemplate === template.id 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {loadingTemplate === template.id ? 'טוען...' : 'התחל עם תבנית זו'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
