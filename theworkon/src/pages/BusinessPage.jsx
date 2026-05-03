import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Building2, Users, BarChart3, Shield, Zap, ArrowRight, Check } from 'lucide-react';
import '../styles.css';

const BusinessPage = () => {
  const solutions = [
    {
      icon: <Building2 size={32} color="#3b82f6" />,
      title: 'Enterprise Automation',
      description: 'Automate complex business processes across departments. From lead capture to customer onboarding, let AI handle the workflow.',
      features: ['Cross-department workflows', 'Custom integrations', 'Advanced permissions', 'Audit trails'],
    },
    {
      icon: <Users size={32} color="#8b5cf6" />,
      title: 'Sales & CRM',
      description: 'Capture leads, nurture prospects, and close deals faster. Our AI-powered CRM automates follow-ups and tracks every interaction.',
      features: ['Lead scoring', 'Automated follow-ups', 'Pipeline management', 'Activity tracking'],
    },
    {
      icon: <BarChart3 size={32} color="#10b981" />,
      title: 'Data & Analytics',
      description: 'Collect, process, and analyze data automatically. Generate reports, dashboards, and insights without manual work.',
      features: ['Auto data collection', 'Report generation', 'Real-time dashboards', 'Custom metrics'],
    },
    {
      icon: <Shield size={32} color="#f59e0b" />,
      title: 'Compliance & Security',
      description: 'Maintain compliance with automated documentation, audit logs, and security protocols built into every workflow.',
      features: ['Automated compliance checks', 'Detailed audit logs', 'Data encryption', 'Access controls'],
    },
  ];

  const industries = [
    { name: 'Financial Services', useCase: 'Automate loan processing, KYC verification, and compliance reporting' },
    { name: 'Healthcare', useCase: 'Streamline patient intake, appointment scheduling, and insurance verification' },
    { name: 'E-commerce', useCase: 'Handle order processing, inventory updates, and customer communications' },
    { name: 'Real Estate', useCase: 'Manage lead qualification, property research, and document generation' },
    { name: 'Marketing Agencies', useCase: 'Automate campaign execution, content creation, and performance reporting' },
    { name: 'Legal Services', useCase: 'Process contracts, conduct legal research, and manage case documentation' },
  ];

  const stats = [
    { value: '10M+', label: 'Workflows Executed' },
    { value: '500+', label: 'Enterprise Customers' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '40hrs', label: 'Saved Per User/Month' },
  ];

  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div className="container" style={styles.heroContent}>
            <div style={styles.badge}>
              <Building2 size={16} color="#3b82f6" />
              <span>For Organizations</span>
            </div>
            <h1 style={styles.title}>
              Business Solutions That{' '}
              <span className="gradient-text">Scale With You</span>
            </h1>
            <p style={styles.subtitle}>
              Empower your team with AI-driven automation. From startups to enterprises,
              TheWorkOn helps organizations of all sizes achieve more with less effort.
            </p>
            <div style={styles.ctaButtons}>
              <button className="btn btn-primary">
                Talk to Sales
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline">View Case Studies</button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={styles.statsSection}>
          <div className="container">
            <div className="grid grid-4" style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} style={styles.statCard}>
                  <div style={styles.statValue}>{stat.value}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="section" style={styles.solutionsSection}>
          <div className="container">
            <h2 style={styles.sectionTitleCenter}>Solutions for Every Need</h2>
            <div className="grid grid-2" style={styles.solutionsGrid}>
              {solutions.map((solution, index) => (
                <div key={index} className="card" style={styles.solutionCard}>
                  <div style={styles.iconContainer}>{solution.icon}</div>
                  <h3 style={styles.solutionTitle}>{solution.title}</h3>
                  <p style={styles.solutionDescription}>{solution.description}</p>
                  <ul style={styles.solutionFeatures}>
                    {solution.features.map((feature, idx) => (
                      <li key={idx} style={styles.solutionFeature}>
                        <Check size={16} color="#10b981" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="section" style={styles.industriesSection}>
          <div className="container">
            <h2 style={styles.sectionTitleCenter}>Trusted Across Industries</h2>
            <div className="grid grid-3" style={styles.industriesGrid}>
              {industries.map((industry, index) => (
                <div key={index} className="card" style={styles.industryCard}>
                  <h3 style={styles.industryName}>{industry.name}</h3>
                  <p style={styles.industryUseCase}>{industry.useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="section" style={styles.enterpriseSection}>
          <div className="container">
            <div style={styles.enterpriseContent}>
              <div style={styles.enterpriseText}>
                <h2 style={styles.enterpriseTitle}>
                  Enterprise-Ready Platform
                </h2>
                <p style={styles.enterpriseDescription}>
                  Built for organizations that demand security, scalability, and support.
                  Our enterprise plan includes everything you need to deploy automation
                  across your entire organization.
                </p>
                <div style={styles.enterpriseFeaturesList}>
                  {[
                    'Single Sign-On (SSO) & SAML',
                    'Role-based access control',
                    'Custom data retention policies',
                    'Dedicated infrastructure options',
                    '24/7 priority support',
                    'Custom training & onboarding',
                    'SLA guarantees',
                    'Advanced analytics & reporting',
                  ].map((feature, index) => (
                    <div key={index} style={styles.enterpriseFeature}>
                      <Zap size={18} color="#3b82f6" fill="#3b82f6" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-primary" style={styles.enterpriseCta}>
                  Request Enterprise Demo
                  <ArrowRight size={20} />
                </button>
              </div>
              <div style={styles.enterpriseVisual}>
                <div style={styles.visualCard}>
                  <div style={styles.visualHeader}>
                    <Shield size={24} color="#10b981" />
                    <span>Security & Compliance</span>
                  </div>
                  <div style={styles.visualBody}>
                    <div style={styles.securityItem}>
                      <Check size={16} color="#10b981" />
                      <span>SOC 2 Type II Certified</span>
                    </div>
                    <div style={styles.securityItem}>
                      <Check size={16} color="#10b981" />
                      <span>GDPR Compliant</span>
                    </div>
                    <div style={styles.securityItem}>
                      <Check size={16} color="#10b981" />
                      <span>End-to-end Encryption</span>
                    </div>
                    <div style={styles.securityItem}>
                      <Check size={16} color="#10b981" />
                      <span>99.9% Uptime SLA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={styles.ctaSection}>
          <div className="container" style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Transform Your Business?</h2>
            <p style={styles.ctaSubtitle}>
              See how TheWorkOn can help your organization save time, reduce costs,
              and accelerate growth.
            </p>
            <div style={styles.ctaButtons}>
              <button className="btn btn-primary">
                Schedule a Demo
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    paddingTop: '72px',
  },
  heroSection: {
    background: '#0f0f11',
    padding: '6rem 0',
    borderBottom: '1px solid #27272a',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
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
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  statsSection: {
    background: '#0a0a0a',
    padding: '3rem 0',
    borderBottom: '1px solid #27272a',
  },
  statsGrid: {
    textAlign: 'center',
  },
  statCard: {
    padding: '1.5rem',
  },
  statValue: {
    fontSize: '2.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '0.95rem',
    color: '#a1a1aa',
  },
  sectionTitleCenter: {
    fontSize: '2.5rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '3rem',
    letterSpacing: '-0.02em',
  },
  solutionsSection: {
    background: '#0f0f11',
  },
  solutionsGrid: {
    marginTop: '2rem',
  },
  solutionCard: {
    padding: '2.5rem',
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
  solutionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
  },
  solutionDescription: {
    fontSize: '1rem',
    color: '#a1a1aa',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
  },
  solutionFeatures: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  solutionFeature: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.95rem',
    color: '#a1a1aa',
    marginBottom: '0.75rem',
  },
  industriesSection: {
    background: '#0a0a0a',
  },
  industriesGrid: {
    marginTop: '2rem',
  },
  industryCard: {
    padding: '2rem',
    height: '100%',
  },
  industryName: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
  },
  industryUseCase: {
    fontSize: '0.95rem',
    color: '#a1a1aa',
    lineHeight: '1.6',
  },
  enterpriseSection: {
    background: '#0f0f11',
  },
  enterpriseContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  enterpriseText: {},
  enterpriseTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em',
  },
  enterpriseDescription: {
    fontSize: '1.125rem',
    color: '#a1a1aa',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  enterpriseFeaturesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2.5rem',
  },
  enterpriseFeature: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1rem',
    color: '#a1a1aa',
  },
  enterpriseCta: {
    padding: '1rem 2rem',
    fontSize: '1.05rem',
  },
  enterpriseVisual: {},
  visualCard: {
    background: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '16px',
    padding: '2rem',
  },
  visualHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem',
    fontSize: '1.125rem',
    fontWeight: '600',
  },
  visualBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  securityItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.95rem',
    color: '#a1a1aa',
  },
  ctaSection: {
    background: '#0a0a0a',
  },
  ctaContent: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  ctaSubtitle: {
    fontSize: '1.125rem',
    color: '#a1a1aa',
    lineHeight: '1.7',
    marginBottom: '2.5rem',
  },
};

// Responsive styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @media (max-width: 1024px) {
    .enterprise-content {
      grid-template-columns: 1fr !important;
    }
  }
  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    .solutions-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default BusinessPage;
