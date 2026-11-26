# Agentic AI team portfolio (Next.js 14, App Router, TS, Tailwind, Framer Motion)
Run: `npm install && npm run dev`  |  Build: `npm run build`
- Cloudflare Workers: set the Cloudflare build command to `npm run build:cloudflare` and deploy command to `npx wrangler deploy`, or run `npm run deploy` locally (requires Wrangler authentication).
- Rename the team: `lib/config.ts` → `TEAM_NAME` (single source).
- All copy and data (services, cases, team, stack): `lib/config.ts`.
- Portraits: add greyscale-friendly JPGs to `public/team/{priyadharshini,tamilselvi,sujitha,megalai}.jpg` (initials show until then).
- Real metrics: replace the `[X% ...]` placeholders in `CASES`. Never publish them as-is.
- LinkedIn: replace `li: "#"` per member. Booking: set `BOOKING_URL`.
- Tokens: `tailwind.config.ts` (single accent `brand` #6A0DF0). Light theme only.
