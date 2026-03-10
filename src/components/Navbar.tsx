import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Scissors } from 'lucide-react';
import { cn } from '../types';

const NAV_LINKS = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'À Propos', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-1000 px-6 md:px-12',
        scrolled ? 'glass py-4' : 'bg-transparent py-10'
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700",
            scrolled ? "bg-ink text-paper" : "bg-paper/5 backdrop-blur-xl text-paper border border-white/10"
          )}>
            <Scissors size={20} className="group-hover:rotate-[360deg] transition-transform duration-1000" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "text-2xl font-serif font-bold tracking-[0.15em] uppercase transition-colors duration-700 leading-none",
              scrolled || !isHome ? "text-ink" : "text-paper"
            )}>
              Wal <span className="text-gold">Stach</span>
            </span>
            <span className={cn(
              "text-[8px] uppercase tracking-[0.4em] font-bold mt-1 transition-opacity duration-700",
              scrolled || !isHome ? "text-zinc-400" : "text-paper/40"
            )}>
              Haute Coiffure Paris
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:text-gold relative group py-2',
                location.pathname === link.path 
                  ? 'text-gold' 
                  : (scrolled || !isHome ? 'text-ink' : 'text-paper')
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full",
                location.pathname === link.path && "w-full"
              )} />
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "px-10 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-700 border",
              scrolled || !isHome 
                ? "bg-ink text-paper border-ink hover:bg-gold hover:border-gold" 
                : "bg-paper text-ink border-paper hover:bg-transparent hover:text-paper"
            )}
          >
            Réservation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700",
            scrolled || !isHome ? "text-ink bg-zinc-100" : "text-paper bg-white/5 backdrop-blur-md border border-white/10"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-paper z-[60] lg:hidden flex flex-col"
          >
            <div className="p-8 flex justify-between items-center border-b border-zinc-100">
              <span className="text-xl font-serif font-bold tracking-widest uppercase">Wal <span className="text-gold">Stach</span></span>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center p-12 gap-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'text-5xl font-serif transition-all duration-500 hover:pl-4 hover:text-gold',
                      location.pathname === link.path ? 'text-gold' : 'text-ink'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-12 border-t border-zinc-100">
              <Link
                to="/contact"
                className="block w-full bg-ink text-paper py-6 rounded-2xl text-center font-bold uppercase tracking-[0.3em] text-xs hover:bg-gold transition-colors"
              >
                Réserver un rendez-vous
              </Link>
              <div className="mt-8 flex justify-center gap-8 text-zinc-400">
                <span className="text-[10px] uppercase tracking-widest font-bold">Instagram</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Facebook</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Paris</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
