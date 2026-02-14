import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  content: any;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <header className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Scaling logic: 
            w-[177.78vh] = 100vh * (16/9) -> Ensures width covers screen if height is 100vh
            min-h-[56.25vw] = 100vw * (9/16) -> Ensures height covers screen if width is 100vw
            This combination ensures the 16:9 video always covers the viewport 
        */}
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 object-cover opacity-90"
          src="https://www.youtube.com/embed/yGZpMDnEJOo?autoplay=1&mute=1&controls=0&loop=1&playlist=yGZpMDnEJOo&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1"
          title="Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        {/* Cinematic Overlay for text contrast */}
        <div className="absolute inset-0 bg-charcoal/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto fade-in-up">
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-white/90 drop-shadow-md">
          {content.hero.subhead}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 drop-shadow-lg">
          {content.hero.headline}
        </h1>
        <a 
          href="#location"
          className="inline-block border border-white/70 px-8 py-3 text-xs tracking-lux uppercase hover:bg-white hover:text-charcoal transition-all duration-300 backdrop-blur-sm bg-white/5"
        >
          {content.hero.cta}
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 z-20">
        <ArrowDown size={24} strokeWidth={1} />
      </div>
    </header>
  );
};

export default Hero;