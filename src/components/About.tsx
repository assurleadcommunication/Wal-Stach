import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Zap, ShieldCheck } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-48 pb-40 px-6 md:px-12 bg-paper relative">
      <div className="fixed inset-0 bg-noise pointer-events-none z-[1]" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center mb-60">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <span className="text-gold uppercase tracking-[0.6em] text-[9px] font-bold mb-8 block">L'Artiste & La Vision</span>
            <h1 className="text-6xl md:text-[120px] font-serif mb-14 leading-[0.85] tracking-tighter">
              Wal <span className="font-signature italic text-gold font-light lowercase">Stach</span>
            </h1>
            <div className="space-y-10 text-zinc-500 text-xl leading-relaxed mb-16 max-w-xl font-light">
              <p>
                Passionné par l'esthétique depuis plus de 15 ans, Wal Stach a forgé son expertise dans les plus grands salons parisiens avant de fonder son propre espace de création au cœur du VIIIème arrondissement.
              </p>
              <p className="italic font-serif text-zinc-400 border-l-2 border-gold/20 pl-8">
                "Pour moi, chaque cheveu est une fibre vivante, chaque visage une toile. Mon rôle est de trouver l'équilibre parfait entre votre personnalité profonde et l'élégance intemporelle."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-16 border-t border-zinc-100 pt-16">
              <div>
                <p className="text-5xl font-serif italic text-gold mb-3">15+</p>
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-400">Années d'Expertise</p>
              </div>
              <div>
                <p className="text-5xl font-serif italic text-gold mb-3">5000+</p>
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-400">Transformations</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] group relative">
              <img
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop"
                alt="Wal Stach at work"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-16 -left-16 w-80 h-80 bg-gold rounded-full flex items-center justify-center p-12 text-center text-paper shadow-[0_40px_80px_-20px_rgba(197,160,89,0.5)] z-20 animate-float"
            >
              <p className="font-serif italic text-xl leading-relaxed">"La beauté commence au moment où vous décidez d'être vous-même."</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values - Bento Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-60">
          {[
            { icon: Users, title: "Écoute", desc: "Une consultation approfondie pour comprendre l'architecture de vos besoins et vos aspirations." },
            { icon: Zap, title: "Innovation", desc: "Utilisation des dernières techniques et tendances haute couture pour un résultat avant-gardiste." },
            { icon: Award, title: "Excellence", desc: "Un souci obsessionnel du détail et une finition irréprochable pour chaque création." },
            { icon: ShieldCheck, title: "Éco-Luxe", desc: "Produits sélectionnés pour leur respect de l'environnement et leur efficacité exceptionnelle." },
          ].map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="p-12 bg-white rounded-[3rem] border border-zinc-50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 group"
            >
              <div className="w-20 h-20 bg-zinc-50 text-gold rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-ink group-hover:text-paper transition-all duration-700 border border-zinc-100">
                <value.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-serif mb-6 tracking-tight">{value.title}</h3>
              <p className="text-zinc-500 text-lg leading-relaxed italic font-light">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section - Immersive Dark */}
        <div className="bg-ink text-paper rounded-[5rem] p-16 md:p-40 overflow-hidden relative mx-4 md:mx-0 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="max-w-4xl relative z-10">
            <span className="text-gold uppercase tracking-[0.6em] text-[9px] font-bold mb-10 block">L'Héritage</span>
            <h2 className="text-5xl md:text-8xl font-serif mb-16 leading-[0.9] tracking-tighter">Notre <span className="font-signature italic text-gold-light lowercase">histoire</span></h2>
            <div className="space-y-10 text-zinc-400 text-xl leading-relaxed font-light">
              <p>
                Tout a commencé dans un petit atelier d'artiste où Wal a découvert sa passion pour la sculpture capillaire. Ce qui n'était qu'un hobby est rapidement devenu une vocation dévorante, une quête incessante de la ligne parfaite.
              </p>
              <p>
                Après avoir parcouru le monde pour apprendre des plus grands maîtres, il est revenu à Paris avec une vision claire : créer un lieu où la coiffure est traitée comme un art majeur, loin des standards industriels et du bruit de la ville.
              </p>
              <p className="text-paper italic font-serif text-2xl border-l-2 border-gold/40 pl-10 py-4">
                "Aujourd'hui, le salon Wal Stach est devenu une référence pour ceux qui cherchent l'exceptionnel, le sur-mesure et l'élégance intemporelle."
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
              alt="Salon details"
              className="w-full h-full object-cover opacity-10 grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
