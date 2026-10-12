# SmileCraft Dental Studio — Demo Website

A premium, mobile-first dental clinic website built with **Next.js 15 (App Router, static export)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion** and **lucide-react**.

Every word, image, price, colour and SEO string comes from a single file — `src/content/site.ts` — so the site can be re-branded for a new clinic in about 15 minutes.

---

## 1. Run it locally

Requires Node.js 18.18+ (tested on Node 24).

```bash
npm install
npm run dev          # http://localhost:3000 with hot reload
```

Production build (outputs a fully static site to `out/`):

```bash
npm run build
npx serve out        # preview the static build
```

## 2. Pages

| Route | What's on it |
| --- | --- |
| `/` | Hero, stats counter, treatments grid, before/after slider, why-us, doctor, reviews carousel, FAQ, CTA, contact + map |
| `/treatments/` | All treatments with starting prices |
| `/treatments/[slug]/` | Detail template (what it is, who needs it, steps, duration, price, FAQs, CTA). One page per treatment in `site.ts` |
| `/gallery/` | Filterable smile gallery with lightbox + before/after slider |
| `/about/` | Clinic story, doctor profile, education, team, clinic tour, certifications |
| `/reviews/` | Rating summary with 5★→1★ bars and all review cards |
| `/contact/` | Appointment form that opens WhatsApp with all details pre-filled |
| `404` | Custom not-found page |

Always on: announcement bar, glass sticky header, floating WhatsApp button, mobile Call/WhatsApp bar.

## 3. Re-brand for a new clinic (edit `src/content/site.ts` only)

Open `src/content/site.ts`. It's grouped and commented:

| Section | What to change |
| --- | --- |
| `business` | Clinic name, phone, **`whatsappNumber`** (country code + number, digits only, e.g. `919876543210`), address, map URLs, rating, review count, opening hours |
| `doctor` | Name, degrees, experience, photo, personal message, highlights, education |
| `treatments` | Add / remove / edit treatments. `featured: true` shows it on the home page. Each one automatically gets its own detail page |
| `reviews` | Patient reviews (name, initials, stars, text, treatment) |
| `gallery`, `beforeAfter` | Smile photos. For real before/after photos set `beforeImage`; otherwise `beforeFilter` simulates the "before" |
| `theme` | Brand colours (see below) |
| `seo` | Page title, description, live site URL (`siteUrl`), social share image |
| `announcement` | Top bar text — set `enabled: false` to hide it |
| `home`, `pages`, `labels` | All headings, button labels and section copy |

**Map:** change `business.mapEmbedUrl` to `https://www.google.com/maps?q=<Clinic+Name+City>&output=embed` and `business.mapLinkUrl` to the clinic's Google Maps link. Point `business.googleReviewsUrl` at the clinic's Google review page.

**Photos:** any image URL works. Unsplash URLs are resized automatically. For the clinic's own photos, drop them in `public/images/` and reference them as `/images/photo.jpg`.

### New client workflow

This repo is the **base template** for every dental client. For each new clinic:

1. Create a branch named after the clinic: `git checkout main && git checkout -b client/dr-sharma-dental`
2. Edit **only** `src/content/site.ts` (details, photos, colours, `seo.siteUrl`).
3. Commit and push the branch: `git push -u origin client/dr-sharma-dental`
4. Deploy that branch as its own project on Vercel or Netlify (set the production branch to the client branch).

Improvements to the design or components go on `main`. To bring them into a client, run `git checkout client/<name> && git merge main`. Conflicts are rare because clients only change `site.ts`.

## 4. Change the colours

In `site.ts` → `theme`:

```ts
theme: {
  brand: "#0E7C86",      // primary (buttons, accents)
  brandDark: "#0B3B45",  // dark sections, headings
  accent: "#E8B04B",     // gold highlights
  background: "#F7FBFC",
},
```

These are written to CSS variables (`--brand`, `--brand-dark`, `--accent`) on `<html>`. Every tint and shade on the site is derived from them with `color-mix()` in `src/app/globals.css`, so changing two or three hex values re-themes everything.

Fonts are set in `src/app/layout.tsx`: **Plus Jakarta Sans** (headings), **Inter** (body), **Fraunces Italic** (accent words) and **Allura** (doctor's signature).

## 5. Deploy

### Vercel
1. Push the project to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Framework preset **Next.js** is detected automatically. Click **Deploy**.
4. Update `seo.siteUrl` in `site.ts` to the final domain and redeploy.

### Netlify
1. Push to GitHub, then **Add new site → Import an existing project** on [netlify.com](https://netlify.com).
2. Build command: `npm run build` · Publish directory: `out`.
3. Deploy. (Or run `npm run build` and drag the `out/` folder onto Netlify Drop.)

Since the build is fully static, `out/` can also be uploaded to any host (Hostinger, cPanel, S3, GitHub Pages).

## 6. Built-in quality

- **SEO:** per-page titles and descriptions, Open Graph/Twitter tags, canonical URLs, and `Dentist` + `LocalBusiness` JSON-LD (rating, hours, geo, services, reviews) generated from `site.ts`.
- **Accessibility:** semantic landmarks, skip link, alt text on every image, visible focus rings, keyboard-operable slider, accordion, menu and lightbox, AA contrast.
- **Motion:** Framer Motion throughout (scroll reveals, counters, hero word reveal, shared-layout tabs, slider hint). All of it respects `prefers-reduced-motion`.
- **Performance:** static HTML, responsive `srcset` images with fixed dimensions (no layout shift), lazy loading below the fold, and self-hosted fonts via `next/font`.

## Project structure

```
src/
  content/site.ts        ← all business content (edit this)
  app/                   ← pages (App Router)
  components/            ← UI components
    home/                ← home-page sections
  lib/unsplash.ts        ← image sizing helper
```

---

Demo website designed by AN Web Agency.
