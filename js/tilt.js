/**
 * VanillaTilt — project cards (desktop only)
 */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const { prefersReducedMotion, isMobile } = window.WWN || {};
    if (prefersReducedMotion || isMobile || typeof VanillaTilt === 'undefined') return;

    const cards = document.querySelectorAll('.project-row, .masonry-card');
    if (!cards.length) return;

    VanillaTilt.init(cards, {
      max: 5,
      speed: 600,
      glare: true,
      'max-glare': 0.12,
      perspective: 1200,
      scale: 1.01,
      transition: true,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
    });
  });
})();
