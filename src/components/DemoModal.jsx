import React, { useState, useEffect } from 'react';

const rbacRoles = [
  { role: 'Campus 01 System Admin', user: 'admincampus01@123', pass: 'spherex@123', campus: 'Campus 01 (Main)', scope: 'Master admin control, lead splitting, quotas' },
  { role: 'Campus 02 System Admin', user: 'admincampus02@123', pass: 'spherex@1213', campus: 'Campus 02 (City)', scope: 'Campus 02 admin, faculty allocations' },
  { role: 'Faculty Lead (Dr. Arulmurugan)', user: 'arulmurugan.cse@spherex.edu', pass: 'arul@spx2026', campus: 'Campus 01', scope: 'HOD CSE; counseling & cutoff evaluations' },
  { role: 'Faculty Lead (P. Rajesh)', user: 'rajesh.mech@spherex.edu', pass: 'rajesh@spx2026', campus: 'Campus 01', scope: 'HOD Mechanical; manages contact batches' },
  { role: 'Faculty Lead (Dr. Meenakshi)', user: 'meenakshi.ece@spherex.edu', pass: 'meenakshi@spx2026', campus: 'Campus 02', scope: 'HOD ECE; admissions & counseling' },
  { role: 'Faculty Lead (Dr. Gayathri)', user: 'gayathri.it@spherex.edu', pass: 'gayathri@spx2026', campus: 'Campus 01', scope: 'HOD IT; candidate conversion monitoring' },
  { role: 'General Counselor (Campus 01)', user: 'counselor01@123', pass: 'spherex@c123', campus: 'Campus 01', scope: 'Counselor access to student directories' },
  { role: 'General Counselor (Campus 02)', user: 'counselor02@123', pass: 'spherex@c1213', campus: 'Campus 02', scope: 'Counselor access to student directories' }
];

export default function DemoModal({ isOpen, onClose, onOpenBooking }) {
  const [modalTab, setModalTab] = useState('credentials'); // 'credentials' | 'consultation'
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Dr. K. Arulmurugan',
    department: 'Computer Science & Engineering',
    campus: 'SPHEREX Campus 01 (Main)',
    email: 'arulmurugan.cse@spherex.edu',
    phone: '+91 94433 22111'
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>

        <div className="section-eyebrow" style={{ marginBottom: '8px' }}>
          <span className="dot"></span>
          SPHEREX INSTITUTIONAL ACCESS CONSOLE
        </div>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>SPHEREX Institutional Admission Portals</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '18px' }}>
          Role-Based Access Control (RBAC) segregated by campus and administrative privilege.
        </p>

        {/* Switcher */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', background: 'rgba(255, 255, 255, 0.04)', padding: '4px', borderRadius: 'var(--radius-sm)' }}>
          <button
            type="button"
            className={`btn ${modalTab === 'credentials' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ flex: 1, padding: '8px 14px', fontSize: '0.82rem' }}
            onClick={() => setModalTab('credentials')}
          >
            🔑 Role Access &amp; Default Credentials (Section 4)
          </button>
          <button
            type="button"
            className={`btn ${modalTab === 'consultation' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ flex: 1, padding: '8px 14px', fontSize: '0.82rem' }}
            onClick={() => setModalTab('consultation')}
          >
            📋 Faculty / Counselor Onboarding Form
          </button>
        </div>

        {/* TAB 1: Credentials Matrix */}
        {modalTab === 'credentials' && (
          <div>
            <div className="table-responsive" style={{ maxHeight: '340px', overflowY: 'auto' }}>
              <table className="leads-table" style={{ fontSize: '0.82rem' }}>
                <thead>
                  <tr>
                    <th>Role &amp; Campus</th>
                    <th>User ID / Email</th>
                    <th>Default Password</th>
                    <th>Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {rbacRoles.map((r, i) => (
                    <tr key={i}>
                      <td>
                        <strong style={{ color: '#fff' }}>{r.role}</strong>
                        <div style={{ fontSize: '0.72rem', color: 'var(--primary-light)' }}>{r.campus}</div>
                      </td>
                      <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{r.user}</td>
                      <td style={{ fontFamily: 'var(--font-mono)', color: '#34d399' }}>{r.pass}</td>
                      <td style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{r.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                Target System: SPHEREX Engine &bull; SQLite Dual-Cloud Synchronization
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: Onboarding Consultation Form */}
        {modalTab === 'consultation' && (
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="form-group">
                    <label>Official Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Department</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={formData.department} 
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Assigned Campus</label>
                    <select 
                      className="form-select" 
                      value={formData.campus} 
                      onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                    >
                      <option value="SPHEREX Campus 01 (Main)">SPHEREX Campus 01 (Main)</option>
                      <option value="SPHEREX Campus 02 (City)">SPHEREX Campus 02 (City)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Mobile Number (+91-)</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      value={formData.phone} 
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Institutional Email</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required 
                  />
                </div>

                <div style={{ marginTop: '20px' }}>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '0.95rem' }}>
                    Confirm Faculty / Counselor Registration &rarr;
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(52, 211, 153, 0.15)', border: '2px solid #34d399', color: '#34d399', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
                  &#10003;
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>Registration Recorded!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  Welcome, {formData.name}. Your counselor allocation account has been registered for {formData.campus}.
                </p>
                <button className="btn btn-secondary" style={{ marginTop: '16px' }} onClick={handleReset}>
                  Close
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
