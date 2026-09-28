import React, { useState } from 'react';
import { X, Sparkles, MapPin, Users, Check, ArrowRight } from 'lucide-react';

export default function SpaceModal({ isOpen, onClose, initialTab = 'dine', onBookTable, onPlanEvent }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  const spaces = {
    dine: {
      title: 'A Table for Every Occasion — Dining Patio',
      eyebrow: 'DINE AT THE VISTA GRAND',
      image: '/images/dine.webp',
      alt: 'The Vista Grand Dining Patio',
      capacity: 'Up to 120 Guests',
      timing: '12:00 PM – 11:30 PM Daily',
      description:
        'Designed for intimate date nights, family get-togethers, and relaxed weekend lunches. Our dining patio features artisanal woven wicker seating, marble tabletops, natural stone paving, and handcrafted open-air pavilion architecture surrounded by manicured greenery.',
      highlights: [
        'Open-air alfresco dining with gentle evening breezes',
        'Direct view of the live tandoor and open chef kitchen',
        'Comfortable wicker dining chairs with plush cushioning',
        'Attentive personalized table service with sommelier pairings',
      ],
      ctaText: 'RESERVE DINING TABLE',
      ctaAction: () => {
        onClose();
        onBookTable();
      },
    },
    celebrate: {
      title: 'Make Your Moments Grand — Banquet Hall',
      eyebrow: 'CELEBRATE AT THE VISTA GRAND',
      image: '/images/banquet_celebrate.webp',
      alt: 'The Vista Grand Banquet Hall',
      capacity: 'Up to 450 Guests',
      timing: 'Morning / Evening / Full Day Slots',
      description:
        'A magnificent indoor grand hall featuring vaulted wooden ceilings, royal hanging crystal chandeliers, heritage carved stone pillars, and Portuguese-style ornate tiled flooring. The venue is fully air-conditioned and equipped for royal weddings, sangeet ceremonies, gala corporate banquets, and milestone anniversaries.',
      highlights: [
        'Climate-controlled indoor hall with state-of-the-art acoustics',
        'Grand entrance foyer with dedicated bride/groom green rooms',
        'Customizable luxury round-table banquet setups with satin draping',
        'Full gourmet multi-cuisine live buffet stations with royal copper handis',
      ],
      ctaText: 'PLAN AN EVENT HERE',
      ctaAction: () => {
        onClose();
        onPlanEvent();
      },
    },
    gather: {
      title: 'Bring People Together — Courtyard Garden',
      eyebrow: 'GATHER AT THE VISTA GRAND',
      image: '/images/gather.webp',
      alt: 'The Vista Grand Courtyard Garden with Fairy Lights',
      capacity: 'Up to 200 Guests',
      timing: '06:00 PM – 12:00 AM (Evening Gatherings)',
      description:
        'An enchanting open-sky courtyard framed by lush frangipani and ficus trees wrapped in warm golden fairy lights. As twilight sets in, the courtyard comes alive with soft acoustic melodies, live tawa counters, and candlelit cocktail tables.',
      highlights: [
        'Enchanting nighttime ambiance with canopy fairy lights',
        'Spacious lawn layout for cocktail evenings, live music & receptions',
        'Cozy lounge nooks for family conversations and corporate networking',
        'Dedicated bar setup with artisanal cocktails and mocktail mixology',
      ],
      ctaText: 'BOOK THE COURTYARD',
      ctaAction: () => {
        onClose();
        onPlanEvent();
      },
    },
  };

  const currentSpace = spaces[activeTab] || spaces.dine;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#061827] border border-[#D7A52B]/40 text-white rounded-none shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Space Tabs */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#03111D]">
          <div className="flex items-center gap-2">
            {['dine', 'celebrate', 'gather'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-none transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#D7A52B] text-[#03111D] shadow-sm'
                    : 'bg-white/5 text-gray-300 hover:bg-white/15'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6">
          {/* Main Space Photo */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden border border-[#D7A52B]/30 bg-black/40">
            <img
              src={currentSpace.image}
              alt={currentSpace.alt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061827] via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
              <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-white/20">
                Capacity: {currentSpace.capacity}
              </span>
              <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-white/20">
                {currentSpace.timing}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="text-left space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D7A52B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D7A52B] uppercase">
                {currentSpace.eyebrow}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
              {currentSpace.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              {currentSpace.description}
            </p>

            {/* Highlights List */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold tracking-wider text-gray-200 uppercase mb-3">
                Space Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentSpace.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <span className="w-4 h-4 rounded-full bg-[#D7A52B]/20 text-[#D7A52B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#03111D] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-400 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D7A52B]" />
            <span>The Vista Grand, Anjur, Thane, Maharashtra</span>
          </div>
          <button
            onClick={currentSpace.ctaAction}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#D7A52B] hover:bg-[#E7C76A] text-[#03111D] font-bold text-xs tracking-wider rounded uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{currentSpace.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
