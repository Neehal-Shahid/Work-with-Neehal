import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollReveal from '../hooks/useScrollReveal';

const SKILLS = [
  { name: 'WordPress', size: 'xl', tip: 'The CMS that powers content-driven sites — and lets you edit it yourself' },
  { name: 'React', size: 'xl', tip: 'Building interactive interfaces and web apps beyond what WordPress can do' },
  { name: 'JavaScript', size: 'lg', tip: 'The language behind every interactive interface I build' },
  { name: 'Elementor', size: 'lg', tip: 'Visual page building without sacrificing structure' },
  { name: 'WooCommerce', size: 'md', tip: 'Online stores that customers can actually buy from' },
  { name: 'TypeScript', size: 'md', tip: 'Typed JavaScript that catches bugs before your users do' },
  { name: 'Tailwind CSS', size: 'md', tip: 'Fast, consistent styling for custom React builds' },
  { name: 'HTML', size: 'sm', tip: 'Structure and style of every page' },
  { name: 'CSS', size: 'sm', tip: 'How your site looks and feels' },
  { name: 'REST APIs', size: 'md', tip: 'Connecting frontends to real data and backend services' },
  { name: 'Responsive Design', size: 'lg', tip: 'Sites that work on phones first' },
  { name: 'Website Migration', size: 'md', tip: 'Moving hosts or platforms without losing pages or rankings' },
  { name: 'Performance', size: 'lg', tip: 'Load times and Core Web Vitals that pass' },
  { name: 'Vite', size: 'sm', tip: 'The build tool behind every modern React project I ship' },
  { name: 'Cloudflare', size: 'md', tip: 'CDN, DNS, and security at the edge' },
  { name: 'Git', size: 'sm', tip: 'Version control so nothing gets lost and changes stay reviewable' },
  { name: 'Hosting', size: 'sm', tip: 'Where your site lives and stays online' },
  { name: 'SMTP', size: 'sm', tip: 'Contact forms that actually reach your inbox' },
  { name: 'Technical SEO', size: 'md', tip: 'Structure search engines can understand' },
];

export default function About() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <SEO
        title="About — Work With Neehal"
        description="How Muhammad Neehal Shahid builds React web apps and WordPress websites — clarity, ownership, reliability, and craft."
      />

      <main>
        <section className="page-hero">
          <div className="container" data-animate="fade-up">
            <span className="section-label">About</span>
            <h1>I build things like<br />they're going to be reviewed.</h1>
            <p className="section-sub" style={{ marginTop: 20 }}>Because someone is always reviewing them — your customer.</p>
          </div>
        </section>

        <section className="section section--white">
          <div className="container">
            <div className="section-header" data-animate="fade-up">
              <span className="section-label">How I Think</span>
              <h2>Not a bio. A working philosophy.</h2>
            </div>
            <div className="prose-block" data-animate="fade-up">
              <p>I work in two stacks for a reason: WordPress and React solve different problems. WordPress gives you ownership — roughly 43% of the web runs on it because you can take your site anywhere, forever, without needing me. React gives you power — real interactivity, custom logic, and interfaces WordPress was never built to handle. I don't force every project into one tool. I ask what the site actually needs to do, then build with whichever stack gets you there without unnecessary complexity.</p>
              <p>I approach every project from the outside in. Before I ask about colors, plugins, or component libraries, I ask who your customer is and what they need to believe in the first five seconds. Most developers design inward — from the codebase outward. I design from that first impression back to the homepage.</p>
              <p>What you get is not a beautiful website for its own sake. You get a business asset — something with a job to do and a way to tell if it's doing it. If it doesn't help phones ring, forms fill, or trust stick, it isn't finished.</p>
            </div>
          </div>
        </section>

        <section className="section section--cream">
          <div className="container">
            <div className="section-header" data-animate="fade-up">
              <span className="section-label">What I Value</span>
              <h2>The non-negotiables.</h2>
            </div>
            <div className="value-rows" data-animate="stagger">
              <div className="value-row">
                <div className="value-label">Clarity</div>
                <p className="value-desc">I don't have jargon conversations with clients. If I can't explain what I'm doing in plain English, I probably don't understand it well enough.</p>
              </div>
              <div className="value-row">
                <div className="value-label">Ownership</div>
                <p className="value-desc">Your website should belong to you — not to me, not to my tools. WordPress gives you a CMS you can take anywhere. React gives you a documented codebase any developer can pick up. Either way, you're never locked in.</p>
              </div>
              <div className="value-row">
                <div className="value-label">Reliability</div>
                <p className="value-desc">If I say Tuesday, it's Tuesday. Not "sometime this week." Deadlines aren't suggestions.</p>
              </div>
              <div className="value-row">
                <div className="value-label">Craft</div>
                <p className="value-desc">I care about the gap between good and very good. That 10% that most clients never see but their customers always feel.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div className="container">
            <div className="section-header section-header--center" data-animate="fade-up">
              <span className="section-label">Skills</span>
              <h2>Tools I use every week.</h2>
            </div>
            <div className="skills-cloud" data-animate="fade-up">
              {SKILLS.map((skill) => (
                <span className="skill-tag" data-size={skill.size} data-tip={skill.tip} key={skill.name}>{skill.name}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" style={{ padding: '120px 0' }}>
          <div className="cta-glow" aria-hidden="true"></div>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(var(--text-2xl),4vw,var(--text-4xl))' }}>If you've read this far, we should probably talk.</h2>
            <div className="final-cta-actions" style={{ marginTop: 32 }}>
              <Link to="/contact" className="btn-primary glow-btn magnetic">Book a 20-min call — it's free <span className="btn-arrow">→</span></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
