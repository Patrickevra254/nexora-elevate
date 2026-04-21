---
name: Inner Page Heros
description: Split-layout PageHero with themed image visual on the right, mirrors home hero spacing
type: design
---
All inner pages (About, Services, Contact, Portfolio, Careers, Blog) use the shared `PageHero` component (`src/components/shared/PageHero.jsx`).

Layout matches the home Hero exactly:
- Section: `min-h-[100vh]`, `pt-24 pb-16`, `container-custom`, `grid lg:grid-cols-2 gap-12 items-center`
- Background: `gradient-hero` + radial dot grid + two blurred floating orbs (no full-bleed photo)
- Left: badge pill + heading (with `gradient-text` accent span) + description + optional CTA children
- Right (lg+): themed image inside a rounded `surface-elevated` frame with soft accent glow + animated border ring

Each page passes its own themed image (from `src/assets/page-*.jpg`) via the `image` prop:
- About → `page-about.jpg` (team + holographic data)
- Services → `page-services.jpg` (layered glass UI cards)
- Contact → `page-contact.jpg` (glowing message envelopes network)
- Portfolio → `page-portfolio.jpg` (mosaic of dashboards)
- Careers → `page-careers.jpg` (modern workspace + growth chart)
- Blog → `page-blog.jpg` (open book with knowledge nodes)

The earlier icon-orb visual (centerIcon + floatingIcons) was replaced because it looked identical across pages. The legacy `hero-*.jpg` files in `src/assets/` are unused — keep but don't reintroduce.
