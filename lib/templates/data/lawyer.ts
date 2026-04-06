import { TemplateDefinition } from '@/types';

export const lawyerTemplate: TemplateDefinition = {
  id: 'tmpl-lawyer',
  name: 'משרד עורכי דין',
  description: 'תבנית סולידית, יוקרתית שמשדרת ביטחון וסמכות מקצועית עבור יועצים ומשפטנים.',
  businessType: 'lawyer',
  previewImage: '/previews/lawyer.webp',
  defaultTheme: {
    primary: '#1e293b',
    secondary: '#f1f5f9',
    background: '#ffffff',
    text: '#0f172a',
    buttonText: '#ffffff',
    accent: '#d4af37' // gold
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
      id: 'about',
      type: 'about',
      name: 'אודות',
      fields: [
        { id: 'aboutTitle', type: 'text', label: 'כותרת אודות' },
        { id: 'aboutText', type: 'textarea', label: 'טקסט אודות' },
        { id: 'aboutImage', type: 'image', label: 'תמונת עורך הדין' }
      ]
    },
    {
      id: 'services',
      type: 'services',
      name: 'תחומי התמחות',
      fields: [
        { id: 'servicesTitle', type: 'text', label: 'כותרת תחומי התמחות' },
        { id: 'servicesList', type: 'services', label: 'רשימת תחומי עיסוק' }
      ]
    },
    {
      id: 'contact',
      type: 'contact',
      name: 'צור קשר',
      fields: [
        { id: 'contactTitle', type: 'text', label: 'כותרת פניה' },
        { id: 'contactPhone', type: 'text', label: 'מספר פנייה מהירה' },
        { id: 'contactEmail', type: 'text', label: 'דואר אלקטרוני' }
      ]
    }
  ],
  defaultContent: {
    heroTitle: 'ליווי משפטי על ידי מומחים בעלי ניסיון, ללא פשרות',
    heroSubtitle: 'משרדנו מציע פתרונות משפטיים יצירתיים, מסירות אישית ודיסקרטיות מלאה. אנו כאן כדי לשמור על הזכויות שלך בבית המשפט ומחוצה לו.',
    heroImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200&h=800',
    aboutTitle: 'סמכותיות. מצוינות. הצלחה.',
    aboutText: 'המשרד הוקם במטרה לתת מענה מקיף, איכותי וחסר פשרות. מיוצגינו נהנים מיחס אישי וזמינות מלאה מראשית התהליך ועד השגת המטרה המשפטית, בין אם בהליכים אזרחיים, פליליים או מסחריים.',
    aboutImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=800',
    servicesTitle: 'תחומי ההתמחות המרכזיים שלנו',
    servicesList: [
      { title: 'משפט מסחרי תאגידי', description: 'ליווי חברות, הסכמי מייסדים, עסקאות וחוזים.', icon: 'scale' },
      { title: 'דיני מקרקעין ונדל״ן', description: 'ייצוג בעסקאות מכר, משכנתאות, וקבוצות רכישה.', icon: 'building' },
      { title: 'דיני עבודה', description: 'הגנה על זכויות עובדים ומעסיקים בכל ערכאות הדין.', icon: 'briefcase' }
    ],
    contactTitle: 'השאירו פרטים לתיאום פגישת ייעוץ',
    contactPhone: '03-555-4433',
    contactEmail: 'office@lawfirm.co.il'
  }
};
