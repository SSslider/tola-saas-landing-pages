import { TemplateDefinition } from '@/types';

export const realEstateTemplate: TemplateDefinition = {
  id: 'tpl-real-estate',
  name: 'סוכנות נדל"ן',
  description: 'עיצוב יוקרתי ואמין למתווכים וסוכנויות נדל"ן',
  businessType: 'real-estate',
  previewImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  defaultTheme: {
    primary: '#1d4ed8', // blue-700
    secondary: '#f1f5f9', // slate-100
    background: '#ffffff',
    text: '#1e293b', // slate-800
    buttonText: '#ffffff',
    accent: '#bfdbfe' // blue-200
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
      name: 'שירותי המשרד',
      fields: [
        { id: 'servicesTitle', label: 'כותרת שירותים', type: 'text' }
      ]
    },
    {
      id: 'contact',
      type: 'contact',
      name: 'טופס יצירת קשר',
      fields: [
        { id: 'contactTitle', label: 'כותרת', type: 'text' },
        { id: 'contactPhone', label: 'טלפון', type: 'text' },
        { id: 'contactAddress', label: 'כתובת המשרד', type: 'text' }
      ]
    }
  ],
  defaultContent: {
    heroTitle: 'מוצאים לכם את בית החלומות',
    heroSubtitle: 'מלווים אתכם מהחיפוש הראשון ועד לקבלת המפתח, במקצוענות ושקיפות מלאה.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    servicesTitle: 'השירותים שלנו',
    servicesList: [
      { title: 'מכירת נכסים', description: 'שיווק בלעדי, צילום מקצועי וליווי למכירה מהירה.' },
      { title: 'קניית דירות', description: 'איתור מדויק של הנכס הבא בהתאם לתקציב ולצרכים.' },
      { title: 'נדל"ן מסחרי', description: 'משרדים, חנויות ואולמות באזורי הביקוש החמים.' }
    ],
    contactTitle: 'קבעו פגישת ייעוץ חינם',
    contactPhone: '050-0000000',
    contactAddress: 'שדרות רוטשילד 1, תל אביב'
  }
};
