import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('platform');

  const navItems = [
    { id: 'platform', label: 'Platform', icon: '🌐' },
    { id: 'lead-management', label: 'Candidate Entry', icon: '📋' },
    { id: 'lead-assignment', label: 'Faculty Allocation', icon: '👥' },
    { id: 'nora-ai', label: 'Nora AI', icon: '⚡', isAi: true },
    { id: 'mobile-app', label: 'Mobile App', icon: '📱' },
    { id: 'multi-campus', label: 'Campuses', icon: '🏛️' }
  ];

  useEffect(() => {
    const sections = ['platform', 'lead-management', 'nora-ai', 'lead-assignment', 'mobile-app', 'multi-campus'];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);

          const scrollPos = window.scrollY + 180;
          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      const navEl = document.getElementById('navbar-container');
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
    setActiveSection(targetId);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navEl = document.getElementById('navbar-container') || document.getElementById('navbar');
      const navHeight = navEl ? navEl.offsetHeight : 72;
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - navHeight - 16;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth'
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-island" id="navbar-container">
        {/* Left Inverted Concave Corner Fillet */}
        <svg 
          className="navbar-scoop navbar-scoop-left" 
          viewBox="0 0 20 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true"
        >
          <path d="M0 0H20V20C20 8.9543 11.0457 0 0 0Z" fill="#ffffff" />
        </svg>

        {/* Right Inverted Concave Corner Fillet */}
        <svg 
          className="navbar-scoop navbar-scoop-right" 
          viewBox="0 0 20 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true"
        >
          <path d="M20 0H0V20C0 8.9543 8.9543 0 20 0Z" fill="#ffffff" />
        </svg>

        {/* 1. Left Brand Badge & SPHEREX Medallion Logo */}
        <a 
          href="#hero" 
          className="navbar-brand-wrap" 
          id="nav-brand-logo"
          title="SPHEREX - Admission Management OS"
          aria-label="SPHEREX Home"
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          <div className="navbar-brand-badge">
            <img 
              src="/logo.png?v=3" 
              alt="SPHEREX" 
              className="navbar-badge-icon" 
              loading="eager"
            />
          </div>
          <div className="navbar-brand-text">
            <span className="navbar-brand-title">SPHEREX</span>
            <span className="navbar-brand-subtitle">ADMISSION OS</span>
          </div>
        </a>

        {/* 2. Center Nav Links (Pre-update landing page content buttons) */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className={`navbar-link ${activeSection === item.id ? 'active' : ''} ${item.isAi ? 'link-ai' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.isAi && <span className="nav-ai-dot" aria-hidden="true">✦</span>}
              {item.label}
            </a>
          ))}
        </nav>

        {/* 3. Right Pill Button from Latest UI */}
        <div className="navbar-right-group">
          <button 
            type="button" 
            className="navbar-contact-btn" 
            id="nav-contact-cta"
            onClick={onOpenBooking}
            aria-label="Book Meeting with SPHEREX Admissions Team"
          >
            Book Meeting
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button"
            className="navbar-mobile-toggle" 
            id="mobile-toggle-btn" 
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <div 
          className={`navbar-mobile-drawer ${mobileOpen ? 'open' : ''}`} 
          id="mobile-menu" 
          aria-hidden={!mobileOpen}
        >
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className="navbar-mobile-link" 
              onClick={(e) => handleNavClick(e, item.id)}
            >
              <span className="mobile-link-icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}

          <button 
            type="button"
            className="navbar-mobile-contact-cta" 
            onClick={() => {
              setMobileOpen(false);
              if (onOpenBooking) onOpenBooking();
            }}
          >
            📅 Book Meeting
          </button>
        </div>
      </div>
    </header>
  );
}
