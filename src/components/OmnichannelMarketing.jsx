import React from 'react';

const channels = [
  { icon: '📸', name: 'Meta Ads (Instagram / FB)', share: '32%', desc: 'Carousel lead ads & stories targeted at 12th standard engineering aspirants' },
  { icon: '🔍', name: 'Google Search & Ads', share: '28%', desc: 'High-intent search queries for top engineering programs & cutoff criteria' },
  { icon: '💬', name: 'WhatsApp Business Broadcast', share: '18%', desc: 'Direct counselor chat, instant prospectus delivery, and automated admission updates' },
  { icon: '🏫', name: 'School Expos & Melas', share: '14%', desc: 'Science exhibitions, career guidance fairs, and on-ground marksheet evaluation' },
  { icon: '🚶', name: 'Campus Walk-ins & Counseling', share: '8%', desc: 'Direct administrative enquiries at Campus 01 and Campus 02 admission desks' }
];

export default function OmnichannelMarketing({ onOpenBooking, onOpenDemo: _onOpenDemo }) {
  return (
    <section className="section" id="marketing">
      <div className="container">
        <div className="feature-split">
          <div className="feature-text-block">
            <div className="section-eyebrow">
              <span className="dot"></span>
              MODULE 5 &bull; OMNICHANNEL MARKETING HUB
            </div>
            <h2>Turn Every Campaign Channel Into Measurable Enrolments.</h2>
            <p>
              Capture candidate inquiries from Google Ads, Meta (Instagram/Facebook) Ads, WhatsApp campaigns, School Science Expos, Direct Walk-ins, and Counseling desks into one centralized repository.
            </p>
            <p>
              Permanent attribution tags prevent lead overwriting, calculating the exact cost-per-admitted student across all institutional campuses.
            </p>
            <a 
              href="https://cal.com/sphere-x-5kss8s/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              📅 Book Campus Setup Meeting &rarr;
            </a>
          </div>

          <div className="feature-preview-block">
            <div className="channels-flow-box">
              <div className="widget-title">
                <span>Multi-Source Ingestion Grid</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>9 Official Ingestion Streams</span>
              </div>

              <div className="channels-pills-wrap">
                <span className="channel-pill">📸 Meta (Instagram / FB)</span>
                <span className="channel-pill">🔍 Google Search</span>
                <span className="channel-pill">▶️ YouTube Ads</span>
                <span className="channel-pill">💬 WhatsApp Broadcast</span>
                <span className="channel-pill">🏫 School Science Expos</span>
                <span className="channel-pill">🎓 TNEA Counselling</span>
                <span className="channel-pill">🚶 Campus Walk-in</span>
                <span className="channel-pill">👥 Alumni Referral</span>
                <span className="channel-pill">📰 Newspaper &amp; Hoardings</span>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {channels.map((ch, i) => (
                  <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: 'var(--radius-sm)', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.2rem' }}>{ch.icon}</span>
                      <div>
                        <strong style={{ fontSize: '0.86rem', color: '#fff' }}>{ch.name}</strong>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{ch.desc}</div>
                      </div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', fontWeight: 700, fontSize: '0.9rem' }}>
                      {ch.share}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
