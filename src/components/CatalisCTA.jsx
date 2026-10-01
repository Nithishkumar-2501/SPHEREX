import React from 'react';

export default function CatalisCTA({ onOpenBooking }) {
  return (
    <section className="catalis-cta-section" id="conversion">
      <div className="catalis-cta-card">
        <div className="catalis-cta-sky-glow" aria-hidden="true" />
        
        <div className="catalis-badge">
          <span className="catalis-badge-star">★</span>
          <span className="catalis-badge-text">INSTITUTIONAL ONBOARDING</span>
        </div>

        <h2 className="catalis-cta-title">
          Ready to Transform Your<br />
          Institutional <em className="catalis-serif-italic">Admissions</em>?
        </h2>

        <p className="catalis-cta-desc">
          No public downloads or complex self-setup required. Schedule a discovery consultation with the creator of SPHEREX to discuss your admissions pipeline and arrange an in-person, on-campus installation.
        </p>

        <div className="catalis-cta-actions">
          <button 
            type="button" 
            className="catalis-btn-primary"
            onClick={onOpenBooking}
          >
            Book Consultation
          </button>
          <a 
            href="#hero" 
            className="catalis-btn-secondary"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </section>
  );
}
