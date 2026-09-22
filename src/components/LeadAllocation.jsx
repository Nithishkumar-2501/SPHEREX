import React from 'react';
import styled from 'styled-components';

const teachers = [
  {
    id: 'arulmurugan.cse@spherex.edu',
    name: 'Dr. K. Arulmurugan',
    role: 'HOD & Professor',
    dept: 'Computer Science & Engineering',
    campus: 'Main Campus (Campus 01)',
    phone: '+91-9443322111',
    quota: 250,
    assigned: 100,
    range: 'Contacts #1 to #100',
    status: 'ACTIVE'
  },
  {
    id: 'rajesh.mech@spherex.edu',
    name: 'P. Rajesh',
    role: 'HOD & Assoc. Professor',
    dept: 'Mechanical Engineering',
    campus: 'Main Campus (Campus 01)',
    phone: '+91-9443322112',
    quota: 200,
    assigned: 100,
    range: 'Contacts #101 to #200',
    status: 'ACTIVE'
  },
  {
    id: 'meenakshi.ece@spherex.edu',
    name: 'Dr. Meenakshi',
    role: 'HOD & Professor',
    dept: 'Electronics & Communication',
    campus: 'City Campus (Campus 02)',
    phone: '+91-9443322113',
    quota: 250,
    assigned: 100,
    range: 'Contacts #201 to #300',
    status: 'ACTIVE'
  },
  {
    id: 'gayathri.it@spherex.edu',
    name: 'Dr. Gayathri',
    role: 'HOD & Professor',
    dept: 'Information Technology',
    campus: 'Main Campus (Campus 01)',
    phone: '+91-9443322114',
    quota: 200,
    assigned: 100,
    range: 'Contacts #301 to #400',
    status: 'ACTIVE'
  }
];

export default function LeadAllocation({ onOpenBooking }) {
  return (
    <section className="section" id="lead-assignment">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            MODULE 4 &bull; FACULTY QUOTA &amp; BATCH PARTITIONING
          </div>
          <h2>Teacher Directory &amp; Dynamic Lead Splitting Options</h2>
          <p>
            Automatically partition incoming applicant inquiries and assign batches to 16+ department heads and professors with custom quotas, visual range badges (e.g. #1 to #100), and dual-cloud sync.
          </p>
        </div>

        {/* Workflow Showcase Box */}
        <div className="glass-card" style={{ padding: '28px', marginBottom: '32px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
          <div style={{ marginBottom: '16px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase' }}>
                Batch Splitting Architecture
              </span>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: '4px 0 0 0' }}>How Administrators Split Leads in SPHEREX</h3>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
              <strong style={{ color: 'var(--primary-light)', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>1. Batch Ranges</strong>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Assign contact ranges (e.g. #1–#100, #101–#200) so faculty counselors never overlap.</p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
              <strong style={{ color: '#34d399', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>2. Quota Balancer</strong>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Set maximum lead limits (100–1,000) per professor to prevent counseling burnout.</p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
              <strong style={{ color: '#c084fc', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>3. Dual-Cloud Live</strong>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Allocated leads sync immediately to faculty smartphones via Firebase Firestore.</p>
            </div>
          </div>
        </div>

        {/* 4 Featured Faculty Cards Grid with Uiverse Glow & Drawer UI */}
        <StyledFacultyWrapper>
          <div className="faculty-grid">
            {teachers.map((teacher) => {
              const percent = Math.min(100, Math.round((teacher.assigned / teacher.quota) * 100));
              const initials = teacher.name.split(' ').map(n => n[0]).join('').slice(0, 2);

              return (
                <div className="card" key={teacher.id}>
                  <b />

                  <div className="card-content-wrap">
                    {/* Top Identity: Avatar, Name, Role */}
                    <div className="card-top-section">
                      <div className="avatar-wrap">
                        <div className="avatar-circle">{initials}</div>
                        <span className="status-badge">{teacher.status}</span>
                      </div>
                      <h4 className="faculty-name">{teacher.name}</h4>
                      <span className="faculty-role">{teacher.role}</span>
                      <span className="faculty-dept">{teacher.dept}</span>
                    </div>

                    {/* Resting state cue */}
                    <div className="card-hint">
                      <span>Hover for quota &amp; actions &darr;</span>
                    </div>

                    {/* Expanded Detail Drawer on Hover - Zero Collisions */}
                    <div className="card-reveal-section">
                      <div className="meta-info">
                        <span>{teacher.campus}</span>
                        <span className="phone-num">{teacher.phone}</span>
                      </div>

                      <div className="range-row">
                        <span className="badge-range-tag">🎯 {teacher.range}</span>
                        <span className="quota-text">{teacher.assigned}/{teacher.quota} ({percent}%)</span>
                      </div>

                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${percent}%` }} />
                      </div>

                      {/* Social/Communication Action Links (Uiverse .sci style) */}
                      <ul className="sci">
                        <li>
                          <a href={`tel:${teacher.phone}`} title="Direct Call">
                            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={`mailto:${teacher.id}`} title="Send Email">
                            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={`https://wa.me/91${teacher.phone.replace(/[^0-9]/g, '').slice(-10)}`} target="_blank" rel="noopener noreferrer" title="WhatsApp">
                            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.721.446 3.338 1.229 4.743L2.25 21.75l5.228-1.199A9.704 9.704 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-3.53 5.47a.75.75 0 0 0-1.06 1.06L9.44 10.81a.75.75 0 0 0 .53.22h4.06a.75.75 0 0 0 .53-.22l2.03-2.03a.75.75 0 0 0-1.06-1.06l-1.75 1.75H10.22L8.47 7.72Z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </StyledFacultyWrapper>
      </div>
    </section>
  );
}

const StyledFacultyWrapper = styled.div`
  .faculty-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .card {
    position: relative;
    width: 100%;
    min-height: 350px;
    background: #000;
    display: flex;
    align-items: stretch;
    justify-content: center;
    border-radius: 16px;
    cursor: pointer;
    overflow: visible;
    transition: transform 0.4s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  /* Radiant dual-tone neon gradient frame */
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: linear-gradient(315deg, #03a9f4, #ff0058);
  }

  /* Blooming ambient neon blur layer */
  .card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: linear-gradient(315deg, #03a9f4, #ff0058);
    filter: blur(28px);
    opacity: 0.28;
    transition: filter 0.5s ease, opacity 0.5s ease;
    z-index: 0;
  }

  .card:hover::after {
    filter: blur(36px);
    opacity: 0.88;
  }

  /* Solid dark frosted inner plate for high text contrast */
  .card b {
    position: absolute;
    inset: 4px;
    background: rgba(7, 12, 28, 0.95);
    border-radius: 12px;
    z-index: 2;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  .card-content-wrap {
    position: relative;
    z-index: 3;
    width: 100%;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
  }

  .card-top-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto 0;
    width: 100%;
    transition: all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card-top-section {
    margin-top: 0;
    margin-bottom: 8px;
    transform: translateY(-2px);
  }

  .avatar-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 12px;
    position: relative;
  }

  .avatar-circle {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: linear-gradient(135deg, #03a9f4 0%, #ff0058 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.15rem;
    color: #fff;
    box-shadow: 0 4px 18px rgba(3, 169, 244, 0.35);
    transition: transform 0.4s ease;
  }

  .card:hover .avatar-circle {
    transform: scale(0.92);
  }

  .status-badge {
    font-size: 0.68rem;
    font-weight: 700;
    font-family: var(--font-mono);
    background: rgba(52, 211, 153, 0.16);
    color: #34d399;
    padding: 2px 8px;
    border-radius: 99rem;
    border: 1px solid rgba(52, 211, 153, 0.35);
  }

  .faculty-name {
    font-size: 1.15rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 4px;
    letter-spacing: -0.01em;
  }

  .faculty-role {
    font-size: 0.76rem;
    color: var(--primary-light);
    font-family: var(--font-mono);
    margin-bottom: 4px;
  }

  .faculty-dept {
    font-size: 0.82rem;
    color: var(--text-muted);
    font-weight: 500;
  }

  .card-hint {
    margin-top: 14px;
    font-size: 0.72rem;
    color: #64748b;
    font-family: var(--font-mono);
    opacity: 0.85;
    transition: opacity 0.3s ease, max-height 0.3s ease, margin 0.3s ease;
    max-height: 24px;
    overflow: hidden;
  }

  .card:hover .card-hint {
    max-height: 0;
    opacity: 0;
    margin-top: 0;
  }

  /* Reveal Section: Expands naturally below identity with ZERO collision */
  .card-reveal-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 0;
    opacity: 0;
    transform: translateY(12px);
    overflow: hidden;
    pointer-events: none;
    transition: max-height 0.45s ease, opacity 0.35s ease, transform 0.4s ease;
  }

  .card:hover .card-reveal-section {
    max-height: 240px;
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    overflow: visible;
  }

  .meta-info {
    font-size: 0.76rem;
    color: var(--text-secondary);
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-bottom: 10px;
  }

  .phone-num {
    font-family: var(--font-mono);
    color: var(--primary-light);
    font-weight: 600;
  }

  .range-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }

  .badge-range-tag {
    font-size: 0.72rem;
    font-family: var(--font-mono);
    font-weight: 700;
    padding: 3px 8px;
    background: rgba(3, 169, 244, 0.12);
    border: 1px solid rgba(3, 169, 244, 0.35);
    border-radius: 6px;
    color: #38bdf8;
  }

  .quota-text {
    font-size: 0.74rem;
    color: var(--text-muted);
    font-family: var(--font-mono);
  }

  .progress-track {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 99rem;
    overflow: hidden;
    margin-bottom: 14px;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #03a9f4, #ff0058);
    border-radius: 99rem;
  }

  /* Social/Action icons (.sci) from Uiverse prompt */
  .sci {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .sci li a {
    position: relative;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.85);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.15);
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .sci li a:hover {
    color: #fff;
    background: linear-gradient(135deg, #03a9f4, #ff0058);
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 0, 88, 0.4);
  }
`;
