import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoughAnnotation from '../components/RoughAnnotation';
import { Download, FileText, ArrowRight, Monitor } from 'lucide-react';

const templates = [
  {
    name: 'The Resume Test Template',
    description: 'Our signature resume template designed by recruiters who know what hiring managers actually look for. Clean, professional, and optimized for both human readers and applicant tracking systems.',
    fileName: 'Resume-Template-The-Resume-Test.docx',
    color: '#0966ff'
  },
  {
    name: 'ATS Friendly Resume',
    description: 'A streamlined template built specifically to pass Applicant Tracking Systems. Simple formatting that ensures your resume gets read by a real person, not filtered out by software.',
    fileName: 'ATS-Friendly-Resume.docx',
    color: '#059669'
  }
];

const TemplatesPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeroVisible(true), 300);
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
                  background: 'rgba(193, 255, 114, 0.15)',
                  color: '#c1ff72',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '20px'
                }}>
                  FREE TEMPLATES
                </span>
                <h1 style={{
                  fontWeight: '900',
                  fontStyle: 'italic',
                  color: '#ffffff',
                  fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                  lineHeight: '1.2',
                  marginBottom: '20px'
                }}>
                  Start With a{' '}
                  <RoughAnnotation
                    type="underline"
                    color="#c1ff72"
                    strokeWidth={3}
                    padding={2}
                    show={heroVisible}
                    animationDuration={1000}
                  >
                    Solid Foundation.
                  </RoughAnnotation>
                </h1>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '1.15rem',
                  lineHeight: '1.7',
                  marginBottom: 0,
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Download our free resume templates, built by real recruiters. Use them as a starting point, then let us help you make it stand out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section style={{ background: '#ffffff', padding: '80px 0' }}>
          <div className="container">
            <div className="row justify-content-center g-4">
              {templates.map((template, index) => (
                <div className="col-lg-5 col-md-6" key={index}>
                  <div style={{
                    background: '#f8fafc',
                    borderRadius: '20px',
                    padding: '40px',
                    height: '100%',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      background: template.color,
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px'
                    }}>
                      <FileText size={28} color="#ffffff" aria-hidden="true" />
                    </div>

                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: '800',
                      color: '#222733',
                      marginBottom: '12px'
                    }}>
                      {template.name}
                    </h3>

                    <p style={{
                      fontSize: '1rem',
                      color: '#64748b',
                      lineHeight: '1.7',
                      marginBottom: '24px',
                      flex: 1
                    }}>
                      {template.description}
                    </p>

                    <span style={{
                      display: 'inline-block',
                      padding: '6px 14px',
                      borderRadius: '50px',
                      background: 'rgba(9, 102, 255, 0.1)',
                      color: '#0966ff',
                      fontWeight: '600',
                      fontSize: '0.8rem',
                      marginBottom: '20px',
                      alignSelf: 'flex-start'
                    }}>
                      .DOCX FORMAT
                    </span>

                    <a
                      href={`${process.env.PUBLIC_URL}/templates/${template.fileName}`}
                      download
                      className="d-flex align-items-center justify-content-center gap-2"
                      style={{
                        background: '#c1ff72',
                        color: '#222733',
                        padding: '14px 28px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontWeight: '700',
                        fontSize: '1rem',
                        transition: 'all 0.2s ease',
                        border: 'none',
                        textAlign: 'center'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#b3f05e';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#c1ff72';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Download size={18} aria-hidden="true" />
                      Download Template
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Docs Tip Section */}
        <section style={{ background: '#222733', padding: '60px 0' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div style={{
                  background: 'rgba(9, 102, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '40px',
                  border: '1px solid rgba(9, 102, 255, 0.2)'
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: '#0966ff',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Monitor size={24} color="#ffffff" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#ffffff',
                        marginBottom: '12px'
                      }}>
                        How to Edit Your Template
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        color: '#94a3b8',
                        lineHeight: '1.8',
                        marginBottom: '16px'
                      }}>
                        These templates are in .docx format, which means you can open them in Microsoft Word, Google Docs, or any word processor. Here's how to use them in Google Docs:
                      </p>
                      <ol style={{
                        color: '#94a3b8',
                        fontSize: '1rem',
                        lineHeight: '2',
                        paddingLeft: '20px',
                        marginBottom: 0
                      }}>
                        <li>Go to <strong style={{ color: '#ffffff' }}>drive.google.com</strong> and sign in</li>
                        <li>Click <strong style={{ color: '#ffffff' }}>New</strong> then <strong style={{ color: '#ffffff' }}>File upload</strong> and select the downloaded template</li>
                        <li>Once uploaded, double click the file and choose <strong style={{ color: '#ffffff' }}>Open with Google Docs</strong></li>
                        <li>Start editing with your own information</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          background: '#0966ff',
          padding: '60px 0'
        }}>
          <div className="container text-center">
            <h3 style={{
              fontWeight: '900',
              fontStyle: 'italic',
              fontSize: '1.75rem',
              color: '#ffffff',
              marginBottom: '16px'
            }}>
              A Great Template Is Just the Start.
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '28px',
              maxWidth: '550px',
              margin: '0 auto 28px'
            }}>
              Templates give you the format. Our experts give you the strategy. Let a real recruiter review your resume and tell you exactly what to fix.
            </p>
            <Link
              to="/results"
              className="d-inline-flex align-items-center gap-2"
              style={{
                background: '#c1ff72',
                color: '#222733',
                padding: '16px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.05rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#b3f05e';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#c1ff72';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get Your Resume Reviewed
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TemplatesPage;
