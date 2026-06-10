# Architecture Memory

- Vite serves the React client from `client/` and builds production assets into `dist/public`.
- Express in `server/index.ts` serves the built static client and falls back to `index.html` for client-side routes.
- Shared constants live in `shared/`; client aliases use `@/*` and `@shared/*`.
- Runtime analytics loading is isolated in `client/src/lib/analytics.ts` so missing analytics env vars do not break builds.
