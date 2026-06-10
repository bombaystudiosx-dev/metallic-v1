# METALLIC.V1

Dark-forge luxury storefront for METALLIC.V1 — flagship drops, founder program, and early-access gating.

Built with React 19, Tailwind CSS 4, shadcn/ui, Vite 5, and Wouter. Lead capture is backed by Supabase.

## Quick Start

```bash
pnpm install
cp .env.example .env   # fill in the Supabase values
pnpm dev               # http://localhost:3000
```

## Scripts

| Command | What it does |
|---------|--------------|
| `pnpm dev` | Vite dev server on port 3000 |
| `pnpm build` | Production build → `dist/public` (client) + `dist/index.js` (static server) |
| `pnpm start` | Serve the production build with Express (`NODE_ENV=production node dist/index.js`) |
| `pnpm check` | TypeScript type check |
| `pnpm format` | Prettier |

## Environment Variables

See [.env.example](.env.example). All are baked into the client bundle at build time:

- `VITE_SUPABASE_URL` / `VITE_SUPABASE_PUBLISHABLE_KEY` — access-request lead capture (table `access_requests`, insert-only via RLS). Without them the form still grants device access but signups are not recorded.
- `VITE_ANALYTICS_ENDPOINT` / `VITE_ANALYTICS_WEBSITE_ID` — optional umami analytics.

## Deployment

The site is a static SPA; the bundled Express server exists only as one hosting option.

**Static host (Vercel / Netlify / Cloudflare Pages):**
build command `pnpm build`, output directory `dist/public`. SPA rewrites are configured in [vercel.json](vercel.json). Set the `VITE_*` env vars in the host's dashboard.

**Node host:**
`pnpm build && pnpm start` (uses `PORT`, defaults to 3000).

## Structure

```
client/
  public/        favicon, robots.txt, uploads/ (product imagery)
  src/
    pages/       Home, Flagships, BetaHub, NotFound
    components/  feature components + components/ui (shadcn)
    lib/         assetUrls, accessRequests (Supabase), flagships data
server/          minimal Express static server for Node hosting
shared/          shared constants
docs/            build-history artifacts from the original agent build
```

## Lead Capture

"Request Access" signups are written to the `access_requests` table in the
`zuok-uncensored` Supabase project. The browser key can only INSERT (row-level
security); view the lead list in the Supabase dashboard table editor.
Note: free-tier Supabase projects pause after ~1 week of inactivity — restore
the project from the dashboard if signups stop recording.
