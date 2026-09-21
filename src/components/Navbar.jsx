import React, { useState, useEffect } from 'react';
import CosmicButton from './CosmicButton';

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

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close menu on click outside
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e) => {
      const navEl = document.getElementById('navbar');
      if (navEl && !navEl.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navEl = document.getElementById('navbar');
      const navHeight = navEl ? navEl.offsetHeight : 64;
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - navHeight - 12;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a 
          href="#hero" 
          className="brand-logo" 
          id="nav-brand-logo"
          onClick={(e) => handleNavClick(e, 'hero')}
        >
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
            <li><a href="#platform" className="nav-link" onClick={(e) => handleNavClick(e, 'platform')}>Platform</a></li>
            <li><a href="#lead-management" className="nav-link" onClick={(e) => handleNavClick(e, 'lead-management')}>Candidate Entry</a></li>
            <li><a href="#lead-assignment" className="nav-link" onClick={(e) => handleNavClick(e, 'lead-assignment')}>Faculty Allocation</a></li>
            <li><a href="#nora-ai" className="nav-link" style={{ color: '#c084fc' }} onClick={(e) => handleNavClick(e, 'nora-ai')}>Nora AI</a></li>
            <li><a href="#mobile-app" className="nav-link" onClick={(e) => handleNavClick(e, 'mobile-app')}>Mobile App</a></li>
            <li><a href="#multi-campus" className="nav-link" onClick={(e) => handleNavClick(e, 'multi-campus')}>Campuses</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <CosmicButton />
          <button 
            className="mobile-toggle" 
            id="mobile-toggle-btn" 
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobile-menu" aria-hidden={!mobileOpen}>
        <a href="#platform" className="nav-link mobile-link" onClick={(e) => handleNavClick(e, 'platform')}>
          <span className="mobile-link-icon">🧭</span>
          <span>Platform</span>
        </a>
        <a href="#lead-management" className="nav-link mobile-link" onClick={(e) => handleNavClick(e, 'lead-management')}>
          <span className="mobile-link-icon">📝</span>
          <span>Candidate Entry</span>
        </a>
        <a href="#lead-assignment" className="nav-link mobile-link" onClick={(e) => handleNavClick(e, 'lead-assignment')}>
          <span className="mobile-link-icon">👥</span>
          <span>Faculty Allocation</span>
        </a>
        <a href="#nora-ai" className="nav-link mobile-link" style={{ color: '#c084fc' }} onClick={(e) => handleNavClick(e, 'nora-ai')}>
          <span className="mobile-link-icon">🤖</span>
          <span>Nora AI &amp; Cutoff</span>
        </a>
        <a href="#mobile-app" className="nav-link mobile-link" onClick={(e) => handleNavClick(e, 'mobile-app')}>
          <span className="mobile-link-icon">📱</span>
          <span>Mobile App Preview</span>
        </a>
        <a href="#multi-campus" className="nav-link mobile-link" onClick={(e) => handleNavClick(e, 'multi-campus')}>
          <span className="mobile-link-icon">🏛️</span>
          <span>Dual Campuses</span>
        </a>
        <a 
          href="https://cal.com/sphere-x-5kss8s/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-link mobile-link mobile-book-cta" 
          onClick={() => setMobileOpen(false)}
        >
          <span className="mobile-link-icon">📅</span>
          <span>Book Meeting</span>
        </a>
      </div>
    </header>
  );
}
