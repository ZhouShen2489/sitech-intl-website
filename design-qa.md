**Source visual truth**

- `/var/folders/_c/kk3z5xys6c56r5h43m31lzn80000gn/T/codex-clipboard-e1c61330-b0ea-4aea-ac99-d8987cba3473.png`

**Implementation evidence**

- `/tmp/opera-home-wide-fit.png`
- Viewport: 2042 x 1323
- Route: `http://localhost:3002/zh`
- State: Detect, with the full hero canvas visible

**Full-view comparison**

- The implementation now follows the reference's primary composition: a full-width dark enterprise canvas, a right-side AI Operations console, a continuous logistics corridor, two operational routes, a six-item KPI strip, and four bottom workflow states.
- The previous oversized closing banner was removed, so the trade corridor and all four workflow states remain visible in one desktop viewport.
- The large left marketing headline from the reference is intentionally omitted because the user's latest annotation explicitly requested that no additional headline or start-demo block precede or cover the central visual.

**Focused comparison**

- AI console: live React content, evidence items, actions, playback, previous/next controls, and confidence values match the reference's compact operations-panel role.
- Corridor: clean generated scene asset preserves the reference's factory, warehouse, ship, port, and customer progression without baking UI into the image.
- Bottom controls: KPI cards and workflow tabs are fully visible and remain clickable at the target viewport.

**Required fidelity surfaces**

- Typography: restrained sans-serif UI hierarchy; labels, metrics, and workflow text remain readable without competing with the scene.
- Spacing and layout: the hero fits within the target viewport after accounting for outer frame spacing; no workflow controls are clipped.
- Colors and tokens: deep navy canvas, cobalt route, amber risk, and green resolved states are consistent across scene and UI.
- Image quality: the corridor is a dedicated 1672 x 941 project asset without text, logos, or baked interface elements.
- Copy and content: bilingual mock operational data remains consistent across stages and clearly identifies the page as a concept demonstration.

**Interaction verification**

- Stage controls change the AI panel, affected objects, routes, KPI values, and workflow state.
- `审批动作` advances Act to Resolve and exposes the 91% delivery confidence state.
- Playback, pause, previous/next controls, keyboard support, and reduced-motion behavior are implemented.
- Footer routes resolve to `/[locale]/company`, `/[locale]/about`, and `/[locale]/contact`.

**Patches made during QA**

- Removed the oversized closing overlay and large stage cards that obscured the corridor.
- Added compact KPI and workflow strips.
- Reduced the scene height to account for outer page padding, keeping the complete workflow visible at 2042 x 1323.

**Follow-up polish**

- P3: Fine-tune node positions against the generated scene if the background asset is replaced later.
- P3: Add a dedicated mobile story-card visual QA pass after final desktop art direction approval.

final result: passed
