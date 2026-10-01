import React from 'react';

export default function CatalisAbout({ onOpenBooking: _onOpenBooking }) {
  return (
    <section className="catalis-about-section" id="about-us">
      <div className="catalis-about-container">
        {/* Eyebrow Badge */}
        <div className="catalis-badge catalis-badge-blue">
          <span className="catalis-badge-star">★</span>
          <span className="catalis-badge-text">ABOUT US</span>
        </div>

        {/* Big Editorial Statement */}
        <h2 className="catalis-about-heading">
          We are passionate about empowering institutional leaders and admission teams to take control of their student enrollment and achieve their admission goals.
        </h2>

        {/* 3 Prominent Metric Display Cards */}
        <div className="catalis-stats-grid">
          <div className="catalis-stat-item">
            <div className="stat-big-val">80%</div>
            <div className="stat-label">Reduction in counseling and reporting time.</div>
          </div>
          <div className="catalis-stat-item">
            <div className="stat-big-val">₹55L</div>
            <div className="stat-label">Savings per admission cycle (approx).</div>
          </div>
          <div className="catalis-stat-item">
            <div className="stat-big-val">99%</div>
            <div className="stat-label">Increase in counselor productivity and quota fill rate.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
