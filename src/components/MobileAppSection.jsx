import React from 'react';

export default function MobileAppSection({ onOpenBooking }) {
  return (
    <section className="section" id="mobile-app" style={{ padding: '90px 0' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '44px' }}>
          <div className="section-eyebrow">
            <span className="dot"></span>
            NATIVE MOBILE APPLICATION ARCHITECTURE
          </div>
          <h2>SPHEREX Android Mobile App — Options &amp; Interface Preview</h2>
          <p>
            Designed exclusively for institutional admission officers and faculty counselors on the move. Explore all in-app options below.
          </p>
        </div>

        <div className="mobile-app-banner" style={{ padding: '36px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
            
            {/* Left Column: App Features & Deployment Workflow */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.35)', padding: '4px 12px', borderRadius: '99px', fontSize: '0.75rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '16px' }}>
                🔒 INSTITUTIONAL ON-PREMISE DEPLOYMENT ONLY
              </div>

              <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '14px', lineHeight: 1.3 }}>
                Installed On-Campus Directly by the SPHEREX Creator
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '22px' }}>
                To maintain strict data security and institutional privacy, the native SPHEREX Android application is not distributed via public app stores. Following a discovery meeting, the <strong>creator of SPHEREX personally visits your campus</strong> to set up the server, configure SQLite &amp; Firebase dual-cloud synchronization, install the application on faculty devices, and provide comprehensive counselor training.
              </p>

              {/* In-App Options Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <div className="mobile-feat-item">
                  <span style={{ fontSize: '1.3rem' }}>📞</span>
                  <div>
                    <strong style={{ color: '#fff', fontSize: '0.88rem' }}>1-Touch Dialer &amp; WhatsApp Integration</strong>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Locked +91- mobile standard for instant student counseling calls &amp; greetings</div>
                  </div>
                </div>

                <div className="mobile-feat-item">
                  <span style={{ fontSize: '1.3rem' }}>📷</span>
                  <div>
                    <strong style={{ color: '#fff', fontSize: '0.88rem' }}>Nora AI Marksheet OCR Scanner</strong>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Scan 10th &amp; 12th marksheets via smartphone camera for instant TNEA cutoff calculation</div>
                  </div>
                </div>

                <div className="mobile-feat-item">
                  <span style={{ fontSize: '1.3rem' }}>🎯</span>
                  <div>
                    <strong style={{ color: '#fff', fontSize: '0.88rem' }}>Faculty Batch Range Allocation</strong>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>View assigned student batches (#1 to #100, #101 to #200) with quota progress</div>
                  </div>
                </div>

                <div className="mobile-feat-item">
                  <span style={{ fontSize: '1.3rem' }}>⚡</span>
                  <div>
                    <strong style={{ color: '#fff', fontSize: '0.88rem' }}>Offline-First SQLite Caching</strong>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Work uninterrupted during field visits &amp; expos; auto-syncs when online</div>
                  </div>
                </div>
              </div>



            </div>

            {/* Right Column: High-Res App Screenshot Showcase */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ position: 'relative', maxWidth: '380px', width: '100%' }}>
                <div style={{ position: 'absolute', inset: '-12px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)', filter: 'blur(20px)', zIndex: 0 }}></div>
                <img 
                  src="/spherex-mobile-app.jpg" 
                  alt="SPHEREX Android Mobile App Interface Preview" 
                  style={{ width: '100%', height: 'auto', borderRadius: '24px', border: '1px solid rgba(56, 189, 248, 0.4)', boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(56, 189, 248, 0.2)', position: 'relative', zIndex: 1, display: 'block' }}
                />
                <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  ⚡ Actual SPHEREX Android App Interface Preview
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
