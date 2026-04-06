import { TemplateDefinition } from '@/types';

export const fitnessTemplate: TemplateDefinition = {
  id: 'tmpl-fitness',
  name: 'מאמן כושר וסטודיו',
  description: 'תבנית ספורטיבית, מניעה לפעולה ודינמית לחדרי כושר, מאמנים אישיים ויוגה.',
  businessType: 'fitness',
  previewImage: '/previews/fitness.webp',
  defaultTheme: {
    primary: '#ef4444', // red 500
    secondary: '#171717', // neutral 900
    background: '#0a0a0a',
    text: '#ffffff',
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
      id: 'benefits',
      type: 'services', // rendering as services conceptually
      name: 'למה אנחנו',
      fields: [
        { id: 'benefitsTitle', type: 'text', label: 'כותרת יתרונות' },
        { id: 'benefitsList', type: 'services', label: 'היתרונות' }
      ]
    },
    {
      id: 'testimonials',
      type: 'testimonials',
      name: 'הצלחות מתאמנים',
      fields: [
        { id: 'testimonialsTitle', type: 'text', label: 'כותרת' },
        { id: 'testimonialsList', type: 'testimonials', label: 'סיפורי הצלחה' }
      ]
    },
    {
      id: 'contact',
      type: 'contact',
      name: 'צור קשר',
      fields: [
        { id: 'contactTitle', type: 'text', label: 'כותרת קשר' },
        { id: 'contactPhone', type: 'text', label: 'טלפון' }
      ]
    }
  ],
  defaultContent: {
    heroTitle: 'המסע שלכם לשינוי מתחיל עכשיו. אל תוותרו.',
    heroSubtitle: 'אימונים אישיים ברמה הגבוהה ביותר לפיתוח כוח, סיבולת ושריר. תוכניות מותאמות אישית לעמידה ביעדים שלך.',
    heroImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200&h=800',
    benefitsTitle: 'למה להתאמן איתנו?',
    benefitsList: [
      { title: 'ליווי תזונתי צמוד', description: 'תפריט מותאם לנתונים ולמטרות שלכם יחד עם מעקב יומיומי.', icon: 'food' },
      { title: 'ציוד חדיש', description: 'סטודיו מאובזר במכשירים חכמים ובטכנולוגיות המתקדמות ביותר.', icon: 'dumbbell' },
      { title: 'משפחתיות ואווירה', description: 'לא רק אימון - קהילה תומכת ודוחפת למצוינות בכל אימון.', icon: 'users' }
    ],
    testimonialsTitle: 'תוצאות מדברות בעד עצמן',
    testimonialsList: [
      { name: 'גל אברמוב', text: 'בזכות האימונים בסטודיו ירדתי 15 ק"ג ב-4 חודשים ושמרתי עליהם! המאמנים פשוט אגדה.', rating: 5 },
      { name: 'עומר לוי', text: 'אחרי שנים שהתאמנתי לבד ונתקעתי, פה הצלחתי לשבור שיאים ולראות גוף חטוב באמת.', rating: 5 }
    ],
    contactTitle: 'הגיע הזמן לעשות צעד',
    contactPhone: '054-9876543'
  }
};
