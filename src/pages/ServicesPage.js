import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Play, Calendar, Clock, Video, FileText, Users, Mic
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoughAnnotation from '../components/RoughAnnotation';

const ServicesPage = () => {
  const navigate = useNavigate();
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
        <section style={{ background: '#222733', padding: '120px 0 100px' }}>
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
              Our Services
            </span>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              fontStyle: 'italic',
              color: '#ffffff',
              lineHeight: '1.1',
              marginBottom: '24px'
            }}>
              Expert Help,{' '}
              <RoughAnnotation type="underline" color="#c1ff72" strokeWidth={3} padding={2} show={heroVisible} animationDuration={1000}>
                Your Way
              </RoughAnnotation>
            </h1>
            <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
              Choose between asynchronous video feedback delivered to your inbox, or live coaching sessions over Zoom. Every option includes real human expertise with our team providing detailed feedback on your resume.
            </p>
          </div>
        </section>

        {/* Video Delivered Section */}
        <section style={{ background: '#ffffff', padding: '100px 0' }}>
          <div className="container">
            {/* Section Header with Image */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div style={{ background: '#0966ff', borderRadius: '12px', padding: '14px' }}>
                    <Play size={28} style={{ color: '#ffffff' }} aria-hidden="true" />
                  </div>
                  <span style={{ display: 'inline-block', background: '#0966ff', color: '#ffffff', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', padding: '8px 20px', borderRadius: '50px', fontWeight: '700' }}>Video Delivered</span>
                </div>
                <h2 style={{ color: '#222733', fontWeight: '900', fontStyle: 'italic', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '16px' }}>
                  Get Expert Feedback{' '}
                  <RoughAnnotation type="circle" color="#0966ff" strokeWidth={2} padding={8} show={heroVisible} animationDuration={1200}>
                    On Your Schedule
                  </RoughAnnotation>
                </h2>
                <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '24px' }}>
                  Perfect for busy professionals. Submit your resume anytime, and receive a personalized video review within 72 business hours. No scheduling required, no time slots to squeeze into. Watch, rewatch, and implement changes at your own pace.
                </p>
                <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px 24px', border: '1px solid #e2e8f0' }}>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <Clock size={18} style={{ color: '#0966ff' }} aria-hidden="true" />
                    <strong style={{ color: '#222733' }}>How it works:</strong>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
                    Submit your resume → We analyze it thoroughly → You receive a personalized video within 72 hours
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src="/images/interview-success-alt.png"
                  alt="Professional reviewing documents"
                  style={{
                    width: '100%',
                    borderRadius: '20px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                  }}
                />
              </div>
            </div>

            {/* Video Delivered Service Cards */}
            <div className="row g-4 justify-content-center" style={{ marginTop: '48px' }}>
              {/* Resume Audit */}
              <div className="col-lg-6">
                <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '40px', height: '100%', border: '1px solid #e2e8f0' }}>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div style={{ background: 'rgba(9, 102, 255, 0.1)', borderRadius: '12px', padding: '12px' }}>
                      <Video size={24} style={{ color: '#0966ff' }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 style={{ color: '#222733', fontWeight: '800', marginBottom: '4px', fontSize: '1.5rem' }}>Resume Audit</h3>
                      <span style={{ color: '#0966ff', fontWeight: '700', fontSize: '0.85rem' }}>Guidance & Feedback</span>
                    </div>
                  </div>

                  <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7', marginBottom: '20px' }}>
                    We analyze your resume and identify key issues like ATS keyword gaps, inconsistent dates, formatting problems, and weak bullet points. Then we record a video walking through your resume exactly as a recruiter would see it, explaining what's working and what's not.
                  </p>

                  <div style={{ background: '#ffffff', borderRadius: '12px', padding: '16px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
                    <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0, fontStyle: 'italic' }}>
                      "You make the changes yourself with our expert guidance. The primary deliverable is a personalized video that goes over exactly what's happening with your resume."
                    </p>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                    {['Personalized Video Diagnostic', 'Detailed Suggested Edits', 'ATS Compliance Check', 'Strengths & Weaknesses Breakdown'].map((item, i) => (
                      <li key={i} className="d-flex align-items-center gap-2 mb-3">
                        <CheckCircle size={18} style={{ color: '#0966ff', flexShrink: 0 }} aria-hidden="true" />
                        <span style={{ color: '#475569', fontSize: '0.95rem' }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <span style={{ fontSize: '2.5rem', fontWeight: '900', color: '#222733' }}>$69</span>
                    <button
                      onClick={() => navigate('/results/audit')}
                      className="btn d-flex align-items-center gap-2"
                      style={{ background: '#0966ff', color: '#ffffff', fontWeight: '700', padding: '14px 28px', borderRadius: '12px', fontSize: '0.9rem' }}
                    >
                      Get Started
                      <ArrowRight size={18} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Resume Rewrite */}
              <div className="col-lg-6">
                <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '40px', height: '100%', border: '1px solid #e2e8f0' }}>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div style={{ background: 'rgba(9, 102, 255, 0.1)', borderRadius: '12px', padding: '12px' }}>
                      <FileText size={24} style={{ color: '#0966ff' }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 style={{ color: '#222733', fontWeight: '800', marginBottom: '4px', fontSize: '1.5rem' }}>Resume Rewrite</h3>
                      <span style={{ color: '#0966ff', fontWeight: '700', fontSize: '0.85rem' }}>We Do The Work</span>
                    </div>
                  </div>

                  <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7', marginBottom: '20px' }}>
                    We take your existing resume (or just your background info if you don't have one) and completely rewrite it from scratch. Then we record a video comparing your old resume to the new one, explaining every change we made and why.
                  </p>

                  <div style={{ background: '#ffffff', borderRadius: '12px', padding: '16px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
                    <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0, fontStyle: 'italic' }}>
                      "Don't have a resume? No problem. Just submit your background information and we'll create a professional resume for you from scratch."
                    </p>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                    {['Complete Resume Rewrite', 'Video Walkthrough of All Changes', 'Works With or Without Existing Resume', 'ATS-Optimized Formatting'].map((item, i) => (
                      <li key={i} className="d-flex align-items-center gap-2 mb-3">
                        <CheckCircle size={18} style={{ color: '#0966ff', flexShrink: 0 }} aria-hidden="true" />
                        <span style={{ color: '#475569', fontSize: '0.95rem' }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <span style={{ fontSize: '2.5rem', fontWeight: '900', color: '#222733' }}>$109</span>
                    <button
                      onClick={() => navigate('/results/rewrite')}
                      className="btn d-flex align-items-center gap-2"
                      style={{ background: '#0966ff', color: '#ffffff', fontWeight: '700', padding: '14px 28px', borderRadius: '12px', fontSize: '0.9rem' }}
                    >
                      Get Started
                      <ArrowRight size={18} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prominent Divider Section */}
        <section style={{ background: '#222733', padding: '100px 0' }}>
          <div className="container text-center">
            <h2 style={{ color: '#ffffff', fontWeight: '900', fontStyle: 'italic', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '16px' }}>
              Need More{' '}
              <RoughAnnotation type="underline" color="#c1ff72" strokeWidth={3} padding={2} show={heroVisible} animationDuration={1000}>
                Hands-On
              </RoughAnnotation>{' '}
              Guidance?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.2rem', margin: 0 }}>
              Work with us live over Zoom. Ask questions, get immediate answers, and watch your resume transform in real-time.
            </p>
          </div>
        </section>

        {/* Live Call Section */}
        <section style={{ background: '#ffffff', padding: '100px 0' }}>
          <div className="container">
            {/* Section Header with Image */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div style={{ background: '#222733', borderRadius: '12px', padding: '14px' }}>
                    <Calendar size={28} style={{ color: '#ffffff' }} aria-hidden="true" />
                  </div>
                  <span style={{ display: 'inline-block', background: '#c1ff72', color: '#222733', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', padding: '8px 20px', borderRadius: '50px', fontWeight: '700' }}>Live Call</span>
                </div>
                <h2 style={{ color: '#222733', fontWeight: '900', fontStyle: 'italic', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '16px' }}>
                  <RoughAnnotation type="box" color="#222733" strokeWidth={2} padding={8} show={heroVisible} animationDuration={1200}>
                    Real-Time Coaching
                  </RoughAnnotation>{' '}
                  Over Zoom
                </h2>
                <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '24px' }}>
                  For those who want a more hands-on approach. Meet with a recruiter one-on-one over Zoom, ask questions as they come up, and get immediate feedback tailored to your specific situation.
                </p>
                <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px 24px', border: '1px solid #e2e8f0' }}>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <Users size={18} style={{ color: '#222733' }} aria-hidden="true" />
                    <strong style={{ color: '#222733' }}>How it works:</strong>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
                    Book a time that works for you → Meet over Zoom → Walk away with a transformed resume
                  </p>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <img
                  src="/images/coaching.png"
                  alt="Live coaching session"
                  style={{
                    width: '100%',
                    borderRadius: '20px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                  }}
                />
              </div>
            </div>

            {/* Live Call Service Cards */}
            <div className="row g-4 justify-content-center" style={{ marginTop: '48px' }}>
              {/* Resume Workshop */}
              <div className="col-lg-6">
                <div style={{ background: '#222733', borderRadius: '20px', padding: '40px', height: '100%', border: '3px solid #c1ff72', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '-14px', left: '32px', background: '#c1ff72', color: '#222733', fontWeight: '800', padding: '6px 16px', borderRadius: '8px', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    Most Popular
                  </span>

                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div style={{ background: 'rgba(193, 255, 114, 0.15)', borderRadius: '12px', padding: '12px' }}>
                      <Users size={24} style={{ color: '#c1ff72' }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 style={{ color: '#ffffff', fontWeight: '800', marginBottom: '4px', fontSize: '1.5rem' }}>Resume Workshop</h3>
                      <span style={{ color: '#c1ff72', fontWeight: '700', fontSize: '0.85rem' }}>Live 1-on-1 Session</span>
                    </div>
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.7', marginBottom: '20px' }}>
                    A 45-minute live Zoom meeting where we review your resume together, discuss your background, and make edits in real-time. This is perfect for career changers, those with complex work histories, or anyone who wants to ask questions throughout the process.
                  </p>

                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0, fontStyle: 'italic' }}>
                      "Need a resume created from scratch? We can build one together live based on your background information."
                    </p>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                    {['45 Minute Live Video Call', 'Real-Time Resume Edits', 'Expert Career Guidance', 'Session Recording Included'].map((item, i) => (
                      <li key={i} className="d-flex align-items-center gap-2 mb-3">
                        <CheckCircle size={18} style={{ color: '#c1ff72', flexShrink: 0 }} aria-hidden="true" />
                        <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <span style={{ fontSize: '2.5rem', fontWeight: '900', color: '#c1ff72' }}>$129</span>
                    <button
                      onClick={() => navigate('/results/workshop')}
                      className="btn d-flex align-items-center gap-2"
                      style={{ background: '#c1ff72', color: '#222733', fontWeight: '800', padding: '14px 28px', borderRadius: '12px', fontSize: '0.9rem' }}
                    >
                      Book Session
                      <ArrowRight size={18} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Workshop + Interview */}
              <div className="col-lg-6">
                <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '40px', height: '100%', border: '1px solid #e2e8f0' }}>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div style={{ background: 'rgba(34, 39, 51, 0.1)', borderRadius: '12px', padding: '12px' }}>
                      <Mic size={24} style={{ color: '#222733' }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 style={{ color: '#222733', fontWeight: '800', marginBottom: '4px', fontSize: '1.5rem' }}>Workshop + Interview Prep</h3>
                      <span style={{ color: '#222733', fontWeight: '700', fontSize: '0.85rem' }}>Our Most Comprehensive Package</span>
                    </div>
                  </div>

                  <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7', marginBottom: '20px' }}>
                    Our premium offering. We start with a mock interview tailored to your target industry and role. Then we break down your performance, covering body language, appearance, professionalism, and answers. Finally, we do a full resume workshop with live rewrites.
                  </p>

                  <div style={{ background: '#ffffff', borderRadius: '12px', padding: '16px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
                    <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0, fontStyle: 'italic' }}>
                      "Get real interview experience to reduce anxiety, identify issues with your current approach, and walk away with a polished resume."
                    </p>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                    {['Mock Interview for Your Industry', 'Detailed Performance Breakdown', 'Full Resume Workshop', 'Written Post-Analysis Guide'].map((item, i) => (
                      <li key={i} className="d-flex align-items-center gap-2 mb-3">
                        <CheckCircle size={18} style={{ color: '#c1ff72', flexShrink: 0 }} aria-hidden="true" />
                        <span style={{ color: '#475569', fontSize: '0.95rem' }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <span style={{ fontSize: '2.5rem', fontWeight: '900', color: '#222733' }}>$229</span>
                    <button
                      onClick={() => navigate('/results/bundle')}
                      className="btn d-flex align-items-center gap-2"
                      style={{ background: '#222733', color: '#ffffff', fontWeight: '700', padding: '14px 28px', borderRadius: '12px', fontSize: '0.9rem' }}
                    >
                      Book Session
                      <ArrowRight size={18} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Not Sure Section */}
        <section style={{ background: '#222733', padding: '100px 0' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h3 style={{ color: '#ffffff', fontWeight: '800', fontSize: '2rem', marginBottom: '20px' }}>
                  Not Sure Which to Pick?
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '1.15rem', marginBottom: '40px', lineHeight: '1.7' }}>
                  Start with the <strong style={{ color: '#c1ff72' }}>Resume Audit ($69)</strong>. It's the fastest way to identify what's holding you back. You can always upgrade to a live session later.
                </p>
                <button
                  onClick={() => navigate('/results')}
                  className="btn btn-lg d-inline-flex align-items-center gap-2"
                  style={{ background: '#c1ff72', color: '#222733', fontWeight: '800', padding: '18px 36px', borderRadius: '12px', fontSize: '1.05rem' }}
                >
                  View All Options
                  <ArrowRight size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section style={{ background: '#0966ff', padding: '40px 0' }}>
          <div className="container">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <CheckCircle size={20} color="#ffffff" aria-hidden="true" />
              <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600', margin: 0 }}>
                All services provided by verified recruiters with real hiring experience.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
