import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Faq from '../components/Faq';
import useScrollReveal from '../hooks/useScrollReveal';
import useHeroIntro from '../hooks/useHeroIntro';
import useTilt from '../hooks/useTilt';
import projects from '../data/projects';
import { wordpressServices, reactServices } from '../data/services';
import { staticPages } from '../data/seo';
import faqItems from '../data/faq';

const homeSeo = staticPages.find((p) => p.key === 'home');

export default function Home() {
  const rootRef = useRef(null);
  const labelRef = useRef(null);
  const h1Ref = useRef(null);
  const h1InnerRef = useRef(null);
  const subRef = useRef(null);
  const actionsRef = useRef(null);
  const proofRef = useRef(null);
  const mediaRef = useRef(null);
  const mediaImgRef = useRef(null);

  useScrollReveal(rootRef);
  useHeroIntro({
    label: labelRef,
    h1Inner: h1InnerRef,
    sub: subRef,
    actions: actionsRef,
    proof: proofRef,
    media: mediaRef,
    mediaImg: mediaImgRef,
  });
  useTilt(rootRef, '.project-row-inner');

  const featuredProjects = projects;
  const teaserServices = [
    ...wordpressServices.filter((s) => s.featured).map((s) => ({ ...s, track: 'WordPress' })),
    ...reactServices.filter((s) => s.featured).map((s) => ({ ...s, track: 'React' })),
  ];

  return (
    <div ref={rootRef}>
      <SEO
        title={homeSeo.title}
        description={homeSeo.description}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />

      <main>
        {/* Hero — split editorial */}
        <section className="hero">
          <div className="hero-shell">
            <div className="hero-copy">
              <p className="hero-label" ref={labelRef}>Frontend Developer · React &amp; WordPress · Karachi, PK</p>
              <h1 ref={h1Ref}>
                <span className="line-clip">
                  <span className="line-inner" ref={h1InnerRef}>
                    Websites &amp; Web Apps That Look Premium &amp; <em className="accent-glow">Convert</em> Visitors Into Customers
                  </span>
                </span>
              </h1>
              <p className="hero-sub" ref={subRef}>
                I build fast, responsive websites and web apps — custom React builds for interactive products, WordPress for content-driven business sites — for agencies, startups and local businesses.
              </p>
              <div className="hero-actions" ref={actionsRef}>
                <Link to="/projects" className="btn-primary magnetic">View Portfolio <span className="btn-arrow">→</span></Link>
                <Link to="/contact" className="btn-outline magnetic">Start a Project</Link>
              </div>
              <p className="hero-proof" ref={proofRef}>Usually replies within a few hours · 30 days support after launch</p>
            </div>
            <div className="hero-media" aria-hidden="true" ref={mediaRef}>
              <img
                className="hero-media-img"
                ref={mediaImgRef}
                src="/images/hero-neehal.webp"
                srcSet="/images/hero-neehal-480.webp 480w, /images/hero-neehal.webp 900w"
                sizes="(max-width: 768px) 340px, 520px"
                alt="Muhammad Neehal Shahid"
                width="900"
                height="900"
                decoding="async"
                {...{ fetchpriority: 'high' }}
              />
            </div>
          </div>
        </section>

        {/* Proof band */}
        <section className="proof-band" id="trust" aria-label="Key stats">
          <div className="container proof-band-inner">
            <p className="proof-band-intro" data-animate="fade-up">Numbers that matter to owners — not to other developers.</p>
            <div className="proof-metrics" data-animate="stagger">
              <div className="proof-metric">
                <span className="proof-metric-num" data-count="3" data-suffix="+">0</span>
                <span className="proof-metric-label">Years shipping real websites &amp; apps</span>
              </div>
              <div className="proof-metric">
                <span className="proof-metric-num" data-count="50" data-suffix="+">0</span>
                <span className="proof-metric-label">Businesses that trusted the process</span>
              </div>
              <div className="proof-metric">
                <span className="proof-metric-num" data-count="98">0</span>
                <span className="proof-metric-label">Average Lighthouse performance</span>
              </div>
              <div className="proof-metric">
                <span className="proof-metric-num" data-count="24" data-suffix="h">0</span>
                <span className="proof-metric-label">Typical reply window on new inquiries</span>
              </div>
            </div>
            <div className="stack-strip" data-animate="fade-up">
              <span className="stack-strip-label">The toolkit</span>
              <div className="stack-strip-chips">
                <span className="chip chip--react">React</span>
                <span className="chip chip--react">Vite</span>
                <span className="chip chip--react">React Router</span>
                <span className="chip chip--react">GSAP</span>
                <span className="chip chip--wp">WordPress</span>
                <span className="chip chip--wp">Elementor</span>
                <span className="chip chip--wp">WooCommerce</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Difference */}
        <section className="section section--cream difference-section">
          <div className="container">
            <div className="section-header" data-animate="fade-up">
              <span className="section-label">The Difference</span>
              <h2>Same brief. Completely different experience.</h2>
              <p className="section-sub" style={{ marginTop: 16 }}>You have hired freelancers before. Here is what changes when the person building your site or app actually sticks around.</p>
            </div>

            <div className="contrast-sheet" data-animate="fade-up">
              <div className="contrast-head">
                <span className="contrast-head-left">The usual path</span>
                <span className="contrast-head-right">Working with Neehal</span>
              </div>

              <div className="contrast-row">
                <p className="contrast-bad">Goes quiet for days after you pay the deposit.</p>
                <span className="contrast-arrow" aria-hidden="true">→</span>
                <p className="contrast-good">Replies the same day — usually within a few hours.</p>
              </div>
              <div className="contrast-row">
                <p className="contrast-bad">Hands you a template skin and calls it custom.</p>
                <span className="contrast-arrow" aria-hidden="true">→</span>
                <p className="contrast-good">Builds around your customers first, then the layout.</p>
              </div>
              <div className="contrast-row">
                <p className="contrast-bad">Launches the site — then disappears when something breaks.</p>
                <span className="contrast-arrow" aria-hidden="true">→</span>
                <p className="contrast-good">Includes 30 days of support. You are not left alone.</p>
              </div>
              <div className="contrast-row">
                <p className="contrast-bad">You need them again every time you change a sentence.</p>
                <span className="contrast-arrow" aria-hidden="true">→</span>
                <p className="contrast-good">Editable WordPress, or a documented React codebase — fully yours either way.</p>
              </div>
              <div className="contrast-row">
                <p className="contrast-bad">Scope drifts. Price drifts. Nobody warned you.</p>
                <span className="contrast-arrow" aria-hidden="true">→</span>
                <p className="contrast-good">Clear scope and price before a single page is built.</p>
              </div>
              <div className="contrast-row">
                <p className="contrast-bad">Explains everything in plugin names and jargon.</p>
                <span className="contrast-arrow" aria-hidden="true">→</span>
                <p className="contrast-good">Every choice explained in plain English.</p>
              </div>
            </div>

            <div className="difference-cta" data-animate="fade-up">
              <p>If that already sounds like a better way to work —</p>
              <Link to="/contact" className="btn-primary magnetic">Start with a free call <span className="btn-arrow">→</span></Link>
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true"></div>

        {/* Featured Projects */}
        <section className="section section--cream" id="projects">
          <div className="container">
            <div className="section-header" data-animate="fade-up">
              <span className="section-label">Selected Work</span>
              <h2>Projects that did the job.</h2>
              <p className="section-sub" style={{ marginTop: 16 }}>Live WordPress client sites built for agencies, solar, and energy businesses.</p>
            </div>

            <div className="projects-stack">
              {featuredProjects.map((project) => (
                <article className="project-row" key={project.slug}>
                  <div className="project-row-scale">
                    <div className="project-row-inner shimmer-card glow-card">
                      <div className="project-image">
                        <img
                          src={project.cardImage}
                          srcSet={`${project.cardImageSmall} 480w, ${project.cardImage} 900w`}
                          sizes="(max-width: 768px) 92vw, 560px"
                          alt={`${project.name} website mockup`}
                          width="800"
                          height="560"
                          loading="lazy"
                        />
                      </div>
                      <div className="project-content">
                        <span className="badge badge--industry">{project.industry}</span>
                        <h3>{project.name}</h3>
                        <p>{project.tagline}</p>
                        <Link to={`/projects/${project.slug}`} className="link-underline">View Case Study <span className="btn-arrow">→</span></Link>
                        <p className="project-outcome">{project.outcome}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="projects-cta">
              <Link to="/projects" className="btn-outline magnetic">See All Projects <span className="btn-arrow">→</span></Link>
            </div>

            <p className="self-proof" data-animate="fade-up">
              <strong>Full disclosure:</strong> this site is the React case study. React 18, Vite, React Router, and hand-rolled GSAP scroll animation — no template, no page builder.
            </p>
          </div>
        </section>

        {/* Services teaser */}
        <section className="section section--cream" id="services">
          <div className="container">
            <div className="section-header" data-animate="fade-up">
              <span className="section-label">What I Build</span>
              <h2>Two tracks. One standard of quality.</h2>
              <p className="section-sub" style={{ marginTop: 16 }}>WordPress for content-driven business sites. React for products that need real interactivity. Pick what fits — or ask, and I'll tell you honestly.</p>
            </div>

            <div className="services-list">
              {teaserServices.map((service) => (
                <div className="service-row" data-animate="fade-up" key={`${service.track}-${service.num}`}>
                  <div className="service-content">
                    <span className="service-num">{service.num}</span>
                    <span className={`badge service-track-badge ${service.track === 'React' ? 'badge--react' : 'badge--industry'}`}>{service.track}</span>
                    <h3>{service.name}</h3>
                    <p className="service-tagline">{service.tagline}</p>
                    <p className="service-desc">{service.desc}</p>
                    <ul className="service-deliverables">
                      {service.deliverables.slice(0, 4).map((d) => <li key={d}>{d}</li>)}
                    </ul>
                    <span className="timeline-chip">Timeline: {service.timeline}</span>
                  </div>
                  <div className="service-visual">
                    <img src={service.image} alt={service.imageAlt} width="900" height="675" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>

            <div className="projects-cta">
              <Link to="/services" className="btn-outline magnetic">See All Services <span className="btn-arrow">→</span></Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section section--dark">
          <div className="container">
            <div className="section-header" data-animate="fade-up">
              <span className="section-label" style={{ color: 'var(--accent-warm)' }}>How It Works</span>
              <h2>From first message to a live site or app — no confusion, no surprises.</h2>
            </div>
            <div className="process-track" data-animate="stagger">
              {[
                ['01', 'Discovery', 'We talk. I listen. Then I ask the questions most developers skip.'],
                ['02', 'Proposal', 'A clear document: scope, timeline, price. No guesswork.'],
                ['03', 'Design', 'Wireframes and visual direction you approve before a single line of code.'],
                ['04', 'Development', 'Built clean. Responsive. Fast. Tested at every stage.'],
                ['05', 'Review', 'Two rounds of revisions. Your feedback shapes everything.'],
                ['06', 'Launch', 'Domain, hosting, SSL, deployment, analytics. All set up. All working.'],
                ['07', 'Support', "I don't disappear. You get 30 days post-launch support included."],
              ].map(([num, title, desc]) => (
                <div className="process-card" key={num}>
                  <span className="step-ghost">{num}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section section--white">
          <div className="container">
            <div className="section-header section-header--center" data-animate="fade-up">
              <span className="section-label">What Clients Say</span>
              <h2>Don't take my word for it.</h2>
            </div>
            <div className="testimonials-grid" data-animate="stagger">
              <article className="testimonial-card">
                <div className="testimonial-quote" aria-hidden="true">&ldquo;</div>
                <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
                <blockquote>Neehal fixed in 3 hours what our previous developer couldn't fix in 3 weeks. Genuine, fast, and actually explains what he did.</blockquote>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar" aria-hidden="true">ST</div>
                  <div>
                    <p className="testimonial-author">Sarah T.</p>
                    <p className="testimonial-role">Owner, Bloom Florals</p>
                  </div>
                </div>
              </article>
              <article className="testimonial-card">
                <div className="testimonial-quote" aria-hidden="true">&ldquo;</div>
                <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
                <blockquote>We migrated our entire 8-year-old site and didn't lose a single page. The new version loads in under a second. Worth every penny.</blockquote>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar" aria-hidden="true">JK</div>
                  <div>
                    <p className="testimonial-author">James K.</p>
                    <p className="testimonial-role">Marketing Director, Horizon Legal</p>
                  </div>
                </div>
              </article>
              <article className="testimonial-card">
                <div className="testimonial-quote" aria-hidden="true">&ldquo;</div>
                <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
                <blockquote>I've worked with four different developers over the years. Neehal is the only one I've brought back for a second and third project.</blockquote>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar" aria-hidden="true">ML</div>
                  <div>
                    <p className="testimonial-author">Maria L.</p>
                    <p className="testimonial-role">Founder, LiftOff Coaching</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--cream">
          <div className="container">
            <div className="section-header section-header--center" data-animate="fade-up">
              <span className="section-label">Common Questions</span>
              <h2>Things clients always ask.</h2>
            </div>
            <Faq items={faqItems} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="cta-glow" aria-hidden="true"></div>
          <div className="container">
            <span className="section-label">Next step</span>
            <h2 data-animate="fade-up">Your next customer is already judging your website.</h2>
            <p className="section-sub">Most people decide in five seconds. Let's make those seconds work for you — not against you.</p>
            <div className="final-cta-actions">
              <Link to="/contact" className="btn-primary glow-btn magnetic">Book a free 20-min call <span className="btn-arrow">→</span></Link>
              <Link to="/projects" className="link-underline link-underline--light">See the work first</Link>
            </div>
            <p className="final-cta-note">No pitch deck. No pressure. Just a straight conversation about what your project needs.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
