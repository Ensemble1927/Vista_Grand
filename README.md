# The Vista Grand — Official Website

A production-ready, responsive luxury restaurant website for **The Vista Grand**, located in Anjur, Thane, Maharashtra.

Built with **React 19**, **Vite 6**, and **Tailwind CSS**, strictly reproducing the supplied reference design and using authentic photography and branding assets.

---

## 🏛️ Features & Architecture

1. **Header & Navigation**
   - Translucent overlay at top; transitions to sticky dark navy (`#061827`) with gold bottom border on scroll.
   - Authentic restaurant emblem and brand typography.
   - Desktop horizontal navigation + mobile responsive sliding drawer.
   - Quick action triggers: *Plan an Event* and *Book a Table*.

2. **Hero Section**
   - Dominant full-viewport visual opening using the original restaurant patio photograph (`hero.webp`).
   - High-contrast typography with editorial Cormorant Garamond serif headings.
   - Primary gold CTA (*EXPLORE THE VISTA*) and animated scroll indicator (*SCROLL TO DISCOVER*).
   - Natural organic deckled / torn-paper transition into the warm cream section below.

3. **Dish of the Week**
   - Warm parchment texture with transparent botanical foliage.
   - Authentic copper handi dish photography: *Subz Dum Biryani* (₹420) and *Paneer Lababdar* (₹380).
   - Micro gold borders and interactive cards with hover lift.

4. **Our Menu — Center-Focused Interactive Carousel**
   - Dynamically scaled horizontal carousel for 6 categories: *Starters*, *Main Course*, *Biryani*, *Breads*, *Desserts*, *Beverages*.
   - Center item automatically scales up (~1.35×) with larger circular photo, glowing gold ring, and sparkle tag.
   - Smooth auto-scroll with pause on mouse enter/drag/touch.
   - Active category highlights drawer below carousel.
   - *VIEW FULL MENU* button triggering the dedicated menu modal.

5. **Google Reviews**
   - Dark navy contrast section with golden botanical line-art illustration.
   - 5 gold stars rating (`★★★★★`).
   - Authentic quotation and guest avatar (Rahul Mehta, Google Review).
   - Left/right arrow controls and indicator dots.

6. **The Three Experience Cards (Dine, Celebrate, Gather)**
   - High-impact 3-column layout matching the reference mockup.
   - **Dine**: Outdoor patio dining photo (`dine.webp`), tags (*Alfresco Dining, Master Chefs, Intimate Ambiance*).
   - **Celebrate**: Grand banquet hall with chandeliers (`banquet_celebrate.webp`), celebration tags (*Weddings, Birthdays, Anniversaries, Corporate Events, Private Parties*).
   - **Gather**: Fairy-lit courtyard garden photo (`gather.webp`), gathering tags (*Family, Friends, Corporate*).
   - Hover zoom and bottom dark gradients for optimal text contrast.

7. **Your Table Awaits (Final CTA)**
   - Architectural colonnade arches background with warm ivory styling.
   - Dual actions: *BOOK A TABLE* and *PLAN AN EVENT*.

8. **Footer**
   - Deep navy background with logo, quick navigation, social links (Instagram, Facebook, Google Maps).
   - Copyright 2026 and location: *Anjur, Thane, Maharashtra*.

9. **Fully Functional Interactive Modals**
   - **Reserve a Table Modal**: Date, time slot, guest count, seating preference (Outdoor Patio, Garden View, AC Hall), special requests, and celebration confetti.
   - **Plan an Event Modal**: Comprehensive enquiry form for weddings, birthdays, corporate banquets, and private parties with instant reference code.
   - **Full Menu Modal**: Filterable menu with live search, Veg/Non-veg dietary tags, descriptions, and prices.
   - **Space Showcase Modal**: Architectural details, capacity, timings, and photography for each venue space.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)

### Development Server
```bash
cd the-vista-grand-website
npm run dev
```

### Production Build & Preview
```bash
npm run build
npm run preview
```
Visit `http://localhost:4173/` in your browser.

---

## 🎨 Design Tokens & Palette
- **Deep Navy**: `#061827`
- **Dark Navy**: `#03111D`
- **Gold**: `#D7A52B`
- **Soft Gold**: `#E7C76A`
- **Warm Ivory**: `#F5EBD5`
- **Light Cream / Parchment**: `#FBF5E8`
- **Heading Font**: `Cormorant Garamond` (Google Fonts)
- **Body Font**: `Montserrat` (Google Fonts)
