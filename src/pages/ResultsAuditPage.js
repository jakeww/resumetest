import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Video, FileText, MessageSquare, ArrowLeft } from 'lucide-react';

const ResultsAuditPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Video size={24} />,
      title: 'Video Diagnostic',
      description: 'Watch a recruiter review your resume in real-time'
    },
    {
      icon: <FileText size={24} />,
      title: 'Resume Scorecard',
      description: 'Clear grades on formatting, narrative, and metrics'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Line-by-Line Markups',
      description: 'Specific comments on what to cut, keep, and improve'
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
                $69 - No Scheduling Required
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: '900',
                fontStyle: 'italic',
                color: '#ffffff',
                marginBottom: '16px'
              }}>
                Resume Audit
              </h1>
              <p style={{
                fontSize: '1.1rem',
                color: '#94a3b8',
                marginBottom: '32px',
                lineHeight: '1.6'
              }}>
                Upload your resume, pay securely, and receive your personalized video review within 72 hours.
              </p>

              {/* What's Included */}
              <div className="d-flex flex-column gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="d-flex align-items-start gap-3">
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(9, 102, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0966ff',
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

      {/* Jotform Embed Section */}
      <section style={{
        background: '#ffffff',
        padding: '60px 0',
        minHeight: '900px'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <iframe
              src="https://form.jotform.com/260298073189062"
              title="Resume Audit Form"
              width="100%"
              height="800"
              frameBorder="0"
              style={{
                border: 'none',
                borderRadius: '16px'
              }}
              allow="payment"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{
        background: '#222733',
        padding: '80px 0'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            color: '#ffffff',
            fontWeight: '800',
            fontSize: '1.8rem',
            marginBottom: '48px'
          }}>
            How It Works
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="d-flex flex-column gap-4">
                {[
                  { step: 1, text: 'Upload your current resume and complete payment' },
                  { step: 2, text: 'A verified recruiter reviews your resume within 72 hours' },
                  { step: 3, text: 'Receive your video diagnostic and written feedback via email' },
                  { step: 4, text: 'Apply the changes and start getting callbacks' }
                ].map((item) => (
                  <div key={item.step} className="d-flex align-items-start gap-3">
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#c1ff72',
                      color: '#222733',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      flexShrink: 0
                    }}>
                      {item.step}
                    </div>
                    <p style={{
                      color: '#ffffff',
                      fontSize: '1.1rem',
                      margin: 0,
                      paddingTop: '6px'
                    }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
              100% Human Review - Your resume is reviewed by a real recruiter, not an algorithm.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResultsAuditPage;
