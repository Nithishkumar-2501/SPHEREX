import React, { useState, useEffect } from 'react';
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
  '142, 249, 252', // Electric Cyan
  '142, 252, 204', // Mint Emerald
  '142, 252, 157', // Lime Green
  '215, 252, 142', // Chartreuse
  '252, 252, 142', // Sun Yellow
  '252, 208, 142', // Amber Peach
  '252, 142, 142', // Coral Red
  '252, 142, 239', // Neon Pink
  '204, 142, 252', // Royal Purple
  '142, 202, 252'  // Sky Blue
];

export default function MultiCampus() {
  const [activeCampus, setActiveCampus] = useState('CAMPUS_01');
  const [viewMode, setViewMode] = useState('grid'); // Default straight grid view!
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const campus = campuses[activeCampus];

  // Auto-advance for carousel mode when not hovered
  useEffect(() => {
    if (viewMode !== 'carousel' || isPaused) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % campus.departments.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [viewMode, isPaused, campus.departments.length]);

  // Reset carousel index when campus changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [activeCampus]);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? campus.departments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % campus.departments.length);
  };

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
          {/* Top Controls: Campus Selector Tabs & View Switcher */}
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

            {/* View Switcher: Straight Grid vs Straight Carousel */}
            <div style={{ display: 'inline-flex', background: 'rgba(255, 255, 255, 0.05)', padding: '4px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
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
                <span>▦</span> Straight Grid View
              </button>
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
                <span>🎠</span> Spotlight Carousel
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

          {/* VIEW MODE 1: STRAIGHT CARDS GRID VIEW */}
          {viewMode === 'grid' && (
            <StyledStraightGridWrapper>
              <div className="dept-grid">
                {campus.departments.map((dept, idx) => {
                  const color = cardColors[idx % cardColors.length];
                  return (
                    <div 
                      className="dept-card" 
                      key={idx}
                      style={{ '--color-card': color }}
                    >
                      <div className="card-body">
                        {/* Top Badges */}
                        <div className="card-top-row">
                          <span 
                            className="dept-code-badge"
                            style={{ 
                              background: `rgba(${color}, 0.18)`, 
                              borderColor: `rgba(${color}, 0.6)`,
                              color: `rgb(${color})`
                            }}
                          >
                            {dept.code}
                          </span>
                          <span className="dept-live-status">
                            <span className="live-dot" style={{ background: `rgb(${color})`, boxShadow: `0 0 8px rgb(${color})` }} />
                            Active Pipeline
                          </span>
                        </div>

                        {/* Department Full Title */}
                        <h4 className="dept-title">{dept.name}</h4>

                        {/* Enquiries Metric */}
                        <div className="dept-enquiries-row">
                          <span className="enquiries-label">Enquiries:</span>
                          <strong className="enquiries-count" style={{ color: `rgb(${color})` }}>{dept.enquiries}</strong>
                        </div>

                        {/* Seat Intake & TNEA Cutoff Pill Boxes */}
                        <div className="dept-pills-grid">
                          <div className="stat-pill" style={{ borderColor: `rgba(${color}, 0.25)` }}>
                            <span className="pill-label">Seat Intake</span>
                            <span className="pill-value">{dept.intake} seats</span>
                          </div>
                          <div className="stat-pill" style={{ borderColor: `rgba(${color}, 0.25)` }}>
                            <span className="pill-label">TNEA Cutoff</span>
                            <span className="pill-value cutoff" style={{ color: `rgb(${color})` }}>{dept.cutoff}</span>
                          </div>
                        </div>

                        {/* Footer Row with Quick Actions */}
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
                          <span className="card-explore-tag">Explore Department &rarr;</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </StyledStraightGridWrapper>
          )}

          {/* VIEW MODE 2: STRAIGHT SPOTLIGHT CAROUSEL (CARDS FACE 100% FORWARD) */}
          {viewMode === 'carousel' && (
            <StyledStraightCarouselWrapper 
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Carousel Navigation Bar */}
              <div className="carousel-nav-bar">
                <button type="button" className="carousel-nav-btn prev" onClick={handlePrev} title="Previous Department">
                  &larr; Prev
                </button>
                <div className="carousel-chips">
                  {campus.departments.map((dept, idx) => {
                    const color = cardColors[idx % cardColors.length];
                    const isActive = idx === carouselIndex;
                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`chip-btn ${isActive ? 'active' : ''}`}
                        onClick={() => setCarouselIndex(idx)}
                        style={{
                          borderColor: isActive ? `rgb(${color})` : 'rgba(255, 255, 255, 0.1)',
                          background: isActive ? `rgba(${color}, 0.2)` : 'transparent',
                          color: isActive ? `rgb(${color})` : '#94a3b8'
                        }}
                      >
                        {dept.code}
                      </button>
                    );
                  })}
                </div>
                <button type="button" className="carousel-nav-btn next" onClick={handleNext} title="Next Department">
                  Next &rarr;
                </button>
              </div>

              {/* Straight 3-Card Stage: All cards face straight forward to user */}
              <div className="carousel-stage">
                {[-1, 0, 1].map((offset) => {
                  const idx = (carouselIndex + offset + campus.departments.length) % campus.departments.length;
                  const dept = campus.departments[idx];
                  const color = cardColors[idx % cardColors.length];
                  const isCenter = offset === 0;

                  return (
                    <div
                      key={`${idx}-${offset}`}
                      className={`straight-slide-card ${isCenter ? 'center-active' : 'flank-card'}`}
                      style={{
                        '--color-card': color,
                        cursor: isCenter ? 'default' : 'pointer'
                      }}
                      onClick={() => !isCenter && setCarouselIndex(idx)}
                    >
                      <div className="card-body">
                        <div className="card-top-row">
                          <span 
                            className="dept-code-badge"
                            style={{ 
                              background: `rgba(${color}, 0.18)`, 
                              borderColor: `rgba(${color}, 0.6)`,
                              color: `rgb(${color})`
                            }}
                          >
                            {dept.code}
                          </span>
                          <span className="dept-live-status">
                            <span className="live-dot" style={{ background: `rgb(${color})`, boxShadow: `0 0 8px rgb(${color})` }} />
                            Active Pipeline
                          </span>
                        </div>

                        <h4 className="dept-title">{dept.name}</h4>

                        <div className="dept-enquiries-row">
                          <span className="enquiries-label">Enquiries:</span>
                          <strong className="enquiries-count" style={{ color: `rgb(${color})` }}>{dept.enquiries}</strong>
                        </div>

                        <div className="dept-pills-grid">
                          <div className="stat-pill" style={{ borderColor: `rgba(${color}, 0.25)` }}>
                            <span className="pill-label">Seat Intake</span>
                            <span className="pill-value">{dept.intake} seats</span>
                          </div>
                          <div className="stat-pill" style={{ borderColor: `rgba(${color}, 0.25)` }}>
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
                          <span className="card-explore-tag">Explore Department &rarr;</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="carousel-caption-hint">
                <span>Showing Department {carouselIndex + 1} of {campus.departments.length} • Use buttons or click any card to slide</span>
              </div>
            </StyledStraightCarouselWrapper>
          )}

        </div>
      </div>
    </section>
  );
}

const StyledStraightGridWrapper = styled.div`
  padding: 24px 20px;

  .dept-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 22px;
  }

  .dept-card {
    position: relative;
    border: 2px solid rgba(var(--color-card), 0.75);
    border-radius: 16px;
    overflow: hidden;
    background: radial-gradient(
      circle at 50% 18%,
      rgba(var(--color-card), 0.24) 0%,
      rgba(15, 23, 42, 0.94) 68%,
      rgba(7, 12, 28, 0.98) 100%
    );
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35), 0 0 18px rgba(var(--color-card), 0.16);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }

  .dept-card:hover {
    transform: translateY(-6px);
    border-color: rgba(var(--color-card), 1);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 0 32px rgba(var(--color-card), 0.4);
  }

  .card-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
    text-align: left;
  }

  .card-top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }

  .dept-code-badge {
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 0.76rem;
    font-weight: 800;
    font-family: var(--font-mono);
    border: 1px solid;
  }

  .dept-live-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
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
    display: inline-block;
  }

  .dept-title {
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.35;
    margin: 8px 0 10px 0;
    min-height: 2.7em;
  }

  .dept-enquiries-row {
    font-size: 0.82rem;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 12px;
  }

  .enquiries-label {
    color: #94a3b8;
  }

  .enquiries-count {
    font-weight: 800;
    font-family: var(--font-mono);
    font-size: 0.95rem;
  }

  .dept-pills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 14px;
  }

  .stat-pill {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid;
    border-radius: 8px;
    padding: 6px 10px;
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
    font-size: 0.85rem;
    font-weight: 700;
    color: #ffffff;
    font-family: var(--font-mono);
  }

  .card-footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .sci {
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
    font-size: 0.74rem;
    color: #94a3b8;
    font-weight: 600;
    transition: color 0.2s ease;
  }

  .dept-card:hover .card-explore-tag {
    color: #ffffff;
  }
`;

const StyledStraightCarouselWrapper = styled.div`
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .carousel-nav-bar {
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .carousel-nav-btn {
    padding: 8px 18px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.06);
    color: #ffffff;
    font-weight: 700;
    font-size: 0.84rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .carousel-nav-btn:hover {
    background: linear-gradient(135deg, #0284c7, #2563eb);
    border-color: transparent;
    transform: translateY(-1px);
  }

  .carousel-chips {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .chip-btn {
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.74rem;
    font-weight: 700;
    font-family: var(--font-mono);
    border: 1px solid;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .carousel-stage {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 1000px;
    min-height: 380px;
    perspective: 1200px;
  }

  /* All cards face 100% straight to the user */
  .straight-slide-card {
    width: 300px;
    min-height: 350px;
    border: 2px solid rgba(var(--color-card), 0.75);
    border-radius: 18px;
    overflow: hidden;
    background: radial-gradient(
      circle at 50% 18%,
      rgba(var(--color-card), 0.25) 0%,
      rgba(15, 23, 42, 0.94) 68%,
      rgba(7, 12, 28, 0.98) 100%
    );
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35), 0 0 18px rgba(var(--color-card), 0.16);
    backdrop-filter: blur(12px);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-sizing: border-box;
  }

  .straight-slide-card.center-active {
    transform: scale(1.06);
    z-index: 10;
    border-color: rgba(var(--color-card), 1);
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.5), 0 0 35px rgba(var(--color-card), 0.4);
    opacity: 1;
  }

  .straight-slide-card.flank-card {
    transform: scale(0.92);
    opacity: 0.65;
    z-index: 1;
  }

  .straight-slide-card.flank-card:hover {
    opacity: 0.9;
    transform: scale(0.96);
  }

  .card-body {
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
    text-align: left;
  }

  .card-top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }

  .dept-code-badge {
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.78rem;
    font-weight: 800;
    font-family: var(--font-mono);
    border: 1px solid;
  }

  .dept-live-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
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
    display: inline-block;
  }

  .dept-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.35;
    margin: 8px 0 10px 0;
    min-height: 2.7em;
  }

  .dept-enquiries-row {
    font-size: 0.84rem;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 12px;
  }

  .enquiries-label {
    color: #94a3b8;
  }

  .enquiries-count {
    font-weight: 800;
    font-family: var(--font-mono);
    font-size: 0.96rem;
  }

  .dept-pills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 14px;
  }

  .stat-pill {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid;
    border-radius: 8px;
    padding: 6px 10px;
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
    font-size: 0.85rem;
    font-weight: 700;
    color: #ffffff;
    font-family: var(--font-mono);
  }

  .card-footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .sci {
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
    width: 30px;
    height: 30px;
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
    font-size: 0.74rem;
    color: #94a3b8;
    font-weight: 600;
  }

  .carousel-caption-hint {
    margin-top: 18px;
    font-size: 0.78rem;
    color: #64748b;
  }

  @media (max-width: 880px) {
    .straight-slide-card.flank-card {
      display: none;
    }
    .straight-slide-card.center-active {
      width: 100%;
      max-width: 320px;
      transform: none;
    }
  }
`;
