# Everest Home Products — Website (v2, Home Care + Car Care)

A full redesign of the React site to reflect the expanded business: the original
Home Care line plus the new Car Care Range (glass cleaner, car shampoo, dashboard
polish, interior cleaner, tyre polish).

## What's new in this version
- **Complete visual redesign** — new alpine navy / glacier blue / pine green palette,
  Barlow Condensed + Work Sans typography, mountain-motif hero divider, card and
  section system built from scratch (old CSS fully replaced).
- **Two-range product catalog** with an animated sliding tab switcher (Home Care /
  Car Care) — `src/data/products.js` holds every product; add a new one by adding
  an object to either array.
- **Real product creatives** — your WhatsApp ad posters (Dishwash Liquid, Dish Wash
  Gel, Kapoor Phenyl, Car Shampoo, Glass Cleaner, Dashboard Polish, Interior
  Cleaner, Tyre Polish) are wired in as the actual product images, organized under
  `src/assets/images/homecare/` and `src/assets/images/carcare/`.
- **Everything routes to WhatsApp** — every "Enquire" / "Order Now" button opens a
  pre-filled WhatsApp chat to **+91 72298 23831** (`src/data/site.js` — change the
  number or default message there in one place).
- **Bulk order section** with your ₹40/litre (5L+) pricing for hotels, restaurants,
  defence canteens, etc.
- **Deliberate motion, not scattered animation**: a sliding tab indicator, a hover
  lift + image zoom on product cards, a scrolling trust badge marquee, a pulsing
  WhatsApp button, and one fade-up reveal per section heading — kept restrained on
  purpose rather than animating every element.
- Floating WhatsApp button, mobile hamburger menu, fully responsive down to phone
  width.

## Getting started
```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Where to edit things
| What you want to change              | File |
|---------------------------------------|------|
| Phone number / WhatsApp message / address | `src/data/site.js` |
| Products, sizes, features, images     | `src/data/products.js` |
| Bulk order price                      | `src/data/products.js` → `bulkPricing` |
| Colors, fonts, spacing, animations     | `src/index.css` |
| Page sections / order                 | `src/App.jsx` |
| Hero headline & stats                 | `src/components/Hero.jsx` |
| Footer links / info                   | `src/components/Footer.jsx` |

## Notes / suggested next steps
- Product images are your existing ad-creative posters (with text baked in). For an
  even cleaner catalog look, consider getting plain product-only photos (white or
  transparent background) shot for each item later — the grid is already built to
  drop in replacements at the same file paths.
- Add Google Maps embed in the footer once you have a shareable map link.
- Consider a dedicated "Reviews" section once you start collecting customer
  testimonials/photos.
