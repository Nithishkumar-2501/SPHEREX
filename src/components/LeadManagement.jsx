import React, { useState } from 'react';

export default function LeadManagement({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <section className="section" id="lead-management">
      <div className="container">
        <div className="feature-split">
          <div className="feature-text-block">
            <div className="section-eyebrow">
              <span className="dot"></span>
              CENTRALIZED INTELLIGENCE
            </div>
            <h2>Know Every Student Before You Call.</h2>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-cyan)', marginBottom: '16px' }}>
              One profile. Every important admission detail.
            </h3>
            <p>
              Eliminate blind calling and redundant questions. SPHEREX equips counsellors and faculty with a unified 360-degree student record encompassing academic scores, cutoff calculations, communication history, and admission status.
            </p>
            <button className="btn btn-primary" onClick={() => onOpenDemo('Manage Student Leads CTA')}>
              Manage Student Leads &rarr;
            </button>
          </div>

          <div className="feature-preview-block">
            {/* Realistic Student Profile Interface */}
            <div className="student-profile-mock">
              <div className="profile-top">
                <div className="profile-avatar-row">
                  <div className="profile-avatar-big">PS</div>
                  <div>
                    <div className="profile-title-name">Priya Sharma</div>
                    <div className="profile-title-sub">Enquiry ID: #SPX-89421 &bull; Registered 2 hrs ago</div>
                  </div>
                </div>
                <span className="badge-status status-counselling">Stage: Counselling</span>
              </div>

              {/* Interactive Profile Tabs */}
              <div className="profile-tabs">
                <button 
                  className={`profile-tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
                  onClick={() => setActiveTab('personal')}
                >
                  Personal Info
                </button>
                <button 
                  className={`profile-tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
                  onClick={() => setActiveTab('academic')}
                >
                  Academic Info
                </button>
                <button 
                  className={`profile-tab-btn ${activeTab === 'admission' ? 'active' : ''}`}
                  onClick={() => setActiveTab('admission')}
                >
                  Admission Info
                </button>
                <button 
                  className={`profile-tab-btn ${activeTab === 'communication' ? 'active' : ''}`}
                  onClick={() => setActiveTab('communication')}
                >
                  Communication
                </button>
              </div>

              {/* Tab: Personal */}
              {activeTab === 'personal' && (
                <div className="profile-tab-content">
                  <div className="info-grid">
                    <div className="info-box">
                      <div className="info-box-label">Student Name</div>
                      <div className="info-box-val">Priya Sharma</div>
                    </div>
                    <div className="info-box">
                      <div className="info-box-label">Phone Number</div>
                      <div className="info-box-val">+91 98765 43210</div>
                    </div>
                    <div className="info-box">
                      <div className="info-box-label">Email Address</div>
                      <div className="info-box-val">priya.sharma@example.edu</div>
                    </div>
                    <div className="info-box">
                      <div className="info-box-label">District / Region</div>
                      <div className="info-box-val">Metro Zone &bull; District 04</div>
                    </div>
                    <div className="info-box" style={{ gridColumn: 'span 2' }}>
                      <div className="info-box-label">High School / Higher Secondary</div>
                      <div className="info-box-val">St. Jude Senior Secondary School</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Academic */}
              {activeTab === 'academic' && (
                <div className="profile-tab-content">
                  <div className="info-grid">
                    <div className="info-box">
                      <div className="info-box-label">10th Board Marks</div>
                      <div className="info-box-val">94.6% (CGPA 9.5)</div>
                    </div>
                    <div className="info-box">
                      <div className="info-box-label">12th Board Marks</div>
                      <div className="info-box-val">96.2%</div>
                    </div>
                    <div className="info-box">
                      <div className="info-box-label">PCM Score</div>
                      <div className="info-box-val">292 / 300</div>
                    </div>
                    <div className="info-box" style={{ borderColor: 'rgba(0, 242, 254, 0.4)' }}>
                      <div className="info-box-label" style={{ color: 'var(--accent-cyan)' }}>Calculated Cutoff</div>
                      <div className="info-box-val" style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', fontFamily: 'var(--font-mono)' }}>
                        194.50 / 200
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Admission */}
              {activeTab === 'admission' && (
                <div className="profile-tab-content">
                  <div className="info-grid">
                    <div className="info-box">
                      <div className="info-box-label">Preferred Course</div>
                      <div className="info-box-val">B.Tech Computer Science</div>
                    </div>
                    <div className="info-box">
                      <div className="info-box-label">Preferred Campus</div>
                      <div className="info-box-val">Main Tech Campus &bull; Block A</div>
                    </div>
                    <div className="info-box">
                      <div className="info-box-label">Admission Category</div>
                      <div className="info-box-val">General Merit / Open Quota</div>
                    </div>
                    <div className="info-box">
                      <div className="info-box-label">Fee Verification</div>
                      <div className="info-box-val" style={{ color: '#fbbf24' }}>Pending Seat Confirmation</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Communication */}
              {activeTab === 'communication' && (
                <div className="profile-tab-content">
                  <div className="info-grid">
                    <div className="info-box">
                      <div className="info-box-label">Last Contacted</div>
                      <div className="info-box-val">Today, 10:30 AM (Call: 4m 12s)</div>
                    </div>
                    <div className="info-box">
                      <div className="info-box-label">Assigned Faculty/Counsellor</div>
                      <div className="info-box-val">Dr. Sarah Jenkins (Dept. CSE)</div>
                    </div>
                    <div className="info-box" style={{ gridColumn: 'span 2' }}>
                      <div className="info-box-label">Counselling Note</div>
                      <div className="info-box-val" style={{ fontWeight: 400, color: '#cbd5e1' }}>
                        Interested in AI/ML electives. Parent invited for campus visit this Saturday. Sent course brochure via WhatsApp.
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
