import React from 'react';
import styled from 'styled-components';

const capabilities = [
  {
    num: '01',
    title: 'Lead Management',
    subtitle: 'Unified Student Intake',
    desc: 'Capture and organize every student enquiry in one centralized database with zero duplicate records and zero lead leakage.',
    link: '#lead-management',
    linkText: 'Explore Lead Management →',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
      </svg>
    ),
    tags: ['Zero Leakage', 'Deduplication', 'Auto-Sync']
  },
  {
    num: '02',
    title: 'Admission CRM',
    subtitle: 'Pipeline & Funnel Tracker',
    desc: 'Track each student\'s journey from first enquiry through admission with real-time stage transitions, cutoffs, and activity logs.',
    link: '#admission-crm',
    linkText: 'Explore Admission CRM →',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 0 1-1.06-1.06L14.94 12.5H7.5a.75.75 0 0 1 0-1.5h7.44l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Z" clipRule="evenodd" />
      </svg>
    ),
    tags: ['Stage Transitions', 'Funnel Analytics', 'Live Cutoffs']
  },
  {
    num: '03',
    title: 'Smart Lead Allocation',
    subtitle: 'Dynamic Faculty Splitting',
    desc: 'Assign leads automatically to counsellors, faculty members or departmental admission teams based on rules and load balancing.',
    link: '#lead-assignment',
    linkText: 'Explore Allocation →',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.66.75.75 0 0 0 .424-.664v-.006a5.625 5.625 0 0 0-8.73-4.708 7.16 7.16 0 0 1 3.48 5.924Z" />
      </svg>
    ),
    tags: ['Auto-Partitioning', 'Quota Balancer', 'Firestore Sync']
  },
  {
    num: '04',
    title: 'Omnichannel Marketing',
    subtitle: 'Multi-Stream Attribution',
    desc: 'Understand where enquiries originate across digital campaigns, social channels, walk-ins, and regional outreach events.',
    link: '#marketing',
    linkText: 'Explore Marketing Intelligence →',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
      </svg>
    ),
    tags: ['ROI Tracking', 'Source Attribution', 'Campaign Meta']
  },
  {
    num: '05',
    title: 'Voice & Communication',
    subtitle: 'Integrated Web Dialer',
    desc: 'Call prospective students directly from the browser, conduct structured guidance, and log auditable communication history.',
    link: '#voice-calling',
    linkText: 'Explore Voice Calling →',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
      </svg>
    ),
    tags: ['WebRTC Dialer', 'Counselor Notes', 'Call Audit Logs']
  },
  {
    num: '06',
    title: 'Application & Payment Tracking',
    subtitle: 'Real-Time Verification',
    desc: 'Monitor document submissions, eligibility verification, admission status, and verified fee receipts in one dashboard.',
    link: '#applications',
    linkText: 'Explore Applications →',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
        <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
      </svg>
    ),
    tags: ['Fee Receipts', 'Doc Verification', 'Admission Status']
  },
  {
    num: '07',
    title: 'Multi-Campus & Team Management',
    subtitle: 'Cross-Campus Governance',
    desc: 'Give executive administrators complete top-down visibility across multiple campuses, academic departments, and distributed regional teams.',
    link: '#multi-campus',
    linkText: 'Explore Institutional Governance →',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
        <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 1.5 0v9.918h3v-7.5a.75.75 0 0 1 1.5 0v7.5h4.5v-7.5a.75.75 0 0 1 1.5 0v7.5h3v-9.918a.75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
      </svg>
    ),
    tags: ['Campus 01 & 02', 'HOD Visibility', 'Role Permissions']
  }
];

export default function ValueProps() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            COMPLETE CAPABILITIES
          </div>
          <h2>One Platform. The Entire Admission Journey.</h2>
          <p>
            From the initial online enquiry to verified course enrolment, SPHEREX orchestrates the critical steps that turn prospective students into enrolled scholars.
          </p>
        </div>

        <StyledWrapper>
          <div className="capabilities-grid">
            {capabilities.map((cap) => (
              <div className="card" key={cap.num}>
                <b />

                <div className="card-content-wrap">
                  {/* Top Header: Badge, Title, and Subtitle in Natural Vertical Flow */}
                  <div className="card-top-section">
                    <div className="cap-badge-wrap">
                      <span className="cap-num">{cap.num}</span>
                      <div className="cap-icon-box">{cap.icon}</div>
                    </div>
                    <h3 className="cap-title">{cap.title}</h3>
                    <span className="cap-sub">{cap.subtitle}</span>
                  </div>

                  {/* Rest State Cue */}
                  <div className="card-hint">
                    <span>Hover to explore capability &darr;</span>
                  </div>

                  {/* Reveal Section: Expands smoothly below the title with zero overlap */}
                  <div className="card-reveal-section">
                    <p className="desc">{cap.desc}</p>
                    <div className="tags-row">
                      {cap.tags.map((tag) => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                    <a href={cap.link} className="action-btn">
                      <span>{cap.linkText}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </StyledWrapper>
      </div>
    </section>
  );
}

const StyledWrapper = styled.div`
  .capabilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 28px;
  }

  .card {
    position: relative;
    width: 100%;
    min-height: 380px;
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

  /* Solid dark frosted inner plate for maximum text contrast */
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
    padding: 30px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
  }

  .card-top-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto 0;
    width: 100%;
    transition: all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card-top-section {
    margin-top: 0;
    margin-bottom: 8px;
    transform: translateY(-4px);
  }

  .cap-badge-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 12px;
    transition: transform 0.4s ease;
  }

  .card:hover .cap-badge-wrap {
    transform: scale(0.92);
    margin-bottom: 8px;
  }

  .cap-num {
    font-family: var(--font-mono);
    font-size: 1.65rem;
    font-weight: 800;
    background: linear-gradient(135deg, #03a9f4 0%, #ff0058 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;
  }

  .cap-icon-box {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(3, 169, 244, 0.14);
    border: 1px solid rgba(3, 169, 244, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #38bdf8;
    box-shadow: 0 0 14px rgba(3, 169, 244, 0.2);
  }

  .cap-icon-box svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  .cap-title {
    font-size: 1.32rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 6px;
    letter-spacing: -0.015em;
    line-height: 1.25;
    transition: color 0.3s ease;
  }

  .card:hover .cap-title {
    color: #f8fafc;
  }

  .cap-sub {
    font-size: 0.76rem;
    font-family: var(--font-mono);
    color: #38bdf8;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 700;
  }

  .card-hint {
    margin-top: 18px;
    font-size: 0.72rem;
    color: #64748b;
    font-family: var(--font-mono);
    opacity: 0.85;
    transition: opacity 0.3s ease, max-height 0.3s ease, margin 0.3s ease;
    max-height: 24px;
    overflow: hidden;
  }

  .card:hover .card-hint {
    max-height: 0;
    opacity: 0;
    margin-top: 0;
  }

  /* Reveal Section: Smoothly expands in natural vertical sequence - ZERO collision */
  .card-reveal-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 0;
    opacity: 0;
    transform: translateY(14px);
    overflow: hidden;
    pointer-events: none;
    transition: max-height 0.45s ease, opacity 0.35s ease, transform 0.4s ease;
  }

  .card:hover .card-reveal-section {
    max-height: 280px;
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    overflow: visible;
  }

  .desc {
    color: #f1f5f9;
    font-size: 0.88rem;
    line-height: 1.58;
    margin-bottom: 12px;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }

  .tags-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
    margin-bottom: 14px;
  }

  .tag-pill {
    font-size: 0.72rem;
    font-family: var(--font-mono);
    font-weight: 600;
    padding: 3px 9px;
    background: rgba(3, 169, 244, 0.12);
    border: 1px solid rgba(3, 169, 244, 0.35);
    border-radius: 99rem;
    color: #7dd3fc;
  }

  .action-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    font-weight: 700;
    color: #ffffff;
    background: linear-gradient(135deg, #03a9f4, #ff0058);
    padding: 8px 20px;
    border-radius: 99rem;
    text-decoration: none;
    box-shadow: 0 4px 16px rgba(255, 0, 88, 0.4);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .action-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 24px rgba(3, 169, 244, 0.6);
  }

  @media (max-width: 768px) {
    .card {
      min-height: 360px;
    }
    .card-content-wrap {
      padding: 24px 18px;
    }
    .cap-title {
      font-size: 1.22rem;
    }
    .desc {
      font-size: 0.84rem;
    }
  }
`;
