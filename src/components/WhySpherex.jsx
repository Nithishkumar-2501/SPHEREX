import React from 'react';
import styled from 'styled-components';

const benefits = [
  {
    icon: '⚡',
    title: 'Faster',
    tagline: 'High Velocity Flow',
    desc: 'Reduce manual admission workflows and eliminate repetitive data entry across fragmented spreadsheets.',
    badge: '10x Speed'
  },
  {
    icon: '🎯',
    title: 'Organized',
    tagline: 'Unified Source of Truth',
    desc: 'Keep every prospective student, interaction history, mark record, and followup reminder in one unified place.',
    badge: '100% Tracking'
  },
  {
    icon: '📈',
    title: 'Visible',
    tagline: 'Real-Time Intelligence',
    desc: 'Understand the admission funnel, lead velocity, and counsellor activity in real time with zero reporting delays.',
    badge: 'Live Dashboards'
  },
  {
    icon: '🔄',
    title: 'Connected',
    tagline: 'Continuous Sync',
    desc: 'Bring marketing, counselling, academic departments, applications and payments into one continuous workflow.',
    badge: 'Dual-Cloud'
  }
];

export default function WhySpherex() {
  return (
    <section className="section" id="why-spherex">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            THE SPHEREX ADVANTAGE
          </div>
          <h2>Built to Make Admission Teams More Effective.</h2>
          <p>
            Purpose-engineered for the rigor, seasonality, and volume of collegiate admissions.
          </p>
        </div>

        <StyledBenefitsWrapper>
          <div className="benefits-grid">
            {benefits.map((item, idx) => (
              <div className="card" key={idx}>
                <b />
                <div className="card-content-wrap">
                  {/* Top Section: Icon, Title, Tagline */}
                  <div className="card-top-section">
                    <div className="benefit-icon-box">{item.icon}</div>
                    <div className="badge-row">
                      <span className="benefit-badge">{item.badge}</span>
                    </div>
                    <h3 className="benefit-title">{item.title}</h3>
                    <div className="benefit-tagline">{item.tagline}</div>
                  </div>

                  {/* Subtle resting cue */}
                  <div className="card-hint">
                    <span>Hover for details &darr;</span>
                  </div>

                  {/* Hover Reveal Drawer */}
                  <div className="card-reveal-section">
                    <p className="benefit-desc">{item.desc}</p>
                    <ul className="sci">
                      <li>
                        <a href="#showcase" title="Learn more">
                          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </StyledBenefitsWrapper>
      </div>
    </section>
  );
}

const StyledBenefitsWrapper = styled.div`
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
  }

  .card {
    position: relative;
    width: 100%;
    min-height: 290px;
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
    filter: blur(26px);
    opacity: 0.28;
    transition: filter 0.5s ease, opacity 0.5s ease;
    z-index: 0;
  }

  .card:hover::after {
    filter: blur(34px);
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
    margin: 0 0 10px 0;
  }

  .benefit-icon-box {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.4s ease;
  }

  .card:hover .benefit-icon-box {
    transform: scale(1.1) rotate(5deg);
    border-color: #ff0058;
  }

  .badge-row {
    margin-bottom: 6px;
  }

  .benefit-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.7rem;
    font-weight: 700;
    font-family: var(--font-mono);
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.25);
  }

  .benefit-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.25;
    margin: 0 0 4px 0;
  }

  .benefit-tagline {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--text-secondary);
    line-height: 1.4;
  }

  .card-hint {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.45);
    transition: opacity 0.3s ease;
    margin-top: 6px;
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
    max-height: 180px;
    opacity: 1;
    overflow: visible;
    transform: translateY(0);
    margin-top: 8px;
  }

  .benefit-desc {
    font-size: 0.82rem;
    color: var(--text-secondary);
    line-height: 1.55;
    margin: 0 0 12px 0;
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
    width: 30px;
    height: 30px;
    border-radius: 8px;
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
