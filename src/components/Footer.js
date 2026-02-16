import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-5" style={{
      background: '#222733',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#ffffff'
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              src="/logo.png"
              alt="The Resume Test Logo"
              style={{ height: '40px', width: 'auto', marginBottom: '12px' }}
            />
            <p className="small mb-0" style={{ color: '#94a3b8' }}>
              Real humans. Real feedback. Real results.
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0 text-md-center">
            <div className="d-flex justify-content-md-center gap-4">
              <Link to="/services" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Services</Link>
              <Link to="/templates" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Templates</Link>
              <Link to="/info" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Info</Link>
              <Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</Link>
            </div>
          </div>

          <div className="col-md-4 text-md-end">
            <div className="d-flex justify-content-md-end gap-3 mb-2">
              <Link to="/terms" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.8rem' }}>
                Terms
              </Link>
              <Link to="/privacy" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.8rem' }}>
                Privacy
              </Link>
              <Link to="/accessibility" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.8rem' }}>
                Accessibility
              </Link>
            </div>
            <p className="mb-0 small" style={{ color: '#94a3b8' }}>
              &copy; {currentYear} The Resume Test
            </p>
            <p className="mb-0 small" style={{ color: '#64748b' }}>
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
