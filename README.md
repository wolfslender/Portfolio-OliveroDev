# OliveroDev Portfolio

Bilingual portfolio and service website for Alexis Olivero. The site serves two clearly separated audiences:

- Businesses seeking website audits, performance optimization, security, migration, and ongoing support.
- Employers evaluating Alexis for frontend engineering roles.

## Stack

- Next.js 16 with the App Router and static export
- React 19 and TypeScript
- Tailwind CSS 4
- Sanity CMS for blog content
- i18next for English and Spanish content
- Vitest and React Testing Library
- `next-image-export-optimizer` for static image output

## Local development

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Sanity-backed blog content requires these variables in `.env.local`:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
```

## Quality checks

```bash
npm run lint
npm test
npm run build
npm run seo:audit
```

The production build creates a static site in `out/`. The SEO audit checks generated routes, canonical URLs, sitemap entries, hreflang links, robots directives, titles, and descriptions.

## Main routes

- `/` — commercial homepage
- `/services/` — service directory
- `/work/` — portfolio and project context
- `/frontend-developer/` — hiring-focused frontend profile
- `/about/` — background and professional experience
- `/blog/` — Sanity-backed articles
- `/contact/` — prepared email, WhatsApp, and Calendly contact options
- `/es/` — Spanish site

## Content principles

- Commercial outcomes lead; technologies support the story.
- Employment messaging is kept separate from client-service messaging.
- Metrics should only be published when their source, period, and ownership are clear.
- Client, contractor, employee, and independent-product work must be labeled accurately.

## Deployment

The project uses `output: "export"` in `next.config.mjs` and can be deployed to any static hosting provider. Ensure the Sanity environment variables are present during the build if blog content should be included.
