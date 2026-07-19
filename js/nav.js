/**
 * Navigation — scroll glass, mobile overlay, active links
 */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    const overlay = document.querySelector('.nav-overlay');

    if (header) {
      const onScroll = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 80);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    if (toggle && overlay) {
      const closeMenu = () => {
        toggle.classList.remove('is-open');
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
        toggle.setAttribute('aria-expanded', 'false');
        overlay.setAttribute('aria-hidden', 'true');
      };

      toggle.addEventListener('click', () => {
        const open = toggle.classList.toggle('is-open');
        overlay.classList.toggle('is-open', open);
        document.body.style.overflow = open ? 'hidden' : '';
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      });

      overlay.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
      });
    }
  });
})();
