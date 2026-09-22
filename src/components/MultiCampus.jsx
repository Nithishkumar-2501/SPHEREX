import React, { useState } from 'react';
import styled from 'styled-components';

const campuses = {
  CAMPUS_01: {
    code: 'SPX-01',
    name: 'SPHEREX Campus 01 (Main Campus) — Engineering & Technology',
    location: 'Central Technology Hub, Tamil Nadu',
    intakeStats: 'Annual Enquiries: 18,400+ • Enrolment Capacity: 1,200+ • 12 Academic Departments',
    departments: [
      { code: 'AI & DS', name: 'Artificial Intelligence & Data Science', enquiries: '3,420', intake: '180', cutoff: '190.5+' },
      { code: 'CSE', name: 'Computer Science & Engineering', enquiries: '4,100', intake: '240', cutoff: '192.0+' },
      { code: 'IT', name: 'Information Technology', enquiries: '2,150', intake: '120', cutoff: '186.0+' },
      { code: 'ECE', name: 'Electronics & Communication Engg', enquiries: '2,400', intake: '180', cutoff: '184.5+' },
      { code: 'EEE', name: 'Electrical & Electronics Engg', enquiries: '1,200', intake: '60', cutoff: '175.0+' },
      { code: 'MECH', name: 'Mechanical Engineering', enquiries: '1,450', intake: '120', cutoff: '172.0+' },
      { code: 'CIVIL', name: 'Civil Engineering', enquiries: '850', intake: '60', cutoff: '168.0+' },
      { code: 'CHEM', name: 'Chemical Engineering', enquiries: '720', intake: '60', cutoff: '170.0+' }
    ]
  },
  CAMPUS_02: {
    code: 'SPX-02',
    name: 'SPHEREX Campus 02 (City Campus) — Computing & Applied Sciences',
    location: 'Innovation Tech Corridor, Tamil Nadu',
    intakeStats: 'Annual Enquiries: 14,800+ • Enrolment Capacity: 900+ • 8 Academic Departments',
    departments: [
      { code: 'CSE', name: 'Computer Science & Engineering', enquiries: '3,800', intake: '180', cutoff: '191.0+' },
      { code: 'AI & DS', name: 'Artificial Intelligence & Data Science', enquiries: '2,950', intake: '120', cutoff: '189.5+' },
      { code: 'ECE', name: 'Electronics & Communication Engg', enquiries: '1,980', intake: '120', cutoff: '182.0+' },
      { code: 'IT', name: 'Information Technology', enquiries: '1,820', intake: '120', cutoff: '184.0+' },
      { code: 'BME', name: 'Biomedical Engineering', enquiries: '1,420', intake: '60', cutoff: '180.5+' },
      { code: 'BIOTECH', name: 'Biotechnology', enquiries: '1,280', intake: '60', cutoff: '181.0+' },
      { code: 'EEE', name: 'Electrical & Electronics Engg', enquiries: '950', intake: '60', cutoff: '174.0+' },
      { code: 'MECH', name: 'Mechanical Engineering', enquiries: '820', intake: '60', cutoff: '170.0+' }
    ]
  }
};

export default function MultiCampus() {
  const [activeCampus, setActiveCampus] = useState('CAMPUS_01');
  const campus = campuses[activeCampus];

  return (
    <section className="section" id="multi-campus">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            MULTI-CAMPUS INTELLIGENCE &bull; CENTRALIZED GOVERNANCE
          </div>
          <h2>One Admission Operating System. Multiple Independent Campuses.</h2>
          <p>
            SPHEREX provides centralized administrative governance for executive leadership while granting each campus independent faculty quotas, department pipelines, and fee tracking.
          </p>
        </div>

        <div className="campus-hierarchy-box">
          {/* Interactive Campus Selector Tabs */}
          <div className="campus-tabs">
            <button 
              type="button"
              className={`campus-tab-btn ${activeCampus === 'CAMPUS_01' ? 'active' : ''}`}
              onClick={() => setActiveCampus('CAMPUS_01')}
            >
              🏛️ Main Campus <span className="badge-tnea-code" style={{ marginLeft: '6px' }}>Campus 01</span>
            </button>
            <button 
              type="button"
              className={`campus-tab-btn ${activeCampus === 'CAMPUS_02' ? 'active' : ''}`}
              onClick={() => setActiveCampus('CAMPUS_02')}
            >
              🏛️ City Campus <span className="badge-tnea-code" style={{ marginLeft: '6px' }}>Campus 02</span>
            </button>
          </div>

          {/* Campus Header Card */}
          <div style={{ padding: '16px 20px', background: 'rgba(255, 255, 255, 0.02)', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '4px' }}>{campus.name}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📍 {campus.location}</p>
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)' }}>
              {campus.intakeStats}
            </div>
          </div>

          {/* Department Cards Grid with Uiverse Neon Gradient UI */}
          <StyledCampusWrapper>
            <div className="dept-grid">
              {campus.departments.map((dept, idx) => (
                <div className="card" key={idx}>
                  <b />
                  <div className="card-content-wrap">
                    {/* Top Section: Always clearly visible in resting state */}
                    <div className="card-top-section">
                      <div className="dept-badge-row">
                        <span className="dept-code-badge">{dept.code}</span>
                        <span className="dept-live-status">Active Pipeline</span>
                      </div>
                      <h4 className="dept-title">{dept.name}</h4>
                      <p className="dept-sub-metric">Enquiries: <strong style={{ color: '#fff' }}>{dept.enquiries}</strong></p>
                    </div>

                    {/* Subtle resting cue */}
                    <div className="card-hint">
                      <span>Hover for intake &amp; cutoff &darr;</span>
                    </div>

                    {/* Expanded Detail Reveal Section on Hover */}
                    <div className="card-reveal-section">
                      <div className="stat-pills">
                        <div className="stat-pill">
                          <span className="pill-label">Seat Intake</span>
                          <span className="pill-value">{dept.intake} seats</span>
                        </div>
                        <div className="stat-pill">
                          <span className="pill-label">TNEA Cutoff</span>
                          <span className="pill-value cutoff">{dept.cutoff}</span>
                        </div>
                      </div>

                      {/* Action Links */}
                      <ul className="sci">
                        <li>
                          <a href="#leads" title="View Department Enquiries">
                            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                              <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.633 13.067 13.067 0 0 1-6.761 1.87 13.067 13.067 0 0 1-6.76-1.87.75.75 0 0 1-.364-.633l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.66.75.75 0 0 0 .424-.672v-.002c0-2.67-1.92-4.88-4.496-5.328a6.388 6.388 0 0 1-.754 6.558Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#lead-assignment" title="Faculty Counselor Allocation">
                            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </StyledCampusWrapper>
        </div>
      </div>
    </section>
  );
}

const StyledCampusWrapper = styled.div`
  padding: 24px;

  .dept-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }

  .card {
    position: relative;
    width: 100%;
    height: 270px;
    background: #000;
    display: flex;
    align-items: stretch;
    justify-content: center;
    border-radius: 16px;
    cursor: pointer;
    overflow: hidden;
    transition: box-shadow 0.4s ease;
  }

  .card:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
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
    pointer-events: none;
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
    filter: blur(24px);
    opacity: 0.25;
    transition: filter 0.5s ease, opacity 0.5s ease;
    z-index: 0;
    pointer-events: none;
  }

  .card:hover::after {
    filter: blur(34px);
    opacity: 0.85;
  }

  /* Dark frosted inner plate for high text contrast */
  .card b {
    position: absolute;
    inset: 4px;
    background: rgba(7, 12, 28, 0.95);
    border-radius: 12px;
    z-index: 2;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    pointer-events: none;
  }

  .card-content-wrap {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-top-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    transition: all 0.4s ease;
    margin: auto 0;
  }

  .card:hover .card-top-section {
    margin: 0 0 10px 0;
  }

  .dept-badge-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .dept-code-badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 700;
    font-family: var(--font-mono);
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.15);
    border: 1px solid rgba(56, 189, 248, 0.3);
  }

  .dept-live-status {
    font-size: 0.68rem;
    color: #34d399;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
  }

  .dept-title {
    font-size: 0.98rem;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.35;
    margin: 0 0 6px 0;
  }

  .dept-sub-metric {
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .card-hint {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.45);
    transition: opacity 0.3s ease;
    margin-top: 4px;
  }

  .card:hover .card-hint {
    opacity: 0;
    height: 0;
    margin: 0;
    overflow: hidden;
  }

  /* Reveal section on hover - smooth height & opacity expansion */
  .card-reveal-section {
    display: flex;
    flex-direction: column;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transform: translateY(10px);
    transition: max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                opacity 0.4s ease,
                transform 0.4s ease;
  }

  .card:hover .card-reveal-section {
    max-height: 200px;
    opacity: 1;
    overflow: visible;
    transform: translateY(0);
    margin-top: 8px;
  }

  .stat-pills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 12px;
  }

  .stat-pill {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 6px 10px;
    display: flex;
    flex-direction: column;
  }

  .pill-label {
    font-size: 0.66rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .pill-value {
    font-size: 0.85rem;
    font-weight: 700;
    color: #ffffff;
    font-family: var(--font-mono);
  }

  .pill-value.cutoff {
    color: #f43f5e;
  }

  /* Social/Action links (Uiverse .sci styling) */
  .sci {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .sci li a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .sci li a:hover {
    color: #ffffff;
    background: linear-gradient(135deg, #03a9f4, #ff0058);
    border-color: transparent;
    transform: scale(1.1);
    box-shadow: 0 4px 14px rgba(255, 0, 88, 0.4);
  }
`;
