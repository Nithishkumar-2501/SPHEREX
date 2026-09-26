import React, { useEffect, useRef } from 'react';

export default function VoiceCalling({ onOpenBooking }) {
  const canvasRef = useRef(null);

  // Animated audio waveform canvas preview
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = 54;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let phase = 0;
    let isVisible = false;

    const draw = () => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bars = 48;
      const barWidth = canvas.width / bars;
      const midY = canvas.height / 2;

      for (let i = 0; i < bars; i++) {
        let amp = Math.sin(phase + i * 0.25) * Math.cos(phase * 0.7 + i * 0.15);
        amp = Math.abs(amp) * 18 + 4;

        const x = i * barWidth + barWidth * 0.2;
        const w = barWidth * 0.6;
        const y = midY - amp / 2;
        const h = amp;

        const gradient = ctx.createLinearGradient(0, y, 0, y + h);
        gradient.addColorStop(0, '#00f2fe');
        gradient.addColorStop(0.5, '#38bdf8');
        gradient.addColorStop(1, '#6366f1');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, 3);
        ctx.fill();
      }

      phase += 0.08;
      animationFrameId = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animationFrameId) {
        animationFrameId = requestAnimationFrame(draw);
      }
    }, { threshold: 0.05 });

    observer.observe(canvas);

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="section" id="voice-calling">
      <div className="container">
        <div className="feature-split reverse">
          <div className="feature-text-block">
            <div className="section-eyebrow">
              <span className="dot"></span>
              MODULE 7 &bull; WEBRTC TELEPHONY &amp; AUDIO AUDIT
            </div>
            <h2>In-Browser Audio Calling &amp; Transcription Options</h2>
            <p>
              SPHEREX incorporates a dedicated WebRTC signaling architecture (Node.js WebSocket port 5000) for crystal-clear peer-to-peer audio calls between admission counselors and prospective candidates.
            </p>
            <p>
              Features dynamic waveform logging, audio audit players, structured call disposition notes, and an automated 30-day retention purge engine to ensure complete privacy compliance.
            </p>

          </div>

          <div className="feature-preview-block">
            {/* Telephony UI Preview Widget */}
            <div className="calling-widget">
              <div className="call-header-card">
                <div className="call-student-title">
                  <h4>S. Vignesh &bull; B.Tech AI &amp; DS</h4>
                  <span>+91-9876543210 &bull; Main Campus (Campus 01) &bull; Cutoff: 194.5</span>
                </div>
                <div className="call-live-timer">
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }}></span>
                  <span style={{ color: '#34d399', fontWeight: 700 }}>04:12 ACTIVE</span>
                </div>
              </div>

              {/* Dynamic Animated Audio Waveform Canvas */}
              <canvas className="call-waveform-canvas" ref={canvasRef}></canvas>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '14px 0', padding: '10px 14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.8rem', color: '#fff' }}>
                  📞 <strong>Telephony Mode:</strong> WebRTC P2P Voice Gateway
                </div>
                <span className="badge-range-tag">Signal Port 5000</span>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '12px', marginBottom: '16px' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Counselor Note Preview &bull; Dr. K. Arulmurugan (HOD CSE)
                </div>
                <div style={{ fontSize: '0.84rem', color: '#fff', lineHeight: 1.5 }}>
                  Student verified with 194.5 TNEA cutoff. Father K. Subramanian requested hostel fee concession details. Provisional admission offer dispatched.
                </div>
              </div>

              <div className="call-badges-row">
                <span className="call-badge">WebRTC P2P</span>
                <span className="call-badge">Port 5000 Engine</span>
                <span className="call-badge">Waveform Audit</span>
                <span className="call-badge">30-Day Auto Purge</span>
                <span className="call-badge">+91- Standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
