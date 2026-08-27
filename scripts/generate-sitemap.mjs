// Regenerates public/sitemap.xml from src/data/seo.js so it can never go
// stale when a project is added/removed — runs as a prebuild step
// (see package.json), before Vite copies public/ into dist/.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { allPages, absoluteUrl } from '../src/data/seo.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '../public/sitemap.xml');

const today = new Date().toISOString().slice(0, 10);

const urls = allPages
  .map(
    (page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(outPath, xml, 'utf-8');
console.log(`[generate-sitemap] wrote ${allPages.length} URLs to public/sitemap.xml`);
