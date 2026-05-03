import { Monitor, Globe, Plug, Clock, FileText, Users } from 'lucide-react';
import '../styles.css';

const Features = () => {
  const features = [
    {
      icon: <Monitor size={32} color="#3b82f6" />,
      title: 'Computer Task Browser',
      description:
        'Our AI operates a real remote browser to research, extract data, log into websites, fill forms, and interact with web pages on your behalf.',
    },
    {
      icon: <Globe size={32} color="#8b5cf6" />,
      title: 'AI Workflow Generation',
      description:
        'Describe your goal in plain language. Our AI understands it, asks for missing information, and automatically builds structured workflows.',
    },
    {
      icon: <Plug size={32} color="#10b981" />,
      title: 'External Integrations',
      description:
        'Connect messaging platforms like Telegram and WhatsApp, third-party apps like Gmail, Canva, Google tools, or your own API providers.',
    },
    {
      icon: <Clock size={32} color="#f59e0b" />,
      title: 'Smart Scheduling',
      description:
        'Run workflows at specific times, set up repeating automations, or trigger actions based on events. Never miss an important task.',
    },
    {
      icon: <FileText size={32} color="#ef4444" />,
      title: 'Rich Output Generation',
      description:
        'Generate PDF reports, documents, CSV files, images, videos, and more. Upload your files and use them inside workflows seamlessly.',
    },
    {
      icon: <Users size={32} color="#3b82f6" />,
      title: 'Built-in CRM',
      description:
        'Manage leads, track activities, add notes, and schedule follow-ups. Workflows can interact with your CRM to automate business processes.',
    },
  ];

  return (
    <section className="section" style={styles.features}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>
            Everything You Need to{' '}
            <span className="gradient-text">Automate Anything</span>
          </h2>
          <p style={styles.subtitle}>
            From simple tasks to complex multi-step processes, TheWorkOn gives
            you the power to automate your entire workflow.
          </p>
        </div>

        <div className="grid grid-3" style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className="card" style={styles.featureCard}>
              <div style={styles.iconContainer}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  features: {
    background: '#0a0a0a',
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
  featuresGrid: {
    marginTop: '2rem',
  },
  featureCard: {
    padding: '2rem',
    height: '100%',
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
  },
  featureDescription: {
    fontSize: '0.95rem',
    color: '#a1a1aa',
    lineHeight: '1.7',
  },
};

export default Features;
