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

        <div className="mobile-app-banner">
          <div className="mobile-app-grid">
            
            {/* Left Column: App Features & Deployment Workflow */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(191, 219, 254, 0.8)', padding: '5px 14px', borderRadius: '99px', fontSize: '0.75rem', color: '#2563eb', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '16px', boxShadow: '0 2px 8px rgba(37, 99, 235, 0.04)' }}>
                🔒 INSTITUTIONAL ON-PREMISE DEPLOYMENT ONLY
              </div>

              <h3 style={{ fontSize: '1.85rem', color: '#0f172a', fontWeight: 800, marginBottom: '14px', lineHeight: 1.3 }}>
                Installed On-Campus Directly by the SPHEREX Creator
              </h3>

              <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '24px' }}>
                To maintain strict data security and institutional privacy, the native SPHEREX Android application is not distributed via public app stores. Following a discovery meeting, the <strong>creator of SPHEREX personally visits your campus</strong> to set up the server, configure SQLite &amp; Firebase dual-cloud synchronization, install the application on faculty devices, and provide comprehensive counselor training.
              </p>

              {/* In-App Options Breakdown - Liquid Frosted Glass Panels */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                <div className="mobile-feat-item" style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.9)', boxShadow: '0 6px 20px -4px rgba(15, 23, 42, 0.04), inset 0 1px 1px rgba(255, 255, 255, 1)', padding: '16px 18px', borderRadius: '16px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ fontSize: '1.4rem' }}>📞</span>
                  <div>
                    <strong style={{ color: '#0f172a', fontSize: '0.92rem', fontWeight: 700, display: 'block', marginBottom: '2px' }}>1-Touch Dialer &amp; WhatsApp Integration</strong>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>Locked +91- mobile standard for instant student counseling calls &amp; greetings</div>
                  </div>
                </div>

                <div className="mobile-feat-item" style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.9)', boxShadow: '0 6px 20px -4px rgba(15, 23, 42, 0.04), inset 0 1px 1px rgba(255, 255, 255, 1)', padding: '16px 18px', borderRadius: '16px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ fontSize: '1.4rem' }}>📷</span>
                  <div>
                    <strong style={{ color: '#0f172a', fontSize: '0.92rem', fontWeight: 700, display: 'block', marginBottom: '2px' }}>Nora AI Marksheet OCR Scanner</strong>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>Scan 10th &amp; 12th marksheets via smartphone camera for instant TNEA cutoff calculation</div>
                  </div>
                </div>

                <div className="mobile-feat-item" style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.9)', boxShadow: '0 6px 20px -4px rgba(15, 23, 42, 0.04), inset 0 1px 1px rgba(255, 255, 255, 1)', padding: '16px 18px', borderRadius: '16px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ fontSize: '1.4rem' }}>🎯</span>
                  <div>
                    <strong style={{ color: '#0f172a', fontSize: '0.92rem', fontWeight: 700, display: 'block', marginBottom: '2px' }}>Faculty Batch Range Allocation</strong>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>View assigned student batches (#1 to #100, #101 to #200) with quota progress</div>
                  </div>
                </div>

                <div className="mobile-feat-item" style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.9)', boxShadow: '0 6px 20px -4px rgba(15, 23, 42, 0.04), inset 0 1px 1px rgba(255, 255, 255, 1)', padding: '16px 18px', borderRadius: '16px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ fontSize: '1.4rem' }}>⚡</span>
                  <div>
                    <strong style={{ color: '#0f172a', fontSize: '0.92rem', fontWeight: 700, display: 'block', marginBottom: '2px' }}>Offline-First SQLite Caching</strong>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>Work uninterrupted during field visits &amp; expos; auto-syncs when online</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Liquid Glass App Screenshot Showcase */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ position: 'relative', maxWidth: '340px', width: '100%' }}>
                {/* Soft ambient light glow */}
                <div style={{ position: 'absolute', inset: '-16px', background: 'radial-gradient(circle, rgba(186, 230, 253, 0.45) 0%, rgba(224, 242, 254, 0.15) 50%, transparent 75%)', filter: 'blur(28px)', zIndex: 0 }}></div>
                
                {/* Liquid Glass Phone Mockup Frame */}
                <div style={{ position: 'relative', zIndex: 1, padding: '10px', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: '36px', border: '1px solid rgba(255, 255, 255, 0.9)', boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.12), inset 0 1px 2px rgba(255, 255, 255, 1)' }}>
                  <img 
                    src="/liquid-glass-preview.jpg" 
                    alt="SPHEREX Liquid Glass Mobile Interface Preview" 
                    style={{ width: '100%', height: 'auto', borderRadius: '28px', display: 'block', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)' }}
                  />
                </div>
                
                <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  ✨ Liquid Glass Mobile Interface Preview
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
