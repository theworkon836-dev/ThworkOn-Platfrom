import { Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Integrations', href: '/#integrations' },
      { label: 'API', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
    Solutions: [
      { label: 'Business', href: '/business' },
      { label: 'Enterprise', href: '#' },
      { label: 'Startups', href: '#' },
      { label: 'Agencies', href: '#' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Tutorials', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Support', href: '#' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  };

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.footerContent}>
        <div style={styles.topSection}>
          <div style={styles.brand}>
            <Link to="/" style={styles.logo}>
              <Zap size={28} fill="#3b82f6" color="#3b82f6" />
              <span style={styles.logoText}>TheWorkOn</span>
            </Link>
            <p style={styles.brandDescription}>
              AI-powered workflow automation that turns your ideas into real work
              done. Describe what you need, and watch it happen.
            </p>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" style={styles.socialLink} aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" style={styles.socialLink} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div className="grid grid-4" style={styles.linksGrid}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} style={styles.linkColumn}>
                <h4 style={styles.categoryTitle}>{category}</h4>
                <ul style={styles.linksList}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} style={styles.linkLabel}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.bottomSection}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} TheWorkOn. All rights reserved.
          </p>
          <div style={styles.legalLinks}>
            <a href="#" style={styles.legalLink}>Privacy Policy</a>
            <a href="#" style={styles.legalLink}>Terms of Service</a>
            <a href="#" style={styles.legalLink}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#050505',
    borderTop: '1px solid #27272a',
    paddingTop: '5rem',
    paddingBottom: '2rem',
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    marginBottom: '4rem',
  },
  brand: {
    maxWidth: '350px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '1.25rem',
  },
  logoText: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  brandDescription: {
    fontSize: '0.95rem',
    color: '#a1a1aa',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    background: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '8px',
    color: '#a1a1aa',
    transition: 'all 0.2s ease',
  },
  linksGrid: {
    flex: 1,
  },
  linkColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  categoryTitle: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '1.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  linksList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  linkLabel: {
    fontSize: '0.95rem',
    color: '#a1a1aa',
    transition: 'color 0.2s ease',
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '2rem',
    borderTop: '1px solid #27272a',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copyright: {
    fontSize: '0.875rem',
    color: '#71717a',
  },
  legalLinks: {
    display: 'flex',
    gap: '2rem',
  },
  legalLink: {
    fontSize: '0.875rem',
    color: '#71717a',
    transition: 'color 0.2s ease',
  },
};

// Responsive styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @media (min-width: 768px) {
    .footer-top-section {
      flex-direction: row !important;
    }
    .footer-brand {
      max-width: 300px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Footer;
