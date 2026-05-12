# ⚜ The Rajwar Society of India — Official Website

A premium, cinematic Next.js website for **The Rajwar Society of India**.

## ✨ Features

- **Cinematic Hero** — Full-screen landing with animated gold particle canvas, pulsing emblem, and parallax light effects
- **About Section** — Glassmorphism cards with Hindi content and 6 animated feature pillars
- **Mission Section** — Dark luxury layout with numbered Hindi mission pillars
- **Donation Section** — Gold-glowing card with UPI QR placeholder and animated border
- **Community Stats** — Animated counter reveal (Members, Students, Professionals, Opportunities)
- **Rules Accordion** — Smooth Framer Motion expand/collapse with icons
- **Footer** — WhatsApp CTA, social icons, gold divider
- **Floating Particles** — Gold particle canvas across the entire site
- **Fully Responsive** — Mobile, tablet and desktop optimized

## 🛠 Tech Stack

- **Next.js 14** (App Router, Static Export)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (scroll reveals, accordion, counter animations)
- **Lucide React** (icons)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 📦 Build for Production

```bash
# Build static export
npm run build

# The /out folder is your static site — deploy to Vercel, Netlify, or any host
```

## 🌐 Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Deploy — Vercel auto-detects Next.js

## ✏️ Customization

| What to change | Where |
|---|---|
| UPI ID | `components/DonationSection.tsx` |
| QR Code image | Replace SVG in `DonationSection.tsx` with `<Image src="/qr.png" .../>` |
| WhatsApp link | `components/Footer.tsx` — update `href="#"` |
| Social links | `components/Footer.tsx` |
| Stats numbers | `components/CommunitySection.tsx` — update `target` values |
| Colors | `app/globals.css` — CSS variables under `:root` |
| Fonts | `app/layout.tsx` + `tailwind.config.js` |

## 🎨 Design System

| Variable | Value |
|---|---|
| `--gold` | `#C9A84C` |
| `--gold-light` | `#F0D080` |
| `--gold-dim` | `#8A6A2A` |
| `--navy` | `#060B1A` |
| Primary font | Playfair Display (serif) |
| Body font | Jost (sans-serif) |
| Accent font | Cormorant Garamond (italic) |

---

*एकता • शिक्षा • प्रगति • संस्कृति*
