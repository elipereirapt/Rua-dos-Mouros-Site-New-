import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LayoutSection from './components/LayoutSection';
import Specs from './components/Specs';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import { CONTENT, SCHEMA_DATA } from './constants';
import { Language } from './types';
import { MapPin, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const content = CONTENT[lang];

  // Update Page Title and Language Attribute
  useEffect(() => {
    document.title = `Rua dos Mouros 41 | ${content.hero.headline}`;
    document.documentElement.lang = lang;
  }, [lang, content]);

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-white">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_DATA) }}
      />

      <Navigation lang={lang} setLang={setLang} content={content} />
      
      <Hero content={content} />

      <main>
        {/* Location Section */}
        <LayoutSection 
          id="location" 
          title={content.location.title} 
          subtitle={content.location.subtitle}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed text-charcoal/80 font-light">
              {content.location.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <div className="pt-6 flex items-center space-x-2 text-gold font-serif italic">
                <MapPin size={20} />
                <span>Bairro Alto / Chiado / Príncipe Real</span>
              </div>
            </div>
            <div className="relative h-96 w-full overflow-hidden border border-charcoal/10 shadow-sm">
               <LocationMap />
            </div>
          </div>
        </LayoutSection>

        {/* Residence Section */}
        <LayoutSection 
          id="residence" 
          title={content.residence.title} 
          subtitle={content.residence.subtitle}
          bg="white"
        >
          <div className="space-y-6 text-lg leading-relaxed text-charcoal/80 font-light max-w-3xl">
             {content.residence.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </div>

          <Specs specs={content.residence.specs} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <img src="https://picsum.photos/600/800?random=1" className="w-full h-80 object-cover" alt="Interior Detail 1" loading="lazy" />
            <img src="https://picsum.photos/600/800?random=2" className="w-full h-80 object-cover md:mt-12" alt="Interior Detail 2" loading="lazy" />
            <img src="https://picsum.photos/600/800?random=3" className="w-full h-80 object-cover" alt="Interior Detail 3" loading="lazy" />
          </div>
        </LayoutSection>

        {/* Garden Section */}
        <LayoutSection 
          id="garden" 
          title={content.garden.title} 
          subtitle={content.garden.subtitle}
        >
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="flex-1 space-y-6 text-lg leading-relaxed text-charcoal/80 font-light">
              {content.garden.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="flex-1 w-full h-[500px] relative">
               <img 
                 src="https://picsum.photos/800/1000?grayscale" 
                 alt="Private Garden Oasis" 
                 className="absolute inset-0 w-full h-full object-cover"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gold/10 mix-blend-multiply"></div>
            </div>
          </div>
        </LayoutSection>

        {/* Investment & Price */}
        <section id="investment" className="py-20 bg-charcoal text-ivory">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-xs tracking-lux uppercase block mb-4">{content.investment.subtitle}</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">{content.investment.title}</h2>
              <div className="space-y-6 text-ivory/80 font-light leading-relaxed mb-12">
                 {content.investment.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div className="border border-white/20 p-10 md:p-16 flex flex-col justify-center items-center text-center bg-white/5 backdrop-blur-sm">
               <span className="uppercase tracking-lux text-xs text-gold mb-4">{content.investment.priceLabel}</span>
               <div className="font-serif text-5xl md:text-6xl mb-2">{content.investment.price}</div>
               <div className="w-12 h-px bg-white/30 my-6"></div>
               <a href="#contact" className="flex items-center space-x-2 text-xs uppercase tracking-widest hover:text-gold transition-colors">
                 <span>{content.nav.bookViewing}</span>
                 <ArrowRight size={16} />
               </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <LayoutSection 
          id="contact" 
          title="" 
          bg="white"
        >
          <ContactForm content={content} />
        </LayoutSection>
      </main>

      <footer className="bg-ivory border-t border-charcoal/10 py-12 text-center px-6">
        <h4 className="font-serif text-xl tracking-widest uppercase mb-6">Rua Dos Mouros 41</h4>
        <p className="text-xs text-charcoal/50 max-w-2xl mx-auto mb-8 font-light">
          {content.footer.disclaimer}
        </p>
        <p className="text-[10px] uppercase tracking-lux text-charcoal/40">
          {content.footer.rights}
        </p>
      </footer>
    </div>
  );
};

export default App;