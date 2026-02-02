import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ResultsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const asyncTiers = [
    {
      id: 'audit',
      name: 'Resume Audit',
      price: 69,
      description: 'In-depth review with suggested edits and a personalized video analysis.',
      features: [
        'Personalized Video Diagnostic',
        'Detailed Suggested Edits',
        'ATS Compliance Check',
        'Strengths & Weaknesses Breakdown'
      ],
      buttonText: 'Get Started',
      path: '/results/audit'
    },
    {
      id: 'rewrite',
      name: 'Resume Rewrite',
      price: 109,
      description: 'We rewrite your resume from scratch and explain every change in a video.',
      features: [
        'Complete Resume Rewrite',
        'Personalized Video Walkthrough',
        'ATS-Optimized Formatting',
        'Works With or Without Existing Resume'
      ],
      buttonText: 'Get Started',
      path: '/results/rewrite'
    }
  ];

  const liveTiers = [
    {
      id: 'workshop',
      name: 'Resume Workshop',
      price: 129,
      description: 'Live 1-on-1 session where we rewrite your resume together in real-time.',
      featured: true,
      features: [
        '45-Minute Live Video Call',
        'Real-Time Resume Rewrite',
        'Expert Narrative Coaching',
        'Session Recording Included'
      ],
      buttonText: 'Book My Session',
      path: '/results/workshop'
    },
    {
      id: 'bundle',
      name: 'Workshop + Interview Prep',
      price: 229,
      description: 'Full resume workshop plus mock interview with detailed feedback.',
      features: [
        'Everything in Resume Workshop',
        'Mock Interview Session',
        'Performance Critique',
        'Written Post-Analysis Guide'
      ],
      buttonText: 'Book My Session',
      path: '/results/bundle'
    }
  ];

  const TierCard = ({ tier }) => (
    <div className="col-lg-6 col-md-6">
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

        <h3 style={{ color: '#222733', fontWeight: '800', marginBottom: '8px', fontSize: '1.3rem' }}>
          {tier.name}
        </h3>

        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '16px', lineHeight: '1.6' }}>
          {tier.description}
        </p>

        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '3rem', fontWeight: '900', color: '#222733' }}>${tier.price}</span>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
          {tier.features.map((feature, i) => (
            <li key={i} style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '10px', paddingLeft: '16px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#c1ff72' }}>—</span>
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate(tier.path)}
          className="btn w-100 mt-4 d-flex align-items-center justify-content-center gap-2"
          style={{
            background: tier.featured ? '#c1ff72' : '#0966ff',
            color: tier.featured ? '#222733' : '#ffffff',
            fontWeight: '700',
            padding: '16px',
            borderRadius: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            border: 'none'
          }}
        >
          {tier.buttonText}
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ background: '#222733', minHeight: '100vh' }}>
      <Header />

      <main id="main-content" role="main">
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
          {/* Video Delivered */}
          <div className="text-center mb-4">
            <span style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Video Delivered, 72 Hour Turnaround
            </span>
          </div>

          <div className="row justify-content-center g-4 mb-5">
            {asyncTiers.map((tier) => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </div>

          {/* Live Call */}
          <div className="text-center mb-4">
            <span style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Live Call, Real Time via Zoom
            </span>
          </div>

          <div className="row justify-content-center g-4">
            {liveTiers.map((tier) => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </div>

          {/* Comparison note */}
          <div className="text-center mt-5">
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Not sure which to pick? Start with the <strong>Resume Audit</strong>, you can always upgrade later.
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
            <CheckCircle size={20} color="#ffffff" aria-hidden="true" />
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
      </main>

      <Footer />
    </div>
  );
};

export default ResultsPage;
