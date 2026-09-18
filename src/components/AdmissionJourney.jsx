import React, { useState } from 'react';

const journeyStagesData = {
  1: {
    pill: 'STAGE 01 • TOP-OF-FUNNEL DISCOVERY',
    title: '01 — NEW ENQUIRY',
    desc: 'Student discovers the institution through digital ads, social outreach, website landing pages, campus open days, or school visits. An enquiry profile is generated instantly with channel attribution.',
    triggerTitle: 'Instant Lead Ingestion & De-duplication',
    triggerDesc: 'API listeners capture name, phone, email, district, and preferred branch in <120ms, routing directly to SPHEREX queue with UTM tagging.'
  },
  2: {
    pill: 'STAGE 02 • INITIAL ENGAGEMENT',
    title: '02 — CONTACTED',
    desc: 'Counsellor engages with the student through in-browser calling, WhatsApp outreach, or personalized email welcome sequence within the golden first-response window.',
    triggerTitle: 'Telephony & Multichannel Cadence',
    triggerDesc: 'First contact attempt logged automatically with call recording, disposition tags, and parent contact verification.'
  },
  3: {
    pill: 'STAGE 03 • ACADEMIC GUIDANCE',
    title: '03 — COUNSELLING',
    desc: 'Student receives comprehensive course guidance, curriculum highlights, scholarship criteria, hostel options, and campus tour scheduling tailored to their career aspirations.',
    triggerTitle: 'Personalized Counselling Notes',
    triggerDesc: 'Structured intake forms capture student goals, departmental questions, and follow-up milestones in the shared institutional ledger.'
  },
  4: {
    pill: 'STAGE 04 • TNEA CUTOFF & NORA AI OCR',
    title: '04 — IN_REVIEW (ELIGIBILITY)',
    desc: 'Academic scores and 10th/12th marksheets are analyzed via Nora AI OCR. The official TNEA cutoff (Maths + Physics/2 + Chemistry/2) is calculated automatically out of 200 to establish departmental eligibility.',
    triggerTitle: 'Nora AI Marksheet OCR Scanner',
    triggerDesc: 'Instant extraction of PCM marks, automated community quota evaluation (BC, MBC, SC, SCA, ST, OC), and branch allotment viability check.'
  },
  5: {
    pill: 'STAGE 05 • FORMAL REGISTRATION',
    title: '05 — 3-SHEET APPLICATION',
    desc: 'Candidate completes the comprehensive 3-sheet registration covering student identity, parent occupations, and residential address with locked +91- mobile verification.',
    triggerTitle: 'Document Review Desk Workflow',
    triggerDesc: 'Institutional registrars review certificates, issue document checklist alerts, and approve application packets for final admission.'
  },
  6: {
    pill: 'STAGE 06 • SEAT ALLOCATION',
    title: '06 — ADMITTED & CONFIRMED',
    desc: 'Admission confirmed for candidate\'s chosen campus and department. Provisional admission letter generated with student folio number, branch choice, and fee acceptance deadline.',
    triggerTitle: 'Provisional Letter & WhatsApp Dispatch',
    triggerDesc: 'Digital offer letter generated with verified student folio number, allotted campus, department, and deadline for fee acceptance.'
  },
  7: {
    pill: 'STAGE 07 • FINANCIAL RECONCILIATION',
    title: '07 — PAYMENT RECONCILED',
    desc: 'Tuition fees, seat reservation advances, and hostel deposits are reconciled into SQLite and Firebase with official digital receipts.',
    triggerTitle: 'Dual-Cloud Finance Ledger',
    triggerDesc: 'Payment status transitions from Pending to Processing to Verified to Completed, officially matriculating the student into the institutional register.'
  }
};

export default function AdmissionJourney({ onOpenBooking, onOpenDemo: _onOpenDemo }) {
  const [activeStage, setActiveStage] = useState(1);
  const currentData = journeyStagesData[activeStage];

  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            PIPELINE TRANSPARENCY
          </div>
          <h2>Every Student Has a Journey. SPHEREX Makes It Visible.</h2>
          <p>
            Click through each milestone of the end-to-end admission lifecycle to see how SPHEREX guides students from first discovery to verified payment.
          </p>
        </div>

        <div className="journey-container">
          {/* Stepper Buttons (01 to 07) */}
          <div className="journey-stepper" id="journey-stepper">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => {
              const labels = ['New Enquiry', 'Contacted', 'Counselling', 'Qualified', 'Application', 'Admitted', 'Payment'];
              return (
                <button
                  key={num}
                  className={`journey-step-btn ${activeStage === num ? 'active' : ''}`}
                  onClick={() => setActiveStage(num)}
                >
                  <div className="step-circle">{String(num).padStart(2, '0')}</div>
                  <div className="step-label">{labels[num - 1]}</div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Detail Box */}
          <div className="journey-active-detail">
            <div className="journey-detail-info">
              <div className="journey-metrics-pill">{currentData.pill}</div>
              <h3>{currentData.title}</h3>
              <p>{currentData.desc}</p>

            </div>
            <div className="journey-detail-preview">
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '8px' }}>
                SYSTEM AUTOMATION TRIGGER
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>
                {currentData.triggerTitle}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {currentData.triggerDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
