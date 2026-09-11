import React from 'react';
import LightRays from './LightRays';

export default function Hero({ onOpenDemo }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-light-rays-wrapper">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.08}
          distortion={0.04}
          className="custom-rays"
        />
      </div>
      <div className="hero-glow-1"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="section-eyebrow">
            <span className="dot"></span>
            COLLEGE ADMISSION CRM &bull; LEAD MANAGEMENT &bull; ADMISSION INTELLIGENCE
          </div>

          <h1>Turn Admission Enquiries Into <span className="text-accent-gradient">Enrolments.</span></h1>

          <p className="hero-subheadline">
            One platform to capture, assign, engage and convert every student enquiry.
          </p>

          <p className="hero-desc">
            SPHEREX brings admission leads, counselling teams, faculty, marketing campaigns, applications, calls and payment tracking together in one powerful platform built for modern higher education.
          </p>

          <div className="hero-cta-group">
            <a 
              href="https://lead-management-system-ten-xi.vercel.app/" 
              className="btn btn-primary" 
              id="hero-primary-cta"
            >
              Student Lead &rarr;
            </a>
            <a 
              href="#solutions" 
              className="btn btn-secondary" 
              id="hero-secondary-cta"
              onClick={() => onOpenDemo?.('Teachers')}
            >
              Teachers
            </a>
          </div>

          <div className="hero-trust">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span>Built for colleges, universities and higher-education admission teams.</span>
          </div>
        </div>

        {/* Realistic Hero Dashboard */}
        <div className="hero-dashboard-wrapper" id="dashboard-preview">
          
          {/* Floating UI Badges */}
          <div className="floating-badge badge-1">
            <div className="badge-icon-wrap bg-cyan-glow">&#10003;</div>
            <div>
              <span className="floating-badge-text">New Lead Captured</span>
              <span className="floating-badge-sub">Web Enquiry &bull; B.Tech CSE</span>
            </div>
          </div>

          <div className="floating-badge badge-2">
            <div className="badge-icon-wrap bg-purple-glow">&rarr;</div>
            <div>
              <span className="floating-badge-text">Lead Assigned</span>
              <span className="floating-badge-sub">Routed to Senior Counsellor</span>
            </div>
          </div>

          <div className="floating-badge badge-3">
            <div className="badge-icon-wrap bg-cyan-glow">&#9733;</div>
            <div>
              <span className="floating-badge-text">Payment Verified</span>
              <span className="floating-badge-sub">Admission Confirmed &bull; Term I</span>
            </div>
          </div>

          <div className="hero-dashboard">
            {/* Topbar Mock */}
            <div className="dashboard-topbar">
              <div className="topbar-left">
                <div className="window-dots">
                  <span className="dot-circle dot-red"></span>
                  <span className="dot-circle dot-yellow"></span>
                  <span className="dot-circle dot-green"></span>
                </div>
                <div className="topbar-institution">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  <span>Higher Education Operating System &bull; Institutional Portal</span>
                </div>
              </div>
              <div className="topbar-live-badge">
                LIVE PIPELINE
              </div>
            </div>

            {/* Metrics Overview Cards */}
            <div className="dashboard-metrics-grid">
              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-title">Total Enquiries</span>
                  <span className="metric-trend">&uarr; +18.4%</span>
                </div>
                <div className="metric-value">4,820</div>
                <div className="metric-caption">Across 7 marketing channels</div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-title">Verified Applications</span>
                  <span className="metric-trend">&uarr; +12.6%</span>
                </div>
                <div className="metric-value">1,450</div>
                <div className="metric-caption">Document review approved</div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-title">Admissions</span>
                  <span className="metric-trend">&uarr; +9.8%</span>
                </div>
                <div className="metric-value">820</div>
                <div className="metric-caption">Enrolment seats secured</div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-title">Fee Collection</span>
                  <span className="metric-trend">&uarr; +15.2%</span>
                </div>
                <div className="metric-value">Demo Stage</div>
                <div className="metric-caption">Verified collection tracking</div>
              </div>
            </div>

            {/* Main Dashboard Grid */}
            <div className="dashboard-main-grid">
              <div className="dashboard-left-col">
                
                {/* Admission Funnel */}
                <div className="funnel-container">
                  <div className="widget-title">
                    <span>Admission Funnel Pipeline</span>
                    <span style={{ fontSize: '0.75rem', color: '#a1a1aa', fontFamily: 'var(--font-mono)' }}>Active Conversion Cycle</span>
                  </div>
                  <div className="funnel-flow">
                    <div className="funnel-step">
                      <div className="funnel-step-name">New Enquiry</div>
                      <div className="funnel-step-count">4,820</div>
                    </div>
                    <div className="funnel-arrow">&rarr;</div>
                    <div className="funnel-step">
                      <div className="funnel-step-name">Contacted</div>
                      <div className="funnel-step-count">3,640</div>
                    </div>
                    <div className="funnel-arrow">&rarr;</div>
                    <div className="funnel-step">
                      <div className="funnel-step-name">Counselling</div>
                      <div className="funnel-step-count">2,410</div>
                    </div>
                    <div className="funnel-arrow">&rarr;</div>
                    <div className="funnel-step">
                      <div className="funnel-step-name">Application</div>
                      <div className="funnel-step-count">1,450</div>
                    </div>
                    <div className="funnel-arrow">&rarr;</div>
                    <div className="funnel-step" style={{ borderColor: 'rgba(255, 255, 255, 0.25)', background: 'rgba(255, 255, 255, 0.08)' }}>
                      <div className="funnel-step-name" style={{ color: '#ffffff' }}>Admitted</div>
                      <div className="funnel-step-count" style={{ color: '#ffffff' }}>820</div>
                    </div>
                  </div>
                </div>

                {/* Recent Leads Table */}
                <div className="leads-table-container">
                  <div className="widget-title">
                    <span>Recent Student Leads</span>
                    <a href="#lead-management" className="btn-link-action" style={{ fontSize: '0.78rem' }}>View Lead Directory &rarr;</a>
                  </div>
                  <div className="table-responsive">
                    <table className="leads-table">
                      <thead>
                        <tr>
                          <th>Student</th>
                          <th>Course</th>
                          <th>Source</th>
                          <th>Status</th>
                          <th>Assigned Counsellor</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="student-cell">
                              <div className="avatar-initial">PS</div>
                              <div>
                                <div className="student-info-name">Priya Sharma</div>
                                <div className="student-info-meta">Cutoff: 194.5 &bull; Metro Region</div>
                              </div>
                            </div>
                          </td>
                          <td>B.Tech Computer Science</td>
                          <td><span className="badge-source">Google Ads</span></td>
                          <td><span className="badge-status status-counselling">Counselling</span></td>
                          <td>Dr. Sarah Jenkins</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="student-cell">
                              <div className="avatar-initial" style={{ background: 'linear-gradient(135deg, #71717a, #3f3f46)' }}>AP</div>
                              <div>
                                <div className="student-info-name">Aarav Patel</div>
                                <div className="student-info-meta">Cutoff: 188.0 &bull; Western Region</div>
                              </div>
                            </div>
                          </td>
                          <td>AI &amp; Data Science</td>
                          <td><span className="badge-source">Instagram</span></td>
                          <td><span className="badge-status status-applied">Application</span></td>
                          <td>Prof. Marcus Vance</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="student-cell">
                              <div className="avatar-initial" style={{ background: 'linear-gradient(135deg, #a1a1aa, #52525b)' }}>AI</div>
                              <div>
                                <div className="student-info-name">Ananya Iyer</div>
                                <div className="student-info-meta">Cutoff: 196.0 &bull; Central Region</div>
                              </div>
                            </div>
                          </td>
                          <td>B.Tech Electronics (ECE)</td>
                          <td><span className="badge-source">WhatsApp</span></td>
                          <td><span className="badge-status status-qualified">Qualified</span></td>
                          <td>Elena Rostova</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="student-cell">
                              <div className="avatar-initial" style={{ background: 'linear-gradient(135deg, #52525b, #27272a)' }}>RV</div>
                              <div>
                                <div className="student-info-name">Rohan Verma</div>
                                <div className="student-info-meta">Cutoff: 182.5 &bull; Northern Region</div>
                              </div>
                            </div>
                          </td>
                          <td>Information Technology</td>
                          <td><span className="badge-source">Website</span></td>
                          <td><span className="badge-status status-enquiry">New Enquiry</span></td>
                          <td>David Miller</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              {/* Right Column */}
              <div className="dashboard-sidebar">
                
                {/* Lead Sources */}
                <div className="sidebar-widget">
                  <div className="widget-title">
                    <span>Lead Sources</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Attribution</span>
                  </div>
                  
                  <div className="source-item">
                    <div className="source-label-row">
                      <span>Google Search / Ads</span>
                      <span>36%</span>
                    </div>
                    <div className="source-progress-bg"><div className="source-progress-bar" style={{ width: '36%', background: 'linear-gradient(90deg, #ffffff, #a1a1aa)' }}></div></div>
                  </div>

                  <div className="source-item">
                    <div className="source-label-row">
                      <span>Instagram / Social</span>
                      <span>24%</span>
                    </div>
                    <div className="source-progress-bg"><div className="source-progress-bar" style={{ width: '24%', background: 'linear-gradient(90deg, #d4d4d8, #71717a)' }}></div></div>
                  </div>

                  <div className="source-item">
                    <div className="source-label-row">
                      <span>WhatsApp Direct</span>
                      <span>18%</span>
                    </div>
                    <div className="source-progress-bg"><div className="source-progress-bar" style={{ width: '18%', background: 'linear-gradient(90deg, #a1a1aa, #52525b)' }}></div></div>
                  </div>

                  <div className="source-item">
                    <div className="source-label-row">
                      <span>Events &amp; Walk-ins</span>
                      <span>14%</span>
                    </div>
                    <div className="source-progress-bg"><div className="source-progress-bar" style={{ width: '14%', background: 'linear-gradient(90deg, #71717a, #3f3f46)' }}></div></div>
                  </div>

                  <div className="source-item">
                    <div className="source-label-row">
                      <span>Referral / Website</span>
                      <span>8%</span>
                    </div>
                    <div className="source-progress-bg"><div className="source-progress-bar" style={{ width: '8%', background: 'rgba(255, 255, 255, 0.25)' }}></div></div>
                  </div>
                </div>

                {/* Scheduled Follow-ups */}
                <div className="sidebar-widget">
                  <div className="widget-title">
                    <span>Scheduled Follow-ups</span>
                    <span style={{ fontSize: '0.72rem', color: '#a1a1aa' }}>Today</span>
                  </div>

                  <div className="followup-item">
                    <div className="followup-icon icon-call">&#9742;</div>
                    <div className="followup-content">
                      <div className="followup-title">Call Student &bull; Cutoff Review</div>
                      <div className="followup-time">10:30 AM &bull; Priority High</div>
                    </div>
                  </div>

                  <div className="followup-item">
                    <div className="followup-icon icon-whatsapp">&#9993;</div>
                    <div className="followup-content">
                      <div className="followup-title">WhatsApp Fee Confirmation</div>
                      <div className="followup-time">11:15 AM &bull; Automated Dispatch</div>
                    </div>
                  </div>

                  <div className="followup-item">
                    <div className="followup-icon icon-doc">&#9776;</div>
                    <div className="followup-content">
                      <div className="followup-title">Application &amp; Doc Verification</div>
                      <div className="followup-time">02:00 PM &bull; Desk Review</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="hero-bottom-fade"></div>
    </section>
  );
}
