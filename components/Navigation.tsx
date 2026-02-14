import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../types';

interface NavigationProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: any;
}

const Navigation: React.FC<NavigationProps> = ({ lang, setLang, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#location", label: content.nav.location },
    { href: "#residence", label: content.nav.residence },
    { href: "#garden", label: content.nav.garden },
    { href: "#investment", label: content.nav.investment },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled || isMobileOpen ? 'bg-ivory text-charcoal shadow-sm py-4' : 'bg-transparent text-white py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#" className="font-serif text-2xl tracking-widest uppercase z-50 relative">
          Rua Dos Mouros 41
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className={`text-xs tracking-lux uppercase hover:text-gold transition-colors duration-300 ${
                !isScrolled ? 'text-white/90' : 'text-charcoal'
              }`}
            >
              {link.label}
            </a>
          ))}
          
          <div className="h-4 w-px bg-current opacity-30 mx-4"></div>

          {/* Language Switcher */}
          <div className="flex space-x-3 text-xs tracking-widest font-bold">
            {(['en', 'pt', 'fr'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`uppercase transition-colors ${
                  lang === l ? 'text-gold underline decoration-gold underline-offset-4' : 'opacity-60 hover:opacity-100'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a 
            href="#contact" 
            className={`border px-6 py-2 text-xs tracking-lux uppercase transition-all duration-300 hover:bg-gold hover:border-gold hover:text-white ${
               !isScrolled ? 'border-white text-white' : 'border-charcoal text-charcoal'
            }`}
          >
            {content.nav.bookViewing}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-ivory text-charcoal flex flex-col justify-center items-center space-y-8 transform transition-transform duration-500 ease-in-out md:hidden ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileOpen(false)}
            className="font-serif text-2xl tracking-widest"
          >
            {link.label}
          </a>
        ))}
        <a 
          href="#contact" 
          onClick={() => setIsMobileOpen(false)}
          className="mt-8 border border-charcoal px-8 py-3 text-sm tracking-lux uppercase"
        >
          {content.nav.bookViewing}
        </a>
        
        <div className="flex space-x-6 mt-12">
            {(['en', 'pt', 'fr'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setIsMobileOpen(false); }}
                className={`uppercase text-sm tracking-widest ${
                  lang === l ? 'text-gold font-bold' : 'text-charcoal'
                }`}
              >
                {l}
              </button>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;