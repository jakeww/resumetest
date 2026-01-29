import React, { useState, useEffect, useRef } from 'react';
import {
  Shield, Lock, CheckCircle,
  Award, TrendingUp, BarChart3, Mail, Video, Users, Briefcase,
  XCircle, Upload, ClipboardList, PlayCircle, FileText, CheckSquare, ArrowRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoughAnnotation from '../components/RoughAnnotation';

const LandingPage = () => {
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

  const handleScheduleConsult = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ background: '#222733' }}>
      <Header />

      {/* Hero Section - Dark Background */}
      <section style={{ background: '#222733', padding: '100px 0 80px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: '900',
                fontStyle: 'italic',
                color: '#ffffff',
                lineHeight: '1.05',
                marginBottom: '24px'
              }}>
                Stop{' '}
                <RoughAnnotation type="circle" color="#c1ff72" strokeWidth={3} padding={12} show={heroVisible} animationDuration={1200}>
                  guessing
                </RoughAnnotation>{' '}
                why you are getting rejected
              </h1>

              <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '32px', maxWidth: '550px' }}>
                Get your resume reviewed by{' '}
                <RoughAnnotation type="underline" color="#c1ff72" strokeWidth={2} show={heroVisible} animationDuration={1000}>
                  real HR professionals
                </RoughAnnotation>{' '}
                who know exactly what hiring managers are looking for.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <span className="tag tag-white">Real Humans</span>
                <span className="tag tag-white">Real Answers</span>
                <span className="tag tag-lime">Real Results</span>
              </div>

              <button
                onClick={handleScheduleConsult}
                className="btn btn-lg d-inline-flex align-items-center gap-2"
                style={{
                  background: '#0966ff',
                  color: '#ffffff',
                  fontWeight: '700',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '1.1rem'
                }}
              >
                Get Results Today
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {['Titles', 'Education', 'Names', 'Top Skills', 'Ideas', 'Keywords', 'Dates', 'Contact Info'].map((item, i) => (
                  <span
                    key={i}
                    className="tag"
                    style={{
                      background: i % 3 === 0 ? '#ffffff' : i % 3 === 1 ? '#0966ff' : '#c1ff72',
                      color: i % 3 === 0 ? '#0966ff' : i % 3 === 1 ? '#ffffff' : '#222733',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p style={{ color: '#ffffff', fontWeight: '800', fontStyle: 'italic', fontSize: '1.5rem', textAlign: 'center', marginTop: '24px' }}>
                What do recruiters see in the first 7 seconds?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ background: '#222733', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <Shield size={20} style={{ color: '#c1ff72' }} />
              <span style={{ color: '#ffffff', fontWeight: '600' }}>Data Protected</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Award size={20} style={{ color: '#c1ff72' }} />
              <span style={{ color: '#ffffff', fontWeight: '600' }}>Expert Reviewed</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Users size={20} style={{ color: '#c1ff72' }} />
              <span style={{ color: '#ffffff', fontWeight: '600' }}>1-on-1 Human Attention</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section style={{ background: '#222733', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="tag mb-3" style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '50px',
              background: 'rgba(193, 255, 114, 0.15)',
              color: '#c1ff72',
              fontWeight: '700',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Testimonials
            </span>
            <h2 style={{ color: '#ffffff', fontWeight: '900', fontStyle: 'italic', fontSize: '2.5rem', marginBottom: '0' }}>
              What Our{' '}
              <RoughAnnotation type="circle" color="#0966ff" strokeWidth={2} padding={8} show={heroVisible} animationDuration={1200}>
                Clients
              </RoughAnnotation>{' '}
              Say
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #222733 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, #222733 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />

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
                  <div style={{ background: '#ffffff', borderRadius: '16px', padding: '24px', height: '100%' }}>
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

      {/* AI vs Human Section - White Background */}
      <section style={{ background: '#ffffff', padding: '100px 0' }}>
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
              Why Human Review
            </span>
            <h2 style={{ color: '#222733', fontWeight: '900', fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
              An Algorithm{' '}
              <RoughAnnotation type="strike-through" color="#dc2626" strokeWidth={3} show={heroVisible} animationDuration={1000}>
                Can't
              </RoughAnnotation>{' '}
              Read Between the Lines.
            </h2>
            <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              AI sees keywords. Hiring managers see{' '}
              <RoughAnnotation type="highlight" color="rgba(193, 255, 114, 0.5)" show={heroVisible} animationDuration={800}>
                potential.
              </RoughAnnotation>{' '}
              We provide the human insight needed to turn your "red flags" into your biggest selling points.
            </p>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-lg-5 col-md-6">
              <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '32px', height: '100%', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
                <div className="d-flex align-items-center mb-4">
                  <XCircle size={28} style={{ color: '#dc2626', marginRight: '12px' }} />
                  <h4 style={{ color: '#dc2626', fontWeight: '800', margin: 0 }}>The "AI Optimized" Resume</h4>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '16px' }}>
                    <div style={{ fontWeight: '700', color: '#222733', marginBottom: '4px' }}>The Flaw:</div>
                    <p style={{ color: '#64748b', margin: 0 }}>Hallucinates skills you don't have just to fit a pattern.</p>
                  </li>
                  <li style={{ marginBottom: '16px' }}>
                    <div style={{ fontWeight: '700', color: '#222733', marginBottom: '4px' }}>The Context:</div>
                    <p style={{ color: '#64748b', margin: 0 }}>Misses the nuance of why your experience matters.</p>
                  </li>
                  <li>
                    <div style={{ fontWeight: '700', color: '#222733', marginBottom: '4px' }}>The Result:</div>
                    <p style={{ color: '#64748b', margin: 0 }}>Gets filtered out by the ATS and ignored by the recruiter.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5 col-md-6">
              <div style={{ background: '#222733', borderRadius: '20px', padding: '32px', height: '100%', border: '3px solid #c1ff72' }}>
                <div className="d-flex align-items-center mb-4">
                  <CheckCircle size={28} style={{ color: '#c1ff72', marginRight: '12px' }} />
                  <h4 style={{ color: '#c1ff72', fontWeight: '800', margin: 0 }}>The Human Strategy</h4>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '16px' }}>
                    <div style={{ fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>The Fix:</div>
                    <p style={{ color: '#94a3b8', margin: 0 }}>We verify your actual wins and quantify them with hard data.</p>
                  </li>
                  <li style={{ marginBottom: '16px' }}>
                    <div style={{ fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>The Context:</div>
                    <p style={{ color: '#94a3b8', margin: 0 }}>We frame your unique background as a competitive advantage.</p>
                  </li>
                  <li>
                    <div style={{ fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>The Result:</div>
                    <p style={{ color: '#94a3b8', margin: 0 }}>Gets pulled for an interview and lands the job.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process - Dark */}
      <section style={{ background: '#222733', padding: '100px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="tag mb-3" style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '50px',
              background: 'rgba(193, 255, 114, 0.15)',
              color: '#c1ff72',
              fontWeight: '700',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              How It Works
            </span>
            <h2 style={{ color: '#ffffff', fontWeight: '900', fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
              Our{' '}
              <RoughAnnotation type="box" color="#0966ff" strokeWidth={2} padding={6} show={heroVisible} animationDuration={1000}>
                5-Step
              </RoughAnnotation>{' '}
              Diagnostic Process
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
              We don't just edit. We audit your resume like a hiring manager.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Progress Steps */}
              <div className="d-flex justify-content-between align-items-center position-relative mb-5">
                <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '3px', background: '#3a4252', transform: 'translateY(-50%)', zIndex: 0 }}>
                  <div style={{ height: '100%', width: `${(activeStep / 4) * 100}%`, background: '#c1ff72', transition: 'width 0.3s ease' }} />
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
                      background: index <= activeStep ? '#c1ff72' : '#3a4252',
                      border: index === activeStep ? '3px solid #ffffff' : 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease', transform: index === activeStep ? 'scale(1.15)' : 'scale(1)',
                      margin: '0 auto 8px'
                    }}>
                      {index < activeStep ? (
                        <CheckCircle size={24} style={{ color: '#222733' }} />
                      ) : (
                        <item.icon size={24} style={{ color: index <= activeStep ? '#222733' : '#64748b' }} />
                      )}
                    </div>
                    <small style={{ color: index <= activeStep ? '#ffffff' : '#64748b', fontWeight: index === activeStep ? '700' : '500', fontSize: '0.8rem' }}>
                      {item.title}
                    </small>
                  </div>
                ))}
              </div>

              {/* Step Content */}
              <div style={{ background: '#ffffff', borderRadius: '20px', padding: '40px' }}>
                <div className="row align-items-center" style={{ minHeight: '220px' }}>
                  <div className="col-md-7 mb-4 mb-md-0">
                    <div className="d-flex align-items-center mb-3">
                      {activeStep === 0 && <Upload size={36} style={{ color: '#0966ff', marginRight: '16px' }} />}
                      {activeStep === 1 && <ClipboardList size={36} style={{ color: '#0966ff', marginRight: '16px' }} />}
                      {activeStep === 2 && <PlayCircle size={36} style={{ color: '#0966ff', marginRight: '16px' }} />}
                      {activeStep === 3 && <FileText size={36} style={{ color: '#0966ff', marginRight: '16px' }} />}
                      {activeStep === 4 && <CheckSquare size={36} style={{ color: '#c1ff72', marginRight: '16px' }} />}
                      <h3 style={{ color: '#222733', fontWeight: '800', margin: 0 }}>
                        {activeStep === 0 && "Step 1: The Submission"}
                        {activeStep === 1 && "Step 2: The Grade"}
                        {activeStep === 2 && "Step 3: The Video Diagnostic"}
                        {activeStep === 3 && "Step 4: Edits & Rewrite"}
                        {activeStep === 4 && "Step 5: The Green Light"}
                      </h3>
                    </div>
                    <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
                      {activeStep === 0 && "You complete a quick form and send us your current resume and a target job description. This helps us tailor our analysis to your specific goals."}
                      {activeStep === 1 && "We analyze your resume across 30+ factors including ATS compatibility, narrative strength, and quantified metrics to pinpoint exactly where you're losing opportunities."}
                      {activeStep === 2 && "You receive a personalized video breakdown walking you through your score, red flags, and the exact strategy for every suggested edit."}
                      {activeStep === 3 && "Based on your package, we deliver your suggested edits (Redline Audit) or a complete, high-impact rewrite with live collaboration (Deep Dive or Total Prep)."}
                      {activeStep === 4 && "You apply with a resume that has been stress-tested by a human expert. Stop guessing and start interviewing with confidence."}
                    </p>
                    {activeStep < 4 ? (
                      <button onClick={() => setActiveStep(activeStep + 1)} className="btn" style={{ background: '#0966ff', color: '#ffffff', fontWeight: '700', padding: '12px 28px', borderRadius: '50px' }}>
                        Next Step
                      </button>
                    ) : (
                      <button onClick={handleScheduleConsult} className="btn" style={{ background: '#c1ff72', color: '#222733', fontWeight: '700', padding: '12px 28px', borderRadius: '50px' }}>
                        Get Started Now
                      </button>
                    )}
                  </div>
                  <div className="col-md-5 text-center">
                    <div style={{ background: activeStep === 4 ? '#222733' : '#f1f5f9', borderRadius: '16px', padding: '40px' }}>
                      {activeStep === 0 && <Mail size={72} style={{ color: '#0966ff', opacity: 0.6 }} />}
                      {activeStep === 1 && (
                        <div className="d-flex justify-content-center gap-4">
                          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#ffffff', fontWeight: '800' }}>D-</span>
                          </div>
                          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#c1ff72', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#222733', fontWeight: '800' }}>A+</span>
                          </div>
                        </div>
                      )}
                      {activeStep === 2 && <Video size={72} style={{ color: '#0966ff', opacity: 0.6 }} />}
                      {activeStep === 3 && <FileText size={72} style={{ color: '#0966ff', opacity: 0.6 }} />}
                      {activeStep === 4 && <CheckCircle size={72} style={{ color: '#c1ff72' }} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - White Background */}
      <section id="pricing-section" style={{ background: '#ffffff', padding: '100px 0' }}>
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
              Pricing
            </span>
            <h2 style={{ color: '#222733', fontWeight: '900', fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
              Choose Your{' '}
              <RoughAnnotation type="underline" color="#c1ff72" strokeWidth={3} padding={2} show={heroVisible} animationDuration={1000}>
                Package
              </RoughAnnotation>
            </h2>
            <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Every package includes expert human review and personalized feedback.
            </p>
          </div>

          <div className="row justify-content-center g-4">
            {/* Tier 1 */}
            <div className="col-lg-4 col-md-6">
              <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '32px', height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
                <div className="d-flex align-items-center mb-3">
                  <Mail size={28} style={{ color: '#0966ff', marginRight: '12px' }} />
                  <h4 style={{ color: '#222733', fontWeight: '800', margin: 0 }}>Resume Audit</h4>
                </div>
                <p style={{ color: '#64748b', marginBottom: '16px' }}>Your Async Resume Review & Recruiter Insight.</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '900', color: '#222733' }}>$69</span>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>72-Hour Turnaround</p>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                  {['Personalized Video Diagnostic', 'Detailed Suggested Edits', 'ATS Compliance Check', 'Strengths & Weaknesses Breakdown'].map((item, i) => (
                    <li key={i} className="d-flex align-items-start mb-2">
                      <CheckCircle size={18} style={{ color: '#0966ff', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#475569', fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={handleScheduleConsult} className="btn w-100 mt-4" style={{ background: '#222733', color: '#ffffff', fontWeight: '700', padding: '14px', borderRadius: '50px' }}>
                  Get My Grade
                </button>
              </div>
            </div>

            {/* Tier 2 - Featured */}
            <div className="col-lg-4 col-md-6">
              <div style={{ background: '#222733', borderRadius: '20px', padding: '32px', height: '100%', display: 'flex', flexDirection: 'column', border: '3px solid #c1ff72', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#c1ff72', color: '#222733', fontWeight: '800', padding: '6px 20px', borderRadius: '50px', fontSize: '0.8rem' }}>
                  MOST POPULAR
                </span>
                <div className="d-flex align-items-center mb-3">
                  <Video size={28} style={{ color: '#c1ff72', marginRight: '12px' }} />
                  <h4 style={{ color: '#ffffff', fontWeight: '800', margin: 0 }}>Deep Dive Workshop</h4>
                </div>
                <p style={{ color: '#94a3b8', marginBottom: '16px' }}>45-Minute Live Co-writing Session.</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '900', color: '#c1ff72' }}>$129</span>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Real-time collaboration via Zoom</p>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                  {['45-Minute 1-on-1 Video Call', 'Real-Time Resume Construction', 'Expert Narrative Coaching', 'Session Recording Included', 'High-Impact Final Draft'].map((item, i) => (
                    <li key={i} className="d-flex align-items-start mb-2">
                      <CheckCircle size={18} style={{ color: '#c1ff72', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#ffffff', fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={handleScheduleConsult} className="btn w-100 mt-4" style={{ background: '#c1ff72', color: '#222733', fontWeight: '800', padding: '14px', borderRadius: '50px' }}>
                  Book Live Workshop
                </button>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="col-lg-4 col-md-6">
              <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '32px', height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
                <div className="d-flex align-items-center mb-3">
                  <Briefcase size={28} style={{ color: '#0966ff', marginRight: '12px' }} />
                  <h4 style={{ color: '#222733', fontWeight: '800', margin: 0 }}>Total Prep Bundle</h4>
                </div>
                <p style={{ color: '#64748b', marginBottom: '16px' }}>Resume Overhaul + Interview Prep.</p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '900', color: '#222733' }}>$229</span>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Complete preparation package</p>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                  {['Full Deep Dive Session', 'Mock Interview Session', 'Performance Critique', 'Complete Coaching Package'].map((item, i) => (
                    <li key={i} className="d-flex align-items-start mb-2">
                      <Award size={18} style={{ color: '#0966ff', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: '#475569', fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={handleScheduleConsult} className="btn w-100 mt-4" style={{ background: '#222733', color: '#ffffff', fontWeight: '700', padding: '14px', borderRadius: '50px' }}>
                  Secure Your Future
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: '#222733', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <div className="d-flex justify-content-around align-items-center flex-wrap gap-4">
            <div className="text-center">
              <TrendingUp size={32} style={{ color: '#c1ff72', marginBottom: '12px' }} />
              <h3 style={{ color: '#ffffff', fontWeight: '900', fontSize: '2.5rem', margin: 0 }}>
                <RoughAnnotation type="circle" color="#c1ff72" strokeWidth={2} padding={8} show={heroVisible} animationDuration={1000}>
                  87%
                </RoughAnnotation>
              </h3>
              <p style={{ color: '#94a3b8', margin: 0 }}>get more interviews</p>
            </div>
            <div className="text-center">
              <BarChart3 size={32} style={{ color: '#0966ff', marginBottom: '12px' }} />
              <h3 style={{ color: '#ffffff', fontWeight: '900', fontSize: '2.5rem', margin: 0 }}>D- to A+</h3>
              <p style={{ color: '#94a3b8', margin: 0 }}>average improvement</p>
            </div>
            <div className="text-center">
              <Users size={32} style={{ color: '#c1ff72', marginBottom: '12px' }} />
              <h3 style={{ color: '#ffffff', fontWeight: '900', fontSize: '2.5rem', margin: 0 }}>
                <RoughAnnotation type="underline" color="#0966ff" strokeWidth={3} padding={2} show={heroVisible} animationDuration={800}>
                  100%
                </RoughAnnotation>
              </h3>
              <p style={{ color: '#94a3b8', margin: 0 }}>human-reviewed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section style={{ background: '#222733', padding: '40px 0 80px' }}>
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
