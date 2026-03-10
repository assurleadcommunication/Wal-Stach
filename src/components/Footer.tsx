import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Scissors } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-ink text-paper pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="group flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-gold text-paper rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-1000 shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                <Scissors size={24} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold tracking-tighter uppercase leading-none">
                  Wal <span className="text-gold">Stach</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.6em] text-gold-light font-bold mt-1">Haute Coiffure Paris</span>
              </div>
            </Link>
            <p className="text-zinc-400 max-w-md mb-12 text-lg leading-relaxed font-light italic">
              L'art de la coiffure sublimé par la passion et l'expertise. 
              Situé au cœur de la ville, notre salon vous accueille pour une expérience 
              de transformation unique et personnalisée, où chaque détail compte.
            </p>
            <div className="flex gap-6">
              {[
                { icon: Instagram, href: SOCIAL_LINKS.instagram },
                { icon: Facebook, href: SOCIAL_LINKS.facebook },
                { icon: Twitter, href: SOCIAL_LINKS.twitter }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ink transition-all duration-500 group shadow-sm"
                >
                  <social.icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-2xl mb-10 text-gold tracking-tight">Navigation</h4>
            <ul className="space-y-6">
              {['Accueil', 'Services', 'Portfolio', 'À Propos', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(' ', '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                    className="text-zinc-400 hover:text-gold transition-colors duration-500 text-[10px] uppercase tracking-[0.4em] font-bold block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-2xl mb-10 text-gold tracking-tight">Le Salon</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-6 group">
                <MapPin size={20} strokeWidth={1.5} className="text-gold shrink-0 mt-1 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-zinc-400 text-lg font-light leading-relaxed">123 Avenue de la Mode, 75001 Paris</span>
              </li>
              <li className="flex items-center gap-6 group">
                <Phone size={20} strokeWidth={1.5} className="text-gold shrink-0 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-zinc-400 text-lg font-light">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-6 group">
                <Mail size={20} strokeWidth={1.5} className="text-gold shrink-0 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-zinc-400 text-lg font-light">contact@walstach.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-500 text-[9px] uppercase tracking-[0.4em] font-bold">
            &copy; {new Date().getFullYear()} Wal Stach. Tous droits réservés.
          </p>
          <div className="flex gap-10">
            <Link to="/mentions-legales" className="text-zinc-500 hover:text-gold transition-colors duration-500 text-[9px] uppercase tracking-[0.4em] font-bold">Mentions Légales</Link>
            <Link to="/confidentialite" className="text-zinc-500 hover:text-gold transition-colors duration-500 text-[9px] uppercase tracking-[0.4em] font-bold">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
