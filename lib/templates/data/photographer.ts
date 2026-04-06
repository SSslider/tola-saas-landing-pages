import { TemplateDefinition } from '@/types';

export const photographerTemplate: TemplateDefinition = {
  id: 'tpl-photographer',
  name: 'צלם אירועים',
  description: 'קונספט שחור-לבן מינימליסטי לאנשי אומנות וצילום',
  businessType: 'photography',
  previewImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  defaultTheme: {
    primary: '#000000', // black
    secondary: '#171717', // neutral-900
    background: '#0a0a0a', // neutral-950
    text: '#ffffff', // white
    buttonText: '#ffffff',
    accent: '#525252' // neutral-500
  },
  sections: [
    {
      id: 'hero',
      type: 'hero',
      name: 'אזור פתיחה (Hero)',
      fields: [
        { id: 'heroTitle', label: 'כותרת ראשית', type: 'text' },
        { id: 'heroSubtitle', label: 'כותרת משנית', type: 'text' },
        { id: 'heroImage', label: 'תמונת רקע - תמונת הדגל שלכם', type: 'image' }
      ]
    },
    {
      id: 'services',
      type: 'services',
      name: 'חבילות הצילום',
      fields: [
        { id: 'servicesTitle', label: 'כותרת חבילות', type: 'text' }
      ]
    },
    {
      id: 'about',
      type: 'about',
      name: 'הזווית שלי',
      fields: [
        { id: 'aboutTitle', label: 'כותרת עליי', type: 'text' },
        { id: 'aboutText', label: 'עליכם בכמה מילים', type: 'textarea' },
        { id: 'aboutImage', label: 'תמונת פרופיל שלכם', type: 'image' }
      ]
    },
    {
      id: 'contact',
      type: 'contact',
      name: 'לשריין תאריך',
      fields: [
        { id: 'contactTitle', label: 'כותרת יצירת קשר', type: 'text' },
        { id: 'contactWhatsApp', label: 'ווטסאפ לבירורים', type: 'text' },
        { id: 'contactEmail', label: 'אימייל לקבלת הצעת מחיר', type: 'text' }
      ]
    }
  ],
  defaultContent: {
    heroTitle: 'מתעדים את הרגעים היפים ביותר בחיים שלכם',
    heroSubtitle: 'צילום בגובה העיניים, אומנותי וטבעי, כדי שכל תמונה תספר את הסיפור האמיתי.',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    servicesTitle: 'סגנונות הצילום שלי',
    servicesList: [
      { title: 'חתונות', description: 'ליווי אישי מבוקר ההתארגנות ועד השעות הקטנות של המסיבה בדיוק שחודר ללב.' },
      { title: 'צילומי זוגיות', description: 'סשן נינוח בטבע שמטרתו לחגוג את האהבה שלכם בלי פוזות מאומצות.' },
      { title: 'אירועי צהריים', description: 'בריתות, בר מצוות ואירועים קטנים ואינטימיים במעטפת מושלמת.' }
    ],
    aboutTitle: 'העין מאחורי העדשה',
    aboutText: 'אני חי ונושם צילום כבר מעל עשור. הפילוסופיה שלי מתמקדת בלתפוס את האנשים בדיוק כפי שהם - אותנטיים, מרגשים ומלאי רגש. המצלמה היא רק כלי כדי להתחבר ולשמר זיכרונות משפחתיים לדורות הבאים.',
    aboutImage: 'https://images.unsplash.com/photo-1554062822-1ae1239aa8fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    contactTitle: 'בואו נבדוק מיקומים ותאריכים',
    contactWhatsApp: '055-5555555',
    contactEmail: 'hi@photo-studio.com'
  }
};
