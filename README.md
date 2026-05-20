# Sage & Crew Next — Marketing Site

The marketing site for [sagencrew.in](https://sagencrew.in) — Sage & Crew Next's recruitment, software, and AI studio.

Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS, matching the design system of the Sage Hire Stack app at [hire.sagencrew.in](https://hire.sagencrew.in).

## Stack

- **Framework**: Next.js 14, App Router
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS with custom brand tokens
- **Fonts**: Playfair Display (display) + Plus Jakarta Sans (body), self-hosted via `next/font/google`
- **Icons**: lucide-react
- **Hosting**: Vercel

## Pages

- `/` — Home
- `/services` — Recruitment
- `/sage-hire-stack` — Product landing for the platform
- `/ai-solutions` — AI & automation
- `/projects` — Case studies
- `/tools` — Free HR + career tools (coming soon)
- `/pricing` — Pricing
- `/faq` — FAQ
- `/about` — About
- `/contact` — Contact

## Develop locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Brand tokens

Defined in `tailwind.config.ts`. Mirrors the hire-stack app so both surfaces feel like one product family.

| Token | Hex |
| --- | --- |
| `navy` | `#0B1F3A` |
| `gold` | `#D4AF37` |
| `sage` | `#7A9E7E` |
| `ivory` | `#F8F7F2` |
| `charcoal` | `#1F2937` |

## Deploy

Vercel auto-deploys on push to `main`. Custom domain `sagencrew.in` is attached via the Vercel project settings.

## History

The previous static HTML version is preserved on the [`legacy-static-site`](https://github.com/sagencrew-stack/snc-wesite/tree/legacy-static-site) branch.
