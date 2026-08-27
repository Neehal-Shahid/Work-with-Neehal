// Single source of truth for per-route SEO metadata. Used both at runtime
// (SEO.jsx, per-page components) and at build time (scripts/*.mjs, which
// import this file directly under Node's native ESM support) — so the
// static prerendered HTML, the sitemap, and the live client-side <head>
// updates can never drift out of sync with each other.
import projects from './projects.js';

export const SITE_URL = 'https://workwithneehal.com';
export const SITE_NAME = 'Work With Neehal';
export const DEFAULT_OG_IMAGE = '/images/og-default.jpg';
export const TWITTER_HANDLE = null; // no Twitter/X profile to attribute — omit twitter:site

export const staticPages = [
  {
    key: 'home',
    path: '/',
    title: 'Work With Neehal — Frontend Developer (React) & WordPress Developer',
    description:
      'React web apps and WordPress websites for businesses tired of looking like everyone else. Clean code, real performance, no jargon.',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    key: 'projects',
    path: '/projects',
    title: 'Projects — WordPress & React Work | Work With Neehal',
    description:
      'Real, live WordPress projects for agencies, solar, and energy businesses, built by a developer who also ships production React — this site is the proof.',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    key: 'services',
    path: '/services',
    title: 'Web Development Services — React & WordPress | Work With Neehal',
    description:
      'React web apps and WordPress business sites, landing pages, WooCommerce, migrations, performance, and maintenance — ten services done properly.',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    key: 'about',
    path: '/about',
    title: 'About Muhammad Neehal Shahid — Work With Neehal',
    description:
      'How Muhammad Neehal Shahid builds React web apps and WordPress websites — clarity, ownership, reliability, and craft.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    key: 'contact',
    path: '/contact',
    title: 'Contact — Hire a React Developer or WordPress Developer',
    description:
      "Tell me about your React app or WordPress website. I'll reply within one business day — usually faster.",
    changefreq: 'monthly',
    priority: '0.8',
  },
];

export function projectSeo(project) {
  return {
    key: `project-${project.slug}`,
    path: `/projects/${project.slug}`,
    title: `${project.name} — ${project.industry} Website Case Study | Work With Neehal`,
    description: `${project.tagline.replace(/\.$/, '')} — a Work With Neehal WordPress case study.`,
    image: `/assets/images/projects/${project.slug}/og.jpg`,
    changefreq: 'yearly',
    priority: '0.7',
  };
}

export const projectPages = projects.map(projectSeo);

// Every real, indexable route on the site — used to build the sitemap and
// to prerender per-route static HTML. Keep this the only place a new route
// needs to be registered.
export const allPages = [...staticPages, ...projectPages];

export function absoluteUrl(path) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}
