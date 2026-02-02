import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoughAnnotation from '../components/RoughAnnotation';
import { Users, GraduationCap, Briefcase, MapPin, CheckCircle } from 'lucide-react';

const AboutPage = () => {
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
                  background: 'rgba(9, 102, 255, 0.15)',
                  color: '#0966ff',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '20px'
                }}>
                  About Us
                </span>
                <h1 style={{
                  fontWeight: '900',
                  fontStyle: 'italic',
                  color: '#ffffff',
                  fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                  lineHeight: '1.2',
                  marginBottom: '20px'
                }}>
                  The Job Hunt Is{' '}
                  <RoughAnnotation
                    type="underline"
                    color="#c1ff72"
                    strokeWidth={3}
                    padding={2}
                    show={heroVisible}
                    animationDuration={1000}
                  >
                    Rough Out There.
                  </RoughAnnotation>
                </h1>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '1.15rem',
                  lineHeight: '1.7',
                  marginBottom: 0
                }}>
                  We get it. Sending applications into the void, wondering why you never hear back, trying to figure out what's wrong on your own. That's why we built The Resume Test. You shouldn't have to navigate the job market alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section style={{ background: '#ffffff', padding: '80px 0' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center mb-5">
                  <h2 style={{
                    fontWeight: '900',
                    fontStyle: 'italic',
                    fontSize: '2rem',
                    color: '#222733',
                    marginBottom: '16px'
                  }}>
                    Real HR Professionals.{' '}
                    <RoughAnnotation
                      type="circle"
                      color="#0966ff"
                      strokeWidth={2}
                      padding={6}
                      show={heroVisible}
                      animationDuration={1200}
                    >
                      Real Results.
                    </RoughAnnotation>
                  </h2>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#64748b',
                    lineHeight: '1.7'
                  }}>
                    We're not freelance writers or career coaches who read a book about resumes. We're the people who actually sit on the other side of the hiring table. Every member of our team has spent years in talent acquisition, reviewing thousands of resumes and making real hiring decisions.
                  </p>
                </div>

                {/* Qualifications */}
                <div className="row g-4">
                  <div className="col-md-4">
                    <div style={{
                      background: '#f8fafc',
                      borderRadius: '16px',
                      padding: '28px',
                      height: '100%',
                      border: '1px solid #e2e8f0',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        background: '#0966ff',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px'
                      }}>
                        <Briefcase size={26} color="#ffffff" aria-hidden="true" />
                      </div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#222733', marginBottom: '8px' }}>
                        Years of HR Experience
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: '1.6' }}>
                        Every reviewer has verified experience in talent acquisition and recruiting.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div style={{
                      background: '#f8fafc',
                      borderRadius: '16px',
                      padding: '28px',
                      height: '100%',
                      border: '1px solid #e2e8f0',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        background: '#059669',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px'
                      }}>
                        <GraduationCap size={26} color="#ffffff" aria-hidden="true" />
                      </div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#222733', marginBottom: '8px' }}>
                        Formal Education
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: '1.6' }}>
                        We require a minimum of a Bachelor's degree for all team members.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div style={{
                      background: '#f8fafc',
                      borderRadius: '16px',
                      padding: '28px',
                      height: '100%',
                      border: '1px solid #e2e8f0',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        background: '#7c3aed',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px'
                      }}>
                        <Users size={26} color="#ffffff" aria-hidden="true" />
                      </div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#222733', marginBottom: '8px' }}>
                        Qualified Professionals
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: '1.6' }}>
                        We're selective about who joins our team. Every reviewer does great work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Do This */}
        <section style={{ background: '#222733', padding: '80px 0' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <h2 style={{
                  fontWeight: '900',
                  fontStyle: 'italic',
                  fontSize: '2rem',
                  color: '#ffffff',
                  marginBottom: '20px'
                }}>
                  You Shouldn't Have to{' '}
                  <RoughAnnotation
                    type="underline"
                    color="#c1ff72"
                    strokeWidth={3}
                    padding={2}
                    show={heroVisible}
                    animationDuration={1000}
                  >
                    Go It Alone.
                  </RoughAnnotation>
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#94a3b8',
                  lineHeight: '1.8',
                  marginBottom: '24px'
                }}>
                  The modern job market is brutal. Automated systems reject qualified candidates. Hiring managers spend seconds on each resume. And most job seekers have no idea what they're doing wrong.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#94a3b8',
                  lineHeight: '1.8',
                  margin: 0
                }}>
                  We built The Resume Test to give you an unfair advantage: insider knowledge from the people who actually make hiring decisions. When you work with us, you're getting{' '}
                  <strong style={{ color: '#c1ff72' }}>graded by the pros.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Denver Location */}
        <section style={{ background: '#0966ff', padding: '50px 0' }}>
          <div className="container">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 text-center text-md-start">
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={24} color="#ffffff" aria-hidden="true" />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '4px'
                }}>
                  Headquartered in Denver, Colorado
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.8)',
                  margin: 0
                }}>
                  Serving clients across the country with expert resume coaching.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section style={{ background: '#222733', padding: '40px 0' }}>
          <div className="container">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <CheckCircle size={20} color="#c1ff72" aria-hidden="true" />
              <p style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: '500', margin: 0 }}>
                100% human review. No bots. No algorithms. Real recruiters reading real words.
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
