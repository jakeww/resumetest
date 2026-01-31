import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Video, FileText, UserCheck, MessageSquare, ArrowLeft } from 'lucide-react';

const ResultsBundlePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Video size={24} />,
      title: 'Full Deep Dive Workshop',
      description: '45-minute live resume rewrite session'
    },
    {
      icon: <UserCheck size={24} />,
      title: 'Mock Interview Session',
      description: 'Practice with a real recruiter in your industry'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Performance Critique',
      description: 'Feedback on body language, pacing, and answers'
    },
    {
      icon: <FileText size={24} />,
      title: 'Written Analysis Guide',
      description: 'Detailed post-session feedback document'
    }
  ];

  return (
    <div style={{ background: '#222733', minHeight: '100vh' }}>
      <Header />

      {/* Hero Section */}
      <section style={{
        background: '#222733',
        padding: '60px 0 40px'
      }}>
        <div className="container">
          <Link
            to="/results"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#94a3b8',
              textDecoration: 'none',
              marginBottom: '24px',
              fontSize: '0.9rem'
            }}
          >
            <ArrowLeft size={16} />
            Back to all options
          </Link>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{
                display: 'inline-block',
                background: '#c1ff72',
                color: '#222733',
                padding: '6px 16px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.85rem',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                $229 - Complete Package
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: '900',
                fontStyle: 'italic',
                color: '#ffffff',
                marginBottom: '16px'
              }}>
                Total Prep Bundle
              </h1>
              <p style={{
                fontSize: '1.1rem',
                color: '#94a3b8',
                marginBottom: '32px',
                lineHeight: '1.6'
              }}>
                The complete package: resume workshop plus mock interview prep. Everything you need to land your dream job.
              </p>

              {/* What's Included */}
              <div className="d-flex flex-column gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="d-flex align-items-start gap-3">
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(193, 255, 114, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#c1ff72',
                      flexShrink: 0
                    }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 style={{
                        color: '#ffffff',
                        fontSize: '1rem',
                        fontWeight: '700',
                        marginBottom: '4px'
                      }}>
                        {feature.title}
                      </h4>
                      <p style={{
                        color: '#94a3b8',
                        fontSize: '0.9rem',
                        margin: 0
                      }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acuity Embed Section */}
      <section style={{
        background: '#ffffff',
        padding: '60px 0',
        minHeight: '900px'
      }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 style={{
              color: '#222733',
              fontWeight: '800',
              fontSize: '1.5rem',
              marginBottom: '8px'
            }}>
              Select a Time That Works For You
            </h2>
            <p style={{ color: '#64748b', margin: 0 }}>
              All times shown in your local timezone
            </p>
          </div>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <iframe
              src="https://app.acuityscheduling.com/schedule.php?owner=38239658&appointmentType=88542970&ref=embedded_csp"
              title="Schedule Total Prep Bundle"
              width="100%"
              height="800"
              frameBorder="0"
              allow="payment"
              style={{
                border: 'none',
                borderRadius: '16px'
              }}
            />
          </div>
        </div>
      </section>

      {/* Trust Note */}
      <section style={{
        background: '#0966ff',
        padding: '40px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <CheckCircle size={20} color="#ffffff" />
            <p style={{
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: '600',
              margin: 0
            }}>
              All sessions conducted by verified recruiters with real hiring experience.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResultsBundlePage;
