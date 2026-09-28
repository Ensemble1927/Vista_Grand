import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EventModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding Reception',
    eventDate: '',
    guestCount: '100 - 250 Guests',
    venue: 'Grand Banquet Hall',
    requirements: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D7A52B', '#E7C76A', '#FBF5E8', '#061827'],
      });
    } catch {
      // fallback
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-[#061827] border border-[#D7A52B]/40 text-white rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded transition-colors z-20 cursor-pointer"
          aria-label="Close event modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 bg-[#D7A52B]/20 text-[#D7A52B] rounded-full flex items-center justify-center mx-auto mb-5 border border-[#D7A52B]/50 animate-bounce">
              <PartyPopper className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
              Event Enquiry Received!
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-md mx-auto mb-6">
              Thank you, <span className="text-[#D7A52B] font-medium">{formData.name}</span>. Our dedicated banquet and celebrations concierge will contact you at <span className="text-white font-medium">{formData.phone}</span> / <span className="text-white font-medium">{formData.email}</span> within 24 hours to craft your tailored grand celebration package.
            </p>
            <div className="p-3 bg-white/5 border border-white/10 text-xs text-gray-300 mb-6 text-left space-y-1.5">
              <div className="flex justify-between">
                <span>Event Type:</span> <strong className="text-[#D7A52B]">{formData.eventType}</strong>
              </div>
              <div className="flex justify-between">
                <span>Venue Space:</span> <strong className="text-white">{formData.venue}</strong>
              </div>
              <div className="flex justify-between">
                <span>Guests:</span> <strong className="text-white">{formData.guestCount}</strong>
              </div>
              <div className="flex justify-between">
                <span>Enquiry Ref:</span> <span className="font-mono text-[#E7C76A]">VG-EVT-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-8 py-2.5 bg-[#D7A52B] hover:bg-[#E7C76A] text-[#03111D] font-bold text-xs tracking-wider rounded uppercase cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D7A52B]" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#D7A52B] uppercase">
                  CELEBRATIONS AT THE VISTA GRAND
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#D7A52B]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                Plan Your Grand Occasion
              </h3>
              <p className="text-xs text-gray-300 font-light mt-1">
                Weddings, Anniversaries, Corporate Dinners & Private Banquets
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full bg-[#03111D] border border-white/20 focus:border-[#D7A52B] rounded px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#03111D] border border-white/20 focus:border-[#D7A52B] rounded px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full bg-[#03111D] border border-white/20 focus:border-[#D7A52B] rounded px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#03111D] border border-white/20 focus:border-[#D7A52B] rounded px-3 py-2 text-xs text-white focus:outline-none transition-colors"
                  >
                    <option value="Wedding Reception">Wedding / Sangeet</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Anniversary Celebration">Anniversary</option>
                    <option value="Corporate Event">Corporate Meeting / Dinner</option>
                    <option value="Private Dinner">Private Cocktail Gathering</option>
                    <option value="Other">Other Special Celebration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-[#03111D] border border-white/20 focus:border-[#D7A52B] rounded px-3 py-2 text-xs text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                    Guest Count *
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full bg-[#03111D] border border-white/20 focus:border-[#D7A52B] rounded px-3 py-2 text-xs text-white focus:outline-none transition-colors"
                  >
                    <option value="25 - 50 Guests">25 - 50 Guests</option>
                    <option value="50 - 100 Guests">50 - 100 Guests</option>
                    <option value="100 - 250 Guests">100 - 250 Guests</option>
                    <option value="250 - 500 Guests">250 - 500 Guests</option>
                    <option value="500+ Guests">500+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                    Venue / Space *
                  </label>
                  <select
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className="w-full bg-[#03111D] border border-white/20 focus:border-[#D7A52B] rounded px-3 py-2 text-xs text-white focus:outline-none transition-colors"
                  >
                    <option value="Grand Banquet Hall">Grand Banquet Hall (Indoor AC)</option>
                    <option value="Outdoor Garden Courtyard">Outdoor Garden Courtyard</option>
                    <option value="Poolside / Terrace Deck">Pavilion & Terrace Deck</option>
                    <option value="Combined Grand Venue">Combined Full Estate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                  Specific Requirements or Questions
                </label>
                <textarea
                  rows="3"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Catering preferences, live music/DJ, decor style, audio-visual setup..."
                  className="w-full bg-[#03111D] border border-white/20 focus:border-[#D7A52B] rounded px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#D7A52B] hover:bg-[#E7C76A] text-[#03111D] font-bold text-xs tracking-[0.18em] rounded uppercase transition-all duration-300 shadow-[0_0_20px_rgba(215,165,43,0.35)] cursor-pointer"
                >
                  SEND ENQUIRY
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
