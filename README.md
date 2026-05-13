# Nexora — Next.js 14 + Tailwind CSS + Framer Motion

## Stack
- **Next.js 14** App Router
- **Tailwind CSS v3** utility-first styling
- **Framer Motion** entrance animations + page transitions
- **TypeScript** strict mode
- **SOLID** architecture — single responsibility components

## Project structure
```
Nexotic/
├── app/                    ← App Router pages
│   ├── layout.tsx          ← Root layout (Nav + Footer)
│   ├── page.tsx            ← Homepage (composes sections)
│   ├── uslugi/page.tsx
│   ├── portfolio/page.tsx
│   ├── o-nas/page.tsx
│   ├── proces/page.tsx
│   └── kontakt/page.tsx
├── components/
│   ├── ui/                 ← Reusable atoms
│   │   ├── Button.tsx      ← All button variants with hover effects
│   │   ├── SectionLabel.tsx
│   │   ├── PageHero.tsx    ← Shared dark hero for subpages
│   │   └── AnimatedSection.tsx  ← Framer Motion wrappers
│   ├── sections/           ← Homepage sections
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── Process.tsx
│   │   ├── Portfolio.tsx
│   │   └── Testimonials.tsx
│   └── layout/             ← Nav, Footer
│       ├── Nav.tsx
│       └── Footer.tsx
├── lib/data.ts             ← All static data in one place
├── types/index.ts          ← TypeScript interfaces
└── tailwind.config.ts      ← Design tokens (lime, ink colors)
```

## Install & run
```bash
npm install
npm run dev
```

## Animations
- **Hero** — staggered fade-up on load (framer-motion)
- **Sections** — fade-up when scrolled into view (whileInView)
- **Cards** — stagger children with 120ms delay each
- **Page transitions** — smooth fade+slide between routes

## Hover effects
- **Buttons** — scale(1.02) + lime glow shadow on primary, border brighten on outline
- **Nav links** — lime color + underline border on active/hover
- **Service cards** — lime accent bar slides in from left
- **Project cards** — lift + shadow + title color change
- **Footer links** — slight translate-x on hover
- **Team avatars** — bg/color flip on hover

## Responsive
- Mobile-first, tested up to 2xl (1536px+)
- `max-w-site: 1440px` custom breakpoint
- Nav collapses links on mobile (hamburger menu — add if needed)
