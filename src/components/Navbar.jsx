import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin, Phone, Calendar } from 'lucide-react';

export default function Navbar({ onBookTable, onPlanEvent }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'DINING', href: '#dish-of-the-week' },
    { name: 'AMBIENCE', href: '#dine-experience' },
    { name: 'CELEBRATIONS', href: '#celebrate-experience' },
    { name: 'GALLERY', href: '#gather-experience' },
    { name: 'ABOUT', href: '#reviews' },
    { name: 'CONTACT', href: '#footer' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#061827]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#D7A52B]/25'
            : 'bg-gradient-to-b from-[#03111D]/90 via-[#03111D]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A52B]"
              aria-label="The Vista Grand Home"
            >
              <img
                src="/images/logo_emblem.png"
                alt="The Vista Grand Emblem"
                className="w-10 h-10 object-contain drop-shadow-[0_2px_8px_rgba(215,165,43,0.3)] group-hover:rotate-12 transition-transform duration-500"
              />
              <div className="flex flex-col text-left">
                <span className="text-[10px] tracking-[0.28em] text-[#D7A52B] font-medium uppercase leading-none">
                  the
                </span>
                <span className="text-xl sm:text-2xl font-serif tracking-[0.06em] text-white font-bold leading-tight group-hover:text-[#E7C76A] transition-colors">
                  vista grand
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.24em] text-gray-300 font-light uppercase leading-none">
                  exceptional experience
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium tracking-[0.18em] text-gray-200 hover:text-[#D7A52B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D7A52B] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-3.5">
              <button
                onClick={onPlanEvent}
                className="px-4 py-2 border border-[#D7A52B]/70 text-[#E7C76A] hover:bg-[#D7A52B]/10 hover:border-[#D7A52B] rounded text-xs font-semibold tracking-[0.16em] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                PLAN AN EVENT
              </button>
              <button
                onClick={onBookTable}
                className="px-5 py-2 bg-[#D7A52B] hover:bg-[#E7C76A] text-[#03111D] rounded text-xs font-bold tracking-[0.16em] transition-all duration-300 shadow-[0_0_15px_rgba(215,165,43,0.35)] hover:shadow-[0_0_22px_rgba(215,165,43,0.55)] active:scale-95 cursor-pointer"
              >
                BOOK A TABLE
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center space-x-2">
              <button
                onClick={onBookTable}
                className="hidden sm:inline-block px-3.5 py-1.5 bg-[#D7A52B] text-[#03111D] rounded text-xs font-bold tracking-wider"
              >
                BOOK
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-200 hover:text-[#D7A52B] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#061827] border-l border-[#D7A52B]/30 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <img src="/images/logo_emblem.png" alt="Emblem" className="w-8 h-8 object-contain" />
                <span className="font-serif text-lg font-bold text-white tracking-wider">THE VISTA GRAND</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-gray-300 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-[0.2em] text-gray-200 hover:text-[#D7A52B] transition-colors py-1.5"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPlanEvent();
              }}
              className="w-full py-2.5 border border-[#D7A52B]/80 text-[#D7A52B] rounded text-xs font-semibold tracking-wider hover:bg-[#D7A52B]/10 transition-colors"
            >
              PLAN AN EVENT
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookTable();
              }}
              className="w-full py-2.5 bg-[#D7A52B] hover:bg-[#E7C76A] text-[#03111D] rounded text-xs font-bold tracking-wider shadow-lg transition-colors"
            >
              BOOK A TABLE
            </button>
            <div className="text-[11px] text-gray-400 flex items-center justify-center gap-1.5 pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#D7A52B]" />
              <span>Anjur, Thane, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
