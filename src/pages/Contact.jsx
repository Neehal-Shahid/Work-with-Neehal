import { useRef, useState } from 'react';
import SEO from '../components/SEO';
import useScrollReveal from '../hooks/useScrollReveal';

const WEB3FORMS_ACCESS_KEY = 'b51a245f-58dc-4f8b-8f6d-6a16bcb4c28f';

const FIELD_RULES = {
  name: { required: true, message: 'Please enter your name.' },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Enter a valid email address.',
  },
  need: { required: true, message: 'Please select what you need.' },
  message: { required: true, message: 'Tell me a bit about your project.' },
};

function validate(values) {
  const errors = {};
  Object.entries(FIELD_RULES).forEach(([id, rules]) => {
    const value = (values[id] || '').trim();
    let ok = true;
    if (rules.required && !value) ok = false;
    if (ok && rules.pattern && value && !rules.pattern.test(value)) ok = false;
    if (!ok) errors[id] = rules.message;
  });
  return errors;
}

export default function Contact() {
  const rootRef = useRef(null);
  useScrollReveal(rootRef);

  const [values, setValues] = useState({ name: '', email: '', website: '', need: '', message: '' });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message }
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, ...validate({ ...values, [name]: value }) }));
    }
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, ...validate(values) }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, need: true, message: true });
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setStatus(null);

    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('subject', 'New inquiry from Work With Neehal');
      formData.append('from_name', 'Work With Neehal Portfolio');
      Object.entries(values).forEach(([key, val]) => formData.append(key, val));

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }

      setValues({ name: '', email: '', website: '', need: '', message: '' });
      setTouched({});
      setErrors({});
      setSent(true);
      setStatus({ type: 'success', message: "Got it. I'll reply within one business day." });

      setTimeout(() => {
        setSent(false);
        setStatus(null);
      }, 5000);
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Could not send. Email me at workwithneehal@gmail.com instead.',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div ref={rootRef} className="contact-page">
      <SEO
        title="Contact — Work With Neehal"
        description="Tell me about your React app or WordPress website. I'll reply within one business day — usually faster."
      />

      <main>
        <section className="page-hero page-hero--center">
          <div className="container" data-animate="fade-up">
            <h1>Let's figure out what your project should do.</h1>
            <p className="section-sub">Fill in the form and I'll reply within one business day — usually faster.</p>
          </div>
        </section>

        <section className="section section--cream contact-section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="contact-grid">
              <form id="contact-form" noValidate data-animate="fade-up" onSubmit={handleSubmit}>
                <input type="checkbox" name="botcheck" className="form-honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true" />

                <div className={`form-group${errors.name ? ' has-error' : ''}`}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    className={errors.name ? 'is-error' : undefined}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="form-error" role="alert">{errors.name || ''}</p>
                </div>

                <div className={`form-group${errors.email ? ' has-error' : ''}`}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className={errors.email ? 'is-error' : undefined}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="form-error" role="alert">{errors.email || ''}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="website">Website URL <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span></label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    placeholder="yoursite.com or leave blank"
                    value={values.website}
                    onChange={handleChange}
                  />
                </div>

                <div className={`form-group${errors.need ? ' has-error' : ''}`}>
                  <label htmlFor="need">What do you need?</label>
                  <select
                    id="need"
                    name="need"
                    required
                    className={errors.need ? 'is-error' : undefined}
                    value={values.need}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select one…</option>
                    <option>New WordPress Website</option>
                    <option>React Web App</option>
                    <option>Landing Page</option>
                    <option>WooCommerce Store</option>
                    <option>Frontend Modernization</option>
                    <option>Migration</option>
                    <option>Performance Fix</option>
                    <option>Maintenance</option>
                    <option>Something Else</option>
                  </select>
                  <p className="form-error" role="alert">{errors.need || ''}</p>
                </div>

                <div className={`form-group${errors.message ? ' has-error' : ''}`}>
                  <label htmlFor="message">Tell me about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What does your business do? What's not working? What would success look like? You don't need to have all the answers — just start."
                    required
                    className={errors.message ? 'is-error' : undefined}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="form-error" role="alert">{errors.message || ''}</p>
                </div>

                {status && (
                  <p className={`form-status form-status--${status.type}`} role="status" aria-live="polite">
                    {status.message}
                  </p>
                )}

                <button type="submit" className="btn-primary magnetic" disabled={submitting}>
                  {submitting ? 'Sending…' : sent ? "Sent — I'll reply soon" : 'Send it'}
                  {!submitting && <span className="btn-arrow">→</span>}
                </button>
              </form>

              <aside className="glass-card expect-card shimmer-card" data-animate="fade-up">
                <h3>After you send this</h3>
                <ul>
                  <li>I'll read it properly (not skim it)</li>
                  <li>I'll reply within one business day</li>
                  <li>If it's a fit, I'll suggest a free call</li>
                  <li>No sales pressure. No package-pushing.</li>
                </ul>
              </aside>
            </div>

            <div className="contact-alts" data-animate="stagger">
              <a href="mailto:workwithneehal@gmail.com" className="contact-alt hoverable">
                <span className="contact-alt-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </span>
                <strong>Email</strong>
                <span>Prefer writing? workwithneehal@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-neehal" className="contact-alt hoverable" target="_blank" rel="noopener noreferrer">
                <span className="contact-alt-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </span>
                <strong>LinkedIn</strong>
                <span>See my professional profile.</span>
              </a>
              <a href="https://www.upwork.com/freelancers/~0120b83d0374ed789b?mp_source=share" className="contact-alt hoverable" target="_blank" rel="noopener noreferrer">
                <span className="contact-alt-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
                </span>
                <strong>Upwork</strong>
                <span>Hire me on Upwork.</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
