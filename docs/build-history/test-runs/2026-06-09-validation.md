# Test Run: validation

## Commands
- `node node_modules/pnpm/bin/pnpm.cjs install --frozen-lockfile`
- `node node_modules/pnpm/bin/pnpm.cjs run check`
- `node node_modules/pnpm/bin/pnpm.cjs run build`
- grep loop for unresolved analytics placeholders, invalid `@apply label-uppercase`, TODO/FIXME markers, and obvious hardcoded secrets.

## Results
- Frozen pnpm install: passed.
- TypeScript check: passed.
- Production build: passed.
- Grep loop: passed for targeted patterns.

## Notes
- `pnpm install` reported ignored build scripts for `@tailwindcss/oxide` and `esbuild`; the subsequent build still passed in this environment.
