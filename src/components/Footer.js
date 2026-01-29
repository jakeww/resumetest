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
              <Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>About</Link>
              <Link to="/faq" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>FAQ</Link>
            </div>
          </div>

          <div className="col-md-4 text-md-end">
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
