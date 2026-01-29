import React, { useState } from 'react';
import {
  User, AlertTriangle, BarChart3, Award, TrendingUp,
  ChevronRight, ChevronLeft, CheckCircle, ArrowRight,
  FileText, XCircle, Mail
} from 'lucide-react';

const HowItWorksInteractive = ({ onGetStarted }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Meet Sarah",
      description: "Sarah is a marketing professional looking for her dream job. Her resume wasn't getting responses, and she didn't know why.",
      icon: User,
      color: "#2563eb",
      bgColor: "rgba(37, 99, 235, 0.1)",
      visualElement: (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '200px' }}>
          <div className="mb-3">
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: '#e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <User size={48} style={{ color: '#64748b' }} />
            </div>
          </div>
          <div className="text-center">
            <h5 className="fw-bold mb-1">Sarah Martinez</h5>
            <small className="text-muted">Marketing Professional</small>
            <div className="mt-2">
              <small className="text-danger fw-semibold">0 Interview Responses</small>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "The Problem",
      description: "Sarah's resume was getting lost in ATS systems. Missing keywords, poor formatting, and weak content were holding her back.",
      icon: AlertTriangle,
      color: "#dc2626",
      bgColor: "rgba(220, 38, 38, 0.1)",
      visualElement: (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '200px' }}>
          <div className="position-relative mb-3">
            <div style={{
              width: '120px',
              height: '160px',
              background: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <FileText size={48} style={{ color: '#9ca3af' }} />
              <div className="position-absolute top-0 end-0 m-1">
                <AlertTriangle size={18} style={{ color: '#dc2626' }} />
              </div>
              <div className="position-absolute" style={{ bottom: '15px', left: '8px' }}>
                <XCircle size={16} style={{ color: '#dc2626' }} />
              </div>
              <div className="position-absolute" style={{ top: '40px', right: '10px' }}>
                <XCircle size={14} style={{ color: '#dc2626' }} />
              </div>
            </div>
          </div>
          <div className="text-center">
            <small className="text-danger fw-semibold d-block">ATS Systems Rejecting</small>
            <small className="text-muted">Missing keywords, poor formatting, weak content</small>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "The Analysis",
      description: "Our experts analyzed Sarah's resume across 30+ factors including ATS compatibility, keywords, and content quality.",
      icon: BarChart3,
      color: "#7c3aed",
      bgColor: "rgba(124, 58, 237, 0.1)",
      visualElement: (
        <div className="analysis-demo">
          <div className="progress-bars">
            {[
              { label: "Keywords", value: 45, targetValue: 92 },
              { label: "ATS Format", value: 30, targetValue: 88 },
              { label: "Content", value: 55, targetValue: 95 },
              { label: "Structure", value: 40, targetValue: 90 }
            ].map((item, index) => (
              <div key={index} className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small className="fw-semibold">{item.label}</small>
                  <small className="text-muted">
                    {currentStep >= 2 ? item.targetValue : item.value}%
                  </small>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div
                    className="progress-bar"
                    style={{
                      width: `${currentStep >= 2 ? item.targetValue : item.value}%`,
                      background: currentStep >= 2 ? '#059669' : '#dc2626',
                      transition: 'all 1.5s ease-out'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <small className="text-muted">
              {currentStep >= 2 ? 'Analysis Complete' : 'Analyzing resume...'}
            </small>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "The Score & Insights",
      description: "Sarah got her score plus detailed recommendations: add industry keywords, quantify achievements, fix formatting.",
      icon: Award,
      color: "#059669",
      bgColor: "rgba(5, 150, 105, 0.1)",
      visualElement: (
        <div className="score-demo text-center">
          <div className="d-flex justify-content-center align-items-center mb-3 gap-3">
            <div className="text-center">
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#dc2626',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: currentStep >= 3 ? 0.6 : 1,
                transition: 'all 0.5s ease-out'
              }}>
                <span className="h5 fw-bold text-white mb-0">D-</span>
              </div>
              <small className="text-muted d-block mt-1">Before</small>
            </div>

            <div style={{
              color: '#059669',
              opacity: currentStep >= 3 ? 1 : 0,
              transition: 'all 0.5s ease-out 0.3s'
            }}>
              <ArrowRight size={24} />
            </div>

            <div className="text-center">
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: currentStep >= 3 ? 'scale(1.1)' : 'scale(0.9)',
                opacity: currentStep >= 3 ? 1 : 0.5,
                transition: 'all 0.5s ease-out 0.6s'
              }}>
                <span className="h5 fw-bold text-white mb-0">A+</span>
              </div>
              <small className="text-success d-block mt-1 fw-semibold">After</small>
            </div>
          </div>

          <div style={{
            opacity: currentStep >= 3 ? 1 : 0,
            transition: 'all 0.5s ease-out 0.9s'
          }}>
            <small className="text-success fw-semibold">+2.5 Grade Improvement</small>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "The Transformation",
      description: "After applying the recommendations, Sarah landed 5 interviews in 2 weeks and got her dream job.",
      icon: TrendingUp,
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)",
      visualElement: (
        <div className="success-demo text-center">
          <div className="mb-3">
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: '#d1fae5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto'
            }}>
              <CheckCircle size={48} style={{ color: '#059669' }} />
            </div>
          </div>

          <div className="inbox-animation mb-3">
            <div className="d-flex justify-content-center mb-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  style={{
                    margin: '0 4px',
                    opacity: currentStep >= 4 ? 1 : 0,
                    transform: `translateY(${currentStep >= 4 ? 0 : 20}px)`,
                    transition: `all 0.5s ease-out ${num * 0.1}s`
                  }}
                >
                  <Mail size={20} style={{ color: '#2563eb' }} />
                </div>
              ))}
            </div>
            <div className="stats">
              <h5 className="fw-bold mb-0" style={{ color: '#10b981' }}>
                5 Interviews in 2 Weeks
              </h5>
              <small className="text-success fw-semibold">Dream Job Secured</small>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleStepClick = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="how-it-works-section py-5">
      <h2 className="text-center mb-4 fw-bold" style={{ color: '#1e293b' }}>
        See How It Works
      </h2>
      <p className="text-center text-muted mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
        Follow Sarah's journey from job search frustration to landing her dream job in just 2 weeks
      </p>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Progress Indicator */}
          <div className="progress-indicator mb-5">
            <div className="d-flex justify-content-between align-items-center position-relative">
              <div
                className="progress-line position-absolute"
                style={{
                  top: '50%',
                  left: '5%',
                  right: '5%',
                  height: '2px',
                  background: '#e5e7eb',
                  transform: 'translateY(-50%)',
                  zIndex: 0
                }}
              >
                <div
                  className="progress-line-fill"
                  style={{
                    height: '100%',
                    width: `${(currentStep / (steps.length - 1)) * 100}%`,
                    background: '#2563eb',
                    transition: 'width 0.5s ease-out'
                  }}
                />
              </div>

              {steps.map((step, index) => (
                <div
                  key={index}
                  className="step-indicator text-center position-relative"
                  style={{ zIndex: 1, cursor: 'pointer' }}
                  onClick={() => handleStepClick(index)}
                >
                  <div
                    className={`step-circle mx-auto mb-2 d-flex align-items-center justify-content-center ${
                      index <= currentStep ? 'active' : ''
                    }`}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: index <= currentStep ? step.color : '#fff',
                      border: `2px solid ${index <= currentStep ? step.color : '#e5e7eb'}`,
                      transition: 'all 0.3s ease',
                      transform: index === currentStep ? 'scale(1.15)' : 'scale(1)'
                    }}
                  >
                    {index < currentStep ? (
                      <CheckCircle size={18} className="text-white" />
                    ) : (
                      <span className={`fw-bold ${index <= currentStep ? 'text-white' : 'text-muted'}`} style={{ fontSize: '0.85rem' }}>
                        {index + 1}
                      </span>
                    )}
                  </div>
                  <small className={`d-none d-md-block ${index === currentStep ? 'fw-bold' : ''}`}
                    style={{ color: index <= currentStep ? '#1e293b' : '#9ca3af', fontSize: '0.75rem' }}>
                    {step.title}
                  </small>
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="step-content">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className={`content-wrapper ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                  <div
                    className="icon-wrapper mb-3 d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '8px',
                      background: steps[currentStep].bgColor
                    }}
                  >
                    {React.createElement(steps[currentStep].icon, {
                      size: 24,
                      style: { color: steps[currentStep].color }
                    })}
                  </div>
                  <h3 className="h4 fw-bold mb-3">{steps[currentStep].title}</h3>
                  <p className="text-muted mb-4">{steps[currentStep].description}</p>

                  {/* Navigation */}
                  <div className="d-flex align-items-center gap-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={handlePrev}
                      disabled={currentStep === 0}
                      style={{ minWidth: '100px' }}
                    >
                      <ChevronLeft size={16} className="me-1" />
                      Previous
                    </button>

                    {currentStep < steps.length - 1 ? (
                      <button
                        className="btn btn-primary"
                        onClick={handleNext}
                        style={{ minWidth: '100px', background: '#2563eb', border: 'none' }}
                      >
                        Next
                        <ChevronRight size={16} className="ms-1" />
                      </button>
                    ) : (
                      <button
                        className="btn"
                        onClick={onGetStarted}
                        style={{ minWidth: '150px', background: '#059669', border: 'none', color: '#fff' }}
                      >
                        Get Started Now
                        <ArrowRight size={16} className="ms-1" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className={`visual-wrapper ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                  <div className="visual-container p-4" style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    minHeight: '280px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {steps[currentStep].visualElement}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .fade-out {
          opacity: 0;
          transform: scale(0.95);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .step-circle {
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .step-circle:hover {
          transform: scale(1.1) !important;
        }
      `}} />
    </div>
  );
};

export default HowItWorksInteractive;
