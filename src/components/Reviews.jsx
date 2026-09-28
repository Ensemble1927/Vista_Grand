import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      quote: "Beautiful ambience, delicious food and excellent service. Perfect place for family dinners and special occasions.",
      author: "Rahul Mehta",
      role: "Google Review",
      avatar: "/images/review_avatar.webp",
      stars: 5,
      date: "2 weeks ago",
    },
    {
      id: 2,
      quote: "The banquet hall experience for my sister's wedding reception was magnificent. The Subz Biryani and Paneer Lababdar had all guests asking for seconds!",
      author: "Pooja Hegde",
      role: "Google Review",
      avatar: null,
      stars: 5,
      date: "1 month ago",
    },
    {
      id: 3,
      quote: "Outstanding hospitality in Anjur, Thane. The open-air patio with fairy lights creates an enchanting evening dining vibe. Must visit for romantic dinners.",
      author: "Dr. Vikram Kulkarni",
      role: "Google Review",
      avatar: null,
      stars: 5,
      date: "3 weeks ago",
    },
    {
      id: 4,
      quote: "We hosted our corporate annual dinner at The Vista Grand. Seamless organization, attentive staff, and exceptional culinary presentation.",
      author: "Sameer Shah",
      role: "Google Review",
      avatar: null,
      stars: 5,
      date: "2 months ago",
    },
    {
      id: 5,
      quote: "The ambience at night is simply magical with the tree fairy lights and open architecture. The tandoori platter and garlic butter naan were perfection.",
      author: "Ananya Deshmukh",
      role: "Google Review",
      avatar: null,
      stars: 5,
      date: "3 weeks ago",
    },
    {
      id: 6,
      quote: "One of the finest dining destinations around Bhiwandi-Thane. Ample parking, warm hospitality, and mouth-watering Awadhi delicacies.",
      author: "Rajesh Patel",
      role: "Google Review",
      avatar: null,
      stars: 5,
      date: "1 month ago",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const autoRotateTimerRef = useRef(null);

  // Auto rotate every 5 seconds, paused on hover
  useEffect(() => {
    if (isHovered) return;

    autoRotateTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => {
      if (autoRotateTimerRef.current) clearInterval(autoRotateTimerRef.current);
    };
  }, [isHovered, reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
  };

  // Helper to get relative review by offset (-1, 0, +1)
  const getReviewAt = (offset) => {
    const idx = (currentIndex + offset + reviews.length) % reviews.length;
    return { ...reviews[idx], actualIndex: idx };
  };

  const prevReview = getReviewAt(-1);
  const currentReview = getReviewAt(0);
  const nextReview = getReviewAt(1);

  return (
    <section
      id="reviews"
      className="relative bg-[#061827] text-white py-24 sm:py-32 overflow-hidden border-t border-[#D7A52B]/30 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Ambience Texture & Foliage Overlay */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="/images/gather.webp"
          alt=""
          className="w-full h-full object-cover filter blur-[2px]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#061827]/90"></div>
      </div>

      {/* Decorative Golden Line-Art Leaf Motif on the Left */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-48 sm:w-64 opacity-25 pointer-events-none select-none">
        <svg viewBox="0 0 200 300" fill="none" stroke="#D7A52B" strokeWidth="1.2" className="w-full h-auto">
          <path d="M20,150 Q70,50 140,40 T180,90 T130,170 T60,200 T20,150 Z" />
          <path d="M20,150 L140,40" strokeDasharray="3 3" />
          <path d="M40,120 Q90,90 120,70" />
          <path d="M70,160 Q120,130 150,110" />
          <path d="M50,180 Q100,200 130,230" />
          <path d="M20,150 Q80,240 150,260" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow with Google Reviews Logo Accent */}
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="w-5 h-[1.5px] bg-[#D7A52B]"></span>
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D7A52B] uppercase">
            GOOGLE REVIEWS
          </span>
          <span className="w-5 h-[1.5px] bg-[#D7A52B]"></span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal tracking-tight mb-4">
          Loved by <span className="italic text-[#F4E4AF]">Our Guests</span>
        </h2>

        {/* Overall Rating Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-[#03111D]/80 border border-[#D7A52B]/30 rounded-full mb-10 sm:mb-14 shadow-sm">
          <div className="flex items-center gap-1 text-[#D7A52B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-semibold text-gray-200">
            4.9 / 5.0 Rating on Google
          </span>
        </div>

        {/* Multi-Card Review Carousel Area (1 card on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto mb-10">
          
          {/* Card 1: Left / Previous Review (Visible on Desktop) */}
          <div
            onClick={() => handlePrev()}
            className="hidden lg:flex flex-col justify-between p-6 sm:p-7 bg-[#03111D]/75 border border-[#D7A52B]/20 rounded-none text-left cursor-pointer transition-all duration-700 ease-out transform scale-95 opacity-65 hover:opacity-90 hover:scale-[0.97]"
          >
            <div>
              {/* Stars & Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 text-[#D7A52B]">
                  {[...Array(prevReview.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#D7A52B]/30 rotate-180" />
              </div>

              {/* Quote text */}
              <p className="font-serif italic text-gray-300 font-light text-sm sm:text-base leading-relaxed line-clamp-4">
                “{prevReview.quote}”
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#D7A52B]/15">
              {prevReview.avatar ? (
                <img
                  src={prevReview.avatar}
                  alt={prevReview.author}
                  className="w-9 h-9 rounded-full object-cover ring-1 ring-[#D7A52B]/60"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-[#D7A52B]/20 border border-[#D7A52B]/40 text-[#D7A52B] font-serif font-bold text-xs flex items-center justify-center">
                  {prevReview.author.charAt(0)}
                </div>
              )}
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide">
                  {prevReview.author}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                  <span>Google Review</span>
                  <span>•</span>
                  <span>{prevReview.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Center / Active Primary Review (Visible on all screens) */}
          <div className="flex flex-col justify-between p-7 sm:p-8 bg-[#0a2238]/95 border-2 border-[#D7A52B] rounded-none text-left shadow-[0_12px_40px_rgba(215,165,43,0.2)] transition-all duration-700 ease-out transform scale-100 lg:scale-105 z-20 relative">
            {/* Top Gold Corner Accent */}
            <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
              <div className="w-12 h-1 bg-[#D7A52B] rotate-45 transform origin-top-left"></div>
            </div>

            <div>
              {/* Stars & Quote Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1 text-[#D7A52B]">
                  {[...Array(currentReview.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-1 px-2.5 py-0.5 bg-[#D7A52B]/15 border border-[#D7A52B]/40 rounded text-[10px] font-semibold text-[#D7A52B] uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3 text-[#D7A52B]" />
                  Verified Diner
                </div>
              </div>

              {/* Quote text */}
              <p className="font-serif italic text-gray-100 font-light text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-snug mb-2">
                “{currentReview.quote}”
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center gap-3.5 mt-8 pt-5 border-t border-[#D7A52B]/25">
              {currentReview.avatar ? (
                <img
                  src={currentReview.avatar}
                  alt={currentReview.author}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#D7A52B] shadow-md"
                />
              ) : (
                <div className="w-11 h-11 rounded-full bg-[#D7A52B]/25 border border-[#D7A52B] text-[#D7A52B] font-serif font-bold text-sm flex items-center justify-center">
                  {currentReview.author.charAt(0)}
                </div>
              )}
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-white tracking-wide">
                  {currentReview.author}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-gray-300">
                  <svg className="w-3 h-3 text-[#D7A52B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  <span>{currentReview.role}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{currentReview.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Right / Next Review (Visible on Tablet & Desktop) */}
          <div
            onClick={() => handleNext()}
            className="hidden md:flex flex-col justify-between p-6 sm:p-7 bg-[#03111D]/75 border border-[#D7A52B]/20 rounded-none text-left cursor-pointer transition-all duration-700 ease-out transform scale-95 opacity-65 hover:opacity-90 hover:scale-[0.97]"
          >
            <div>
              {/* Stars & Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 text-[#D7A52B]">
                  {[...Array(nextReview.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#D7A52B]/30 rotate-180" />
              </div>

              {/* Quote text */}
              <p className="font-serif italic text-gray-300 font-light text-sm sm:text-base leading-relaxed line-clamp-4">
                “{nextReview.quote}”
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#D7A52B]/15">
              {nextReview.avatar ? (
                <img
                  src={nextReview.avatar}
                  alt={nextReview.author}
                  className="w-9 h-9 rounded-full object-cover ring-1 ring-[#D7A52B]/60"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-[#D7A52B]/20 border border-[#D7A52B]/40 text-[#D7A52B] font-serif font-bold text-xs flex items-center justify-center">
                  {nextReview.author.charAt(0)}
                </div>
              )}
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide">
                  {nextReview.author}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                  <span>Google Review</span>
                  <span>•</span>
                  <span>{nextReview.date}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Controls (Previous / Next Arrows and Minimal Dots) */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D7A52B]/50 hover:border-[#D7A52B] bg-[#03111D]/80 hover:bg-[#D7A52B] text-gray-200 hover:text-[#03111D] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex ? 'w-6 bg-[#D7A52B]' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D7A52B]/50 hover:border-[#D7A52B] bg-[#03111D]/80 hover:bg-[#D7A52B] text-gray-200 hover:text-[#03111D] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
