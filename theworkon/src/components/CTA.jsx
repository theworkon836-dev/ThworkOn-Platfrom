import { Zap, ArrowRight } from 'lucide-react';
import '../styles.css';

const CTA = () => {
  return (
    <section className="section" style={styles.cta}>
      <div className="container" style={styles.ctaContent}>
        <div style={styles.glow}></div>
        
        <div style={styles.content}>
          <Zap size={48} color="#3b82f6" fill="#3b82f6" style={styles.icon} />
          
          <h2 style={styles.title}>
            Ready to Automate Your Work?
          </h2>
          
          <p style={styles.subtitle}>
            Join thousands of users who are saving hours every week with TheWorkOn.
            Start building your first workflow in minutes.
          </p>
          
          <div style={styles.buttons}>
            <button className="btn btn-primary" style={styles.primaryBtn}>
              Get Started Free
              <ArrowRight size={20} />
            </button>
            <button className="btn btn-outline" style={styles.secondaryBtn}>
              Talk to Sales
            </button>
          </div>
          
          <p style={styles.note}>
            No credit card required • Free tier available • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  cta: {
    position: 'relative',
    overflow: 'hidden',
  },
  ctaContent: {
    position: 'relative',
    zIndex: 10,
  },
  glow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '800px',
    background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(80px)',
  },
  content: {
    textAlign: 'center',
    background: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '24px',
    padding: '5rem 3rem',
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
  },
  icon: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#a1a1aa',
    lineHeight: '1.7',
    marginBottom: '2.5rem',
    maxWidth: '600px',
    margin: '0 auto 2.5rem',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
  },
  primaryBtn: {
    padding: '1rem 2.5rem',
    fontSize: '1.05rem',
  },
  secondaryBtn: {
    padding: '1rem 2.5rem',
    fontSize: '1.05rem',
  },
  note: {
    fontSize: '0.875rem',
    color: '#71717a',
  },
};

export default CTA;
