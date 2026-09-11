import React, { useState, useEffect } from 'react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    collegeName: '',
    officerName: '',
    email: '',
    phone: '',
    volume: '5k-20k'
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
    setFormData({
      collegeName: '',
      officerName: '',
      email: '',
      phone: '',
      volume: '5k-20k'
    });
    onClose();
  };

  const fillDemoValues = () => {
    setFormData({
      collegeName: 'Apex Institute of Technology',
      officerName: 'Dr. A. Sharma',
      email: 'admissions@apexinstitute.edu',
      phone: '+91 98765 43210',
      volume: '5k-20k'
    });
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>

        <div className="section-eyebrow" style={{ marginBottom: '12px' }}>
          <span className="dot"></span>
          INSTITUTIONAL CONSULTATION
        </div>
        <h3>Transform Your Admissions</h3>
        <p>Schedule an institutional demonstration or explore how SPHEREX centralizes your admission funnel.</p>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label htmlFor="form-inst-name" style={{ margin: 0 }}>College / University Name</label>
                <span 
                  onClick={fillDemoValues} 
                  style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
                >
                  ⚡ Autofill Demo Data
                </span>
              </div>
              <input 
                type="text" 
                id="form-inst-name" 
                className="form-input" 
                placeholder="e.g. Apex Institute of Technology" 
                value={formData.collegeName}
                onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="form-contact-name">Admission Officer / Official Name</label>
              <input 
                type="text" 
                id="form-contact-name" 
                className="form-input" 
                placeholder="e.g. Dr. A. Sharma" 
                value={formData.officerName}
                onChange={(e) => setFormData({ ...formData, officerName: e.target.value })}
                required 
              />
            </div>

            <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label htmlFor="form-email">Official Email</label>
                <input 
                  type="email" 
                  id="form-email" 
                  className="form-input" 
                  placeholder="admissions@college.edu" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required 
                />
              </div>
              <div>
                <label htmlFor="form-phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="form-phone" 
                  className="form-input" 
                  placeholder="+91 98765 00000" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="form-volume">Annual Student Enquiry Volume</label>
              <select 
                id="form-volume" 
                className="form-select"
                value={formData.volume}
                onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
              >
                <option value="1k-5k">1,000 &ndash; 5,000 Enquiries / Year</option>
                <option value="5k-20k">5,000 &ndash; 20,000 Enquiries / Year</option>
                <option value="20k-50k">20,000 &ndash; 50,000 Enquiries / Year</option>
                <option value="50k+">50,000+ Multi-Campus Enquiries</option>
              </select>
            </div>

            <div style={{ marginTop: '24px' }}>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1rem' }}>
                Confirm Institutional Consultation &rarr;
              </button>
            </div>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', border: '2px solid #10b981', color: '#34d399', fontSize: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              &#10003;
            </div>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Consultation Confirmed!</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Thank you, {formData.officerName || 'Officer'}. Our higher education onboarding team will reach out to demonstrate the SPHEREX admission operating system for {formData.collegeName || 'your institution'}.
            </p>
            <button className="btn btn-secondary" style={{ marginTop: '18px' }} onClick={handleReset}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
