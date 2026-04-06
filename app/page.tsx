"use client";

import Link from 'next/link';
import { ArrowLeft, Layout, Zap, Smartphone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100 via-transparent to-transparent opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                Pioneer Edition 1.0 ✨
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8">
                לייצר דפי נחיתה מקצועיים <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-sky-500">
                  בלי לכתוב שורת קוד אחת.
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                מערכת Tola מציעה תבניות נתונים מתקדמות, בעברית ולעסקים מקומיים. בחרו תבנית, תוכן איכותי יבנה בעבורכם, ותהנו מדף עובד תוך דקות.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/templates" 
                  className="bg-primary text-white w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <span>התחל בחינם עכשיו</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link 
                  href="/projects" 
                  className="bg-white text-gray-800 border-2 border-gray-200 w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
                >
                  לפרויקטים שלי
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">למה לבחור במערכת שלנו?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">מנוע התבניות Data-Driven שלנו הופך כל עיצוב לגמיש, מקצועי ומאפשר ייצוא מלא בכל עת.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Target Audiences CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  מותאם אישית לקהל העסקים בישראל
                </h2>
                <ul className="space-y-4 mb-8">
                  {['טקסטים שיווקיים מוכנים לכל תחום', 'RTL מלא ואמיתי נתמך במובייל', 'מוכן לחיבור אינטגרציות AI בעתיד', 'ללא המצאות: כלי עבודה קונקרטי'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 ml-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/templates" className="bg-emerald-500 text-white font-bold px-6 py-3 rounded-full hover:bg-emerald-400 transition-colors w-max">
                  צפייה בספריית התבניות
                </Link>
              </div>
              <div className="bg-slate-800 relative hidden lg:block overflow-hidden min-h-[400px]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <Layout className="w-7 h-7" />,
    title: 'עיצוב פרימיום מותאם',
    desc: 'תבניות באיכות קצה שאינן מבוססות על מחוללי אלמנטור גנריים. הכל נראה סופר-מקצועי ומדויק מהרגע הראשון.'
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: 'מובייל-פירסט אגרסיבי',
    desc: 'בישראל רוב התנועה ממובייל. כל חלק, לחצן וכפתור מותאם בצורה אופטימלית למגע במסכים קטנים וגדולים כאחד.'
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'ארכיטקטורת נתונים חכמה',
    desc: 'תשמרו את האתר כפרויקט, ואפילו תייצאו אותו. המערכת מבוססת מודלים של נתונים, אין צורך בידע בפיתוח כלל.'
  }
];
