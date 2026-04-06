import { ProjectDefinition } from '@/types';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'tola_projects';

export function getProjects(): ProjectDefinition[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function getProjectById(id: string): ProjectDefinition | undefined {
  const projects = getProjects();
  return projects.find((p) => p.id === id);
}

export function getProjectBySlug(slug: string): ProjectDefinition | undefined {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug);
}

export function saveProject(project: ProjectDefinition): void {
  if (typeof window === 'undefined') return;
  const projects = getProjects();
  const index = projects.findIndex((p) => p.id === project.id);
  
  const updatedProject = { ...project, updatedAt: new Date().toISOString() };
  
  if (index >= 0) {
    projects[index] = updatedProject;
  } else {
    projects.unshift(updatedProject); // Newest first
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function deleteProject(id: string): void {
  if (typeof window === 'undefined') return;
  const projects = getProjects();
  const filtered = projects.filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

// Helpers
export function generateSlug(name: string): string {
  // Very basic slug generation
  return name.trim().toLowerCase()
    .replace(/[^\w\sא-ת]/gi, '')
    .replace(/\s+/g, '-') + '-' + Math.floor(Math.random() * 1000);
}

export function createNewProject(
  templateId: string, 
  projectName: string, 
  businessType: any, 
  content: any, 
  theme: any
): ProjectDefinition {
  const newProject: ProjectDefinition = {
    id: uuidv4(),
    templateId,
    projectName,
    slug: generateSlug(projectName),
    businessType,
    content,
    theme,
    status: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  saveProject(newProject);
  return newProject;
}

export function duplicateProject(id: string, newName: string): ProjectDefinition | null {
  const original = getProjectById(id);
  if (!original) return null;
  
  const duplicated: ProjectDefinition = {
    ...original,
    id: uuidv4(),
    projectName: newName,
    slug: generateSlug(newName),
    status: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  saveProject(duplicated);
  return duplicated;
}
