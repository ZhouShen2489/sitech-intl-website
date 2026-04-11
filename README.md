# Si-Tech Intl Website

## What this project is

This repository contains the bilingual marketing website for `Si-Tech Intl`.

The site is designed to do four jobs clearly:

1. Explain what Si-Tech Intl helps with in practical business language.
2. Build trust with U.S. clients and partners.
3. Turn website traffic into qualified leads through a structured inquiry form.
4. Leave room to expand into more solution pages, product pages, stories, and CRM-connected growth workflows.

## Core positioning

The website is not meant to feel like a translated headquarters brochure.

It should present Si-Tech Intl as:

- a U.S.-facing collaboration and business development interface
- backed by broader Si-Tech engineering and delivery capability
- strong in telecom-grade systems, service operations, Teamshub collaboration flows, AI-enabled customer service, and custom business platforms
- practical, execution-oriented, and able to start with scoped pilots instead of forcing large all-at-once projects

## Messaging goals

The site should help a visitor understand, within a short scan:

- who we are
- what kinds of operational problems we solve
- what solution tracks are currently the clearest fit
- why we are credible
- how to contact us and submit an inquiry

## Technical stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Localized content in `content/siteContent.ts`
- Lead form submission through `POST /api/contact`
- HubSpot CRM routing through server-side integration
- Gmail delivery through server-side OAuth2 mail sending

## Lead flow

Current intended flow:

1. User submits the lead form.
2. Backend validates the payload and checks honeypot / basic rate limiting.
3. Server submits the lead into HubSpot as the CRM source of truth.
4. Server sends the internal notification to `info@sitech-intl.com` as a backup alert.
5. Server sends an automatic confirmation email back to the user in the same language as the page they submitted from.
6. User is redirected to the thank-you page.
7. HubSpot can then push the new lead notification into Slack through its native Slack integration.

## Required environment variables

### Gmail

- `GMAIL_SENDER`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `CONTACT_RECIPIENT`

Where to get them:

- `GMAIL_SENDER`: the mailbox identity you want to send from, usually your business mailbox or an approved sender identity
- `GOOGLE_CLIENT_ID`: Google Cloud Console -> APIs & Services -> Credentials
- `GOOGLE_CLIENT_SECRET`: Google Cloud Console -> APIs & Services -> Credentials
- `GOOGLE_REFRESH_TOKEN`: generated for the Gmail account used by the site backend
- `CONTACT_RECIPIENT`: usually `info@sitech-intl.com`

### HubSpot

- `HUBSPOT_ACCESS_TOKEN`
- `HUBSPOT_FORM_PORTAL_ID`
- `HUBSPOT_FORM_ID`
- `HUBSPOT_FIELD_INTERESTED_IN`
- `HUBSPOT_FIELD_MESSAGE`
- `HUBSPOT_FIELD_SOURCE`
- `HUBSPOT_FIELD_LOCALE`

Where to get them:

- `HUBSPOT_ACCESS_TOKEN`: HubSpot -> Settings -> Integrations -> Private Apps
- `HUBSPOT_FORM_PORTAL_ID`: the portal/account ID of your HubSpot form
- `HUBSPOT_FORM_ID`: the target HubSpot form ID
- `HUBSPOT_FIELD_INTERESTED_IN`: internal name of the HubSpot field/property for inquiry category
- `HUBSPOT_FIELD_MESSAGE`: internal name of the HubSpot field/property for inquiry details
- `HUBSPOT_FIELD_SOURCE`: internal name of the HubSpot field/property used to mark the lead source, recommended value `website`
- `HUBSPOT_FIELD_LOCALE`: internal name of the HubSpot field/property used to preserve whether the inquiry came from the Chinese or English site

Notes:

- If HubSpot form IDs are configured, the server submits via HubSpot Forms.
- If form submission is unavailable, the server falls back to HubSpot contact creation.
- For best results, create HubSpot form fields or contact properties matching the internal names used in env vars.
- Recommended custom HubSpot properties for this website flow:
  - `website_interested_in`
  - `website_inquiry_details`
  - `website_lead_source`
  - `website_inquiry_locale`
- Recommended fixed value for the source field: `website`

## Slack follow-up setup

The website does not send Slack notifications directly in the first-stage setup.

Recommended operating model:

1. Keep the website as the public form entrypoint.
2. Keep HubSpot as the CRM system of record.
3. Use HubSpot's native Slack integration to notify a Slack channel when a new website lead appears.

Recommended Slack notification content:

- full name
- company
- email
- interested in
- short inquiry summary
- link to the HubSpot record

This keeps Slack as the team notification layer instead of turning the website into a second notification system.
- A ready-to-copy example file is included as `.env.example`.

## Content structure

- `README.md`: project overview and implementation notes
- `PRD.md`: product requirements and source direction
- `TASKS.md`: current build status and next actions
- `STYLEGUIDE.md`: voice, brand, layout, and visual rules

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
