import { TemplateDefinition } from '@/types';

export const engineerTemplate: TemplateDefinition = {
  id: 'tmpl-engineer',
  name: 'הנדסה וביצוע',
  description: 'תבנית תעשייתית, טכנית ומרשימה. מצוינת לקבלנים, מהנדסים ושירותים טכניים מקצועיים.',
  businessType: 'engineering',
  previewImage: '/previews/engineering.webp',
  defaultTheme: {
    primary: '#f59e0b', // amber 500
    secondary: '#1f2937', // gray 800
    background: '#111827', // dark mode default
    text: '#ffffff',
    buttonText: '#111827',
  },
  sections: [
    {
      id: 'hero',
      type: 'hero',
      name: 'חלק עליון',
      fields: [
        { id: 'heroTitle', type: 'text', label: 'כותרת ראשית' },
        { id: 'heroSubtitle', type: 'textarea', label: 'תת כותרת' },
        { id: 'heroImage', type: 'image', label: 'תמונת רקע' }
      ]
    },
    {
      id: 'services',
      type: 'services',
      name: 'המומחיות שלנו',
      fields: [
        { id: 'servicesTitle', type: 'text', label: 'כותרת התמחות' },
        { id: 'servicesList', type: 'services', label: 'תחומי עשייה' }
      ]
    },
    {
      id: 'projects',
      type: 'testimonials', // Can reuse testimonial visual for short project summaries
      name: 'פרויקטים נבחרים',
      fields: [
        { id: 'testimonialsTitle', type: 'text', label: 'כותרת פרויקטים' },
        { id: 'testimonialsList', type: 'testimonials', label: 'קצת מהשטח' }
      ]
    },
    {
      id: 'contact',
      type: 'contact',
      name: 'יצירת קשר',
      fields: [
        { id: 'contactTitle', type: 'text', label: 'כותרת פנייה' },
        { id: 'contactPhone', type: 'text', label: 'מספר טלפון' },
        { id: 'contactAddress', type: 'text', label: 'כתובת המשרד' }
      ]
    }
  ],
  defaultContent: {
    heroTitle: 'בונים את מחר. מנהלים ביצוע במקסימום דיוק.',
    heroSubtitle: 'אנו חברת הנדסה אזרחית המתמחה בניהול פרויקטים, פיקוח עליון ותכנון כלכלי ליזמים, קבלנים וגופים מוסדיים בישראל.',
    heroImage: 'https://images.unsplash.com/photo-1541888081622-1b15cff6c8cb?auto=format&fit=crop&q=80&w=1200&h=800',
    servicesTitle: 'השירותים המקצועיים שלנו',
    servicesList: [
      { title: 'ניהול ופיקוח פרויקטים', description: 'ליווי הפרויקט משלב הייזום והתכנון ועד למסירת המפתח תוך עמידה בלוחות זמנים ותקציב.', icon: 'clipboard' },
      { title: 'בקרת איכות ותקנים', description: 'בדיקות שטח שוטפות והבטחת עבודה על פי דרישות מכון התקנים והבטיחות.', icon: 'shield' },
      { title: 'תכנון קונסטרוקציה', description: 'תכנון מקיף למבנים תעשייתיים, מגורים ומסחר, תוך אופטימיזציה של עלויות ביצוע.', icon: 'building' }
    ],
    testimonialsTitle: 'קורות נדל"ן מניב בישראל',
    testimonialsList: [
      { name: 'קבוצת בניין אלפא', text: 'ההתנהלות המקצועית הפכה את הקמת המגדל לחלקה ומסודרת, מנעו חריגות תקציב אדירות.', rating: 5 },
      { name: 'אחים לוי יזמות', text: 'רמת השירות והבקרה על קבלני המשנה הייתה מהגבוהות שנתקלנו בהן.', rating: 5 }
    ],
    contactTitle: 'לשאלות והצעות מחיר, צרו קשר',
    contactPhone: '09-8877665',
    contactAddress: 'אזור התעשייה, פולג, נתניה'
  }
};
