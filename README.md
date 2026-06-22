# AetherCore — Premium Digital Agency Website

> Engineering Digital Excellence — A world-class digital agency website built with React, TypeScript, and Framer Motion.

![AetherCore](https://img.shields.io/badge/AetherCore-v2.0-00d4ff?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)

---

## Overview

AetherCore is a production-grade digital agency website featuring an ultra-dark neon aesthetic, glassmorphism UI, smooth scroll animations, and full accessibility compliance. It serves as both a professional client-facing portfolio and a reference implementation of modern React architecture best practices.

---

## Features

- **Ultra Dark Theme** with blue/purple neon glow system
- **Glassmorphism Cards** with backdrop blur and neon borders
- **Framer Motion Animations** with full `prefers-reduced-motion` support
- **Active Scroll-Spy Navigation** using IntersectionObserver
- **Accessible Contact Form** with validation, loading/success/error states, and ARIA attributes
- **SVG Portfolio Mockups** — no external images required
- **Error Boundaries** wrapping every lazy-loaded section
- **Lazy Loading** for all below-fold sections via React.lazy + Suspense
- **TypeScript** with full interface coverage and strict mode
- **WCAG 2.1 AA Compliant** — labels, focus management, semantic HTML, reduced motion
- **SEO Optimized** — Open Graph, Twitter Card, canonical, theme-color
- **Bundle Optimized** — manual chunk splitting for vendor libraries
- **Mobile-First Responsive** design

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 (strict) |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Routing | React Router 6 |
| Icons | Lucide React |

---

## Folder Structure

```
aethercore/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── contact/
│   │   │   └── Contact.tsx          # Full form with validation + states
│   │   ├── faq/
│   │   │   └── FAQ.tsx              # Accessible accordion
│   │   ├── footer/
│   │   │   └── Footer.tsx           # Full footer with newsletter
│   │   ├── hero/
│   │   │   ├── Hero.tsx             # Hero section entry
│   │   │   ├── HeroBackground.tsx   # CSS + Framer Motion background
│   │   │   └── HeroCards.tsx        # Floating stat cards
│   │   ├── navbar/
│   │   │   └── Navbar.tsx           # Fixed nav with scroll-spy
│   │   ├── portfolio/
│   │   │   ├── Portfolio.tsx        # Portfolio section
│   │   │   ├── PortfolioCard.tsx    # Individual project card
│   │   │   └── PortfolioMockup.tsx  # SVG UI mockups (memoized)
│   │   ├── pricing/
│   │   │   ├── Pricing.tsx          # Pricing section
│   │   │   └── PricingCard.tsx      # Individual pricing card
│   │   ├── process/
│   │   │   └── Process.tsx          # Timeline
│   │   ├── services/
│   │   │   ├── Services.tsx         # Services section
│   │   │   └── ServiceCard.tsx      # Individual service card
│   │   ├── stats/
│   │   │   └── Stats.tsx            # Statistics with dl/dt/dd
│   │   ├── testimonials/
│   │   │   └── Testimonials.tsx     # figure/blockquote testimonials
│   │   ├── trusted/
│   │   │   └── Trusted.tsx          # Trusted companies strip
│   │   ├── why-us/
│   │   │   └── WhyUs.tsx            # Why choose us section
│   │   └── ui/
│   │       ├── BackToTop.tsx        # Scroll-to-top button
│   │       ├── DynamicBackground.tsx # Fixed animated background
│   │       ├── ErrorBoundary.tsx    # Class-based error boundary
│   │       ├── Loader.tsx           # Route loading spinner
│   │       └── SectionWrapper.tsx   # Scroll-reveal wrapper
│   ├── data/
│   │   └── index.ts                 # All typed data constants
│   ├── layouts/
│   │   └── MainLayout.tsx           # Page layout shell
│   ├── pages/
│   │   ├── Home.tsx                 # Homepage with lazy sections
│   │   └── NotFound.tsx             # 404 page
│   ├── types/
│   │   └── index.ts                 # All exported TypeScript interfaces
│   ├── App.tsx                      # Router + ErrorBoundary root
│   ├── index.css                    # Global styles + design tokens
│   └── main.tsx                     # Application entry point
├── index.html                       # SEO-optimized HTML shell
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts                   # Build optimization config
```

---

## Installation

**Prerequisites:** Node.js 18+ and npm 9+

```bash
# 1. Clone or extract the project
cd aethercore

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

---

## Development

```bash
# Start dev server with HMR
npm run dev

# Type check without emitting
npx tsc --noEmit

# Lint (if ESLint configured)
npm run lint
```

### Environment Variables

No environment variables are required for the base site. When connecting a real form backend, create a `.env` file:

```env
# Example for Formspree or similar
VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

> **Never commit `.env` files with real secrets.** Add `.env` to `.gitignore`.

---

## Build

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

Build output goes to `dist/`. The build generates separate chunks:
- `react-vendor` — React, ReactDOM, React Router (~150kb gzipped)
- `motion-vendor` — Framer Motion (~50kb gzipped)
- `icons-vendor` — Lucide React (~30kb gzipped)
- Page chunks — lazy-loaded sections

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

Add a `vercel.json` for SPA routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify
```bash
npm run build
# Upload dist/ folder, or connect Git repo
```

Add `public/_redirects`:
```
/* /index.html 200
```

### Nginx
```nginx
server {
  root /var/www/aethercore/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  gzip on;
  gzip_types text/css application/javascript image/svg+xml;
}
```

### Pre-deployment Checklist
- [ ] Replace `https://aethercore.com` in `index.html` with your real domain
- [ ] Add a real `og:image` at `/public/og-image.png` (1200×630px)
- [ ] Replace `@aethercore` Twitter handle with your own
- [ ] Connect contact form to a real backend (Formspree, EmailJS, custom API)
- [ ] Add Google Analytics or Plausible snippet if needed
- [ ] Test on Chrome, Firefox, Safari, and iOS Safari

---

## Performance Notes

- **Lazy loading:** All below-fold sections (Services → Contact) are code-split via `React.lazy()`. Only Hero and Trusted load on initial paint.
- **Chunk splitting:** `vite.config.ts` splits `framer-motion`, `lucide-react`, and React into separate vendor chunks for long-term browser caching.
- **Memoization:** All section components, `PortfolioMockup`, `ServiceCard`, `PricingCard`, `HeroCards`, `HeroBackground`, and `DynamicBackground` are wrapped with `React.memo`.
- **Stable references:** Style objects and data arrays that would trigger unnecessary renders are declared as module-level constants outside component functions.
- **CSS animations:** Hero particles use CSS `@keyframes` instead of 20 individual Framer Motion instances — eliminating React overhead on low-end devices.
- **Reduced motion:** All Framer Motion animations check `useReducedMotion()`. When the OS preference is set, animations are disabled or instant. CSS also includes `@media (prefers-reduced-motion: reduce)` which nullifies all transitions and keyframes.
- **IntersectionObserver:** Scroll-spy in the Navbar uses a native `IntersectionObserver` with proper cleanup — no scroll event listeners for this purpose.
- **will-change:** Applied only to continuously animated elements (background orbs, hero ring) to hint compositor layer promotion.

---

## Accessibility Notes

This project targets **WCAG 2.1 Level AA** compliance.

- **Reduced motion:** Full `prefers-reduced-motion` support in both CSS and JavaScript via Framer Motion's `useReducedMotion` hook.
- **Focus management:** `:focus-visible` styles ensure keyboard users can see where they are. All interactive elements are keyboard-accessible.
- **Form labels:** Every form field has an explicit `<label>` with `htmlFor` association. Error messages use `role="alert"` and `aria-describedby` to connect to their fields.
- **ARIA landmarks:** `<nav>`, `<main>`, `<footer>`, `<section>`, `<aside>` elements provide screen reader navigation.
- **aria-current:** Active nav links receive `aria-current="location"` via scroll-spy.
- **Semantic HTML:** Stats use `<dl>/<dt>/<dd>`, testimonials use `<figure>/<blockquote>/<figcaption>`, lists use `<ul>/<li>`, process steps use `<ol>/<li>`.
- **Decorative elements:** All purely visual elements (icons, backgrounds, orbs, SVG mockups) have `aria-hidden="true"`.
- **Star ratings:** Rating groups use `role="img"` with `aria-label="X out of 5 stars"`.
- **Modal menu:** Mobile menu has `role="dialog"` and `aria-modal="true"`.
- **Error boundary:** Failures display `role="alert"` with `aria-live="assertive"`.
- **Loader:** Uses `role="status"` with `aria-label`.

### Known Remaining Gaps
- Color contrast on `text-slate-500` (#64748b) against dark backgrounds is ~4.1:1 — borderline AA for small text. Consider increasing to `text-slate-400` (#94a3b8) in body copy.
- No skip-to-content link implemented yet (recommended for keyboard-only users).
- Form success/error messages use `aria-live="polite"` — consider `"assertive"` for error states.

---

## Contact Form Integration

The form currently simulates submission. To connect a real backend:

**Option 1 — Formspree**
```tsx
// In Contact.tsx, replace the simulated submit with:
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (!res.ok) throw new Error('Submission failed')
```

**Option 2 — EmailJS**
```bash
npm install @emailjs/browser
```

**Option 3 — Custom API**
Replace the `setTimeout` simulation with your `fetch('/api/contact', {...})` call.

---

## License

MIT — free to use for personal and commercial projects.

---

*Built with precision by AetherCore. Engineering Digital Excellence.*
test
