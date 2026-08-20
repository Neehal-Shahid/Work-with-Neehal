import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollReveal from '../hooks/useScrollReveal';
import useTilt from '../hooks/useTilt';
import projects from '../data/projects';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'agency', label: 'Agency' },
  { key: 'solar', label: 'Solar' },
  { key: 'energy', label: 'Energy' },
];

export default function Projects() {
  const rootRef = useRef(null);
  const [filter, setFilter] = useState('all');
  useScrollReveal(rootRef);
  useTilt(rootRef, '.masonry-card');

  const visible = projects.filter((p) => filter === 'all' || p.category === filter);

  return (
    <div ref={rootRef}>
      <SEO
        title="Projects — Work With Neehal"
        description="Real WordPress projects for agencies, solar, and energy businesses — React case studies coming soon."
      />

      <main>
        <section className="page-hero">
          <div className="container" data-animate="fade-up">
            <span className="section-label">Projects</span>
            <h1>Work that works.</h1>
            <p className="section-sub" style={{ marginTop: 16 }}>Four live WordPress projects across four different businesses. React case studies are on the way.</p>
          </div>
        </section>

        <section className="section section--cream">
          <div className="container">
            <div className="filter-tabs" role="tablist" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={`filter-tab${filter === f.key ? ' is-active' : ''}`}
                  data-filter={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="projects-masonry">
              {visible.map((project) => (
                <Link
                  to={`/projects/${project.slug}`}
                  className="masonry-card glow-card"
                  data-category={project.category}
                  key={project.slug}
                >
                  <span className="masonry-chip">{project.industry}</span>
                  <img
                    src={project.cardImage}
                    alt={`${project.name} website`}
                    width={project.cardWidth}
                    height={project.cardHeight}
                    loading="lazy"
                  />
                  <div className="masonry-overlay"><h3>{project.name}</h3></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
