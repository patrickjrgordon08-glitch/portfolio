# Patrick Gordon - Portfolio

Personal portfolio site for Patrick Gordon (Full-Stack Developer & AI Builder), extracted into
its own standalone Next.js project so it no longer shares a repo/dev server with the AI Tool
SaaS starter template.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form email (optional)

The contact form posts to `/api/contact`, which emails the message via SMTP if configured.
Copy `.env.example` to `.env.local` and fill in your SMTP details. If left unset, inquiries are
simply logged to the server console instead of emailed.

## Structure

- `src/app` - routes: `/` (home), `/about`, `/work`, `/work/[slug]`, `/contact`, `/api/contact`
- `src/components` - portfolio UI components (Nav, Hero, FeaturedWork, Footer, etc.)
- `src/libs` - profile data (`portfolioProfile.ts`), project data (`portfolioProjects.ts`),
  animation presets (`portfolioMotion.ts`), and the email helper (`email.ts`)
- `src/styles/globals.css` - Tailwind v4 entry point and theme tokens
