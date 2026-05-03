import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import '../styles.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/business', label: 'Business Solutions' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.navContainer}>
        <Link to="/" style={styles.logo}>
          <Zap size={28} fill="#3b82f6" color="#3b82f6" />
          <span style={styles.logoText}>TheWorkOn</span>
        </Link>

        {/* Desktop Navigation */}
        <div style={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                ...styles.navLink,
                color: isActive(link.path) ? '#3b82f6' : '#a1a1aa',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={styles.navButtons}>
          <button className="btn btn-outline" style={styles.loginBtn}>
            Log In
          </button>
          <button className="btn btn-primary">Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          style={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                ...styles.mobileNavLink,
                color: isActive(link.path) ? '#3b82f6' : '#a1a1aa',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div style={styles.mobileNavButtons}>
            <button className="btn btn-outline" style={styles.mobileLoginBtn}>
              Log In
            </button>
            <button className="btn btn-primary" style={styles.mobileGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: 'rgba(10, 10, 10, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #27272a',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '72px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  logoText: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  desktopNav: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'color 0.2s ease',
  },
  navButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  loginBtn: {
    padding: '0.625rem 1.25rem',
  },
  mobileMenuBtn: {
    display: 'none',
    background: 'transparent',
    color: '#ffffff',
    padding: '0.5rem',
  },
  mobileMenu: {
    display: 'none',
    position: 'absolute',
    top: '72px',
    left: 0,
    right: 0,
    background: '#18181b',
    borderBottom: '1px solid #27272a',
    padding: '1.5rem',
    flexDirection: 'column',
    gap: '1rem',
  },
  mobileNavLink: {
    fontSize: '1.1rem',
    fontWeight: '500',
    padding: '0.75rem 0',
  },
  mobileNavButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginTop: '1rem',
  },
  mobileLoginBtn: {
    width: '100%',
  },
  mobileGetStarted: {
    width: '100%',
  },
};

// Add responsive styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @media (max-width: 768px) {
    .desktop-nav, .nav-buttons {
      display: none !important;
    }
    .mobile-menu-btn {
      display: block !important;
    }
    .mobile-menu {
      display: flex !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Navbar;
