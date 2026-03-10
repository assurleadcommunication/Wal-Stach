import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { PORTFOLIO, TESTIMONIALS } from '../constants';

export const Home = () => {
  return (
    <div className="overflow-hidden bg-paper relative">
      <div className="fixed inset-0 bg-noise pointer-events-none z-[1]" />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            <img src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t51.82787-15/648659857_18037807388785923_7869767856322373364_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGS-AjAOZaVYCXIsgACHgWFK1QhbIGl0HgrVCFsgaXQeLqNIMAluKipIY6ueWNdjjA&_nc_ohc=k06J4WnKRG8Q7kNvwFp27UQ&_nc_oc=AdmOUxlJfIfLdVz4lgDZyCL7PVDAtS_IvUpbUQiTD4kKKGCOYKeXNcPfv6jQFFUiD48&_nc_zt=23&_nc_ht=scontent.fcmn5-1.fna&_nc_gid=KM7VSpT1WMC-8g9HX5Lk7g&_nc_ss=8&oh=00_Afy3spB01y6vx-oryecPhcnPxkH0lcdHnZVMNPGQMouJFA&oe=69B54056">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-paper" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-paper/60 uppercase tracking-[0.6em] text-[9px] md:text-[11px] mb-10 block font-bold">
              Maison de Haute Coiffure • Paris VIII
            </span>
            <h1 className="text-6xl md:text-[140px] text-paper font-serif mb-14 leading-[0.85] tracking-tighter">
              L'Art de la <br />
              <span className="font-signature italic text-gold-light font-light lowercase">transformation</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                to="/contact"
                className="group relative bg-gold text-paper px-14 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold overflow-hidden transition-all duration-700 hover:scale-105 w-full sm:w-auto shadow-2xl"
              >
                <span className="relative z-10">Prendre Rendez-vous</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
                <span className="absolute inset-0 flex items-center justify-center text-ink translate-y-full group-hover:translate-y-0 transition-transform duration-700 font-bold z-20">Prendre Rendez-vous</span>
              </Link>
              <Link
                to="/services"
                className="bg-white/5 backdrop-blur-xl text-paper border border-white/10 px-14 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-paper hover:text-ink transition-all duration-700 w-full sm:w-auto"
              >
                Nos Prestations
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        >
          <span className="text-paper/30 text-[8px] uppercase tracking-[0.5em] font-bold">Découvrir</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-paper/30 to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy Section - Refined Layout */}
      <section className="py-40 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">La Maison</span>
              <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[1.05] tracking-tight">
                Sublimer votre <br />
                <span className="font-signature italic text-gold font-light lowercase">essence unique.</span>
              </h2>
              <div className="space-y-8 text-zinc-500 text-xl leading-relaxed mb-14 max-w-xl font-light">
                <p>
                  Dans notre atelier parisien, la coiffure n'est pas une simple prestation, c'est une quête d'harmonie. Nous sculptons la matière pour révéler l'éclat qui sommeille en chaque visage.
                </p>
                <p className="italic font-serif text-zinc-400">
                  "Chaque geste est précis, chaque couleur est une création sur-mesure, pensée pour durer et évoluer avec vous."
                </p>
              </div>
              <Link to="/about" className="group inline-flex items-center gap-6 text-ink font-bold uppercase tracking-[0.4em] text-[10px] border-b border-ink/5 pb-4 hover:border-gold transition-all duration-500">
                L'histoire de la maison <ArrowRight size={14} className="group-hover:translate-x-4 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-12 gap-8 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-9 aspect-[3/4] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
                alt="Salon Interior"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-7 -mt-48 ml-auto aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-paper z-20 animate-float"
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
                alt="Detail"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Dark Luxury */}
      <section className="py-40 px-6 md:px-12 bg-ink text-paper rounded-[4rem] mx-4 md:mx-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-32">
            <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">L'Expérience</span>
            <h2 className="text-5xl md:text-8xl font-serif tracking-tight">Le Parcours <span className="font-signature italic text-gold-light lowercase">signature</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-16">
            {[
              { num: "01", title: "Consultation", desc: "Un échange privilégié pour comprendre votre style, vos habitudes et vos aspirations capillaires les plus profondes." },
              { num: "02", title: "Création", desc: "La mise en œuvre de notre expertise technique pour sculpter votre nouvelle silhouette avec une précision chirurgicale." },
              { num: "03", title: "Accompagnement", desc: "Conseils personnalisés et rituels de soins exclusifs pour maintenir l'éclat de votre transformation au quotidien." }
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 1 }}
                className="relative group"
              >
                <span className="text-[180px] font-serif italic text-white/[0.03] absolute -top-24 -left-8 group-hover:text-gold/5 transition-colors duration-1000 leading-none">{step.num}</span>
                <div className="relative z-10">
                  <h3 className="text-3xl font-serif mb-8 group-hover:text-gold transition-colors duration-500">{step.title}</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">{step.desc}</p>
                  <div className="w-12 h-[1px] bg-gold/30 mt-10 group-hover:w-full transition-all duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Bento Style */}
      <section className="py-40 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl">
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">Galerie</span>
              <h2 className="text-6xl md:text-8xl font-serif leading-[0.95] tracking-tight">L'Excellence en <br /><span className="font-signature italic text-gold lowercase">images</span></h2>
            </div>
            <Link to="/portfolio" className="group flex items-center gap-6 bg-ink text-paper px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-gold transition-all duration-700 shadow-xl">
              Explorer la Collection <ArrowRight size={14} className="group-hover:translate-x-4 transition-transform duration-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[900px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="md:col-span-7 relative overflow-hidden rounded-[3rem] group"
            >
              <img
                src={PORTFOLIO[0].imageUrl}
                alt={PORTFOLIO[0].title}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-end p-12">
                <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-4">{PORTFOLIO[0].category}</span>
                <h3 className="text-paper text-4xl font-serif mb-4">{PORTFOLIO[0].title}</h3>
                <p className="text-paper/60 text-lg font-light italic">{PORTFOLIO[0].description}</p>
              </div>
            </motion.div>
            
            <div className="md:col-span-5 grid grid-rows-2 gap-8">
              {PORTFOLIO.slice(1, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 1.2 }}
                  className="relative overflow-hidden rounded-[3rem] group"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-end p-10">
                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-3">{item.category}</span>
                    <h3 className="text-paper text-2xl font-serif">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Immersive Glass */}
      <section className="py-40 px-6 md:px-12 bg-zinc-50/80 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-10 block">Témoignages</span>
          <h2 className="text-5xl md:text-8xl font-serif mb-24 tracking-tight">Ils nous font <span className="font-signature italic text-gold lowercase">confiance</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 1 }}
                className="p-12 bg-paper rounded-[3rem] text-left shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-zinc-100 relative group hover:-translate-y-4 transition-all duration-700"
              >
                <div className="flex gap-1.5 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-zinc-600 italic mb-10 leading-relaxed text-xl font-light">"{t.content}"</p>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-[1px] bg-gold/40" />
                  <p className="font-bold uppercase tracking-[0.4em] text-[9px] text-ink">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Massive & Bold */}
      <section className="py-60 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-ink z-0 translate-y-full" /> {/* For scroll reveal effect if needed */}
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-6xl md:text-[160px] font-serif mb-16 leading-[0.85] tracking-tighter">
              Prêt pour votre <br />
              <span className="font-signature italic text-gold lowercase font-light">métamorphose ?</span>
            </h2>
            <p className="text-zinc-500 text-2xl mb-20 max-w-3xl mx-auto leading-relaxed font-light">
              Réservez votre consultation personnalisée et laissez-nous révéler l'éclat de votre personnalité dans notre atelier parisien.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link to="/contact" className="group relative bg-ink text-paper px-20 py-8 rounded-full text-[11px] uppercase tracking-[0.5em] font-bold overflow-hidden transition-all duration-700 hover:scale-105 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]">
                <span className="relative z-10">Réserver mon Expérience</span>
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[20vw] font-serif italic text-zinc-50/50 pointer-events-none select-none -z-10">Wal</div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[20vw] font-serif italic text-zinc-50/50 pointer-events-none select-none -z-10">Stach</div>
      </section>
    </div>
  );
};
