import React, { useState } from 'react';
import { ChevronDown, Sparkles, Shield, Cpu, Network, ArrowUp, Calendar } from 'lucide-react';
import FancyShineButton from './ui/FancyShineButton';

export default function FAQSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const categories = [
    { id: 'all', label: 'All Questions', icon: Sparkles },
    { id: 'architecture', label: 'Architecture & Offline', icon: Network },
    { id: 'nora-ai', label: 'Nora AI & Cutoffs', icon: Cpu },
    { id: 'security', label: 'Security & Onboarding', icon: Shield }
  ];

  const faqs = [
    {
      id: 1,
      category: 'architecture',
      question: 'How does SPHEREX handle multi-campus operations and zero-internet offline reliability?',
      answer: 'SPHEREX utilizes a dual-engine architecture combining Prisma SQLite for instantaneous sub-millisecond local queries with Google Firebase for dual-cloud sync. Admission counselors can continue entering applications, updating candidate statuses, and logging seat allocations even during full internet outages. As soon as the network connection restores, the background engine automatically syncs records across both campuses with automated conflict resolution.'
    },
    {
      id: 2,
      category: 'nora-ai',
      question: 'What is the Nora AI engine and how does it evaluate 12th standard marksheets?',
      answer: 'Nora AI is a specialized institutional OCR and evaluation engine trained specifically on Indian academic marksheets (State Board, CBSE, ICSE). When a marksheet is uploaded or scanned via webcam, Nora AI extracts subject scores in Maths, Physics, Chemistry, and Biology, calculates official admission cutoff aggregates (such as TNEA 200-point cutoffs), and instantly verifies departmental eligibility in under 3 seconds with zero manual calculation errors.'
    },
    {
      id: 3,
      category: 'architecture',
      question: 'How does dynamic batch quota splitting and faculty allocation work?',
      answer: 'The system allows institutional administrators to configure granular quota allocations across general merit, management, and government seats. Incoming enquiries from web portals, walk-in reception desks, and social outreach are dynamically distributed across 16+ faculty and counselor portals using configurable round-robin or departmental specialization rules, eliminating lead bottlenecks and duplicate calling.'
    },
    {
      id: 4,
      category: 'architecture',
      question: 'Can admission counselors make calls directly from SPHEREX without external hardware?',
      answer: 'Yes. SPHEREX includes native WebRTC voice telephony and mobile companion APKs. Counselors can make one-click outbound phone calls directly from their browser or mobile device, review real-time call waveforms, and log discussion outcomes directly on the candidate profile without purchasing proprietary PBX hardware or external VoIP servers.'
    },
    {
      id: 5,
      category: 'security',
      question: 'How long does on-campus institutional deployment take?',
      answer: 'A standard on-campus deployment is typically completed in 3 to 5 business days. The SPHEREX Core Architecture Team works directly with your campus IT administrators to configure the local SQLite database instances, establish cloud sync endpoints, migrate legacy candidate spreadsheets with automated deduplication, and conduct hands-on training for department deans and counseling staff.'
    },
    {
      id: 6,
      category: 'security',
      question: 'How secure is our institutional student and fee transaction data?',
      answer: 'SPHEREX adheres to enterprise data privacy principles. The platform features strict role-based access control (RBAC), end-to-end data encryption in transit and at rest, and complete data isolation per campus tenant. Student contact numbers and academic records remain strictly proprietary to your institution with zero third-party ad tracking or external data sharing.'
    },
    {
      id: 7,
      category: 'security',
      question: 'Can we import our existing student inquiries from Excel or legacy CRM systems?',
      answer: 'Yes. SPHEREX features an intelligent high-speed CSV/Excel data importer with automatic column mapping, duplicate detection, and schema validation. You can securely import thousands of past records, historical cutoffs, and walk-in logs in minutes without data corruption or loss.'
    }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="catalis-faq-section" id="faq">
      {/* Anchor alias so existing conversion links continue to scroll cleanly */}
      <div id="conversion" style={{ position: 'relative', top: '-80px' }} />

      <div className="catalis-faq-card">
        {/* Subtle decorative sky glow */}
        <div className="catalis-faq-sky-glow" aria-hidden="true" />

        {/* Eyebrow Pill Badge */}
        <div className="catalis-badge catalis-badge-blue">
          <span className="catalis-badge-star">★</span>
          <span className="catalis-badge-text">FREQUENTLY ASKED QUESTIONS</span>
        </div>

        {/* Section Heading */}
        <h2 className="catalis-section-title text-center">
          Everything you need to <em className="catalis-serif-italic">know</em>
        </h2>

        {/* Section Description */}
        <p className="catalis-section-desc text-center">
          Find clear answers to common questions about SPHEREX architecture, multi-campus setup, Nora AI marksheet evaluation, and institutional data privacy.
        </p>

        {/* Category Tabs */}
        <div className="faq-category-pills">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(0); // open first item in selected category
                }}
                className={`faq-category-btn ${isActive ? 'active' : ''}`}
                aria-pressed={isActive}
              >
                <Icon size={14} className="faq-category-icon" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-list">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id} 
                className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="faq-question-text">
                    {faq.question}
                  </span>
                  <div className={`faq-icon-bubble ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className="faq-answer-panel"
                  style={{
                    maxHeight: isOpen ? '360px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none'
                  }}
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Conversion Prompt */}
        <div className="faq-bottom-cta">
          <div className="faq-bottom-content">
            <h3 className="faq-bottom-title">Still have questions about your campus setup?</h3>
            <p className="faq-bottom-desc">
              Schedule a discovery session with the creator of SPHEREX to review your institution's intake quota and arrange an in-person campus installation.
            </p>
          </div>
          <div className="faq-bottom-actions">
            <FancyShineButton label="Book Consultation" onClick={onOpenBooking} />
            <button 
              type="button" 
              className="catalis-btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
