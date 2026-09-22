import React, { useState } from 'react';
import StarButton from './StarButton';

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState('lead');

  return (
    <section className="section" id="showcase">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            THE CENTERPIECE
          </div>
          <h2>Your Entire Admission Operation. At a Glance.</h2>
          <p>
            Explore the core operational modules that power high-converting admission teams around the clock.
          </p>
        </div>

        <div className="showcase-wrapper">
          {/* Showcase Tabs (StarButton UI) */}
          <div className="showcase-nav-tabs" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px' }}>
            <StarButton 
              variant="tab"
              active={activeTab === 'lead'}
              onClick={() => setActiveTab('lead')}
            >
              Lead Intelligence
            </StarButton>
            <StarButton 
              variant="tab"
              active={activeTab === 'funnel'}
              onClick={() => setActiveTab('funnel')}
            >
              Admission Funnel
            </StarButton>
            <StarButton 
              variant="tab"
              active={activeTab === 'allocation'}
              onClick={() => setActiveTab('allocation')}
            >
              Team Allocation
            </StarButton>
            <StarButton 
              variant="tab"
              active={activeTab === 'campaigns'}
              onClick={() => setActiveTab('campaigns')}
            >
              Campaign Analytics
            </StarButton>
            <StarButton 
              variant="tab"
              active={activeTab === 'applications'}
              onClick={() => setActiveTab('applications')}
            >
              Application Tracking
            </StarButton>
            <StarButton 
              variant="tab"
              active={activeTab === 'payments'}
              onClick={() => setActiveTab('payments')}
            >
              Payment Monitoring
            </StarButton>
          </div>

          {/* Panel 1: Lead Intelligence */}
          {activeTab === 'lead' && (
            <div className="showcase-panel">
              <div className="feature-split">
                <div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Instant Lead Capture &amp; De-duplication</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    Automatic phone and email hashing prevents duplicated efforts when a student registers across multiple web ads, educational fairs, and offline brochures.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <li>&#10003; Real-time webhook ingestion from Google, Facebook, WhatsApp</li>
                    <li>&#10003; Automated cutoff and eligibility screening</li>
                    <li>&#10003; Smart contact deduplication algorithm</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '12px' }}>
                    // REAL-TIME INGESTION RECORD
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#fff', lineHeight: '1.7' }}>
                    &gt; [09:42:15] Webhook from Meta Ads Received<br />
                    &gt; Parsing: Name: "Kavitha R." &bull; Cutoff: 191.0<br />
                    &gt; Checking duplicate phone hash: 0 match found<br />
                    &gt; Routing: Assigned to Senior Counsellor (Team CSE)<br />
                    &gt; SMS/WhatsApp confirmation auto-dispatched &bull; Status: OK
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Panel 2: Funnel */}
          {activeTab === 'funnel' && (
            <div className="showcase-panel">
              <div className="feature-split">
                <div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Real-Time Pipeline Velocity</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    Spot bottlenecks instantly. If enquiries are stagnating between counselling and application submission, reallocate counsellors or dispatch targeted WhatsApp collateral with one click.
                  </p>
                  <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>
                    Average Conversion Time: 4.2 Days from Enquiry to Application
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Enquiry &rarr; Contacted</span>
                    <span style={{ color: '#34d399', fontWeight: 700 }}>75.5% Conversion</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Contacted &rarr; Counselling</span>
                    <span style={{ color: '#34d399', fontWeight: 700 }}>66.2% Conversion</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Counselling &rarr; Application</span>
                    <span style={{ color: '#34d399', fontWeight: 700 }}>60.1% Conversion</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Application &rarr; Confirmed Seat</span>
                    <span style={{ color: '#34d399', fontWeight: 700 }}>56.5% Conversion</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Panel 3: Allocation */}
          {activeTab === 'allocation' && (
            <div className="showcase-panel">
              <div className="feature-split">
                <div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Workload Balancing &amp; Faculty Dashboards</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    Prevent counsellor burnout and ensure no student is left waiting. Distribute enquiries evenly across dedicated counselling desks and departmental faculty ambassadors.
                  </p>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontWeight: 600 }}>Team Allocation Capacity</span>
                    <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>88% Optimal</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    &bull; Counsellor Group Alpha: 42 active leads (Target: 50)<br />
                    &bull; Faculty Advisory (ECE): 38 active leads (Target: 40)<br />
                    &bull; Verification Desk: 24 applications pending review<br />
                    &bull; Automated re-routing active for inactive leads &gt; 24h
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Panel 4: Campaign Analytics */}
          {activeTab === 'campaigns' && (
            <div className="showcase-panel">
              <div className="feature-split">
                <div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Campaign Attribution &amp; Source ROI</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    Connect every digital marketing investment directly to matriculated enrolments. Identify your most lucrative marketing initiatives and eliminate ineffective spends.
                  </p>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    <strong>Top Campaign:</strong> "2026 Engineering Aspirants - Search Ads"<br />
                    <strong>Enquiries:</strong> 1,740 &bull; <strong>Admissions:</strong> 340<br />
                    <strong>Cost per Confirmed Admission:</strong> 42% below regional benchmark
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Panel 5: Applications */}
          {activeTab === 'applications' && (
            <div className="showcase-panel">
              <div className="feature-split">
                <div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Document Review &amp; Academic Qualification</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    Track marksheets, transfer certificates, community certificates, and entrance cutoffs in an auditable digital binder for each applicant.
                  </p>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
                  <div style={{ color: '#34d399', fontWeight: 600, marginBottom: '8px' }}>1,450 Verified Digital Files</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Automatic format validation, OCR marksheet verification, and fast approval desk workflow for seamless registrar handoff.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Panel 6: Payments */}
          {activeTab === 'payments' && (
            <div className="showcase-panel">
              <div className="feature-split">
                <div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Finance Reconciliation &amp; Fee Receipts</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    Keep admission desks and finance bursars synchronized. Track payment stages from transaction initiation to verified receipt generation without paper delays.
                  </p>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
                  <div style={{ color: '#fff', fontWeight: 700, marginBottom: '8px' }}>Audit-Ready Reconciliation</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Every confirmed seat ties back to an immutable ledger entry with receipt ID, student folio number, and department allocation.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
