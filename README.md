# Flowdeck — Landing Page

Marketing landing page for **Flowdeck**, a project-management SaaS. Built with
React 19, Vite, and Tailwind CSS v4.

## Stack

- **React 19** + **Vite 6** — fast dev server and build
- **Tailwind CSS v4** — CSS-first config via `@tailwindcss/vite`
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  App.jsx                  Section composition
  index.css                Tailwind import + brand theme tokens
  data/content.js          ALL copy (features, pricing, testimonials, FAQ)
  components/
    ui/Button.jsx          Button with variants (primary/secondary/ghost/white)
    ui/Container.jsx       Max-width page container
    Logo.jsx               Wordmark + brand mark
    Navbar.jsx             Sticky nav with mobile menu
    Hero.jsx               Headline + CTAs + animated kanban mockup
    LogoCloud.jsx          Social-proof logo strip
    Features.jsx           Feature grid
    HowItWorks.jsx         3-step how-it-works
    Pricing.jsx            3 tiers with monthly/annual toggle
    Testimonials.jsx       Customer quotes
    FAQ.jsx                Accessible accordion
    CTA.jsx                Final gradient call-to-action
    Footer.jsx             Link columns + socials
```

## Editing content

All marketing copy lives in [`src/data/content.js`](src/data/content.js) — edit
features, pricing tiers, testimonials, and FAQ there without touching component
markup.

## Branding

Brand colors are defined as design tokens in
[`src/index.css`](src/index.css) under `@theme` (the `--color-brand-*` scale).
Change those values to re-theme the whole page.
