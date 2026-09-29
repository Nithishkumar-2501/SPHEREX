import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about-us');

  useEffect(() => {
    const sectionMap = [
      { id: 'tech-stack', navKey: 'blog' },
      { id: 'conversion', navKey: 'pricing' },
      { id: 'pricing', navKey: 'pricing' },
      { id: 'mobile-app', navKey: 'features' },
      { id: 'nora-ai', navKey: 'features' },
      { id: 'lead-assignment', navKey: 'features' },
      { id: 'lead-management', navKey: 'features' },
      { id: 'features', navKey: 'features' },
      { id: 'why-spherex', navKey: 'about-us' },
      { id: 'about-us', navKey: 'about-us' },
      { id: 'platform', navKey: 'about-us' },
      { id: 'hero', navKey: 'about-us' }
    ];

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);

          const scrollPos = window.scrollY + 180;
          for (const item of sectionMap) {
            const el = document.getElementById(item.id);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSection(item.navKey);
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

  const handleNavClick = (e, targetId, navKey) => {
    e.preventDefault();
    setMobileOpen(false);
    if (navKey) setActiveSection(navKey);

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

        {/* 1. Left Circular Logo Badge */}
        <a 
          href="#hero" 
          className="navbar-brand-badge" 
          id="nav-brand-logo"
          title="SPHEREX Admission Management OS"
          aria-label="SPHEREX Admission Management OS Home"
          onClick={(e) => handleNavClick(e, 'hero', 'about-us')}
        >
          <img 
            src="/nav-logo-128.png" 
            alt="SPHEREX Logo" 
            className="navbar-badge-icon" 
            loading="eager"
            onError={(e) => {
              // Fallback to standard logo if upscaled image not found
              e.currentTarget.src = '/logo.png?v=3';
            }}
          />
        </a>

        {/* 2. Center Nav Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          <a 
            href="#why-spherex" 
            className={`navbar-link ${activeSection === 'about-us' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'why-spherex', 'about-us')}
          >
            About us
          </a>
          <a 
            href="#features" 
            className={`navbar-link ${activeSection === 'features' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'features', 'features')}
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className={`navbar-link ${activeSection === 'pricing' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'conversion', 'pricing')}
          >
            Pricing
          </a>
          <a 
            href="#blog" 
            className={`navbar-link ${activeSection === 'blog' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'tech-stack', 'blog')}
          >
            Blog
          </a>
        </nav>

        {/* 3. Right Pill Button */}
        <div className="navbar-right-group">
          <button 
            type="button" 
            className="navbar-contact-btn" 
            id="nav-contact-cta"
            onClick={onOpenBooking}
            aria-label="Contact SPHEREX or Schedule Consultation"
          >
            Contact
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
          <a 
            href="#why-spherex" 
            className="navbar-mobile-link" 
            onClick={(e) => handleNavClick(e, 'why-spherex', 'about-us')}
          >
            <span>About us</span>
          </a>
          <a 
            href="#features" 
            className="navbar-mobile-link" 
            onClick={(e) => handleNavClick(e, 'features', 'features')}
          >
            <span>Features</span>
          </a>
          <a 
            href="#pricing" 
            className="navbar-mobile-link" 
            onClick={(e) => handleNavClick(e, 'conversion', 'pricing')}
          >
            <span>Pricing</span>
          </a>
          <a 
            href="#blog" 
            className="navbar-mobile-link" 
            onClick={(e) => handleNavClick(e, 'tech-stack', 'blog')}
          >
            <span>Blog</span>
          </a>

          <button 
            type="button"
            className="navbar-mobile-contact-cta" 
            onClick={() => {
              setMobileOpen(false);
              if (onOpenBooking) onOpenBooking();
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
