import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO, SOCIAL_LINKS } from '../constants';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const Portfolio = () => {
  const categories = ['Tous', ...Array.from(new Set(PORTFOLIO.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredItems = activeCategory === 'Tous' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(p => p.category === activeCategory);

  return (
    <div className="pt-48 pb-40 px-6 md:px-12 bg-paper relative">
      <div className="fixed inset-0 bg-noise pointer-events-none z-[1]" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <header className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-gold uppercase tracking-[0.6em] text-[9px] font-bold mb-8 block">Galerie d'Art</span>
            <h1 className="text-6xl md:text-[120px] font-serif mb-12 leading-[0.85] tracking-tighter">
              Nos <span className="font-signature italic text-gold font-light lowercase">réalisations</span>
            </h1>
            
            {/* Filter Bar - Refined */}
            <div className="flex flex-wrap justify-center gap-6 mt-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ${
                    activeCategory === cat 
                    ? 'bg-ink text-paper shadow-xl' 
                    : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-[3rem] bg-zinc-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-end p-12 translate-y-8 group-hover:translate-y-0">
                  <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-4">{item.category}</span>
                  <h3 className="text-paper text-4xl font-serif mb-6 tracking-tight">{item.title}</h3>
                  <p className="text-paper/60 text-lg font-light italic mb-8 line-clamp-2">
                    {item.description}
                  </p>
                  <button className="flex items-center gap-4 text-paper text-[10px] uppercase tracking-[0.4em] font-bold hover:text-gold transition-colors duration-500 group/btn">
                    Détails <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Social Integration - Immersive */}
        <div className="mt-60 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif italic text-zinc-50 pointer-events-none select-none -z-10">Instagram</div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <p className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Inspiration Quotidienne</p>
            <h3 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight">@walstach_art</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-ink text-paper px-16 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold overflow-hidden transition-all duration-700 hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10">Voir sur Instagram</span>
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
              </a>
              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-100 text-zinc-500 px-16 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-200 transition-all duration-700"
              >
                Voir sur TikTok
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
