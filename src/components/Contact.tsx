import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Demande de rendez-vous',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: 'Demande de rendez-vous', message: '' });
  };

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
            <span className="text-gold uppercase tracking-[0.6em] text-[9px] font-bold mb-8 block">Contact & Réservation</span>
            <h1 className="text-6xl md:text-[120px] font-serif mb-12 leading-[0.85] tracking-tighter">
              Parlons de votre <br /><span className="font-signature italic text-gold font-light lowercase">prochain look</span>
            </h1>
            <p className="text-zinc-500 max-w-2xl mx-auto text-xl leading-relaxed font-light">
              Que ce soit pour un rendez-vous ou une simple question, notre équipe est à votre entière disposition pour une expérience sur-mesure.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl font-serif mb-12 tracking-tight">Informations de Contact</h2>
            <div className="space-y-12 mb-20">
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-zinc-50 text-gold rounded-2xl flex items-center justify-center shrink-0 border border-zinc-100 group-hover:bg-ink group-hover:text-paper transition-all duration-500">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-[0.4em] text-[9px] mb-3 text-zinc-400">Adresse</h3>
                  <p className="text-zinc-600 text-xl font-light">123 Avenue de la Mode, 75001 Paris</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-zinc-50 text-gold rounded-2xl flex items-center justify-center shrink-0 border border-zinc-100 group-hover:bg-ink group-hover:text-paper transition-all duration-500">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-[0.4em] text-[9px] mb-3 text-zinc-400">Téléphone</h3>
                  <p className="text-zinc-600 text-xl font-light">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-zinc-50 text-gold rounded-2xl flex items-center justify-center shrink-0 border border-zinc-100 group-hover:bg-ink group-hover:text-paper transition-all duration-500">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-[0.4em] text-[9px] mb-3 text-zinc-400">Email</h3>
                  <p className="text-zinc-600 text-xl font-light">contact@walstach.com</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-zinc-50 text-gold rounded-2xl flex items-center justify-center shrink-0 border border-zinc-100 group-hover:bg-ink group-hover:text-paper transition-all duration-500">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-[0.4em] text-[9px] mb-3 text-zinc-400">Horaires</h3>
                  <div className="space-y-1">
                    <p className="text-zinc-600 text-xl font-light">Lun - Ven : 09:00 - 19:00</p>
                    <p className="text-zinc-600 text-xl font-light">Sam : 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder - Premium Style */}
            <div className="aspect-video bg-zinc-50 rounded-[3rem] overflow-hidden relative border border-zinc-100 shadow-sm group">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400 flex-col gap-6 z-10 pointer-events-none">
                <MapPin size={48} className="opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold">Localisation</p>
              </div>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3299627156743887!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sen!2sfr!4v1647874587456!5m2!1sen!2sfr"
                className="w-full h-full border-0 grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form - Premium Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white p-10 md:p-20 rounded-[4rem] border border-zinc-50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)]"
          >
            <h2 className="text-4xl font-serif mb-12 tracking-tight">Envoyez-nous un Message</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-10">
                  <CheckCircle2 size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl font-serif mb-6 tracking-tight">Message Envoyé !</h3>
                <p className="text-zinc-500 text-xl font-light max-w-sm">
                  Merci pour votre message. Wal Stach vous répondra personnellement dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-400 ml-2">Nom Complet</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-zinc-50/50 border border-zinc-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-gold focus:bg-white transition-all duration-500 font-light text-lg"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-400 ml-2">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-zinc-50/50 border border-zinc-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-gold focus:bg-white transition-all duration-500 font-light text-lg"
                      placeholder="jean@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-400 ml-2">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full bg-zinc-50/50 border border-zinc-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-gold focus:bg-white transition-all duration-500 font-light text-lg"
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-400 ml-2">Sujet</label>
                    <div className="relative">
                      <select
                        className="w-full bg-zinc-50/50 border border-zinc-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-gold focus:bg-white transition-all duration-500 font-light text-lg appearance-none"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option>Demande de rendez-vous</option>
                        <option>Question sur un service</option>
                        <option>Collaboration</option>
                        <option>Autre</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                        <ArrowRight size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-400 ml-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-zinc-50/50 border border-zinc-100 rounded-3xl px-6 py-5 focus:outline-none focus:border-gold focus:bg-white transition-all duration-500 font-light text-lg resize-none"
                    placeholder="Comment pouvons-nous sublimer votre look ?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group relative w-full bg-ink text-paper py-7 rounded-2xl font-bold uppercase tracking-[0.5em] text-[11px] overflow-hidden transition-all duration-700 hover:scale-[1.02] shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    Envoyer le Message <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
