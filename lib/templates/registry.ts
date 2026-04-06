import { TemplateDefinition } from '@/types';
import { dentistTemplate } from './data/dentist';
import { lawyerTemplate } from './data/lawyer';
import { fitnessTemplate } from './data/fitness';
import { travelTemplate } from './data/travel';
import { beautyTemplate } from './data/beauty';
import { engineerTemplate } from './data/engineering';
import { realEstateTemplate } from './data/realEstate';
import { restaurantTemplate } from './data/restaurant';
import { consultingTemplate } from './data/consulting';
import { plumberTemplate } from './data/plumber';
import { photographerTemplate } from './data/photographer';

export const templates: TemplateDefinition[] = [
  dentistTemplate,
  lawyerTemplate,
  fitnessTemplate,
  travelTemplate,
  beautyTemplate,
  engineerTemplate,
  realEstateTemplate,
  restaurantTemplate,
  consultingTemplate,
  plumberTemplate,
  photographerTemplate
];

export function getTemplateById(id: string): TemplateDefinition | undefined {
  return templates.find(t => t.id === id);
}

export function getTemplatesByBusiness(businessType: string): TemplateDefinition[] {
  return templates.filter(t => t.businessType === businessType);
}
