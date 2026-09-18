import React from 'react';

const technologies = [
  { name: 'Next.js 14', category: 'App Router & RSC', desc: 'React Server Components, server route handlers, edge caching' },
  { name: 'React 18', category: 'Frontend UI', desc: 'Declarative state controllers, fast page navigation' },
  { name: 'TailwindCSS', category: 'Design System', desc: 'Custom HSL tokens, glassmorphism, responsive floor displays' },
  { name: 'Prisma ORM 5.22', category: 'Database ORM', desc: 'Type-safe relational schema modeling and migrations' },
  { name: 'SQLite dev.db', category: 'Local Persistence', desc: 'Sub-millisecond local-first read/write performance' },
  { name: 'Google Firebase 12.18', category: 'Cloud Dual-Sync', desc: 'Firestore collections & Realtime Database (RTDB) sync' },
  { name: 'Capacitor Android 8.5.1', category: 'Native Mobile APK', desc: 'Native Android SDK 34 APK build pipeline (SPHEREX.apk)' },
  { name: 'WebRTC Telephony', category: 'Voice & Waveforms', desc: 'Node.js WebSocket signaling server on port 5000' },
  { name: 'Nora AI Engine', category: 'OCR & Intelligence', desc: 'Marksheet OCR, TNEA cutoff scoring, and student propensity' },
  { name: 'TypeScript 5.3', category: 'Type Safety', desc: 'Strict data contracts for leads, faculty quotas, and tasks' },
  { name: 'OGL WebGL', category: 'Visual Effects', desc: 'Specular orbital light shaders and dynamic canvas rays' },
  { name: 'Vercel Serverless', category: 'Cloud Deployment', desc: 'Zero-downtime hosting with automated Prisma client generation' }
];

export default function TechStack() {
  return (
    <section className="section" id="tech-stack" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <div className="section-eyebrow">
            <span className="dot"></span>
            SECTION 3 &bull; ENTERPRISE TECHNOLOGY MATRIX
          </div>
          <h2>Full-Stack Architecture &amp; Dual-Persistence Engine</h2>
          <p>
            Engineered for high-throughput admission seasons, resilient offline capability, sub-millisecond local queries, and instant real-time synchronization across web and native Android devices.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {technologies.map((tech, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.2s ease' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <strong style={{ color: '#fff', fontSize: '1rem' }}>{tech.name}</strong>
                  <span style={{ fontSize: '0.7rem', color: 'var(--primary-light)', background: 'rgba(56, 189, 248, 0.12)', padding: '2px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
                    {tech.category}
                  </span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="tech-supporting-text" style={{ marginTop: '28px', textAlign: 'center' }}>
          Dual-Persistence: Local-First <strong>SQLite (Prisma)</strong> for rapid transaction speed + Background <strong>Firebase Dual-Sync</strong> for real-time live replication across all counselor smartphones and desk PCs.
        </p>
      </div>
    </section>
  );
}
