import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2',
    seatingPreference: 'Outdoor Patio',
    specialRequest: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D7A52B', '#E7C76A', '#FBF5E8', '#061827'],
      });
    } catch {
      // confetti fallback
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#061827] border border-[#D7A52B]/40 text-white rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded transition-colors z-20 cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 bg-[#D7A52B]/20 text-[#D7A52B] rounded-full flex items-center justify-center mx-auto mb-5 border border-[#D7A52B]/50 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
              Reservation Requested!
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-sm mx-auto mb-6">
              Thank you, <span className="text-[#D7A52B] font-medium">{formData.name}</span>. Our team at The Vista Grand will call you at <span className="text-white font-medium">{formData.phone}</span> shortly to confirm your table for <span className="text-[#D7A52B]">{formData.guests} guests</span> on <span className="text-white font-medium">{formData.date || 'today'}</span>.
            </p>
            <div className="p-3 bg-white/5 border border-white/10 text-xs text-gray-300 mb-6 text-left space-y-1">
              <div className="flex justify-between">
                <span>Time:</span> <strong className="text-white">{formData.time}</strong>
              </div>
              <div className="flex justify-between">
                <span>Seating:</span> <strong className="text-[#D7A52B]">{formData.seatingPreference}</strong>
              </div>
              {formData.specialRequest && (
                <div className="flex justify-between">
                  <span>Note:</span> <span className="text-gray-300">{formData.specialRequest}</span>
                </div>
              )}
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
                  THE VISTA GRAND
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#D7A52B]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                Reserve Your Table
              </h3>
              <p className="text-xs text-gray-300 font-light mt-1">
                Experience exceptional fine dining in Anjur, Thane
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
                    placeholder="e.g. Rahul Mehta"
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#03111D] border border-white/20 focus:border-[#D7A52B] rounded px-3 py-2 text-xs text-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                    Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#03111D] border border-white/20 focus:border-[#D7A52B] rounded px-3 py-2 text-xs text-white focus:outline-none transition-colors"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="14:30">02:30 PM (Lunch)</option>
                    <option value="19:00">07:00 PM (Dinner)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Dinner)</option>
                    <option value="22:30">10:30 PM (Late Dinner)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                    Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#03111D] border border-white/20 focus:border-[#D7A52B] rounded px-3 py-2 text-xs text-white focus:outline-none transition-colors"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="6">6 Persons</option>
                    <option value="8">8 Persons</option>
                    <option value="10+">10+ (Family / Party)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                  Seating Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Outdoor Patio', 'Garden View', 'AC Fine Dining'].map((pref) => (
                    <button
                      type="button"
                      key={pref}
                      onClick={() => setFormData({ ...formData, seatingPreference: pref })}
                      className={`py-1.5 px-2 border text-[11px] font-medium rounded transition-colors cursor-pointer ${
                        formData.seatingPreference === pref
                          ? 'border-[#D7A52B] bg-[#D7A52B]/15 text-[#D7A52B]'
                          : 'border-white/15 text-gray-400 hover:border-white/40'
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium tracking-wider text-gray-300 uppercase mb-1">
                  Special Request (Optional)
                </label>
                <input
                  type="text"
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  placeholder="Anniversary, birthday, dietary preference, etc."
                  className="w-full bg-[#03111D] border border-white/20 focus:border-[#D7A52B] rounded px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#D7A52B] hover:bg-[#E7C76A] text-[#03111D] font-bold text-xs tracking-[0.18em] rounded uppercase transition-all duration-300 shadow-[0_0_20px_rgba(215,165,43,0.35)] cursor-pointer"
                >
                  REQUEST A TABLE
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
