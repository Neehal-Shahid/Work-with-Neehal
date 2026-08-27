// Shared between Home.jsx (renders the accordion) and
// scripts/prerender-seo.mjs (bakes a FAQPage JSON-LD block into the
// static dist/index.html so the FAQ is eligible for a rich result even
// before any JavaScript runs).
const faqItems = [
  {
    question: 'How long does a website or app take?',
    answer:
      "Most business websites take 2–3 weeks from kickoff to launch. React apps run 3–6 weeks depending on scope, and landing pages are often 5–10 days either way. If you have a tight deadline, tell me upfront and I'll let you know honestly whether it's doable.",
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      "Your logo (if you have one), content (text and photos), and an idea of what you want the site or app to do. If you don't have all of that yet, we can figure it out together — I've done this before.",
  },
  {
    question: 'Should I choose WordPress or React?',
    answer:
      "WordPress if you need a content-driven site you can edit yourself without touching code — most business sites, blogs, and stores. React if you need real interactivity: dashboards, logins, live data, or custom logic WordPress plugins can't cleanly handle. I'll tell you honestly which one your project actually needs, not just build whichever I'd rather use.",
  },
  {
    question: 'Can I update the site myself after you build it?',
    answer:
      "On WordPress, yes — that's a non-negotiable for me, and I'll record a walkthrough so you know how to make edits. On React, you get a documented, well-structured codebase any developer can pick up — you're never locked into me.",
  },
  {
    question: 'What happens after launch?',
    answer:
      "You get 30 days of included support for any bugs or small adjustments. After that, I offer monthly maintenance plans. You're never just left alone.",
  },
  {
    question: 'How much does a website or app cost?',
    answer:
      "Depends on what you need. A landing page starts lower than a full business site or a custom React application. I don't post prices publicly because every project is different — book a free call and I'll give you a real number within 24 hours.",
  },
  {
    question: 'Can you fix or improve my existing site?',
    answer:
      'Yes. Migrations, redesigns, speed fixes, bug fixes, WordPress-to-React modernization — all of it. I often work with businesses whose current site just isn\'t doing its job anymore.',
  },
];

export default faqItems;
