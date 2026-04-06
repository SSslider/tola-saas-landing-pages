import { TemplateDefinition } from '@/types';

export const travelTemplate: TemplateDefinition = {
  id: 'tmpl-travel',
  name: 'סוכנות נסיעות',
  description: 'תבנית אוורירית, צבעונית ומרגשת שמשדרת חופש ותשוקה לגילוי יעדים חדשים.',
  businessType: 'travel',
  previewImage: '/previews/travel.webp',
  defaultTheme: {
    primary: '#14b8a6', // teal 500
    secondary: '#ccfbf1', // teal 50
    background: '#ffffff',
    text: '#0f172a',
    buttonText: '#ffffff',
    accent: '#f59e0b'
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
      id: 'destinations',
      type: 'services', // Can be styled as cards
      name: 'יעדים נבחרים',
      fields: [
        { id: 'destTitle', type: 'text', label: 'כותרת יעדים' },
        { id: 'destList', type: 'services', label: 'רשימת יעדים' }
      ]
    },
    {
      id: 'about',
      type: 'about',
      name: 'למה לנסוע איתנו',
      fields: [
        { id: 'aboutTitle', type: 'text', label: 'כותרת פסקה' },
        { id: 'aboutText', type: 'textarea', label: 'תיאור קצר' },
        { id: 'aboutImage', type: 'image', label: 'תמונת אווירה' }
      ]
    },
    {
      id: 'contact',
      type: 'contact',
      name: 'צור קשר',
      fields: [
        { id: 'contactTitle', type: 'text', label: 'כותרת פניה' },
        { id: 'contactText', type: 'textarea', label: 'טקסט הנעה לפעולה' },
        { id: 'contactWhatsApp', type: 'text', label: 'מספר וואטסאפ ללינק' }
      ]
    }
  ],
  defaultContent: {
    heroTitle: 'החופשה המושלמת שלך מתחילה כאן',
    heroSubtitle: 'אנו מתמחים בהרכבת חבילות נופש וטיולים מאורגנים בהתאמה אישית לכל נקודה על הגלובוס.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200&h=800',
    destTitle: 'היעדים הכי חמים לקיץ הקרוב',
    destList: [
      { title: 'היים המלדיביים', description: 'חופים לבנים, מי טורקיז, וריזורטים שמרגישים כמו חלקת גן עדן אבודה.', icon: 'sun' },
      { title: 'טוקיו, יפן', description: 'שילוב מרהיב בין טכנולוגיית עתיד למסורת בת אלפי שנים.', icon: 'camera' },
      { title: 'טוסקנה, איטליה', description: 'קולינריה עשירה, כפרים ציוריים וכרמים שמשתרעים עד האופק.', icon: 'map' }
    ],
    aboutTitle: 'יותר מסתם טיסה. חוויה שלמה.',
    aboutText: 'הסוכנים שלנו מבקרים אישית בכל מלון ובכל מסלול כדי לוודא שאתם מקבלים את החוויה המיטבית והאותנטית ביותר שיש למקום להציע.',
    aboutImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800&h=800',
    contactTitle: 'מוכנים לארוז מזוודה?',
    contactText: 'המומחים שלנו ממתינים לכם כעת בוואטסאפ לשיחת תכנון חופשה ללא עלות.',
    contactWhatsApp: '052-1112233'
  }
};
