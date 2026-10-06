import React from 'react';
import AnimatedSplashButton from './ui/AnimatedSplashButton';

export default function CatalisPricing({ onOpenBooking }) {
  const plans = [
    {
      name: 'Basic Plan',
      price: '₹15,000',
      period: '/month',
      desc: 'Ideal for independent departments or single campus intake without Nora AI.',
      features: [
        { text: 'Basic admission analytics tools', included: true },
        { text: 'Up to 3 counselor accounts', included: true },
        { text: 'Real-time cutoff monitoring', included: true },
        { text: 'Monthly candidate intake reports', included: true },
        { text: 'Email & WhatsApp outreach support', included: true },
        { text: 'Nora AI Cutoff OCR & Marksheet Scanner (Not Supported)', included: false }
      ]
    },
    {
      name: 'Premium Plan',
      price: '₹20,000',
      period: '/month',
      popular: true,
      desc: 'Full multi-campus admission operating system with complete Nora AI automation.',
      features: [
        { text: 'Full Nora AI OCR Marksheet Scanner & Cutoff Evaluation', included: true },
        { text: 'Advanced cutoff analytics & viability scoring', included: true },
        { text: 'Unlimited counselor & department accounts', included: true },
        { text: 'Dynamic faculty allocation matrix & quota balancing', included: true },
        { text: 'Real-time multi-campus synchronization', included: true },
        { text: 'WebRTC voice telephony & 24/7 priority support', included: true }
      ]
    }
  ];

  return (
    <section className="catalis-pricing-section" id="pricing">
      <div className="catalis-pricing-container">
        {/* Eyebrow Badge */}
        <div className="catalis-badge catalis-badge-blue">
          <span className="catalis-badge-star">★</span>
          <span className="catalis-badge-text">PRICING</span>
        </div>

        {/* Section Title */}
        <h2 className="catalis-section-title text-center">
          Simple, transparent <em className="catalis-serif-italic">pricing</em>
        </h2>
        <p className="catalis-section-desc text-center">
          Choose a plan that fits your institutional needs and admission scale.
        </p>

        {/* 2 Pricing Cards */}
        <div className="catalis-pricing-grid">
          {plans.map((p) => (
            <div key={p.name} className={`catalis-pricing-card ${p.popular ? 'is-popular' : ''}`}>
              <div className="pricing-plan-header">
                <span className="pricing-icon-star">★</span>
                <h3 className="pricing-plan-name">{p.name}</h3>
              </div>

              <div className="pricing-price-wrap">
                <span className="pricing-amount">{p.price}</span>
                <span className="pricing-period">{p.period}</span>
              </div>

              <p className="pricing-desc">{p.desc}</p>

              <div className="pricing-features-wrap">
                <span className="pricing-features-title">Features:</span>
                <ul className="pricing-feature-list">
                  {p.features.map((f, i) => {
                    const isExcluded = typeof f === 'object' && f.included === false;
                    const text = typeof f === 'object' ? f.text : f;
                    return (
                      <li key={i} className={`pricing-feature-item ${isExcluded ? 'is-excluded' : ''}`}>
                        <span className={`pricing-check-icon ${isExcluded ? 'is-excluded-icon' : ''}`}>
                          {isExcluded ? '✕' : '✓'}
                        </span>
                        <span>{text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <AnimatedSplashButton 
                label="Get Started"
                secondaryLabel="Join Now"
                onClick={onOpenBooking}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
