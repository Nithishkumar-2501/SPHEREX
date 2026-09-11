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
    <section className="section" id="meeting">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            INSTITUTIONAL CALENDAR
          </div>
          <h2>Assign &amp; Schedule Your Admission Meeting.</h2>
          <p>
            Choose a suitable 30-minute slot on our live calendar to connect directly with the SPHEREX admission architecture and onboarding team.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '28px', maxWidth: '1060px', margin: '0 auto', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid var(--border)', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary)', letterSpacing: '0.08em', fontWeight: 700 }}>
                SPHEREX &bull; 30-MIN DISCOVERY CONSULTATION
              </span>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginTop: '4px', fontWeight: 800 }}>Select Date &amp; Time Slot</h3>
            </div>
            <a 
              href="https://app.cal.com/sphere-x-5kss8s/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '8px 18px', fontSize: '0.86rem' }}
            >
              Open in Full Window &nearr;
            </a>
          </div>

          {/* Cal inline embed container */}
          <div style={{ width: '100%', minHeight: '620px', overflow: 'auto', borderRadius: 'var(--radius-md)', background: '#ffffff' }} id="my-cal-inline-30min"></div>
        </div>
      </div>
    </section>
  );
}
