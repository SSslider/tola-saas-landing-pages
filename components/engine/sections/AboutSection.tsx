import { motion } from 'framer-motion';

export function AboutSection({ content, theme, index }: { content: any, theme: any, index: number }) {
  const title = content.aboutTitle || 'קצת עלינו';
  const text = content.aboutText || '';
  const image = content.aboutImage || '';

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col @lg:flex-row items-center gap-16">
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-3xl @md:text-5xl font-bold mb-6"
                style={{ color: 'var(--theme-primary)' }}
              >
                {title}
              </h2>
              <div className="w-16 h-1 mb-8" style={{ backgroundColor: 'var(--theme-accent)' }}></div>
              <p className="text-lg leading-loose opacity-90" style={{ color: 'var(--theme-text)' }}>
                {text}
              </p>
              
              <button 
                className="mt-10 px-8 py-3 rounded-full font-bold shadow-md hover:-translate-y-1 transition-transform"
                style={{ backgroundColor: 'var(--theme-primary)', color: 'var(--theme-btn-text)' }}
              >
                קראו בהרחבה
              </button>
            </motion.div>
          </div>

          {image && (
            <motion.div 
              className="flex-1 w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl pb-[75%]">
                <img 
                  src={image} 
                  alt={title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-3xl ring-inset ring-2 pointer-events-none" style={{ borderColor: 'var(--theme-accent)', opacity: 0.2 }}></div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
