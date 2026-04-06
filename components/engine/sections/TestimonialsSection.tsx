import { motion } from 'framer-motion';

export function TestimonialsSection({ content, theme, index }: { content: any, theme: any, index: number }) {
  const title = content.testimonialsTitle || 'לקוחות מספרים';
  const list = content.testimonialsList || [];

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl @md:text-4xl font-bold mb-4"
            style={{ color: 'var(--theme-primary)' }}
          >
            {title}
          </h2>
        </div>

        <div className="grid @md:grid-cols-2 @lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {list.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 @md:p-10 rounded-3xl"
              style={{ backgroundColor: 'var(--theme-secondary)' }}
            >
              <div className="flex text-yellow-400 mb-6 gap-1">
                {[...Array(item.rating || 5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-8 italic" style={{ color: 'var(--theme-text)', opacity: 0.9 }}>
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl uppercase"
                  style={{ backgroundColor: 'var(--theme-primary)', color: 'var(--theme-btn-text)' }}
                >
                  {item.name ? item.name.charAt(0) : '?'}
                </div>
                <div>
                  <h4 className="font-bold text-lg" style={{ color: 'var(--theme-text)' }}>{item.name}</h4>
                  <span className="text-sm opacity-70" style={{ color: 'var(--theme-text)' }}>לקוח/ה מאומת/ת</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
