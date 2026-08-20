import { useEffect } from 'react';
import gsap from 'gsap';

const HOVERABLE_SELECTOR = 'a, button, .hoverable, .magnetic';

export default function useCursorMagnetic() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile =
      window.matchMedia('(max-width: 768px)').matches || !window.matchMedia('(hover: hover)').matches;
    if (prefersReducedMotion || isMobile) return;

    document.documentElement.classList.add('has-custom-cursor');

    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    const blob1 = document.querySelector('.blob-1');
    let revealed = false;

    function onMouseMove(e) {
      if (dot && ring) {
        gsap.set(dot, { x: e.clientX, y: e.clientY });
        gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.25, ease: 'power2.out' });
        if (!revealed) {
          revealed = true;
          gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        }
      }

      if (blob1) {
        const x = (e.clientX / window.innerWidth - 0.5) * 60;
        const y = (e.clientY / window.innerHeight - 0.5) * 60;
        gsap.to(blob1, { x, y, duration: 3, ease: 'power1.out', overwrite: 'auto' });
      }

      const magnet = e.target.closest && e.target.closest('.magnetic');
      if (magnet) {
        const rect = magnet.getBoundingClientRect();
        const mx = e.clientX - rect.left - rect.width / 2;
        const my = e.clientY - rect.top - rect.height / 2;
        gsap.to(magnet, { x: mx * 0.35, y: my * 0.35, duration: 0.4, ease: 'power2.out' });
      }
    }

    function onMouseOver(e) {
      const target = e.target.closest && e.target.closest(HOVERABLE_SELECTOR);
      if (target && ring) {
        gsap.to(ring, { scale: 2.5, opacity: 0.5, duration: 0.3 });
      }
    }

    function onMouseOut(e) {
      const target = e.target.closest && e.target.closest(HOVERABLE_SELECTOR);
      if (target && !target.contains(e.relatedTarget) && ring) {
        gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3 });
      }

      const magnet = e.target.closest && e.target.closest('.magnetic');
      if (magnet && !magnet.contains(e.relatedTarget)) {
        gsap.to(magnet, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
      }
    }

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);
}
