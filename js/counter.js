/**
 * Counter helper — used when GSAP ScrollTrigger path isn't available
 * Primary counter logic lives in animations.js
 */
(function () {
  window.WWN = window.WWN || {};
  window.WWN.animateCount = function (el, target, options = {}) {
    const duration = options.duration || 2000;
    const suffix = options.suffix || '';
    const start = performance.now();

    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
})();
