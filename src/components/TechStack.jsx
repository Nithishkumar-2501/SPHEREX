import React from 'react';
import styled from 'styled-components';

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

        <StyledTechWrapper>
          <div className="tech-stack-grid">
            {technologies.map((tech, idx) => (
              <div className="card" key={idx}>
                <b />
                <div className="card-content-wrap">
                  {/* Top Section: Tech Name and Category Badge */}
                  <div className="card-top-section">
                    <div className="tech-badge-row">
                      <span className="tech-category-badge">{tech.category}</span>
                    </div>
                    <h3 className="tech-name">{tech.name}</h3>
                  </div>

                  {/* Subtle resting cue */}
                  <div className="card-hint">
                    <span>Hover for spec &darr;</span>
                  </div>

                  {/* Reveal Drawer on Hover */}
                  <div className="card-reveal-section">
                    <p className="tech-desc">{tech.desc}</p>
                    <ul className="sci">
                      <li>
                        <a href="#architecture" title="Architecture Spec">
                          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </StyledTechWrapper>

        <p className="tech-supporting-text" style={{ marginTop: '28px', textAlign: 'center' }}>
          Dual-Persistence: Local-First <strong>SQLite (Prisma)</strong> for rapid transaction speed + Background <strong>Firebase Dual-Sync</strong> for real-time live replication across all counselor smartphones and desk PCs.
        </p>
      </div>
    </section>
  );
}

const StyledTechWrapper = styled.div`
  .tech-stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }

  .card {
    position: relative;
    width: 100%;
    height: 190px;
    background: #000;
    display: flex;
    align-items: stretch;
    justify-content: center;
    border-radius: 16px;
    cursor: pointer;
    overflow: hidden;
    transition: box-shadow 0.4s ease;
  }

  .card:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  /* Radiant dual-tone neon gradient frame */
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: linear-gradient(315deg, #03a9f4, #ff0058);
    pointer-events: none;
  }

  /* Blooming ambient neon blur layer */
  .card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: linear-gradient(315deg, #03a9f4, #ff0058);
    filter: blur(24px);
    opacity: 0.25;
    transition: filter 0.5s ease, opacity 0.5s ease;
    z-index: 0;
    pointer-events: none;
  }

  .card:hover::after {
    filter: blur(32px);
    opacity: 0.85;
  }

  /* Dark frosted inner plate for high text contrast */
  .card b {
    position: absolute;
    inset: 4px;
    background: rgba(7, 12, 28, 0.95);
    border-radius: 12px;
    z-index: 2;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    pointer-events: none;
  }

  .card-content-wrap {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    padding: 18px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-top-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    transition: all 0.4s ease;
    margin: auto 0;
  }

  .card:hover .card-top-section {
    margin: 0 0 8px 0;
  }

  .tech-badge-row {
    margin-bottom: 6px;
  }

  .tech-category-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.7rem;
    font-weight: 600;
    font-family: var(--font-mono);
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.25);
  }

  .tech-name {
    font-size: 1.05rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.3;
    margin: 0;
  }

  .card-hint {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.45);
    transition: opacity 0.3s ease;
    margin-top: 4px;
  }

  .card:hover .card-hint {
    opacity: 0;
    height: 0;
    margin: 0;
    overflow: hidden;
  }

  /* Reveal drawer on hover */
  .card-reveal-section {
    display: flex;
    flex-direction: column;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transform: translateY(10px);
    transition: max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                opacity 0.4s ease,
                transform 0.4s ease;
  }

  .card:hover .card-reveal-section {
    max-height: 160px;
    opacity: 1;
    overflow: visible;
    transform: translateY(0);
    margin-top: 6px;
  }

  .tech-desc {
    font-size: 0.8rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0 0 10px 0;
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
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .sci li a:hover {
    color: #ffffff;
    background: linear-gradient(135deg, #03a9f4, #ff0058);
    border-color: transparent;
    transform: scale(1.1);
    box-shadow: 0 4px 14px rgba(255, 0, 88, 0.4);
  }
`;
