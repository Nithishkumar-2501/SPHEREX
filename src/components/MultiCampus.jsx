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

const cardColors = [
  '142, 249, 252',
  '142, 252, 204',
  '142, 252, 157',
  '215, 252, 142',
  '252, 252, 142',
  '252, 208, 142',
  '252, 142, 142',
  '252, 142, 239',
  '204, 142, 252',
  '142, 202, 252'
];

export default function MultiCampus() {
  const [activeCampus, setActiveCampus] = useState('CAMPUS_01');
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'
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
          {/* Top Controls: Campus Selector Tabs & View Mode Switcher */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', padding: '14px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="campus-tabs" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: 0, padding: 0 }}>
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

            {/* View Switcher: 3D Orbit Carousel vs Grid View */}
            <div style={{ display: 'inline-flex', background: 'rgba(255, 255, 255, 0.05)', padding: '4px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '7px',
                  border: 'none',
                  background: viewMode === 'carousel' ? 'linear-gradient(135deg, #0284c7, #2563eb)' : 'transparent',
                  color: viewMode === 'carousel' ? '#ffffff' : '#94a3b8',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>🎡</span> 3D Cylinder Orbit
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '7px',
                  border: 'none',
                  background: viewMode === 'grid' ? 'linear-gradient(135deg, #0284c7, #2563eb)' : 'transparent',
                  color: viewMode === 'grid' ? '#ffffff' : '#94a3b8',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>▦</span> Grid View
              </button>
            </div>
          </div>

          {/* Campus Header Card */}
          <div style={{ padding: '16px 20px', background: 'rgba(255, 255, 255, 0.02)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700, margin: '0 0 4px 0' }}>{campus.name}</h3>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>📍 {campus.location}</p>
            </div>
            <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              {campus.intakeStats}
            </div>
          </div>

          {/* 3D ROTATING CYLINDER CAROUSEL VIEW */}
          {viewMode === 'carousel' ? (
            <Styled3DWrapper>
              <div className="orbit-hint">
                <span>✨ 3D Orbit active • Hover mouse over any card to pause rotation</span>
              </div>
              <div className="wrapper">
                <div 
                  className="inner" 
                  style={{ 
                    '--quantity': campus.departments.length 
                  }}
                >
                  {campus.departments.map((dept, idx) => {
                    const color = cardColors[idx % cardColors.length];
                    return (
                      <div 
                        className="card" 
                        key={idx}
                        style={{ 
                          '--index': idx, 
                          '--color-card': color 
                        }}
                      >
                        <div className="card-body">
                          {/* Top Badges */}
                          <div className="dept-badge-row">
                            <span 
                              className="dept-code-badge"
                              style={{ 
                                background: `rgba(${color}, 0.2)`, 
                                borderColor: `rgba(${color}, 0.6)`,
                                color: `rgb(${color})`
                              }}
                            >
                              {dept.code}
                            </span>
                            <span className="dept-live-status">
                              <span className="live-dot" /> Active Pipeline
                            </span>
                          </div>

                          {/* Department Title */}
                          <h4 className="dept-title">{dept.name}</h4>

                          {/* Enquiries Metric */}
                          <div className="enquiries-row">
                            <span className="metric-label">Enquiries:</span>
                            <strong className="metric-val" style={{ color: `rgb(${color})` }}>{dept.enquiries}</strong>
                          </div>

                          {/* Seat Intake & Cutoff Pill Cards */}
                          <div className="stat-pills">
                            <div className="stat-pill" style={{ borderColor: `rgba(${color}, 0.25)` }}>
                              <span className="pill-label">Seat Intake</span>
                              <span className="pill-value">{dept.intake} seats</span>
                            </div>
                            <div className="stat-pill" style={{ borderColor: `rgba(${color}, 0.25)` }}>
                              <span className="pill-label">TNEA Cutoff</span>
                              <span className="pill-value cutoff" style={{ color: `rgb(${color})` }}>{dept.cutoff}</span>
                            </div>
                          </div>

                          {/* Quick Action Buttons */}
                          <div className="card-footer-row">
                            <ul className="sci">
                              <li>
                                <a href="#leads" title="View Department Enquiries">
                                  <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.633 13.067 13.067 0 0 1-6.761 1.87 13.067 13.067 0 0 1-6.76-1.87.75.75 0 0 1-.364-.633l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.66.75.75 0 0 0 .424-.672v-.002c0-2.67-1.92-4.88-4.496-5.328a6.388 6.388 0 0 1-.754 6.558Z" />
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a href="#lead-assignment" title="Faculty Counselor Allocation">
                                  <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                  </svg>
                                </a>
                              </li>
                            </ul>
                            <span className="card-explore-tag">Explore &rarr;</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Styled3DWrapper>
          ) : (
            /* FLAT GRID VIEW WITH MATCHING COLOR PALETTES */
            <StyledGridWrapper>
              <div className="dept-grid">
                {campus.departments.map((dept, idx) => {
                  const color = cardColors[idx % cardColors.length];
                  return (
                    <div 
                      className="grid-card" 
                      key={idx}
                      style={{ '--color-card': color }}
                    >
                      <div className="card-body">
                        <div className="dept-badge-row">
                          <span 
                            className="dept-code-badge"
                            style={{ 
                              background: `rgba(${color}, 0.2)`, 
                              borderColor: `rgba(${color}, 0.6)`,
                              color: `rgb(${color})`
                            }}
                          >
                            {dept.code}
                          </span>
                          <span className="dept-live-status">
                            <span className="live-dot" /> Active Pipeline
                          </span>
                        </div>

                        <h4 className="dept-title">{dept.name}</h4>

                        <div className="enquiries-row">
                          <span className="metric-label">Enquiries:</span>
                          <strong className="metric-val" style={{ color: `rgb(${color})` }}>{dept.enquiries}</strong>
                        </div>

                        <div className="stat-pills">
                          <div className="stat-pill">
                            <span className="pill-label">Seat Intake</span>
                            <span className="pill-value">{dept.intake} seats</span>
                          </div>
                          <div className="stat-pill">
                            <span className="pill-label">TNEA Cutoff</span>
                            <span className="pill-value cutoff" style={{ color: `rgb(${color})` }}>{dept.cutoff}</span>
                          </div>
                        </div>

                        <div className="card-footer-row">
                          <ul className="sci">
                            <li>
                              <a href="#leads" title="View Department Enquiries">
                                <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.633 13.067 13.067 0 0 1-6.761 1.87 13.067 13.067 0 0 1-6.76-1.87.75.75 0 0 1-.364-.633l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.66.75.75 0 0 0 .424-.672v-.002c0-2.67-1.92-4.88-4.496-5.328a6.388 6.388 0 0 1-.754 6.558Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#lead-assignment" title="Faculty Counselor Allocation">
                                <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
                                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                          <span className="card-explore-tag">Explore &rarr;</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </StyledGridWrapper>
          )}

        </div>
      </div>
    </section>
  );
}

const Styled3DWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 640px;
  overflow: hidden;
  padding: 10px 0 20px 0;

  .orbit-hint {
    text-align: center;
    padding-top: 14px;
    font-size: 0.8rem;
    color: #94a3b8;
    position: relative;
    z-index: 10;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .inner {
    --w: 240px;
    --h: 330px;
    --translateZ: 440px;
    --rotateX: -4deg;
    --perspective: 1400px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 13%;
    left: calc(50% - (var(--w) / 2));
    z-index: 2;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 32s linear infinite;
  }

  /* Hover pauses the orbit so cards can be interacted with */
  .wrapper:hover .inner {
    animation-play-state: paused;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 2px solid rgba(var(--color-card), 0.85);
    border-radius: 16px;
    overflow: hidden;
    inset: 0;
    width: var(--w);
    height: var(--h);
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    background: linear-gradient(180deg, #111827 0%, #0f172a 60%, #080d1a 100%);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;
  }

  .card:hover {
    border-color: rgba(var(--color-card), 1);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.55);
  }

  .card-body {
    width: 100%;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
  }

  .dept-badge-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .dept-code-badge {
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 0.74rem;
    font-weight: 800;
    font-family: var(--font-mono);
    border: 1px solid;
  }

  .dept-live-status {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.65rem;
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

  .dept-title {
    font-size: 0.94rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.32;
    margin: 6px 0 4px 0;
  }

  .enquiries-row {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
  }

  .metric-label {
    color: #94a3b8;
  }

  .metric-val {
    font-weight: 800;
    font-family: var(--font-mono);
  }

  .stat-pills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    margin-bottom: 8px;
  }

  .stat-pill {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 5px 8px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .pill-label {
    font-size: 0.62rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
  }

  .pill-value {
    font-size: 0.82rem;
    font-weight: 700;
    color: #ffffff;
    font-family: var(--font-mono);
  }

  .card-footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 6px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .sci {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .sci li a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.12);
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .sci li a:hover {
    color: #ffffff;
    background: linear-gradient(135deg, #0284c7, #2563eb);
    transform: scale(1.1);
  }

  .card-explore-tag {
    font-size: 0.72rem;
    color: #94a3b8;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    height: 520px;

    .inner {
      --w: 200px;
      --h: 300px;
      --translateZ: 310px;
      --rotateX: -2deg;
      --perspective: 1000px;
      top: 10%;
    }

    .dept-title {
      font-size: 0.86rem;
    }
  }
`;

const StyledGridWrapper = styled.div`
  padding: 24px 16px;

  .dept-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }

  .grid-card {
    position: relative;
    border: 2px solid rgba(var(--color-card), 0.7);
    border-radius: 16px;
    overflow: hidden;
    background: linear-gradient(180deg, #111827 0%, #0f172a 60%, #080d1a 100%);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .grid-card:hover {
    transform: translateY(-5px);
    border-color: rgba(var(--color-card), 1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45);
  }

  .card-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
  }

  .dept-badge-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .dept-code-badge {
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 0.74rem;
    font-weight: 800;
    font-family: var(--font-mono);
    border: 1px solid;
  }

  .dept-live-status {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.65rem;
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

  .dept-title {
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.35;
    margin: 8px 0;
  }

  .enquiries-row {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 10px;
  }

  .metric-label {
    color: #94a3b8;
  }

  .metric-val {
    font-weight: 800;
    font-family: var(--font-mono);
  }

  .stat-pills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 12px;
  }

  .stat-pill {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 6px 8px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .pill-label {
    font-size: 0.62rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
  }

  .pill-value {
    font-size: 0.82rem;
    font-weight: 700;
    color: #ffffff;
    font-family: var(--font-mono);
  }

  .card-footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .sci {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .sci li a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.12);
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .sci li a:hover {
    color: #ffffff;
    background: linear-gradient(135deg, #0284c7, #2563eb);
    transform: scale(1.1);
  }

  .card-explore-tag {
    font-size: 0.72rem;
    color: #94a3b8;
    font-weight: 600;
  }
`;
