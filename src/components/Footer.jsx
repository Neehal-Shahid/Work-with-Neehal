import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/images/logo.webp" alt="Work With Neehal" width="140" height="36" />
            <p>Websites and web apps that earn their keep — WordPress and React work built for owners who want results, not just polish.</p>
          </div>
          <div className="footer-col">
            <h3>Navigate</h3>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h3>Connect</h3>
            <a href="mailto:workwithneehal@gmail.com">workwithneehal@gmail.com</a>
            <a href="https://www.linkedin.com/in/muhammad-neehal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.upwork.com/freelancers/~0120b83d0374ed789b?mp_source=share" target="_blank" rel="noopener noreferrer">Upwork</a>
            <Link to="/contact">Book a call</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Work With Neehal. All rights reserved.</span>
          <span>Karachi, PK · Available worldwide</span>
        </div>
      </div>
    </footer>
  );
}
