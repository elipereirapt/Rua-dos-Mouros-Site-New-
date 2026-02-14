import React from 'react';
import { Bed, Bath, Move, Home } from 'lucide-react';
import { Specification } from '../types';

interface SpecsProps {
  specs: Specification[];
}

const Specs: React.FC<SpecsProps> = ({ specs }) => {
  const getIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('bed') || l.includes('cham') || l.includes('quar')) return <Bed strokeWidth={1} size={28} />;
    if (l.includes('bath') || l.includes('salle') || l.includes('banho')) return <Bath strokeWidth={1} size={28} />;
    if (l.includes('guest') || l.includes('amis') || l.includes('anexo')) return <Home strokeWidth={1} size={28} />;
    return <Move strokeWidth={1} size={28} />;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-charcoal/10 my-12">
      {specs.map((spec, idx) => (
        <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
          <div className="text-gold group-hover:text-charcoal transition-colors duration-300">
            {getIcon(spec.label)}
          </div>
          <span className="font-serif text-2xl">{spec.value}</span>
          <span className="text-xs uppercase tracking-widest text-charcoal/60">{spec.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Specs;