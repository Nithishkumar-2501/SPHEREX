import React from 'react';
import styled from 'styled-components';

export default function CosmicButton({ 
  children,
  href = "https://cal.com/sphere-x-5kss8s/30min", 
  target = "_blank",
  rel = "noopener noreferrer",
  onClick,
  id,
  size = "hero",
  className = ""
}) {
  const content = children || (
    size === 'navbar' ? (
      <>
        <span className="nav-book-text-full">📅 Book Meeting</span>
        <span className="nav-book-text-short">📅 Book</span>
      </>
    ) : (
      <span>📅 Book Meeting &rarr;</span>
    )
  );

  return (
    <StyledWrapper className={`cosmic-btn-container ${size} ${className}`}>
      <a 
        href={href} 
        target={target} 
        rel={rel} 
        onClick={onClick}
        id={id}
        className="btn-wrapper"
      >
        <div className="light" />
        <div className="gradient-layer" style={{animationDelay: '0s', animationDuration: '25s'}} />
        <div className="gradient-layer" style={{animationDelay: '0.15s', animationDuration: '15.9s'}} />
        <div className="gradient-layer" style={{animationDelay: '0.53s', animationDuration: '26.4s'}} />
        <div className="gradient-layer" style={{animationDelay: '0.45s', animationDuration: '17.8s'}} />
        <div className="gradient-layer" style={{animationDelay: '1.6s', animationDuration: '19.2s'}} />
        <div className="gradient-layer" style={{animationDelay: '1.6s', animationDuration: '29.2s'}} />
        <div className="gradient-layer" style={{animationDelay: '1.6s', animationDuration: '20.2s'}} />
        <span className="gradient-btn">{content}</span>
        <div className="text-overlay">{content}</div>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  .btn-wrapper {
    --rad: 32px;
    --color-wrapper-border: #fff;
    --color-btn-bg: #f00;
    --color-btn-text: #000;
    --color-btn-text-shadow: #fff;
    --color-btn-inset-shadow: #558;
    --color-layer-a: #fff;
    --color-layer-b: #00f;
    --color-overlay-text: #000;
    --color-overlay-glow: #fff;
    --color-overlay-shadow: #0004;
    --color-overlay-highlight: #fff5;

    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: clip;
    overflow-clip-margin: 4px;
    text-decoration: none;

    border: 2px solid var(--color-wrapper-border);
    border-radius: var(--rad);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 1.05rem;
    font-weight: 700;

    filter: saturate(0.65) brightness(1.8);
    transition: transform 0.25s ease, filter 0.25s ease;
  }

  .btn-wrapper:hover {
    filter: saturate(0.85) brightness(2);
  }

  .gradient-btn {
    position: relative;
    z-index: -1;

    padding: 14px 30px;
    border: none;
    border-radius: var(--rad);

    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: 0.03rem;
    white-space: nowrap;

    color: var(--color-btn-text);
    background-color: var(--color-btn-bg);
    background-size: 200% 200%;
    box-shadow: inset 0 0 10px 9px var(--color-btn-inset-shadow);
    text-shadow: 0 1px 3px var(--color-btn-text-shadow);

    cursor: pointer;
    mix-blend-mode: color-dodge;
    transition:
      color 0.3s ease,
      text-shadow 0.3s ease;
  }

  .gradient-btn::after {
    content: "";
    position: absolute;
    pointer-events: none;

    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    border-radius: var(--rad);
    background-size: 200% 200%;
    mix-blend-mode: difference;
    z-index: 1;
  }

  .gradient-layer {
    position: absolute;
    pointer-events: none;

    left: -160px;
    width: 500%;
    aspect-ratio: 1;

    background: radial-gradient(
      ellipse at 65% 180%,
      var(--color-layer-a),
      var(--color-layer-b),
      var(--color-layer-a),
      var(--color-layer-b),
      var(--color-layer-a),
      var(--color-layer-b),
      var(--color-layer-a),
      var(--color-layer-b),
      var(--color-layer-a),
      var(--color-layer-b),
      var(--color-layer-a)
    );

    mix-blend-mode: difference;
    animation: rotate 8s linear infinite;
  }

  .gradient-layer:last-child {
    mix-blend-mode: color-dodge;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .text-overlay {
    position: absolute;
    pointer-events: none;
    z-index: 2;

    padding: 14px 30px;
    border-radius: var(--rad);

    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: 0.03rem;
    white-space: nowrap;

    color: var(--color-overlay-text);
    text-shadow: 0 0 4px var(--color-overlay-glow);
    box-shadow:
      inset 0 -4px 4px 0 var(--color-overlay-shadow),
      inset 0 4px 4px 0 var(--color-overlay-highlight);

    mix-blend-mode: multiply;
    transition: transform 0.3s ease;
    animation: opacityPulse 5s ease infinite;
  }

  .btn-wrapper:hover .text-overlay {
    transform: scale(1.05);
  }

  .btn-wrapper:hover .gradient-btn {
    color: #0000;
    text-shadow: 0 0 0 #0000;
  }

  .btn-wrapper:active .text-overlay {
    transform: scale(0.96);
  }

  .btn-wrapper:active .gradient-btn {
    color: #0000;
    text-shadow: 0 0 0 #0000;
  }

  .light {
    position: absolute;

    pointer-events: none;
    z-index: 1;
    border-radius: 50px;
    width: 80%;
    height: 1.9rem;
    aspect-ratio: 1;
    background-color: #fff5;
    filter: blur(5px);
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
  }

  @keyframes opacityPulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* Specific sizing for Navbar */
  &.navbar {
    .btn-wrapper {
      font-size: 0.88rem;
    }
    .gradient-btn,
    .text-overlay {
      padding: 8px 18px;
    }
  }

  @media (max-width: 640px) {
    &.navbar {
      .btn-wrapper {
        font-size: 0.76rem;
      }
      .gradient-btn,
      .text-overlay {
        padding: 6px 12px;
      }
    }

    &.hero {
      width: 100%;
      .btn-wrapper {
        width: 100%;
        font-size: 0.95rem;
      }
      .gradient-btn,
      .text-overlay {
        width: 100%;
        text-align: center;
        padding: 12px 20px;
      }
    }
  }
`;
