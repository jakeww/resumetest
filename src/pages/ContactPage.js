import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ background: '#222733' }}>
      <Header />

      <main id="main-content" role="main" className="flex-grow-1">
        {/* Hero Section */}
        <section style={{
          background: '#222733',
          padding: '80px 0 60px'
        }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <span style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  background: 'rgba(9, 102, 255, 0.15)',
                  color: '#0966ff',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '20px'
                }}>
                  Contact
                </span>
                <h1 style={{
                  fontWeight: '900',
                  fontStyle: 'italic',
                  color: '#ffffff',
                  fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                  lineHeight: '1.2',
                  marginBottom: '20px'
                }}>
                  Get in Touch
                </h1>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '1.15rem',
                  lineHeight: '1.7',
                  marginBottom: 0
                }}>
                  Have questions about our services or want to learn more about how we can help? We're here to help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ background: '#ffffff', padding: '80px 0' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div style={{
                  background: '#f8fafc',
                  borderRadius: '20px',
                  padding: '48px 40px',
                  border: '1px solid #e2e8f0'
                }}>
                  <h2 style={{
                    fontWeight: '800',
                    fontSize: '1.5rem',
                    color: '#222733',
                    marginBottom: '16px'
                  }}>
                    Email Us
                  </h2>
                  <p style={{
                    color: '#64748b',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    marginBottom: '24px'
                  }}>
                    For questions about our services, the process, or anything else, send us an email and we'll get back to you within 24 hours.
                  </p>
                  <a
                    href="mailto:team@theresumetest.com"
                    style={{
                      display: 'inline-block',
                      background: '#0966ff',
                      color: '#ffffff',
                      padding: '16px 40px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontWeight: '700',
                      fontSize: '1.05rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    team@theresumetest.com
                  </a>
                </div>

                <div style={{ marginTop: '40px' }}>
                  <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '8px' }}>
                    Based in Denver, Colorado
                  </p>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>
                    Serving job seekers nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
