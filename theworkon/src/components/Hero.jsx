import { Zap, ArrowRight, Bot, Workflow, Globe, Cpu } from 'lucide-react';
import '../styles.css';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div className="container" style={styles.heroContent}>
        <div style={styles.badge}>
          <Zap size={16} color="#3b82f6" fill="#3b82f6" />
          <span>AI-Powered Workflow Automation</span>
        </div>

        <h1 style={styles.title}>
          Turn Your Ideas Into{' '}
          <span className="gradient-text">Real Work Done</span>
        </h1>

        <p style={styles.subtitle}>
          TheWorkOn is an AI workflow automation platform that transforms your
          simple instructions into executed tasks. Describe what you want to
          achieve, and our system will understand, plan, and complete the work
          for you.
        </p>

        <div style={styles.ctaButtons}>
          <button className="btn btn-primary" style={styles.ctaBtn}>
            Start Automating Now
            <ArrowRight size={20} />
          </button>
          <button className="btn btn-secondary">Watch Demo</button>
        </div>

        <div style={styles.heroVisual}>
          <div style={styles.visualCard}>
            <div style={styles.visualHeader}>
              <Bot size={24} color="#3b82f6" />
              <span>Your AI Assistant</span>
            </div>
            <div style={styles.visualBody}>
              <div style={styles.userMessage}>
                "Research top 10 SaaS companies and create a comparison report"
              </div>
              <div style={styles.aiResponse}>
                <div style={styles.aiSteps}>
                  <div style={styles.step}>
                    <Workflow size={16} color="#10b981" />
                    <span>Creating workflow...</span>
                  </div>
                  <div style={styles.step}>
                    <Globe size={16} color="#3b82f6" />
                    <span>Browsing company websites...</span>
                  </div>
                  <div style={styles.step}>
                    <Cpu size={16} color="#8b5cf6" />
                    <span>Extracting data & generating report...</span>
                  </div>
                </div>
                <div style={styles.progressContainer}>
                  <div style={styles.progressBar}></div>
                </div>
                <span style={styles.progressText}>75% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div style={styles.gradient1}></div>
      <div style={styles.gradient2}></div>
    </section>
  );
};

const styles = {
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '120px',
    paddingBottom: '80px',
    overflow: 'hidden',
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '900px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '100px',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    color: '#a1a1aa',
    marginBottom: '2rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#a1a1aa',
    lineHeight: '1.7',
    marginBottom: '2.5rem',
    maxWidth: '700px',
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '4rem',
  },
  ctaBtn: {
    padding: '1rem 2rem',
    fontSize: '1rem',
  },
  heroVisual: {
    marginTop: '3rem',
  },
  visualCard: {
    background: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5)',
  },
  visualHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
  },
  visualBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  userMessage: {
    background: '#27272a',
    borderRadius: '12px',
    padding: '1.25rem',
    fontSize: '0.95rem',
    color: '#ffffff',
  },
  aiResponse: {
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '12px',
    padding: '1.25rem',
  },
  aiSteps: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginBottom: '1rem',
  },
  step: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.875rem',
    color: '#a1a1aa',
  },
  progressContainer: {
    height: '4px',
    background: '#27272a',
    borderRadius: '2px',
    overflow: 'hidden',
    marginBottom: '0.5rem',
  },
  progressBar: {
    width: '75%',
    height: '100%',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    borderRadius: '2px',
    animation: 'pulse 2s infinite',
  },
  progressText: {
    fontSize: '0.75rem',
    color: '#71717a',
  },
  gradient1: {
    position: 'absolute',
    top: '-20%',
    right: '-10%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
  },
  gradient2: {
    position: 'absolute',
    bottom: '-20%',
    left: '-10%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
  },
};

// Add keyframes
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;
document.head.appendChild(styleSheet);

export default Hero;
