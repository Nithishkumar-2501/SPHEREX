import React from 'react';

export default function WhySpherex() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            THE SPHEREX ADVANTAGE
          </div>
          <h2>Built to Make Admission Teams More Effective.</h2>
          <p>
            Purpose-engineered for the rigor, seasonality, and volume of collegiate admissions.
          </p>
        </div>

        <div className="why-benefits-grid">
          <div className="glass-card benefit-card">
            <div className="benefit-emoji">&#9889;</div>
            <h3>Faster</h3>
            <p>Reduce manual admission workflows and eliminate repetitive data entry across fragmented spreadsheets.</p>
          </div>

          <div className="glass-card benefit-card">
            <div className="benefit-emoji">&#127919;</div>
            <h3>Organized</h3>
            <p>Keep every prospective student, interaction history, mark record, and followup reminder in one unified place.</p>
          </div>

          <div className="glass-card benefit-card">
            <div className="benefit-emoji">&#128200;</div>
            <h3>Visible</h3>
            <p>Understand the admission funnel, lead velocity, and counsellor activity in real time with zero reporting delays.</p>
          </div>

          <div className="glass-card benefit-card">
            <div className="benefit-emoji">&#128257;</div>
            <h3>Connected</h3>
            <p>Bring marketing, counselling, academic departments, applications and payments into one continuous workflow.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
