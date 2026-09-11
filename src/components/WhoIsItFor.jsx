import React from 'react';

export default function WhoIsItFor() {
  return (
    <section className="section" id="solutions">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            ROLE-SPECIFIC WORKFLOWS
          </div>
          <h2>Built for Everyone Involved in Admissions.</h2>
          <p>
            SPHEREX empowers each stakeholder in your institution with tailored tools to accelerate enrolments.
          </p>
        </div>

        <div className="roles-grid">
          <div className="glass-card role-card">
            <div>
              <div className="role-icon">&#128081;</div>
              <h3>Admission Directors</h3>
              <div className="role-tagline">See the complete admission picture.</div>
              <p>Monitor executive institutional performance, aggregate lead flows, application velocities, and confirmed admissions across all campuses in real time.</p>
            </div>
            <a href="#showcase" className="btn-link-action" style={{ marginTop: '20px' }}>Director Workflows &rarr;</a>
          </div>

          <div className="glass-card role-card">
            <div>
              <div className="role-icon">&#128222;</div>
              <h3>Admission Counsellors</h3>
              <div className="role-tagline">Focus on conversations that convert.</div>
              <p>Manage allocated prospective students, click-to-call, log structured notes, schedule reminders, and guide candidates through course selection.</p>
            </div>
            <a href="#voice-calling" className="btn-link-action" style={{ marginTop: '20px' }}>Counsellor Tools &rarr;</a>
          </div>

          <div className="glass-card role-card">
            <div>
              <div className="role-icon">&#127979;</div>
              <h3>Faculty &amp; Department Teams</h3>
              <div className="role-tagline">Turn assigned enquiries into students.</div>
              <p>Manage departmental student allocations, provide authoritative academic counselling, answer curriculum questions, and fill department quotas.</p>
            </div>
            <a href="#lead-assignment" className="btn-link-action" style={{ marginTop: '20px' }}>Faculty Portals &rarr;</a>
          </div>

          <div className="glass-card role-card">
            <div>
              <div className="role-icon">&#128200;</div>
              <h3>Marketing Teams</h3>
              <div className="role-tagline">Connect campaigns to admission outcomes.</div>
              <p>Understand lead sources, optimize digital campaign spends, track ROI per student, and eliminate wasted ad budgets with precise attribution.</p>
            </div>
            <a href="#marketing" className="btn-link-action" style={{ marginTop: '20px' }}>Campaign Intelligence &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
