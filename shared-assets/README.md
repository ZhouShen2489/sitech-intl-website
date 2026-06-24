# Shared assets

Shared domain constants, brand tokens, and reusable assets for the Company, Opera, and Telecom sites.

The existing root `components`, `content`, `lib`, and `public` folders remain the shared source during the first migration phase. Each site imports those sources through its TypeScript alias and synchronizes public assets before build. This keeps one source of truth while the three deployable apps are separated.
