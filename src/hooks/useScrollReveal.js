import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scans data-animate / data-count attributes inside rootRef and wires up
 * the same fade-up, stagger, image-reveal, sticky-project and counter
 * effects the static site used — scoped with gsap.context so everything
 * is cleaned up automatically when the page unmounts (route change).
 */
export default function useScrollReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        root.querySelectorAll('[data-animate]').forEach((el) => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
        return;
      }

      root.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      root.querySelectorAll('[data-animate="stagger"]').forEach((group) => {
        gsap.from(group.children, {
          y: 36,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: group, start: 'top 80%' },
        });
      });

      root.querySelectorAll('[data-animate="image"]').forEach((imgEl) => {
        if (imgEl.closest('.projects-stack')) return;

        gsap.from(imgEl, {
          clipPath: 'inset(100% 0 0 0)',
          duration: 1.1,
          ease: 'power4.inOut',
          scrollTrigger: { trigger: imgEl, start: 'top 80%' },
        });
        gsap.to(imgEl, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: imgEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      const stackCards = gsap.utils.toArray(root.querySelectorAll('.projects-stack .project-row'));
      stackCards.forEach((card, i) => {
        if (i === stackCards.length - 1) return;
        const scaleEl = card.querySelector('.project-row-scale');
        const next = stackCards[i + 1];
        if (!scaleEl || !next) return;

        gsap.fromTo(
          scaleEl,
          { scale: 1, y: 0, filter: 'brightness(1)' },
          {
            scale: 0.88,
            y: -28,
            filter: 'brightness(0.72)',
            ease: 'none',
            scrollTrigger: {
              trigger: next,
              start: 'top bottom-=4%',
              end: 'top top+=8%',
              scrub: 0.45,
            },
          }
        );
      });

      root.querySelectorAll('[data-count]').forEach((el) => {
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals, 10) : 0;
        const obj = { val: 0 };

        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                const num = decimals ? obj.val.toFixed(decimals) : Math.round(obj.val);
                el.innerHTML = `${prefix}<span class="count-val">${num}</span>${
                  suffix ? `<span class="suffix">${suffix}</span>` : ''
                }`;
              },
            });
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, [rootRef]);
}
