# Local multi-site development

Production uses three Netlify sites and three public domains:

- `https://www.sitech-intl.com`
- `https://opera.sitech-intl.com`
- `https://telecom.sitech-intl.com`

Local development should not hard-code those production domains into page code.
Use local environment variables instead.

## One-time setup

Copy the example files if you want local cross-site links:

```bash
cp company-site/.env.local.example company-site/.env.local
cp opera-site/.env.local.example opera-site/.env.local
cp telecom-site/.env.local.example telecom-site/.env.local
```

These files are ignored by git.

## Run locally

```bash
pnpm run dev:company
pnpm run dev:opera
pnpm run dev:telecom
```

Local URLs:

- Company: `http://localhost:3004`
- Opera: `http://opera.localhost:3003`
- Telecom: `http://telecom.localhost:3005`

`*.localhost` resolves to your local machine in modern browsers, so it can mimic the subdomain structure without changing DNS.

## Deployment

Netlify continues to use each site's `netlify.toml` values, for example:

```toml
NEXT_PUBLIC_SITE_ORIGIN = "https://opera.sitech-intl.com"
```

Local `.env.local` files do not affect Netlify.
