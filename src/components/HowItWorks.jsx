import React from 'react';

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            THE 5-STEP ENGINE
          </div>
          <h2>Simple for Your Team. Powerful for Your Institution.</h2>
          <p>
            Deploy a standardized, frictionless admission operating system that turns chaos into predictable enrolment growth.
          </p>
        </div>

        <div className="how-steps-grid">
          <div className="glass-card how-step-card">
            <div className="how-step-num">01</div>
            <h3>CAPTURE</h3>
            <p>Collect enquiries from multiple online and offline channels with zero lead loss.</p>
          </div>

          <div className="glass-card how-step-card">
            <div className="how-step-num">02</div>
            <h3>ASSIGN</h3>
            <p>Route leads dynamically to the right team members based on rules and load balancing.</p>
          </div>

          <div className="glass-card how-step-card">
            <div className="how-step-num">03</div>
            <h3>ENGAGE</h3>
            <p>Call, message and follow up systematically from integrated browser interfaces.</p>
          </div>

          <div className="glass-card how-step-card">
            <div className="how-step-num">04</div>
            <h3>TRACK</h3>
            <p>Monitor student progress, cutoffs, and document applications in real time.</p>
          </div>

          <div className="glass-card how-step-card">
            <div className="how-step-num">05</div>
            <h3>CONVERT</h3>
            <p>Move qualified students toward confirmed admission and verified fee receipts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
