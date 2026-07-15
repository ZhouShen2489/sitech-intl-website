# Sitech Content Optimization Skill

Use this skill for the recurring daily optimization pass on `sitech-intl-website`.

## Objective

Improve the site in small daily batches with four simultaneous goals:

1. Upgrade UI and UX so the site feels more modern, intentional, and less stiff.
2. Refine copy so Chinese and English both read correctly, credibly, and naturally.
3. Remove dead or unused code and files when there is clear evidence they are not needed.
4. Leave a durable audit trail of what was reviewed and what remains.

## Files To Read First

Read these in order before making changes:

1. `/Users/zhoushen/Documents/sitech-intl-website/README.md`
2. `/Users/zhoushen/Documents/sitech-intl-website/docs/styleguide.md`
3. `/Users/zhoushen/Documents/sitech-intl-website/docs/content-optimization/README.md`
4. `/Users/zhoushen/Documents/sitech-intl-website/docs/content-optimization/site-directory.md`
5. `/Users/zhoushen/Documents/sitech-intl-website/docs/content-optimization/progress-tracker.md`

If copy facts need verification, also read the most relevant source material under:

- `/Users/zhoushen/Documents/sitech-intl-website/docs/reference/`

## Per-Run Scope

Each run should touch only a small batch, usually 2 to 5 meaningful files.

Prefer this order:

1. `opera-site/` customer-facing homepage and shell
2. shared root `components/` and `content/`
3. `company-site/`
4. `telecom-site/`
5. cleanup-only passes

## Workflow

### 1. Pick The Next Batch

- Start from files marked `pending` or `cleanup-candidate`.
- Favor adjacent files that ship together, for example a page plus its content file.
- Avoid broad refactors unless the current batch clearly requires them.

### 2. Improve UI And UX

- Reduce rigid blocky layouts and generic spacing.
- Strengthen hierarchy, contrast, pacing, and section transitions.
- Keep the result professional B2B, but less templated and more current.
- Use motion sparingly and purposefully when it improves clarity.
- Preserve responsiveness on desktop and mobile.

Design direction:

- Think polished contemporary B2B product marketing, not headquarters brochure.
- Avoid default-feeling layouts and wording.
- Use clearer narrative flow, stronger CTA framing, and more confident visual rhythm.

### 3. Refine Copy Carefully

- Do not assume English should mirror Chinese sentence-by-sentence.
- Rewrite English as business-native copy when needed.
- Remove vague claims, weak translation artifacts, and repeated ideas.
- Ensure terminology is accurate for product, telecom, AI, operations, and enterprise contexts.
- If a factual claim is uncertain, verify it against repo reference docs before keeping it.

### 4. Remove Dead Code Or Files Carefully

- Only delete files or code after proving they are unused.
- Use import/reference checks before removal.
- Prefer small safe deletions over speculative cleanup.
- Record every removal in the tracker notes.

### 5. Validate

Run the lightest meaningful validation for the affected scope, for example:

- `npm run build:opera`
- `npm run build:company`
- `npm run build:telecom`

If a full build is too expensive for the batch, run a narrower check and state what was not verified.

### 6. Update The Tracker

At the end of every run:

- update file statuses
- update `Last Run Date`
- append a row to the run log
- note removals, blockers, and next recommended files

## Hard Rules

- Do not silently introduce large architectural changes.
- Do not remove likely-active routes without strong evidence.
- Do not keep awkward literal-English copy just because it matches Chinese.
- Do not mark a file `polished` unless the UI or wording is materially better.
- Do not leave the tracker stale after making changes.

## Expected End-Of-Run Output

Each run should finish with:

1. A short summary of files changed
2. What improved in UI or copy
3. Any deletions made and why they were safe
4. What validation ran
5. Which files should be next
