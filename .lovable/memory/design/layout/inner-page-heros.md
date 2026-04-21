---
name: Inner Page Heros
description: Split-layout PageHero with animated icon visual, mirrors home hero
type: design
---
All inner pages (About, Services, Contact, Portfolio, Careers, Blog) use the shared `PageHero` component (`src/components/shared/PageHero.jsx`).

Layout matches the home Hero:
- Left: badge pill + heading (with `gradient-text` accent span) + description + optional CTA children
- Right (lg+): animated visual — concentric pulsing rings around a central orb with a themed Lucide icon, plus 4 floating Lucide icons in fixed corner positions
- Background: `gradient-hero` + radial dot grid + two blurred floating orbs (no photo)

Each page passes a themed `centerIcon` and `floatingIcons[]`:
- About: Compass + Users/Award/Globe/Lightbulb
- Services: Layers + Code2/Globe/Smartphone/Palette
- Contact: MessageCircle + Mail/Phone/MapPin/User
- Portfolio: Briefcase + Cloud/Brain/Shield/Rocket
- Careers: Users + Heart/Zap/Coffee/GraduationCap
- Blog: BookOpen + Cloud/Shield/Brain/Server

The old `hero-*.jpg` background images in `src/assets/` are no longer used — keep the files but don't reintroduce them on inner pages.
