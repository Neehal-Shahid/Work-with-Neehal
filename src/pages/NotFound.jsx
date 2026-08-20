import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <main>
      <SEO title="Page Not Found — Work With Neehal" description="This page doesn't exist." />
      <section className="page-hero page-hero--center" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <span className="section-label">404</span>
          <h1>That page went missing.</h1>
          <p className="section-sub" style={{ margin: '16px auto 32px' }}>Let's get you back to somewhere useful.</p>
          <Link to="/" className="btn-primary magnetic">Back to Home <span className="btn-arrow">→</span></Link>
          <h2 className="sr-only">Page not found</h2>
        </div>
      </section>
    </main>
  );
}
