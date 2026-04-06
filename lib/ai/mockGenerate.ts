import { AIGenerationInput, AIGenerationOutput } from '@/types';

// In a real application, this would call OpenAI/Anthropic/Gemini APIs
export async function mockGenerateContentForBusiness(input: AIGenerationInput): Promise<AIGenerationOutput> {
  return new Promise((resolve) => {
    // Simulate network delay to make it feel real
    setTimeout(() => {
      let content: Record<string, string> = {
        heroTitle: `${input.businessName} - מצוינות מותאמת אישית`,
        heroSubtitle: `אנו ב-${input.businessName} מציעים שירות מנצח בעיר ${input.city}. ${input.shortDescription}. מותאם במיוחד עבור ${input.targetAudience}.`,
        aboutTitle: `מי אנחנו? ${input.businessName}`,
        aboutText: `החזון שלנו הוא לתת ללקוחות שלנו את השירות המקיף ביותר, בשילוב עם תמיכה מתמדת לאורך כל הדרך. ההתמקדות שלנו היא ביצירת ביטחון וסינרגיה עבורכם.`,
      };

      // Mock varying content dynamically based on inputs
      if (input.services.length > 0) {
        content['servicesTitle'] = `המגוון המקצועי שלנו`;
      }

      if (input.businessType === 'dentist') {
        content['contactTitle'] = 'קבעו תור לבדיקת שיניים היום';
        content['heroTitle'] = `חיוך חדש מתחיל כאן ב-${input.businessName}`;
      } else if (input.businessType === 'fitness') {
        content['contactTitle'] = 'בואו להזיע איתנו ולהשיג תוצאות';
        content['heroTitle'] = `לפרוץ את הגבולות שלכם עם ${input.businessName}`;
      }

      resolve({
        content,
        // Mock returning a slightly different theme randomly or based on input ideally
      });
    }, 2500); 
  });
}
