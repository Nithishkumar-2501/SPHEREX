import React from 'react';
import AnimatedSplashButton from './ui/AnimatedSplashButton';

export default function CatalisPricing({ onOpenBooking }) {
  const plans = [
    {
      name: 'Starter Plan',
      price: '₹4,199',
      period: '/month',
      desc: 'Ideal for independent departments or single campus intake.',
      features: [
        'Basic admission analytics tools',
        'Up to 3 counselor accounts',
        'Real-time cutoff monitoring',
        'Monthly candidate intake reports',
        'Email & WhatsApp support'
      ]
    },
    {
      name: 'Growth Plan',
      price: '₹7,499',
      period: '/month',
      popular: true,
      desc: 'For growing colleges requiring automated quota balancing.',
      features: [
        'Advanced cutoff analytics & Nora AI',
        'Up to 10 department accounts',
        'Dynamic faculty allocation matrix',
        'Real-time dual-campus sync',
        'Priority counselor support'
      ]
    },
    {
      name: 'Scale Plan',
      price: '₹12,499',
      period: '/month',
      desc: 'Full multi-campus university operating system.',
      features: [
        'Unlimited counselor accounts',
        'Full WebRTC telephony integration',
        'On-campus custom installation',
        'Dedicated SQLite + Cloud database',
        '24/7 Priority SLA & system training'
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

        {/* 3 Pricing Cards */}
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
                  {p.features.map((f, i) => (
                    <li key={i} className="pricing-feature-item">
                      <span className="pricing-check-icon">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <AnimatedSplashButton 
                label="Get Started"
                onClick={onOpenBooking}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
