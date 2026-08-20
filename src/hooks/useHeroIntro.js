import { useEffect } from 'react';
import gsap from 'gsap';

export default function useHeroIntro(refs) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const { label, h1Inner, sub, actions, proof, media, mediaImg } = refs;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (label.current) gsap.set(label.current, { y: 18, opacity: 0 });
      if (sub.current) gsap.set(sub.current, { y: 22, opacity: 0 });
      if (actions.current) gsap.set(actions.current, { y: 16, opacity: 0 });
      if (proof.current) gsap.set(proof.current, { opacity: 0 });
      if (media.current) gsap.set(media.current, { opacity: 0, y: 28 });
      if (h1Inner.current) gsap.set(h1Inner.current, { yPercent: 105, opacity: 0 });

      if (label.current) tl.to(label.current, { y: 0, opacity: 1, duration: 0.5 }, 0.15);
      if (h1Inner.current) tl.to(h1Inner.current, { yPercent: 0, opacity: 1, duration: 0.8 }, 0.28);
      if (media.current) tl.to(media.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 0.35);
      if (mediaImg.current) {
        gsap.fromTo(
          mediaImg.current,
          { scale: 1.08 },
          { scale: 1.03, duration: 1.4, ease: 'power2.out', delay: 0.35 }
        );
      }
      if (sub.current) tl.to(sub.current, { y: 0, opacity: 1, duration: 0.6 }, 0.7);
      if (actions.current) tl.to(actions.current, { y: 0, opacity: 1, duration: 0.55 }, 0.85);
      if (proof.current) tl.to(proof.current, { opacity: 1, duration: 0.45 }, 1.0);
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
