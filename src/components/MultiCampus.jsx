import React, { useState } from 'react';
import styled from 'styled-components';
import StarButton from './StarButton';

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

const getDeptIcon = (code) => {
  switch (code) {
    case 'AI & DS':
      return (
        <svg viewBox="0 0 24 24" height="1em" width="1em" className="dept-icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2a9 9 0 0 0-9 9c0 3.87 2.45 7.17 5.9 8.44.15.53.48 1.56.5 2.06.02.5.4.5.4.5h4.4s.38 0 .4-.5c.02-.5.35-1.53.5-2.06C18.55 18.17 21 14.87 21 11a9 9 0 0 0-9-9zm-2 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-5a3 3 0 0 1-6 0c0-1.66 1.34-3 3-3s3 1.34 3 3z"/>
        </svg>
      );
    case 'CSE':
      return (
        <svg viewBox="0 0 640 512" height="1em" width="1em" className="dept-icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
        </svg>
      );
    case 'IT':
      return (
        <svg viewBox="0 0 24 24" height="1em" width="1em" className="dept-icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
        </svg>
      );
    case 'ECE':
      return (
        <svg viewBox="0 0 24 24" height="1em" width="1em" className="dept-icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4h12v2H6zm0 14h12v2H6zm14-8h2v4h-2zm-16 0H2v4h2zm2-4h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm2 2v8h8V8H8z"/>
        </svg>
      );
    case 'EEE':
      return (
        <svg viewBox="0 0 24 24" height="1em" width="1em" className="dept-icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .73.27.65.65-.55 1.15-3.08 6.13-6.15 10.35z"/>
        </svg>
      );
    case 'MECH':
      return (
        <svg viewBox="0 0 24 24" height="1em" width="1em" className="dept-icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
        </svg>
      );
    case 'CIVIL':
      return (
        <svg viewBox="0 0 24 24" height="1em" width="1em" className="dept-icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 4.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 11.38 9.5 10s1.12-2.5 2.5-2.5zM7 18v-5.81c1.24.81 2.75 1.31 4.38 1.31h1.24c1.63 0 3.14-.5 4.38-1.31V18H7z"/>
        </svg>
      );
    case 'CHEM':
      return (
        <svg viewBox="0 0 24 24" height="1em" width="1em" className="dept-icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8 18.4L14 10.67V6.5l1.3-1.3c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 4.67V3c0-.55-.45-1-1-1s-1 .45-1 1v1.67l-.89-.89c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10 6.5v4.17L4.2 18.4C3.27 19.64 4.16 21.4 5.71 21.4h12.58c1.55 0 2.44-1.76 1.51-3zM7.5 18l3.5-4.67V8h2v5.33L16.5 18h-9z"/>
        </svg>
      );
    case 'BME':
      return (
        <svg viewBox="0 0 24 24" height="1em" width="1em" className="dept-icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      );
    case 'BIOTECH':
      return (
        <svg viewBox="0 0 24 24" height="1em" width="1em" className="dept-icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-1-11h2v3h-2zm0 5h2v3h-2z"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" height="1em" width="1em" className="dept-icon-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13l-7-3.82V17l7 3.82L19 17v-4.82l-7 3.82z"/>
        </svg>
      );
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
          <div className="campus-tabs" style={{ display: 'flex', gap: '12px', padding: '12px 20px', flexWrap: 'wrap' }}>
            <StarButton 
              variant="tab"
              active={activeCampus === 'CAMPUS_01'}
              onClick={() => setActiveCampus('CAMPUS_01')}
            >
              🏛️ Main Campus <span className="badge-tnea-code" style={{ marginLeft: '6px' }}>Campus 01</span>
            </StarButton>
            <StarButton 
              variant="tab"
              active={activeCampus === 'CAMPUS_02'}
              onClick={() => setActiveCampus('CAMPUS_02')}
            >
              🏛️ City Campus <span className="badge-tnea-code" style={{ marginLeft: '6px' }}>Campus 02</span>
            </StarButton>
          </div>

          {/* Campus Header Card */}
          <div style={{ padding: '16px 20px', background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, marginBottom: '4px' }}>{campus.name}</h3>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>📍 {campus.location}</p>
            </div>
            <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              {campus.intakeStats}
            </div>
          </div>

          {/* Department Cards Grid with Glassmorphic UI */}
          <StyledCampusWrapper>
            <div className="dept-grid">
              {campus.departments.map((dept, idx) => (
                <div 
                  className="glass" 
                  key={idx}
                  data-text={`${dept.code} • TNEA CUTOFF: ${dept.cutoff}`}
                >
                  <div className="card-header-row">
                    <div className="dept-badge-row">
                      <span className="dept-code-badge">{dept.code}</span>
                      <span className="dept-live-status">
                        <span className="live-dot" /> Active Pipeline
                      </span>
                    </div>
                    <div className="dept-icon-box">
                      {getDeptIcon(dept.code)}
                    </div>
                  </div>

                  <div className="card-body-section">
                    <h4 className="dept-title">{dept.name}</h4>
                    <p className="dept-sub-metric">Enquiries: <strong>{dept.enquiries}</strong></p>

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
                  </div>

                  <div className="card-actions-row">
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
                    <span className="card-explore-hint">Explore Department &rarr;</span>
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
  padding: 24px 16px;

  .dept-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 22px;
  }

  .glass {
    position: relative;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 16px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    overflow: hidden;
    padding: 22px 22px 54px 22px;
    cursor: pointer;
  }

  .glass:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(56, 189, 248, 0.5);
    box-shadow: 0 30px 45px rgba(0, 0, 0, 0.35), 0 0 25px rgba(56, 189, 248, 0.2);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(56, 189, 248, 0.06) 100%);
  }

  .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 42px;
    background: rgba(255, 255, 255, 0.06);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    font-family: var(--font-mono);
    transition: all 0.3s ease;
  }

  .glass:hover::before {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.35), rgba(56, 189, 248, 0.35));
    color: #38bdf8;
    border-top-color: rgba(56, 189, 248, 0.35);
  }

  .card-header-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 14px;
  }

  .dept-badge-row {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .dept-code-badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 800;
    font-family: var(--font-mono);
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.15);
    border: 1px solid rgba(56, 189, 248, 0.35);
    width: fit-content;
  }

  .dept-live-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.68rem;
    color: #34d399;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 700;
  }

  .live-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #34d399;
    box-shadow: 0 0 8px #34d399;
    display: inline-block;
  }

  .dept-icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #38bdf8;
    flex-shrink: 0;
    transition: all 0.4s ease;
  }

  .glass:hover .dept-icon-box {
    background: rgba(56, 189, 248, 0.15);
    border-color: rgba(56, 189, 248, 0.4);
    transform: scale(1.08) rotate(3deg);
    box-shadow: 0 0 16px rgba(56, 189, 248, 0.3);
  }

  .dept-icon-svg {
    font-size: 2.2em;
    fill: currentColor;
  }

  .card-body-section {
    margin-bottom: 14px;
  }

  .dept-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.35;
    margin: 0 0 8px 0;
  }

  .dept-sub-metric {
    font-size: 0.82rem;
    color: #94a3b8;
    margin: 0 0 12px 0;
  }

  .dept-sub-metric strong {
    color: #ffffff;
    font-weight: 700;
  }

  .stat-pills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-top: 10px;
  }

  .stat-pill {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    transition: all 0.2s ease;
  }

  .glass:hover .stat-pill {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
  }

  .pill-label {
    font-size: 0.65rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
  }

  .pill-value {
    font-size: 0.88rem;
    font-weight: 700;
    color: #ffffff;
    font-family: var(--font-mono);
  }

  .pill-value.cutoff {
    color: #38bdf8;
  }

  .card-actions-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
  }

  .sci {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
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
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.12);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .sci li a:hover {
    color: #ffffff;
    background: linear-gradient(135deg, #0284c7, #2563eb);
    border-color: transparent;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
  }

  .card-explore-hint {
    font-size: 0.76rem;
    color: #64748b;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .glass:hover .card-explore-hint {
    color: #38bdf8;
    transform: translateX(3px);
  }
`;
