import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Scissors, Sparkles, Heart, Star } from 'lucide-react';

const CATEGORY_ICONS: Record<string, any> = {
  Coupe: Scissors,
  Coloration: Sparkles,
  Soin: Heart,
  Événement: Star,
};

export const Services = () => {
  const categories = Array.from(new Set(SERVICES.map(s => s.category)));

  return (
    <div className="pt-48 pb-40 px-6 md:px-12 bg-paper relative">
      <div className="fixed inset-0 bg-noise pointer-events-none z-[1]" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <header className="text-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-gold uppercase tracking-[0.6em] text-[9px] font-bold mb-8 block">Menu des Prestations</span>
            <h1 className="text-6xl md:text-[120px] font-serif mb-12 leading-[0.85] tracking-tighter">
              L'Art du <br /><span className="font-signature italic text-gold font-light lowercase">Soin</span>
            </h1>
            <p className="text-zinc-500 max-w-2xl mx-auto text-xl leading-relaxed font-light">
              Une sélection rigoureuse de services haute couture, alliant techniques ancestrales et innovations contemporaines pour une expérience sensorielle unique.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-40 gap-y-32">
          {categories.map((category, catIdx) => {
            const Icon = CATEGORY_ICONS[category] || Scissors;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-8 mb-16 group">
                  <div className="w-20 h-20 bg-zinc-50 text-gold rounded-[2rem] flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-all duration-700 shadow-sm border border-zinc-100">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-5xl font-serif tracking-tight">{category}</h2>
                </div>
                
                <div className="space-y-16">
                  {SERVICES.filter(s => s.category === category).map((service) => (
                    <div key={service.id} className="group relative">
                      <div className="flex justify-between items-baseline mb-4">
                        <h3 className="text-2xl font-serif group-hover:text-gold transition-colors duration-500 tracking-tight">{service.name}</h3>
                        <div className="flex-grow mx-6 border-b border-zinc-100 group-hover:border-gold/30 transition-colors duration-500" />
                        <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] whitespace-nowrap">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-zinc-500 text-lg leading-relaxed max-w-lg font-light italic">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Consultation Banner - Massive & Immersive */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-60 bg-ink text-paper rounded-[4rem] p-20 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-gold uppercase tracking-[0.6em] text-[9px] font-bold mb-10 block">Sur-Mesure</span>
            <h3 className="text-5xl md:text-7xl font-serif mb-10 tracking-tight">Consultation <span className="font-signature italic text-gold-light lowercase">Signature</span></h3>
            <p className="text-zinc-400 max-w-3xl mx-auto mb-16 text-xl leading-relaxed font-light">
              Chaque transformation commence par un dialogue. Nous vous offrons un moment privilégié pour définir ensemble l'architecture de votre futur look, en tenant compte de votre morphologie et de votre style de vie.
            </p>
            <Link to="/contact" className="group relative inline-block bg-gold text-paper px-16 py-7 rounded-full text-[11px] uppercase tracking-[0.5em] font-bold overflow-hidden transition-all duration-700 hover:scale-105">
              <span className="relative z-10">Réserver mon Expérience</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
              <span className="absolute inset-0 flex items-center justify-center text-ink translate-y-full group-hover:translate-y-0 transition-transform duration-700 font-bold z-20">Réserver mon Expérience</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
