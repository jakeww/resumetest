import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield, Lock, CheckCircle,
  Award, TrendingUp, BarChart3, Mail, Video, Users, Briefcase,
  XCircle, Upload, ClipboardList, PlayCircle, FileText, CheckSquare, ArrowRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoughAnnotation from '../components/RoughAnnotation';
import OrganicBlob from '../components/OrganicBlob';
import HandDrawnArrow, { HandDrawnCurvedArrow } from '../components/HandDrawnArrow';

const LandingPage = () => {
  const navigate = useNavigate();

  const reviews = [
    { name: "Priya S.", location: "Data Analyst", initials: "PS", color: "#0966ff", quote: "Finally, someone who actually explains WHY things need to change instead of just marking up the document. The video breakdown was incredibly thorough.", stars: 5 },
    { name: "Marcus J.", location: "Recent Graduate", initials: "MJ", color: "#c1ff72", textColor: "#222733", quote: "Went from hearing nothing back to getting calls within days. Can't recommend enough.", stars: 5 },
    { name: "Tomoko H.", location: "UX Designer", initials: "TH", color: "#0966ff", quote: "I've used other resume services before and they all felt generic. This felt like talking to someone who actually understood my field.", stars: 5 },
    { name: "Derek W.", location: "Operations Manager", initials: "DW", color: "#c1ff72", textColor: "#222733", quote: "Solid feedback, quick turnaround. My only note is I wish there was a follow-up option included, but overall very happy.", stars: 4 },
    { name: "Oluwaseun A.", location: "Financial Analyst", initials: "OA", color: "#0966ff", quote: "The ATS stuff alone was worth it. Had no clue my formatting was getting me auto-rejected.", stars: 5 },
    { name: "Rachel M.", location: "Career Changer", initials: "RM", color: "#c1ff72", textColor: "#222733", quote: "Honestly wasn't sure a resume review would help that much but the live session completely changed how I talk about my experience.", stars: 5 },
    { name: "Kenji T.", location: "Software Engineer", initials: "KT", color: "#0966ff", quote: "Good overall. Some suggestions felt a bit general but the structure recommendations were spot on.", stars: 4 }
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });
  const pauseTimeoutRef = useRef(null);

  const extendedReviews = [...reviews, ...reviews, ...reviews];

  // Trigger hero animation on mount
  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 300);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused || isDragging) return;

    let animationId;
    const singleSetWidth = container.scrollWidth / 3;

    const scroll = () => {
      container.scrollLeft += 0.5;
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft = singleSetWidth;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isDragging]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setTimeout(() => {
        container.scrollLeft = container.scrollWidth / 3;
      }, 100);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 3000);
  };

  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    setIsDragging(true);
    setDragStart({ x: e.pageX - container.offsetLeft, scrollLeft: container.scrollLeft });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    const x = e.pageX - container.offsetLeft;
    container.scrollLeft = dragStart.scrollLeft - (x - dragStart.x) * 2;
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    const container = scrollContainerRef.current;
    setIsDragging(true);
    setDragStart({ x: e.touches[0].clientX - container.offsetLeft, scrollLeft: container.scrollLeft });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const container = scrollContainerRef.current;
    const x = e.touches[0].clientX - container.offsetLeft;
    container.scrollLeft = dragStart.scrollLeft - (x - dragStart.x) * 2;
  };

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ background: '#222733' }}>
      <Header />

      {/* Hero Section - Dark Background */}
      <section style={{ background: '#222733', padding: '120px 0 100px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '900',
                fontStyle: 'italic',
                color: '#ffffff',
                lineHeight: '1.1',
                marginBottom: '24px'
              }}>
                Your Resume Is{' '}
                <RoughAnnotation type="circle" color="#0966ff" strokeWidth={3} padding={8} show={heroVisible} animationDuration={1200}>
                  Holding You Back
                </RoughAnnotation>
              </h1>

              <p style={{ fontSize: '1.3rem', color: '#94a3b8', marginBottom: '40px', maxWidth: '550px', lineHeight: '1.6' }}>
                You are qualified. Your resume isn't showing it. Get reviewed by{' '}
                <RoughAnnotation type="underline" color="#c1ff72" strokeWidth={2} show={heroVisible} animationDuration={1000}>
                  real HR professionals
                </RoughAnnotation>{' '}
                who know exactly what hiring managers want to see.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <span className="tag tag-white">Real Humans</span>
                <span className="tag tag-white">Real Answers</span>
                <span className="tag tag-lime">Real Results</span>
              </div>

              <button
                onClick={() => navigate('/results')}
                className="btn btn-lg d-inline-flex align-items-center gap-2"
                style={{
                  background: '#c1ff72',
                  color: '#222733',
                  fontWeight: '800',
                  padding: '18px 36px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Fix Your Resume Today
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <div style={{ position: 'relative' }}>
                <OrganicBlob
                  color="#c1ff72"
                  size={450}
                  opacity={0.15}
                  variant={1}
                  style={{ top: '-50px', right: '-50px', zIndex: 0 }}
                />
                <img
                  src="/images/searching.png"
                  alt="Job seeker reviewing resume"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '20px',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ background: '#0966ff', padding: '40px 0' }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <Shield size={20} style={{ color: '#ffffff' }} />
              <span style={{ color: '#ffffff', fontWeight: '600' }}>Data Protected</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Award size={20} style={{ color: '#ffffff' }} />
              <span style={{ color: '#ffffff', fontWeight: '600' }}>Expert Reviewed</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Users size={20} style={{ color: '#ffffff' }} />
              <span style={{ color: '#ffffff', fontWeight: '600' }}>100% Human Attention</span>
            </div>
          </div>
        </div>
      </section>

      {/*
        ============================================================================
        TESTIMONIALS SECTION - TEMPORARILY HIDDEN
        ============================================================================
        DO NOT DELETE THIS SECTION!

        This testimonials/reviews section is intentionally hidden, not removed.
        It will be brought back in the future once we have real client testimonials.
        The carousel functionality and styling is complete and working.

        To re-enable: Simply uncomment the section below and remove this comment block.
        ============================================================================
      */}
      {/*
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="tag mb-3" style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '50px',
              background: 'rgba(9, 102, 255, 0.1)',
              color: '#0966ff',
              fontWeight: '700',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Testimonials
            </span>
            <h2 style={{ color: '#222733', fontWeight: '900', fontStyle: 'italic', fontSize: '2.5rem', marginBottom: '0' }}>
              What Our{' '}
              <RoughAnnotation type="circle" color="#0966ff" strokeWidth={2} padding={8} show={heroVisible} animationDuration={1200}>
                Clients
              </RoughAnnotation>{' '}
              Say
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, #ffffff 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />

            <div
              ref={scrollContainerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={(e) => { handleMouseLeave(); handleMouseUp(); }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => setIsDragging(false)}
              style={{ display: 'flex', overflowX: 'hidden', cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
            >
              {extendedReviews.map((review, index) => (
                <div key={index} style={{ width: '340px', margin: '0 12px', flexShrink: 0 }}>
                  <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '24px', height: '100%', border: '1px solid rgba(0,0,0,0.08)' }}>
                    <div className="d-flex align-items-center mb-3">
                      <div style={{
                        width: '48px', height: '48px', borderRadius: '50%',
                        background: review.color, color: review.textColor || '#ffffff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: '700', fontSize: '0.9rem', marginRight: '12px'
                      }}>
                        {review.initials}
                      </div>
                      <div>
                        <div style={{ fontWeight: '700', color: '#222733' }}>{review.name}</div>
                        <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{review.location}</div>
                      </div>
                    </div>
                    <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '16px' }}>
                      "{review.quote}"
                    </p>
                    <div className="d-flex">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} size={16} style={{ color: i < review.stars ? '#c1ff72' : '#e2e8f0', marginRight: '2px' }} fill={i < review.stars ? '#c1ff72' : 'none'} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}
      {/* END HIDDEN TESTIMONIALS SECTION */}

      {/* Results Section - White Background */}
      <section style={{ background: '#ffffff', padding: '120px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="tag mb-3" style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '12px',
              background: 'rgba(9, 102, 255, 0.1)',
              color: '#0966ff',
              fontWeight: '700',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              What You Get
            </span>
            <h2 style={{ color: '#222733', fontWeight: '900', fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
              Finally Understand{' '}
              <RoughAnnotation type="underline" color="#c1ff72" strokeWidth={3} show={heroVisible} animationDuration={1000}>
                Why You're Not Getting Callbacks
              </RoughAnnotation>
            </h2>
            <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              Our experts identify the gaps, fix the issues, and get your resume into the hands of recruiters who matter.
            </p>
          </div>

          {/* Results Grid */}
          <div className="row justify-content-center g-4 mb-5">
            <div className="col-lg-4 col-md-6">
              <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '32px', height: '100%', border: '1px solid rgba(0,0,0,0.08)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(9, 102, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <ClipboardList size={28} style={{ color: '#0966ff' }} />
                </div>
                <h4 style={{ color: '#222733', fontWeight: '800', marginBottom: '12px' }}>Identify the Gaps</h4>
                <p style={{ color: '#64748b', margin: 0, lineHeight: '1.6' }}>
                  Find out exactly what's missing from your resume and why recruiters are passing you over.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '32px', height: '100%', border: '1px solid rgba(0,0,0,0.08)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(9, 102, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <CheckSquare size={28} style={{ color: '#0966ff' }} />
                </div>
                <h4 style={{ color: '#222733', fontWeight: '800', marginBottom: '12px' }}>Beat the ATS Filters</h4>
                <p style={{ color: '#64748b', margin: 0, lineHeight: '1.6' }}>
                  Get past automated screening systems that reject resumes before humans ever see them.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '32px', height: '100%', border: '1px solid rgba(0,0,0,0.08)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(9, 102, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Users size={28} style={{ color: '#0966ff' }} />
                </div>
                <h4 style={{ color: '#222733', fontWeight: '800', marginBottom: '12px' }}>Get to Real Recruiters</h4>
                <p style={{ color: '#64748b', margin: 0, lineHeight: '1.6' }}>
                  Land your resume on the desk of hiring managers who can actually make decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="row justify-content-center g-4 position-relative">
            <div className="d-none d-lg-block" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              <HandDrawnArrow color="#c1ff72" width={100} height={50} strokeWidth={4} direction="right" />
            </div>

            <div className="col-lg-5 col-md-6">
              <div style={{ background: '#222733', borderRadius: '20px', padding: '32px', height: '100%' }}>
                <div className="d-flex align-items-center mb-4">
                  <XCircle size={28} style={{ color: '#94a3b8', marginRight: '12px' }} />
                  <h4 style={{ color: '#ffffff', fontWeight: '800', margin: 0 }}>Before</h4>
                </div>

                <div style={{ marginBottom: '24px', position: 'relative' }}>
                  <img
                    src="/images/interview-fail.png"
                    alt="Job seeker waiting"
                    style={{
                      width: '100%',
                      borderRadius: '12px',
                      opacity: 0.7
                    }}
                  />
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                    <XCircle size={18} style={{ color: '#64748b', marginRight: '10px', flexShrink: 0 }} />
                    <span style={{ color: '#94a3b8' }}>Sending applications into the void</span>
                  </li>
                  <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                    <XCircle size={18} style={{ color: '#64748b', marginRight: '10px', flexShrink: 0 }} />
                    <span style={{ color: '#94a3b8' }}>No idea why you're being rejected</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <XCircle size={18} style={{ color: '#64748b', marginRight: '10px', flexShrink: 0 }} />
                    <span style={{ color: '#94a3b8' }}>Guessing what recruiters want</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5 col-md-6">
              <div style={{ background: '#c1ff72', borderRadius: '20px', padding: '32px', height: '100%' }}>
                <div className="d-flex align-items-center mb-4">
                  <CheckCircle size={28} style={{ color: '#222733', marginRight: '12px' }} />
                  <h4 style={{ color: '#222733', fontWeight: '800', margin: 0 }}>After</h4>
                </div>

                <div style={{ marginBottom: '24px', position: 'relative' }}>
                  <img
                    src="/images/interview-success.png"
                    alt="Successful interview"
                    style={{
                      width: '100%',
                      borderRadius: '12px'
                    }}
                  />
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                    <CheckCircle size={18} style={{ color: '#222733', marginRight: '10px', flexShrink: 0 }} />
                    <span style={{ color: '#222733', fontWeight: '500' }}>Getting callbacks within days</span>
                  </li>
                  <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                    <CheckCircle size={18} style={{ color: '#222733', marginRight: '10px', flexShrink: 0 }} />
                    <span style={{ color: '#222733', fontWeight: '500' }}>Knowing exactly what to fix</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle size={18} style={{ color: '#222733', marginRight: '10px', flexShrink: 0 }} />
                    <span style={{ color: '#222733', fontWeight: '500' }}>Confident your resume works</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ChatGPT Section - Dark Background */}
      <section style={{ background: '#222733', padding: '100px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <span className="tag mb-3" style={{
                display: 'inline-block',
                padding: '8px 20px',
                borderRadius: '12px',
                background: 'rgba(193, 255, 114, 0.15)',
                color: '#c1ff72',
                fontWeight: '700',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Why Human Review
              </span>
              <h2 style={{ color: '#ffffff', fontWeight: '900', fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '24px', lineHeight: '1.1' }}>
                ChatGPT Can't Get You Hired.{' '}
                <RoughAnnotation type="underline" color="#c1ff72" strokeWidth={3} show={heroVisible} animationDuration={1000}>
                  We Can.
                </RoughAnnotation>
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1.15rem', marginBottom: '32px', lineHeight: '1.7' }}>
                AI writes for the average. We write for the exception. Our human experts understand the nuance that algorithms miss - career gaps, industry pivots, soft skills that matter.
              </p>
              <button
                onClick={() => navigate('/results')}
                className="btn btn-lg d-inline-flex align-items-center gap-2"
                style={{
                  background: '#c1ff72',
                  color: '#222733',
                  fontWeight: '800',
                  padding: '18px 36px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Get Human Help
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="col-lg-6">
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="d-flex align-items-start mb-4">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#0966ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', flexShrink: 0 }}>
                    <Users size={24} style={{ color: '#ffffff' }} />
                  </div>
                  <div>
                    <h5 style={{ color: '#ffffff', fontWeight: '700', marginBottom: '4px' }}>Real recruiters reviewing your resume</h5>
                    <p style={{ color: '#94a3b8', margin: 0 }}>Not a bot. Not an algorithm. A person who has hired hundreds of candidates.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#0966ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', flexShrink: 0 }}>
                    <Video size={24} style={{ color: '#ffffff' }} />
                  </div>
                  <div>
                    <h5 style={{ color: '#ffffff', fontWeight: '700', marginBottom: '4px' }}>Personalized video feedback</h5>
                    <p style={{ color: '#94a3b8', margin: 0 }}>Watch a recruiter review your resume and explain exactly what to change.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#0966ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', flexShrink: 0 }}>
                    <TrendingUp size={24} style={{ color: '#ffffff' }} />
                  </div>
                  <div>
                    <h5 style={{ color: '#ffffff', fontWeight: '700', marginBottom: '4px' }}>Results that actually work</h5>
                    <p style={{ color: '#94a3b8', margin: 0 }}>87% of our clients see more interview requests within weeks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process - White */}
      <section style={{ background: '#ffffff', padding: '120px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="tag mb-3" style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '12px',
              background: 'rgba(9, 102, 255, 0.1)',
              color: '#0966ff',
              fontWeight: '700',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              How It Works
            </span>
            <h2 style={{ color: '#222733', fontWeight: '900', fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
              <RoughAnnotation type="box" color="#0966ff" strokeWidth={2} padding={6} show={heroVisible} animationDuration={1000}>
                5 Steps
              </RoughAnnotation>{' '}
              to a Better Resume
            </h2>
            <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              We don't just edit. We transform how you present yourself.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Progress Steps */}
              <div className="d-flex justify-content-between align-items-center position-relative mb-5">
                <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '3px', background: '#e2e8f0', transform: 'translateY(-50%)', zIndex: 0 }}>
                  <div style={{ height: '100%', width: `${(activeStep / 4) * 100}%`, background: '#0966ff', transition: 'width 0.3s ease' }} />
                </div>

                {[
                  { step: 1, title: "Submit", icon: Upload },
                  { step: 2, title: "Grade", icon: ClipboardList },
                  { step: 3, title: "Video", icon: PlayCircle },
                  { step: 4, title: "Edits", icon: FileText },
                  { step: 5, title: "Apply", icon: CheckSquare }
                ].map((item, index) => (
                  <div key={index} className="text-center position-relative" style={{ zIndex: 1, cursor: 'pointer' }} onClick={() => setActiveStep(index)}>
                    <div style={{
                      width: '56px', height: '56px', borderRadius: '50%',
                      background: index <= activeStep ? '#0966ff' : '#e2e8f0',
                      border: index === activeStep ? '3px solid #222733' : 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease', transform: index === activeStep ? 'scale(1.15)' : 'scale(1)',
                      margin: '0 auto 8px'
                    }}>
                      {index < activeStep ? (
                        <CheckCircle size={24} style={{ color: '#ffffff' }} />
                      ) : (
                        <item.icon size={24} style={{ color: index <= activeStep ? '#ffffff' : '#64748b' }} />
                      )}
                    </div>
                    <small style={{ color: index <= activeStep ? '#222733' : '#64748b', fontWeight: index === activeStep ? '700' : '500', fontSize: '0.8rem' }}>
                      {item.title}
                    </small>
                  </div>
                ))}
              </div>

              {/* Step Content */}
              <div style={{ background: '#222733', borderRadius: '20px', padding: '48px', position: 'relative', overflow: 'hidden' }}>
                <OrganicBlob
                  color="#0966ff"
                  size={300}
                  opacity={0.1}
                  variant={2}
                  style={{ top: '-100px', right: '-100px', zIndex: 0 }}
                />
                <div className="row align-items-center" style={{ minHeight: '220px', position: 'relative', zIndex: 1 }}>
                  <div className="col-md-7 mb-4 mb-md-0">
                    <div className="d-flex align-items-center mb-3">
                      {activeStep === 0 && <Upload size={36} style={{ color: '#0966ff', marginRight: '16px' }} />}
                      {activeStep === 1 && <ClipboardList size={36} style={{ color: '#0966ff', marginRight: '16px' }} />}
                      {activeStep === 2 && <PlayCircle size={36} style={{ color: '#0966ff', marginRight: '16px' }} />}
                      {activeStep === 3 && <FileText size={36} style={{ color: '#0966ff', marginRight: '16px' }} />}
                      {activeStep === 4 && <CheckSquare size={36} style={{ color: '#c1ff72', marginRight: '16px' }} />}
                      <h3 style={{ color: '#ffffff', fontWeight: '800', margin: 0 }}>
                        {activeStep === 0 && "Step 1: Submit Your Resume"}
                        {activeStep === 1 && "Step 2: Get Your Grade"}
                        {activeStep === 2 && "Step 3: Watch Your Video"}
                        {activeStep === 3 && "Step 4: Get Your Edits"}
                        {activeStep === 4 && "Step 5: Start Applying"}
                      </h3>
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
                      {activeStep === 0 && "Send us your current resume and a target job description. We'll analyze it against what hiring managers actually want to see."}
                      {activeStep === 1 && "We score your resume across 30+ factors. You'll know exactly where you're strong and where you're losing opportunities."}
                      {activeStep === 2 && "Get a personalized video walkthrough explaining every issue and exactly how to fix it. No generic advice."}
                      {activeStep === 3 && "Receive detailed edits or work with us live to rebuild your resume from the ground up."}
                      {activeStep === 4 && "Apply with confidence. Your resume has been reviewed by someone who knows what works."}
                    </p>
                    {activeStep < 4 ? (
                      <button onClick={() => setActiveStep(activeStep + 1)} className="btn" style={{ background: '#0966ff', color: '#ffffff', fontWeight: '700', padding: '14px 32px', borderRadius: '12px' }}>
                        Next Step
                      </button>
                    ) : (
                      <button onClick={() => navigate('/results')} className="btn" style={{ background: '#c1ff72', color: '#222733', fontWeight: '700', padding: '14px 32px', borderRadius: '12px' }}>
                        Get Started Now
                      </button>
                    )}
                  </div>
                  <div className="col-md-5 text-center">
                    <div style={{ background: activeStep === 4 ? '#c1ff72' : 'rgba(9, 102, 255, 0.15)', borderRadius: '16px', padding: '40px' }}>
                      {activeStep === 0 && <Mail size={72} style={{ color: '#0966ff' }} />}
                      {activeStep === 1 && (
                        <div className="d-flex justify-content-center gap-4">
                          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#ffffff', fontWeight: '800' }}>D-</span>
                          </div>
                          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#c1ff72', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#222733', fontWeight: '800' }}>A+</span>
                          </div>
                        </div>
                      )}
                      {activeStep === 2 && <Video size={72} style={{ color: '#0966ff' }} />}
                      {activeStep === 3 && <FileText size={72} style={{ color: '#0966ff' }} />}
                      {activeStep === 4 && <CheckCircle size={72} style={{ color: '#222733' }} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Dark Background */}
      <section id="pricing-section" style={{ background: '#222733', padding: '120px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="tag mb-3" style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '12px',
              background: 'rgba(193, 255, 114, 0.15)',
              color: '#c1ff72',
              fontWeight: '700',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Pricing
            </span>
            <h2 style={{ color: '#ffffff', fontWeight: '900', fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
              Stop Guessing.{' '}
              <RoughAnnotation type="underline" color="#c1ff72" strokeWidth={3} padding={2} show={heroVisible} animationDuration={1000}>
                Start Interviewing.
              </RoughAnnotation>
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              Every package includes expert human review. No bots. No algorithms.
            </p>
          </div>

          <div className="row justify-content-center g-4">
            {/* Tier 1 */}
            <div className="col-lg-4 col-md-6">
              <div style={{ background: '#ffffff', borderRadius: '20px', padding: '36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="d-flex align-items-center mb-3">
                  <Mail size={28} style={{ color: '#0966ff', marginRight: '12px' }} />
                  <h4 style={{ color: '#222733', fontWeight: '800', margin: 0 }}>Resume Audit</h4>
                </div>
                <p style={{ color: '#64748b', marginBottom: '16px' }}>Async review with video feedback.</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '3.5rem', fontWeight: '900', color: '#222733' }}>$69</span>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>72-Hour Turnaround</p>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                  {['Personalized Video Diagnostic', 'Detailed Suggested Edits', 'ATS Compliance Check', 'Strengths & Weaknesses Breakdown'].map((item, i) => (
                    <li key={i} className="d-flex align-items-start mb-3">
                      <CheckCircle size={18} style={{ color: '#0966ff', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#475569', fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate('/results/audit')} className="btn w-100 mt-4" style={{ background: '#0966ff', color: '#ffffff', fontWeight: '700', padding: '16px', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Get My Grade
                </button>
              </div>
            </div>

            {/* Tier 2 - Featured */}
            <div className="col-lg-4 col-md-6">
              <div style={{ background: '#ffffff', borderRadius: '20px', padding: '36px', height: '100%', display: 'flex', flexDirection: 'column', border: '3px solid #c1ff72', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#c1ff72', color: '#222733', fontWeight: '800', padding: '6px 20px', borderRadius: '8px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                  Most Popular
                </span>
                <div className="d-flex align-items-center mb-3">
                  <Video size={28} style={{ color: '#0966ff', marginRight: '12px' }} />
                  <h4 style={{ color: '#222733', fontWeight: '800', margin: 0 }}>Deep Dive Workshop</h4>
                </div>
                <p style={{ color: '#64748b', marginBottom: '16px' }}>45-min live session with an expert.</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '3.5rem', fontWeight: '900', color: '#222733' }}>$129</span>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Real-time via Zoom</p>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                  {['45-Minute 1-on-1 Video Call', 'Real-Time Resume Rewrite', 'Expert Narrative Coaching', 'Session Recording Included', 'High-Impact Final Draft'].map((item, i) => (
                    <li key={i} className="d-flex align-items-start mb-3">
                      <CheckCircle size={18} style={{ color: '#c1ff72', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#475569', fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate('/results/workshop')} className="btn w-100 mt-4" style={{ background: '#c1ff72', color: '#222733', fontWeight: '800', padding: '16px', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Get Help From Humans
                </button>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="col-lg-4 col-md-6">
              <div style={{ background: '#ffffff', borderRadius: '20px', padding: '36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="d-flex align-items-center mb-3">
                  <Briefcase size={28} style={{ color: '#0966ff', marginRight: '12px' }} />
                  <h4 style={{ color: '#222733', fontWeight: '800', margin: 0 }}>Total Prep Bundle</h4>
                </div>
                <p style={{ color: '#64748b', marginBottom: '16px' }}>Resume + mock interview prep.</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '3.5rem', fontWeight: '900', color: '#222733' }}>$229</span>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Complete package</p>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                  {['Full Deep Dive Session', 'Mock Interview Session', 'Performance Critique', 'Complete Coaching Package'].map((item, i) => (
                    <li key={i} className="d-flex align-items-start mb-3">
                      <Award size={18} style={{ color: '#0966ff', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#475569', fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate('/results/bundle')} className="btn w-100 mt-4" style={{ background: '#0966ff', color: '#ffffff', fontWeight: '700', padding: '16px', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Secure My Future
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Lime Background */}
      <section style={{ background: '#c1ff72', padding: '100px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <p style={{ color: '#222733', opacity: 0.7, fontSize: '1rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>
                The Bottom Line
              </p>
              <h2 style={{ color: '#222733', fontWeight: '900', fontStyle: 'italic', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '24px', lineHeight: '1.1' }}>
                Your Resume Is Costing You Jobs.
              </h2>
              <p style={{ color: '#222733', opacity: 0.8, fontSize: '1.2rem', marginBottom: '32px', lineHeight: '1.6' }}>
                Every day you wait is another opportunity lost. Get expert eyes on your resume and start landing interviews this week.
              </p>
              <button
                onClick={() => navigate('/results')}
                className="btn btn-lg d-inline-flex align-items-center gap-2"
                style={{
                  background: '#222733',
                  color: '#ffffff',
                  fontWeight: '800',
                  padding: '18px 40px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Get Results Today
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <OrganicBlob
                  color="#222733"
                  size={400}
                  opacity={0.1}
                  variant={3}
                  style={{ top: '-30px', left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}
                />
                <img
                  src="/images/hired.png"
                  alt="Successful team collaboration"
                  style={{
                    width: '100%',
                    maxWidth: '450px',
                    borderRadius: '20px',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: '#222733', padding: '120px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '0', fontStyle: 'italic' }}>
              "250 applications. 0 callbacks. Sound familiar?"
            </p>
          </div>

          <div className="row justify-content-center g-5">
            <div className="col-md-4 text-center">
              <TrendingUp size={40} style={{ color: '#c1ff72', marginBottom: '16px' }} />
              <h3 style={{ color: '#ffffff', fontWeight: '900', fontSize: 'clamp(3rem, 8vw, 5rem)', margin: 0, lineHeight: 1 }}>
                <RoughAnnotation type="circle" color="#c1ff72" strokeWidth={2} padding={12} show={heroVisible} animationDuration={1000}>
                  87%
                </RoughAnnotation>
              </h3>
              <p style={{ color: '#94a3b8', margin: '16px 0 0', fontSize: '1.1rem' }}>get more interviews</p>
            </div>
            <div className="col-md-4 text-center">
              <BarChart3 size={40} style={{ color: '#0966ff', marginBottom: '16px' }} />
              <h3 style={{ color: '#ffffff', fontWeight: '900', fontSize: 'clamp(3rem, 8vw, 5rem)', margin: 0, lineHeight: 1 }}>D- to A+</h3>
              <p style={{ color: '#94a3b8', margin: '16px 0 0', fontSize: '1.1rem' }}>average improvement</p>
            </div>
            <div className="col-md-4 text-center">
              <Users size={40} style={{ color: '#c1ff72', marginBottom: '16px' }} />
              <h3 style={{ color: '#ffffff', fontWeight: '900', fontSize: 'clamp(3rem, 8vw, 5rem)', margin: 0, lineHeight: 1 }}>
                <RoughAnnotation type="underline" color="#0966ff" strokeWidth={3} padding={2} show={heroVisible} animationDuration={800}>
                  100%
                </RoughAnnotation>
              </h3>
              <p style={{ color: '#94a3b8', margin: '16px 0 0', fontSize: '1.1rem' }}>human-reviewed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section style={{ background: '#222733', padding: '40px 0 100px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="d-flex align-items-center">
                  <Lock size={48} style={{ color: '#c1ff72', marginRight: '24px', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ color: '#ffffff', fontWeight: '800', marginBottom: '8px' }}>Your Data is Secure</h4>
                    <p style={{ color: '#94a3b8', margin: 0 }}>
                      Your resume is handled with the utmost confidentiality. We use industry-standard encryption and follow strict data privacy best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
