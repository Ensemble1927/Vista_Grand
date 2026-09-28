import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function DishOfTheWeek({ onExploreMenu }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const dishes = [
    {
      id: 1,
      badge: "CHEF'S SPECIAL",
      title: "Subz Dum Biryani",
      price: "₹420",
      isVeg: true,
      category: "Biryani",
      description: "Aromatic aged basmati rice slow-cooked in sealed earthen handi with garden-fresh vegetables, saffron, mint, and royal Awadhi spices. Served with creamy burani raita.",
      image: "/images/dishes/subz_dum_biryani.jpg",
      alt: "Authentic Subz Dum Biryani in traditional copper vessel",
    },
    {
      id: 2,
      badge: "SIGNATURE DISH",
      title: "Paneer Lababdar",
      price: "₹380",
      isVeg: true,
      category: "Main Course",
      description: "Charcoal-simmered rich tomato gravy enriched with churned butter and cashew paste, folded with succulent cottage cheese cubes and royal spices.",
      image: "/images/dishes/paneer_lababdar.jpg",
      alt: "Authentic Paneer Lababdar in copper handi with cream and coriander",
    },
    {
      id: 3,
      badge: "ROYAL CLASSIC",
      title: "Dal Makhani The Grand",
      price: "₹340",
      isVeg: true,
      category: "Main Course",
      description: "Black whole urad lentils slow-cooked overnight for 18 hours over live tandoor embers with organic white butter, whole spices, and fresh cream.",
      image: "/images/dishes/dal_makhani.jpg",
      alt: "Authentic slow-cooked Dal Makhani in traditional bowl",
    },
    {
      id: 4,
      badge: "CHEF'S SIGNATURE",
      title: "Murgh Makhani",
      price: "₹460",
      isVeg: false,
      category: "Main Course",
      description: "Clay-oven smoked tender chicken pieces gently simmered in a velvety, satin tomato and kasoori methi reduction with cultured butter.",
      image: "/images/dishes/murgh_makhani.jpg",
      alt: "Authentic Butter Chicken in rich makhani gravy",
    },
    {
      id: 5,
      badge: "TANDOOR SPECIAL",
      title: "Paneer Tikka Angara",
      price: "₹360",
      isVeg: true,
      category: "Starters",
      description: "Malai paneer cubes marinated in hung spiced curd, mustard oil, and ground spices, skewered with bell peppers and flame-roasted in the clay oven.",
      image: "/images/dishes/paneer_tikka.jpg",
      alt: "Authentic chargrilled Paneer Tikka with mint chutney",
    },
    {
      id: 6,
      badge: "FIERY TANDOOR",
      title: "Tandoori Chicken Grand",
      price: "₹480",
      isVeg: false,
      category: "Starters",
      description: "Spring chicken steeped in Kashmiri red chilies, crushed ginger-garlic, and royal spices, roasted to a smoky succulent finish.",
      image: "/images/dishes/tandoori_chicken.jpg",
      alt: "Authentic Tandoori Chicken chargrilled with lime and onions",
    },
    {
      id: 7,
      badge: "ARTISANAL BREAD",
      title: "Garlic Butter Naan",
      price: "₹110",
      isVeg: true,
      category: "Breads",
      description: "Refined flour dough hand-stretched and slapped on the inner clay walls of the tandoor, brushed with golden garlic butter and cilantro.",
      image: "/images/dishes/garlic_naan.jpg",
      alt: "Freshly baked tandoori garlic naan",
    },
    {
      id: 8,
      badge: "GRAND FINALE",
      title: "Shahi Gulab Jamun with Rabdi",
      price: "₹220",
      isVeg: true,
      category: "Desserts",
      description: "Warm, melt-in-mouth reduced milk dumplings soaked in green cardamom rose syrup, complemented with slow-churned saffron rabdi.",
      image: "/images/dishes/gulab_jamun.jpg",
      alt: "Authentic Shahi Gulab Jamun in sweet cardamom syrup",
    },
  ];

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="dish-of-the-week"
      className="relative bg-[#FBF5E8] text-[#111820] py-20 sm:py-28 overflow-hidden bg-parchment border-b border-[#D7A52B]/15"
    >
      {/* 
        SUPPLIED ARCHITECTURAL BACKGROUND (window.png)
        - Horizontal panoramic background spanning full width
        - Left side features the carved marble jaali arch window & warm golden sunlight
        - Right side naturally dissolves into warm ivory/cream (#FBF5E8)
      */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <img
          src="/images/window.png"
          alt="Traditional Indian Jali Architectural Window"
          className="w-full h-full object-cover object-left"
          loading="eager"
        />
        {/* Horizontal progressive veil: ensures crystal-clear text readability while allowing the jaali to glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF5E8]/85 via-[#FBF5E8]/40 via-45% to-[#FBF5E8]/95"></div>
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FBF5E8] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FBF5E8] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full-Width Horizontal Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pl-2 sm:pl-4">
          <div className="text-left max-w-2xl bg-[#FBF5E8]/70 backdrop-blur-[2px] p-4 sm:p-6 rounded-none border-l-2 border-[#D7A52B]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-5 h-[1.5px] bg-[#D7A52B]"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D7A52B] uppercase">
                CHEF'S SPECIAL SELECTION
              </span>
            </div>

            {/* Heading in Formal Serif Typography */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#111820] font-normal leading-[1.12] tracking-tight">
              A Taste Worth <span className="italic text-[#061827]">Talking About</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mt-3 max-w-xl">
              Our chef's specials, crafted with authentic ingredients, real clay tandoors, and centuries of royal culinary tradition. Scroll to explore signature delicacies.
            </p>
          </div>

          {/* Navigation Controls & Explore Button */}
          <div className="flex items-center gap-4 self-start md:self-end flex-shrink-0">
            <button
              onClick={onExploreMenu}
              className="hidden lg:inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 border-2 border-[#D7A52B] text-[#03111D] hover:bg-[#03111D] hover:text-[#FBF5E8] rounded-none text-xs font-bold tracking-[0.18em] transition-all cursor-pointer shadow-sm group"
            >
              <span>EXPLORE OUR MENU</span>
              <ArrowRight className="w-4 h-4 text-[#D7A52B] group-hover:text-[#FBF5E8] group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                className={`w-11 h-11 rounded-full border border-[#D7A52B] flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? 'bg-[#FBF5E8] text-[#03111D] hover:bg-[#D7A52B] hover:text-[#03111D] cursor-pointer shadow-sm active:scale-95'
                    : 'opacity-40 cursor-not-allowed text-gray-400 border-gray-300'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                className={`w-11 h-11 rounded-full border border-[#D7A52B] flex items-center justify-center transition-all ${
                  canScrollRight
                    ? 'bg-[#FBF5E8] text-[#03111D] hover:bg-[#D7A52B] hover:text-[#03111D] cursor-pointer shadow-sm active:scale-95'
                    : 'opacity-40 cursor-not-allowed text-gray-400 border-gray-300'
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width Horizontal Scrollable Dishes Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar pb-6 pt-2 px-2 scroll-smooth cursor-grab select-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="flex-shrink-0 w-[290px] sm:w-[330px] md:w-[360px] bg-[#F5EBD5]/85 hover:bg-[#F5EBD5] border border-[#D7A52B]/40 hover:border-[#D7A52B] rounded-none p-4 sm:p-5 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(215,165,43,0.22)] hover:-translate-y-1.5 flex flex-col justify-between group shadow-sm"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Dish Real Camera Image */}
              <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-black/10">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Veg / Non-veg symbol */}
                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm p-1 border border-black/10 shadow-sm">
                  <div
                    className={`w-3 h-3 border flex items-center justify-center ${
                      dish.isVeg ? 'border-green-600' : 'border-red-600'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        dish.isVeg ? 'bg-green-600' : 'bg-red-600'
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-2.5 left-2.5 bg-[#061827]/85 backdrop-blur-sm border border-[#D7A52B]/40 px-2.5 py-0.5 text-[10px] font-semibold text-[#D7A52B] tracking-wider uppercase">
                  {dish.category}
                </div>
              </div>

              {/* Card Content */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.16em] text-[#D7A52B] uppercase">
                    {dish.badge}
                  </span>
                  <span className="text-base sm:text-lg font-serif font-bold text-[#061827]">
                    {dish.price}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-[#111820] font-normal tracking-tight mb-2 leading-snug group-hover:text-[#061827] transition-colors">
                  {dish.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed line-clamp-3 mb-4">
                  {dish.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-[#D7A52B]/20 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-500 uppercase tracking-widest">
                  {dish.category}
                </span>
                <button
                  onClick={onExploreMenu}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#061827] group-hover:text-[#D7A52B] transition-colors cursor-pointer"
                >
                  <span>ORDER / DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
