import React, { useState, useEffect, useRef } from 'react';

export default function VoiceCalling({ onOpenDemo, onSimulateAction }) {
  const canvasRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [timerText, setTimerText] = useState('03:42');

  // Live timer simulation
  useEffect(() => {
    let seconds = 222;
    const interval = setInterval(() => {
      seconds++;
      const m = String(Math.floor(seconds / 60)).padStart(2, '0');
      const s = String(seconds % 60).padStart(2, '0');
      setTimerText(`${m}:${s}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Real-time audio waveform canvas animation
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
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bars = 48;
      const barWidth = canvas.width / bars;
      const midY = canvas.height / 2;

      for (let i = 0; i < bars; i++) {
        let amp = isMuted ? 2 : Math.sin(phase + i * 0.25) * Math.cos(phase * 0.7 + i * 0.15);
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

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isMuted]);

  return (
    <section className="section" id="voice-calling">
      <div className="container">
        <div className="feature-split reverse">
          <div className="feature-text-block">
            <div className="section-eyebrow">
              <span className="dot"></span>
              TELEPHONY WORKFLOW
            </div>
            <h2>Call. Counsel. Follow Up. Convert.</h2>
            <p>
              Keep student conversations connected to the admission workflow. Eliminate disjointed personal phone calls and unrecorded promises.
            </p>
            <p>
              With in-browser calling, counsellors and faculty can phone prospects with a single click, record structured notes in real-time, schedule future touchpoints, and maintain a complete auditable history of every discussion.
            </p>
            <button className="btn btn-primary" onClick={() => onOpenDemo('Voice Calling CTA')}>
              Explore Voice Calling &rarr;
            </button>
          </div>

          <div className="feature-preview-block">
            {/* Realistic Calling Interface */}
            <div className="calling-widget">
              <div className="call-header-card">
                <div className="call-student-title">
                  <h4>Rohan Verma</h4>
                  <span>+91 94432 10987 &bull; Enquiry #89423</span>
                </div>
                <div className="call-live-timer">
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', animation: 'pulse-dot 1s infinite' }}></span>
                  <span>{timerText}</span>
                </div>
              </div>

              {/* Dynamic Animated Audio Waveform Canvas */}
              <canvas className="call-waveform-canvas" ref={canvasRef}></canvas>

              <div className="call-actions-row">
                <button 
                  className="call-btn-action btn-mute"
                  style={{ color: isMuted ? '#ef4444' : '#ffffff' }}
                  onClick={() => setIsMuted(!isMuted)}
                >
                  <span>{isMuted ? '🔊' : '🔇'}</span> {isMuted ? 'Unmute Audio' : 'Mute Audio'}
                </button>
                <button 
                  className="call-btn-action btn-end" 
                  onClick={() => onSimulateAction('Call Completed')}
                >
                  <span>📞</span> End Call
                </button>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '12px', marginBottom: '16px' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Live Call Notes
                </div>
                <div style={{ fontSize: '0.85rem', color: '#fff' }}>
                  Student requested fee breakdown for hostel accommodation and scholarship options for cutoff &gt; 190.
                </div>
              </div>

              <div className="call-badges-row">
                <span className="call-badge">Browser Calling</span>
                <span className="call-badge">Call Logs</span>
                <span className="call-badge">Recording</span>
                <span className="call-badge">Follow-up</span>
                <span className="call-badge">Communication History</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
