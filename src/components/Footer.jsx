import React from 'react';

export default function Footer({ onOpenDemo }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <div className="brand-logo">
              <img src="/logo.png" alt="SPHEREX" className="brand-icon-img" />
              <span>SPHEREX</span>
            </div>
            <p>College Admission CRM &amp; Lead Management Platform</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '8px' }}>
              The Operating System for Modern College Admissions. Capture. Assign. Engage. Track. Convert.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#hero">Platform</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#journey">How It Works</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#showcase">Resources</a></li>
              <li><span style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} onClick={() => onOpenDemo('Footer Login')}>Login</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#lead-management">Lead Management</a></li>
              <li><a href="#features">Admission CRM</a></li>
              <li><a href="#marketing">Marketing</a></li>
              <li><a href="#voice-calling">Calling</a></li>
              <li><a href="#applications">Applications</a></li>
              <li><a href="#applications">Payments</a></li>
              <li><a href="#showcase">Analytics</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Institutional</h4>
            <ul>
              <li><a href="#multi-campus">Multi-Campus</a></li>
              <li><a href="#solutions">Faculty Portals</a></li>
              <li><a href="#features">Cutoff Intelligence</a></li>
              <li><span style={{ cursor: 'pointer', color: 'var(--accent-cyan)' }} onClick={() => onOpenDemo('Footer Consultation')}>Book Consultation</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 SPHEREX. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Enterprise Grade</span>
            <span>Institutional Privacy</span>
            <span>Modern Higher Ed CRM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
