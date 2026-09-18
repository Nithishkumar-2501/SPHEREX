import React from 'react';

export default function Problem() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            THE ADMISSION PARADOX
          </div>
          <h2>Admissions Are Too Important to Run Across Disconnected Tools.</h2>
          <p>
            Institutions receive enquiries from websites, advertisements, social media, WhatsApp, events, walk-ins and other channels. But when those leads are managed across spreadsheets, messaging apps and disconnected systems, valuable opportunities can be missed.
          </p>
        </div>

        <div className="comparison-grid">
          {/* WITHOUT SPHEREX */}
          <div className="comparison-card card-without">
            <div className="comparison-header">
              <div className="comparison-icon icon-cross">&times;</div>
              <div>
                <h3>WITHOUT SPHEREX</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>The fragmented legacy struggle</p>
              </div>
            </div>
            <ul className="comparison-list">
              <li className="comparison-item negative"><span className="mark">&times;</span> Scattered student enquiries across inboxes and spreadsheets</li>
              <li className="comparison-item negative"><span className="mark">&times;</span> Manual lead assignment causing delays and lead leakage</li>
              <li className="comparison-item negative"><span className="mark">&times;</span> Missed follow-ups with no accountability or notifications</li>
              <li className="comparison-item negative"><span className="mark">&times;</span> No clear admission pipeline or conversion visibility</li>
              <li className="comparison-item negative"><span className="mark">&times;</span> Difficult campaign tracking and wasted marketing budgets</li>
              <li className="comparison-item negative"><span className="mark">&times;</span> Disconnected application information and document loss</li>
              <li className="comparison-item negative"><span className="mark">&times;</span> Limited management visibility into counselling performance</li>
            </ul>
          </div>

          {/* WITH SPHEREX */}
          <div className="comparison-card card-with">
            <div className="comparison-header">
              <div className="comparison-icon icon-check">&#10003;</div>
              <div>
                <h3 className="text-accent-gradient">WITH SPHEREX</h3>
                <p style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>The modern admission operating system</p>
              </div>
            </div>
            <ul className="comparison-list">
              <li className="comparison-item positive"><span className="mark">&#10003;</span> One centralized admission platform for all enquiry streams</li>
              <li className="comparison-item positive"><span className="mark">&#10003;</span> Organized 360&deg; student profiles with full history</li>
              <li className="comparison-item positive"><span className="mark">&#10003;</span> Smart lead allocation across counsellors and faculty</li>
              <li className="comparison-item positive"><span className="mark">&#10003;</span> Structured follow-ups with integrated reminders</li>
              <li className="comparison-item positive"><span className="mark">&#10003;</span> Transparent admission conversion funnel from click to fee</li>
              <li className="comparison-item positive"><span className="mark">&#10003;</span> Multi-channel marketing attribution by campaign</li>
              <li className="comparison-item positive"><span className="mark">&#10003;</span> Unified application and payment tracking</li>
              <li className="comparison-item positive"><span className="mark">&#10003;</span> Real-time institutional visibility for executive leaders</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
