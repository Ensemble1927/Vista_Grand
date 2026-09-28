import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function YourTableAwaits({ onBookTable, onPlanEvent }) {
  return (
    <section className="relative text-white py-28 sm:py-36 overflow-hidden border-t border-[#D7A52B]/30 select-none bg-[#03111D]">
      
      {/* Full-Bleed Restaurant Dining Table Background (Authentic vg 1.webp from restaurant assets) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/images/your_table_bg.webp"
          alt="The Vista Grand Evening Dining Table Setup"
          className="w-full h-full object-cover object-[center_35%] scale-105 transition-transform duration-1000 ease-out"
          aria-hidden="true"
        />
        {/* Rich Luxury Translucent Dark Navy Veil — NO white haze/bleach, completely removes white accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03111D] via-[#061827]/82 to-[#03111D]/90 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Decorative Luxury Gold Architectural Ornament on Left (Replaced green hanging vine) */}
      <div className="absolute -left-2 bottom-0 w-20 sm:w-28 opacity-75 pointer-events-none select-none z-10">
        <img
          src="/images/luxury_gold_ornament.svg"
          alt=""
          className="w-full h-auto object-contain filter drop-shadow-sm"
          aria-hidden="true"
        />
      </div>

      {/* Central Content Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow with Gold Accent Lines */}
        <div className="inline-flex items-center justify-center gap-2.5 mb-3.5">
          <span className="w-6 h-[1.5px] bg-[#D7A52B]"></span>
          <span className="text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#D7A52B] uppercase">
            THE VISTA GRAND
          </span>
          <span className="w-6 h-[1.5px] bg-[#D7A52B]"></span>
        </div>

        {/* Heading — Cinematic Focal Point in Luminous White & Gold */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white font-normal tracking-tight mb-4 leading-tight">
          Your Table <span className="italic text-[#D7A52B]">Awaits</span>
        </h2>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 font-light tracking-wide mb-10 sm:mb-12 max-w-xl mx-auto">
          Come for the food. Stay for the experience.
        </p>

        {/* Two Action Buttons: Gold Primary + Gold Outlined Secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onBookTable}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 bg-[#D7A52B] hover:bg-[#E7C76A] text-[#03111D] rounded-none font-bold text-xs sm:text-sm tracking-[0.2em] transition-all duration-300 shadow-[0_4px_25px_rgba(215,165,43,0.4)] hover:shadow-[0_6px_32px_rgba(215,165,43,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
          >
            <span>BOOK A TABLE</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onPlanEvent}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 border-2 border-[#D7A52B] text-[#D7A52B] hover:bg-[#D7A52B] hover:text-[#03111D] rounded-none font-bold text-xs sm:text-sm tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group shadow-sm"
          >
            <span>PLAN AN EVENT</span>
            <ArrowRight className="w-4 h-4 text-[#D7A52B] group-hover:text-[#03111D] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
