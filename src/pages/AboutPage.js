import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoughAnnotation from '../components/RoughAnnotation';
import { Users, Award, GraduationCap, Target, Shield, MapPin } from 'lucide-react';

const QualificationCard = ({ icon: Icon, iconBg, title, description }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="col-md-4">
      <div
        style={{
          background: isHovered ? 'rgba(34, 39, 51, 0.08)' : '#ffffff',
          borderRadius: '20px',
          padding: '32px',
          height: '100%',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 12px 40px rgba(0, 0, 0, 0.12)' : '0 4px 20px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{
          width: '56px',
          height: '56px',
          background: iconBg,
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <Icon size={28} color="#ffffff" />
        </div>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          color: '#222733',
          marginBottom: '12px'
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '1rem',
          color: '#64748b',
          lineHeight: '1.7',
          marginBottom: 0
        }}>
          {description}
        </p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [standardVisible, setStandardVisible] = useState(false);
  const [conciergeVisible, setConciergeVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
    const timer1 = setTimeout(() => setStandardVisible(true), 500);
    const timer2 = setTimeout(() => setConciergeVisible(true), 1000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ background: '#222733' }}>
      <Header />

      <main className="flex-grow-1">
        {/* Hero Section - Dark */}
        <section style={{
          background: '#222733',
          padding: '100px 0 80px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div className="container text-center">
            <span className="tag mb-4" style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '50px',
              background: 'rgba(9, 102, 255, 0.15)',
              color: '#0966ff',
              fontWeight: '700',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              About Us
            </span>
            <h1 style={{
              fontWeight: '900',
              fontStyle: 'italic',
              color: '#ffffff',
              fontSize: '3rem',
              lineHeight: '1.15',
              marginBottom: '24px'
            }}>
              Your Private Team of{' '}
              <RoughAnnotation
                type="underline"
                color="#c1ff72"
                strokeWidth={3}
                padding={2}
                show={heroVisible}
                animationDuration={1000}
              >
                Hiring Experts.
              </RoughAnnotation>
            </h1>
            <p style={{
              color: '#94a3b8',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.8',
              fontSize: '1.25rem'
            }}>
              We are a Denver-based team of seasoned recruiters providing a concierge career service.
              We bring the inside knowledge of the hiring process directly to your application.
            </p>
          </div>
        </section>

        {/* The Resume Test Standard Section - White */}
        <section style={{ padding: '100px 0', background: '#ffffff' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center mb-5">
                  <div style={{
                    width: '72px',
                    height: '72px',
                    background: '#0966ff',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 28px'
                  }}>
                    <Shield size={36} color="#ffffff" />
                  </div>
                  <h2 style={{
                    fontWeight: '900',
                    fontStyle: 'italic',
                    fontSize: '2.25rem',
                    color: '#222733',
                    marginBottom: '16px'
                  }}>
                    The{' '}
                    <RoughAnnotation
                      type="circle"
                      color="#0966ff"
                      strokeWidth={2}
                      padding={8}
                      show={standardVisible}
                      animationDuration={1200}
                    >
                      "Resume Test"
                    </RoughAnnotation>{' '}
                    Standard
                  </h2>
                </div>
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  padding: '40px'
                }}>
                  <p style={{
                    fontSize: '1.15rem',
                    color: '#475569',
                    lineHeight: '1.85',
                    marginBottom: '20px'
                  }}>
                    We operate on a simple premise: <strong style={{ color: '#222733' }}>The best career advice comes from the people who actually make the hiring decisions.</strong>
                  </p>
                  <p style={{
                    fontSize: '1.15rem',
                    color: '#475569',
                    lineHeight: '1.85',
                    marginBottom: 0
                  }}>
                    Unlike other agencies that rely on freelance writers or generic career coaches, we run a tight ship of industry veterans. When you work with us, you are getting{' '}
                    <RoughAnnotation
                      type="highlight"
                      color="rgba(193, 255, 114, 0.4)"
                      show={standardVisible}
                      animationDuration={800}
                    >
                      graded by the pros.
                    </RoughAnnotation>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Qualifications Section - White */}
        <section style={{
          padding: '100px 0',
          background: '#ffffff',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)'
        }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="tag mb-3" style={{
                display: 'inline-block',
                padding: '8px 20px',
                borderRadius: '50px',
                background: 'rgba(9, 102, 255, 0.1)',
                color: '#0966ff',
                fontWeight: '700',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Our Team
              </span>
              <h2 style={{
                fontWeight: '900',
                fontStyle: 'italic',
                fontSize: '2.25rem',
                color: '#222733',
                marginBottom: '16px'
              }}>
                Our Team Qualifications
              </h2>
              <p style={{
                fontSize: '1.15rem',
                color: '#64748b',
                maxWidth: '650px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                We are uncompromising about who we allow to review your resume. To join The Resume Test, a reviewer must meet strict criteria:
              </p>
            </div>

            <div className="row g-4 justify-content-center">
              <QualificationCard
                icon={Users}
                iconBg="#059669"
                title="Active Recruitment Experience"
                description="Every coach has years of verified experience in talent acquisition and hiring processes."
              />
              <QualificationCard
                icon={GraduationCap}
                iconBg="#0966ff"
                title="Academic Excellence"
                description="We require a minimum of a Bachelor's degree for all our staff."
              />
              <QualificationCard
                icon={Target}
                iconBg="#7c3aed"
                title="Rigorous Efficiency Training"
                description="Our team operates with a high degree of precision. We are trained to spot the 'silent killers' in a resume within seconds, ensuring you get the most impactful feedback possible."
              />
            </div>
          </div>
        </section>

        {/* Concierge Experience Section - Dark */}
        <section style={{ padding: '100px 0', background: '#222733' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center mb-5">
                  <div style={{
                    width: '72px',
                    height: '72px',
                    background: '#c1ff72',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 28px'
                  }}>
                    <Award size={36} color="#222733" />
                  </div>
                  <h2 style={{
                    fontWeight: '900',
                    fontStyle: 'italic',
                    fontSize: '2.25rem',
                    color: '#ffffff',
                    marginBottom: '16px'
                  }}>
                    A{' '}
                    <RoughAnnotation
                      type="underline"
                      color="#c1ff72"
                      strokeWidth={3}
                      padding={2}
                      show={conciergeVisible}
                      animationDuration={1000}
                    >
                      Concierge
                    </RoughAnnotation>{' '}
                    Experience
                  </h2>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '40px'
                }}>
                  <p style={{
                    fontSize: '1.15rem',
                    color: '#94a3b8',
                    lineHeight: '1.85',
                    marginBottom: '20px'
                  }}>
                    We understand that the modern job hunt is brutal. It is impersonal, automated, and often frustratingly silent.
                  </p>
                  <p style={{
                    fontSize: '1.15rem',
                    color: '#94a3b8',
                    lineHeight: '1.85',
                    marginBottom: 0
                  }}>
                    We built The Resume Test to be the antidote to that chaos. We offer a white-glove, concierge service where you aren't just a number in a queue—you are a{' '}
                    <RoughAnnotation
                      type="box"
                      color="#0966ff"
                      strokeWidth={2}
                      padding={4}
                      show={conciergeVisible}
                      animationDuration={800}
                    >
                      client we are partnering with to succeed.
                    </RoughAnnotation>{' '}
                    We handle the heavy lifting of strategy and narrative so you can focus on the interview.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Denver Section - Dark */}
        <section style={{
          padding: '80px 0',
          background: '#1a1f2a',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div className="container">
            <div className="text-center">
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                marginBottom: '20px',
                padding: '16px 32px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <MapPin size={28} color="#0966ff" />
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: 0
                }}>
                  Headquartered in Denver, Colorado
                </h3>
              </div>
              <p style={{
                fontSize: '1.15rem',
                color: '#94a3b8',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                We are proud to operate out of the Mile High City, bringing a standard of elevated excellence to clients across the country.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
