import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoughAnnotation from '../components/RoughAnnotation';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: isOpen ? 'rgba(9, 102, 255, 0.08)' : '#ffffff',
        borderRadius: '16px',
        marginBottom: '12px',
        border: isOpen ? '2px solid #0966ff' : '1px solid rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 8px 24px rgba(0, 0, 0, 0.08)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={onClick}
        style={{
          width: '100%',
          padding: '22px 28px',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}
      >
        <span style={{
          fontSize: '1.05rem',
          fontWeight: '600',
          color: isOpen ? '#0966ff' : '#222733',
          lineHeight: '1.5',
          transition: 'color 0.2s ease'
        }}>
          {question}
        </span>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: isOpen ? '#0966ff' : '#f1f5f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.2s ease'
        }}>
          <ChevronDown
            size={18}
            color={isOpen ? '#ffffff' : '#64748b'}
            style={{
              transition: 'transform 0.3s ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
            aria-hidden="true"
          />
        </div>
      </button>
      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease'
      }}>
        <div style={{
          padding: '0 28px 24px 28px',
          color: '#475569',
          fontSize: '1rem',
          lineHeight: '1.8',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)'
        }}>
          <div style={{ paddingTop: '20px' }}>
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ marginBottom: '56px' }}>
      <div style={{
        marginBottom: '28px',
        paddingBottom: '16px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#222733',
          marginBottom: 0
        }}>
          {title}
        </h2>
      </div>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

const FAQPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroVisible(true);
  }, []);

  const antiAIFaqs = [
    {
      question: "Do you use AI or ChatGPT to review my resume?",
      answer: "Absolutely not. Our team reviews every single resume personally. AI tools write generic, \"fluffy\" content that recruiters are trained to spot and ignore. We use our collective experience in hiring to write persuasive, specific arguments based on your unique career history."
    },
    {
      question: "Why shouldn't I just use a free online resume checker?",
      answer: "Free checkers are algorithms. They check for typos and formatting rules. They cannot evaluate strategy, persuasion, or narrative. A real recruiter understands the nuance that algorithms miss, such as career gaps, industry pivots, and soft skills that matter."
    }
  ];

  const servicesFaqs = [
    {
      question: "What's the difference between your services?",
      answer: (
        <>
          We offer four options: The <strong>Resume Audit ($69)</strong> is diagnostic. We tell you exactly what's wrong via a personalized video, but you do the rewriting. The <strong>Resume Rewrite ($109)</strong> is where we do the work, completely rewriting your resume and delivering it with a video explanation. The <strong>Resume Workshop ($129)</strong> is a live 45-minute Zoom call where we work on your resume together in real-time. The <strong>Workshop + Interview Prep ($229)</strong> adds a mock interview with detailed feedback to the workshop.
        </>
      )
    },
    {
      question: "What industries do you specialize in?",
      answer: "Our team has successfully helped candidates in Tech, Sales, Marketing, Healthcare, Operations, and Finance. The principles of a great resume, including clear metrics, strong \"Action Verbs,\" and a clean narrative, apply to almost every industry. If you work in a highly specialized academic or federal field, please contact us first so we can pair you with the right specialist."
    },
    {
      question: "How does the Video Diagnostic work?",
      answer: "For the Resume Audit and Resume Rewrite, your assigned recruiter records their screen as they review your resume. They talk through their reactions live, pointing out where they got confused, where they were impressed, and where you lost their attention. It's the closest thing to sitting inside a hiring manager's brain while they review your application."
    },
    {
      question: "How quickly will I get my feedback?",
      answer: "For video-delivered services (Resume Audit and Resume Rewrite), you'll receive your materials within 72 business hours. For live sessions (Resume Workshop and Workshop + Interview Prep), availability depends on our current booking calendar, but we offer evening and weekend slots to accommodate working professionals."
    },
    {
      question: "What if I don't have a resume yet?",
      answer: "No problem. Our Resume Rewrite and Resume Workshop services can create a resume from scratch. Just submit your background information, work history, and career goals, and we'll build a professional resume for you."
    }
  ];

  const paymentFaqs = [
    {
      question: "Do you guarantee I will get a job?",
      answer: "No ethical service can guarantee a job offer, as we don't control the final hiring decision. However, we guarantee satisfaction with the work. If you follow the strategies we implement and don't see an improvement in your response rate, we'll happily do a follow-up review to refine the approach."
    },
    {
      question: "What if I start with the Audit but realize I need more help?",
      answer: "We understand that sometimes, after receiving your feedback, you may decide you want more hands-on assistance. If you choose to upgrade to the Resume Rewrite or Resume Workshop, simply email our team at team@theresumetest.com. We'll apply your full $69 payment as a credit toward the upgrade price."
    },
    {
      question: "What is your refund policy?",
      answer: "Because this is a service involving our team's personal time and intellectual property, we do not offer refunds once the review has been delivered or the live call has been held. However, if you're unsatisfied, we'll work with you on revisions until we get it right."
    }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ background: '#222733' }}>
      <Header />

      <main id="main-content" role="main" className="flex-grow-1">
        {/* Hero Section */}
        <section style={{
          background: '#222733',
          padding: '80px 0 60px'
        }}>
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
              FAQ
            </span>
            <h1 style={{
              fontWeight: '900',
              fontStyle: 'italic',
              color: '#ffffff',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: '1.2',
              marginBottom: '24px'
            }}>
              <RoughAnnotation
                type="underline"
                color="#c1ff72"
                strokeWidth={3}
                padding={2}
                show={heroVisible}
                animationDuration={1000}
              >
                Common Questions
              </RoughAnnotation>
            </h1>
            <p style={{
              color: '#94a3b8',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: '1.8',
              fontSize: '1.15rem'
            }}>
              Everything you need to know about our team, our process, and why a{' '}
              <RoughAnnotation
                type="circle"
                color="#0966ff"
                strokeWidth={2}
                padding={6}
                show={heroVisible}
                animationDuration={1200}
              >
                human review
              </RoughAnnotation>{' '}
              wins every time.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section style={{ padding: '80px 0', background: '#ffffff' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <FAQSection
                  title="The Human Difference"
                  faqs={antiAIFaqs}
                />

                <FAQSection
                  title="Services & Process"
                  faqs={servicesFaqs}
                />

                <FAQSection
                  title="Payment & Guarantees"
                  faqs={paymentFaqs}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '60px 0',
          background: '#222733'
        }}>
          <div className="container text-center">
            <h3 style={{
              fontWeight: '900',
              fontStyle: 'italic',
              fontSize: '1.75rem',
              color: '#ffffff',
              marginBottom: '16px'
            }}>
              Still have questions?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: '#94a3b8',
              marginBottom: '28px',
              maxWidth: '500px',
              margin: '0 auto 28px'
            }}>
              We're happy to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                background: '#c1ff72',
                color: '#222733',
                padding: '16px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.05rem'
              }}
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
