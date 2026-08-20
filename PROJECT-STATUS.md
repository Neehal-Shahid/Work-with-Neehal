# Work With Neehal — Project Status

Living reference for this repo. Read this first in any new conversation before
touching code — it has the context a fresh session won't have.

- **Owner:** Muhammad Neehal Shahid (laibas166@gmail.com)
- **Brand:** Work With Neehal — Frontend Developer (React) & WordPress Developer
- **Domain:** workwithneehal.com
- **Positioning:** dual-stack — WordPress for content-driven business sites,
  React for products that need real interactivity. The site itself is proof
  of the React side (see "React proof" below).
- **Original creative brief:** [`workwithneehal-portfolio-prompt.md`](workwithneehal-portfolio-prompt.md)
  — the source design/copy spec this was built from. Keep it as reference;
  don't delete it. This file (`PROJECT-STATUS.md`) tracks *current state and
  decisions*, not the original brief.

## Tech stack (verified, as of 2026-08-20)

- React 18 + Vite 5, React Router 6 (client-side routed SPA)
- GSAP 3 + ScrollTrigger — scroll reveals, counters, sticky project-card stack
- Lenis — smooth scroll (`useLenis` hook)
- vanilla-tilt — tilt effect on project/masonry cards (`useTilt` hook)
- Custom hooks: `useCursorMagnetic`, `useHeroIntro`, `useScrollReveal`, `useTilt`, `useLenis`
- Fonts: **Satoshi** (headings, via Fontshare CDN) + **Manrope** (body, via Google Fonts)
- Forms: Web3Forms (client-side access key in `Contact.jsx` — this is normal/expected for Web3Forms, not a leaked secret)
- Deployment: Cloudflare Pages via `wrangler.jsonc` (`npm run build` → `dist/`, SPA fallback configured in `_redirects` and `wrangler.jsonc`)

No CMS, no backend. Pure static SPA.

## Structure

- `src/pages/` — Home, About, Services, Projects, ProjectDetail, Contact, NotFound
- `src/components/` — Header, Footer, BlobBackground, Faq, SEO
- `src/data/projects.js` — the 4 real WordPress case studies (see below)
- `src/data/services.js` — `wordpressServices` (6) + `reactServices` (4)
- `src/styles/` — main.css imports in cascade order: variables → reset →
  typography → layout → components → animations → responsive → **extras**
  (extras.css is the newest file, kept separate so the "ported" original
  stylesheet files stay a clean 1:1 reference — add new/dual-stack-positioning
  CSS there, not by editing the older files, unless fixing something in place)

## Real content — do not fabricate more of this

**4 live WordPress projects** (all real client work, real URLs):
1. Hamkoders (agency) — hamkoders.com
2. The Brandbyte (agency) — thebrandbyte.com
3. Flip Solar (solar) — theflipsolar.com
4. Elfa Energy (energy) — elfaenergy.com

**Zero React client case studies exist yet.** This was previously handled
with apologetic copy ("React case studies coming soon") — that's been
replaced (see Session Log) with confident framing: the portfolio site itself,
built in React 18 + Vite with hand-rolled GSAP animation, is positioned as
the React proof point. Do not invent a fake React client project. When a
real one exists, add it to `projects.js` with `category: 'react'` and add a
"React" filter tab in `Projects.jsx`.

**Testimonials are placeholder** (Sarah T./Bloom Florals, James K./Horizon
Legal, Maria L./LiftOff Coaching) — written as realistic-sounding but
explicitly fictional placeholders, per the original brief. They now use
initials-avatar circles, not stock photos (see Session Log — this was a
deliberate fix, don't reintroduce stock photos of real strangers as fake
client photos). Replace with real testimonials + real photos (with
permission) as they come in — keep the card structure (`.testimonial-card`
in `Home.jsx`) identical.

## Session Log

### 2026-08-20 (2) — Performance pass: images to WebP, PageSpeed fix

User reported PageSpeed Insights ~69 mobile, slow FCP/LCP, suspected the
hero. Root cause: **every image in `public/` was an uncompressed PNG,
1.5–1.9MB each** — the hero portrait, and all 3 images (card/desktop/mobile)
for each of the 4 project case studies. Home and Projects pages alone were
pulling ~7–9MB of images. That's the dominant perf problem on every page,
not just the hero.

Fixed:
- Converted all in-use images to WebP with Pillow (`quality=80–82`,
  resized to realistic max display dimensions instead of the original
  1536×1024 / 5772×4843 sources): hero portrait, and all 12 project images
  (4 projects × card/desktop/mobile). **~22MB → ~0.55MB, about a 97%
  reduction.** `dist/images` went 6.4MB → 60KB, `dist/assets/images` went
  21MB → 564KB.
- Updated every reference: `Home.jsx` hero `<img>`, and `cardImage` /
  `desktopImage` / `mobileImage` in `src/data/projects.js`. Also corrected
  the `cardWidth`/`cardHeight` metadata (was inconsistent — 600×400/800/600
  across projects; now uniformly 900×600, matching the real new card image
  ratio, matches the `aspect-ratio: 3/2` set on `.masonry-card img` from the
  previous session's letterboxing fix).
- Added `<link rel="preload" as="image" href="/images/hero-neehal.webp"
  fetchpriority="high">` in `index.html` — the hero image is almost
  certainly the LCP element on `/`, and this SPA doesn't request it until
  after JS parses/mounts/renders Home without a preload hint, so this
  should directly cut LCP. Trade-off: this preload fires on every route,
  not just `/`, since there's one static `index.html` for the whole SPA —
  minor wasted bytes on other pages, acceptable given the file is now only
  ~56KB.
- Deleted the superseded PNG originals (16 files) plus 3 already-dead,
  never-referenced heavy PNGs found during cleanup (`neehal-hero-alt.png`
  5772×4843, `neehal-portrait.png`, `screen.png` — none were imported
  anywhere; confirmed via grep before deleting). All recoverable from git
  history if ever needed.

Verified: `npm run build` clean, then screenshot-checked hero + Projects
masonry + a ProjectDetail page against the actual **production build**
(`vite preview`, not dev mode) to confirm the preload + swapped paths work
outside of Vite dev-server asset handling. No visible quality loss at these
quality/size settings.

**Not done / didn't touch:** JS bundle size (377KB / 126KB gzip — GSAP +
Lenis + React Router, reasonable for what it does, wasn't the bottleneck
here), font loading strategy (Fontshare + Google Fonts `<link
rel=stylesheet>` are still render-blocking — self-hosting would shave a bit
more off FCP but wasn't asked for and is a bigger lift), no CDN/image-service
layer (Cloudflare Pages serves these as static files as-is). If PageSpeed is
still not where it should be after this, re-run the audit and check whether
the remaining time is font-loading, JS execution, or something else —
don't assume it's still images.

### 2026-08-20 (1) — Professional/UX/content polish pass + mobile QA

Goal: make the site read as more professional, reinforce that the owner has
strong React *and* WordPress skills, and verify mobile. Changes made:

1. **Fixed a real bug: Satoshi (the heading font) was never loading.**
   `variables.css` referenced `--font-heading: 'Satoshi', system-ui,
   sans-serif` but `index.html` only linked Manrope — every heading
   site-wide was silently rendering in the browser's generic system font
   instead of the intended geometric display face. Added the Fontshare
   `<link>` (+ preconnect) to `index.html`. Verified via curl that the
   Fontshare endpoint returns valid `@font-face` CSS and via headless
   screenshot that headings now render in Satoshi.

2. **Fixed a real bug: masonry project cards were letterboxing.**
   `.projects-masonry` cards forced `aspect-ratio: 3/4` on the 3rd card and
   `1/1` on the 5th (`nth-child`) with `object-fit: contain`, intended for
   visual "masonry" variety. All 4 real project card images are actually the
   same 1536×1024 (3:2) composite mockup shots, so the 3rd card (Flip
   Solar) was rendering with huge black letterbox bars top and bottom —
   looked broken. Fixed in `animations.css`: removed the mismatched
   `nth-child` aspect-ratio overrides, set a single `aspect-ratio: 3/2`
   matching the real images, and switched `object-fit` from `contain` to
   `cover` (`object-position: top center`) so future images with slightly
   different ratios crop gracefully instead of letterboxing. Verified via
   screenshot — clean uniform 2×2 grid now.

3. **Closed the "no React case studies" credibility gap** without
   fabricating fake client work:
   - Added a "The toolkit" chip strip to the Home proof-band section
     (`.stack-strip` in `extras.css`) showing React/Vite/React
     Router/GSAP alongside WordPress/Elementor/WooCommerce — immediate
     visual proof of both stacks.
   - Added an honest `.self-proof` callout on Home (after the Featured
     Projects grid) and Projects (after the masonry grid): "This site is
     the React case study... React 18, Vite, React Router, hand-rolled
     GSAP scroll animation — no template, no page builder."
   - Rewrote the apologetic "React case studies are on the way / coming
     soon" copy on Home, Projects (hero subtext + `SEO` description) to
     drop the apology and lean into the self-proof framing instead.

4. **Testimonial avatars:** replaced Unsplash stock photos of real,
   unrelated strangers (attributed to fake client names/quotes) with
   initials-only avatar circles (`.testimonial-avatar` in `extras.css`,
   now a styled `<div>` not an `<img>`). Same visual weight, removes the
   ethical/reputational risk of using real people's likenesses as fake
   client photos.

5. **Mobile accessibility fix on About page:** the skills-cloud tag
   tooltips (`data-tip` on `.skill-tag`) were hover-only — effectively
   unreachable on touch devices, which defeats the point of that section
   ("hover on each tag reveals a 1-line tooltip of what it means in plain
   English"). Converted `.skill-tag` from `<span>` to `<button>` with
   click-to-toggle state (`openTag` in `About.jsx`) so the tooltip works on
   tap. Added a small "Tap or hover a skill…" hint line under the cloud.

6. **Minor:** removed a hard-coded `<br />` in the Contact page H1 that
   produced an awkward 4-line rag on narrow mobile widths; let it wrap
   naturally. Also softened `letter-spacing` on `h1/h2/h3` at ≤768px from
   `--tracking-tight` (-0.03em) to `--tracking-normal` (-0.01em) — tight
   tracking matters most at large desktop display sizes and isn't needed at
   mobile heading sizes (small, safe, harmless either way).

7. **Mobile QA method + a tooling gotcha worth knowing:** no
   Playwright/Puppeteer/chromium-cli available in this environment. Used
   the system-installed `chrome.exe` directly via
   `--headless=new --screenshot --window-size=W,H` against the Vite dev
   server. Two things to know if you do this again:
   - **`--window-size` height directly IS the CSS `100vh` value**, and
     `--screenshot` only captures that one viewport (it does not
     auto-scroll or auto-extend to full page height). Home's `.hero` is
     `height:100vh`, so any window-size you pick gets entirely consumed by
     the hero — there is no way to see below-the-fold Home content this
     way. Worked around it by verifying non-hero pages (About/Projects/
     Services/Contact/ProjectDetail, which use `.page-hero` — a normal
     padded block, not `vh`) at large heights, which capture the *entire*
     page correctly in one shot.
   - **This Chrome build's `--headless=new --screenshot` is unreliable
     below roughly 480px width** — reproduced with a zero-CSS sanity HTML
     file (plain Arial, no custom styles) at 390px width and it showed the
     exact same "last word clipped on the right edge" artifact seen on the
     real site. At 480px and above it's reliable. **This is a screenshot
     tool bug, not a real site bug** — confirmed by testing 390px, then
     480/500/800px on the same content. If you see mysterious right-edge
     text clipping in a headless capture, retest at ≥480px before assuming
     it's a real CSS bug. Real mobile QA (480px+ desktop-Chrome-based
     capture, and code review of `responsive.css` breakpoints) came back
     clean: hero, nav overlay, forms, masonry, service rows, mini-timeline,
     gallery, footer all reflow correctly.
   - Known minor gap, not fixed (low priority): the SPA doesn't scroll to
     `#trust` / `#projects` hash fragments on direct navigation (React
     Router + client-rendered content means the browser's native
     fragment-scroll fires before those elements exist in the DOM). Not
     currently linked to from anywhere in the UI, so low priority — only
     matters if someone starts deep-linking to those ids.

All changes verified with `npm run build` (clean, no errors/warnings) after
every batch of edits.

## Open items / ideas for next time

- Replace placeholder testimonials with real ones as they come in.
- Add a real React client case study to `projects.js` (`category: 'react'`)
  once one exists; add a "React" pill to `Projects.jsx`'s `FILTERS`.
- `og:image` in `index.html` currently points at the wordmark logo
  (`logo.png`) — a proper 1200×630 social-share image (hero shot or a
  designed OG card) would look better when links are shared.
- No Calendly/booking-widget integration — "Book a Call" just routes to
  the contact form, which is intentional per current copy, not a bug.
