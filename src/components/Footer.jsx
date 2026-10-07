import React from 'react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand-col" style={{ maxWidth: '360px' }}>
            <div className="brand-logo" style={{ marginBottom: '12px' }}>
              <img src="/logo.png?v=3" alt="SPHEREX" className="brand-icon-img" />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>SPHEREX</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)' }}>
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
              <li><a href="#lead-management" style={{ color: '#ffffff' }}>3-Sheet Candidate Entry</a></li>
              <li><a href="#lead-assignment" style={{ color: '#ffffff' }}>Batch Quota Splitting</a></li>
              <li><a href="#marketing" style={{ color: '#ffffff' }}>Omnichannel Marketing</a></li>
              <li><a href="#voice-calling" style={{ color: '#ffffff' }}>WebRTC Telephony (Port 5000)</a></li>
              <li><a href="#nora-ai" style={{ color: '#ffffff' }}>Nora AI OCR Engine</a></li>
              <li><a href="#tech-stack" style={{ color: '#ffffff' }}>Prisma SQLite &amp; Firebase</a></li>
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
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a 
              href="https://cal.com/sphere-x-5kss8s/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.82rem' }}
            >
              Institutional Demo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
