import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, Zap, Building2, ArrowRight } from 'lucide-react';
import '../styles.css';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: '/month',
      description: 'Perfect for individuals exploring automation',
      features: [
        '5 workflow runs per month',
        'Basic AI workflow generation',
        '3 connected integrations',
        'Community support',
        '1GB file storage',
      ],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'For professionals who need reliable automation',
      features: [
        'Unlimited workflow runs',
        'Advanced AI with context memory',
        'Unlimited integrations',
        'Priority email support',
        '50GB file storage',
        'Scheduled workflows',
        'Custom workflow templates',
        'API access',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Business',
      price: '$199',
      period: '/month',
      description: 'For teams that need powerful automation at scale',
      features: [
        'Everything in Professional',
        'Team collaboration tools',
        'Admin dashboard & analytics',
        'Dedicated account manager',
        '500GB file storage',
        'Custom AI training',
        'SLA guarantee',
        'SSO & advanced security',
        'Audit logs',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const enterpriseFeatures = [
    'Custom deployment options',
    'On-premise installation',
    'Custom integrations development',
    'Dedicated infrastructure',
    'White-label options',
    'Training & onboarding',
  ];

  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div className="container" style={styles.heroContent}>
            <h1 style={styles.title}>
              Simple, Transparent{' '}
              <span className="gradient-text">Pricing</span>
            </h1>
            <p style={styles.subtitle}>
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section" style={styles.pricingSection}>
          <div className="container">
            <div className="grid grid-3" style={styles.pricingGrid}>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    ...styles.planCard,
                    ...(plan.popular ? styles.popularCard : {}),
                  }}
                >
                  {plan.popular && (
                    <div style={styles.popularBadge}>
                      <Zap size={16} fill="#f59e0b" color="#f59e0b" />
                      Most Popular
                    </div>
                  )}
                  <h3 style={styles.planName}>{plan.name}</h3>
                  <div style={styles.priceContainer}>
                    <span style={styles.price}>{plan.price}</span>
                    <span style={styles.period}>{plan.period}</span>
                  </div>
                  <p style={styles.planDescription}>{plan.description}</p>
                  <ul style={styles.featuresList}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} style={styles.featureItem}>
                        <Check size={18} color="#10b981" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                    style={styles.ctaButton}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="section" style={styles.enterpriseSection}>
          <div className="container">
            <div style={styles.enterpriseContent}>
              <div style={styles.enterpriseIcon}>
                <Building2 size={48} color="#3b82f6" />
              </div>
              <h2 style={styles.enterpriseTitle}>Enterprise</h2>
              <p style={styles.enterpriseDescription}>
                Need custom solutions for your organization? Our enterprise plan offers
                tailored deployments, dedicated support, and custom integrations.
              </p>
              <div className="grid grid-2" style={styles.enterpriseFeaturesGrid}>
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} style={styles.enterpriseFeature}>
                    <Check size={18} color="#10b981" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary" style={styles.enterpriseCta}>
                Contact Enterprise Sales
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={styles.faqSection}>
          <div className="container" style={styles.faqContent}>
            <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
            <div style={styles.faqGrid}>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>Can I change plans later?</h3>
                <p style={styles.faqAnswer}>
                  Yes, you can upgrade or downgrade your plan at any time. Changes take
                  effect immediately, and we'll prorate any differences.
                </p>
              </div>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>What happens if I exceed my limits?</h3>
                <p style={styles.faqAnswer}>
                  We'll notify you when you're approaching your limits. You can upgrade
                  anytime, or we offer flexible overage pricing for occasional extra usage.
                </p>
              </div>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>Is there a long-term contract?</h3>
                <p style={styles.faqAnswer}>
                  No. All plans are month-to-month with no commitment. Annual billing is
                  available with a 20% discount.
                </p>
              </div>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>Do you offer refunds?</h3>
                <p style={styles.faqAnswer}>
                  Yes, we offer a 30-day money-back guarantee. If you're not satisfied,
                  contact us within 30 days for a full refund.
                </p>
              </div>
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
    maxWidth: '600px',
    margin: '0 auto',
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
  },
  pricingSection: {
    background: '#0a0a0a',
  },
  pricingGrid: {
    marginTop: '2rem',
    alignItems: 'stretch',
  },
  planCard: {
    padding: '2.5rem',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  popularCard: {
    borderColor: '#3b82f6',
    boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)',
  },
  popularBadge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#f59e0b',
    color: '#000',
    padding: '0.375rem 1rem',
    borderRadius: '100px',
    fontSize: '0.75rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.375rem',
  },
  planName: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '0.75rem',
  },
  price: {
    fontSize: '3rem',
    fontWeight: '800',
  },
  period: {
    fontSize: '1rem',
    color: '#a1a1aa',
  },
  planDescription: {
    fontSize: '0.95rem',
    color: '#a1a1aa',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    borderBottom: '1px solid #27272a',
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 2rem 0',
    flex: 1,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    fontSize: '0.95rem',
    color: '#a1a1aa',
    marginBottom: '1rem',
  },
  ctaButton: {
    width: '100%',
    padding: '1rem',
  },
  enterpriseSection: {
    background: '#0f0f11',
  },
  enterpriseContent: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  enterpriseIcon: {
    width: '80px',
    height: '80px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 2rem',
  },
  enterpriseTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  enterpriseDescription: {
    fontSize: '1.125rem',
    color: '#a1a1aa',
    lineHeight: '1.7',
    marginBottom: '2.5rem',
  },
  enterpriseFeaturesGrid: {
    marginBottom: '2.5rem',
    textAlign: 'left',
  },
  enterpriseFeature: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1rem',
    color: '#a1a1aa',
  },
  enterpriseCta: {
    padding: '1rem 2.5rem',
    fontSize: '1.05rem',
  },
  faqSection: {
    background: '#0a0a0a',
  },
  faqContent: {
    maxWidth: '900px',
  },
  faqTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
  },
  faqItem: {
    padding: '2rem',
    background: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '12px',
  },
  faqQuestion: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
  },
  faqAnswer: {
    fontSize: '0.95rem',
    color: '#a1a1aa',
    lineHeight: '1.7',
  },
};

// Responsive styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @media (max-width: 768px) {
    .faq-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default PricingPage;
