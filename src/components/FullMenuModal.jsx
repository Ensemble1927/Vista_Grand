import React, { useState } from 'react';
import { X, Search, Sparkles, Flame, Leaf } from 'lucide-react';

export default function FullMenuModal({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', name: 'ALL SPECIALTIES' },
    { id: 'starters', name: 'STARTERS' },
    { id: 'main-course', name: 'MAIN COURSE' },
    { id: 'biryani', name: 'BIRYANI' },
    { id: 'breads', name: 'BREADS' },
    { id: 'desserts', name: 'DESSERTS' },
    { id: 'beverages', name: 'BEVERAGES' },
  ];

  const menuItems = [
    // Starters
    {
      category: 'starters',
      name: 'Paneer Tikka Grand',
      price: '₹360',
      isVeg: true,
      tag: "Chef's Favorite",
      desc: 'Chargrilled cottage cheese marinated in aromatic royal spices, served with fresh mint chutney.',
      image: '/images/dish_paneer_tikka.webp',
    },
    {
      category: 'starters',
      name: 'Chicken Tikka Angara',
      price: '₹420',
      isVeg: false,
      tag: 'Signature',
      desc: 'Tender chicken marinated in our signature fiery spice blend, charred to perfection in tandoor.',
      image: '/images/dish_chicken_tikka.webp',
    },
    {
      category: 'starters',
      name: 'Tandoori Stuffed Mushrooms',
      price: '₹340',
      isVeg: true,
      tag: null,
      desc: 'Juicy mushroom caps stuffed with spiced cheese & herbs, roasted slowly over live embers.',
      image: '/images/dish_tandoori_mushrooms.webp',
    },
    {
      category: 'starters',
      name: 'Crispy Salt & Pepper Corn',
      price: '₹320',
      isVeg: true,
      tag: 'Crispy',
      desc: 'Golden fried sweet corn tossed with spring onions, crushed black pepper and lime zest.',
      image: '/images/dish_crispy_corn.webp',
    },
    {
      category: 'starters',
      name: 'Mutton Seekh Kebab',
      price: '₹480',
      isVeg: false,
      tag: 'Royal Special',
      desc: 'Finely minced spiced mutton skewers flame-grilled with coriander and saffron butter.',
      image: null,
    },
    {
      category: 'starters',
      name: 'Dahi Ke Kebab',
      price: '₹350',
      isVeg: true,
      tag: null,
      desc: 'Crispy golden patties of hung curd with mild green chilies, cardamom and pomegranate dip.',
      image: null,
    },

    // Main Course
    {
      category: 'main-course',
      name: 'Paneer Lababdar',
      price: '₹380',
      isVeg: true,
      tag: 'Signature Dish',
      desc: 'Rich and creamy tomato gravy with soft paneer cubes, finished with royal spices and butter.',
      image: '/images/paneer_lababdar.webp',
    },
    {
      category: 'main-course',
      name: 'Dal Makhani The Grand',
      price: '₹340',
      isVeg: true,
      tag: "Chef's Special",
      desc: 'Black lentils slow-cooked overnight on charcoal with whole spices, churned butter and cream.',
      image: null,
    },
    {
      category: 'main-course',
      name: 'Murgh Makhani (Butter Chicken)',
      price: '₹460',
      isVeg: false,
      tag: 'Signature',
      desc: 'Charcoal-grilled chicken simmered in a velvety, subtly sweet tomato and fenugreek reduction.',
      image: null,
    },
    {
      category: 'main-course',
      name: 'Kadhai Paneer Nizami',
      price: '₹370',
      isVeg: true,
      tag: null,
      desc: 'Fresh paneer tossed with crunchy bell peppers, whole coriander seeds, and crushed dried red chilies.',
      image: null,
    },
    {
      category: 'main-course',
      name: 'Rogan Josh Kashmiri',
      price: '₹540',
      isVeg: false,
      tag: 'Royal Heritage',
      desc: 'Tender baby mutton pieces braised in an aromatic Kashmiri chili and ratanjot gravy.',
      image: null,
    },
    {
      category: 'main-course',
      name: 'Subz Diwani Handi',
      price: '₹330',
      isVeg: true,
      tag: null,
      desc: 'Seasonal farm-fresh vegetables cooked with spinach puree, cashew paste, and fresh spices.',
      image: null,
    },

    // Biryani
    {
      category: 'biryani',
      name: 'Subz Dum Biryani',
      price: '₹420',
      isVeg: true,
      tag: "Chef's Special",
      desc: 'Aromatic basmati rice cooked with fresh vegetables and signature spices, served with burani raita.',
      image: '/images/subz_dum_biryani.webp',
    },
    {
      category: 'biryani',
      name: 'Awadhi Murgh Dum Biryani',
      price: '₹490',
      isVeg: false,
      tag: 'Bestseller',
      desc: 'Slow dum-cooked long grain rice with tender chicken, brown onions, kewra and saffron essence.',
      image: null,
    },
    {
      category: 'biryani',
      name: 'Hyderabadi Gosht Biryani',
      price: '₹580',
      isVeg: false,
      tag: 'Royal Feast',
      desc: 'Succulent cuts of mutton slow-cooked in sealed clay handi with rich spices and mint layers.',
      image: null,
    },
    {
      category: 'biryani',
      name: 'Tandoori Paneer Dum Biryani',
      price: '₹440',
      isVeg: true,
      tag: null,
      desc: 'Smoky tandoori cottage cheese layered with saffron-scented basmati rice and roasted cashews.',
      image: null,
    },

    // Breads
    {
      category: 'breads',
      name: 'Garlic Butter Naan',
      price: '₹110',
      isVeg: true,
      tag: 'Popular',
      desc: 'Fluffy tandoori leavened bread brushed with garlic butter and fresh coriander.',
      image: null,
    },
    {
      category: 'breads',
      name: 'Amritsari Stuffed Kulcha',
      price: '₹140',
      isVeg: true,
      tag: 'Specialty',
      desc: 'Crisp layered tandoori bread stuffed with spiced potato and paneer mash.',
      image: null,
    },
    {
      category: 'breads',
      name: 'Cheese Chilly Garlic Naan',
      price: '₹160',
      isVeg: true,
      tag: null,
      desc: 'Leavened bread stuffed with melted mozzarella, roasted garlic, and chopped green chilies.',
      image: null,
    },
    {
      category: 'breads',
      name: 'Roomali Roti',
      price: '₹90',
      isVeg: true,
      tag: null,
      desc: 'Paper-thin handkerchief bread tossed on an inverted tawa.',
      image: null,
    },

    // Desserts
    {
      category: 'desserts',
      name: 'Shahi Gulab Jamun with Rabdi',
      price: '₹220',
      isVeg: true,
      tag: 'Signature',
      desc: 'Warm khoya dumplings steeped in green cardamom sugar syrup, garnished with thickened rabdi.',
      image: null,
    },
    {
      category: 'desserts',
      name: 'Kesar Pista Rasmalai',
      price: '₹240',
      isVeg: true,
      tag: null,
      desc: 'Soft flattened chenna patties poached in thickened saffron milk with sliced pistachios.',
      image: null,
    },
    {
      category: 'desserts',
      name: 'Shahi Moong Dal Halwa',
      price: '₹260',
      isVeg: true,
      tag: 'Royal Treat',
      desc: 'Golden roasted yellow lentils simmered in desi ghee, milk, cardamom, and toasted almond slivers.',
      image: null,
    },

    // Beverages
    {
      category: 'beverages',
      name: 'The Grand Alphonso Mojito',
      price: '₹240',
      isVeg: true,
      tag: 'Signature Cooler',
      desc: 'Ratnagiri Alphonso mango pulp, crushed garden mint, fresh lime, and sparkling soda.',
      image: null,
    },
    {
      category: 'beverages',
      name: 'Royal Kesar Pista Lassi',
      price: '₹180',
      isVeg: true,
      tag: 'Traditional',
      desc: 'Thick hand-churned yogurt flavored with Kashmiri saffron threads and crushed dry fruits.',
      image: null,
    },
    {
      category: 'beverages',
      name: 'Wild Berry Basil Fizz',
      price: '₹220',
      isVeg: true,
      tag: null,
      desc: 'Muddled blueberries and raspberries with aromatic sweet basil and tonic water.',
      image: null,
    },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#061827] border border-[#D7A52B]/40 text-white rounded-none shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#03111D]">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-[#D7A52B] font-semibold uppercase block">
              THE VISTA GRAND MENU
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-white font-normal mt-0.5">
              Something for Every Table
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded transition-colors cursor-pointer"
            aria-label="Close menu modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Categories Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 bg-[#061827] space-y-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, ingredients (e.g. Biryani, Paneer, Tikka)..."
              className="w-full bg-[#03111D] border border-white/15 focus:border-[#D7A52B] rounded pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-none text-[11px] font-semibold tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#D7A52B] text-[#03111D] shadow-sm'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Items List Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] space-y-3">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-gray-400">
              <p className="text-sm font-light">No dishes found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="p-3.5 bg-white/5 border border-white/10 hover:border-[#D7A52B]/50 transition-all rounded-none flex items-start gap-3 group"
                >
                  {/* Photo if available */}
                  {item.image && (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded overflow-hidden bg-black/30 border border-white/10">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5 min-w-0">
                        {/* Veg / Non-veg symbol */}
                        <span
                          className={`w-3 h-3 flex-shrink-0 border flex items-center justify-center ${
                            item.isVeg ? 'border-green-500' : 'border-red-500'
                          }`}
                          title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.isVeg ? 'bg-green-500' : 'bg-red-500'
                            }`}
                          ></span>
                        </span>
                        <h4 className="text-sm font-serif font-semibold text-white truncate group-hover:text-[#F4E4AF] transition-colors">
                          {item.name}
                        </h4>
                      </div>
                      <span className="text-xs sm:text-sm font-serif font-bold text-[#D7A52B] flex-shrink-0">
                        {item.price}
                      </span>
                    </div>

                    {item.tag && (
                      <span className="inline-block text-[9px] font-semibold uppercase tracking-wider text-[#D7A52B] bg-[#D7A52B]/10 px-1.5 py-0.5 mb-1 rounded-sm">
                        {item.tag}
                      </span>
                    )}

                    <p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#03111D] border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
          <span>* Taxes and government levies as applicable.</span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 bg-[#D7A52B] hover:bg-[#E7C76A] text-[#03111D] font-bold text-xs rounded transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
