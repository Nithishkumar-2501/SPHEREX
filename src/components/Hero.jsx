import React, { useState, useRef } from 'react';
import LightRays from './LightRays';

export default function Hero({ onOpenBooking, onOpenDemo: _onOpenDemo } = {}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [heroCampus, setHeroCampus] = useState('CAMPUS_01');
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Cinematic Earth Sphere Looping Video */}
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          className="hero-background-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero-sphere.mp4" type="video/mp4" />
          <source src="/hero-scenic.mp4" type="video/mp4" />
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-scrim"></div>
        <div className="hero-video-mist"></div>
      </div>

      {/* Atmospheric Video Motion Toggle */}
      <div className="hero-video-controls">
        <button
          type="button"
          className="btn-video-control"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause orbital motion" : "Play orbital motion"}
        >
          <span className={`control-indicator ${isPlaying ? 'active' : ''}`}></span>
          {isPlaying ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
              <span>Orbital Live Sphere</span>
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>Resume Orbit</span>
            </>
          )}
        </button>
      </div>

      <div className="hero-light-rays-wrapper">
        <LightRays
          raysOrigin="top-center"
          raysColor="#38bdf8"
          raysSpeed={1.0}
          lightSpread={0.9}
          rayLength={1.4}
          followMouse={true}
          mouseInfluence={0.07}
          noiseAmount={0.05}
          distortion={0.03}
          className="custom-rays"
        />
      </div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-sphere"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="section-eyebrow">
            <span className="dot"></span>
            SPHEREX &bull; MULTI-CAMPUS ADMISSION MANAGEMENT OS &bull; 2026–2027
          </div>

          <h1>Intelligent Admission CRM &amp; <span className="text-accent-gradient">Lead Management.</span></h1>

          <p className="hero-subheadline">
            SPHEREX &bull; High-Performance Multi-Campus Admission CRM &bull; 2026–2027 Admissions
          </p>

          <p className="hero-desc">
            Automating institutional student intake across multiple campuses. Dynamic lead allocation to 16+ department heads with batch quota tracking, structured 3-sheet candidate registration with compulsory +91- mobile standard, Nora AI marksheet OCR cutoff evaluation, WebRTC voice telephony, and local SQLite + Google Firebase dual-cloud synchronization.
          </p>

          <div className="hero-cta-group">
            <a 
              href="https://cal.com/sphere-x-5kss8s/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary" 
              id="hero-primary-cta"
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              📅 Book Meeting &rarr;
            </a>
            <a 
              href="#mobile-app" 
              className="btn btn-secondary" 
              id="hero-app-preview-cta"
            >
              📱 View Mobile &amp; Web App Previews
            </a>
          </div>

          <div className="hero-trust">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span>On-Campus Installation &amp; Custom Deployment Conducted Directly by the SPHEREX Creator</span>
          </div>
        </div>

        {/* Realistic Hero Dashboard */}
        <div className="hero-dashboard-wrapper" id="dashboard-preview">
          
          {/* Floating UI Badges */}
          <div className="floating-badge badge-1">
            <div className="badge-icon-wrap bg-cyan-glow">&#10003;</div>
            <div>
              <span className="floating-badge-text">New Lead Captured</span>
              <span className="floating-badge-sub">S. Vignesh (+91-9876543210) &bull; AI &amp; DS &bull; Cutoff 194.5</span>
            </div>
          </div>

          <div className="floating-badge badge-2">
            <div className="badge-icon-wrap bg-purple-glow">&rarr;</div>
            <div>
              <span className="floating-badge-text">Lead Batch Allocated</span>
              <span className="floating-badge-sub">Contacts #1–#100 &rarr; Dr. K. Arulmurugan (HOD CSE)</span>
            </div>
          </div>

          <div className="floating-badge badge-3">
            <div className="badge-icon-wrap bg-cyan-glow">&#9733;</div>
            <div>
              <span className="floating-badge-text">Dual-Cloud Synced</span>
              <span className="floating-badge-sub">SQLite Prisma &bull; Firestore &amp; RTDB Live</span>
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
                  <span>SPHEREX &bull; Multi-Campus Admission Management OS</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="badge-firebase-live">
                  <span className="pulse-orange"></span>
                  Firebase Live Sync
                </span>
                <div className="topbar-live-badge">
                  2026–27 INTAKE
                </div>
              </div>
            </div>

            {/* Campus Selector Bar inside Hero */}
            <div style={{ padding: '12px 20px', background: 'rgba(7, 12, 30, 0.7)', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setHeroCampus('CAMPUS_01')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid',
                    borderColor: heroCampus === 'CAMPUS_01' ? 'var(--primary)' : 'var(--border)',
                    background: heroCampus === 'CAMPUS_01' ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                    color: heroCampus === 'CAMPUS_01' ? '#ffffff' : 'var(--text-muted)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>🏛️</span> Campus 01 <span className="badge-tnea-code">Main Campus</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHeroCampus('CAMPUS_02')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid',
                    borderColor: heroCampus === 'CAMPUS_02' ? 'var(--primary)' : 'var(--border)',
                    background: heroCampus === 'CAMPUS_02' ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                    color: heroCampus === 'CAMPUS_02' ? '#ffffff' : 'var(--text-muted)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>🏛️</span> Campus 02 <span className="badge-tnea-code">City Campus</span>
                </button>
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                Viewing: <strong style={{ color: 'var(--primary-light)' }}>{heroCampus === 'CAMPUS_01' ? 'Campus 01 (Main Campus)' : 'Campus 02 (City Campus)'}</strong>
              </div>
            </div>

            {/* Metrics Overview Cards */}
            <div className="dashboard-metrics-grid">
              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-title">Total Enquiries</span>
                  <span className="metric-trend">&uarr; +24.4%</span>
                </div>
                <div className="metric-value">{heroCampus === 'CAMPUS_01' ? '2,650' : '2,170'}</div>
                <div className="metric-caption">Across 9 marketing channels</div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-title">Verified Marksheets</span>
                  <span className="metric-trend">&uarr; +18.2%</span>
                </div>
                <div className="metric-value">{heroCampus === 'CAMPUS_01' ? '820' : '630'}</div>
                <div className="metric-caption">Nora AI OCR Cutoff validated</div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-title">Confirmed Admissions</span>
                  <span className="metric-trend">&uarr; +15.8%</span>
                </div>
                <div className="metric-value">{heroCampus === 'CAMPUS_01' ? '470' : '350'}</div>
                <div className="metric-caption">Seat booked across 16 depts</div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-title">Fee Advance Tracking</span>
                  <span className="metric-trend">&uarr; +21.5%</span>
                </div>
                <div className="metric-value">{heroCampus === 'CAMPUS_01' ? '₹94.5 L' : '₹69.8 L'}</div>
                <div className="metric-caption">Verified finance receipts</div>
              </div>
            </div>

            {/* Main Dashboard Grid */}
            <div className="dashboard-main-grid">
              <div className="dashboard-left-col">
                
                {/* Admission Funnel */}
                <div className="funnel-container">
                  <div className="widget-title">
                    <span>TNEA 5-Stage Conversion Funnel</span>
                    <span style={{ fontSize: '0.75rem', color: '#a1a1aa', fontFamily: 'var(--font-mono)' }}>Live Realtime Sync</span>
                  </div>
                  <div className="funnel-flow">
                    <div className="funnel-step">
                      <div className="funnel-step-name">1. NEW</div>
                      <div className="funnel-step-count">{heroCampus === 'CAMPUS_01' ? '2,650' : '2,170'}</div>
                    </div>
                    <div className="funnel-arrow">&rarr;</div>
                    <div className="funnel-step">
                      <div className="funnel-step-name">2. CONTACTED</div>
                      <div className="funnel-step-count">{heroCampus === 'CAMPUS_01' ? '1,980' : '1,660'}</div>
                    </div>
                    <div className="funnel-arrow">&rarr;</div>
                    <div className="funnel-step">
                      <div className="funnel-step-name">3. IN_REVIEW</div>
                      <div className="funnel-step-count">{heroCampus === 'CAMPUS_01' ? '820' : '630'}</div>
                    </div>
                    <div className="funnel-arrow">&rarr;</div>
                    <div className="funnel-step" style={{ borderColor: 'rgba(56, 189, 248, 0.4)', background: 'rgba(56, 189, 248, 0.12)' }}>
                      <div className="funnel-step-name" style={{ color: '#38bdf8' }}>4. ADMITTED</div>
                      <div className="funnel-step-count" style={{ color: '#ffffff' }}>{heroCampus === 'CAMPUS_01' ? '470' : '350'}</div>
                    </div>
                    <div className="funnel-arrow">&rarr;</div>
                    <div className="funnel-step" style={{ opacity: 0.7 }}>
                      <div className="funnel-step-name" style={{ color: '#f87171' }}>5. REJECTED</div>
                      <div className="funnel-step-count" style={{ color: '#f87171' }}>{heroCampus === 'CAMPUS_01' ? '230' : '180'}</div>
                    </div>
                  </div>
                </div>

                {/* Recent Leads Table */}
                <div className="leads-table-container">
                  <div className="widget-title">
                    <span>Recent Applicant Dossiers ({heroCampus === 'CAMPUS_01' ? 'Campus 01 (Main)' : 'Campus 02 (City)'})</span>
                    <a href="#lead-management" className="btn-link-action" style={{ fontSize: '0.78rem' }}>View 3-Sheet Entry Form &rarr;</a>
                  </div>
                  <div className="table-responsive">
                    <table className="leads-table">
                      <thead>
                        <tr>
                          <th>Student Info (+91-)</th>
                          <th>Course &amp; Campus</th>
                          <th>Attribution Source</th>
                          <th>Cutoff</th>
                          <th>Assigned Faculty Lead</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="student-cell">
                              <div className="avatar-initial">SV</div>
                              <div>
                                <div className="student-info-name">S. Vignesh</div>
                                <div className="student-info-meta">+91-9876543210 &bull; Central District</div>
                              </div>
                            </div>
                          </td>
                          <td>Artificial Intelligence &amp; DS</td>
                          <td><span className="badge-source">Meta Ads</span></td>
                          <td><span className="badge-status status-applied" style={{ fontFamily: 'var(--font-mono)' }}>194.50 / 200</span></td>
                          <td><span style={{ fontWeight: 600 }}>Dr. K. Arulmurugan</span> <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>HOD CSE (#1–#100)</div></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="student-cell">
                              <div className="avatar-initial" style={{ background: 'linear-gradient(135deg, #0284c7, #2563eb)' }}>KP</div>
                              <div>
                                <div className="student-info-name">K. Priyanka</div>
                                <div className="student-info-meta">+91-9443322110 &bull; Western District</div>
                              </div>
                            </div>
                          </td>
                          <td>Computer Science &amp; Engg</td>
                          <td><span className="badge-source">WhatsApp Campaign</span></td>
                          <td><span className="badge-status status-counselling" style={{ fontFamily: 'var(--font-mono)' }}>196.00 / 200</span></td>
                          <td><span style={{ fontWeight: 600 }}>Dr. Meenakshi</span> <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>HOD ECE (Campus 02)</div></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="student-cell">
                              <div className="avatar-initial" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>MN</div>
                              <div>
                                <div className="student-info-name">M. Naveen</div>
                                <div className="student-info-meta">+91-9442211009 &bull; Tiruchirappalli</div>
                              </div>
                            </div>
                          </td>
                          <td>Electronics &amp; Comm (ECE)</td>
                          <td><span className="badge-source">Google Search</span></td>
                          <td><span className="badge-status status-qualified" style={{ fontFamily: 'var(--font-mono)' }}>188.50 / 200</span></td>
                          <td><span style={{ fontWeight: 600 }}>P. Rajesh</span> <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>HOD Mech (#101–#200)</div></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="student-cell">
                              <div className="avatar-initial" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>RD</div>
                              <div>
                                <div className="student-info-name">R. Dhivya</div>
                                <div className="student-info-meta">+91-9443311223 &bull; Namakkal District</div>
                              </div>
                            </div>
                          </td>
                          <td>Information Technology (IT)</td>
                          <td><span className="badge-source">School Science Expo</span></td>
                          <td><span className="badge-status status-enquiry" style={{ fontFamily: 'var(--font-mono)' }}>192.00 / 200</span></td>
                          <td><span style={{ fontWeight: 600 }}>Dr. Gayathri</span> <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>HOD IT (#301–#400)</div></td>
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
                    <span>Marketing Attribution</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Omnichannel</span>
                  </div>
                  
                  <div className="source-item">
                    <div className="source-label-row">
                      <span>Meta Ads (Instagram / FB)</span>
                      <span>32%</span>
                    </div>
                    <div className="source-progress-bg"><div className="source-progress-bar" style={{ width: '32%', background: 'linear-gradient(90deg, #38bdf8, #818cf8)' }}></div></div>
                  </div>

                  <div className="source-item">
                    <div className="source-label-row">
                      <span>Google Search &amp; YouTube</span>
                      <span>28%</span>
                    </div>
                    <div className="source-progress-bg"><div className="source-progress-bar" style={{ width: '28%', background: 'linear-gradient(90deg, #00f0ff, #38bdf8)' }}></div></div>
                  </div>

                  <div className="source-item">
                    <div className="source-label-row">
                      <span>WhatsApp Campaigns</span>
                      <span>18%</span>
                    </div>
                    <div className="source-progress-bg"><div className="source-progress-bar" style={{ width: '18%', background: 'linear-gradient(90deg, #25d366, #10b981)' }}></div></div>
                  </div>

                  <div className="source-item">
                    <div className="source-label-row">
                      <span>School Expos &amp; Melas</span>
                      <span>14%</span>
                    </div>
                    <div className="source-progress-bg"><div className="source-progress-bar" style={{ width: '14%', background: 'linear-gradient(90deg, #f59e0b, #ef4444)' }}></div></div>
                  </div>

                  <div className="source-item">
                    <div className="source-label-row">
                      <span>Walk-ins &amp; TNEA Counselling</span>
                      <span>8%</span>
                    </div>
                    <div className="source-progress-bg"><div className="source-progress-bar" style={{ width: '8%', background: 'rgba(255, 255, 255, 0.4)' }}></div></div>
                  </div>
                </div>

                {/* Scheduled Follow-ups */}
                <div className="sidebar-widget">
                  <div className="widget-title">
                    <span>Counseling Schedule</span>
                    <span style={{ fontSize: '0.72rem', color: '#a1a1aa' }}>Today</span>
                  </div>

                  <div className="followup-item">
                    <div className="followup-icon icon-call">&#9742;</div>
                    <div className="followup-content">
                      <div className="followup-title">TNEA Cutoff Review &bull; S. Vignesh</div>
                      <div className="followup-time">10:30 AM &bull; Dr. Arulmurugan (CSE)</div>
                    </div>
                  </div>

                  <div className="followup-item">
                    <div className="followup-icon icon-whatsapp">&#9993;</div>
                    <div className="followup-content">
                      <div className="followup-title">Provisional Offer &bull; K. Priyanka</div>
                      <div className="followup-time">11:15 AM &bull; Automated WhatsApp</div>
                    </div>
                  </div>

                  <div className="followup-item">
                    <div className="followup-icon icon-doc">&#9776;</div>
                    <div className="followup-content">
                      <div className="followup-title">Marksheet OCR Review &bull; Nora AI</div>
                      <div className="followup-time">02:00 PM &bull; Registrar Desk</div>
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
