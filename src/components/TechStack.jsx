import React from 'react';

export default function TechStack() {
  return (
    <section className="section" style={{ padding: '70px 0' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '36px' }}>
          <div className="section-eyebrow">
            <span className="dot"></span>
            ENTERPRISE ARCHITECTURE
          </div>
          <h2>Built on a Modern Technology Stack.</h2>
        </div>

        <div className="tech-badges-grid">
          <span className="tech-badge">Next.js</span>
          <span className="tech-badge">React</span>
          <span className="tech-badge">TypeScript</span>
          <span className="tech-badge">Prisma</span>
          <span className="tech-badge">SQLite</span>
          <span className="tech-badge">Firebase</span>
          <span className="tech-badge">WebRTC</span>
          <span className="tech-badge">Capacitor</span>
        </div>

        <p className="tech-supporting-text">
          A modern full-stack architecture designed for responsive institutional workflows, real-time synchronization and web/mobile access.
        </p>
      </div>
    </section>
  );
}
