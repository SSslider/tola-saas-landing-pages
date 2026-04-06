import { TemplateDefinition } from '@/types';

export const dentistTemplate: TemplateDefinition = {
  id: 'tmpl-dentist',
  name: 'מרפאת שיניים',
  description: 'תבנית נקייה ורפואית המשדרת אמינות ומקצועיות, מצוינת למרפאות שיניים.',
  businessType: 'dentist',
  previewImage: '/previews/dentist.webp',
  defaultTheme: {
    primary: '#0ea5e9',
    secondary: '#f0f9ff',
    background: '#ffffff',
    text: '#0f172a',
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
      name: 'שירותים',
      fields: [
        { id: 'servicesTitle', type: 'text', label: 'כותרת שירותים' },
        { id: 'servicesList', type: 'services', label: 'רשימת השירותים' }
      ]
    },
    {
      id: 'testimonials',
      type: 'testimonials',
      name: 'המלצות',
      fields: [
        { id: 'testimonialsTitle', type: 'text', label: 'כותרת המלצות' },
        { id: 'testimonialsList', type: 'testimonials', label: 'הממליצים' }
      ]
    },
    {
      id: 'contact',
      type: 'contact',
      name: 'צור קשר',
      fields: [
        { id: 'contactTitle', type: 'text', label: 'כותרת קשר' },
        { id: 'contactPhone', type: 'text', label: 'טלפון' },
        { id: 'contactAddress', type: 'text', label: 'כתובת' }
      ]
    }
  ],
  defaultContent: {
    heroTitle: 'רפואת שיניים מתקדמת ויחס אישי לכל המשפחה',
    heroSubtitle: 'אנו במרפאת Dento מעניקים מגוון טיפולי שיניים תחת קורת גג אחת, תוך שימוש בטכנולוגיות המתקדמות ביותר כדי להבטיח את החיוך המושלם שלך.',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200&h=800',
    servicesTitle: 'הטיפולים שלנו לשיניים מבריקות',
    servicesList: [
      { title: 'השתלות שיניים טבעיות', description: 'ניתוח ממוחשב עם שתלים בסטנדרט אמריקאי להחלמה מהירה.', icon: 'tooth' },
      { title: 'הלבנת שיניים בלייזר', description: 'חיוך בהיר תוך שעה בלבד במרפאה.', icon: 'sparkles' },
      { title: 'רופא שיניים לילדים', description: 'סביבה נעימה וידידותית להורדת החרדה בקרב ילדים.', icon: 'child' }
    ],
    testimonialsTitle: 'לקוחותינו מחייכים כל הדרך',
    testimonialsList: [
      { name: 'יעל כהן', text: 'פחדתי מרופאי שיניים כל חיי, עד שהגעתי למרפאה הזו. הצוות הרגיע אותי לחלוטין ויצאתי בלי כאב.', rating: 5 },
      { name: 'דניאל בן ציון', text: 'עשיתי השתלה ביום אחד - מדהים! תוצאה טבעית וללא סבל מיותר.', rating: 5 }
    ],
    contactTitle: 'הגיע הזמן לדאוג לחיוך שלך',
    contactPhone: '050-1234567',
    contactAddress: 'רחוב הבריאות 12, תל אביב'
  }
};
