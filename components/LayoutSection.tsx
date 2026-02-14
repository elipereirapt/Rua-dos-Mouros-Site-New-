import React from 'react';

interface LayoutSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bg?: 'ivory' | 'white';
}

const LayoutSection: React.FC<LayoutSectionProps> = ({ id, title, subtitle, children, bg = 'ivory' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 ${bg === 'white' ? 'bg-white' : 'bg-ivory'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24 text-center md:text-left border-t border-charcoal/10 pt-8">
          {subtitle && (
            <span className="block text-gold text-xs tracking-lux uppercase mb-3 font-semibold">
              {subtitle}
            </span>
          )}
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default LayoutSection;