import React from 'react';

export default function FinalCTA({ onOpenDemo }) {
  return (
    <section className="section" id="conversion">
      <div className="container">
        <div className="final-cta-card">
          <h2>Ready to Transform Your Admissions?</h2>
          <p className="cta-desc">
            Stop managing student enquiries across disconnected tools. Give your admission team one platform to capture, engage, track and convert every opportunity.
          </p>

          <div className="final-brand-statement">
            <span className="final-brand-name">SPHEREX</span>
            <span className="final-brand-tagline">The Operating System for Modern College Admissions.</span>
          </div>

          <div className="final-cta-group">
            <button 
              className="btn btn-primary" 
              style={{ fontSize: '1.1rem', padding: '16px 36px' }}
              onClick={() => onOpenDemo('Final Section Primary CTA')}
            >
              Transform Your Admissions &rarr;
            </button>
            <button 
              className="btn btn-secondary" 
              style={{ fontSize: '1.05rem', padding: '16px 32px' }}
              onClick={() => onOpenDemo('Final Section Secondary CTA')}
            >
              Explore SPHEREX
            </button>
          </div>

          <p className="final-support-note">
            Bring your admission operation into one connected platform.
          </p>
        </div>
      </div>
    </section>
  );
}
