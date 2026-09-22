import React from 'react';
import styled from 'styled-components';

const roles = [
  {
    icon: '👑',
    title: 'Admission Directors',
    tagline: 'See the complete admission picture.',
    desc: 'Monitor executive institutional performance, aggregate lead flows, application velocities, and confirmed admissions across all campuses in real time.',
    link: '#showcase',
    linkText: 'Director Workflows →'
  },
  {
    icon: '📞',
    title: 'Admission Counsellors',
    tagline: 'Focus on conversations that convert.',
    desc: 'Manage allocated prospective students, click-to-call, log structured notes, schedule reminders, and guide candidates through course selection.',
    link: '#voice-calling',
    linkText: 'Counsellor Tools →'
  },
  {
    icon: '🏫',
    title: 'Faculty & Department Teams',
    tagline: 'Turn assigned enquiries into students.',
    desc: 'Manage departmental student allocations, provide authoritative academic counselling, answer curriculum questions, and fill department quotas.',
    link: '#lead-assignment',
    linkText: 'Faculty Portals →'
  },
  {
    icon: '📈',
    title: 'Marketing Teams',
    tagline: 'Connect campaigns to admission outcomes.',
    desc: 'Understand lead sources, optimize digital campaign spends, track ROI per student, and eliminate wasted ad budgets with precise attribution.',
    link: '#marketing',
    linkText: 'Campaign Intelligence →'
  }
];

export default function WhoIsItFor() {
  return (
    <section className="section" id="solutions">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            ROLE-SPECIFIC WORKFLOWS
          </div>
          <h2>Built for Everyone Involved in Admissions.</h2>
          <p>
            SPHEREX empowers each stakeholder in your institution with tailored tools to accelerate enrolments.
          </p>
        </div>

        <StyledRolesWrapper>
          <div className="roles-grid">
            {roles.map((role, idx) => (
              <div className="card" key={idx}>
                <b />
                <div className="card-content-wrap">
                  {/* Top Section: Role Icon, Title, and Tagline (always crisp and visible) */}
                  <div className="card-top-section">
                    <div className="role-icon-box">{role.icon}</div>
                    <h3 className="role-title">{role.title}</h3>
                    <div className="role-tagline">{role.tagline}</div>
                  </div>

                  {/* Subtle resting cue */}
                  <div className="card-hint">
                    <span>Hover for workflow details &darr;</span>
                  </div>

                  {/* Detail Reveal Section on Hover */}
                  <div className="card-reveal-section">
                    <p className="role-desc">{role.desc}</p>
                    <a href={role.link} className="role-action-btn">
                      <span>{role.linkText}</span>
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </StyledRolesWrapper>
      </div>
    </section>
  );
}

const StyledRolesWrapper = styled.div`
  .roles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
  }

  .card {
    position: relative;
    width: 100%;
    min-height: 340px;
    background: #000;
    display: flex;
    align-items: stretch;
    justify-content: center;
    border-radius: 16px;
    cursor: pointer;
    overflow: visible;
    transition: transform 0.4s ease;
  }

  .card:hover {
    transform: translateY(-5px);
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
    filter: blur(28px);
    opacity: 0.28;
    transition: filter 0.5s ease, opacity 0.5s ease;
    z-index: 0;
  }

  .card:hover::after {
    filter: blur(36px);
    opacity: 0.88;
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
  }

  .card-content-wrap {
    position: relative;
    z-index: 3;
    width: 100%;
    padding: 24px;
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
    margin: 0 0 12px 0;
  }

  .role-icon-box {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.4s ease;
  }

  .card:hover .role-icon-box {
    transform: scale(1.1) rotate(-5deg);
    border-color: #03a9f4;
  }

  .role-title {
    font-size: 1.18rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.3;
    margin: 0 0 6px 0;
  }

  .role-tagline {
    font-size: 0.85rem;
    font-weight: 500;
    color: #38bdf8;
    line-height: 1.4;
    margin-bottom: 4px;
  }

  .card-hint {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.45);
    transition: opacity 0.3s ease;
    margin-top: 8px;
  }

  .card:hover .card-hint {
    opacity: 0;
    height: 0;
    margin: 0;
    overflow: hidden;
  }

  /* Reveal drawer on hover - natural vertical flex, zero collisions */
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
    max-height: 220px;
    opacity: 1;
    overflow: visible;
    transform: translateY(0);
    margin-top: 10px;
  }

  .role-desc {
    font-size: 0.82rem;
    color: var(--text-secondary);
    line-height: 1.55;
    margin: 0 0 16px 0;
  }

  .role-action-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    align-self: flex-start;
  }

  .role-action-btn:hover {
    background: linear-gradient(135deg, #03a9f4, #ff0058);
    border-color: transparent;
    transform: translateX(3px);
    box-shadow: 0 4px 14px rgba(255, 0, 88, 0.35);
  }
`;
