# Agentic AI team portfolio (Next.js 14, App Router, TS, Tailwind, Framer Motion)
Run: `npm install && npm run dev`  |  Build: `npm run build`
- Cloudflare Workers: `npm run deploy` (requires Wrangler authentication).
- Rename the team: `lib/config.ts` → `TEAM_NAME` (single source).
- All copy and data (services, cases, team, stack): `lib/config.ts`.
- Portraits: add greyscale-friendly JPGs to `public/team/{priyadharshini,tamilselvi,sujitha,megalai}.jpg` (initials show until then).
- Real metrics: replace the `[X% ...]` placeholders in `CASES`. Never publish them as-is.
- LinkedIn: replace `li: "#"` per member. Booking: set `BOOKING_URL`.
- Tokens: `tailwind.config.ts` (single accent `brand` #6A0DF0). Light theme only.
