# Si-Tech Intl Website

## What this project is

This repository contains the bilingual marketing website for `Si-Tech Intl`.

The site is designed to do four jobs clearly:

1. Explain what Si-Tech Intl helps with in practical business language.
2. Build trust with U.S. clients and partners.
3. Turn website traffic into qualified leads through a structured inquiry form.
4. Leave room to expand into more solution pages, partnership opportunities, stories, and product entries.

## Core positioning

The website is not meant to feel like a translated headquarters brochure.

It should present Si-Tech Intl as:

- a U.S.-facing collaboration and business development interface
- backed by broader Si-Tech engineering and delivery capability
- strong in telecom-grade systems, service operations, digital platforms, AI-enabled service, and practical business systems
- practical, execution-oriented, and able to start with scoped pilots instead of forcing large all-at-once projects

## Technical stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Localized content in `content/site-content.ts` and `content/products-content.ts`
- Lead form submission through `POST /api/contact`
- Local CSV lead storage for local/dev and backup capture
- Optional Gmail delivery through server-side OAuth2 mail sending

## Content structure

- `content/site-content.ts`: primary bilingual site copy
- `content/products-content.ts`: product and marketplace copy
- `docs/reference/pdf-ocr/sitech-manual-ocr.md`: raw OCR extraction from the Si-Tech PDF manual
- `docs/reference/pdf-ocr/sitech-manual-structured.md`: structured content draft for website reuse

## Image replacement

Most page images are referenced from structured content files rather than hard-coded in components.

- Hero images: `public/images/hero/`
- Story images: `public/images/stories/`
- About images: `public/images/about/`
- Solution visuals: `public/images/solutions/`
- Logo: `public/brand/logo-symbol.png`
- Browser icon: `app/icon.png`

To replace an image, add the new file in the matching folder and update the image path in `content/site-content.ts` or `content/products-content.ts`.

Local development runs a lightweight image size check before starting the dev server:

```bash
npm run check:images
```

This check is wired into `npm run dev` only. Production builds do not depend on it.

For the full image placement and size guide, see `docs/image-guide.md`.

## Visibility and extensibility

The site is being prepared for frequent content adjustments. The intended operating model is:

- sections can be shown or hidden without deleting code
- list items such as stories, product cards, and partnership entries can be shown or hidden
- ordering should be controlled from content configuration where possible
- future expansion should prioritize `Partnership`, not a separate `Industries` page

This means future content changes should aim to modify structured content and flags first, rather than hard-coding more layout logic.

## PDF OCR workflow

This repo includes a local OCR pipeline for the scanned company manual:

- Script: `scripts/ocr-sitech-manual.swift`
- Source PDF: `/Users/zhoushen/Nutstore Files/Nutstore/Sitech/A-国内思特奇材料/思特奇手册/思特奇手册电子版_compressed.pdf`
- Raw output: `docs/reference/pdf-ocr/sitech-manual-ocr.md`
- Structured output: `docs/reference/pdf-ocr/sitech-manual-structured.md`

The OCR pipeline uses:

- `PDFKit` to render each PDF page
- macOS `Vision` to recognize Chinese and English text

Run it with:

```bash
npm run ocr:sitech-manual
```

## Lead flow

Current implemented flow:

1. User submits the lead form.
2. Backend validates the payload and checks honeypot / basic rate limiting.
3. Server writes the submission to `contact-submissions.csv`.
4. If Gmail OAuth environment variables are configured, server sends the internal notification to `CONTACT_RECIPIENT`.
5. If Gmail delivery is configured, server sends an automatic confirmation email back to the visitor in the same language as the page they submitted from.
6. The submission is considered successful when CSV storage or Gmail delivery succeeds. If one route fails, the API returns success with a warning so visitors do not see an error after a recoverable backend issue.
7. User is redirected to the thank-you page.

Recommended production setup:

- Keep local CSV only as a development and backup path. Serverless filesystems are not a durable database.
- For the first production-ready lead store, use Google Sheets or Supabase/Neon Postgres so the team can reliably review and export submissions.
- Use Gmail API only for email delivery from the company mailbox. Configure `GMAIL_SENDER`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`, and `CONTACT_RECIPIENT` in each deployed site.

## Required environment variables

### Gmail

Configure these once in the repository root `.env.local`. The company, Opera,
and Telecom workspaces load the root file automatically during local dev and
workspace builds.

- `GMAIL_SENDER`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `CONTACT_RECIPIENT`

The site-specific `.env.local` files should only need site URL values such as
`NEXT_PUBLIC_SITE_ORIGIN`, `NEXT_PUBLIC_COMPANY_ORIGIN`,
`NEXT_PUBLIC_OPERA_ORIGIN`, and `NEXT_PUBLIC_TELECOM_ORIGIN`.

### Lead storage

- `LEAD_CSV_DIR` optional local CSV directory override.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

This repository includes a dedicated GitHub Pages workflow in `.github/workflows/deploy-pages.yml`.

- Local development remains unchanged with `npm run dev`.
- The Pages deployment uses `npm run build:pages`, which enables a static export only for the GitHub Actions build.
- During the Pages build, the server-only contact API route is temporarily disabled because GitHub Pages cannot run backend code.
- The deployed Pages site keeps the contact form UI, but submission falls back to opening the visitor's email client instead of calling `/api/contact`.

## Hosting guidance

Current operating assumptions:

- short-term rollout will use `Vercel Hobby`
- `Vercel Hobby` is being treated as a trial-stage hosting choice, not the long-term default for the company site
- if traffic, collaboration needs, or commercial-risk concerns increase, the next upgrade path is `Vercel Pro`
- `Hostinger VPS` remains a low-cost fallback option worth evaluating because it can host this Next.js site with the current form backend
- existing AWS hosting should remain in place until the Vercel version is fully verified

Important note for non-technical stakeholders:

- the domain `www.sitech-intl.com` and the hosting platform are not the same thing
- in many cases, switching hosting only requires updating DNS records
- you do not always need to transfer the domain registration itself

## Docs

- `docs/prd.md`: product direction and content requirements
- `docs/tasks.md`: active implementation checklist
- `docs/styleguide.md`: voice and structure rules
- `docs/beginner-guide.md`: the one beginner-facing guide to read first
- `docs/image-guide.md`: where to replace images and what size to use
- `docs/code-explanation.md`: PM-friendly explanation of how the code is organized
- `docs/b2b-website-structure.md`: B2B website structure and lead-generation notes
- `docs/reference/`: source material, OCR notes, and deck/reference extracts
