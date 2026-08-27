// Postbuild step: writes a per-route dist/<path>/index.html with the
// correct <title>, meta description, canonical, OG/Twitter tags, and
// structured data already baked into the static HTML — so Googlebot's
// first crawl pass, and any crawler that never runs JavaScript at all
// (social-preview bots, most non-Google search engines), see accurate
// per-page metadata instead of every route showing the homepage's.
//
// The SPA itself is untouched: every generated file loads the exact same
// JS bundle as the real dist/index.html, so React Router takes over and
// renders normally for real visitors — this only changes what's in <head>
// before the JS runs.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { staticPages, projectPages, absoluteUrl, SITE_NAME } from '../src/data/seo.js';
import projects from '../src/data/projects.js';
import faqItems from '../src/data/faq.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../dist');
const templatePath = join(distDir, 'index.html');

if (!existsSync(templatePath)) {
  console.error('[prerender-seo] dist/index.html not found — run `vite build` first.');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf-8');

function withTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    console.warn(`[prerender-seo] pattern not found, skipping one replacement: ${pattern}`);
    return html;
  }
  return html.replace(pattern, replacement);
}

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderPage(page) {
  const url = absoluteUrl(page.path);
  const image = absoluteUrl(page.image || '/images/og-default.jpg');
  let html = template;

  html = withTag(html, /<title>.*?<\/title>/s, `<title>${esc(page.title)}</title>`);
  html = withTag(
    html,
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${esc(page.description)}" />`
  );
  html = withTag(html, /<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${esc(url)}" />`);
  html = withTag(
    html,
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${esc(page.title)}" />`
  );
  html = withTag(
    html,
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${esc(page.description)}" />`
  );
  html = withTag(html, /<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${esc(image)}" />`);
  html = withTag(html, /<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${esc(url)}" />`);
  html = withTag(
    html,
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${esc(page.title)}" />`
  );
  html = withTag(
    html,
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${esc(page.description)}" />`
  );
  html = withTag(html, /<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${esc(image)}" />`);

  if (page.jsonLd) {
    const script = `<script type="application/ld+json" id="page-json-ld">${JSON.stringify(page.jsonLd)}</script>\n</head>`;
    html = html.replace('</head>', script);
  }

  return html;
}

function breadcrumbFor(project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: absoluteUrl('/projects') },
      { '@type': 'ListItem', position: 3, name: project.name, item: absoluteUrl(`/projects/${project.slug}`) },
    ],
  };
}

let written = 0;

// Home stays at dist/index.html itself — it's already the template with
// correct home metadata (kept in sync manually in index.html since it IS
// the literal file Vite builds from; see src/data/seo.js `home` entry).
// Still worth injecting the FAQPage schema directly into it so the FAQ
// is rich-result-eligible even before any JS runs.
{
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  const script = `<script type="application/ld+json" id="page-json-ld">${JSON.stringify(faqJsonLd)}</script>\n</head>`;
  const homeHtml = template.replace('</head>', script);
  writeFileSync(templatePath, homeHtml, 'utf-8');
}

for (const page of staticPages.filter((p) => p.key !== 'home')) {
  const html = renderPage(page);
  const outDir = join(distDir, page.path.replace(/^\//, ''));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
  written++;
}

for (const page of projectPages) {
  const project = projects.find((p) => `/projects/${p.slug}` === page.path);
  const html = renderPage({ ...page, jsonLd: breadcrumbFor(project) });
  const outDir = join(distDir, page.path.replace(/^\//, ''));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
  written++;
}

console.log(`[prerender-seo] wrote ${written} static route(s) into dist/ for ${SITE_NAME}`);
