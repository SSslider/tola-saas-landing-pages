"use client";

import { useEffect, useState, use } from 'react';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/projects/storage';
import { RenderProject } from '@/components/engine/RenderProject';
import { ProjectDefinition } from '@/types';

export default function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [project, setProject] = useState<ProjectDefinition | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = decodeURIComponent(resolvedParams.slug);
    const p = getProjectBySlug(slug);
    if (!p) {
      // simulate 404 behavior locally if project not found
      setLoading(false);
      return;
    }
    setProject(p);
    setLoading(false);
  }, [resolvedParams.slug]);

  if (loading) return <div className="h-screen w-full flex items-center justify-center bg-gray-50 text-gray-400 font-medium">טוען את התצוגה המקדימה...</div>;
  if (!project) return <div className="h-screen w-full flex items-center justify-center bg-gray-50 text-red-500 font-bold text-2xl">שגיאה 404: האתר לא נמצא</div>;

  return (
    <>
      {/* Optional Preview Banner */}
      <div className="bg-primary text-white text-center py-2 text-sm font-medium sticky top-0 z-[100] shadow-md flex justify-center items-center gap-4">
        <span>מצב תצוגה מקדימה פנימי למפתחים / עריכה</span>
        <button className="bg-white/20 px-3 py-1 rounded hover:bg-white/30 transition text-xs" onClick={() => window.close()}>סגור חלונית</button>
      </div>
      <RenderProject project={project} />
    </>
  );
}
