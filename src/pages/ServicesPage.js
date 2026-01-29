import React, { useState, useEffect } from 'react';
import {
  FileText, Video, Briefcase, CheckCircle, Clock,
  Target, MessageSquare, Award, HelpCircle, AlertCircle, ArrowRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoughAnnotation from '../components/RoughAnnotation';

const ServicesPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 300);
  }, []);

  const handleScheduleConsult = () => {
    window.location.href = '/#pricing-section';
  };

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ background: '#222733' }}>
      <Header />

      <main className="flex-grow-1">
        {/* Hero Section */}
        <section style={{ background: '#222733', padding: '100px 0 80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
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
              Services
            </span>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              fontStyle: 'italic',
              color: '#ffffff',
              lineHeight: '1.1',
              marginBottom: '24px'
            }}>
              Don't Let a Bad Resume Cost You{' '}
              <RoughAnnotation type="underline" color="#c1ff72" strokeWidth={3} padding={2} show={heroVisible} animationDuration={1000}>
                Another Paycheck.
              </RoughAnnotation>
            </h1>
            <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
              The average job search takes{' '}
              <RoughAnnotation type="circle" color="#dc2626" strokeWidth={2} padding={6} show={heroVisible} animationDuration={1200}>
                5 months.
              </RoughAnnotation>{' '}
              Our goal is to cut that in half. Whether you need to figure out why you aren't getting called back or you want expert guidance to make your resume excellent, we have a human-led solution for you.
            </p>
          </div>
        </section>

        {/* Service Packages Section - White Background */}
        <section style={{ background: '#ffffff', padding: '100px 0' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="tag mb-3" style={{
                display: 'inline-block',
                padding: '8px 20px',
                borderRadius: '50px',
                background: 'rgba(193, 255, 114, 0.2)',
                color: '#059669',
                fontWeight: '700',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Choose Your Path
              </span>
              <h2 style={{ color: '#222733', fontWeight: '900', fontStyle: 'italic', fontSize: '2.5rem', marginBottom: '0' }}>
                The Service{' '}
                <RoughAnnotation type="box" color="#0966ff" strokeWidth={2} padding={6} show={heroVisible} animationDuration={1000}>
                  Packages
                </RoughAnnotation>
              </h2>
            </div>

            {/* Option 1: Redline Audit */}
            <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '40px', marginBottom: '32px', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
              <div className="row align-items-start">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center mb-4">
                    <div style={{ background: '#c1ff72', borderRadius: '12px', padding: '12px', marginRight: '16px' }}>
                      <FileText size={28} style={{ color: '#222733' }} />
                    </div>
                    <div>
                      <h3 style={{ color: '#222733', fontWeight: '800', margin: 0 }}>Option 1: The "Redline" Audit</h3>
                      <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem' }}>Quick, Direct, & Diagnostic</p>
                    </div>
                  </div>

                  <div style={{ background: '#222733', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
                    <p style={{ color: '#c1ff72', fontWeight: '700', marginBottom: '8px' }}>Who this is for: The "Ghosted" Candidate</p>
                    <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.95rem' }}>
                      This is for anyone who has been applying to jobs but isn't getting interviews. If you are sending out applications and hearing nothing back, you need this audit to find the red flags causing the silence.
                    </p>
                  </div>

                  <h5 style={{ color: '#222733', fontWeight: '700', marginBottom: '16px' }}>What you get:</h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { icon: CheckCircle, title: '5-Minute Human Video Diagnostic:', desc: "I record my screen as I review your resume, talking through exactly what a recruiter sees in the first 6 seconds." },
                      { icon: CheckCircle, title: 'The Resume Scorecard:', desc: "A clear grade on your Formatting, Narrative, and Metrics." },
                      { icon: CheckCircle, title: 'Line-by-Line Suggested Edits:', desc: "I mark up your PDF with specific comments on what to cut, what to keep, and how to phrase your wins." },
                      { icon: CheckCircle, title: 'ATS Compliance Check:', desc: "Ensuring your fonts and layout are robot-friendly." },
                      { icon: Clock, title: '48-Hour Turnaround:', desc: "Get feedback fast so you can keep applying." }
                    ].map((item, i) => (
                      <li key={i} className="d-flex align-items-start mb-3">
                        <item.icon size={20} style={{ color: '#c1ff72', marginRight: '12px', marginTop: '2px', flexShrink: 0 }} />
                        <div>
                          <span style={{ fontWeight: '600', color: '#222733' }}>{item.title}</span>
                          <span style={{ color: '#64748b' }}> {item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
                  <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '32px', border: '2px solid #e2e8f0' }}>
                    <span style={{ fontSize: '3.5rem', fontWeight: '900', color: '#222733' }}>$69</span>
                    <p style={{ color: '#64748b', marginBottom: '24px' }}>One-time payment</p>
                    <button
                      onClick={handleScheduleConsult}
                      className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                      style={{ background: '#222733', color: '#ffffff', fontWeight: '700', padding: '14px 24px', borderRadius: '50px' }}
                    >
                      Get My Grade - $69
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 2: Deep Dive Workshop - FEATURED */}
            <div style={{ background: '#222733', borderRadius: '20px', padding: '40px', marginBottom: '32px', border: '3px solid #c1ff72', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#c1ff72', color: '#222733', fontWeight: '800', padding: '8px 24px', borderRadius: '50px', fontSize: '0.85rem' }}>
                MOST POPULAR
              </span>

              <div className="row align-items-start">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center mb-4">
                    <div style={{ background: '#0966ff', borderRadius: '12px', padding: '12px', marginRight: '16px' }}>
                      <Video size={28} style={{ color: '#ffffff' }} />
                    </div>
                    <div>
                      <h3 style={{ color: '#ffffff', fontWeight: '800', margin: 0 }}>Option 2: The "Deep Dive" Workshop</h3>
                      <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.95rem' }}>Collaborative, Strategic, & Excellent</p>
                    </div>
                  </div>

                  <div style={{ background: '#0966ff', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
                    <p style={{ color: '#ffffff', fontWeight: '700', marginBottom: '8px' }}>Who this is for: The Excellence Seeker</p>
                    <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.95rem' }}>
                      This is for people who want extra help and expert guidance to make their resume truly stand out. If you don't just want a "fix," but you want a strategist to work with you directly to craft a top-tier narrative, this is for you.
                    </p>
                  </div>

                  <h5 style={{ color: '#ffffff', fontWeight: '700', marginBottom: '16px' }}>What you get:</h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { icon: CheckCircle, title: '45-Minute Live Zoom Session:', desc: "We get on a call and do the work together." },
                      { icon: CheckCircle, title: 'Real-Time Resume Rewrite:', desc: "We don't just talk; we edit. We will rewrite your bullet points and summary live on the call." },
                      { icon: CheckCircle, title: 'Narrative Strategy:', desc: "We specifically tackle how to explain gaps, title changes, or industry pivots." },
                      { icon: CheckCircle, title: 'Session Recording:', desc: "You get the full video file of our call so you can re-watch the advice anytime." },
                      { icon: Award, title: 'Includes Everything in the "Redline" Audit.', desc: "" }
                    ].map((item, i) => (
                      <li key={i} className="d-flex align-items-start mb-3">
                        <item.icon size={20} style={{ color: '#c1ff72', marginRight: '12px', marginTop: '2px', flexShrink: 0 }} />
                        <div>
                          <span style={{ fontWeight: '600', color: '#ffffff' }}>{item.title}</span>
                          {item.desc && <span style={{ color: '#94a3b8' }}> {item.desc}</span>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
                  <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '32px', border: '2px solid rgba(255,255,255,0.2)' }}>
                    <span style={{ fontSize: '3.5rem', fontWeight: '900', color: '#c1ff72' }}>$129</span>
                    <p style={{ color: '#94a3b8', marginBottom: '24px' }}>One-time payment</p>
                    <button
                      onClick={handleScheduleConsult}
                      className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                      style={{ background: '#c1ff72', color: '#222733', fontWeight: '800', padding: '14px 24px', borderRadius: '50px' }}
                    >
                      Book Strategy Call - $129
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 3: Total Prep Bundle */}
            <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '40px', marginBottom: '60px', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
              <div className="row align-items-start">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center mb-4">
                    <div style={{ background: '#0966ff', borderRadius: '12px', padding: '12px', marginRight: '16px' }}>
                      <Briefcase size={28} style={{ color: '#ffffff' }} />
                    </div>
                    <div>
                      <h3 style={{ color: '#222733', fontWeight: '800', margin: 0 }}>Option 3: The "Total Prep" Bundle</h3>
                      <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem' }}>Comprehensive, Transformational, & Confidence-Boosting</p>
                    </div>
                  </div>

                  <div style={{ background: '#0966ff', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
                    <p style={{ color: '#ffffff', fontWeight: '700', marginBottom: '8px' }}>Who this is for: The "All-In" Candidate</p>
                    <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.95rem' }}>
                      For the person who wants zero doubt. If you get nervous in interviews or struggle to sell yourself verbally, we fix the resume to get you the door, and then we prep you to walk through it.
                    </p>
                  </div>

                  <h5 style={{ color: '#222733', fontWeight: '700', marginBottom: '16px' }}>What you get:</h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { icon: CheckCircle, title: '60-Minute Mock Interview:', desc: "A simulated interview tailored to your specific target job/industry." },
                      { icon: CheckCircle, title: 'Performance Critique:', desc: "I break down your answers, body language, and pacing, telling you exactly how to improve." },
                      { icon: CheckCircle, title: '"Tell Me About Yourself" Scripting:', desc: "We craft the perfect answer to the most common (and difficult) interview question." },
                      { icon: CheckCircle, title: 'Salary Negotiation Cheat Sheet:', desc: "Tips on how to ask for what you're worth." },
                      { icon: Award, title: 'Includes the Full "Deep Dive" Resume Workshop:', desc: "We do the resume overhaul first, then the interview prep." }
                    ].map((item, i) => (
                      <li key={i} className="d-flex align-items-start mb-3">
                        <item.icon size={20} style={{ color: '#c1ff72', marginRight: '12px', marginTop: '2px', flexShrink: 0 }} />
                        <div>
                          <span style={{ fontWeight: '600', color: '#222733' }}>{item.title}</span>
                          <span style={{ color: '#64748b' }}> {item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
                  <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '32px', border: '2px solid #e2e8f0' }}>
                    <span style={{ fontSize: '3.5rem', fontWeight: '900', color: '#222733' }}>$229</span>
                    <p style={{ color: '#64748b', marginBottom: '24px' }}>One-time payment</p>
                    <button
                      onClick={handleScheduleConsult}
                      className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                      style={{ background: '#222733', color: '#ffffff', fontWeight: '700', padding: '14px 24px', borderRadius: '50px' }}
                    >
                      Secure Your Future - $229
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision Helper Section */}
            <div style={{ background: '#222733', borderRadius: '20px', padding: '48px', border: '1px solid rgba(0, 0, 0, 0.1)' }}>
              <div className="text-center mb-5">
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', padding: '16px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}>
                  <HelpCircle size={36} style={{ color: '#c1ff72' }} />
                </div>
                <h3 style={{ color: '#ffffff', fontWeight: '900', fontStyle: 'italic', fontSize: '2rem', marginBottom: '8px' }}>
                  <RoughAnnotation type="underline" color="#c1ff72" strokeWidth={3} padding={2} show={heroVisible} animationDuration={1000}>
                    "Which One Is Right For Me?"
                  </RoughAnnotation>
                </h3>
                <p style={{ color: '#94a3b8' }}>If you are still on the fence, find your struggle below:</p>
              </div>

              <div className="row g-4">
                {/* Struggle 1 */}
                <div className="col-lg-4">
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '28px', height: '100%', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="d-flex align-items-start mb-3">
                      <AlertCircle size={22} style={{ color: '#c1ff72', marginRight: '12px', marginTop: '2px', flexShrink: 0 }} />
                      <p style={{ color: '#ffffff', fontWeight: '600', margin: 0 }}>
                        "I have applied to 50 jobs and haven't heard a single thing back."
                      </p>
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '16px' }}>
                      <span style={{ fontWeight: '600', color: '#ffffff' }}>Recommendation:</span> Start with the Redline Audit ($69). Your resume likely has a formatting or keyword error that is getting you auto-rejected.
                    </p>
                    <span style={{ background: '#c1ff72', color: '#222733', fontWeight: '700', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem' }}>Redline Audit</span>
                  </div>
                </div>

                {/* Struggle 2 */}
                <div className="col-lg-4">
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '28px', height: '100%', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="d-flex align-items-start mb-3">
                      <Target size={22} style={{ color: '#0966ff', marginRight: '12px', marginTop: '2px', flexShrink: 0 }} />
                      <p style={{ color: '#ffffff', fontWeight: '600', margin: 0 }}>
                        "I want my resume to be perfect and I want a professional to help me build it."
                      </p>
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '16px' }}>
                      <span style={{ fontWeight: '600', color: '#ffffff' }}>Recommendation:</span> You need the Deep Dive ($129). Excellence requires collaboration. We will work together to ensure your experience looks impressive.
                    </p>
                    <span style={{ background: '#0966ff', color: '#ffffff', fontWeight: '700', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem' }}>Deep Dive Workshop</span>
                  </div>
                </div>

                {/* Struggle 3 */}
                <div className="col-lg-4">
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '28px', height: '100%', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="d-flex align-items-start mb-3">
                      <MessageSquare size={22} style={{ color: '#c1ff72', marginRight: '12px', marginTop: '2px', flexShrink: 0 }} />
                      <p style={{ color: '#ffffff', fontWeight: '600', margin: 0 }}>
                        "I get interviews, but I never get the offer."
                      </p>
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '16px' }}>
                      <span style={{ fontWeight: '600', color: '#ffffff' }}>Recommendation:</span> You need the Total Prep Bundle ($229). Your resume is working, but your interview skills are closing the door.
                    </p>
                    <span style={{ background: '#ffffff', color: '#222733', fontWeight: '700', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem' }}>Total Prep Bundle</span>
                  </div>
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

export default ServicesPage;
