import { TemplateDefinition } from '@/types';

export const consultingTemplate: TemplateDefinition = {
  id: 'tpl-consulting',
  name: 'ייעוץ עסקי',
  description: 'מראה נקי, הייטקי כסוף למומחים ויועצים עסקיים.',
  businessType: 'consulting',
  previewImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  defaultTheme: {
    primary: '#0f172a', // slate-900
    secondary: '#f8fafc', // slate-50
    background: '#ffffff',
    text: '#334155', // slate-700
    buttonText: '#ffffff',
    accent: '#cbd5e1' // slate-300
  },
  sections: [
    {
      id: 'hero',
      type: 'hero',
      name: 'אזור פתיחה (Hero)',
      fields: [
        { id: 'heroTitle', label: 'כותרת ראשית', type: 'text' },
        { id: 'heroSubtitle', label: 'כותרת משנית', type: 'text' }
      ]
    },
    {
      id: 'services',
      type: 'services',
      name: 'תחומי מומחיות',
      fields: [
        { id: 'servicesTitle', label: 'כותרת', type: 'text' }
      ]
    },
    {
      id: 'testimonials',
      type: 'testimonials',
      name: 'סיפורי הצלחה',
      fields: [
        { id: 'testimonialsTitle', label: 'כותרת', type: 'text' }
      ]
    },
    {
      id: 'contact',
      type: 'contact',
      name: 'תיאום פגישה',
      fields: [
        { id: 'contactTitle', label: 'כותרת', type: 'text' },
        { id: 'contactEmail', label: 'דואר אלקטרוני', type: 'text' },
        { id: 'contactPhone', label: 'טלפון משרד', type: 'text' }
      ]
    }
  ],
  defaultContent: {
    heroTitle: 'פיתוח והאצת עסקים',
    heroSubtitle: 'אסטרטגיה ברורה, יישום מדויק, ותוצאות בשטח. אנחנו כאן כדי לקחת את העסק שלכם לשלב הבא.',
    servicesTitle: 'מומחיות ממוקדת תוצאות',
    servicesList: [
      { title: 'ייעוץ ארגוני', description: 'שיפור תהליכים, בניית צוותים מנצחים וניהול שינויים ארגוניים המותאמים למאה ה-21.' },
      { title: 'ייעוץ פיננסי', description: 'בניית תקציב, ניהול תזרים מזומנים והשגת מימון לצמיחה עסקית.' },
      { title: 'אסטרטגיה שיווקית', description: 'מיפוי שוק, פילוח קהלים ובניית תוכנית חדירה מדויקת לרווחיות מקסימלית.' }
    ],
    testimonialsTitle: 'לקוחות שהזניקו את העסק',
    testimonialsList: [
      { name: 'דני רונן', text: 'העבודה המשותפת הכפילה את ההכנסות בתוך פחות משנה. מקצוענות ברמה אחרת.', rating: 5 },
      { name: 'מירי שחר', text: 'הבנה עמוקה של השוק ויכולת לפשט בעיות מורכבות לצעדים פרקטיים ויישמיים.', rating: 5 }
    ],
    contactTitle: 'זימון שיחת היכרות מלאה בערך',
    contactEmail: 'contact@consult-pro.co.il',
    contactPhone: '077-1234567'
  }
};
