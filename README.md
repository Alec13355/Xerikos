# Xerikos — landing page

React + Vite + Tailwind v4 + Framer Motion. Static build, deploys to Cloudflare Pages.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Edit the content you'll actually want to change
Open `src/App.jsx` — the first block at the top:
```js
const EMAIL    = 'hello@xerikos.com'                       // <- your email
const LINKEDIN = 'https://www.linkedin.com/in/your-handle' // <- your LinkedIn
const OWNER    = 'Alec Harrison'
```
The three olive credential chips in the About section (`Microsoft MVP` etc.)
are marked `.edit` in `src/App.jsx` — keep, change, or delete them.
Copy lives in plain text in `src/App.jsx`; colors/type in `src/index.css` (`:root`).

## Deploy to Cloudflare Pages

**Option A — connect a Git repo (auto-deploys on push):**
1. Push this folder to GitHub/GitLab.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build`  ·  Build output directory: `dist`
4. Deploy. Add your custom domain (e.g. xerikos.com) under the project's Custom domains tab.

**Option B — direct upload (no Git):**
```bash
npm run build
npx wrangler pages deploy dist --project-name xerikos
```
Or drag the `dist/` folder into Cloudflare Pages → Create → Upload assets.

## Using the real Motion Primitives / Watermelon UI components
This project is built on the same stack both libraries use (React + Tailwind +
Framer Motion), and the animated pieces are written in their idiom:
- `src/components/TextReveal.jsx`  ≈ Motion Primitives `TextEffect`
- `src/components/Reveal.jsx`       ≈ Motion Primitives `InView`
- `src/components/ServiceCard.jsx`  ≈ a Watermelon UI spotlight card

To pull the official components (run locally, where their registries are reachable):
```bash
npx motion-primitives@latest add text-effect in-view
npx shadcn@latest add "https://registry.watermelon.sh/r/<component>.json"
```
