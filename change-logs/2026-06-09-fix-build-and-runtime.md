# Change Log: fix build and runtime issues

## Scope
Fixed repository issues found outside missing-image replacement.

## Changes
- Replaced invalid Tailwind `@apply label-uppercase` usage with equivalent CSS declarations.
- Added `client/src/lib/analytics.ts` and imported it from `client/src/main.tsx`.
- Removed unresolved analytics placeholder script from `client/index.html`.
- Pinned Vite to `^5.2.0` and regenerated `pnpm-lock.yaml` with pnpm.
- Updated README/template references so generated/scaffolded files do not reintroduce the analytics placeholder issue.
- Added concise memory and receipt files.

## Out of scope
- No missing images were added or replaced.
- No UI redesign was performed.
