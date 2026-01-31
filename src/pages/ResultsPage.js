import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Mail, Video, Briefcase, ArrowRight } from 'lucide-react';

const ResultsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tiers = [
    {
      id: 'audit',
      name: 'Resume Audit',
      tagline: 'Async Review',
      price: 69,
      description: 'Get expert feedback on your resume without scheduling a call. Perfect for DIYers who want professional guidance.',
      turnaround: '72-hour turnaround',
      icon: <Mail size={32} />,
      features: [
        'Personalized Video Diagnostic',
        'Line-by-Line Markups',
        'ATS Compliance Check',
        'Strengths & Weaknesses Breakdown'
      ],
      notIncluded: [
        'Live 1-on-1 session',
        'Real-time resume rewrite',
        'Mock interview'
      ],
      buttonText: 'Get My Grade',
      buttonStyle: { background: '#0966ff', color: '#ffffff' },
      path: '/results/audit'
    },
    {
      id: 'workshop',
      name: 'Deep Dive Workshop',
      tagline: 'Live Session',
      price: 129,
      description: 'Work directly with a recruiter to rewrite your resume in real-time. Best for career changers and complex situations.',
      turnaround: '45-min Zoom call',
      icon: <Video size={32} />,
      featured: true,
      features: [
        'Everything in Resume Audit',
        '45-Minute 1-on-1 Video Call',
        'Real-Time Resume Rewrite',
        'Expert Narrative Coaching',
        'Session Recording Included'
      ],
      notIncluded: [
        'Mock interview session'
      ],
      buttonText: 'Book My Workshop',
      buttonStyle: { background: '#c1ff72', color: '#222733' },
      path: '/results/workshop'
    },
    {
      id: 'bundle',
      name: 'Total Prep Bundle',
      tagline: 'Complete Package',
      price: 229,
      description: 'Resume workshop plus mock interview prep. The full package for landing your dream job.',
      turnaround: 'Two sessions',
      icon: <Briefcase size={32} />,
      features: [
        'Everything in Deep Dive Workshop',
        'Mock Interview Session',
        'Performance Critique',
        'Body Language & Pacing Feedback',
        'Written Post-Analysis Guide'
      ],
      notIncluded: [],
      buttonText: 'Get The Full Package',
      buttonStyle: { background: '#0966ff', color: '#ffffff' },
      path: '/results/bundle'
    }
  ];

  return (
    <div style={{ background: '#222733', minHeight: '100vh' }}>
      <Header />

      {/* Hero Section */}
      <section style={{
        background: '#222733',
        padding: '80px 0 60px',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '900',
            fontStyle: 'italic',
            color: '#ffffff',
            marginBottom: '16px'
          }}>
            Choose Your Path to Better Results
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Every package includes 100% human review from verified recruiters. Pick the level of support that's right for you.
          </p>
        </div>
      </section>

      {/* Tier Selection */}
      <section style={{
        background: '#ffffff',
        padding: '80px 0 100px'
      }}>
        <div className="container">
          <div className="row justify-content-center g-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="col-lg-4 col-md-6">
                <div style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '36px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: tier.featured ? '3px solid #c1ff72' : '1px solid #e2e8f0',
                  position: 'relative',
                  boxShadow: tier.featured ? '0 8px 32px rgba(193, 255, 114, 0.2)' : '0 4px 16px rgba(0,0,0,0.08)'
                }}>
                  {tier.featured && (
                    <span style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#c1ff72',
                      color: '#222733',
                      fontWeight: '800',
                      padding: '6px 20px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase'
                    }}>
                      Most Popular
                    </span>
                  )}

                  <div className="d-flex align-items-center mb-3">
                    <div style={{ color: '#0966ff', marginRight: '12px' }}>
                      {tier.icon}
                    </div>
                    <div>
                      <h3 style={{ color: '#222733', fontWeight: '800', margin: 0, fontSize: '1.3rem' }}>
                        {tier.name}
                      </h3>
                      <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{tier.tagline}</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <span style={{ fontSize: '3rem', fontWeight: '900', color: '#222733' }}>${tier.price}</span>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '4px 0 0' }}>{tier.turnaround}</p>
                  </div>

                  <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.6' }}>
                    {tier.description}
                  </p>

                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#222733', fontWeight: '700', fontSize: '0.85rem', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      What's Included:
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                      {tier.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-start mb-2">
                          <CheckCircle size={16} style={{ color: tier.featured ? '#c1ff72' : '#0966ff', marginRight: '10px', marginTop: '3px', flexShrink: 0 }} />
                          <span style={{ color: '#475569', fontSize: '0.9rem' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {tier.notIncluded.length > 0 && (
                      <>
                        <p style={{ color: '#94a3b8', fontWeight: '600', fontSize: '0.8rem', marginBottom: '8px' }}>
                          Not included:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {tier.notIncluded.map((item, i) => (
                            <li key={i} style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '4px' }}>
                              — {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => navigate(tier.path)}
                    className="btn w-100 mt-4 d-flex align-items-center justify-content-center gap-2"
                    style={{
                      ...tier.buttonStyle,
                      fontWeight: '700',
                      padding: '16px',
                      borderRadius: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      border: 'none'
                    }}
                  >
                    {tier.buttonText}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison note */}
          <div className="text-center mt-5">
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Not sure which to pick? Start with the <strong>Resume Audit</strong> - you can always upgrade later.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{
        background: '#0966ff',
        padding: '40px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <CheckCircle size={20} color="#ffffff" />
            <p style={{
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: '600',
              margin: 0
            }}>
              All sessions conducted by verified recruiters with real hiring experience.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResultsPage;
