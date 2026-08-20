import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const navLinkClass = ({ isActive }) => (isActive ? 'is-active' : undefined);

  return (
    <>
      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}${isOpen ? ' nav-open' : ''}`}>
        <div className="container nav">
          <NavLink to="/" className="nav-logo" aria-label="Work With Neehal home">
            <img src="/assets/images/logo.png" alt="Work With Neehal" width="160" height="40" />
          </NavLink>
          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-cta">
            <NavLink to="/contact" className="btn-primary btn-sm magnetic">
              Book a Call <span className="btn-arrow">→</span>
            </NavLink>
            <button
              className={`nav-toggle${isOpen ? ' is-open' : ''}`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              type="button"
              onClick={() => setIsOpen((v) => !v)}
            >
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-overlay${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen}>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end}>
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/contact" className="btn-primary" style={{ marginTop: 32, width: 'fit-content' }}>
          Book a Call →
        </NavLink>
      </div>
    </>
  );
}
