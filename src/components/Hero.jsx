import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onExplore }) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Background Image with Authentic Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.webp"
          alt="The Vista Grand Restaurant Patio and Courtyard"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
          loading="eager"
          fetchPriority="high"
        />
        {/* Subtle Dark Gradient Overlay for optimal readability while preserving restaurant ambiance */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03111D]/85 via-[#03111D]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#03111D]/90 via-transparent to-[#03111D]/35"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 md:pt-48 pb-16 my-auto">
        <div className="max-w-2xl text-left">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-6 h-[1.5px] bg-[#D7A52B]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D7A52B] uppercase">
              THE VISTA GRAND
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white font-normal leading-[1.08] tracking-tight drop-shadow-md mb-5 sm:mb-6">
            Where Every <br className="hidden sm:inline" />
            <span className="italic font-light text-[#F4E4AF]">Moment</span> Feels Grand
          </h1>

          {/* Subheading */}
          <p className="text-xs sm:text-sm md:text-base tracking-[0.22em] text-gray-200 uppercase font-medium mb-8 sm:mb-10 flex flex-wrap items-center gap-2 sm:gap-3">
            <span>FINE DINING</span>
            <span className="text-[#D7A52B] text-lg leading-none">•</span>
            <span>CELEBRATIONS</span>
            <span className="text-[#D7A52B] text-lg leading-none">•</span>
            <span>EXPERIENCES</span>
          </p>

          {/* Primary Gold CTA Button */}
          <div>
            <a
              href="#dish-of-the-week"
              onClick={(e) => {
                e.preventDefault();
                onExplore?.();
                document.getElementById('dish-of-the-week')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#D7A52B] hover:bg-[#E7C76A] text-[#03111D] rounded-none font-bold text-xs sm:text-sm tracking-[0.18em] transition-all duration-300 shadow-[0_0_25px_rgba(215,165,43,0.4)] hover:shadow-[0_0_35px_rgba(215,165,43,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <span>EXPLORE THE VISTA</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 sm:pb-12">
        <a
          href="#dish-of-the-week"
          className="inline-flex items-center gap-2.5 text-gray-300 hover:text-[#D7A52B] transition-colors group cursor-pointer"
          aria-label="Scroll to discover more content"
        >
          <div className="w-5 h-9 rounded-full border border-white/40 flex items-start justify-center p-1 group-hover:border-[#D7A52B] transition-colors">
            <div className="w-1 h-2 bg-[#D7A52B] rounded-full animate-bounce mt-1"></div>
          </div>
          <span className="text-[10px] sm:text-xs tracking-[0.22em] text-gray-300 uppercase font-medium group-hover:text-white transition-colors">
            SCROLL TO DISCOVER
          </span>
        </a>
      </div>

      {/* Torn Deckled Paper Organic Edge Transition */}
      <div className="relative z-20 w-full leading-none overflow-hidden select-none -mb-[1px]">
        <svg
          viewBox="0 0 1200 45"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 text-[#FBF5E8] fill-current"
        >
          <path d="M0,18 C30,26 65,12 110,22 C160,32 205,14 260,25 C315,35 365,16 420,26 C475,34 525,15 580,25 C635,35 685,16 740,26 C795,35 845,15 900,25 C955,34 1005,16 1060,26 C1115,35 1165,18 1200,24 L1200,45 L0,45 Z" />
        </svg>
      </div>
    </section>
  );
}
