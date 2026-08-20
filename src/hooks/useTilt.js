import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

export default function useTilt(rootRef, selector = '.project-row-inner, .masonry-card') {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile =
      window.matchMedia('(max-width: 768px)').matches || !window.matchMedia('(hover: hover)').matches;
    if (prefersReducedMotion || isMobile) return;

    const cards = root.querySelectorAll(selector);
    if (!cards.length) return;

    VanillaTilt.init([...cards], {
      max: 6,
      speed: 700,
      glare: true,
      'max-glare': 0.14,
      perspective: 1400,
      scale: 1.015,
      transition: true,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
    });

    return () => {
      cards.forEach((card) => card.vanillaTilt && card.vanillaTilt.destroy());
    };
  }, [rootRef, selector]);
}
