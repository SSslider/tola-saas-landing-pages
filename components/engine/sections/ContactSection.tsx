import { motion } from 'framer-motion';

export function ContactSection({ content, theme, index }: { content: any, theme: any, index: number }) {
  const title = content.contactTitle || 'צור קשר';
  const phone = content.contactPhone;
  const address = content.contactAddress;
  const email = content.contactEmail;
  const whatsapp = content.contactWhatsApp;

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--theme-primary)' }}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 @md:p-14 overflow-hidden relative">
          
          <div className="grid @md:grid-cols-2 gap-12 relative z-10">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl @md:text-5xl font-bold mb-6 text-gray-900"
              >
                {title}
              </motion.h2>
              <p className="text-gray-600 mb-8 max-w-md text-lg">
                השאירו לנו פרטים ונחזור אליכם בהקדם האפשרי. לחלופין, אתם מוזמנים ליצור קשר ישירות באחד מהאמצעים הבאים.
              </p>
              
              <div className="space-y-6">
                {phone && (
                  <div className="flex items-center gap-4 text-gray-800">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">📞</div>
                    <span className="text-lg font-medium" dir="ltr">{phone}</span>
                  </div>
                )}
                {whatsapp && (
                  <div className="flex items-center gap-4 text-gray-800">
                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">💬</div>
                    <span className="text-lg font-medium" dir="ltr">{whatsapp}</span>
                  </div>
                )}
                {address && (
                  <div className="flex items-center gap-4 text-gray-800">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">📍</div>
                    <span className="text-lg font-medium">{address}</span>
                  </div>
                )}
                {email && (
                  <div className="flex items-center gap-4 text-gray-800">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">✉️</div>
                    <span className="text-lg font-medium">{email}</span>
                  </div>
                )}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[var(--theme-primary)] transition-colors bg-white" placeholder="ישראל ישראלי" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">טלפון</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent outline-none transition-shadow bg-white" placeholder="050-0000000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">נושא פנייה</label>
                  <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent outline-none transition-shadow bg-white" placeholder="במה תרצה שנעזור לך?"></textarea>
                </div>
                <button 
                  className="w-full py-4 rounded-xl font-bold text-white shadow-md hover:scale-[1.02] transition-transform text-lg"
                  style={{ backgroundColor: theme.primary, color: theme.buttonText }}
                >
                  שליחה
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
