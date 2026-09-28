import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DishOfTheWeek from './components/DishOfTheWeek';
import MenuCarousel from './components/MenuCarousel';
import Reviews from './components/Reviews';
import ExperienceCards from './components/ExperienceCards';
import YourTableAwaits from './components/YourTableAwaits';
import Footer from './components/Footer';

import BookingModal from './components/BookingModal';
import EventModal from './components/EventModal';
import FullMenuModal from './components/FullMenuModal';
import SpaceModal from './components/SpaceModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSpaceOpen, setIsSpaceOpen] = useState(false);
  const [spaceInitialTab, setSpaceInitialTab] = useState('dine');

  const handleOpenSpace = (tab) => {
    setSpaceInitialTab(tab);
    setIsSpaceOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#03111D] text-white flex flex-col font-sans selection:bg-[#D7A52B]/30 selection:text-white">
      {/* 1. Navigation */}
      <Navbar
        onBookTable={() => setIsBookingOpen(true)}
        onPlanEvent={() => setIsEventOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero
        onExplore={() => {
          document.getElementById('dish-of-the-week')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3. Dish of the Week */}
      <DishOfTheWeek
        onExploreMenu={() => setIsMenuOpen(true)}
      />

      {/* 4. Our Menu (Interactive Center-focused Carousel) */}
      <MenuCarousel
        onViewFullMenu={() => setIsMenuOpen(true)}
      />

      {/* 5. Google Reviews */}
      <Reviews />

      {/* 6. Dine, 7. Celebrate, 8. Gather (The Three Experience Pillars) */}
      <ExperienceCards
        onExploreDining={() => handleOpenSpace('dine')}
        onPlanEvent={() => setIsEventOpen(true)}
        onDiscoverSpace={() => handleOpenSpace('gather')}
      />

      {/* 9. Your Table Awaits (Final CTA) */}
      <YourTableAwaits
        onBookTable={() => setIsBookingOpen(true)}
        onPlanEvent={() => setIsEventOpen(true)}
      />

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <EventModal
        isOpen={isEventOpen}
        onClose={() => setIsEventOpen(false)}
      />

      <FullMenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <SpaceModal
        isOpen={isSpaceOpen}
        initialTab={spaceInitialTab}
        onClose={() => setIsSpaceOpen(false)}
        onBookTable={() => setIsBookingOpen(true)}
        onPlanEvent={() => setIsEventOpen(true)}
      />
    </div>
  );
}
