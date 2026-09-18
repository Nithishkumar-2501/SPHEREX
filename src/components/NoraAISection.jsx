import React, { useState } from 'react';

export default function NoraAISection({ onOpenBooking }) {
  const [maths, setMaths] = useState(96);
  const [physics, setPhysics] = useState(94);
  const [chemistry, setChemistry] = useState(93);

  // TNEA Official Cutoff Formula: Maths + (Physics / 2) + (Chemistry / 2)
  const cutoff = (Number(maths) + Number(physics) / 2 + Number(chemistry) / 2).toFixed(2);

  const getEligibleBranches = (score) => {
    const s = parseFloat(score);
    if (s >= 192) {
      return [
        { name: 'B.Tech Artificial Intelligence & Data Science', campus: 'Campus 01 & Campus 02', status: 'High Priority Viable' },
        { name: 'B.E. Computer Science & Engineering', campus: 'Campus 01 & Campus 02', status: 'Confirmed Merit' },
        { name: 'B.Tech Information Technology', campus: 'Campus 01 & Campus 02', status: 'Confirmed Merit' },
        { name: 'B.E. Electronics & Communication (ECE)', campus: 'Campus 01 & Campus 02', status: 'Confirmed Merit' }
      ];
    } else if (s >= 180) {
      return [
        { name: 'B.Tech Information Technology', campus: 'Campus 01 & Campus 02', status: 'High Priority Viable' },
        { name: 'B.E. Electronics & Communication (ECE)', campus: 'Campus 01 & Campus 02', status: 'High Priority Viable' },
        { name: 'B.Tech Biotechnology / Biomedical', campus: 'Campus 02', status: 'Confirmed Merit' },
        { name: 'B.E. Mechanical Engineering', campus: 'Campus 01', status: 'Confirmed Merit' }
      ];
    } else {
      return [
        { name: 'B.E. Electrical & Electronics (EEE)', campus: 'Campus 01 & Campus 02', status: 'Counseling Quota Available' },
        { name: 'B.E. Mechanical Engineering', campus: 'Campus 01 & Campus 02', status: 'Counseling Quota Available' },
        { name: 'B.E. Civil Engineering', campus: 'Campus 01', status: 'Counseling Quota Available' }
      ];
    }
  };

  const eligibleBranches = getEligibleBranches(cutoff);

  return (
    <section className="section" id="nora-ai">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            MODULE 8 &bull; GENERATIVE INTELLIGENCE &amp; TNEA OCR
          </div>
          <h2>Nora AI: Intelligent Lead Assistant &amp; Cutoff Calculator</h2>
          <p>
            Engineered by SPHEREX to automate marksheet verification, engineering cutoff calculation, and applicant propensity analysis.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', alignItems: 'start', maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Left Column: Interactive TNEA Cutoff Calculator */}
          <div className="cutoff-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-light)', textTransform: 'uppercase' }}>
                  Live TNEA Engineering Cutoff Engine
                </span>
                <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>Official 200-Mark Formula</h3>
              </div>
              <span className="badge-tnea-code">Formula: M + P/2 + C/2</span>
            </div>

            {/* Live Cutoff Result */}
            <div className="cutoff-result-box">
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Calculated TNEA Cutoff Score
              </div>
              <div className="cutoff-number">{cutoff}</div>
              <div style={{ fontSize: '0.85rem', color: '#38bdf8', marginTop: '6px' }}>
                Out of 200.00 Maximum Marks
              </div>
            </div>

            {/* Sliders */}
            <div className="slider-group">
              <div className="slider-label-row">
                <span style={{ color: '#fff' }}>Mathematics (M)</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-light)' }}>{maths} / 100</span>
              </div>
              <input 
                type="range" 
                min="35" 
                max="100" 
                value={maths} 
                className="cutoff-range-slider"
                onChange={(e) => setMaths(e.target.value)} 
              />
            </div>

            <div className="slider-group">
              <div className="slider-label-row">
                <span style={{ color: '#fff' }}>Physics (P)</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-light)' }}>{physics} / 100 (Contrib: {(physics/2).toFixed(1)})</span>
              </div>
              <input 
                type="range" 
                min="35" 
                max="100" 
                value={physics} 
                className="cutoff-range-slider"
                onChange={(e) => setPhysics(e.target.value)} 
              />
            </div>

            <div className="slider-group">
              <div className="slider-label-row">
                <span style={{ color: '#fff' }}>Chemistry (C)</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-light)' }}>{chemistry} / 100 (Contrib: {(chemistry/2).toFixed(1)})</span>
              </div>
              <input 
                type="range" 
                min="35" 
                max="100" 
                value={chemistry} 
                className="cutoff-range-slider"
                onChange={(e) => setChemistry(e.target.value)} 
              />
            </div>

            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '16px', lineHeight: 1.5 }}>
              * Official Anna University / DoTE TNEA Cutoff calculation used across all engineering counselling admissions in Tamil Nadu.
            </p>
          </div>

          {/* Right Column: Nora AI Prediction & Branch Viability */}
          <div className="glass-card" style={{ padding: '28px', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, #9333ea, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem' }}>
                🤖
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>Nora AI Viability Analysis</h4>
                <span style={{ fontSize: '0.74rem', color: '#c084fc', fontFamily: 'var(--font-mono)' }}>Propensity Engine &bull; SPHEREX Admissions</span>
              </div>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.3)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '16px', marginBottom: '20px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>AI Insight for Score {cutoff}:</div>
              <p style={{ fontSize: '0.88rem', color: '#f1f5f9', lineHeight: 1.6, margin: 0 }}>
                Candidate has strong quantitative aptitude with {maths} in Maths. High propensity for <strong>B.Tech AI &amp; DS</strong> or <strong>B.E. CSE</strong>. Eligible for First Graduate scholarship benefits and immediate seat reservation across campuses.
              </p>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Recommended SPHEREX Engineering Branches:
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {eligibleBranches.map((b, idx) => (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-sm)', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontSize: '0.86rem', color: '#fff', display: 'block' }}>{b.name}</strong>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{b.campus}</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
                    {b.status}
                  </span>
                </div>
              ))}
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
