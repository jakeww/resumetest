import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const handleScheduleConsult = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkStyle = (path) => ({
    color: location.pathname === path ? '#ffffff' : '#94a3b8',
    textDecoration: 'none',
    fontWeight: location.pathname === path ? '700' : '500',
    transition: 'color 0.2s ease',
    fontSize: '0.95rem'
  });

  return (
    <header className="navbar navbar-expand-lg navbar-dark sticky-top" style={{
      zIndex: 1000,
      background: '#222733',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      padding: '12px 0'
    }}>
      <div className="container">
        <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
          <img
            src="/logo.png"
            alt="The Resume Test Logo"
            style={{
              height: '48px',
              width: 'auto'
            }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{ borderColor: 'rgba(255,255,255,0.3)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-4">
            <li className="nav-item">
              <Link
                to="/services"
                style={navLinkStyle('/services')}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = location.pathname === '/services' ? '#ffffff' : '#94a3b8'}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                style={navLinkStyle('/about')}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = location.pathname === '/about' ? '#ffffff' : '#94a3b8'}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/faq"
                style={navLinkStyle('/faq')}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = location.pathname === '/faq' ? '#ffffff' : '#94a3b8'}
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={handleScheduleConsult}
                className="btn d-flex align-items-center gap-2"
                style={{
                  background: '#c1ff72',
                  border: 'none',
                  color: '#222733',
                  fontWeight: '700',
                  padding: '10px 24px',
                  borderRadius: '50px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#b3f05e';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#c1ff72';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Get Results
                <ArrowRight size={16} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
