import React from 'react';

export default function FinalCTA({ onOpenBooking }) {
  return (
    <section className="section" id="conversion">
      <div className="container">
        <div className="final-cta-card">
          <div className="section-eyebrow" style={{ marginBottom: '12px' }}>
            <span className="dot"></span>
            INSTITUTIONAL ONBOARDING &amp; DEPLOYMENT
          </div>
          <h2>Ready to Transform Your Institutional Admissions?</h2>
          <p className="cta-desc">
            No public downloads or complex self-setup required. Schedule a discovery consultation with the creator of SPHEREX to discuss your admissions pipeline and arrange an in-person, on-campus installation.
          </p>

          <div className="final-brand-statement">
            <span className="final-brand-name">SPHEREX</span>
            <span className="final-brand-tagline">Intelligent Admission CRM &amp; Multi-Campus Lead Management OS</span>
          </div>

          <div className="final-cta-group">
            <a 
              href="#mobile-app" 
              className="btn btn-primary" 
              style={{ fontSize: '1.05rem', padding: '16px 36px', display: 'inline-block' }}
            >
              📱 View Mobile &amp; Web App Previews &rarr;
            </a>
          </div>

          <p className="final-support-note">
            The creator personally visits your institution to configure servers, set up SQLite + Firebase dual-cloud sync, and train your faculty team.
          </p>
        </div>
      </div>
    </section>
  );
}
