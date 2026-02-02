import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AccessibilityPage = () => {
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
              marginBottom: '16px'
            }}>
              Accessibility
            </span>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '900',
              fontStyle: 'italic',
              color: '#ffffff',
              marginBottom: '16px'
            }}>
              Accessibility Statement
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              maxWidth: '700px'
            }}>
              The Resume Test is committed to ensuring digital accessibility for people with disabilities.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ background: '#ffffff', padding: '80px 0' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div style={{ marginBottom: '48px' }}>
                  <h2 style={{
                    color: '#222733',
                    fontWeight: '800',
                    fontSize: '1.5rem',
                    marginBottom: '16px'
                  }}>
                    Our Commitment
                  </h2>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.8' }}>
                    The Resume Test is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our website and in doing so adhere to many of the available standards and guidelines.
                  </p>
                </div>

                <div style={{ marginBottom: '48px' }}>
                  <h2 style={{
                    color: '#222733',
                    fontWeight: '800',
                    fontSize: '1.5rem',
                    marginBottom: '16px'
                  }}>
                    Conformance Status
                  </h2>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.8' }}>
                    We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
                  </p>
                </div>

                <div style={{ marginBottom: '48px' }}>
                  <h2 style={{
                    color: '#222733',
                    fontWeight: '800',
                    fontSize: '1.5rem',
                    marginBottom: '16px'
                  }}>
                    Accessibility Features
                  </h2>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
                    Our website includes the following accessibility features:
                  </p>
                  <ul style={{ color: '#475569', fontSize: '1rem', lineHeight: '2', paddingLeft: '24px' }}>
                    <li>Keyboard navigation support throughout the site</li>
                    <li>Skip navigation links to bypass repetitive content</li>
                    <li>Descriptive alt text for images</li>
                    <li>Proper heading hierarchy for screen readers</li>
                    <li>ARIA labels for interactive elements</li>
                    <li>Sufficient color contrast ratios</li>
                    <li>Focus indicators for keyboard users</li>
                    <li>Semantic HTML structure</li>
                    <li>Form labels and error messages</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '48px' }}>
                  <h2 style={{
                    color: '#222733',
                    fontWeight: '800',
                    fontSize: '1.5rem',
                    marginBottom: '16px'
                  }}>
                    Third-Party Content
                  </h2>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.8' }}>
                    Some content on our website is provided by third-party services (such as scheduling and form tools). While we strive to work with accessible third-party providers, we cannot guarantee the accessibility of all third-party content. If you encounter accessibility barriers with any third-party content, please contact us and we will do our best to assist you.
                  </p>
                </div>

                <div style={{ marginBottom: '48px' }}>
                  <h2 style={{
                    color: '#222733',
                    fontWeight: '800',
                    fontSize: '1.5rem',
                    marginBottom: '16px'
                  }}>
                    Feedback
                  </h2>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.8' }}>
                    We welcome your feedback on the accessibility of The Resume Test website. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
                  </p>
                  <div style={{
                    background: '#f8fafc',
                    borderRadius: '12px',
                    padding: '24px',
                    marginTop: '16px',
                    border: '1px solid rgba(0,0,0,0.08)'
                  }}>
                    <p style={{ color: '#222733', fontWeight: '600', marginBottom: '8px' }}>
                      Email: <a href="mailto:team@theresumetest.com" style={{ color: '#0966ff' }}>team@theresumetest.com</a>
                    </p>
                    <p style={{ color: '#475569', margin: 0 }}>
                      We try to respond to accessibility feedback within 2 business days.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 style={{
                    color: '#222733',
                    fontWeight: '800',
                    fontSize: '1.5rem',
                    marginBottom: '16px'
                  }}>
                    Continuous Improvement
                  </h2>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.8' }}>
                    We are continually improving the user experience for everyone and applying relevant accessibility standards. Our efforts are ongoing, and we regularly review our website to identify and address accessibility issues.
                  </p>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '24px' }}>
                    Last updated: February 2026
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

export default AccessibilityPage;
