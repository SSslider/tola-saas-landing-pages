import { ProjectDefinition } from '@/types';
import { getTemplateById } from '@/lib/templates/registry';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';
import { AboutSection } from './sections/AboutSection';

interface RenderProjectProps {
  project: ProjectDefinition;
}

export function RenderProject({ project }: RenderProjectProps) {
  const template = getTemplateById(project.templateId);
  
  if (!template) {
    return <div className="p-8 text-center text-red-500">תבנית לא נמצאה</div>;
  }

  // Inject CSS variables for the theme dynamically
  const style = {
    '--theme-primary': project.theme.primary,
    '--theme-secondary': project.theme.secondary,
    '--theme-bg': project.theme.background,
    '--theme-text': project.theme.text,
    '--theme-btn-text': project.theme.buttonText || '#ffffff',
    '--theme-accent': project.theme.accent || project.theme.primary,
    backgroundColor: 'var(--theme-bg)',
    color: 'var(--theme-text)',
  } as React.CSSProperties;

  return (
    <div id="tola-render-root" className="@container w-full min-h-screen flex flex-col font-sans" style={style}>
      {template.sections.map((section, idx) => {
        const SectionComponent = getSectionComponent(section.type);
        if (!SectionComponent) return null;
        
        return (
          <SectionComponent 
            key={section.id} 
            content={project.content} 
            theme={project.theme} 
            index={idx}
          />
        );
      })}
    </div>
  );
}

function getSectionComponent(type: string) {
  switch (type) {
    case 'hero':
      return HeroSection;
    case 'services':
      return ServicesSection;
    case 'about':
      return AboutSection;
    case 'testimonials':
      return TestimonialsSection;
    case 'contact':
      return ContactSection;
    default:
      return null;
  }
}
