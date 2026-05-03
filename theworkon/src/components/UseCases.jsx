import { Mail, MessageCircle, FileUp, Calendar, BarChart3 } from 'lucide-react';
import '../styles.css';

const UseCases = () => {
  const useCases = [
    {
      icon: <Mail size={24} color="#3b82f6" />,
      category: 'Research & Data',
      examples: [
        'Research competitors and generate comparison reports',
        'Extract pricing data from multiple websites',
        'Monitor news and create daily digests',
      ],
    },
    {
      icon: <MessageCircle size={24} color="#8b5cf6" />,
      category: 'Communication',
      examples: [
        'Auto-respond to customer inquiries via WhatsApp',
        'Send personalized follow-ups on Telegram',
        'Schedule and send email campaigns',
      ],
    },
    {
      icon: <FileUp size={24} color="#10b981" />,
      category: 'Document Generation',
      examples: [
        'Create PDF reports from collected data',
        'Generate invoices and contracts',
        'Produce marketing materials with Canva',
      ],
    },
    {
      icon: <Calendar size={24} color="#f59e0b" />,
      category: 'Task Automation',
      examples: [
        'Schedule social media posts across platforms',
        'Book appointments and send reminders',
        'Run daily data backups to Google Drive',
      ],
    },
    {
      icon: <BarChart3 size={24} color="#ef4444" />,
      category: 'CRM & Sales',
      examples: [
        'Capture leads from website forms',
        'Track customer interactions automatically',
        'Schedule follow-ups based on engagement',
      ],
    },
  ];

  return (
    <section className="section" style={styles.useCases}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>
            Built for{' '}
            <span className="gradient-text">Real Business Needs</span>
          </h2>
          <p style={styles.subtitle}>
            From solo entrepreneurs to enterprise teams, TheWorkOn handles the
            tasks that keep your business running.
          </p>
        </div>

        <div className="grid grid-3" style={styles.useCasesGrid}>
          {useCases.map((useCase, index) => (
            <div key={index} className="card" style={styles.useCaseCard}>
              <div style={styles.iconContainer}>{useCase.icon}</div>
              <h3 style={styles.category}>{useCase.category}</h3>
              <ul style={styles.examplesList}>
                {useCase.examples.map((example, idx) => (
                  <li key={idx} style={styles.exampleItem}>
                    <span style={styles.bullet}></span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  useCases: {
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
  useCasesGrid: {
    marginTop: '2rem',
  },
  useCaseCard: {
    padding: '2rem',
    height: '100%',
  },
  iconContainer: {
    width: '56px',
    height: '56px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
  },
  category: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  examplesList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  exampleItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    fontSize: '0.95rem',
    color: '#a1a1aa',
    lineHeight: '1.6',
    marginBottom: '0.75rem',
  },
  bullet: {
    width: '6px',
    height: '6px',
    background: '#3b82f6',
    borderRadius: '50%',
    marginTop: '0.4rem',
    flexShrink: 0,
  },
};

export default UseCases;
