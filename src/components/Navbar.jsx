import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="brand-logo" id="nav-brand-logo">
          <img src="/logo.png" alt="SPHEREX" className="brand-icon-img" />
          <div className="brand-title-wrap">
            <span className="brand-name">SPHEREX</span>
            <span className="brand-sub">
              ADMISSION MANAGEMENT OS
            </span>
          </div>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#platform" className="nav-link">Platform</a></li>
            <li><a href="#lead-management" className="nav-link">Candidate Entry</a></li>
            <li><a href="#lead-assignment" className="nav-link">Faculty Allocation</a></li>
            <li><a href="#nora-ai" className="nav-link" style={{ color: '#c084fc' }}>Nora AI</a></li>
            <li><a href="#mobile-app" className="nav-link">Mobile App</a></li>
            <li><a href="#multi-campus" className="nav-link">Campuses</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a 
            href="https://cal.com/sphere-x-5kss8s/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary nav-book-btn" 
          >
            <span className="nav-book-text-full">📅 Book Meeting</span>
            <span className="nav-book-text-short">📅 Book</span>
          </a>
          <button 
            className="mobile-toggle" 
            id="mobile-toggle-btn" 
            aria-label="Toggle Navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobile-menu">
        <a href="#platform" className="nav-link mobile-link" onClick={() => setMobileOpen(false)}>Platform</a>
        <a href="#lead-management" className="nav-link mobile-link" onClick={() => setMobileOpen(false)}>Candidate Entry</a>
        <a href="#lead-assignment" className="nav-link mobile-link" onClick={() => setMobileOpen(false)}>Faculty Allocation</a>
        <a href="#nora-ai" className="nav-link mobile-link" style={{ color: '#c084fc' }} onClick={() => setMobileOpen(false)}>Nora AI &amp; Cutoff</a>
        <a href="#mobile-app" className="nav-link mobile-link" onClick={() => setMobileOpen(false)}>Mobile App Preview</a>
        <a href="#multi-campus" className="nav-link mobile-link" onClick={() => setMobileOpen(false)}>Dual Campuses</a>
        <a 
          href="https://cal.com/sphere-x-5kss8s/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-link mobile-link" 
          style={{ color: 'var(--accent-cyan)' }}
          onClick={() => setMobileOpen(false)}
        >
          📅 Book Meeting
        </a>
      </div>
    </header>
  );
}
