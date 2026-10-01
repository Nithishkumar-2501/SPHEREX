import React from 'react';

export default function CatalisBenefits({ onOpenBooking }) {
  const benefits = [
    {
      id: 'budgeting',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: 'Budgeting and expense tracking',
      subTitle: 'Candidate intake and quota tracking',
      desc: 'Take control of your finances with our intuitive budgeting and expense-tracking solution. Easily manage your income'
    },
    {
      id: 'investment',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: 'Investment management',
      subTitle: 'Faculty allocation & department quotas',
      desc: 'Take control of your finances with our intuitive budgeting and expense-tracking solution. Easily manage your income'
    },
    {
      id: 'digital-journey',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
          <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
          <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
        </svg>
      ),
      title: 'The digital transformation journey',
      subTitle: 'Nora AI automated cutoffs & evaluation',
      desc: 'involves integrating digital technologies into all areas of a business, fundamentally changing how it operates'
    },
    {
      id: 'market-expansion',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M3 10h18" />
          <path d="M5 6l7-3 7 3" />
          <path d="M4 10v11" />
          <path d="M20 10v11" />
          <path d="M8 14v4" />
          <path d="M12 14v4" />
          <path d="M16 14v4" />
        </svg>
      ),
      title: 'Market expansion strategy',
      subTitle: 'Multi-campus intake strategy',
      desc: 'A market expansion strategy involves identifying and entering new markets to increase a company\'s customer base and revenue'
    }
  ];

  return (
    <section className="catalis-benefits-section" id="features">
      <div className="catalis-benefits-container">
        {/* Eyebrow Badge */}
        <div className="catalis-badge catalis-badge-blue">
          <span className="catalis-badge-star">★</span>
          <span className="catalis-badge-text">BENEFITS</span>
        </div>

        {/* Large Editorial Heading */}
        <h2 className="catalis-section-title text-center">
          Make payment easy, simplify<br />
          your <em className="catalis-serif-italic">finance</em>
        </h2>

        {/* Subtitle */}
        <p className="catalis-section-desc text-center">
          Easily adapt to changes and scale your operations with our flexible
          infrastructure, designed to support your business growth.
        </p>

        {/* 4 White Rounded Cards Grid */}
        <div className="catalis-benefits-grid">
          {benefits.map((b) => (
            <div key={b.id} className="catalis-benefit-card">
              <div className="benefit-icon-bubble">
                {b.icon}
              </div>
              <h3 className="benefit-card-title">{b.title}</h3>
              <p className="benefit-card-desc">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="catalis-center-cta">
          <button 
            type="button" 
            className="catalis-btn-primary"
            onClick={onOpenBooking}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
