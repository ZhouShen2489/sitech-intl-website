# Si-Tech multi-site deployment

## Repository structure

```text
company-site/   # www.sitech-intl.com
opera-site/     # opera.sitech-intl.com
telecom-site/   # telecom.sitech-intl.com
shared-assets/  # shared domains and brand constants
```

The root `components`, `content`, `lib`, and `public` folders remain the shared source of truth during phase one. Each deployable site synchronizes public assets before its build and imports shared code through its TypeScript alias.

## Netlify projects

Create three Netlify projects from the same GitHub repository.

| Netlify project | Base directory | Build command | Publish directory | Production domain |
| --- | --- | --- | --- | --- |
| `sitech-company` | `company-site` | `npm run build` | `.next` | `www.sitech-intl.com` |
| `sitech-opera` | `opera-site` | `npm run build` | `.next` | `opera.sitech-intl.com` |
| `sitech-telecom` | `telecom-site` | `npm run build` | `.next` | `telecom.sitech-intl.com` |

Netlify automatically applies its current OpenNext adapter for Next.js. Do not configure a Vite `dist` output and do not pin the legacy Next.js plugin.

## Site environment variables

Copy the existing contact-service secrets into each site that accepts contact submissions:

- `GMAIL_SENDER`, `CONTACT_RECIPIENT`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `GOOGLE_REFRESH_TOKEN` for the Gmail notification and visitor confirmation.
- `LEAD_STORAGE_PROVIDER=google_sheets`, `GOOGLE_SHEETS_LEAD_SHEET_ID`, `GOOGLE_SHEETS_LEAD_TAB`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, and `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` for durable lead storage.

Do not commit secrets to `netlify.toml`.

Create one Google Sheet and share it with the Google service account as an Editor. The same spreadsheet can receive leads from all three sites; the `netlify_site`, `source`, and `page_url` columns identify where each lead came from.

## DNS cutover

Only change DNS after all three Netlify preview URLs pass acceptance testing.

```text
www.sitech-intl.com      CNAME  <sitech-company>.netlify.app
opera.sitech-intl.com    CNAME  <sitech-opera>.netlify.app
telecom.sitech-intl.com  CNAME  <sitech-telecom>.netlify.app
```

Before changing records:

1. Export the current authoritative DNS zone.
2. Confirm the authoritative provider and remove conflicting duplicate records.
3. Verify the current apex, `www`, CloudFront, and certificate records.
4. Preserve MX, SPF, DKIM, and DMARC records exactly.
5. Add and verify the two new subdomains first.
6. Move `www` only after the company preview is approved.

The apex `sitech-intl.com` should redirect permanently to `https://www.sitech-intl.com` after the company site is live.

## Local verification

```bash
npm run build:company
npm run build:opera
npm run build:telecom
```

All three commands must pass before a DNS or production deployment change.
