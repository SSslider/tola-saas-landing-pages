"use client";

import { useEffect, useState, use } from 'react';
import { getProjectBySlug } from '@/lib/projects/storage';
import { RenderProject } from '@/components/engine/RenderProject';
import { ProjectDefinition } from '@/types';

export default function PublicSitePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [project, setProject] = useState<ProjectDefinition | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real DB, you would have a public fetch here. Using mock local persistence for now.
    const slug = decodeURIComponent(resolvedParams.slug);
    const p = getProjectBySlug(slug);
    setProject(p || null);
    setLoading(false);
  }, [resolvedParams.slug]);

  if (loading) return <div className="h-screen w-full flex items-center justify-center bg-white"><div className="w-10 h-10 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div></div>;
  
  if (!project || project.status !== 'published') {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">האתר אינו זמין</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">ייתכן שהדף הוסר, לא פורסם עדיין או שהקישור שבור.</p>
        <a href="/" className="text-primary font-bold bg-primary/10 px-6 py-3 rounded-full hover:bg-primary/20 transition">Powered by Tola SaaS</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <RenderProject project={project} />
    </div>
  );
}
