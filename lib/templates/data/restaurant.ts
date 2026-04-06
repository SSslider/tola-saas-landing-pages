import { TemplateDefinition } from '@/types';

export const restaurantTemplate: TemplateDefinition = {
  id: 'tpl-restaurant',
  name: 'מסעדת שף',
  description: 'עיצוב מגרה וחם למסעדות, בתי קפה וברים',
  businessType: 'restaurant',
  previewImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  defaultTheme: {
    primary: '#ea580c', // orange-600
    secondary: '#18181b', // zinc-900
    background: '#09090b', // zinc-950
    text: '#fafafa', // zinc-50
    buttonText: '#ffffff',
    accent: '#f97316' // orange-500
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
      id: 'menu',
      type: 'services', // using services component for menu highlights
      name: 'מנות הדגל',
      fields: [
        { id: 'servicesTitle', label: 'כותרת', type: 'text' }
      ]
    },
    {
      id: 'about',
      type: 'about',
      name: 'הסיפור שלנו',
      fields: [
        { id: 'aboutTitle', label: 'כותרת', type: 'text' },
        { id: 'aboutText', label: 'תוכן', type: 'textarea' },
        { id: 'aboutImage', label: 'תמונה', type: 'image' }
      ]
    },
    {
      id: 'contact',
      type: 'contact',
      name: 'הזמנת מקום',
      fields: [
        { id: 'contactTitle', label: 'כותרת', type: 'text' },
        { id: 'contactPhone', label: 'טלפון להזמנות', type: 'text' },
        { id: 'contactAddress', label: 'כתובת המסעדה', type: 'text' }
      ]
    }
  ],
  defaultContent: {
    heroTitle: 'חוויה קולינרית בלתי נשכחת',
    heroSubtitle: 'שילוב מנצח של חומרי גלם טריים, אווירה אינטימית ויצירתיות בכל ביס.',
    heroImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    servicesTitle: 'מהתפריט שלנו',
    servicesList: [
      { title: 'מנות ראשונות', description: 'ברוסקטות עגבניות מדורה, קרפצ׳יו בקר וכרוביות אפויות.' },
      { title: 'עיקריות מצטיינות', description: 'פילה בקר מיושן, פסטות עבודת יד ודגי ים טריים.' },
      { title: 'בר קוקטיילים', description: 'תפריט אלכוהול עשיר וייחודי שנרקח על ידי מיקסולוג מקומי.' }
    ],
    aboutTitle: 'האהבה לאוכל טוב',
    aboutText: 'המסעדה שלנו קמה מתוך תשוקה לארח וליצור רגעים יפים. אנחנו מאמינים בתוצרת מקומית, בעבודה יומיומית מול חקלאים ובמתן שירות בגובה העיניים שמכבד את האורחים שלנו. כל צלחת שיוצאת מהמטבח מספרת סיפור.',
    aboutImage: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    contactTitle: 'הזמינו שולחן עכשיו',
    contactPhone: '03-1234567',
    contactAddress: 'הרצל 10, רחובות'
  }
};
