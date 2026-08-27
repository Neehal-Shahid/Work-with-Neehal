import { useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollReveal from '../hooks/useScrollReveal';
import { getProject } from '../data/projects';
import { projectSeo, absoluteUrl } from '../data/seo';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  const rootRef = useRef(null);
  useScrollReveal(rootRef);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const seo = projectSeo(project);

  return (
    <div ref={rootRef}>
      <SEO
        title={seo.title}
        description={seo.description}
        image={seo.image}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Projects', item: absoluteUrl('/projects') },
            { '@type': 'ListItem', position: 3, name: project.name, item: absoluteUrl(seo.path) },
          ],
        }}
      />

      <main>
        <section className="page-hero">
          <div className="container" data-animate="fade-up">
            <Link to="/projects" className="breadcrumb-link">← All Projects</Link>
            <span className="badge badge--industry" style={{ marginTop: 16 }}>{project.industry}</span>
            <h1 style={{ marginTop: 20 }}>{project.name}</h1>
            <p className="section-sub" style={{ marginTop: 16 }}>{project.tagline}</p>
            <p style={{ marginTop: 20 }}>
              <a href={project.liveUrl} className="btn-outline magnetic" target="_blank" rel="noopener noreferrer">
                Visit Live Site <span className="btn-arrow">→</span>
              </a>
            </p>
            <div className="project-hero-mock" data-animate="image">
              <img src={project.cardImage} alt={`${project.name} website mockup`} width="1400" height="800" loading="eager" />
            </div>
          </div>
        </section>

        <section className="challenge-section">
          <div className="container" data-animate="fade-up">
            <span className="section-label">The Challenge</span>
            <h2 style={{ marginBottom: 24, fontSize: 'clamp(var(--text-2xl),4vw,var(--text-3xl))' }}>What the business needed.</h2>
            {project.challenge.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        <section className="section section--white">
          <div className="container" data-animate="fade-up">
            <span className="section-label">The Approach</span>
            <h2 style={{ marginBottom: 24 }}>How it was solved.</h2>
            <div className="prose-block">
              {project.approach.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        <section className="section section--cream section--tight">
          <div className="container" data-animate="fade-up">
            <span className="section-label">Tools Used</span>
            <h2 style={{ marginBottom: 24, fontSize: 'var(--text-2xl)' }}>Stack for this project.</h2>
            <div className="tools-row">
              {project.tools.map((tool) => <span className="chip" key={tool}>{tool}</span>)}
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div className="container" data-animate="fade-up">
            <span className="section-label">Process</span>
            <h2 style={{ marginBottom: 32 }}>Key moments.</h2>
            <div className="mini-timeline" data-animate="stagger">
              {project.process.map((step, i) => (
                <div className="mini-step" key={step.title}>
                  <div className="num">{String(i + 1).padStart(2, '0')}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--cream">
          <div className="container" data-animate="fade-up">
            <span className="section-label">Gallery</span>
            <h2 style={{ marginBottom: 32 }}>Visual snapshots.</h2>
            <div className="gallery-grid">
              <div className="gallery-main"><img src={project.desktopImage} alt={`${project.name} desktop website mockup`} width="1000" height="600" loading="lazy" /></div>
              <div className="gallery-side"><img src={project.cardImage} alt={`${project.name} featured mockup`} width="800" height="400" loading="lazy" /></div>
              <div className="gallery-side"><img src={project.mobileImage} alt={`${project.name} mobile website mockup`} width="800" height="400" loading="lazy" /></div>
            </div>
            <div className="mobile-mocks">
              <div className="mobile-frame"><img src={project.mobileImage} alt={`${project.name} on mobile`} width="200" height="400" loading="lazy" /></div>
              <div className="mobile-frame"><img src={project.cardImage} alt={`${project.name} featured view`} width="200" height="400" loading="lazy" /></div>
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div className="container" data-animate="fade-up">
            <span className="section-label">Results</span>
            <h2 style={{ marginBottom: 32 }}>What stood out.</h2>
            <div className="results-grid" data-animate="stagger">
              {project.results.map((r) => (
                <div className="result-card" key={r.label}><strong>{r.label}</strong><span>{r.value}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="container">
            <Link to={`/projects/${project.nextSlug}`}>Next: {project.nextLabel} <span className="btn-arrow">→</span></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
