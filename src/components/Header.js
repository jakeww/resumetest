import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGetResults = () => {
    navigate('/results');
  };

  const navLinkStyle = (path) => ({
    color: location.pathname === path ? '#ffffff' : '#94a3b8',
    textDecoration: 'none',
    fontWeight: location.pathname === path ? '700' : '500',
    transition: 'color 0.2s ease',
    fontSize: '0.95rem'
  });

  return (
    <>
      {/* Skip Link for ADA Compliance */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="navbar navbar-expand-lg navbar-dark sticky-top" role="banner" style={{
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
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation menu"
          style={{ borderColor: 'rgba(255,255,255,0.3)' }}
        >
          <span className="navbar-toggler-icon" aria-hidden="true"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-4">
            <li className="nav-item">
              <Link
                to="/services"
                style={navLinkStyle('/services')}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = location.pathname === '/services' ? '#ffffff' : '#94a3b8'}
                onFocus={(e) => e.target.style.color = '#ffffff'}
                onBlur={(e) => e.target.style.color = location.pathname === '/services' ? '#ffffff' : '#94a3b8'}
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
                onFocus={(e) => e.target.style.color = '#ffffff'}
                onBlur={(e) => e.target.style.color = location.pathname === '/about' ? '#ffffff' : '#94a3b8'}
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
                onFocus={(e) => e.target.style.color = '#ffffff'}
                onBlur={(e) => e.target.style.color = location.pathname === '/faq' ? '#ffffff' : '#94a3b8'}
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={handleGetResults}
                className="btn d-flex align-items-center gap-2"
                style={{
                  background: '#c1ff72',
                  border: 'none',
                  color: '#222733',
                  fontWeight: '700',
                  padding: '10px 24px',
                  borderRadius: '12px',
                  transition: 'all 0.2s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontSize: '0.9rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#b3f05e';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#c1ff72';
                  e.target.style.transform = 'translateY(0)';
                }}
                onFocus={(e) => {
                  e.target.style.background = '#b3f05e';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onBlur={(e) => {
                  e.target.style.background = '#c1ff72';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Get Results
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
