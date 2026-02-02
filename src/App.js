import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ResultsPage from './pages/ResultsPage';
import ResultsAuditPage from './pages/ResultsAuditPage';
import ResultsRewritePage from './pages/ResultsRewritePage';
import ResultsWorkshopPage from './pages/ResultsWorkshopPage';
import ResultsBundlePage from './pages/ResultsBundlePage';
import AccessibilityPage from './pages/AccessibilityPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/results/audit" element={<ResultsAuditPage />} />
        <Route path="/results/rewrite" element={<ResultsRewritePage />} />
        <Route path="/results/workshop" element={<ResultsWorkshopPage />} />
        <Route path="/results/bundle" element={<ResultsBundlePage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
