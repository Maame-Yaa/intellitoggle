# IntelliToggle Landing Page

A responsive marketing landing page for [IntelliToggle](https://www.aortem.io/), a Dart-native feature flagging platform by Aortem. Built as a frontend developer technical assessment for [Aortem](https://www.aortem.io/).

**[Live Demo](https://intellitoggle-omega.vercel.app/)**

## Tech stack

- **Framework:** Vue 3 + Nuxt 3
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Inter, DM Sans, Merriweather Sans)
- **Deployment:** Vercel

## What I built

A single-page marketing site composed of 15 Vue components:

- **Hero** with gradient background, CTA buttons, and promotional pricing
- **Logo strip** for partner/client logos
- **Product sections** explaining feature flags, OpenFeature integration, and AI-powered delivery
- **Feature comparison** table
- **Pricing section** with mobile and desktop layouts (card view on mobile, overview on desktop)
- **CTA** and footer sections
- **Responsive layout** with mobile breakpoints and conditional rendering (`v-show` for mobile-hidden sections)

## Project structure

```
├── pages/
│   └── index.vue              # Page composition (all sections)
├── components/
│   ├── Hero.vue               # Hero section with gradient and CTAs
│   ├── SiteHeader.vue         # Navigation header
│   ├── SiteFooter.vue         # Footer
│   ├── Pricing.vue            # Pricing cards (mobile + desktop)
│   ├── FeatureCompare.vue     # Feature comparison table
│   ├── ControlsSection.vue    # Product controls overview
│   ├── ControlCard.vue        # Individual control card
│   ├── SectionWhat.vue        # "What is IntelliToggle" section
│   ├── SectionOpenFeature.vue # OpenFeature integration section
│   ├── DartAI.vue             # AI features section
│   ├── DartAICard.vue         # Individual AI feature card
│   ├── WhyTeams.vue           # "Why teams choose" section
│   ├── LogoStrip.vue          # Partner logos
│   ├── CTA.vue                # Call to action
│   └── Button.vue             # Reusable button component
├── layouts/
│   └── default.vue            # Header + main + footer shell
├── nuxt.config.ts
├── tailwind.config.js
└── package.json
```

## Running locally

```bash
git clone https://github.com/Maame-Yaa/intellitoggle.git
cd intellitoggle
npm install
npm run dev
```

## Context

This was a frontend assessment submission for Aortem. The task was to build the marketing page for their IntelliToggle product. I was hired and went on to work as a Frontend Software Engineer at Aortem, contributing to their SaaS admin platform with Vue 3 and Nuxt 3.
