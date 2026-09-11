import React, { useState } from 'react';

const campusData = {
  A: [
    { name: 'Computer Science (CSE)', stats: 'Enquiries: 1,840 • Admissions: 310' },
    { name: 'Information Tech (IT)', stats: 'Enquiries: 980 • Admissions: 180' },
    { name: 'Electronics (ECE)', stats: 'Enquiries: 850 • Admissions: 140' },
    { name: 'Mechanical Engg (MECH)', stats: 'Enquiries: 620 • Admissions: 90' }
  ],
  B: [
    { name: 'Artificial Intelligence & DS', stats: 'Enquiries: 1,420 • Admissions: 220' },
    { name: 'Cybersecurity & Networks', stats: 'Enquiries: 740 • Admissions: 110' },
    { name: 'Robotics & Automation', stats: 'Enquiries: 580 • Admissions: 85' },
    { name: 'Electrical Engg (EEE)', stats: 'Enquiries: 460 • Admissions: 75' }
  ],
  C: [
    { name: 'Biomedical Engineering', stats: 'Enquiries: 690 • Admissions: 105' },
    { name: 'Pharmaceutical Sciences', stats: 'Enquiries: 540 • Admissions: 95' },
    { name: 'Health Informatics', stats: 'Enquiries: 420 • Admissions: 70' },
    { name: 'Biotechnology', stats: 'Enquiries: 380 • Admissions: 60' }
  ]
};

export default function MultiCampus() {
  const [activeCampus, setActiveCampus] = useState('A');
  const departments = campusData[activeCampus] || [];

  return (
    <section className="section" id="multi-campus">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            INSTITUTIONAL SCALE
          </div>
          <h2>One Admission System. Every Campus. Every Department.</h2>
          <p>
            Give leadership a centralized view while allowing teams to manage their own students, departments and workflows.
          </p>
        </div>

        <div className="campus-hierarchy-box">
          {/* Interactive Campus Tabs */}
          <div className="campus-tabs">
            <button 
              className={`campus-tab-btn ${activeCampus === 'A' ? 'active' : ''}`}
              onClick={() => setActiveCampus('A')}
            >
              Campus A (Main City)
            </button>
            <button 
              className={`campus-tab-btn ${activeCampus === 'B' ? 'active' : ''}`}
              onClick={() => setActiveCampus('B')}
            >
              Campus B (Tech Park)
            </button>
            <button 
              className={`campus-tab-btn ${activeCampus === 'C' ? 'active' : ''}`}
              onClick={() => setActiveCampus('C')}
            >
              Campus C (Health &amp; Sciences)
            </button>
          </div>

          <div className="department-nodes-grid">
            {departments.map((dept, idx) => (
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
