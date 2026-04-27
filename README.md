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

## Current branch

- Active implementation branch: `codex/preBuild`

## Technical stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Localized content in `content/siteContent.ts` and `content/productsContent.ts`
- Lead form submission through `POST /api/contact`
- HubSpot CRM routing through server-side integration
- Gmail delivery through server-side OAuth2 mail sending

## Content structure

- `content/siteContent.ts`: primary bilingual site copy
- `content/productsContent.ts`: product and marketplace copy
- `content/pdf-ocr/sitech-manual-ocr.md`: raw OCR extraction from the Si-Tech PDF manual
- `content/pdf-ocr/sitech-manual-structured.md`: structured content draft for website reuse

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
- Raw output: `content/pdf-ocr/sitech-manual-ocr.md`
- Structured output: `content/pdf-ocr/sitech-manual-structured.md`

The OCR pipeline uses:

- `PDFKit` to render each PDF page
- macOS `Vision` to recognize Chinese and English text

Run it with:

```bash
npm run ocr:sitech-manual
```

## Lead flow

Current intended flow:

1. User submits the lead form.
2. Backend validates the payload and checks honeypot / basic rate limiting.
3. Server submits the lead into HubSpot as the CRM source of truth.
4. Server sends the internal notification to `info@sitech-intl.com` as a backup alert.
5. Server sends an automatic confirmation email back to the user in the same language as the page they submitted from.
6. User is redirected to the thank-you page.

## Required environment variables

### Gmail

- `GMAIL_SENDER`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `CONTACT_RECIPIENT`

### HubSpot

- `HUBSPOT_ACCESS_TOKEN`
- `HUBSPOT_FORM_PORTAL_ID`
- `HUBSPOT_FORM_ID`
- `HUBSPOT_FIELD_INTERESTED_IN`
- `HUBSPOT_FIELD_MESSAGE`
- `HUBSPOT_FIELD_SOURCE`
- `HUBSPOT_FIELD_LOCALE`

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

- `PRD.md`: product direction and content requirements
- `TASKS.md`: active implementation checklist
- `STYLEGUIDE.md`: voice and structure rules
- `BEGINNER_GUIDE.md`: the one beginner-facing guide to read first
