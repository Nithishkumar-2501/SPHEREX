import React from 'react';

export default function LeadAllocation({ onOpenDemo, onSimulateAction }) {
  return (
    <section className="section" id="lead-assignment">
      <div className="container">
        <div className="feature-split reverse">
          <div className="feature-text-block">
            <div className="section-eyebrow">
              <span className="dot"></span>
              DYNAMIC ROUTING
            </div>
            <h2>Put Every Lead in the Right Hands.</h2>
            <p>
              SPHEREX enables administrators to distribute admission enquiries across counsellors and faculty teams while maintaining complete visibility over assigned workloads and follow-ups.
            </p>
            <p>
              Whether routing by preferred department, academic cutoff bracket, geography, or round-robin availability, leads are placed with team members best equipped to counsel and convert.
            </p>
            <button className="btn btn-primary" onClick={() => onOpenDemo('Lead Allocation CTA')}>
              Explore Allocation Workflows &rarr;
            </button>
          </div>

          <div className="feature-preview-block">
            {/* Interactive Allocation Pipeline Widget */}
            <div className="allocation-widget">
              <div className="widget-title">
                <span>Intelligent Routing Architecture</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>Auto-Balanced</span>
              </div>

              <div className="alloc-tree">
                <div className="alloc-node alloc-root">
                  NEW INCOMING ENQUIRIES
                </div>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem' }}>&darr;</div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '4px 12px', borderRadius: '99px' }}>
                  SPHEREX ALLOCATION ENGINE
                </div>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem' }}>&darr;</div>
                <div className="alloc-branches">
                  <div className="alloc-branch">
                    <strong>Counsellor</strong>
                    <span>General Guidance</span>
                  </div>
                  <div className="alloc-branch" style={{ borderColor: 'rgba(0, 242, 254, 0.4)', background: 'rgba(0, 242, 254, 0.08)' }}>
                    <strong>Faculty Member</strong>
                    <span>Dept. Specialization</span>
                  </div>
                  <div className="alloc-branch">
                    <strong>Admission Team</strong>
                    <span>Verification &amp; Desk</span>
                  </div>
                </div>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem' }}>&darr;</div>
                <div className="alloc-node" style={{ background: 'rgba(0, 242, 254, 0.15)', color: '#00f2fe', border: '1px solid rgba(0, 242, 254, 0.4)', boxShadow: '0 0 20px rgba(0, 242, 254, 0.2)' }}>
                  PROSPECTIVE STUDENT
                </div>
              </div>

              <div className="alloc-controls">
                <button className="alloc-btn" onClick={() => onSimulateAction('Assign Leads')}>&#10003; Assign Leads</button>
                <button className="alloc-btn" onClick={() => onSimulateAction('Split Contacts')}>&#9878; Split Contacts</button>
                <button className="alloc-btn" onClick={() => onSimulateAction('Rebalance Workload')}>&#8644; Rebalance Workload</button>
                <button className="alloc-btn" onClick={() => onSimulateAction('Track Follow-ups')}>&#9742; Track Follow-ups</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
