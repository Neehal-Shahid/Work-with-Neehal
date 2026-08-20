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
- Fonts: **Satoshi** (headings) + **Manrope** (body) — both fully self-hosted
  as WOFF2 in `public/assets/fonts/`, declared in `src/styles/typography.css`.
  No Google Fonts / Fontshare `<link>` in `index.html` — removed deliberately
  for performance, see Session Log (3). Don't re-add an external font
  `<link>` without checking `typography.css` first.
- Images: WebP only (`public/images/`, `public/assets/images/`), including
  `-480w` small variants for the hero + project cards used with `srcSet` on
  mobile-visible pages (Home, Projects). See Session Log (2) and (3).
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

### 2026-08-20 (4) — Agentic Browsing (new Lighthouse category, May 2026)

User asked what "agentic browsing" is after seeing a 2/3 (later understood
as X/4) score in PageSpeed Insights. This is a real, very new Lighthouse
category (shipped in Lighthouse 13.3.0, May 7 2026) — experimental, doesn't
feed into Performance/Accessibility/Best Practices/SEO scores, scores as a
pass-count ratio out of 4 checks rather than 0–100. It measures how ready a
page is for AI agents (browser-using assistants) to read, understand, and
act on it:

1. **Accessibility tree formation** — proper semantic HTML / correct heading
   hierarchy / ARIA. Fixed real violations found via grep across every page
   (several predate this session — not something I introduced):
   - `Footer.jsx`: nav-column headings were `<h4>`, but the footer appears
     on every page and almost always directly follows an `<h2>` (or in
     `NotFound`'s case, straight after `<h1>`) — an `h2 → h4` skip. Changed
     to `<h3>` (`.footer-col h4` → `.footer-col h3` in `layout.css`).
   - `ProjectDetail.jsx`: the mini-timeline step titles were `<h4>`
     directly under the "Key moments." `<h2>` with nothing between — skip.
     Changed to `<h3>` (`.mini-step h4` → `.mini-step h3` in
     `animations.css`).
   - `Contact.jsx`: the "After you send this" aside was the *only* other
     heading on the page besides the `<h1>` — was `<h3>`, an `h1 → h3`
     skip. Changed to `<h2>` (`.expect-card h3` → `.expect-card h2`).
   - `Projects.jsx`: no `<h2>` on the page at all before the masonry
     grid's `<h3>` project-name cards — `h1 → h3` skip. Added a
     `.sr-only` `<h2>All projects</h2>` (new `.sr-only` utility class in
     `extras.css`) right before the grid — present for the accessibility
     tree/agents, invisible on screen.
   - `NotFound.jsx`: same `h1 → h3`(footer) skip — added a `.sr-only`
     `<h2>Page not found</h2>`.
   - Verified with real headless-Chrome screenshots (not just build success)
     that none of these tag swaps changed anything visually — every one of
     them had an explicit CSS font-size override already keyed to the old
     tag, updated in lockstep.
2. **llms.txt** — didn't exist. Added `public/llms.txt` (H1, one-line
   summary, links to all 5 pages + all 4 project case studies + contact
   info) per the llms.txt convention.
3. **Cumulative Layout Shift** — already 0 per the Performance report, this
   check should already pass, nothing to do.
4. **WebMCP** — experimental (Chrome Canary only), lets a page declare its
   forms as agent-callable tools via HTML attributes (declarative API) or
   `navigator.modelContext.registerTool()` (imperative). Added the
   declarative attributes to the Contact form (`Contact.jsx`): `toolname`,
   `tooldescription` on the `<form>`, `toolparamdescription` on each field.
   Deliberately did **not** add `toolautosubmit` — that would let an agent
   submit the form without a human confirming first, and this form sends a
   real inquiry to Neehal's inbox; auto-submit risks agent-generated noise/
   spam. These are non-standard attributes with zero downside if unsupported
   (any browser/tool that doesn't understand `toolname` etc. just ignores
   it — verified this doesn't break React rendering or the existing
   validation/submit logic).

Didn't attempt to independently verify the resulting score (Chrome Canary
required to run this Lighthouse category at all, wasn't available in this
environment) — these are the documented, sourced fixes for exactly what the
audit checks; ask for the new score after a re-run.

Sources used (this category is newer than my training data, so I searched
rather than guessed): [DebugBear — Lighthouse Agentic Browsing category explained](https://www.debugbear.com/blog/lighthouse-agentic-browsing), [Semrush — Google adds Agentic Browsing to Lighthouse](https://www.semrush.com/blog/google-adds-agentic-browsing-category-to-lighthouse/), [AgentCat — declarative WebMCP HTML form attributes](https://agentcat.com/guides/declarative-webmcp-tools-html-form-attributes/).

### 2026-08-20 (3) — Performance pass 2: killed render-blocking font requests

User re-ran PageSpeed after pass (2) below: desktop improved, but mobile was
still 78, with "Render-blocking requests" flagged at **~1,940ms** — the
Google Fonts CSS fetch, the Fontshare CSS fetch, and the app's own bundled
CSS, all as blocking `<link rel="stylesheet">` tags in `<head>`.

Root cause, and the mistake to not repeat: **`src/styles/typography.css`
already had a complete, working, self-hosted `@font-face` setup for Satoshi**
(10 weights/styles, local `.otf` files in `public/assets/fonts/`) that
predates session (1). When I "discovered" in session (1) that headings
weren't rendering in Satoshi and added the Fontshare CDN `<link>` as a fix,
I hadn't checked for an existing local `@font-face` — I only checked
`index.html` for a `<link>` tag. The local font was very likely already
working; adding Fontshare on top of it didn't fix anything, it just added a
second, redundant, render-blocking external stylesheet request. **Lesson:
before concluding a font "isn't loading," grep for `@font-face` across the
CSS, not just `<link>` tags in the HTML head.**

Fixed properly this time — fully self-hosted, zero external font requests:
- Removed the Fontshare `<link rel="stylesheet">` + its `preconnect` from
  `index.html` entirely.
- Removed the Google Fonts (Manrope) `<link rel="stylesheet">` +
  `fonts.googleapis.com`/`fonts.gstatic.com` `preconnect`s too — self-hosted
  Manrope instead of just Satoshi, for the same reason.
- Converted the 10 local Satoshi files from `.otf` to `.woff2` (via
  `fontTools`, `flavor="woff2"`) — 479KB → 259KB combined, and WOFF2 is the
  correct web format (OTF was never meant for network delivery).
- Manrope: Google Fonts actually serves it as **one variable font file**
  covering weight 200–800 for the Latin subset — the same physical
  `.woff2` URL is returned for every requested weight (400/500/600/700).
  Downloaded that one file (`Manrope-Variable.woff2`, 24.8KB) and declared
  it with `font-weight: 200 800` in one `@font-face` rule instead of one
  rule per weight.
- Kept all 10 Satoshi `@font-face` declarations (not just the 5 weights
  actually used) — this costs nothing: browsers only fetch a `@font-face`
  file if some rendered text actually needs that exact weight/style, so
  unused declarations never trigger a network request. Confirmed this is
  true in practice — the PageSpeed trace before this fix showed only 5 of
  the 10 declared OTF files were ever downloaded.
- Added `<link rel="preload" as="font">` for the two fonts almost certainly
  needed for first paint (`Manrope-Variable.woff2`, `Satoshi-Bold.woff2`).
- Deleted the old `.otf` files.

Also addressed the "Improve image delivery" finding (103 KiB) from the same
report — three images were being served at their full desktop resolution
even to narrow mobile viewports:
- Logo: was `1262×391` PNG (16.2 KB) displayed at max `160×36` — regenerated
  as a `320×99` lossless WebP (10 KB) sized for 2x retina at actual display
  size, used in `Header.jsx`/`Footer.jsx`. Left `logo.png` in place
  untouched and still referenced by `og:image`/`twitter:image` in
  `index.html` — those aren't fetched on page load (only when a link is
  shared) so they're not a performance concern, and PNG has more reliable
  support across social-preview crawlers than WebP, so that one was left as
  a PNG deliberately, not an oversight.
- Hero image and all 4 project `cardImage`s: generated an additional
  `-480w` WebP variant (`hero-neehal-480.webp`, and `card-480.webp` per
  project, added as `cardImageSmall` in `src/data/projects.js`) and wired
  up `srcSet`/`sizes` on the `<img>` tags in `Home.jsx` (hero image +
  featured-project rows) and `Projects.jsx` (masonry grid) so mobile
  downloads the small variant instead of the 900w desktop one. Also added
  matching `imagesrcset`/`imagesizes` to the hero's `<link rel="preload">`
  so the preload and the actual `<img>` selection agree on which file to
  fetch. **Deliberately did not** add responsive variants to
  `ProjectDetail.jsx`'s reuse of `cardImage` (hero mockup + gallery) — that
  page displays it much larger (up to ~1100px), where a 480w image would
  look soft; it correctly keeps using the full 900w file there.

Verified: `npm run build` clean, then screenshot-checked the actual
**production build** (`vite preview`) at desktop and mobile widths —
identical visual output to before (Satoshi/Manrope render correctly, no
broken images, logo crisp), confirmed via `dist/index.html` that no
external font `<link>` remains and `dist/assets/fonts` only contains
`.woff2`. Total `dist/` is now ~1.3MB (was tens of MB before either
performance pass).

**If mobile PageSpeed is still not where it should be after this,** don't
assume it's fonts or images again — re-read the new report. The next most
likely levers, not yet touched: JS execution/hydration cost on low-end
mobile CPUs (report showed a few "forced reflow" and "long task" entries
attributed to the app bundle), or Total Blocking Time if it stops being 0ms.

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
