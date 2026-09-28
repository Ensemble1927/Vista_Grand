import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function MenuCarousel({ onViewFullMenu }) {
  const baseCategories = [
    {
      id: 'starters',
      name: 'STARTERS',
      image: '/images/dishes/paneer_tikka.jpg',
      description: 'Crispy kebabs, fragrant tikkas, and handcrafted appetizers.',
      sampleDishes: [
        { name: 'Paneer Tikka Angara', price: '₹360', desc: 'Chargrilled cottage cheese in aromatic spices' },
        { name: 'Tandoori Chicken Grand', price: '₹480', desc: 'Tender marinated chicken char-grilled in clay oven' },
        { name: 'Tandoori Malai Broccoli', price: '₹350', desc: 'Creamy cardamom infused charred florets' },
        { name: 'Crispy Corn Salt & Pepper', price: '₹320', desc: 'Golden fried corn tossed with scallions and crushed pepper' },
      ],
    },
    {
      id: 'main-course',
      name: 'MAIN COURSE',
      image: '/images/dishes/paneer_lababdar.jpg',
      description: 'Rich royal gravies, slow-cooked delicacies, and wholesome gravies.',
      sampleDishes: [
        { name: 'Paneer Lababdar', price: '₹380', desc: 'Velvety tomato gravy with soft paneer and churned butter' },
        { name: 'Dal Makhani The Grand', price: '₹340', desc: 'Slow-cooked overnight for 18 hours with white butter' },
        { name: 'Murgh Makhani', price: '₹460', desc: 'Charcoal smoked chicken in silky buttery makhani gravy' },
        { name: 'Subz Handi Diwani', price: '₹360', desc: 'Garden vegetables in mild cashew and aromatic sauce' },
      ],
    },
    {
      id: 'biryani',
      name: 'BIRYANI',
      image: '/images/dishes/subz_dum_biryani.jpg',
      description: 'Dum-cooked basmati rice with fragrant saffron, mint, and secret spices.',
      sampleDishes: [
        { name: 'Subz Dum Biryani', price: '₹420', desc: 'Basmati rice, garden vegetables, fried onion, raita' },
        { name: 'Awadhi Murgh Biryani', price: '₹490', desc: 'Dum-cooked chicken with kewra, saffron, and mint' },
        { name: 'Gosht Dum Biryani', price: '₹560', desc: 'Tender mutton layered with royal long-grain rice' },
        { name: 'Paneer Tikka Biryani', price: '₹440', desc: 'Smoky tandoori paneer dum-cooked with basmati' },
      ],
    },
    {
      id: 'breads',
      name: 'BREADS',
      image: '/images/dishes/garlic_naan.jpg',
      description: 'Freshly baked artisanal naan, kulchas, and rotis straight from the tandoor.',
      sampleDishes: [
        { name: 'Garlic Butter Naan', price: '₹110', desc: 'Charred garlic buttered leavened bread' },
        { name: 'Amritsari Kulcha', price: '₹140', desc: 'Stuffed with spiced potatoes and cottage cheese' },
        { name: 'Roomali Roti', price: '₹90', desc: 'Handkerchief-thin royal griddled bread' },
        { name: 'Cheese Chilli Naan', price: '₹160', desc: 'Stuffed with melted mozzarella and green chilies' },
      ],
    },
    {
      id: 'desserts',
      name: 'DESSERTS',
      image: '/images/dishes/gulab_jamun.jpg',
      description: 'Warm gulab jamuns, chilled rasmalai, and grand dessert selections.',
      sampleDishes: [
        { name: 'Shahi Gulab Jamun with Rabdi', price: '₹220', desc: 'Warm syrup-soaked dumplings with slow-churned rabdi' },
        { name: 'Kesar Rasmalai', price: '₹240', desc: 'Saffron milk poached cottage cheese discs with pistachios' },
        { name: 'Moong Dal Halwa', price: '₹260', desc: 'Pure desi ghee slow-roasted lentil fudge' },
        { name: 'Royal Matka Kulfi', price: '₹200', desc: 'Traditional slow-reduced cardamom pistachio ice cream' },
      ],
    },
    {
      id: 'beverages',
      name: 'BEVERAGES',
      image: '/images/dishes/grand_beverage.jpg',
      description: 'Refreshing tropical mocktails, artisanal coolers, and herbal brews.',
      sampleDishes: [
        { name: 'Grand Alphonso Mojito', price: '₹240', desc: 'Alphonso mango pulp, fresh mint, lime, sparkling soda' },
        { name: 'Kesar Pista Lassi', price: '₹180', desc: 'Thick churned royal yogurt with saffron and nuts' },
        { name: 'Berry Basil Sparkler', price: '₹220', desc: 'Muddled wild berries, fresh basil, and crushed ice' },
        { name: 'Masala Chaas', price: '₹120', desc: 'Spiced roasted cumin buttermilk cooler' },
      ],
    },
  ];

  // Repeat 3 times for wide infinite wrap
  const COPIES = 3;
  const categories = [];
  for (let c = 0; c < COPIES; c++) {
    baseCategories.forEach((cat, origIndex) => {
      categories.push({
        ...cat,
        uniqueId: `${cat.id}-copy-${c}`,
        originalIndex: origIndex,
        globalIndex: c * baseCategories.length + origIndex,
      });
    });
  }

  // Initial focus on Biryani in the middle set (copy 1, index 2 -> globalIndex 8)
  const [activeGlobalIndex, setActiveGlobalIndex] = useState(baseCategories.length + 2);
  const activeCategory = baseCategories[activeGlobalIndex % baseCategories.length] || baseCategories[0];

  const carouselRef = useRef(null);
  const itemRefs = useRef([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // Scroll to a global index smoothly and center it
  const scrollToGlobalIndex = useCallback((targetIndex, smooth = true) => {
    const container = carouselRef.current;
    const item = itemRefs.current[targetIndex];
    if (!container || !item) return;

    const containerWidth = container.clientWidth;
    const itemLeft = item.offsetLeft;
    const itemWidth = item.offsetWidth;
    const scrollTarget = itemLeft + itemWidth / 2 - containerWidth / 2;

    container.scrollTo({
      left: scrollTarget,
      behavior: smooth ? 'smooth' : 'auto',
    });

    setActiveGlobalIndex(targetIndex);
  }, []);

  // Center initial Biryani on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToGlobalIndex(baseCategories.length + 2, false);
    }, 150);
    return () => clearTimeout(timer);
  }, [scrollToGlobalIndex, baseCategories.length]);

  // Pause helper
  const triggerPause = (durationMs = 4500) => {
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, durationMs);
  };

  // Next / Previous Navigation
  const handleNext = () => {
    triggerPause(5000);
    const nextIndex = activeGlobalIndex + 1;
    // Wrap smoothly if near end of 3rd copy
    if (nextIndex >= baseCategories.length * 2 + 3) {
      const resetIndex = nextIndex - baseCategories.length;
      scrollToGlobalIndex(resetIndex, false);
      requestAnimationFrame(() => scrollToGlobalIndex(resetIndex + 1, true));
    } else {
      scrollToGlobalIndex(nextIndex, true);
    }
  };

  const handlePrev = () => {
    triggerPause(5000);
    const prevIndex = activeGlobalIndex - 1;
    // Wrap smoothly if near start of 1st copy
    if (prevIndex < 3) {
      const resetIndex = prevIndex + baseCategories.length;
      scrollToGlobalIndex(resetIndex, false);
      requestAnimationFrame(() => scrollToGlobalIndex(resetIndex - 1, true));
    } else {
      scrollToGlobalIndex(prevIndex, true);
    }
  };

  // Click on a specific category item
  const handleItemClick = (index) => {
    triggerPause(5000);
    scrollToGlobalIndex(index, true);
  };

  // Stable Auto-Advance every 4.5 seconds (zero jitter, calm transitions)
  useEffect(() => {
    if (isHovered || isPaused) return;

    const interval = setInterval(() => {
      setActiveGlobalIndex((current) => {
        let nextIndex = current + 1;
        // Keep in the middle set
        if (nextIndex >= baseCategories.length * 2 + 2) {
          const reset = nextIndex - baseCategories.length;
          scrollToGlobalIndex(reset, false);
          nextIndex = reset + 1;
        }
        scrollToGlobalIndex(nextIndex, true);
        return nextIndex;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered, isPaused, scrollToGlobalIndex, baseCategories.length]);

  // On manual scroll, detect centered item without jitter
  const handleScroll = () => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      const container = carouselRef.current;
      if (!container) return;
      const centerPos = container.getBoundingClientRect().left + container.clientWidth / 2;

      let closestIdx = activeGlobalIndex;
      let minDiff = Infinity;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.left + rect.width / 2;
        const diff = Math.abs(elCenter - centerPos);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });

      if (closestIdx !== activeGlobalIndex) {
        setActiveGlobalIndex(closestIdx);
      }
    }, 120);
  };

  return (
    <section
      id="menu"
      className="relative bg-[#FBF5E8] text-[#111820] py-24 sm:py-32 overflow-hidden bg-parchment border-t border-[#D7A52B]/20 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Luxury Gold Architectural Ornament on the right */}
      <div className="absolute right-0 top-1/4 w-20 sm:w-28 opacity-80 pointer-events-none select-none transform scale-x-[-1]">
        <img
          src="/images/luxury_gold_ornament.svg"
          alt=""
          className="w-full h-auto object-contain filter drop-shadow-sm"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center justify-center gap-2 mb-3.5">
          <span className="w-6 h-[1.5px] bg-[#D7A52B]"></span>
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D7A52B] uppercase">
            OUR MENU
          </span>
          <span className="w-6 h-[1.5px] bg-[#D7A52B]"></span>
        </div>

        {/* Heading in Formal Serif Typography */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#111820] font-normal tracking-tight mb-4">
          Something for <span className="italic font-normal text-[#061827]">Every Table</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-600 font-light max-w-2xl mx-auto mb-12 sm:mb-16">
          From comforting favourites to indulgent royal specials, explore the authentic culinary heritage of The Vista Grand.
        </p>

        {/* Wider, Spacious Carousel Container with Gold Arrows */}
        <div className="relative max-w-7xl mx-auto px-2 sm:px-8 lg:px-14">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-24 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D7A52B] bg-[#FBF5E8]/95 backdrop-blur-sm text-[#03111D] hover:bg-[#D7A52B] hover:text-[#03111D] flex items-center justify-center transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
            aria-label="Previous menu category"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-24 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D7A52B] bg-[#FBF5E8]/95 backdrop-blur-sm text-[#03111D] hover:bg-[#D7A52B] hover:text-[#03111D] flex items-center justify-center transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
            aria-label="Next menu category"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Horizontally Scrolling Wide Track with Generous Spacing & Zero Jitter */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            onTouchStart={() => triggerPause(6000)}
            className="flex items-center gap-12 sm:gap-16 md:gap-20 overflow-x-auto no-scrollbar py-12 sm:py-16 px-12 sm:px-24 select-none cursor-grab active:cursor-grabbing scroll-smooth"
            style={{
              scrollSnapType: 'none',
            }}
          >
            {categories.map((cat, idx) => {
              const isCenter = idx === activeGlobalIndex;

              return (
                <div
                  key={cat.uniqueId}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  onClick={() => handleItemClick(idx)}
                  className={`flex-shrink-0 flex flex-col items-center cursor-pointer transition-all duration-500 ease-out group ${
                    isCenter
                      ? 'scale-110 sm:scale-115 z-20 opacity-100'
                      : 'scale-90 opacity-70 hover:opacity-95 hover:scale-95 z-10'
                  }`}
                >
                  {/* Circular Image Container with Sharp High-DPI Rendering & Stable Ring */}
                  <div
                    className={`relative rounded-full p-1.5 transition-all duration-500 ${
                      isCenter
                        ? 'ring-4 ring-[#D7A52B] ring-offset-4 ring-offset-[#FBF5E8] shadow-[0_12px_32px_rgba(215,165,43,0.35)]'
                        : 'border border-[#D7A52B]/40 group-hover:border-[#D7A52B]'
                    }`}
                  >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-black/10">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        draggable="false"
                        loading="eager"
                        decoding="async"
                      />
                    </div>

                    {isCenter && (
                      <div className="absolute -top-1 -right-1 bg-[#D7A52B] text-[#03111D] p-1.5 rounded-full shadow-md animate-pulse">
                        <Sparkles className="w-3 h-3" />
                      </div>
                    )}
                  </div>

                  {/* Category Label Underneath */}
                  <span
                    className={`mt-4 text-xs sm:text-sm tracking-[0.22em] font-semibold uppercase transition-all duration-300 whitespace-nowrap ${
                      isCenter
                        ? 'text-[#061827] font-bold tracking-[0.25em]'
                        : 'text-gray-700 group-hover:text-[#D7A52B]'
                    }`}
                  >
                    {cat.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Category Mini Preview Drawer (Wider & Stably Displayed) */}
          <div className="mt-6 mb-10 max-w-4xl mx-auto bg-[#F5EBD5]/90 border border-[#D7A52B]/40 rounded-none p-5 sm:p-7 text-left shadow-sm transition-all duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-[#D7A52B]/20 gap-1.5">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#D7A52B] uppercase">
                {activeCategory.name} HIGHLIGHTS
              </span>
              <span className="text-xs sm:text-sm text-gray-700 italic font-light">
                {activeCategory.description}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              {activeCategory.sampleDishes.map((dish, i) => (
                <div key={i} className="flex justify-between items-start py-1.5 border-b border-[#D7A52B]/10 sm:border-b-0">
                  <div>
                    <span className="font-serif font-semibold text-[#061827] text-sm sm:text-base">{dish.name}</span>
                    <p className="text-[11px] sm:text-xs text-gray-600 mt-0.5 leading-snug font-light">{dish.desc}</p>
                  </div>
                  <span className="font-serif font-bold text-[#D7A52B] ml-3 text-sm sm:text-base">{dish.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Button: VIEW FULL MENU */}
          <div className="mt-8">
            <button
              onClick={onViewFullMenu}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 border-2 border-[#D7A52B] text-[#03111D] hover:bg-[#03111D] hover:text-[#FBF5E8] rounded-none text-xs sm:text-sm font-bold tracking-[0.2em] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>VIEW FULL MENU</span>
              <ArrowRight className="w-4 h-4 text-[#D7A52B] group-hover:text-[#FBF5E8] transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
