import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollReveal from '../hooks/useScrollReveal';
import { wordpressServices, reactServices } from '../data/services';

function ServiceFull({ service, badgeClass }) {
  return (
    <article className="service-full">
      <div className="container service-full-inner" data-animate="fade-up">
        <span className={`badge service-track-badge ${badgeClass}`}>{service.track}</span>
        <h2>{service.name}</h2>
        <p className="lead">{service.tagline}</p>
        <h3>The problem I solve</h3>
        <p>{service.problem}</p>
        <h3>What you get</h3>
        <ul>
          {service.deliverables.map((d) => <li key={d}>{d}</li>)}
        </ul>
        <dl className="service-meta">
          <div><dt>Ideal for</dt><dd>{service.idealFor}</dd></div>
          <div><dt>Typical timeline</dt><dd>{service.timeline}</dd></div>
        </dl>
      </div>
    </article>
  );
}

export default function Services() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <SEO
        title="Services — Work With Neehal"
        description="React web apps and WordPress business sites, landing pages, WooCommerce, migrations, performance, and maintenance — ten services done properly."
      />

      <main>
        <section className="page-hero page-hero--center">
          <div className="container" data-animate="fade-up">
            <span className="section-label">Services</span>
            <h1>Exactly what you need.<br />Nothing you don't.</h1>
            <p className="section-sub">Two tracks — WordPress and React. I'll tell you honestly which one your project needs.</p>
          </div>
        </section>

        <div className="track-divider" data-animate="fade-up">
          <span className="section-label">Track One</span>
          <h2>WordPress</h2>
          <p className="section-sub">Content-driven business sites you can edit yourself, built properly.</p>
        </div>

        {wordpressServices.map((service) => (
          <ServiceFull key={service.name} service={{ ...service, track: 'WordPress' }} badgeClass="badge--industry" />
        ))}

        <div className="track-divider" data-animate="fade-up">
          <span className="section-label section-label--warm">Track Two</span>
          <h2>React / Frontend</h2>
          <p className="section-sub">Custom web apps and interactive products WordPress can't cleanly handle.</p>
        </div>

        {reactServices.map((service) => (
          <ServiceFull key={service.name} service={{ ...service, track: 'React' }} badgeClass="badge--react" />
        ))}

        <section className="final-cta" style={{ padding: '120px 0' }}>
          <div className="cta-glow" aria-hidden="true"></div>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(var(--text-2xl),4vw,var(--text-4xl))' }}>Not sure which one you need?</h2>
            <p className="section-sub">That's what the call is for. Bring the problem — we'll pick the right stack together.</p>
            <div className="final-cta-actions">
              <Link to="/contact" className="btn-primary glow-btn magnetic">Book a Free Call <span className="btn-arrow">→</span></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
