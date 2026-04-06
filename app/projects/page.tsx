"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProjectDefinition } from '@/types';
import { getProjects, deleteProject, duplicateProject } from '@/lib/projects/storage';
import { templates } from '@/lib/templates/registry';
import { motion } from 'framer-motion';
import { Edit, Play, Copy, Trash2, Plus, Clock, Globe } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectDefinition[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setProjects(getProjects());
    setIsClient(true);
  }, []);

  const handleDelete = (id: string) => {
    if (confirm('האם אתה בטוח שברצונך למחוק את הפרויקט? לא ניתן לשחזר זאת.')) {
      deleteProject(id);
      setProjects(getProjects());
    }
  };

  const handleDuplicate = (id: string) => {
    const duplicated = duplicateProject(id, `עותק של פרויקט`);
    if (duplicated) {
      setProjects(getProjects());
    }
  };

  if (!isClient) return null; // Avoid hydration mismatch

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">הפרויקטים שלי</h1>
          <p className="text-gray-600">נהל את דפי הנחיתה והאתרים שלך מלוח בקרה אחד.</p>
        </div>
        <Link 
          href="/templates"
          className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          <span>פרויקט חדש</span>
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-16 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-gray-400">
            <Globe className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">עדיין אין פרויקטים</h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            כאן יופיעו כל דפי הנחיתה והאתרים שתיצור. בחר תבנית כדי להתחיל ולהראות לעולם את העסק שלך.
          </p>
          <Link 
            href="/templates"
            className="inline-flex bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-md"
          >
            גלוש לספריית התבניות
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const template = templates.find(t => t.id === project.templateId);
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={project.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">{project.projectName}</h3>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded">
                      {template?.name || 'תבנית כללית'}
                    </span>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${project.status === 'published' ? 'bg-emerald-500' : 'bg-gray-300'}`} title={project.status} />
                </div>
                
                <div className="flex items-center text-xs text-gray-500 mb-6 gap-1 bg-gray-50 p-2 rounded-lg inline-flex max-w-max">
                  <Clock className="w-3 h-3" />
                  <span>עודכן לאחרונה: {new Date(project.updatedAt).toLocaleDateString('he-IL')}</span>
                </div>
                
                <div className="mt-auto grid grid-cols-2 sm:grid-cols-4 gap-2 border-t pt-4">
                  <Link 
                    href={`/projects/${project.id}/edit`}
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors col-span-2"
                  >
                    <Edit className="w-5 h-5 mb-1" />
                    <span className="text-xs font-semibold">ערוך</span>
                  </Link>
                  
                  <Link 
                    href={`/preview/${project.slug}`}
                    target="_blank"
                    className="flex flex-col items-center justify-center p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
                    title="תצוגה מקדימה"
                  >
                    <Play className="w-5 h-5 mb-1" />
                    <span className="text-xs">הצץ</span>
                  </Link>
                  
                  <button 
                    onClick={() => handleDelete(project.id)}
                    className="flex flex-col items-center justify-center p-2 rounded-xl text-red-500 hover:bg-red-50 transition-colors"
                    title="מחק"
                  >
                    <Trash2 className="w-5 h-5 mb-1" />
                    <span className="text-xs">מחק</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
