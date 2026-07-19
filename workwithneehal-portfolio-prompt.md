# Work With Neehal — Portfolio Website Build Prompt
### Optimized for Claude Code / Cursor · Hosted on Cloudflare Pages or Vercel

---

> **How to use this prompt:** Paste this entire document into Claude Code or Cursor as your master project brief. Reference individual sections as you build each page/component. This is a living spec — treat it as your creative director giving instructions in the room.

---

## WHO THIS WEBSITE IS FOR

**Name:** Muhammad Neehal Shahid  
**Brand:** Work With Neehal  
**Domain:** workwithneehal.com  
**Role:** WordPress Developer  

**Stack:**
WordPress · Elementor · WooCommerce · HTML · CSS · JavaScript · Responsive Design · Website Migration · Performance Optimization · Cloudflare · Hosting · SMTP · Technical SEO

**Target clients (the people reading this website):**  
Small business owners · Marketing agency owners · Startup founders · Law firms · Medical clinics · Restaurants · Real estate companies · Construction companies · E-commerce brands

**The only question that matters:** When a business owner lands on this site, do they immediately think *"This is the person I want building my website"* — within 5 seconds, without reading a single word?

---

## THE GOAL — SAY IT OUT LOUD BEFORE WRITING EVERY LINE OF CODE

This is not a portfolio for developers to admire.  
This is a **conversion machine** for business owners who know nothing about WordPress.  

They do not care about Elementor.  
They care about whether their phone will ring more.  
They care about whether customers will trust their website.  
They care about whether you will still reply to them in 3 months.  

Every design decision, every headline, every animation — must answer one silent question in the visitor's head: *"Can I trust this person with my business?"*

---

## TECH STACK — BUILD WITH THESE

```
Framework:     Vanilla HTML/CSS/JS  OR  Astro (preferred for performance)
Smooth Scroll: Lenis v1.x
Animations:    GSAP 3 + ScrollTrigger + SplitText
3D/Tilt:       VanillaTilt.js
Icons:         Lucide Icons (SVG)
Fonts:         Satoshi (headings, display) + Manrope (body, UI) — via Fontshare + Google Fonts
Hosting:       Cloudflare Pages or Vercel
Build:         Vite (if using Astro or bundling)
```

**No React. No heavy frameworks. No jQuery. Pure performance.**  
Target: Lighthouse 95+ across all metrics. This is a WordPress developer's portfolio — if it's slow, the joke writes itself.

---

## COLOR SYSTEM — THE PALETTE

Inspired by: ashreitech.com + Brad Frost's editorial clarity + the cream-and-ink premium feel of high-end agency sites.

```css
:root {
  /* Backgrounds */
  --bg-primary:     #F5F3EE;   /* Warm cream — not pure white, feels premium */
  --bg-secondary:   #FFFFFF;   /* Cards, elevated surfaces */
  --bg-dark:        #0E0E0C;   /* Dark sections — near-black with warmth */
  --bg-dark-card:   #161614;   /* Dark card surfaces */

  /* Typography */
  --text-primary:   #111110;   /* Almost black, warm undertone */
  --text-secondary: #5C5C58;   /* Muted body text */
  --text-inverse:   #F5F3EE;   /* Text on dark backgrounds */
  --text-muted:     #9C9C96;   /* Labels, captions */

  /* Accents */
  --accent-primary: #1A6B4A;   /* Deep forest green — premium, trustworthy */
  --accent-hover:   #155A3D;   /* Darker green on hover */
  --accent-warm:    #C4873A;   /* Warm amber — used sparingly for highlights */
  --accent-light:   #E8F2EC;   /* Very light green tint for backgrounds */

  /* Borders & Dividers */
  --border-light:   #E8E6E0;
  --border-medium:  #D4D1C8;

  /* Shadows */
  --shadow-sm:      0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:      0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);
  --shadow-lg:      0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06);
  --shadow-card:    0 8px 40px rgba(26,107,74,0.08);

  /* Glassmorphism (Apple Glass) */
  --glass-bg:       rgba(255,255,255,0.72);
  --glass-border:   rgba(255,255,255,0.40);
  --glass-blur:     blur(20px) saturate(180%);
}
```

**Why this palette works:**  
Deep forest green reads as growth, trust, and professionalism — exactly what a business owner wants from someone touching their website. The warm cream background prevents the sterile coldness of pure white. Amber is used one time per page maximum, only on the most important highlight or number.

**Do NOT add purple. Do NOT add red. Do NOT add neon anything.**

---

## TYPOGRAPHY SYSTEM

```css
/* Import — add to <head> */
/* Satoshi: geometric, editorial, excellent at large display sizes */
/* Manrope: humanist, warm, highly readable at body sizes */

/* Satoshi via Fontshare (free, self-hostable) */
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,600,500&display=swap" rel="stylesheet">
/* Manrope via Google Fonts */
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap" rel="stylesheet">

:root {
  --font-heading: 'Satoshi', 'General Sans', system-ui, sans-serif;
  --font-body:    'Manrope', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'Fira Code', monospace; /* for code snippets, tech tags */

  /* Scale */
  --text-xs:   0.75rem;   /* 12px */
  --text-sm:   0.875rem;  /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg:   1.125rem;  /* 18px */
  --text-xl:   1.375rem;  /* 22px */
  --text-2xl:  1.75rem;   /* 28px */
  --text-3xl:  2.25rem;   /* 36px */
  --text-4xl:  3rem;      /* 48px */
  --text-5xl:  4rem;      /* 64px */
  --text-6xl:  5.5rem;    /* 88px */
  --text-7xl:  7.5rem;    /* 120px */

  /* Line heights */
  --leading-tight:  1.1;
  --leading-snug:   1.25;
  --leading-normal: 1.5;
  --leading-relaxed:1.7;

  /* Letter spacing */
  --tracking-tight:  -0.03em;
  --tracking-normal: -0.01em;
  --tracking-wide:   0.06em;   /* for uppercase labels */
}
```

**Typography rules:**
- Headings always use `--tracking-tight`. Large headings feel cheap without negative tracking.
- Body text is always `--text-base` or `--text-lg` at `--leading-relaxed`. Never smaller.
- Uppercase labels (section tags like "ABOUT", "SERVICES") use `--text-xs` and `--tracking-wide`.
- Never bold body text unless it's a key phrase inside a paragraph.
- Heading hierarchy: H1 at `--text-6xl`, H2 at `--text-4xl`, H3 at `--text-2xl`. On mobile, each drops one step.

---

## ANIMATION SYSTEM

### Core Libraries
```html
<!-- In <head>, defer all -->
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/SplitText.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/vanilla-tilt@1.8.1/dist/vanilla-tilt.min.js" defer></script>
```

### Lenis Setup (global, always)
```javascript
const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false, // disable on mobile for performance
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Connect to GSAP ScrollTrigger
gsap.ticker.add((time) => lenis.raf(time * 1000));
```

### Animation Vocabulary — Use These, Nothing Else

**Text Reveal (SplitText mask):**
```javascript
// Each line slides up from behind a mask — like Linear's homepage
function revealText(selector) {
  const el = document.querySelector(selector);
  const split = new SplitText(el, { type: 'lines', linesClass: 'line-inner' });
  // Wrap each line in a clip container
  split.lines.forEach(line => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('line-clip');
    wrapper.style.overflow = 'hidden';
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });
  gsap.from('.line-inner', {
    yPercent: 105,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.08,
    scrollTrigger: { trigger: selector, start: 'top 80%' }
  });
}
```

**Fade Up (for cards, paragraphs):**
```javascript
gsap.from(element, {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: { trigger: element, start: 'top 85%' }
});
```

**Image Reveal (clip-path wipe):**
```javascript
gsap.from(imgEl, {
  clipPath: 'inset(100% 0 0 0)',
  duration: 1.1,
  ease: 'power4.inOut',
  scrollTrigger: { trigger: imgEl, start: 'top 80%' }
});
// After reveal, subtle parallax:
gsap.to(imgEl, {
  yPercent: -12,
  ease: 'none',
  scrollTrigger: { trigger: imgEl, start: 'top bottom', end: 'bottom top', scrub: true }
});
```

**VanillaTilt (project cards):**
```javascript
VanillaTilt.init(document.querySelectorAll('.project-card'), {
  max: 8,
  speed: 600,
  glare: true,
  'max-glare': 0.15,
  perspective: 1200,
  scale: 1.02,
  transition: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
});
```

**Magnetic Button:**
```javascript
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: 'power2.out' });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
  });
});
```

**Blob Background (CSS-only, animated):**
```css
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;
  animation: blobFloat 12s ease-in-out infinite alternate;
  pointer-events: none;
  z-index: 0;
}
.blob-green  { background: #1A6B4A; width: 600px; height: 600px; }
.blob-amber  { background: #C4873A; width: 400px; height: 400px; }

@keyframes blobFloat {
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(40px, -60px) scale(1.05); }
  66%  { transform: translate(-30px, 30px) scale(0.97); }
  100% { transform: translate(20px, -20px) scale(1.03); }
}
```

**Cursor follower (optional but impactful):**
```javascript
const cursor = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

window.addEventListener('mousemove', (e) => {
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
  gsap.to(cursorRing, { x: e.clientX, y: e.clientY, duration: 0.25, ease: 'power2.out' });
});

// On hoverable elements: expand ring
document.querySelectorAll('a, button, .hoverable').forEach(el => {
  el.addEventListener('mouseenter', () => gsap.to(cursorRing, { scale: 2.5, opacity: 0.5, duration: 0.3 }));
  el.addEventListener('mouseleave', () => gsap.to(cursorRing, { scale: 1, opacity: 1, duration: 0.3 }));
});
```

### Animation Rules — Read These Like Laws
1. **Nothing animates on page load unless it's the hero.** Everything else is scroll-triggered.
2. **Duration ceiling is 1.2s.** Anything longer feels broken.
3. **Never animate `opacity` alone.** Always pair with `y`, `scale`, or `clipPath`.
4. **Mobile:** disable tilt, magnetic, cursor. Keep fade-ups. Reduce blur values by 50%.
5. **`prefers-reduced-motion` media query must wrap all GSAP init.** Accessibility is not optional.

```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  // init all GSAP animations here
}
```

---

## NAVIGATION

**Structure:**
```
[Work With Neehal]    Home  Projects  Services  About  Contact    [Book a Call →]
```

**Behavior:**
- Starts completely transparent with no background, full-width.
- On scroll past 80px: backdrop-filter glassmorphism kicks in — `rgba(245,243,238,0.85)` + `blur(20px)` + `border-bottom: 1px solid var(--border-light)`.
- GSAP transition on the background change: `duration: 0.4, ease: 'power2.out'`.
- Logo is text, not an image. Font: `var(--font-heading)`, weight 600, size `--text-lg`.
- Nav links are `--text-sm`, weight 500, color `--text-secondary`. On hover: color shifts to `--text-primary` with underline that grows from left.
- "Book a Call" button: filled green, rounded 100px (pill), `padding: 10px 22px`, magnetic behavior, slight shadow, hover lifts with `translateY(-2px)`.
- On mobile: hamburger that opens a full-screen overlay (not a dropdown). Overlay background `--bg-dark`. Links animate in one by one (stagger 0.08s, slide from right).

---

## HOME PAGE

### Section 1 — Hero

**Layout:** Full viewport height. Asymmetric. Not centered — intentionally off-balance.

**Left column (60% width):**  
Small label at top (uppercase, `--text-xs`, `--text-muted`, letter-spacing wide):  
`WORDPRESS DEVELOPER · KARACHI, PK`

Headline (H1, `--text-6xl`, `--tracking-tight`, `--leading-tight`):  
```
Your website should  
be doing more  
than sitting there.
```
The word **"more"** is italicized in `var(--accent-primary)`. No other word is styled differently.

Subheadline (paragraph, `--text-xl`, `--text-secondary`, `--leading-relaxed`, max-width 520px):  
```
I build WordPress websites for businesses that are tired of looking 
like everyone else. Clean code, real performance, and zero jargon — 
just a website that actually works for you.
```

Two buttons, side by side, with 16px gap:
- Primary: `View Projects →` — filled green, pill shape, magnetic
- Secondary: `Let's Talk` — outlined, same pill shape, no fill, border `--border-medium`

Below buttons, a small social proof line (after 12px margin):  
`✦ 3+ years building for real businesses` — `--text-sm`, `--text-muted`

**Right column (40% width):**  
An interactive floating composition — this is the visual centerpiece of the page.

Build it as a positioned `div` container (no actual photo of Neehal — keep it abstract until he chooses to add one).

Elements inside the composition:
- **Center card** (glassmorphism): `background: var(--glass-bg); backdrop-filter: var(--glass-blur); border: 1px solid var(--glass-border); border-radius: 24px; padding: 28px;`  
  Inside: A fake "performance dashboard" — circular gauge showing 98 (Lighthouse score), animated count-up on page load. Label: "Performance Score".

- **Floating tag chips** (4-6 chips orbiting loosely around the card):  
  `WordPress`, `Elementor`, `WooCommerce`, `Cloudflare`, `Technical SEO`, `Responsive`  
  Each chip: `background: white; border: 1px solid var(--border-light); border-radius: 100px; padding: 6px 14px; font-size: --text-sm; box-shadow: var(--shadow-sm)`  
  Animate each chip with a slow, unique floating keyframe (different duration 8s–16s, different translate ranges).

- **Two small floating stat cards:**  
  Card 1: `⚡ 0.8s` + label "Avg Load Time"  
  Card 2: `📱 100%` + label "Mobile Responsive"  
  Both glassmorphism, `border-radius: 16px`, smaller than center card.

- **Blob behind everything:** `position: absolute`, large green blob at 18% opacity, blurred 80px, animates slowly.

- **Cursor interaction:** When mouse moves over the right column, all floating elements shift slightly toward the cursor (subtle — max 12px movement). Use `mousemove` + GSAP.

- **Background texture:** Very subtle noise texture overlay on the entire hero section. CSS-only, `opacity: 0.03`.

**Background of entire hero:** `var(--bg-primary)` with a faint grid of dots (CSS `radial-gradient` at 1px dots, 40px spacing, `rgba(0,0,0,0.07)`).

**Animation order on page load:**
1. Nav fades in (delay 0s, duration 0.4s)
2. Label slides up (delay 0.2s)
3. H1 lines reveal one by one with SplitText mask (delay 0.4s, stagger 0.08s)
4. Subheadline fades up (delay 0.85s)
5. Buttons scale from 0.95 + fade (delay 1.0s)
6. Right composition fades + scales from 0.94 (delay 0.6s, duration 0.9s)
7. Floating chips appear with stagger (delay 1.1s)

---

### Section 2 — Trust Strip

**NOT a logo strip. NOT "As seen in..."**

A horizontal band, `background: var(--bg-dark)`, full-width. Padding 60px vertical.

**Layout:** 5 columns, centered, with a thin vertical divider (`1px solid rgba(255,255,255,0.08)`) between each.

| Column | Number | Label |
|--------|--------|-------|
| 1 | 3+ | Years delivering websites |
| 2 | 50+ | Businesses served |
| 3 | 98 | Average Lighthouse score |
| 4 | 24h | Response time guaranteed |
| 5 | 100% | Projects delivered on time |

Numbers in `--text-5xl`, `--font-heading`, color `--text-inverse`, with amber accent on the `+` or `h` suffix.  
Labels in `--text-sm`, `--text-muted` (lighter shade on dark bg).

Numbers animate with count-up (GSAP `TextPlugin` or vanilla counter) when section enters viewport. Duration 2s, ease `power2.out`.

On mobile: 2-column grid, dividers become horizontal lines.

---

### Section 3 — "What Sets Me Apart" (Comparison)

**This replaces the boring "Why Work With Me" card grid.**

Section background: `var(--bg-secondary)` (white). Padding 120px vertical.

Section label: `THE DIFFERENCE` (uppercase, small, `--accent-primary`)  
H2: `Most freelancers build websites.  I build websites that convert.`

Below the headline, a two-column comparison layout:

**Left column — "The Usual Experience":**  
Header badge: `TYPICAL FREELANCER` in red-tinted chip (`#FEE2E2` bg, `#DC2626` text)

List of pain points (not bullet points — each item is a row with an `✕` icon in muted red):
```
✕  Takes weeks to reply
✕  Delivers and disappears  
✕  Doesn't understand your industry
✕  Template-dumps with no explanation
✕  You can't update anything yourself
✕  Goes over budget without warning
```

**Right column — "Working with Neehal":**  
Header badge: `WORK WITH NEEHAL` in green chip (`var(--accent-light)` bg, `var(--accent-primary)` text)

List of benefits (each row with a `✓` icon in green):
```
✓  Reply within hours, not days
✓  Ongoing support after launch
✓  Asks about your customers first  
✓  Every choice explained in plain English
✓  WordPress — so you own and control everything
✓  Clear scope, clear price, no surprises
```

Right column has a soft green glow behind it (`box-shadow: 0 0 80px rgba(26,107,74,0.08)`).

**Hover on each row:** Row background shifts to `var(--accent-light)` on hover, smooth transition 0.2s. Text shifts slightly right (2px).

On mobile: stacks vertically. Left column first (the pain), right column second (the relief).

---

### Section 4 — Featured Projects

**Label:** `SELECTED WORK` (uppercase, `--accent-primary`)  
**H2:** `Projects that did the job.`  
**Subtext:** `A handful of sites built for businesses that needed more than a pretty page.`

Layout: **Stacked full-width cards** (not a grid — each project is its own row, alternating left-right alignment). Each card is `min-height: 480px`.

**Card structure (glassmorphism Apple Glass effect):**
```css
.project-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.4s ease;
}
.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 80px rgba(26,107,74,0.12);
}
```

VanillaTilt applied to each card (settings defined above in animation section).

**Each card contains:**
- Left: Project screenshot (clip-path reveal on scroll, then subtle parallax on scroll)
- Right: Industry tag (`RESTAURANT`, `LAW FIRM`, etc.) · Project name · 2-line description · `[View Case Study →]` link
- A subtle label at bottom right: Key outcome (e.g., `↑ 3x faster load time`, `↑ Mobile traffic doubled`)

**Six projects to include:**
1. Savora Kitchen — Restaurant
2. ClearSmile Dental — Dental Clinic
3. Harrington & Co. Legal — Law Firm
4. IronEdge Gym — Fitness & Gym
5. Pulse Digital — Marketing Agency
6. Stackr — SaaS Product

Below the projects: `[See All Projects →]` — outlined button, centered.

---

### Section 5 — Services (Timeline Style)

**Background:** `var(--bg-primary)` (warm cream). 

**Label:** `WHAT I BUILD`  
**H2:** `The websites businesses actually need.`

Layout: Alternating two-column rows. Each row is one service. Odd rows: content left, visual right. Even rows: visual left, content right.

**Each service row:**
- Large number (`01`, `02`, etc.) in `--text-7xl`, `--text-muted`, opacity 0.12, absolutely positioned — bleeds out of the card intentionally (oversized editorial style)
- Service name in `H3`
- 2-sentence description (human, no jargon)
- 3–4 bullet deliverables, each prefixed with a small green `→`
- Timeline chip: `Timeline: 5–10 days`
- Visual side: a mockup or abstract illustration (use CSS-only geometric placeholder or include actual screenshots)

**Services list:**
1. Business Websites — `The foundation.` Your main web presence, built properly.
2. Landing Pages — `One page. One goal.` For ad campaigns, launches, lead gen.
3. WooCommerce Stores — `Sell online without the headache.` Built for real product catalogs.
4. Website Migration — `Move without losing a thing.` Hosts, domains, data — handled.
5. Performance Optimization — `Speed is not optional.` Core Web Vitals, caching, CDN.
6. Maintenance & Support — `Set it and don't forget it.` Monthly care so you don't have to.

**Scroll animation:** The vertical line connecting each service is drawn via `stroke-dashoffset` as the user scrolls (SVG line pinned to the section, ScrollTrigger scrub).

---

### Section 6 — Process

**Background:** `var(--bg-dark)` (near-black)

**Label:** `HOW IT WORKS`  
**H2:** `From first message to live website — no confusion, no surprises.`

**Layout:** Horizontal step cards in a row (on desktop). On mobile: vertical stack.

**7 Steps:**
1. Discovery — `We talk. I listen. Then I ask the questions most developers skip.`
2. Proposal — `A clear document: scope, timeline, price. No guesswork.`
3. Design — `Wireframes and visual direction you approve before a single line of code.`
4. Development — `Built clean. Responsive. Fast. Tested at every stage.`
5. Review — `Two rounds of revisions. Your feedback shapes everything.`
6. Launch — `Domain, hosting, SSL, email, analytics. All set up. All working.`
7. Support — `I don't disappear. You get 30 days post-launch support included.`

**Card design:** Dark glassmorphism — `background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 20px; padding: 28px 24px;`

Each card has the step number in `--text-6xl` weight 700, color `rgba(255,255,255,0.04)` (huge, ghost, behind the content — editorial treatment).

On hover: card glows with a faint green border `border-color: rgba(26,107,74,0.5)`.

**Connecting line between cards:** SVG horizontal dashed line at card mid-height, `stroke-dashoffset` animation on scroll.

---

### Section 7 — Testimonials (Placeholder — Designed for Future Clients)

**Background:** `var(--bg-secondary)`

**Label:** `WHAT CLIENTS SAY`  
**H2:** `Don't take my word for it.`

Design 3 placeholder cards styled identically to real testimonials. Include dummy names, job titles, company names, and realistic quotes. Write the quotes yourself — they should sound real, specific, and not like AI wrote them.

Placeholder quote examples:
- `"Neehal fixed in 3 hours what our previous developer couldn't fix in 3 weeks. Genuine, fast, and actually explains what he did."` — Sarah T., Owner, Bloom Florals
- `"We migrated our entire 8-year-old site and didn't lose a single page. The new version loads in under a second. Worth every penny."` — James K., Marketing Director, Horizon Legal
- `"I've worked with four WordPress developers over the years. Neehal is the only one I've brought back for a second and third project."` — Maria L., Founder, LiftOff Coaching

Card design: white background, rounded 20px, soft shadow, large opening quotation mark in `--accent-light` (`--text-5xl`, `--accent-primary`, opacity 0.3). Stars (5 filled) top right.

**Note in code comment:** `<!-- TODO: Replace with real testimonials — keep card structure identical -->`

---

### Section 8 — FAQ

**Background:** `var(--bg-primary)`

**Label:** `COMMON QUESTIONS`  
**H2:** `Things clients always ask.`

Layout: Single column, max-width 720px, centered.

**Accordion items — write all copy yourself, human tone:**

1. How long does a website take?  
   *Most business websites take 2–3 weeks from kickoff to launch. Landing pages are often 5–7 days. If you have a tight deadline, tell me upfront and I'll let you know honestly whether it's doable.*

2. What do you need from me to get started?  
   *Your logo (if you have one), content (text and photos), and an idea of what you want the website to do. If you don't have all of that yet, we can figure it out together — I've done this before.*

3. Do you only work with WordPress?  
   *Yes. I focus on WordPress specifically because I can do it properly. Generalists who "build anything" usually build nothing well.*

4. Can I update the website myself after you build it?  
   *Yes — that's a non-negotiable for me. You should own your website completely. I'll record a short walkthrough video so you know exactly how to make basic edits.*

5. What happens after launch?  
   *You get 30 days of included support for any bugs or small adjustments. After that, I offer monthly maintenance plans. You're never just left alone.*

6. How much does a website cost?  
   *Depends on what you need. A landing page starts lower than a full business site with multiple pages and integrations. I don't post prices publicly because every project is different — book a free call and I'll give you a real number within 24 hours.*

7. Can you fix or improve my existing website?  
   *Yes. Migrations, redesigns, speed fixes, bug fixes — all of it. I often work with businesses who already have a WordPress site that just isn't doing its job.*

**Accordion animation:** On open, content reveals with `max-height` transition (0 → auto via JS measure) + opacity 0→1. The `+` icon rotates to `×` with `transform: rotate(45deg)`.

---

### Section 9 — Final CTA

**Background:** `var(--bg-dark)` with an ambient green blob glow (large, 900px, 15% opacity, centered behind the content)

**Layout:** Centered, generous padding (180px top/bottom).

**Label:** `READY TO BEGIN`

**H2 (large — `--text-5xl` on desktop):**  
```
Let's build a website  
your customers remember.
```

**Subtext:**  
`Most visitors decide in 5 seconds. Let's make sure yours stays.`

**Two buttons:**
- `Book a Free Call →` — filled green, large, pill, magnetic
- `Browse Projects` — text link with subtle underline

Below buttons: A small line of reassurance:  
`No commitment. No jargon. Just a conversation.`

**Scroll-triggered animation:** The H2 words split and each word flies in from a slightly different angle (use SplitText by words, not lines, with randomized `rotateX` values between -20 and 0).

---

## ABOUT PAGE

**No biography format. No timeline of your life. Business owners don't care where you went to school.**

**Hero:**  
H1: `I build websites like  they're going to be reviewed.`  
Subtext: `Because someone is always reviewing them — your customer.`

**Section: How I think**  
Prose format (not bullets). Write 3 paragraphs:  
1. Why you chose WordPress specifically (not the easy answer — the real reason: ownership, portability, the 43% of the web that runs on it, the ability for clients to log in and actually control their own business).  
2. How you approach a project (you ask about the customer before asking about the design. Most developers design inward — you design outward, from the customer's first impression back to the homepage).  
3. What you actually deliver (not a beautiful website. A business asset. Something with a purpose and a measurable function).

**Section: What I value**  
Use 4 large horizontal "value rows" — each spans full width, with the value name in oversized type on the left (`--text-4xl`, very light opacity, `--font-heading`) and the explanation in normal body text on the right.

```
CLARITY     I don't have jargon conversations with clients. If I can't explain 
            what I'm doing in plain English, I probably don't understand it well enough.

OWNERSHIP   Your website should belong to you — not to me, not to my tools.
            I use WordPress because you can take it anywhere, forever.

RELIABILITY If I say Tuesday, it's Tuesday. Not "sometime this week."
            Deadlines aren't suggestions.

CRAFT       I care about the gap between good and very good. That 10% that 
            most clients never see but their customers always feel.
```

**Section: Skills (no progress bars — they're meaningless)**  
Instead: A tag cloud layout of all skills, with varying font sizes based on proficiency (not labeled — just implied). Hover on each tag reveals a 1-line tooltip of what it means in plain English.

**Final line on about page:**  
`If you've read this far, we should probably talk.`  
Button below: `Book a 20-min call — it's free →`

---

## PROJECTS PAGE (LISTING)

**Hero:** Small, no full-screen. Just a headline and subtext.  
H1: `Work that works.`  
Subtext: `Six projects. Six different businesses. One standard of quality.`

**Filter tabs:** `All · Restaurant · Legal · Health · Fitness · Agency · SaaS` — pill tabs, `--accent-primary` active state.

**Grid:** Masonry-style (CSS columns: 2 on desktop, 1 on mobile). Cards are different heights — no uniform grid. This is intentional. It signals editorial judgment, not template-filling.

**Each card:**  
- Full-bleed image (16:9 ratio, `object-fit: cover`)
- On hover: image scales 1.04 with `overflow: hidden` on the card, name slides up from bottom with a dark-to-transparent gradient overlay
- VanillaTilt (gentle, `max: 5`)
- Category chip top-left (overlaid on image)

---

## INDIVIDUAL PROJECT PAGE

**Section order for each of the 6 projects:**

1. **Hero** — Project name (H1, `--text-6xl`), 1-line description, category tag, full-bleed desktop mockup (clip-path reveal animation)

2. **Problem** — Dark background section. `THE CHALLENGE` label. 2-paragraph description of what the business needed. No bullet points.

3. **Solution** — Light background. `THE APPROACH` label. 2–3 paragraphs on how it was solved. Emphasize decisions made, not just features added.

4. **Tools Used** — Small section. A row of technology chips (WordPress, Elementor, WooCommerce, etc. — only the relevant ones). Each chip has a small icon.

5. **Process** — 3–4 step mini-timeline (not the full 7-step process — just this project's key moments).

6. **Gallery** — Asymmetric image grid. 3 images in an editorial layout (one large, two smaller). Plus 2 mobile screens side by side (angled perspective mockups — CSS `transform: perspective(800px) rotateY(±8deg)`).

7. **Results / Features** — 3 metric callouts (if known) or feature highlights if metrics aren't applicable.

8. **Next Project CTA** — `Next: [Project Name] →` at the bottom, full-width dark band.

**The 6 projects — copy to write for each:**

### Project 1: Savora Kitchen (Restaurant)
- Challenge: Owner had a Facebook page and a PDF menu. No website. Competing with restaurants that had online booking.
- Solution: Full WordPress site with a visual menu, Yelp/Google integration widgets, contact form, photo gallery, and a prominent "Reserve a Table" CTA on every page.
- Features: Mobile-first (most restaurant searches happen on phones), page speed 96+, local SEO setup.

### Project 2: ClearSmile Dental (Dental Clinic)
- Challenge: Existing website hadn't been updated in 6 years. Slow, not mobile-friendly, no online booking widget.
- Solution: Full redesign. Clean, calming design (trust matters more in healthcare). Booking integration, service pages with FAQs, before/after gallery.
- Features: HIPAA-aligned contact forms, clear service structure, 98 performance score.

### Project 3: Harrington & Co. Legal (Law Firm)
- Challenge: High-competition search space. Website looked like it was built in 2010. No clear practice area pages, no trust signals.
- Solution: Authority-building design. Detailed practice area pages, attorney profiles, case result highlights (general, no specifics), contact form with area of law selector.
- Features: Schema markup for legal, Core Web Vitals optimized, structured for local SEO.

### Project 4: IronEdge Gym (Fitness & Gym)
- Challenge: Gym opened a second location. Website only showed the first. No class schedule, no membership information online.
- Solution: Multi-location site. Dynamic class schedule (Google Calendar embed, styled to match the site), membership pricing page, trainer profiles.
- Features: High-energy visual design (but still clean), 2 locations handled cleanly, performance-optimized video background.

### Project 5: Pulse Digital (Marketing Agency)
- Challenge: An agency with no online portfolio. Winning clients entirely on referral, but losing them at the "let me see your website" stage.
- Solution: Case study-driven portfolio site. Services pages with clear process, team section, lead gen form with a Calendly embed.
- Features: Dark premium aesthetic, scroll animations, fast load time (agencies get judged harder on this).

### Project 6: Stackr (SaaS)
- Challenge: Product was in private beta. They needed a marketing/waitlist site that looked like the product was already launch-ready.
- Solution: Conversion-focused landing page. Product screenshots, waitlist form with email integration (Mailchimp), feature section, FAQ.
- Features: Email automation, social sharing OG tags, minimal CMS for team to update the launch date banner.

---

## SERVICES PAGE

**Hero:**  
H1: `Exactly what you need. Nothing you don't.`  
Subtext: `I don't offer 40 services. I offer six — and I do all of them properly.`

**Each service as a full section (alternating dark/light backgrounds):**

For each service, structure as:
- Service name (H2)
- One bold, honest sentence about who this is for
- "The problem I solve:" (1 paragraph, written from client's pain point)
- "What you get:" (short deliverable list — no more than 6 items, each in plain English)
- "Ideal for:" (3 client types, e.g., `Local restaurants · Cafes · Food delivery brands`)
- "Typical timeline:" (specific, e.g., `5–10 business days`)

---

## CONTACT PAGE

**This page should feel like a warm conversation starter, not a form dump.**

**Hero section:**  
No full-screen. Generous whitespace above.

H1 (large, centered, `--text-5xl`):  
`Let's figure out what  your website should do.`

Below: A single sentence.  
`Fill in the form and I'll reply within one business day — usually faster.`

**Form fields:**
- Name (required)
- Email (required)
- Website URL (optional — placeholder: "yoursite.com or leave blank")
- What do you need? (dropdown: New Website · Landing Page · WooCommerce Store · Migration · Performance Fix · Maintenance · Something Else)
- Tell me about your project (textarea — placeholder: "What does your business do? What's not working? What would success look like? You don't need to have all the answers — just start.")
- Submit button: `Send it →` (magnetic, filled green, pill)

**Form validation:** Inline, real-time. Error states styled with a soft red border and a short message below the field (`--text-sm`, `#DC2626`). No alert boxes.

**Below the form:**  
Three alternative contact options, in a row:
- `Email` — direct mailto link
- `WhatsApp` — click-to-chat link (with WhatsApp icon)
- `Calendly` — book a call directly

Each formatted as: icon + label + a short phrase (`"Prefer to talk? Book 20 minutes."`)

**Right side column (on desktop — 2-column layout):**  
A minimal "What to expect" card (glassmorphism):
```
After you send this:
→ I'll read it properly (not skim it)
→ I'll reply within one business day
→ If it's a fit, I'll suggest a free call
→ No sales pressure. No package-pushing.
```

---

## RESPONSIVE BREAKPOINTS

```css
/* Breakpoints */
--bp-sm:   640px;
--bp-md:   768px;
--bp-lg:   1024px;
--bp-xl:   1280px;
--bp-2xl:  1536px;

/* Container */
.container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 1024px) {
  .container { padding: 0 48px; }
}
```

**Mobile priorities:**
- Lenis still active but `smoothTouch: false`
- VanillaTilt disabled (`if (!isMobile)` check via `window.matchMedia`)
- Cursor follower hidden (`display: none` on mobile)
- Blobs reduce to 60% of their desktop size
- All `--text-6xl` headings reduce to `--text-4xl`
- Sections reduce vertical padding by 40%
- Navigation becomes full-screen overlay (dark, `--bg-dark`)
- Form is always single-column
- Process steps stack vertically
- Comparison table stacks (left column first, right column second)

---

## PERFORMANCE & TECHNICAL

```html
<!-- In <head> -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#F5F3EE" />

<!-- Preload critical fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- SEO -->
<title>Work With Neehal — WordPress Developer</title>
<meta name="description" content="WordPress websites for businesses that are tired of looking like everyone else. Clean code, real performance, no jargon." />
<link rel="canonical" href="https://workwithneehal.com" />

<!-- OG -->
<meta property="og:title" content="Work With Neehal — WordPress Developer" />
<meta property="og:description" content="WordPress websites for businesses that are tired of looking like everyone else." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:url" content="https://workwithneehal.com" />

<!-- Schema: Person + ProfessionalService -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Work With Neehal",
  "url": "https://workwithneehal.com",
  "description": "WordPress Developer building business websites for small businesses, agencies, and startups.",
  "founder": { "@type": "Person", "name": "Muhammad Neehal Shahid" },
  "areaServed": "Worldwide",
  "serviceType": ["WordPress Development", "WooCommerce", "Website Migration", "Performance Optimization"]
}
</script>
```

**Performance rules:**
- All images: WebP format, `loading="lazy"`, explicit `width` and `height` attributes
- Critical CSS inlined in `<head>` (above-the-fold styles only)
- All JS deferred (`defer` attribute)
- GSAP and Lenis loaded only after `DOMContentLoaded`
- Fonts subset to Latin characters only
- No unused CSS (Vite PurgeCSS in build if using bundler)
- Cloudflare Pages: enable Rocket Loader, Minification, and Browser Cache TTL 1 year

---

## COPYWRITING PRINCIPLES — ENFORCE THESE

**Never write:**
- "I'm passionate about..."
- "I leverage synergies..."
- "Welcome to my portfolio"
- "Hi, I'm Neehal!"
- "I'm dedicated to..."
- "Results-driven..."
- "In today's digital landscape..."
- Anything a robot would generate

**Always write:**
- Statements that could only be true about you, not every developer
- Copy that answers the client's silent question before they ask it
- Sentences that end before they need to
- Specific details instead of vague promises (`"reply within one business day"` not `"quick communication"`)
- The word "you" more than the word "I"

**Tone:** Confident but not arrogant. Specific but not technical. Warm but not chatty. Honest but not self-deprecating.

---

## ACCESSIBILITY — NON-NEGOTIABLE

```
- All images: meaningful alt text (not "image" or "photo")
- All interactive elements: visible focus ring (not removed with outline:none)
- Color contrast: AA minimum on all text (use Stark or WebAIM checker)
- Keyboard navigation: full Tab support through all nav and form elements
- prefers-reduced-motion: all GSAP animations wrapped in media query check
- prefers-color-scheme: optional, but if implemented — no dark mode hack. Full implementation or none.
- Semantic HTML: nav, main, article, section, aside, footer — all correct
- Form labels: always explicit <label for="..."> — never placeholder-only
- Heading hierarchy: never skip levels (H1 → H2 → H3, never H1 → H3)
```

---

## FILE STRUCTURE

```
/
├── index.html              (Home)
├── about.html
├── projects/
│   ├── index.html          (Projects listing)
│   ├── savora-kitchen.html
│   ├── clearsmile-dental.html
│   ├── harrington-legal.html
│   ├── ironedge-gym.html
│   ├── pulse-digital.html
│   └── stackr-saas.html
├── services.html
├── contact.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── typography.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js             (Lenis, cursor, global)
│   ├── animations.js       (GSAP ScrollTrigger setup)
│   ├── nav.js
│   ├── tilt.js
│   └── counter.js
├── assets/
│   ├── fonts/
│   ├── images/
│   └── icons/
└── public/
    ├── favicon.ico
    ├── og-image.jpg
    └── robots.txt
```

---

## HOW TO BUILD THIS (Claude Code / Cursor Instructions)

Start in this order:
1. `variables.css` — all CSS custom properties first. Every value goes here.
2. `reset.css` + `typography.css` — base styles before any layout
3. `layout.css` — container, grid, section wrapper utilities
4. `main.js` — Lenis smooth scroll, cursor follower, basic setup
5. `nav.html` + `nav.js` — navigation component, sticky behavior
6. Home page: hero section first (most complex, most important)
7. Continue home page sections in order
8. Build reusable `components.css` as patterns emerge (cards, chips, badges)
9. `animations.js` — GSAP setup, text reveals, image reveals, counters
10. Remaining pages (About, Projects, Services, Contact)
11. Individual project pages last (they reuse the most components)
12. `responsive.css` — mobile pass on everything, in order
13. Final performance pass: image optimization, defer audit, Lighthouse run

**When in doubt, do less — but do it better.**  
One perfectly executed section beats four rushed ones.

---

---

## PATCH — MISSING INTERACTIONS (Added After Review)

These were not in the original prompt. Add all of them. They are the difference between "looks nice" and "I need to share this link."

---

### FONT UPDATE

Replace all references to Geist/Inter with:
- **Satoshi** — all headings, display text, nav logo, stat numbers, oversized labels
- **Manrope** — all body text, form inputs, button labels, captions, tooltips

Why this pairing works: Satoshi has the geometric confidence that makes headlines look intentional. Manrope is warmer and more humanist — it makes paragraphs feel like a conversation, not a specification. Together they signal both craft and approachability.

```html
<!-- In <head>, before any CSS -->
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,600,500&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap" rel="stylesheet" />
```

```css
:root {
  --font-heading: 'Satoshi', system-ui, sans-serif;
  --font-body:    'Manrope', system-ui, sans-serif;
}

/* Apply globally */
body            { font-family: var(--font-body); }
h1, h2, h3, h4 { font-family: var(--font-heading); }
.stat-number    { font-family: var(--font-heading); }
nav, button     { font-family: var(--font-body); }
```

---

### 1. SHIMMER SWEEP

A moving light reflection that sweeps across a surface — used on cards, buttons, and the hero composition. Signals "premium" without being loud. Think Apple product page highlights.

**CSS shimmer for cards:**
```css
.shimmer-card {
  position: relative;
  overflow: hidden;
}

.shimmer-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.18) 50%,
    transparent 60%
  );
  background-size: 200% 100%;
  background-position: -200% 0;
  transition: none;
  pointer-events: none;
}

.shimmer-card:hover::after {
  animation: shimmerSweep 0.65s ease forwards;
}

@keyframes shimmerSweep {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

**Where to apply `.shimmer-card`:**
- All project cards
- Service cards
- Trust strip stat blocks (on hover)
- The glassmorphism hero composition card

**CSS shimmer for the hero floating chips:**
```css
.tech-chip {
  position: relative;
  overflow: hidden;
}

.tech-chip::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.35),
    transparent
  );
  transform: skewX(-15deg);
  animation: chipShimmer 3.5s ease-in-out infinite;
}

/* Stagger each chip's shimmer */
.tech-chip:nth-child(1)::after { animation-delay: 0s; }
.tech-chip:nth-child(2)::after { animation-delay: 0.6s; }
.tech-chip:nth-child(3)::after { animation-delay: 1.2s; }
.tech-chip:nth-child(4)::after { animation-delay: 1.8s; }
.tech-chip:nth-child(5)::after { animation-delay: 2.4s; }
.tech-chip:nth-child(6)::after { animation-delay: 3.0s; }

@keyframes chipShimmer {
  0%   { left: -100%; opacity: 0; }
  10%  { opacity: 1; }
  50%  { left: 150%; }
  51%  { opacity: 0; }
  100% { left: 150%; opacity: 0; }
}
```

**Shimmer on section dividers (decorative horizontal lines):**
```css
.section-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--border-medium) 20%,
    var(--border-medium) 80%,
    transparent
  );
  position: relative;
  overflow: hidden;
}

.section-divider::after {
  content: '';
  position: absolute;
  top: 0; left: -30%;
  width: 30%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-primary),
    transparent
  );
  animation: lineSweep 4s ease-in-out infinite;
}

@keyframes lineSweep {
  0%   { left: -30%; }
  100% { left: 130%; }
}
```

---

### 2. FILL-FROM-BOTTOM BUTTON ANIMATION

The primary interaction on all CTA buttons. On hover, a fill color rises from the bottom like liquid — far more satisfying than a simple background-color change.

```css
/* Primary button */
.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 100px;           /* pill */
  border: 1.5px solid var(--accent-primary);
  background: var(--accent-primary);
  color: white;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.35s ease, box-shadow 0.35s ease, transform 0.25s ease;
  z-index: 1;
}

/* The rising fill layer */
.btn-primary::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 0%;
  background: var(--accent-hover);   /* slightly darker green */
  transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: -1;
}

.btn-primary:hover::before  { height: 100%; }
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(26, 107, 74, 0.28);
}

.btn-primary:active { transform: translateY(0); }
```

```css
/* Outline / secondary button — fill-from-bottom with color inversion */
.btn-outline {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 27px;             /* 1px less to compensate for border */
  border-radius: 100px;
  border: 1.5px solid var(--border-medium);
  background: transparent;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.35s ease, border-color 0.35s ease, transform 0.25s ease;
  z-index: 1;
}

.btn-outline::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 0%;
  background: var(--text-primary);
  transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: -1;
}

.btn-outline:hover::before  { height: 100%; }
.btn-outline:hover {
  color: var(--bg-primary);
  border-color: var(--text-primary);
  transform: translateY(-2px);
}
```

```css
/* Ghost button — used in dark sections */
.btn-ghost {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 100px;
  border: 1.5px solid rgba(255,255,255,0.2);
  background: transparent;
  color: var(--text-inverse);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.35s ease, border-color 0.35s ease, transform 0.25s ease;
  z-index: 1;
}

.btn-ghost::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 0%;
  background: white;
  transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: -1;
}

.btn-ghost:hover::before  { height: 100%; }
.btn-ghost:hover {
  color: var(--bg-dark);
  border-color: white;
  transform: translateY(-2px);
}
```

**Button arrow animation (for buttons with `→`):**
```css
.btn-arrow {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-primary:hover .btn-arrow,
.btn-outline:hover .btn-arrow,
.btn-ghost:hover .btn-arrow {
  transform: translateX(5px);
}
```

**Usage in HTML:**
```html
<button class="btn-primary magnetic">
  View Projects <span class="btn-arrow">→</span>
</button>

<button class="btn-outline magnetic">
  Let's Talk <span class="btn-arrow">→</span>
</button>
```

---

### 3. BLOB AS PERSISTENT BACKGROUND ELEMENT

Not just a section accent — blobs are a global design layer that exists beneath the entire page. They drift slowly, creating a living, breathing feeling even on sections with no other animation.

**HTML — add as first child of `<body>`:**
```html
<!-- Global blob layer — sits behind everything at z-index: 0 -->
<div class="blob-bg" aria-hidden="true">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>
</div>
```

**CSS:**
```css
.blob-bg {
  position: fixed;        /* FIXED — moves with scroll, always present */
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

/* Every page section needs z-index: 1 to sit above the blob layer */
section, nav, footer { position: relative; z-index: 1; }

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  will-change: transform;     /* GPU layer — keeps it smooth */
}

/* Blob 1 — large green, top-left quadrant */
.blob-1 {
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(26, 107, 74, 0.22), transparent 70%);
  top: -200px;
  left: -200px;
  animation: blobDrift1 20s ease-in-out infinite alternate;
}

/* Blob 2 — medium amber, center-right */
.blob-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(196, 135, 58, 0.14), transparent 70%);
  top: 40vh;
  right: -150px;
  animation: blobDrift2 25s ease-in-out infinite alternate;
}

/* Blob 3 — small green, bottom-left */
.blob-3 {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(26, 107, 74, 0.12), transparent 70%);
  bottom: 10vh;
  left: 10%;
  animation: blobDrift3 18s ease-in-out infinite alternate;
}

@keyframes blobDrift1 {
  0%   { transform: translate(0px, 0px) scale(1); }
  33%  { transform: translate(60px, 80px) scale(1.06); }
  66%  { transform: translate(-40px, 120px) scale(0.96); }
  100% { transform: translate(30px, 60px) scale(1.04); }
}

@keyframes blobDrift2 {
  0%   { transform: translate(0px, 0px) scale(1); }
  50%  { transform: translate(-80px, -60px) scale(1.08); }
  100% { transform: translate(40px, 80px) scale(0.94); }
}

@keyframes blobDrift3 {
  0%   { transform: translate(0px, 0px) scale(1); }
  40%  { transform: translate(50px, -40px) scale(1.05); }
  100% { transform: translate(-30px, 60px) scale(0.98); }
}
```

**On dark sections (`--bg-dark`):** The blob layer naturally shows through less because the blob colors are light and the section is dark. No extra handling needed — it just works.

**On mobile:** Reduce blob sizes by 50%, increase blur to 120px, and switch from `position: fixed` to `position: absolute` on the `.blob-bg` wrapper to avoid mobile fixed-position jank.

```css
@media (max-width: 768px) {
  .blob-bg { position: absolute; height: 100%; }
  .blob-1  { width: 350px; height: 350px; filter: blur(120px); }
  .blob-2  { width: 250px; height: 250px; filter: blur(100px); }
  .blob-3  { width: 190px; height: 190px; filter: blur(90px);  }
}
```

**Cursor-reactive blob (optional — desktop only, hero section only):**
```javascript
// Makes blob-1 lazily follow the cursor — extremely subtle
const blob1 = document.querySelector('.blob-1');

window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth  - 0.5) * 60;
  const y = (e.clientY / window.innerHeight - 0.5) * 60;
  gsap.to(blob1, {
    x, y,
    duration: 3,
    ease: 'power1.out',
    overwrite: 'auto'
  });
});
```

---

### 4. GLOW EFFECTS

Glow is used in three places only. More than three = amateur. The rarity is what makes it feel premium.

**Card glow on hover (project cards, service cards):**
```css
.glow-card {
  transition: box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.glow-card:hover {
  box-shadow:
    0 0 0 1px rgba(26, 107, 74, 0.15),
    0 8px 32px rgba(26, 107, 74, 0.12),
    0 32px 80px rgba(26, 107, 74, 0.08);
  transform: translateY(-6px);
}
```

**Accent text glow (for the hero headline accent word — the italic green word):**
```css
.accent-glow {
  color: var(--accent-primary);
  text-shadow:
    0 0 40px rgba(26, 107, 74, 0.30),
    0 0 80px rgba(26, 107, 74, 0.15);
}
```

**Final CTA section ambient glow (behind the headline — large, centered):**
```css
.cta-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 400px;
  background: radial-gradient(
    ellipse at center,
    rgba(26, 107, 74, 0.20) 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
  filter: blur(40px);
  /* No animation — static glow, everything else is already moving */
}
```

**Button glow (on the primary CTA buttons in dark sections):**
```css
.btn-primary.glow-btn {
  box-shadow: 0 0 20px rgba(26, 107, 74, 0.35);
}

.btn-primary.glow-btn:hover {
  box-shadow:
    0 0 30px rgba(26, 107, 74, 0.50),
    0 8px 24px rgba(26, 107, 74, 0.25),
    0 16px 48px rgba(26, 107, 74, 0.15);
}
```

---

### 5. GRADIENTS (Comprehensive System)

These are the only gradients allowed. Do not add more.

```css
:root {
  /* Page-level background gradient — barely perceptible, adds depth */
  --grad-page-bg: linear-gradient(
    160deg,
    #F5F3EE 0%,
    #F0EFEA 40%,
    #F5F3EE 100%
  );

  /* Section transition — cream to white (used between hero and trust strip) */
  --grad-section-fade: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );

  /* Project card image overlay — dark gradient from bottom */
  --grad-card-overlay: linear-gradient(
    180deg,
    transparent 40%,
    rgba(14, 14, 12, 0.75) 100%
  );

  /* Dark section → light section transition */
  --grad-dark-to-light: linear-gradient(
    180deg,
    var(--bg-dark) 0%,
    var(--bg-primary) 100%
  );

  /* Accent gradient — used only on the most important number or word */
  --grad-accent-text: linear-gradient(
    135deg,
    var(--accent-primary) 0%,
    #2A9D6F 100%
  );

  /* Glassmorphism gradient border */
  --grad-glass-border: linear-gradient(
    135deg,
    rgba(255,255,255,0.5) 0%,
    rgba(255,255,255,0.1) 100%
  );
}

/* Apply text gradient */
.gradient-text {
  background: var(--grad-accent-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Apply glass border via pseudo-element (avoids border: gradient limitation) */
.glass-border-card {
  position: relative;
}

.glass-border-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  background: var(--grad-glass-border);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

---

### 6. NTH-CHILD ALTERNATING LEFT-RIGHT LAYOUT

Defined for two key sections: **Services** and **Projects listing page**. This is what prevents the site from feeling like a template grid.

**Services — alternating rows:**
```css
.services-list { display: flex; flex-direction: column; gap: 80px; }

.service-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* Even rows: swap column order */
.service-row:nth-child(even) {
  direction: rtl;   /* flips column order without changing DOM */
}
.service-row:nth-child(even) > * {
  direction: ltr;   /* restore text direction inside columns */
}

/* On mobile: always stack, content above visual */
@media (max-width: 768px) {
  .service-row,
  .service-row:nth-child(even) {
    grid-template-columns: 1fr;
    direction: ltr;
  }
}
```

**Projects — alternating card layout (stacked, not grid):**
```css
.projects-stack { display: flex; flex-direction: column; gap: 32px; }

.project-row {
  display: grid;
  grid-template-columns: 55% 1fr;
  gap: 0;
  min-height: 440px;
  border-radius: 28px;
  overflow: hidden;
  background: var(--bg-secondary);
  box-shadow: var(--shadow-lg);
}

/* Odd: image left, content right */
.project-row:nth-child(odd) .project-image  { order: 1; }
.project-row:nth-child(odd) .project-content { order: 2; }

/* Even: content left, image right */
.project-row:nth-child(even) .project-image  { order: 2; }
.project-row:nth-child(even) .project-content { order: 1; }

/* Content padding */
.project-content {
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

/* Image fills its cell */
.project-image {
  overflow: hidden;
}
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.project-row:hover .project-image img {
  transform: scale(1.04);
}

@media (max-width: 768px) {
  .project-row {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  /* On mobile: image always on top */
  .project-row:nth-child(odd) .project-image,
  .project-row:nth-child(even) .project-image  { order: 1; height: 220px; }
  .project-row:nth-child(odd) .project-content,
  .project-row:nth-child(even) .project-content { order: 2; padding: 28px; }
}
```

**About page — value rows (nth-child text alignment shift):**
```css
.value-rows { display: flex; flex-direction: column; }

.value-row {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 48px;
  padding: 40px 0;
  border-bottom: 1px solid var(--border-light);
  align-items: start;
}

/* Even rows shift the label to the right side */
.value-row:nth-child(even) {
  grid-template-columns: 1fr 280px;
}
.value-row:nth-child(even) .value-label { order: 2; text-align: right; }
.value-row:nth-child(even) .value-desc  { order: 1; }

.value-label {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--text-primary);
  opacity: 0.08;
  line-height: 1;
  letter-spacing: var(--tracking-tight);
  /* This oversized ghost label is behind the text — purely visual weight */
}

@media (max-width: 768px) {
  .value-row,
  .value-row:nth-child(even) {
    grid-template-columns: 1fr;
    direction: ltr;
  }
  .value-row:nth-child(even) .value-label { text-align: left; order: 1; }
  .value-row:nth-child(even) .value-desc  { order: 2; }
}
```

---

### COMPLETE BUTTON INTERACTION CHECKLIST

Apply these classes to every button on the site. No button should have a plain `background-color` transition.

| Button type | Classes | Effect |
|-------------|---------|--------|
| Primary CTA (light bg) | `.btn-primary .magnetic` | Fill-from-bottom (dark green), lift, arrow slide |
| Secondary (light bg) | `.btn-outline .magnetic` | Fill-from-bottom (dark), invert text color, lift |
| CTA in dark sections | `.btn-primary .glow-btn .magnetic` | Fill + glow pulse |
| Ghost (dark sections) | `.btn-ghost .magnetic` | Fill white, invert text to dark |
| Nav "Book a Call" | `.btn-primary .magnetic` | All of the above, smaller padding |
| Text links | `.link-underline` | Underline grows from left on hover |

```css
/* Text link underline-from-left */
.link-underline {
  position: relative;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
}

.link-underline::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0%; height: 1.5px;
  background: var(--accent-primary);
  transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.link-underline:hover::after { width: 100%; }
```

---

*Patch complete. All six missing elements are now fully specified with working code. Merge this with the main prompt before starting build.*

*This prompt was written specifically for workwithneehal.com — Muhammad Neehal Shahid, WordPress Developer.*  
*Do not reuse this for other projects without rewriting the copy and color system.*
