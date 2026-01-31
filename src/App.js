import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ResultsPage from './pages/ResultsPage';
import ResultsAuditPage from './pages/ResultsAuditPage';
import ResultsWorkshopPage from './pages/ResultsWorkshopPage';
import ResultsBundlePage from './pages/ResultsBundlePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/results/audit" element={<ResultsAuditPage />} />
        <Route path="/results/workshop" element={<ResultsWorkshopPage />} />
        <Route path="/results/bundle" element={<ResultsBundlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
