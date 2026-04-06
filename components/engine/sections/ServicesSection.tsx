import { motion } from 'framer-motion';

export function ServicesSection({ content, theme, index }: { content: any, theme: any, index: number }) {
  const title = content.servicesTitle || content.destTitle || content.benefitsTitle || 'השירותים שלנו';
  const list = content.servicesList || content.destList || content.benefitsList || [];

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--theme-secondary)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl @md:text-5xl font-bold mb-4"
            style={{ color: 'var(--theme-primary)' }}
          >
            {title}
          </motion.h2>
          <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: 'var(--theme-accent)' }}></div>
        </div>

        <div className="grid @md:grid-cols-2 @lg:grid-cols-3 gap-8">
          {list.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100/50"
              style={{ backgroundColor: 'var(--theme-bg)' }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-Inner"
                style={{ backgroundColor: `${theme.primary}15`, color: 'var(--theme-primary)' }}
              >
                {/* Fallback mock icon */}
                <div className="w-8 h-8 rounded-full border-4 border-current opacity-70"></div>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--theme-text)' }}>{item.title}</h3>
              <p className="opacity-80 leading-relaxed" style={{ color: 'var(--theme-text)' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
