import React from 'react';

export default function ValueProps() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            COMPLETE CAPABILITIES
          </div>
          <h2>One Platform. The Entire Admission Journey.</h2>
          <p>
            From the initial online enquiry to verified course enrolment, SPHEREX orchestrates the critical steps that turn prospective students into enrolled scholars.
          </p>
        </div>

        <div className="value-props-grid">
          {/* 01 */}
          <div className="glass-card prop-card">
            <div>
              <span className="prop-card-num">01</span>
              <h3>Lead Management</h3>
              <p>Capture and organize every student enquiry in one centralized database with zero duplicate records and zero lead leakage.</p>
            </div>
            <a href="#lead-management" className="btn-link-action">Explore Lead Management &rarr;</a>
          </div>

          {/* 02 */}
          <div className="glass-card prop-card">
            <div>
              <span className="prop-card-num">02</span>
              <h3>Admission CRM</h3>
              <p>Track each student's journey from first enquiry through admission with real-time stage transitions, cutoffs, and activity logs.</p>
            </div>
            <a href="#admission-crm" className="btn-link-action">Explore Admission CRM &rarr;</a>
          </div>

          {/* 03 */}
          <div className="glass-card prop-card">
            <div>
              <span className="prop-card-num">03</span>
              <h3>Smart Lead Allocation</h3>
              <p>Assign leads automatically to counsellors, faculty members or departmental admission teams based on rules and load balancing.</p>
            </div>
            <a href="#lead-assignment" className="btn-link-action">Explore Allocation &rarr;</a>
          </div>

          {/* 04 */}
          <div className="glass-card prop-card">
            <div>
              <span className="prop-card-num">04</span>
              <h3>Omnichannel Marketing</h3>
              <p>Understand where enquiries originate across digital campaigns, social channels, walk-ins, and regional outreach events.</p>
            </div>
            <a href="#marketing" className="btn-link-action">Explore Marketing Intelligence &rarr;</a>
          </div>

          {/* 05 */}
          <div className="glass-card prop-card">
            <div>
              <span className="prop-card-num">05</span>
              <h3>Voice &amp; Communication</h3>
              <p>Call prospective students directly from the browser, conduct structured guidance, and log auditable communication history.</p>
            </div>
            <a href="#voice-calling" className="btn-link-action">Explore Voice Calling &rarr;</a>
          </div>

          {/* 06 */}
          <div className="glass-card prop-card">
            <div>
              <span className="prop-card-num">06</span>
              <h3>Application &amp; Payment Tracking</h3>
              <p>Monitor document submissions, eligibility verification, admission status, and verified fee receipts in one dashboard.</p>
            </div>
            <a href="#applications" className="btn-link-action">Explore Applications &rarr;</a>
          </div>

          {/* 07 */}
          <div className="glass-card prop-card">
            <div>
              <span className="prop-card-num">07</span>
              <h3>Multi-Campus &amp; Team Management</h3>
              <p>Give executive administrators complete top-down visibility across multiple campuses, academic departments, and distributed regional teams.</p>
            </div>
            <a href="#multi-campus" className="btn-link-action">Explore Institutional Governance &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
