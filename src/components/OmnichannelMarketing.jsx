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

          </div>

          <div className="feature-preview-block">
            <div className="channels-flow-box">
              <div className="widget-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.98rem' }}>Multi-Source Ingestion Grid</span>
                <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 700, background: '#eff6ff', border: '1px solid #bfdbfe', padding: '3px 8px', borderRadius: '6px' }}>9 Official Ingestion Streams</span>
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
                  <div key={i} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.35rem' }}>{ch.icon}</span>
                      <div>
                        <strong style={{ fontSize: '0.92rem', color: '#0f172a', fontWeight: 700, display: 'block', marginBottom: '2px' }}>{ch.name}</strong>
                        <div style={{ fontSize: '0.82rem', color: '#0f172a', fontWeight: 600, lineHeight: 1.45 }}>{ch.desc}</div>
                      </div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', color: '#2563eb', fontWeight: 800, fontSize: '1.05rem', marginLeft: '12px', flexShrink: 0 }}>
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
