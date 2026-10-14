# Ashley G. Glaraga: Portfolio

A static, dark-themed developer portfolio built with **SvelteKit 3**, **Svelte 5**, **Tailwind CSS 4**, and **Lucide** icons. It prerenders to plain HTML/CSS/JS (about 570 KB total), so it can be hosted anywhere. Its lime-green animated network background loads Three.js and Vanta.NET from their CDNs in the browser and is disabled when reduced motion is preferred.

## Quick start

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

## Add your resume (required)

The "Download Resume" buttons (navbar, hero, contact) point to **`static/resume.pdf`**.

1. Put your resume PDF at `static/resume.pdf` (exact filename).
2. To update it later, replace that file. Nothing else changes.

Until the file exists, `npm run build` prints a warning and the buttons will 404. To change the path or the downloaded filename, edit `profile.resume` in `src/lib/data/profile.js`.

## Build and preview

```bash
npm run build      # outputs the static site to ./build
npm run preview    # serves ./build locally at http://localhost:4173
```

## Deploy

The output in `build/` is a static site. Use any of these:

| Host | Settings |
| --- | --- |
| **Netlify** | Build command `npm run build`, publish directory `build` |
| **Vercel** | Framework preset "Other"; build `npm run build`, output `build` (also set in `vercel.json`) |
| **Cloudflare Pages** | Build command `npm run build`, output directory `build`; no deploy command |
| **GitHub Pages** | Build in a GitHub Action, publish `build/`. If served from a sub-path (`user.github.io/repo`), set `paths.base` in `vite.config.js` |
| **Hostinger / any static host** | Run `npm run build`, upload the *contents* of `build/` to `public_html` |

This project uses SvelteKit's static adapter. Deploy it as a **Cloudflare Pages** site; do not use `npx wrangler deploy`, which targets Cloudflare Workers and requires a Worker adapter/configuration this project does not use. In Pages, set the build output directory to `build` and leave deploy/preview commands unset.

After deploying, set `profile.site.url` in `src/lib/data/profile.js` to your live URL (no trailing slash) so Open Graph and canonical links are absolute.

## Updating content

All content lives in `src/lib/data/`. You should not need to touch the components.

| What | File |
| --- | --- |
| Name, headline, intro, career-interest badge, site title/description, resume path | `profile.js` (`profile`) |
| Email, phone, LinkedIn, GitHub, contact heading/text, form endpoint | `profile.js` (`contact`) |
| About text and the three value cards | `profile.js` (`about`) |
| Education | `profile.js` (`education`) |
| Jobs | `experience.js` |
| Projects (text, features, tech tags, links) | `projects.js` |
| Skill categories | `skills.js` |

### Project links

Each project has `live` and `source` fields. A button is rendered **only when the value is a real URL**; leave it `null` and no button appears.

```js
live: 'https://example.com',
source: 'https://github.com/you/repo'
```

### Career-interest badge

The hero badge text is `profile.interest`. It is intentionally non-committal. Change it only to something you want to claim.

## Contact form

This is a static site with no server, so the form works in one of two modes:

- **Default (no endpoint):** submitting opens the visitor's email app with the message pre-filled to your address. The form says so on the page. The direct `mailto:` link is always available too.
- **Real delivery:** create a form on [Formspree](https://formspree.io), [Getform](https://getform.io), or [Web3Forms](https://web3forms.com), then paste its endpoint URL into `contact.formEndpoint` in `profile.js`. The form then POSTs to it and shows success or error states.

## Project structure

```
src/
  app.css                  Tailwind import + design tokens (colors, fonts)
  app.html                 HTML shell, favicon, theme color
  routes/
    +layout.js             prerender = true
    +layout.svelte         <head> metadata, Open Graph, skip link
    +page.svelte           Composes the sections
  lib/
    actions/reveal.js      Scroll-reveal (respects reduced motion, safe without JS)
    components/            Navbar, Hero, About, Experience, Projects, ProjectCard,
                           Skills, Education, Contact, Footer, + small helpers
    data/                  All editable content
static/
  favicon.svg  og-image.png  robots.txt
  resume.pdf               <-- YOU add this
scripts/check-resume.js    Warns before build if resume.pdf is missing
```

## Design tokens

Colors, fonts, and spacing are defined in the `@theme` block in `src/app.css` (for example `--color-accent`). Change the accent color there and it updates everywhere.

## Notes

- `$lib` was removed in SvelteKit 3. This project uses `#lib/...` imports, defined under `imports` in `package.json`.
- SvelteKit configuration lives in `vite.config.js` (there is no `svelte.config.js` in v3).
- The only intentional build-time exception is a missing `/resume.pdf`, which warns instead of failing. Any other broken internal link fails the build.
- Scroll-reveal animations are disabled under `prefers-reduced-motion`; content is fully visible without JavaScript. The Vanta.NET network background also respects reduced-motion preferences.
# portfolio_web
