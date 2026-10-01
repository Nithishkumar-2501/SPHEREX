import React from 'react';

export default function CatalisTestimonials() {
  const testimonials = [
    {
      name: 'Dr. Ramesh Sundaram',
      role: 'Dean of Admissions, National Engineering Campus',
      quote: 'SPHEREX has completely transformed the way we manage our seasonal admissions. With its intuitive cutoff evaluator and automated faculty allocation, our team has cut lead response latency from days to under 5 minutes.',
      initials: 'RS'
    },
    {
      name: 'Meera Krishnan',
      role: 'Head of Student Outreach & Counselling',
      quote: 'The dual-campus visibility and offline SQLite synchronization gave our counselors zero-downtime reliability during the busiest admission weeks. Nora AI cutoff predictions were 96% accurate.',
      initials: 'MK'
    },
    {
      name: 'Prof. Arvind Nambiar',
      role: 'Director of Technology & Infrastructure',
      quote: 'Consolidating walk-in entries, web enquiries, and departmental quotas into one high-throughput OS eliminated duplicate records entirely. Best institutional software investment we have made.',
      initials: 'AN'
    },
    {
      name: 'Dr. Shalini Verma',
      role: 'Executive Registrar, City Polytechnic',
      quote: 'The real-time allocation matrix to 16+ department heads ensured complete fairness and transparency. The analytics dashboards give executive leadership complete clarity every single morning.',
      initials: 'SV'
    }
  ];

  return (
    <section className="catalis-testimonials-section">
      <div className="catalis-testimonials-header">
        <div className="catalis-badge catalis-badge-blue">
          <span className="catalis-badge-star">★</span>
          <span className="catalis-badge-text">TESTIMONIALS</span>
        </div>

        <h2 className="catalis-section-title text-center">
          What our <em className="catalis-serif-italic">clients</em> are saying
        </h2>
        <p className="catalis-section-desc text-center">
          Institutional leaders love how SPHEREX simplifies operations and streamlines student intake.
        </p>
      </div>

      {/* Infinite Marquee Track */}
      <div className="catalis-marquee-container">
        <div className="catalis-marquee-track">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="catalis-testimonial-card">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-author-row">
                <div className="author-avatar">{t.initials}</div>
                <div className="author-info">
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
