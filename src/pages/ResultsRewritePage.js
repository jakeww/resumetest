import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ResultsRewritePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#222733', minHeight: '100vh' }}>
      <Header />

      <main id="main-content" role="main">
      {/* Hero Section - White Background */}
      <section style={{
        background: '#ffffff',
        padding: '60px 0 50px'
      }}>
        <div className="container">
          <Link
            to="/results"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#64748b',
              textDecoration: 'none',
              marginBottom: '24px',
              fontSize: '0.9rem'
            }}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to all options
          </Link>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{
                display: 'inline-block',
                background: '#0966ff',
                color: '#ffffff',
                padding: '6px 16px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.85rem',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                $109, 72 Hour Turnaround
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: '900',
                fontStyle: 'italic',
                color: '#222733',
                marginBottom: '16px'
              }}>
                Resume Rewrite
              </h1>
              <p style={{
                fontSize: '1.1rem',
                color: '#64748b',
                marginBottom: '32px',
                lineHeight: '1.6'
              }}>
                Submit your resume or background information and receive a professionally written resume along with a personalized video that explains the new document.
              </p>

              {/* What's Included */}
              <div className="d-flex flex-column gap-3">
                <div>
                  <h4 style={{ color: '#222733', fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>
                    Complete Resume Rewrite
                  </h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                    We write your resume from scratch, optimized for your target role
                  </p>
                </div>
                <div>
                  <h4 style={{ color: '#222733', fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>
                    Personalized Video Walkthrough
                  </h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                    Detailed explanation of every section and why it works
                  </p>
                </div>
                <div>
                  <h4 style={{ color: '#222733', fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>
                    No Resume? No Problem.
                  </h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                    Just submit your background info and we'll create one for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tally Embed Section - Dark Background, Full Width */}
      <section style={{
        background: '#222733',
        padding: '0'
      }}>
        <iframe
          data-tally-src="https://tally.so/r/WOz0ZQ"
          src="https://tally.so/r/WOz0ZQ"
          title="Resume Rewrite Form"
          width="100%"
          height="1400"
          frameBorder="0"
          style={{
            border: 'none',
            display: 'block'
          }}
          allow="payment"
        />
      </section>

      {/* How It Works */}
      <section style={{
        background: '#ffffff',
        padding: '80px 0'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            color: '#222733',
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
                  { step: 1, text: 'Submit your current resume or background information' },
                  { step: 2, text: 'We analyze your experience and target role' },
                  { step: 3, text: 'A recruiter writes your new resume from scratch' },
                  { step: 4, text: 'Receive your new resume and video walkthrough within 72 hours' }
                ].map((item) => (
                  <div key={item.step} className="d-flex align-items-start gap-3">
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#0966ff',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      flexShrink: 0
                    }}>
                      {item.step}
                    </div>
                    <p style={{
                      color: '#222733',
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
            <CheckCircle size={20} color="#ffffff" aria-hidden="true" />
            <p style={{
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: '600',
              margin: 0
            }}>
              100% Human Written. Your resume is crafted by a real recruiter, not AI.
            </p>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResultsRewritePage;
