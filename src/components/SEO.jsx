import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_NAME, DEFAULT_OG_IMAGE, absoluteUrl } from '../data/seo';

function setMetaByName(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setMetaByProperty(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setLinkRel(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

const JSON_LD_ID = 'page-json-ld';

function setJsonLd(data) {
  const existing = document.getElementById(JSON_LD_ID);
  if (!data) {
    if (existing) existing.remove();
    return;
  }
  let tag = existing;
  if (!tag) {
    tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = JSON_LD_ID;
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
}

/**
 * Drives <head> for client-side navigations. The build also prerenders
 * static, per-route <title>/meta/canonical/OG/JSON-LD directly into
 * dist/<route>/index.html (see scripts/prerender-seo.mjs) so the *first*
 * load of any page — including for crawlers that don't run JS — already
 * has correct metadata; this component keeps it correct for every
 * subsequent client-side route change too, and is the only source of
 * truth in dev (`npm run dev` never runs the prerender step).
 */
export default function SEO({ title, description, image, noindex = false, jsonLd = null }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = absoluteUrl(pathname);
    const ogImage = image ? absoluteUrl(image) : absoluteUrl(DEFAULT_OG_IMAGE);
    const fullTitle = title || SITE_NAME;

    if (title) document.title = title;

    setMetaByName('description', description);
    setMetaByName('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setLinkRel('canonical', canonicalUrl);

    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:site_name', SITE_NAME);
    setMetaByProperty('og:title', fullTitle);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:image', ogImage);
    setMetaByProperty('og:url', canonicalUrl);

    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', fullTitle);
    setMetaByName('twitter:description', description);
    setMetaByName('twitter:image', ogImage);

    setJsonLd(jsonLd);

    return () => setJsonLd(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, image, noindex, pathname, JSON.stringify(jsonLd)]);

  return null;
}
