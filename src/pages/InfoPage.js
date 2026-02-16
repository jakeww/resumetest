import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoughAnnotation from '../components/RoughAnnotation';
import { Users, GraduationCap, Briefcase, MapPin, CheckCircle, ChevronDown } from 'lucide-react';

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

const InfoPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeroVisible(true), 300);
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

        {/* FAQ Section */}
        <section style={{ padding: '80px 0', background: '#ffffff' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center mb-5">
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
                    FAQ
                  </span>
                  <h2 style={{
                    fontWeight: '900',
                    fontStyle: 'italic',
                    color: '#222733',
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    lineHeight: '1.2',
                    marginBottom: '16px'
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
                  </h2>
                  <p style={{
                    color: '#64748b',
                    maxWidth: '550px',
                    margin: '0 auto',
                    lineHeight: '1.7',
                    fontSize: '1.1rem'
                  }}>
                    Everything you need to know about our team, our process, and why a human review wins every time.
                  </p>
                </div>

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

export default InfoPage;
