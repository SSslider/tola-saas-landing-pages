import { TemplateDefinition } from '@/types';

export const plumberTemplate: TemplateDefinition = {
  id: 'tpl-plumber',
  name: 'אינסטלטור מורשה',
  description: 'עיצוב כחול-פרקטי ואמין לנותני שירותים ותיקונים באזור המרכז',
  businessType: 'plumbing',
  previewImage: 'https://images.unsplash.com/photo-1581094722880-9ce1d39b0ee7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  defaultTheme: {
    primary: '#0ea5e9', // sky-500
    secondary: '#f0f9ff', // sky-50
    background: '#ffffff',
    text: '#0f172a', // slate-900
    buttonText: '#ffffff',
    accent: '#38bdf8' // sky-400
  },
  sections: [
    {
      id: 'hero',
      type: 'hero',
      name: 'אזור פתיחה (Hero)',
      fields: [
        { id: 'heroTitle', label: 'כותרת ראשית', type: 'text' },
        { id: 'heroSubtitle', label: 'כותרת משנית', type: 'text' },
        { id: 'heroImage', label: 'תמונת רקע (URL)', type: 'image' }
      ]
    },
    {
      id: 'services',
      type: 'services',
      name: 'שירותי חירום',
      fields: [
        { id: 'servicesTitle', label: 'כותרת שירותים', type: 'text' }
      ]
    },
    {
      id: 'contact',
      type: 'contact',
      name: 'יצירת קשר לחירום',
      fields: [
        { id: 'contactTitle', label: 'כותרת', type: 'text' },
        { id: 'contactPhone', label: 'טלפון נייד זמין 24/7', type: 'text' },
        { id: 'contactWhatsApp', label: 'מספר בוואטסאפ', type: 'text' }
      ]
    }
  ],
  defaultContent: {
    heroTitle: 'פתרון מיידי לכל נזילה ותקלה',
    heroSubtitle: 'אינסטלטור מוסמך זמין 24/7, הגעה מהירה מרגע הקריאה עם ציוד מתקדם לפתרון ללא הרס.',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    servicesTitle: 'שירותי אינסטלציה כוללים',
    servicesList: [
      { title: 'איתור נזילות', description: 'איתור בעזרת מצלמה תרמית ללא שורש הרס, ומענה מהיר וחסכוני.' },
      { title: 'פתיחת סתימות', description: 'סתימות בצנרת ביוב או כיורים ביתיים נפתרות באופן מקצועי בשניות.' },
      { title: 'צילום קווי ביוב', description: 'מיפוי נזקים ומפגעים בתוך צינור הביוב בעזרת סיב אופטי.' }
    ],
    contactTitle: 'צריכים עזרה דחופה?',
    contactPhone: '052-9999999',
    contactWhatsApp: '052-9999999'
  }
};
