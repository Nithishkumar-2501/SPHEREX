import React from 'react';

export default function ApplicationPayment() {
  return (
    <section className="section" id="applications">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            PIPELINE INTEGRATION
          </div>
          <h2>From Lead to Application Without Losing Context.</h2>
          <p>
            Give your admission team complete visibility from initial enquiry to completed application and verified payment receipt.
          </p>
        </div>

        {/* Application Progression Flow */}
        <div className="glass-card" style={{ padding: '36px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
            <div style={{ textAlign: 'center', minWidth: '90px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#00f2fe', color: '#000', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>1</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>Student</div>
            </div>
            <div style={{ color: 'var(--text-dim)' }}>&rarr;</div>
            <div style={{ textAlign: 'center', minWidth: '90px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#00f2fe', color: '#000', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>2</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>Course</div>
            </div>
            <div style={{ color: 'var(--text-dim)' }}>&rarr;</div>
            <div style={{ textAlign: 'center', minWidth: '90px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#00f2fe', color: '#000', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>3</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>Academic</div>
            </div>
            <div style={{ color: 'var(--text-dim)' }}>&rarr;</div>
            <div style={{ textAlign: 'center', minWidth: '90px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#00f2fe', color: '#000', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>4</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>Documents</div>
            </div>
            <div style={{ color: 'var(--text-dim)' }}>&rarr;</div>
            <div style={{ textAlign: 'center', minWidth: '90px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#00f2fe', color: '#000', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>5</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>Application</div>
            </div>
            <div style={{ color: 'var(--text-dim)' }}>&rarr;</div>
            <div style={{ textAlign: 'center', minWidth: '90px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#6366f1', color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>6</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#818cf8' }}>Payment</div>
            </div>
            <div style={{ color: 'var(--text-dim)' }}>&rarr;</div>
            <div style={{ textAlign: 'center', minWidth: '90px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #00f2fe, #6366f1)', color: '#000', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>7</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00f2fe' }}>Admission</div>
            </div>
          </div>
        </div>

        {/* Payment Tracking Sub-Header */}
        <div className="section-header" style={{ marginBottom: '24px' }}>
          <h2>Know What Is Pending. Know What Is Confirmed.</h2>
          <p>
            Track tuition advances, counselling fees, and seat reservation receipts in clear financial categories without guesswork.
          </p>
        </div>

        <div className="payment-cards-grid">
          <div className="payment-status-card">
            <h4>Pending</h4>
            <div className="payment-amount">128</div>
            <div className="payment-count-sub">Awaiting candidate or bank clearance</div>
            <div className="status-indicator-bar indicator-pending"></div>
          </div>

          <div className="payment-status-card">
            <h4>Processing</h4>
            <div className="payment-amount">45</div>
            <div className="payment-count-sub">Under institutional desk verification</div>
            <div className="status-indicator-bar indicator-processing"></div>
          </div>

          <div className="payment-status-card">
            <h4>Verified</h4>
            <div className="payment-amount">792</div>
            <div className="payment-count-sub">Confirmed by finance registry</div>
            <div className="status-indicator-bar indicator-verified"></div>
          </div>

          <div className="payment-status-card">
            <h4>Completed</h4>
            <div className="payment-amount">820</div>
            <div className="payment-count-sub">Seat confirmed &amp; receipt dispatched</div>
            <div className="status-indicator-bar indicator-completed"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
