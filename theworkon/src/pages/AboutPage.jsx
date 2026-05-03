import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Target, Lightbulb, Rocket } from 'lucide-react';
import '../styles.css';

const AboutPage = () => {
  const values = [
    {
      icon: <Target size={32} color="#3b82f6" />,
      title: 'Execution First',
      description: 'We believe in results, not just promises. Every feature we build is designed to help you get real work done.',
    },
    {
      icon: <Lightbulb size={32} color="#8b5cf6" />,
      title: 'Intelligent Automation',
      description: 'Our AI doesn\'t just follow scripts—it understands context, asks questions, and adapts to your needs.',
    },
    {
      icon: <Rocket size={32} color="#10b981" />,
      title: 'Built for Scale',
      description: 'From individual users to enterprise teams, our platform grows with your automation needs.',
    },
  ];

  const team = [
    { name: 'Alex Chen', role: 'CEO & Co-Founder', bio: 'Previously led AI research at major tech companies' },
    { name: 'Sarah Miller', role: 'CTO & Co-Founder', bio: 'Expert in distributed systems and browser automation' },
    { name: 'David Park', role: 'Head of Product', bio: 'Former product lead at workflow automation startups' },
  ];

  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div className="container" style={styles.heroContent}>
            <h1 style={styles.title}>
              Building the Future of{' '}
              <span className="gradient-text">Work Automation</span>
            </h1>
            <p style={styles.subtitle}>
              TheWorkOn was founded with a simple mission: make powerful automation 
              accessible to everyone. We're turning complex workflows into simple 
              conversations.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section" style={styles.missionSection}>
          <div className="container">
            <div style={styles.missionContent}>
              <h2 style={styles.sectionTitle}>Our Mission</h2>
              <p style={styles.missionText}>
                We live in an age where technology can do incredible things, yet most 
                people still spend hours on repetitive tasks that could be automated. 
                TheWorkOn exists to change that.
              </p>
              <p style={styles.missionText}>
                Our platform combines advanced AI with practical execution capabilities. 
                Unlike chatbots that only talk, TheWorkOn actually does the work—researching, 
                extracting data, generating reports, managing communications, and connecting 
                all your tools seamlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section" style={styles.valuesSection}>
          <div className="container">
            <h2 style={styles.sectionTitleCenter}>Our Values</h2>
            <div className="grid grid-3" style={styles.valuesGrid}>
              {values.map((value, index) => (
                <div key={index} className="card" style={styles.valueCard}>
                  <div style={styles.iconContainer}>{value.icon}</div>
                  <h3 style={styles.valueTitle}>{value.title}</h3>
                  <p style={styles.valueDescription}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section" style={styles.teamSection}>
          <div className="container">
            <h2 style={styles.sectionTitleCenter}>Meet the Team</h2>
            <div className="grid grid-3" style={styles.teamGrid}>
              {team.map((member, index) => (
                <div key={index} className="card" style={styles.teamCard}>
                  <div style={styles.avatarPlaceholder}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 style={styles.memberName}>{member.name}</h3>
                  <p style={styles.memberRole}>{member.role}</p>
                  <p style={styles.memberBio}>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={styles.ctaSection}>
          <div className="container" style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Join Us on This Journey</h2>
            <p style={styles.ctaSubtitle}>
              Whether you're looking to automate your work or join our team, 
              we'd love to hear from you.
            </p>
            <div style={styles.ctaButtons}>
              <button className="btn btn-primary">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline">View Careers</button>
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
  },
  heroContent: {
    maxWidth: '800px',
    textAlign: 'center',
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
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '2rem',
    letterSpacing: '-0.02em',
  },
  sectionTitleCenter: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '3rem',
    textAlign: 'center',
    letterSpacing: '-0.02em',
  },
  missionSection: {
    background: '#0a0a0a',
  },
  missionContent: {
    maxWidth: '800px',
  },
  missionText: {
    fontSize: '1.125rem',
    color: '#a1a1aa',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  },
  valuesSection: {
    background: '#0f0f11',
  },
  valuesGrid: {
    marginTop: '2rem',
  },
  valueCard: {
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
  valueTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
  },
  valueDescription: {
    fontSize: '0.95rem',
    color: '#a1a1aa',
    lineHeight: '1.7',
  },
  teamSection: {
    background: '#0a0a0a',
  },
  teamGrid: {
    marginTop: '2rem',
  },
  teamCard: {
    padding: '2rem',
    textAlign: 'center',
  },
  avatarPlaceholder: {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  memberName: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  memberRole: {
    fontSize: '0.875rem',
    color: '#3b82f6',
    marginBottom: '1rem',
    fontWeight: '500',
  },
  memberBio: {
    fontSize: '0.95rem',
    color: '#a1a1aa',
    lineHeight: '1.6',
  },
  ctaSection: {
    background: '#0f0f11',
  },
  ctaContent: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  ctaSubtitle: {
    fontSize: '1.125rem',
    color: '#a1a1aa',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
};

export default AboutPage;
