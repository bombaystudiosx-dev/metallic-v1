# Failure Memory

- Build failed because `.status-badge` tried to `@apply label-uppercase`, which Tailwind v4 treats as an unknown utility.
- npm dependency resolution failed because Vite 7 conflicted with `@builder.io/vite-plugin-jsx-loc@0.1.1`.
- Static analytics placeholders in `client/index.html` produced production build warnings and could emit a broken analytics script when env vars are absent.
