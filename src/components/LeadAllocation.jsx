import React from 'react';

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

        {/* 4 Featured Faculty Cards Grid */}
        <div className="faculty-quota-grid">
          {teachers.map((teacher) => {
            const percent = Math.min(100, Math.round((teacher.assigned / teacher.quota) * 100));
            return (
              <div className="faculty-quota-card" key={teacher.id}>
                <div className="faculty-header-row">
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div className="faculty-avatar-circle">
                      {teacher.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <strong style={{ color: '#fff', fontSize: '0.98rem', display: 'block' }}>{teacher.name}</strong>
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>{teacher.role}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.68rem', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                    {teacher.status}
                  </span>
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--primary-light)', margin: '8px 0 4px 0', fontWeight: 600 }}>
                  {teacher.dept}
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  {teacher.campus} &bull; <span style={{ fontFamily: 'var(--font-mono)' }}>{teacher.phone}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span className="badge-range-tag">
                    🎯 {teacher.range}
                  </span>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {teacher.assigned} / {teacher.quota} leads ({percent}%)
                  </span>
                </div>

                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${percent}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
