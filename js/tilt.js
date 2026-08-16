/**
 * VanillaTilt — homepage project inners + masonry cards (desktop)
 * Tilt targets .project-row-inner so sticky on .project-row stays intact.
 */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const { prefersReducedMotion, isMobile } = window.WWN || {};
    if (prefersReducedMotion || isMobile || typeof VanillaTilt === 'undefined') return;

    const cards = document.querySelectorAll('.project-row-inner, .masonry-card');
    if (!cards.length) return;

    VanillaTilt.init(cards, {
      max: 6,
      speed: 700,
      glare: true,
      'max-glare': 0.14,
      perspective: 1400,
      scale: 1.015,
      transition: true,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
    });
  });
})();
