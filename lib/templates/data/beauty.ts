import { TemplateDefinition } from '@/types';

export const beautyTemplate: TemplateDefinition = {
  id: 'tmpl-beauty',
  name: 'מספרה ומכון יופי',
  description: 'תבנית אלגנטית, מלאת סטייל ושיק. מותאמת למספרות, קוסמטיקאיות וציפורניים.',
  businessType: 'beauty',
  previewImage: '/previews/beauty.webp',
  defaultTheme: {
    primary: '#db2777', // pink 600
    secondary: '#fdf2f8', // pink 50
    background: '#ffffff',
    text: '#171717',
    buttonText: '#ffffff',
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
      name: 'טיפולים נבחרים',
      fields: [
        { id: 'servicesTitle', type: 'text', label: 'כותרת מטריצת הטיפולים' },
        { id: 'servicesList', type: 'services', label: 'טיפולים שונים' }
      ]
    },
    {
      id: 'gallery', // mapped as testimonials visually but can be altered
      type: 'about',
      name: 'לקוחות זוהרות',
      fields: [
        { id: 'aboutTitle', type: 'text', label: 'כותרת השראה' },
        { id: 'aboutText', type: 'textarea', label: 'טקסט אודות החדווה במקצוע' },
        { id: 'aboutImage', type: 'image', label: 'תמונת דגל' }
      ]
    },
    {
      id: 'contact',
      type: 'contact',
      name: 'הזמנת תור',
      fields: [
        { id: 'contactTitle', type: 'text', label: 'כותרת הזמנה' },
        { id: 'contactPhone', type: 'text', label: 'טלפון למספרה' },
        { id: 'contactAddress', type: 'text', label: 'כתובת' }
      ]
    }
  ],
  defaultContent: {
    heroTitle: 'הפכי לגרסה הכי יפה של עצמך',
    heroSubtitle: 'מכון יופי וסטיילינג שמשלב ידע מקצועי וטכניקות מתקדמות על בניית קווי דיוק לפי תווי הפנים שלך.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200&h=800',
    servicesTitle: 'שירותי הביוטי שלנו',
    servicesList: [
      { title: 'עיצוב ותספורות', description: 'תספורות קלאסיות ומודרניות, התאמת צבע מושלם על ידי מומחה לכימיה של השיער.', icon: 'scissors' },
      { title: 'החלקות אורגניות', description: 'תהליך טבעי ובטוח לחלוטין שמעניק שיער חלק כמשי, מבריק ובריא.', icon: 'sparkles' },
      { title: 'מניקור ופדיקור מוקפד', description: 'פינוק מלא לכפות הידיים והרגליים בחומרים המובילים בעולם הפארם.', icon: 'heart' }
    ],
    aboutTitle: 'תשוקה לאסתטיקה ויופי',
    aboutText: 'כל לקוחה עבורנו היא בד חלק. הרצון הכן שלנו להעצים נשים ולגרום להן לצאת החוצה בחיוך וביטחון מוביל אותנו כבר מעל עשור.',
    aboutImage: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800&h=800',
    contactTitle: 'הזמיני תור עוד היום',
    contactPhone: '03-6655443',
    contactAddress: 'המסגר 10, בני ציון'
  }
};
