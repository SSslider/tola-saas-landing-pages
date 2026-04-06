export type BusinessType = 
  | 'dentist' 
  | 'lawyer' 
  | 'fitness' 
  | 'travel' 
  | 'beauty' 
  | 'engineering'
  | 'real-estate'
  | 'restaurant'
  | 'consulting'
  | 'plumbing'
  | 'photography';

export interface ThemeDefinition {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  buttonText?: string;
  accent?: string;
}

export type EditorFieldType = 'text' | 'textarea' | 'image' | 'color' | 'list' | 'faq' | 'services' | 'testimonials';

export interface EditorFieldDefinition {
  id: string;
  label: string;
  type: EditorFieldType;
  options?: any; // For custom configurations
}

export interface TemplateSection {
  id: string;
  type: string;
  name: string;
  fields: EditorFieldDefinition[];
}

export interface TemplateDefinition {
  id: string;
  name: string;
  description: string;
  businessType: BusinessType;
  previewImage: string;
  defaultTheme: ThemeDefinition;
  sections: TemplateSection[];
  defaultContent: Record<string, any>;
}

export interface ProjectDefinition {
  id: string;
  templateId: string;
  projectName: string;
  slug: string;
  businessType: BusinessType;
  content: Record<string, any>;
  theme: ThemeDefinition;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface AIGenerationInput {
  businessName: string;
  businessType: string;
  city: string;
  shortDescription: string;
  services: string[];
  targetAudience: string;
  writingStyle: string;
}

export interface AIGenerationOutput {
  content: Record<string, any>;
  theme?: Partial<ThemeDefinition>;
}
