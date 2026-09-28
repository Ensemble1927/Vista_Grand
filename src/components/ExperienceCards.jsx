import React from 'react';
import { ArrowRight, Heart, Cake, Gift, Building, Users, PartyPopper, Sparkles } from 'lucide-react';

export default function ExperienceCards({ onExploreDining, onPlanEvent, onDiscoverSpace }) {
  return (
    <section id="experiences" className="relative bg-[#03111D] py-20 sm:py-28 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* ROW 1: DINE (Image Left, Warm Cream Panel Right) */}
        <div id="dine-experience" className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#D7A52B]/40 shadow-2xl overflow-hidden group">
          {/* Left: Authentic Photograph from supplied folder */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] lg:h-[520px] overflow-hidden bg-black/40">
            <img
              src="/images/dine_patio.webp"
              alt="The Vista Grand Dining Patio and Pavilion"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 bg-[#061827]/85 backdrop-blur-sm border border-[#D7A52B]/40 px-3 py-1 text-[11px] font-semibold tracking-widest text-[#D7A52B] uppercase">
              ALFRESCO PATIO DINING
            </div>
          </div>

          {/* Right: Warm Ivory Experience Panel */}
          <div className="lg:col-span-5 bg-[#FBF5E8] text-[#111820] p-8 sm:p-12 lg:p-14 flex flex-col justify-center text-left relative bg-parchment">
            <div className="absolute top-4 right-4 w-16 h-16 opacity-15 pointer-events-none select-none">
              <svg viewBox="0 0 100 100" fill="none" stroke="#D7A52B" strokeWidth="1.5">
                <circle cx="50" cy="50" r="40" strokeDasharray="3 3"/>
                <circle cx="50" cy="50" r="25"/>
                <path d="M50,10 L50,90 M10,50 L90,50" />
              </svg>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#D7A52B]"></span>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#D7A52B] uppercase">
                DINE
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif text-[#061827] font-normal leading-tight mb-4">
              A Table for <br />
              <span className="italic">Every Occasion</span>
            </h3>

            <p className="text-sm text-gray-700 font-light leading-relaxed mb-6 max-w-md">
              Enjoy thoughtfully prepared food in a setting designed to make every meal memorable. From sunlit leisurely afternoon lunches to romantic candlelit dinners under the starlit sky.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-gray-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D7A52B]"></span>
                <span className="font-medium">Handcrafted Clay Tandoor</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D7A52B]"></span>
                <span className="font-medium">Woven Wicker Lounge</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D7A52B]"></span>
                <span className="font-medium">Sommelier Pairings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D7A52B]"></span>
                <span className="font-medium">Live Master Chef Counter</span>
              </div>
            </div>

            <div>
              <button
                onClick={onExploreDining}
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-[#D7A52B] text-[#03111D] hover:bg-[#03111D] hover:text-[#FBF5E8] rounded-none text-xs font-bold tracking-[0.18em] transition-all shadow-sm cursor-pointer group/btn"
              >
                <span>EXPLORE DINING</span>
                <ArrowRight className="w-4 h-4 text-[#D7A52B] group-hover/btn:text-[#FBF5E8] group-hover/btn:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>


        {/* ROW 2: CELEBRATE (Warm Cream Panel Left, Banquet Photograph Right) */}
        <div id="celebrate-experience" className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#D7A52B]/40 shadow-2xl overflow-hidden group">
          {/* Left: Warm Ivory Experience Panel */}
          <div className="lg:col-span-5 bg-[#FBF5E8] text-[#111820] p-8 sm:p-12 lg:p-14 flex flex-col justify-center text-left order-2 lg:order-1 relative bg-parchment">
            <div className="absolute top-4 left-4 w-16 h-16 opacity-15 pointer-events-none select-none">
              <svg viewBox="0 0 100 100" fill="none" stroke="#D7A52B" strokeWidth="1.5">
                <circle cx="50" cy="50" r="40" strokeDasharray="3 3"/>
                <circle cx="50" cy="50" r="25"/>
                <path d="M50,10 L50,90 M10,50 L90,50" />
              </svg>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#D7A52B]"></span>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#D7A52B] uppercase">
                CELEBRATE
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif text-[#061827] font-normal leading-tight mb-4">
              Make Your <br />
              <span className="italic">Moments Grand</span>
            </h3>

            <p className="text-sm text-gray-700 font-light leading-relaxed mb-6 max-w-md">
              From intimate gatherings to weddings, birthdays, anniversaries and corporate events, The Vista Grand provides the perfect royal setting for celebrations of all kinds.
            </p>

            {/* Celebration Categories with Icons matching vg ss.png */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 sm:gap-2 mb-8 text-center">
              <div className="flex flex-col items-center p-1.5 sm:p-2 bg-[#F5EBD5]/80 border border-[#D7A52B]/20">
                <Heart className="w-3.5 h-3.5 text-[#D7A52B] mb-1" />
                <span className="text-[9px] font-semibold text-gray-800 uppercase tracking-wider">Weddings</span>
              </div>
              <div className="flex flex-col items-center p-1.5 sm:p-2 bg-[#F5EBD5]/80 border border-[#D7A52B]/20">
                <Cake className="w-3.5 h-3.5 text-[#D7A52B] mb-1" />
                <span className="text-[9px] font-semibold text-gray-800 uppercase tracking-wider">Birthdays</span>
              </div>
              <div className="flex flex-col items-center p-1.5 sm:p-2 bg-[#F5EBD5]/80 border border-[#D7A52B]/20">
                <Gift className="w-3.5 h-3.5 text-[#D7A52B] mb-1" />
                <span className="text-[9px] font-semibold text-gray-800 uppercase tracking-wider">Anniversary</span>
              </div>
              <div className="flex flex-col items-center p-1.5 sm:p-2 bg-[#F5EBD5]/80 border border-[#D7A52B]/20">
                <Building className="w-3.5 h-3.5 text-[#D7A52B] mb-1" />
                <span className="text-[9px] font-semibold text-gray-800 uppercase tracking-wider">Corporate</span>
              </div>
              <div className="flex flex-col items-center p-1.5 sm:p-2 bg-[#F5EBD5]/80 border border-[#D7A52B]/20">
                <PartyPopper className="w-3.5 h-3.5 text-[#D7A52B] mb-1" />
                <span className="text-[9px] font-semibold text-gray-800 uppercase tracking-wider">Parties</span>
              </div>
            </div>

            <div>
              <button
                onClick={onPlanEvent}
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-[#D7A52B] text-[#03111D] hover:bg-[#03111D] hover:text-[#FBF5E8] rounded-none text-xs font-bold tracking-[0.18em] transition-all shadow-sm cursor-pointer group/btn"
              >
                <span>PLAN AN EVENT</span>
                <ArrowRight className="w-4 h-4 text-[#D7A52B] group-hover/btn:text-[#FBF5E8] group-hover/btn:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Authentic Banquet Hall Photo from supplied folder */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] lg:h-[520px] overflow-hidden bg-black/40 order-1 lg:order-2">
            <img
              src="/images/celebrate_hall.webp"
              alt="The Vista Grand Grand Banquet Celebration Hall"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute top-4 right-4 bg-[#061827]/85 backdrop-blur-sm border border-[#D7A52B]/40 px-3 py-1 text-[11px] font-semibold tracking-widest text-[#D7A52B] uppercase">
              CAPACITY: UP TO 450 GUESTS
            </div>
          </div>
        </div>


        {/* ROW 3: GATHER (Image Left, Warm Cream Panel Right) */}
        <div id="gather-experience" className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#D7A52B]/40 shadow-2xl overflow-hidden group">
          {/* Left: Authentic Courtyard Fairy Lights Photograph */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] lg:h-[520px] overflow-hidden bg-black/40">
            <img
              src="/images/gather.webp"
              alt="The Vista Grand Courtyard Garden with Fairy Lights"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 bg-[#061827]/85 backdrop-blur-sm border border-[#D7A52B]/40 px-3 py-1 text-[11px] font-semibold tracking-widest text-[#D7A52B] uppercase">
              ENCHANTED COURTYARD GARDEN
            </div>
          </div>

          {/* Right: Warm Ivory Experience Panel */}
          <div className="lg:col-span-5 bg-[#FBF5E8] text-[#111820] p-8 sm:p-12 lg:p-14 flex flex-col justify-center text-left relative bg-parchment">
            <div className="absolute top-4 right-4 w-16 h-16 opacity-15 pointer-events-none select-none">
              <svg viewBox="0 0 100 100" fill="none" stroke="#D7A52B" strokeWidth="1.5">
                <circle cx="50" cy="50" r="40" strokeDasharray="3 3"/>
                <circle cx="50" cy="50" r="25"/>
                <path d="M50,10 L50,90 M10,50 L90,50" />
              </svg>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#D7A52B]"></span>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#D7A52B] uppercase">
                GATHER
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif text-[#061827] font-normal leading-tight mb-4">
              Bring People <br />
              <span className="italic">Together</span>
            </h3>

            <p className="text-sm text-gray-700 font-light leading-relaxed mb-6 max-w-md">
              Good food becomes better when shared. Gather with family, friends and colleagues in a space designed for togetherness, surrounded by greenery and magical evening illumination.
            </p>

            {/* Gathering Categories with descriptions matching vg ss.png */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-8">
              <div className="p-2.5 bg-[#F5EBD5]/80 border border-[#D7A52B]/20 text-center">
                <Users className="w-4 h-4 text-[#D7A52B] mx-auto mb-1" />
                <h4 className="text-[11px] font-bold text-gray-900 uppercase">Family</h4>
                <p className="text-[9px] text-gray-600 mt-0.5">Long lunches and grand dinners</p>
              </div>
              <div className="p-2.5 bg-[#F5EBD5]/80 border border-[#D7A52B]/20 text-center">
                <Sparkles className="w-4 h-4 text-[#D7A52B] mx-auto mb-1" />
                <h4 className="text-[11px] font-bold text-gray-900 uppercase">Friends</h4>
                <p className="text-[9px] text-gray-600 mt-0.5">Celebrations & get-togethers</p>
              </div>
              <div className="p-2.5 bg-[#F5EBD5]/80 border border-[#D7A52B]/20 text-center">
                <Building className="w-4 h-4 text-[#D7A52B] mx-auto mb-1" />
                <h4 className="text-[11px] font-bold text-gray-900 uppercase">Corporate</h4>
                <p className="text-[9px] text-gray-600 mt-0.5">Meetings & networking dinners</p>
              </div>
            </div>

            <div>
              <button
                onClick={onDiscoverSpace}
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-[#D7A52B] text-[#03111D] hover:bg-[#03111D] hover:text-[#FBF5E8] rounded-none text-xs font-bold tracking-[0.18em] transition-all shadow-sm cursor-pointer group/btn"
              >
                <span>DISCOVER THE SPACE</span>
                <ArrowRight className="w-4 h-4 text-[#D7A52B] group-hover/btn:text-[#FBF5E8] group-hover/btn:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
