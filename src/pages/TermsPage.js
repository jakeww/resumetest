import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
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
              Terms and Conditions
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: '#94a3b8',
              maxWidth: '700px'
            }}>
              By purchasing or utilizing any services provided by The Resume Test, you ("The Client") agree to the following terms and conditions.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ background: '#ffffff', padding: '80px 0' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div style={sectionStyle}>
                  <h2 style={headingStyle}>1. Scope of Service</h2>
                  <p style={paragraphStyle}>
                    The Resume Test provides career consulting, document auditing, resume writing assistance, and interview coaching. We act as a diagnostic partner and strategic advisor. Our services are advisory in nature and are designed to improve your marketing materials and interview skills. We are not a staffing agency, a headhunter, or a recruitment firm. We do not place candidates in jobs, nor do we have special access to hiring managers at specific companies.
                  </p>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>2. No Guarantee of Employment</h2>
                  <p style={paragraphStyle}>
                    While we utilize expert strategies and insight from qualified HR professionals to optimize your candidacy, The Resume Test does not guarantee interviews, job offers, or successful employment.
                  </p>
                  <p style={paragraphStyle}>
                    The job market is a complex ecosystem influenced by factors outside of our control. Therefore, we cannot promise:
                  </p>
                  <ul style={listStyle}>
                    <li>A specific timeframe for finding employment.</li>
                    <li>A specific number of callbacks or interview requests.</li>
                    <li>A specific salary increase or title change.</li>
                  </ul>
                  <p style={paragraphStyle}>
                    By using our service, you acknowledge that our feedback increases your probability of success but does not guarantee a specific outcome.
                  </p>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>3. Individual Results & Market Factors</h2>
                  <p style={paragraphStyle}>
                    You acknowledge that hiring decisions are subjective and reliant on numerous variables beyond the scope of a resume or a mock interview. These include, but are not limited to:
                  </p>
                  <ul style={listStyle}>
                    <li><strong>Market Conditions:</strong> Economic downturns, industry-specific hiring freezes, or high competition.</li>
                    <li><strong>Candidate Background:</strong> Your specific education, work gaps, visa status, or criminal history.</li>
                    <li><strong>Third-Party Action:</strong> The internal biases of hiring managers, Applicant Tracking System (ATS) glitches, or changes in company headcount.</li>
                    <li><strong>Execution:</strong> Your ability to execute the strategies we teach during real interviews.</li>
                  </ul>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>4. Limitation of Liability</h2>
                  <p style={paragraphStyle}>
                    The Resume Test is not responsible for rejected applications, lost wages, or missed career opportunities.
                  </p>
                  <p style={paragraphStyle}>
                    Under no circumstances shall The Resume Test (or its founders, employees, and contractors) be liable for any direct, indirect, incidental, or consequential damages resulting from the use of our advice or documents.
                  </p>
                  <p style={paragraphStyle}>
                    <strong>Final Approval:</strong> You retain full ownership and responsibility for your resume. It is your responsibility to review all documents for accuracy (dates, contact info, spelling) before submitting them to employers.
                  </p>
                  <p style={paragraphStyle}>
                    <strong>Liability Cap:</strong> Our total liability to you for any claim arising out of or in connection with these services is limited to the amount you actually paid for the service.
                  </p>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>5. Human Review Policy</h2>
                  <p style={paragraphStyle}>
                    We pride ourselves on providing 100% human feedback. We do not use generative AI to write your resume for you. Conversely, we rely on you to provide accurate, truthful information about your work history. We are not responsible for negative outcomes resulting from false, exaggerated, or misleading information provided by The Client during the intake process.
                  </p>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>6. No Refunds & Cancellation Policy</h2>
                  <p style={paragraphStyle}>
                    All sales are final. Due to the digital nature of our products, the immediate allocation of professional labor, and the delivery of proprietary intellectual property, The Resume Test does not offer refunds under any circumstances.
                  </p>
                  <p style={paragraphStyle}>
                    <strong>Audit Services (Tier 1):</strong> Once payment is processed, the audit is considered active and cannot be cancelled or refunded.
                  </p>
                  <p style={paragraphStyle}>
                    <strong>Live Sessions (Tier 2 & 3):</strong> Payment secures your consultant's time. If you need to reschedule a live session, you must provide at least 24 hours' notice. Failure to attend a scheduled session ("No Show") without notice will result in the forfeiture of the session and no refund will be issued.
                  </p>
                </div>

                <div style={sectionStyle}>
                  <h2 style={headingStyle}>7. Governing Law</h2>
                  <p style={paragraphStyle}>
                    This agreement shall be governed by and construed in accordance with the laws of the State of Colorado and the United States.
                  </p>
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

export default TermsPage;
