import { motion } from 'framer-motion';

export function HeroSection({ content, theme }: { content: any, theme: any, index: number }) {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-12 overflow-hidden" 
      style={{ backgroundColor: 'var(--theme-bg)' }}
    >
      {content.heroImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src={content.heroImage} 
            alt={content.heroTitle || 'Hero'} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {content.heroTitle && (
            <h1 
              className="text-4xl @md:text-6xl @lg:text-7xl font-extrabold mb-6 leading-tight pb-2"
              style={{ color: content.heroImage ? '#ffffff' : 'var(--theme-text)' }}
            >
              {content.heroTitle}
            </h1>
          )}
          
          {content.heroSubtitle && (
            <p 
              className="text-lg @md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto"
              style={{ color: content.heroImage ? '#f3f4f6' : 'var(--theme-text)', opacity: content.heroImage ? 1 : 0.8 }}
            >
              {content.heroSubtitle}
            </p>
          )}

          <div className="flex flex-col @sm:flex-row items-center justify-center gap-4">
            <button 
              className="px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition-opacity w-full @sm:w-auto text-center flex items-center justify-center"
              style={{ backgroundColor: 'var(--theme-primary)', color: 'var(--theme-btn-text)' }}
            >
              צור קשר עכשיו
            </button>
            <button 
              className="px-8 py-4 rounded-full font-bold text-lg border-2 hover:bg-black/10 transition-colors w-full @sm:w-auto text-center flex items-center justify-center"
              style={{ 
                borderColor: content.heroImage ? '#ffffff' : 'var(--theme-primary)', 
                color: content.heroImage ? '#ffffff' : 'var(--theme-primary)' 
              }}
            >
              קרא עוד
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
