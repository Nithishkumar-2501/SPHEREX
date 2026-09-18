import React, { useEffect } from 'react';

export default function MeetingScheduler() {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    if (window.Cal) {
      window.Cal("init", "30min", { origin: "https://app.cal.com" });
      window.Cal.config = window.Cal.config || {};
      window.Cal.config.forwardQueryParams = true;

      window.Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "sphere-x-5kss8s/30min",
      });

      window.Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view", theme: "light" });
    }
  }, []);

  return (
    <section className="section" id="meeting" style={{ padding: '90px 0' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            INSTITUTIONAL CONSULTATION &amp; ON-CAMPUS ONBOARDING
          </div>
          <h2>Schedule Your Admission Setup Meeting</h2>
          <p>
            Connect directly with the creator of SPHEREX. After our meeting, our engineering team travels to your campus to handle complete on-premise installation, dual-cloud synchronization, and counselor training.
          </p>
        </div>

        {/* 3-Step Campus Deployment Workflow */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '1060px', margin: '0 auto 36px auto' }}>
          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: 800, fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
              01 &bull; BOOK
            </div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '6px' }}>Select 30-Min Slot</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', margin: 0, lineHeight: 1.5 }}>
              Choose a convenient date and time on the calendar below to connect with the lead creator.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{ fontSize: '1.4rem', color: '#34d399', fontWeight: 800, fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
              02 &bull; DISCOVERY
            </div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '6px' }}>Needs &amp; Quota Review</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', margin: 0, lineHeight: 1.5 }}>
              We evaluate your candidate volume, multi-campus requirements, department heads, and TNEA cutoff benchmarks.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '20px', borderColor: 'rgba(56, 189, 248, 0.4)', background: 'rgba(56, 189, 248, 0.06)' }}>
            <div style={{ fontSize: '1.4rem', color: '#00f0ff', fontWeight: 800, fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
              03 &bull; DEPLOY
            </div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '6px' }}>On-Campus Installation</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', margin: 0, lineHeight: 1.5 }}>
              The creator visits your campus to set up servers, install the native Android apps, and train faculty.
            </p>
          </div>
        </div>

        {/* Live Cal.com Embed Container */}
        <div className="glass-card" style={{ padding: '28px', maxWidth: '1060px', margin: '0 auto', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid var(--border)', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary)', letterSpacing: '0.08em', fontWeight: 700 }}>
                SPHEREX &bull; DIRECT CREATOR DISCOVERY CALL
              </span>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginTop: '4px', fontWeight: 800 }}>Choose Your Date &amp; Time Slot</h3>
            </div>
            <a 
              href="https://app.cal.com/sphere-x-5kss8s/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '8px 18px', fontSize: '0.86rem' }}
            >
              Open Full Window &nearr;
            </a>
          </div>

          {/* Cal inline embed container */}
          <div style={{ width: '100%', minHeight: '620px', overflow: 'auto', borderRadius: 'var(--radius-md)', background: '#ffffff' }} id="my-cal-inline-30min"></div>
        </div>
      </div>
    </section>
  );
}
