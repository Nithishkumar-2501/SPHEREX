import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenDemo }) {
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
          <span>SPHEREX</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#platform" className="nav-link">Platform</a></li>
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#journey" className="nav-link">How It Works</a></li>
            <li><a href="#solutions" className="nav-link">Solutions</a></li>
            <li><a href="#showcase" className="nav-link">Resources</a></li>
            <li><a href="#meeting" className="nav-link" style={{ color: 'var(--accent-cyan)' }}>Assign Meeting</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#meeting" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem', borderColor: 'rgba(0, 242, 254, 0.35)' }}>
            📅 Assign Meeting
          </a>
          <span className="nav-login" id="nav-login-btn" onClick={() => onOpenDemo('Navbar Login')}>
            Login
          </span>
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
        <a href="#features" className="nav-link mobile-link" onClick={() => setMobileOpen(false)}>Features</a>
        <a href="#journey" className="nav-link mobile-link" onClick={() => setMobileOpen(false)}>How It Works</a>
        <a href="#solutions" className="nav-link mobile-link" onClick={() => setMobileOpen(false)}>Solutions</a>
        <a href="#showcase" className="nav-link mobile-link" onClick={() => setMobileOpen(false)}>Resources</a>
        <a href="#meeting" className="nav-link mobile-link" style={{ color: 'var(--accent-cyan)' }} onClick={() => setMobileOpen(false)}>📅 Assign Meeting</a>
        <span className="nav-login mobile-link" onClick={() => { setMobileOpen(false); onOpenDemo('Mobile Login'); }}>
          Login
        </span>
      </div>
    </header>
  );
}
