import React from 'react';
import styled from 'styled-components';

export default function PageLoader({ 
  isOpen, 
  title = "Opening Meeting Scheduler", 
  subtitle = "Connecting to SPHEREX Admissions Calendar...",
  onClose,
  targetUrl = "https://cal.com/sphere-x-5kss8s/30min"
}) {
  if (!isOpen) return null;

  return (
    <StyledWrapper>
      <div className="overlay-backdrop" onClick={onClose} />
      <div className="loader-modal">
        {/* The Exact Loading Component from Prompt */}
        <div className="loading">
          <div className="i" />
          <div className="a" />
          <div className="u" />
        </div>

        <div className="loader-info">
          <h3 className="loader-title">{title}</h3>
          <p className="loader-desc">{subtitle}</p>
          <div className="progress-bar-wrap">
            <div className="progress-bar-fill" />
          </div>
          <div className="loader-footer">
            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="direct-link"
              onClick={onClose}
            >
              Opening automatically... or click here &rarr;
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .overlay-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(2, 6, 23, 0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .loader-modal {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 440px;
    background: rgba(10, 15, 30, 0.95);
    border: 1px solid rgba(255, 217, 0, 0.3);
    border-radius: 24px;
    padding: 36px 28px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8),
                0 0 40px rgba(255, 217, 0, 0.15);
  }

  /* Exact loading styles from user prompt */
  .loading {
    background-color: rgba(255, 0, 0, 0);
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100px;
    margin-bottom: 10px;
  }

  .loading div {
    background-color: rgb(255, 217, 0);
    width: 20px;
    height: 20px;
    margin: 20px;
    border-radius: 50px;
    animation-name: load912355;
    animation-duration: .9s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    text-align: center;
    justify-content: center;
    box-shadow: 0 0 16px rgba(255, 217, 0, 0.6);
  }

  .loading .a {
    animation-delay: .3s;
  }

  .loading .u {
    animation-delay: .6s;
  }

  @keyframes load912355 {
    0% {
      transform: translateY(40px) scale(1);
    }

    100% {
      transform: translateY(0px) scale(1.8) rotate(360deg);
    }
  }

  .loader-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .loader-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 6px;
    letter-spacing: -0.01em;
  }

  .loader-desc {
    font-size: 0.85rem;
    color: var(--text-secondary, #94a3b8);
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .progress-bar-wrap {
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .progress-bar-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #ff0058, #ffb703, #00f0ff);
    border-radius: 999px;
    animation: progressFill 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes progressFill {
    0% { width: 0%; }
    40% { width: 55%; }
    80% { width: 85%; }
    100% { width: 100%; }
  }

  .loader-footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .direct-link {
    font-size: 0.78rem;
    color: #ffd900;
    text-decoration: none;
    font-family: var(--font-mono, monospace);
    opacity: 0.85;
    transition: opacity 0.2s ease;
  }

  .direct-link:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;
