import React, { useState } from 'react';

const tnDistricts = [
  'Karur', 'Coimbatore', 'Tiruchirappalli', 'Namakkal', 'Salem', 'Dindigul', 
  'Erode', 'Tiruppur', 'Madurai', 'Chennai', 'Thanjavur', 'Pudukkottai', 
  'Perambalur', 'Ariyalur', 'Cuddalore', 'Villupuram', 'Dharmapuri', 'Krishnagiri'
];

export default function LeadManagement({ onOpenBooking }) {
  const [activeMode, setActiveMode] = useState('entryForm'); // 'entryForm' | 'directory'
  const [activeSheet, setActiveSheet] = useState(1);

  return (
    <section className="section" id="lead-management">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            MODULE 2 &amp; 3 &bull; INTAKE ARCHITECTURE PREVIEW
          </div>
          <h2>3-Sheet Candidate Entry &amp; Lead Directory Interface</h2>
          <p>
            Preview the structured options and workflows built into SPHEREX. Capture student, parent, community, and marketing attribution data with locked +91- mobile validation.
          </p>
        </div>

        {/* View Switcher: 3-Sheet Entry vs Contact Directory */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="button"
            className={`btn ${activeMode === 'entryForm' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '10px 22px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}
            onClick={() => setActiveMode('entryForm')}
          >
            <span>📝</span> 3-Sheet Entry Options Preview
          </button>
          <button
            type="button"
            className={`btn ${activeMode === 'directory' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '10px 22px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}
            onClick={() => setActiveMode('directory')}
          >
            <span>📇</span> Contact Directory &amp; Quick Trigger Preview
          </button>
        </div>

        {/* MODE 1: 3-Sheet Candidate Entry Form Preview */}
        {activeMode === 'entryForm' && (
          <div className="glass-card" style={{ maxWidth: '980px', margin: '0 auto', padding: '32px' }}>
            
            {/* Sheet Steps Navigation */}
            <div className="sheet-nav-wrapper">
              <button
                type="button"
                className={`sheet-nav-item ${activeSheet === 1 ? 'active' : ''}`}
                onClick={() => setActiveSheet(1)}
              >
                <span className="sheet-step-badge">1</span>
                <span>Sheet 1: Student Information</span>
              </button>
              <button
                type="button"
                className={`sheet-nav-item ${activeSheet === 2 ? 'active' : ''}`}
                onClick={() => setActiveSheet(2)}
              >
                <span className="sheet-step-badge">2</span>
                <span>Sheet 2: Parent &amp; Residence</span>
              </button>
              <button
                type="button"
                className={`sheet-nav-item ${activeSheet === 3 ? 'active' : ''}`}
                onClick={() => setActiveSheet(3)}
              >
                <span className="sheet-step-badge">3</span>
                <span>Sheet 3: Category &amp; Attribution</span>
              </button>
            </div>

            {/* SHEET 1 PREVIEW */}
            {activeSheet === 1 && (
              <div className="sheet-card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: '#fff' }}>Sheet 1: Student Personal Details Options</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Compulsory 10-digit Indian mobile format (+91-) locked</p>
                  </div>
                  <span className="badge-range-tag">Step 1 of 3</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label>Full Legal Name</label>
                    <input type="text" className="form-input" value="S. Vignesh" readOnly />
                  </div>

                  <div className="form-group">
                    <label>Student Email Address</label>
                    <input type="email" className="form-input" value="vignesh.s@gmail.com" readOnly />
                  </div>

                  <div className="form-group">
                    <label>Student Mobile (+91- Locked)</label>
                    <div className="phone-input-group">
                      <span className="phone-prefix-locked">+91-</span>
                      <input type="text" className="phone-input-field" value="9876543210" readOnly />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Gender</label>
                    <select className="form-select" value="Male" disabled>
                      <option value="Male">Male</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="text" className="form-input" value="2008-05-14" readOnly />
                  </div>

                  <div className="form-group">
                    <label>Blood Group</label>
                    <select className="form-select" value="O+" disabled>
                      <option value="O+">O+ Positive</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label>Higher Secondary / Matriculation School</label>
                    <input type="text" className="form-input" value="St. Joseph Higher Secondary School" readOnly />
                  </div>

                  <div className="form-group">
                    <label>Tamil Nadu District (38 Districts)</label>
                    <select className="form-select" defaultValue="Karur">
                      {tnDistricts.map(d => (
                        <option key={d} value={d}>{d} District</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-input" value="Tamil Nadu" readOnly />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', flexWrap: 'wrap', gap: '12px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                    👁️ Interactive Form Preview (Actual system installed during campus setup)
                  </span>
                  <button type="button" className="btn btn-secondary" onClick={() => setActiveSheet(2)}>
                    View Sheet 2 (Parent Details) &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* SHEET 2 PREVIEW */}
            {activeSheet === 2 && (
              <div className="sheet-card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: '#fff' }}>Sheet 2: Parent Details &amp; Residence Options</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Parent contact validation for counseling follow-ups</p>
                  </div>
                  <span className="badge-range-tag">Step 2 of 3</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label>Father's Name</label>
                    <input type="text" className="form-input" value="K. Subramanian" readOnly />
                  </div>

                  <div className="form-group">
                    <label>Father's Mobile (+91- Locked)</label>
                    <div className="phone-input-group">
                      <span className="phone-prefix-locked">+91-</span>
                      <input type="text" className="phone-input-field" value="9443322110" readOnly />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Mother's Name</label>
                    <input type="text" className="form-input" value="S. Lakshmi" readOnly />
                  </div>

                  <div className="form-group">
                    <label>Mother's Mobile (+91- Locked)</label>
                    <div className="phone-input-group">
                      <span className="phone-prefix-locked">+91-</span>
                      <input type="text" className="phone-input-field" value="9442211009" readOnly />
                    </div>
                  </div>

                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label>Parents' Occupation</label>
                    <input type="text" className="form-input" value="Agriculture / Farming" readOnly />
                  </div>

                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label>Residential Street Address</label>
                    <input type="text" className="form-input" value="45/2, Gandhi Road, Thanthonimalai, Karur - 639005" readOnly />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', flexWrap: 'wrap', gap: '12px' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setActiveSheet(1)}>
                    &larr; Back to Sheet 1
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => setActiveSheet(3)}>
                    View Sheet 3 (Category &amp; Attribution) &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* SHEET 3 PREVIEW */}
            {activeSheet === 3 && (
              <div className="sheet-card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: '#fff' }}>Sheet 3: Category, Preferences &amp; Attribution Options</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Community quotas and 9-channel marketing attribution tracking</p>
                  </div>
                  <span className="badge-range-tag">Step 3 of 3</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label>Community Category</label>
                    <input type="text" className="form-input" value="BC (Backward Class)" readOnly />
                  </div>

                  <div className="form-group">
                    <label>Religion</label>
                    <input type="text" className="form-input" value="Hindu" readOnly />
                  </div>

                  <div className="form-group">
                    <label>Interest Status</label>
                    <input type="text" className="form-input" value="🔥 Interested (Ready to admit)" readOnly />
                  </div>

                  <div className="form-group">
                    <label>Preferred Campus</label>
                    <input type="text" className="form-input" value="SPHEREX Campus 01 (Main Campus)" readOnly />
                  </div>

                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label>Course Preference</label>
                    <input type="text" className="form-input" value="B.Tech Artificial Intelligence and Data Science (AI & DS)" readOnly />
                  </div>

                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label>Referral Attribution Channel</label>
                    <input type="text" className="form-input" value="📢 Online Ads (Instagram / Facebook / YouTube)" readOnly />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '24px' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setActiveSheet(2)}>
                    &larr; Back to Sheet 2
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* MODE 2: Contact Directory Options Preview */}
        {activeMode === 'directory' && (
          <div className="glass-card" style={{ padding: '24px', maxWidth: '1180px', margin: '0 auto' }}>
            <div style={{ marginBottom: '18px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Candidate Directory Options &amp; Communication Layout</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Preview how counselors view student dossiers with quick action triggers</p>
              </div>
            </div>

            <div className="table-responsive">
              <table className="leads-table">
                <thead>
                  <tr>
                    <th>Candidate</th>
                    <th>Mobile (+91-)</th>
                    <th>Course &amp; Campus</th>
                    <th>Community</th>
                    <th>Cutoff</th>
                    <th>Available Communication Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="student-cell">
                        <div className="avatar-initial">SV</div>
                        <div>
                          <strong style={{ color: '#fff' }}>S. Vignesh</strong>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Father: K. Subramanian (Farmer)</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-light)' }}>+91-9876543210</td>
                    <td>AI &amp; DS &bull; Campus 01</td>
                    <td><span className="badge-range-tag">BC</span></td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#00f0ff' }}>194.50</td>
                    <td>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span className="action-btn-pill action-btn-call">📞 Native Call</span>
                        <span className="action-btn-pill action-btn-wa">💬 WhatsApp</span>
                        <span className="action-btn-pill action-btn-ai">🤖 Nora AI Review</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="student-cell">
                        <div className="avatar-initial" style={{ background: 'linear-gradient(135deg, #0284c7, #2563eb)' }}>KP</div>
                        <div>
                          <strong style={{ color: '#fff' }}>K. Priyanka</strong>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Mother: S. Banu (Teacher)</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-light)' }}>+91-9443322110</td>
                    <td>CSE &bull; Campus 02</td>
                    <td><span className="badge-range-tag">MBC</span></td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#00f0ff' }}>196.00</td>
                    <td>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span className="action-btn-pill action-btn-call">📞 Native Call</span>
                        <span className="action-btn-pill action-btn-wa">💬 WhatsApp</span>
                        <span className="action-btn-pill action-btn-ai">🤖 Nora AI Review</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="student-cell">
                        <div className="avatar-initial" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>MN</div>
                        <div>
                          <strong style={{ color: '#fff' }}>M. Naveen</strong>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Father: P. Muthu (Business)</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-light)' }}>+91-9442211009</td>
                    <td>ECE &bull; Campus 01</td>
                    <td><span className="badge-range-tag">SC</span></td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#00f0ff' }}>188.50</td>
                    <td>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span className="action-btn-pill action-btn-call">📞 Native Call</span>
                        <span className="action-btn-pill action-btn-wa">💬 WhatsApp</span>
                        <span className="action-btn-pill action-btn-ai">🤖 Nora AI Review</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px', padding: '12px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 'var(--radius-sm)' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                ✨ During on-site setup, the creator configures your institution's live database, telephony gateways, and custom field columns.
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
