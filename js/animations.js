/**
 * GSAP animations — scroll reveals, hero, FAQ, hero composition
 * SplitText Club plugin avoided — custom line/word split used instead.
 */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const { prefersReducedMotion, isMobile } = window.WWN || {
      prefersReducedMotion: false,
      isMobile: false,
    };

    initFAQ();
    initContactForm();
    initProjectFilters();

    if (prefersReducedMotion || typeof gsap === 'undefined') {
      revealStatic();
      return;
    }

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    initHero();
    initFadeUps();
    initImageReveals();
    initCounters();
    initFinalCtaWords();
  });

  function revealStatic() {
    document.querySelectorAll('[data-animate]').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  function splitLines(el) {
    const text = el.innerHTML;
    const words = text.split(/(<[^>]+>|\s+)/).filter(Boolean);
    el.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'line-clip';
    wrapper.style.overflow = 'hidden';
    const inner = document.createElement('div');
    inner.className = 'line-inner';
    inner.innerHTML = text;
    wrapper.appendChild(inner);
    el.appendChild(wrapper);
    return [inner];
  }

  function splitWords(el) {
    const html = el.innerHTML;
    // Preserve accent spans
    const parts = html.split(/(<[^>]+>[^<]*<\/[^>]+>|\s+)/);
    el.innerHTML = '';
    const wordEls = [];
    parts.forEach((part) => {
      if (!part || part === ' ') {
        el.appendChild(document.createTextNode(' '));
        return;
      }
      if (part.trim() === '') {
        el.appendChild(document.createTextNode(part));
        return;
      }
      const span = document.createElement('span');
      span.className = 'word-inner';
      span.style.display = 'inline-block';
      span.innerHTML = part;
      el.appendChild(span);
      wordEls.push(span);
      el.appendChild(document.createTextNode(' '));
    });
    return wordEls;
  }

  function initHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const nav = document.querySelector('.site-header');
    const label = hero.querySelector('.hero-label');
    const h1 = hero.querySelector('h1');
    const sub = hero.querySelector('.hero-sub');
    const actions = hero.querySelector('.hero-actions');
    const proof = hero.querySelector('.hero-proof');
    const media = hero.querySelector('.hero-media');
    const mediaImg = hero.querySelector('.hero-media-img');

    if (nav) gsap.set(nav, { opacity: 0 });
    if (label) gsap.set(label, { y: 18, opacity: 0 });
    if (sub) gsap.set(sub, { y: 22, opacity: 0 });
    if (actions) gsap.set(actions, { y: 16, opacity: 0 });
    if (proof) gsap.set(proof, { opacity: 0 });
    if (media) gsap.set(media, { opacity: 0, y: 28 });

    tl.to(nav, { opacity: 1, duration: 0.4 }, 0);
    if (label) tl.to(label, { y: 0, opacity: 1, duration: 0.5 }, 0.15);

    if (h1) {
      const lines = splitLines(h1);
      gsap.set(lines, { yPercent: 105, opacity: 0 });
      tl.to(lines, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.07 }, 0.28);
    }

    if (media) tl.to(media, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 0.35);
    if (mediaImg) {
      gsap.fromTo(mediaImg, { scale: 1.08 }, { scale: 1.03, duration: 1.4, ease: 'power2.out', delay: 0.35 });
    }

    if (sub) tl.to(sub, { y: 0, opacity: 1, duration: 0.6 }, 0.7);
    if (actions) tl.to(actions, { y: 0, opacity: 1, duration: 0.55 }, 0.85);
    if (proof) tl.to(proof, { opacity: 1, duration: 0.45 }, 1.0);
  }

  function initFadeUps() {
    document.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
    });

    document.querySelectorAll('[data-animate="stagger"]').forEach((group) => {
      const children = group.children;
      gsap.from(children, {
        y: 36,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: group, start: 'top 80%' },
      });
    });
  }

  function initImageReveals() {
    document.querySelectorAll('[data-animate="image"]').forEach((imgEl) => {
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
  }

  function initCounters() {
    document.querySelectorAll('[data-count]').forEach((el) => {
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
              el.innerHTML = `${prefix}<span class="count-val">${num}</span>${suffix ? `<span class="suffix">${suffix}</span>` : ''}`;
            },
          });
        },
      });
    });
  }

  function initFinalCtaWords() {
    const h2 = document.querySelector('.final-cta h2');
    if (!h2) return;

    const words = splitWords(h2);
    gsap.from(words, {
      y: 40,
      opacity: 0,
      rotateX: () => gsap.utils.random(-20, 0),
      duration: 0.8,
      stagger: 0.06,
      ease: 'power3.out',
      scrollTrigger: { trigger: h2, start: 'top 80%' },
    });
  }

  function initFAQ() {
    document.querySelectorAll('.faq-item').forEach((item) => {
      const btn = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      if (!btn || !answer) return;

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        document.querySelectorAll('.faq-item.is-open').forEach((openItem) => {
          if (openItem === item) return;
          openItem.classList.remove('is-open');
          const a = openItem.querySelector('.faq-answer');
          if (a) a.style.maxHeight = '0';
        });

        if (isOpen) {
          item.classList.remove('is-open');
          answer.style.maxHeight = '0';
        } else {
          item.classList.add('is-open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const statusEl = form.querySelector('#form-status');
    const btn = form.querySelector('[type="submit"]');
    const btnDefaultHtml = btn ? btn.innerHTML : '';

    const fields = {
      name: { required: true, message: 'Please enter your name.' },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address.',
      },
      need: { required: true, message: 'Please select what you need.' },
      message: { required: true, message: 'Tell me a bit about your project.' },
    };

    Object.keys(fields).forEach((id) => {
      const input = form.querySelector(`#${id}`);
      if (!input) return;
      input.addEventListener('blur', () => validateField(input, fields[id]));
      input.addEventListener('input', () => {
        if (input.closest('.form-group')?.classList.contains('has-error')) {
          validateField(input, fields[id]);
        }
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let valid = true;
      Object.keys(fields).forEach((id) => {
        const input = form.querySelector(`#${id}`);
        if (input && !validateField(input, fields[id])) valid = false;
      });
      if (!valid) return;

      const accessKey = form.querySelector('[name="access_key"]')?.value?.trim();
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        setFormStatus(
          statusEl,
          'error',
          'Form is not connected yet. Add your Web3Forms access key in contact.html.'
        );
        return;
      }

      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }
      setFormStatus(statusEl, '', '');

      try {
        const formData = new FormData(form);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || 'Something went wrong. Please try again.');
        }

        form.reset();
        Object.keys(fields).forEach((id) => {
          const input = form.querySelector(`#${id}`);
          input?.classList.remove('is-error');
          input?.closest('.form-group')?.classList.remove('has-error');
        });

        if (btn) {
          btn.textContent = "Sent — I'll reply soon";
        }
        setFormStatus(statusEl, 'success', "Got it. I'll reply within one business day.");

        setTimeout(() => {
          if (btn) {
            btn.innerHTML = btnDefaultHtml;
            btn.disabled = false;
          }
          setFormStatus(statusEl, '', '');
        }, 5000);
      } catch (err) {
        if (btn) {
          btn.innerHTML = btnDefaultHtml;
          btn.disabled = false;
        }
        setFormStatus(
          statusEl,
          'error',
          err.message || 'Could not send. Email me at workwithneehal@gmail.com instead.'
        );
      }
    });
  }

  function setFormStatus(el, type, message) {
    if (!el) return;
    if (!message) {
      el.hidden = true;
      el.textContent = '';
      el.className = 'form-status';
      return;
    }
    el.hidden = false;
    el.textContent = message;
    el.className = `form-status form-status--${type}`;
  }

  function validateField(input, rules) {
    const group = input.closest('.form-group');
    const value = input.value.trim();
    let ok = true;

    if (rules.required && !value) ok = false;
    if (ok && rules.pattern && value && !rules.pattern.test(value)) ok = false;

    if (!ok) {
      group?.classList.add('has-error');
      input.classList.add('is-error');
      const err = group?.querySelector('.form-error');
      if (err) err.textContent = rules.message;
    } else {
      group?.classList.remove('has-error');
      input.classList.remove('is-error');
    }
    return ok;
  }

  function initProjectFilters() {
    const tabs = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.masonry-card');
    if (!tabs.length || !cards.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('is-active'));
        tab.classList.add('is-active');
        const filter = tab.dataset.filter;

        cards.forEach((card) => {
          const cat = card.dataset.category;
          const show = filter === 'all' || cat === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }
})();
