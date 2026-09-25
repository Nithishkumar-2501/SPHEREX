import React from 'react';

export default function Footer({ onOpenBooking, onOpenLogin }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand-col" style={{ maxWidth: '360px' }}>
            <div className="brand-logo" style={{ marginBottom: '12px' }}>
              <img src="/logo.png" alt="SPHEREX" className="brand-icon-img" />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>SPHEREX</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)' }}>
                  ADMISSION MANAGEMENT OS
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Intelligent Multi-Campus Admission CRM &amp; Omnichannel Lead Management System.
            </p>
            <p style={{ fontSize: '0.76rem', color: 'var(--text-dim)', marginTop: '8px', lineHeight: 1.5 }}>
              Engineered by the <strong>SPHEREX Core Architecture Team</strong> &bull; 2026–2027 Admissions Operating System.
            </p>
          </div>

          <div className="footer-col">
            <h4>Institutional Campuses</h4>
            <ul>
              <li><a href="#multi-campus">Campus 01 (Main Campus)</a></li>
              <li><a href="#multi-campus">Campus 02 (City Campus)</a></li>
              <li><a href="#lead-assignment">16+ Faculty Portals</a></li>
              <li>
                <a 
                  href="/login" 
                  style={{ color: '#38bdf8', fontWeight: 600 }}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    if (onOpenLogin) onOpenLogin(); 
                  }}
                >
                  🔐 Institutional Portal Login
                </a>
              </li>
              <li><a href="#nora-ai">TNEA Cutoff Calculator</a></li>
              <li><a href="#mobile-app">Mobile App Options</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>System Modules</h4>
            <ul>
              <li><a href="#lead-management">3-Sheet Candidate Entry</a></li>
              <li><a href="#lead-assignment">Batch Quota Splitting</a></li>
              <li><a href="#marketing">Omnichannel Marketing</a></li>
              <li><a href="#voice-calling">WebRTC Telephony (Port 5000)</a></li>
              <li><a href="#nora-ai">Nora AI OCR Engine</a></li>
              <li><a href="#tech-stack">Prisma SQLite &amp; Firebase</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Campus Deployment</h4>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <div style={{ marginBottom: '6px' }}>&bull; High Availability <strong>Multi-Tenant Architecture</strong></div>
              <div style={{ marginBottom: '6px' }}>&bull; Built for <strong>Autonomous Campuses &amp; Institutions</strong></div>
              <div style={{ marginBottom: '6px' }}>&bull; Full <strong>SQLite &amp; Firebase Dual-Cloud Sync</strong></div>
              <div style={{ marginBottom: '6px' }}>&bull; Real-time <strong>Department Seat Matrix Sync</strong></div>
              <div style={{ marginTop: '12px' }}>
                <span className="badge badge-success" style={{ fontSize: '0.72rem' }}>
                  ONLINE &bull; 2 Campuses Synchronized
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 2026 SPHEREX Admission Management System &bull; All institutional rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a 
              href="/login" 
              onClick={(e) => { 
                e.preventDefault(); 
                if (onOpenLogin) onOpenLogin(); 
              }}
              style={{ color: 'var(--primary-light)', fontWeight: 600, fontSize: '0.82rem' }}
            >
              Sign in to Portal
            </a>
            <span style={{ color: 'var(--border-color)' }}>&bull;</span>
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
