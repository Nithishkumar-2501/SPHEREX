import React from 'react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand-col" style={{ maxWidth: '360px' }}>
            <div className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#18181b',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
              }}>
                <img 
                  src="/logo.png?v=3" 
                  alt="SPHEREX" 
                  className="brand-icon-img" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>SPHEREX</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.06em' }}>
                  ADMISSION MANAGEMENT OS
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#ffffff', lineHeight: 1.6 }}>
              Intelligent Multi-Campus Admission CRM &amp; Omnichannel Lead Management System.
            </p>
            <p style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.85)', marginTop: '8px', lineHeight: 1.5 }}>
              Engineered by the <strong style={{ color: '#ffffff' }}>SPHEREX Core Architecture Team</strong> &bull; 2026–2027 Admissions Operating System.
            </p>
          </div>

          <div className="footer-col">
            <h4>Institutional Campuses</h4>
            <ul>
              <li><a href="#multi-campus" style={{ color: '#ffffff' }}>Campus 01 (Main Campus)</a></li>
              <li><a href="#multi-campus" style={{ color: '#ffffff' }}>Campus 02 (City Campus)</a></li>
              <li><a href="#lead-assignment" style={{ color: '#ffffff' }}>16+ Faculty Portals</a></li>
              <li><a href="#nora-ai" style={{ color: '#ffffff' }}>TNEA Cutoff Calculator</a></li>
              <li><a href="#mobile-app" style={{ color: '#ffffff' }}>Mobile App Options</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>System Modules</h4>
            <ul>
              <li><a href="#lead-assignment" style={{ color: '#ffffff' }}>Batch Quota Splitting</a></li>
              <li><a href="#marketing" style={{ color: '#ffffff' }}>Omnichannel Marketing</a></li>
              <li><a href="#voice-calling" style={{ color: '#ffffff' }}>WebRTC Telephony (Port 5000)</a></li>
              <li><a href="#nora-ai" style={{ color: '#ffffff' }}>Nora AI OCR Engine</a></li>
              <li><a href="#pricing" style={{ color: '#ffffff' }}>Institutional Plans</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Campus Deployment</h4>
            <div style={{ fontSize: '0.8rem', color: '#ffffff', lineHeight: 1.6 }}>
              <div style={{ marginBottom: '6px' }}>&bull; High Availability <strong style={{ color: '#ffffff' }}>Multi-Tenant Architecture</strong></div>
              <div style={{ marginBottom: '6px' }}>&bull; Built for <strong style={{ color: '#ffffff' }}>Autonomous Campuses &amp; Institutions</strong></div>
              <div style={{ marginBottom: '6px' }}>&bull; Full <strong style={{ color: '#ffffff' }}>SQLite &amp; Firebase Dual-Cloud Sync</strong></div>
              <div style={{ marginBottom: '6px' }}>&bull; Real-time <strong style={{ color: '#ffffff' }}>Department Seat Matrix Sync</strong></div>
              <div style={{ marginTop: '12px' }}>
                <span className="badge badge-success" style={{ fontSize: '0.72rem' }}>
                  ONLINE &bull; 2 Campuses Synchronized
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            &copy; 2026 SPHEREX Admission Management System &bull; All institutional rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a 
              href="https://cal.com/sphere-x-5kss8s/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-demo-btn"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5px 14px',
                fontSize: '0.74rem',
                fontWeight: 600,
                borderRadius: '9999px',
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: '#38bdf8',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              Institutional Demo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
