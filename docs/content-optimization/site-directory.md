# Site Directory For Optimization

This is the working map for recurring optimization runs. It is intentionally focused on content-bearing and UI-bearing files, not every asset in the repository.

## Product Priority

1. `opera-site/`
Reason: this is the default local entry and the most visible product-led experience.

2. Root shared site files: `app/`, `components/`, `content/`
Reason: these shape shared presentation, legacy routes, and cross-site copy that still influences the repo.

3. `company-site/`
Reason: supporting company credibility and corporate detail.

4. `telecom-site/`
Reason: solution-depth and vertical narrative after the main experience is stronger.

## High-Priority UI And Copy Files

| Path | Focus |
| --- | --- |
| `opera-site/app/[locale]/page.tsx` | Opera landing page structure, hierarchy, pacing |
| `opera-site/components/opera-homepage.tsx` | Homepage composition, section rhythm, CTA flow |
| `opera-site/components/opera-shell.tsx` | Frame, nav, footer shell, visual polish |
| `opera-site/components/opera-contact-form.tsx` | Form UX and trust cues |
| `opera-site/content/opera-content.ts` | Product narrative, English tone, factual accuracy |
| `app/[locale]/page.tsx` | Root homepage or legacy surface alignment |
| `components/page-sections.tsx` | Shared visual sections and layout rigidity |
| `components/site-header.tsx` | Navigation clarity and modern feel |
| `components/site-footer.tsx` | Footer information architecture |
| `content/site-content.ts` | Shared bilingual copy and company positioning |
| `content/products-content.ts` | Product descriptions, naming, CTA clarity |
| `content/telecom-solutions-content.ts` | Solution accuracy and readability |

## Secondary Files

| Path | Focus |
| --- | --- |
| `company-site/app/[locale]/page.tsx` | Corporate homepage polish |
| `company-site/app/[locale]/about/page.tsx` | About page clarity and trust |
| `company-site/app/[locale]/solutions/page.tsx` | Service structure and scannability |
| `company-site/app/[locale]/contact/page.tsx` | Contact UX |
| `telecom-site/app/[locale]/page.tsx` | Telecom homepage polish |
| `telecom-site/app/[locale]/solutions/telecom/page.tsx` | Solution hub structure |
| `telecom-site/app/[locale]/solutions/telecom/[slug]/page.tsx` | Detail page consistency |

## Cleanup Candidates To Verify Carefully

These areas may contain duplication or lower-value legacy code, but should only be removed after reference checks and impact review.

- Root `app/` versus workspace-specific `app/` structures
- Duplicate component implementations between root and `opera-site/components/`
- Old content branches in `content/*.ts`
- Unused images or placeholder assets
- Generated local folders such as `telecom-site/.netlify/`

## Required Evidence Before Deletion

Before deleting code or files, verify:

1. `rg` shows no remaining live imports or route references.
2. The removal does not break the default Opera experience.
3. The tracker records why the file was removed.
