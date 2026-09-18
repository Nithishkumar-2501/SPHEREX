import React, { useState } from 'react';

const campuses = {
  CAMPUS_01: {
    code: 'SPX-01',
    name: 'SPHEREX Campus 01 (Main Campus) — Engineering & Technology',
    location: 'Central Technology Hub, Tamil Nadu',
    intakeStats: 'Annual Enquiries: 18,400+ • Enrolment Capacity: 1,200+ • 12 Academic Departments',
    departments: [
      { name: 'Artificial Intelligence & Data Science (AI & DS)', stats: 'Enquiries: 3,420 • Intake: 180 • Cutoff: 190.5+' },
      { name: 'Computer Science & Engineering (CSE)', stats: 'Enquiries: 4,100 • Intake: 240 • Cutoff: 192.0+' },
      { name: 'Information Technology (IT)', stats: 'Enquiries: 2,150 • Intake: 120 • Cutoff: 186.0+' },
      { name: 'Electronics & Communication Engg (ECE)', stats: 'Enquiries: 2,400 • Intake: 180 • Cutoff: 184.5+' },
      { name: 'Electrical & Electronics Engg (EEE)', stats: 'Enquiries: 1,200 • Intake: 60 • Cutoff: 175.0+' },
      { name: 'Mechanical Engineering (MECH)', stats: 'Enquiries: 1,450 • Intake: 120 • Cutoff: 172.0+' },
      { name: 'Civil Engineering (CIVIL)', stats: 'Enquiries: 850 • Intake: 60 • Cutoff: 168.0+' },
      { name: 'Chemical Engineering', stats: 'Enquiries: 720 • Intake: 60 • Cutoff: 170.0+' }
    ]
  },
  CAMPUS_02: {
    code: 'SPX-02',
    name: 'SPHEREX Campus 02 (City Campus) — Computing & Applied Sciences',
    location: 'Innovation Tech Corridor, Tamil Nadu',
    intakeStats: 'Annual Enquiries: 14,800+ • Enrolment Capacity: 900+ • 8 Academic Departments',
    departments: [
      { name: 'Computer Science & Engineering (CSE)', stats: 'Enquiries: 3,800 • Intake: 180 • Cutoff: 191.0+' },
      { name: 'Artificial Intelligence & Data Science (AI & DS)', stats: 'Enquiries: 2,950 • Intake: 120 • Cutoff: 189.5+' },
      { name: 'Electronics & Communication Engg (ECE)', stats: 'Enquiries: 1,980 • Intake: 120 • Cutoff: 182.0+' },
      { name: 'Information Technology (IT)', stats: 'Enquiries: 1,820 • Intake: 120 • Cutoff: 184.0+' },
      { name: 'Biomedical Engineering (BME)', stats: 'Enquiries: 1,420 • Intake: 60 • Cutoff: 180.5+' },
      { name: 'Biotechnology (BIOTECH)', stats: 'Enquiries: 1,280 • Intake: 60 • Cutoff: 181.0+' },
      { name: 'Electrical & Electronics Engg (EEE)', stats: 'Enquiries: 950 • Intake: 60 • Cutoff: 174.0+' },
      { name: 'Mechanical Engineering (MECH)', stats: 'Enquiries: 820 • Intake: 60 • Cutoff: 170.0+' }
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

          {/* Department Nodes Grid */}
          <div className="department-nodes-grid" style={{ padding: '24px' }}>
            {campus.departments.map((dept, idx) => (
              <div className="dept-node" key={idx}>
                <div className="dept-name">{dept.name}</div>
                <div className="dept-stats">{dept.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
