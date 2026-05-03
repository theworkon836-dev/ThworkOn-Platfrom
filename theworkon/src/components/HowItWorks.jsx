import { ArrowRight, CheckCircle } from 'lucide-react';
import '../styles.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Describe Your Goal',
      description:
        'Tell TheWorkOn what you want to achieve in plain language. Be as detailed or brief as you like.',
      example: '"Find the top 20 AI startups funded in 2024 and create a spreadsheet"',
    },
    {
      number: '02',
      title: 'AI Plans the Workflow',
      description:
        'Our AI understands your request, asks clarifying questions if needed, and builds a structured workflow automatically.',
      example: 'Workflow created: Research → Extract Data → Organize → Generate CSV',
    },
    {
      number: '03',
      title: 'Execute & Get Results',
      description:
        'The system executes your workflow using our Computer Task Browser and connected tools, delivering real results.',
      example: '✓ Researched 50+ sources ✓ Extracted key data ✓ Generated downloadable CSV',
    },
  ];

  return (
    <section className="section" style={styles.howItWorks}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>
            From Idea to Done in{' '}
            <span className="gradient-text">Three Simple Steps</span>
          </h2>
          <p style={styles.subtitle}>
            No coding required. No complex setup. Just describe what you need,
            and watch TheWorkOn make it happen.
          </p>
        </div>

        <div style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} style={styles.stepCard}>
              <div style={styles.stepHeader}>
                <span style={styles.stepNumber}>{step.number}</span>
                <h3 style={styles.stepTitle}>{step.title}</h3>
              </div>
              <p style={styles.stepDescription}>{step.description}</p>
              <div style={styles.exampleBox}>
                <CheckCircle size={16} color="#10b981" />
                <span style={styles.exampleText}>{step.example}</span>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight size={24} color="#3b82f6" style={styles.arrow} />
              )}
            </div>
          ))}
        </div>

        <div style={styles.ctaContainer}>
          <button className="btn btn-primary" style={styles.ctaBtn}>
            Try It Now — It's Free
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  howItWorks: {
    background: '#0f0f11',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#a1a1aa',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.7',
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  stepCard: {
    background: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '16px',
    padding: '2.5rem',
    position: 'relative',
  },
  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '1.5rem',
  },
  stepNumber: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#3b82f6',
    fontFamily: 'monospace',
  },
  stepTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
  },
  stepDescription: {
    fontSize: '1rem',
    color: '#a1a1aa',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
  },
  exampleBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '8px',
    padding: '1rem 1.25rem',
  },
  exampleText: {
    fontSize: '0.95rem',
    color: '#10b981',
    fontWeight: '500',
  },
  arrow: {
    alignSelf: 'center',
    marginTop: '1rem',
    opacity: 0.5,
  },
  ctaContainer: {
    textAlign: 'center',
    marginTop: '4rem',
  },
  ctaBtn: {
    padding: '1rem 2.5rem',
    fontSize: '1.05rem',
  },
};

// Responsive styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @media (min-width: 768px) {
    .steps-container-desktop {
      flex-direction: row !important;
      align-items: stretch;
    }
    .step-card-desktop {
      flex: 1;
    }
    .arrow-desktop {
      transform: rotate(0deg) !important;
      margin-top: 0 !important;
      align-self: center !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default HowItWorks;
