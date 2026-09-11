import React from 'react';

export default function OmnichannelMarketing({ onOpenDemo }) {
  return (
    <section className="section" id="marketing">
      <div className="container">
        <div className="feature-split">
          <div className="feature-text-block">
            <div className="section-eyebrow">
              <span className="dot"></span>
              ATTRIBUTION &amp; ROI
            </div>
            <h2>Turn Every Marketing Channel Into Measurable Admissions.</h2>
            <p>
              Understand which channels generate enquiries and how those enquiries move through your admission funnel. Never wonder which advertisement or school outreach campaign delivered your best students.
            </p>
            <p>
              Track conversion from first touch to verified payment, calculating exact cost-per-admitted student across all digital and offline investments.
            </p>
            <button className="btn btn-primary" onClick={() => onOpenDemo('Marketing Intelligence CTA')}>
              Explore Marketing Intelligence &rarr;
            </button>
          </div>

          <div className="feature-preview-block">
            <div className="channels-flow-box">
              <div className="widget-title">
                <span>Multi-Source Ingestion Grid</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>Omnichannel Connectors</span>
              </div>

              <div className="channels-pills-wrap">
                <span className="channel-pill">&#128269; Google</span>
                <span className="channel-pill">&#9654; YouTube</span>
                <span className="channel-pill">&#128247; Instagram</span>
                <span className="channel-pill">&#128222; Facebook</span>
                <span className="channel-pill">&#128172; WhatsApp</span>
                <span className="channel-pill">&#9993; Email</span>
                <span className="channel-pill">&#128241; SMS</span>
                <span className="channel-pill">&#127760; Website</span>
                <span className="channel-pill">&#127979; Events</span>
                <span className="channel-pill">&#128099; Walk-ins</span>
              </div>

              <div className="flow-funnel-pipeline">
                <div className="pipeline-stage-bar">
                  <span className="stage-bar-name">Aggregated Ingestion &bull; SPHEREX</span>
                  <span className="stage-bar-count">100% Leads</span>
                </div>
                <div style={{ textAlign: 'center', color: 'var(--accent-cyan)', fontSize: '1rem' }}>&darr;</div>
                <div className="pipeline-stage-bar">
                  <span className="stage-bar-name">Verified Student Leads</span>
                  <span className="stage-bar-count">4,820</span>
                </div>
                <div style={{ textAlign: 'center', color: 'var(--accent-cyan)', fontSize: '1rem' }}>&darr;</div>
                <div className="pipeline-stage-bar">
                  <span className="stage-bar-name">Completed Applications</span>
                  <span className="stage-bar-count">1,450</span>
                </div>
                <div style={{ textAlign: 'center', color: 'var(--accent-cyan)', fontSize: '1rem' }}>&darr;</div>
                <div className="pipeline-stage-bar" style={{ background: 'rgba(0, 242, 254, 0.08)', borderColor: 'rgba(0, 242, 254, 0.3)' }}>
                  <span className="stage-bar-name" style={{ color: 'var(--accent-cyan)' }}>Confirmed Admissions</span>
                  <span className="stage-bar-count" style={{ color: '#fff' }}>820 Enrolled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
