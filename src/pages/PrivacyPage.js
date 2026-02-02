import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionStyle = {
    marginBottom: '40px'
  };

  const headingStyle = {
    color: '#222733',
    fontWeight: '800',
    fontSize: '1.3rem',
    marginBottom: '16px'
  };

  const paragraphStyle = {
    color: '#475569',
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '16px'
  };

  const listStyle = {
    color: '#475569',
    fontSize: '1rem',
    lineHeight: '2',
    paddingLeft: '24px',
    marginBottom: '16px'
  };

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
              Legal
            </span>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '900',
              fontStyle: 'italic',
              color: '#ffffff',
              marginBottom: '16px'
            }}>
              Privacy Policy
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: '#94a3b8',
              maxWidth: '700px'
            }}>
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ background: '#ffffff', padding: '80px 0' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div style={sectionStyle}>
                  <h2 style={headingStyle}>Information We Collect</h2>
                  <p style={paragraphStyle}>
                    When you use our services, we collect information that you voluntarily provide to us. This may include:
                  </p>
                  <ul style={listStyle}>
                    <li>Your name and contact information (email address, phone number)</li>
                    <li>Your resume and professional background information</li>
                    <li>Target job descriptions and career goals</li>
                    <li>Payment information (processed securely through third-party payment processors)</li>
                    <li>Any additional information you choose to share during our sessions</li>
                  </ul>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>How We Use Your Information</h2>
                  <p style={paragraphStyle}>
                    We use the information you provide solely for the purpose of delivering our resume coaching and career services. Specifically, we use your information to:
                  </p>
                  <ul style={listStyle}>
                    <li>Review and improve your resume</li>
                    <li>Provide personalized career coaching and feedback</li>
                    <li>Communicate with you about your order and deliver your materials</li>
                    <li>Process payments for our services</li>
                    <li>Improve our services based on aggregated, anonymized feedback</li>
                  </ul>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>We Do Not Sell Your Information</h2>
                  <p style={paragraphStyle}>
                    <strong>The Resume Test does not sell, rent, trade, or otherwise share your personal information with third parties for marketing purposes.</strong>
                  </p>
                  <p style={paragraphStyle}>
                    Your resume, personal details, and career information are used exclusively to help you achieve your career goals. We will never monetize your data or share it with advertisers, data brokers, or any other third parties seeking to market to you.
                  </p>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>Third-Party Services</h2>
                  <p style={paragraphStyle}>
                    We use trusted third-party services to operate our business, including:
                  </p>
                  <ul style={listStyle}>
                    <li><strong>Payment Processors:</strong> To securely process your payments. We do not store your full credit card information.</li>
                    <li><strong>Form and Scheduling Tools:</strong> To collect information and schedule appointments.</li>
                    <li><strong>Video Conferencing:</strong> To conduct live coaching sessions.</li>
                  </ul>
                  <p style={paragraphStyle}>
                    These services have their own privacy policies, and we encourage you to review them. We only work with reputable providers who maintain appropriate security measures.
                  </p>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>Data Security</h2>
                  <p style={paragraphStyle}>
                    We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>Data Retention</h2>
                  <p style={paragraphStyle}>
                    We retain your information for as long as necessary to provide our services and fulfill the purposes described in this policy. If you would like us to delete your information, please contact us at <a href="mailto:team@theresumetest.com" style={{ color: '#0966ff' }}>team@theresumetest.com</a>.
                  </p>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>Your Rights</h2>
                  <p style={paragraphStyle}>
                    You have the right to:
                  </p>
                  <ul style={listStyle}>
                    <li>Request access to the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                  <p style={paragraphStyle}>
                    To exercise any of these rights, please contact us at <a href="mailto:team@theresumetest.com" style={{ color: '#0966ff' }}>team@theresumetest.com</a>.
                  </p>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>Changes to This Policy</h2>
                  <p style={paragraphStyle}>
                    We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                  </p>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>Contact Us</h2>
                  <p style={paragraphStyle}>
                    If you have any questions about this privacy policy or our data practices, please contact us at:
                  </p>
                  <div style={{
                    background: '#f8fafc',
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid rgba(0,0,0,0.08)'
                  }}>
                    <p style={{ color: '#222733', fontWeight: '600', marginBottom: '8px' }}>
                      Email: <a href="mailto:team@theresumetest.com" style={{ color: '#0966ff' }}>team@theresumetest.com</a>
                    </p>
                    <p style={{ color: '#475569', margin: 0 }}>
                      The Resume Test<br />
                      Denver, Colorado
                    </p>
                  </div>
                </div>

                <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '48px' }}>
                  Last updated: February 2026
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

export default PrivacyPage;
