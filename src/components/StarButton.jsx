import React from 'react';
import styled from 'styled-components';

const StarSvg = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    xmlSpace="preserve" 
    version="1.1" 
    style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}} 
    viewBox="0 0 784.11 815.53"
  >
    <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
  </svg>
);

export default function StarButton({
  children,
  onClick,
  active = false,
  size = 'md',
  className = '',
  style = {},
  type = 'button',
  disabled = false,
  variant = 'default' // 'default' | 'solid' | 'tab'
}) {
  return (
    <StyledWrapper className={`star-btn-wrapper ${className}`}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        style={style}
        className={`star-btn ${active ? 'is-active' : ''} size-${size} variant-${variant}`}
      >
        <span className="btn-label">{children}</span>

        <div className="star-1"><StarSvg /></div>
        <div className="star-2"><StarSvg /></div>
        <div className="star-3"><StarSvg /></div>
        <div className="star-4"><StarSvg /></div>
        <div className="star-5"><StarSvg /></div>
        <div className="star-6"><StarSvg /></div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: inline-flex;
  vertical-align: middle;

  button.star-btn {
    position: relative;
    padding: 10px 24px;
    background: #fec195;
    font-size: 0.95rem;
    font-weight: 600;
    color: #181818;
    border: 2.5px solid #fec195;
    border-radius: 10px;
    box-shadow: 0 0 0 #fec1958c;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    white-space: nowrap;
    user-select: none;
  }

  button.star-btn .btn-label {
    position: relative;
    z-index: 3;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  /* Size variants */
  button.star-btn.size-sm {
    padding: 7px 16px;
    font-size: 0.82rem;
    border-width: 2px;
    border-radius: 8px;
  }

  button.star-btn.size-md {
    padding: 10px 22px;
    font-size: 0.92rem;
  }

  button.star-btn.size-lg {
    padding: 12px 32px;
    font-size: 1.05rem;
  }

  /* Tab / Inactive variant */
  button.star-btn.variant-tab {
    background: rgba(255, 255, 255, 0.04);
    color: #cbd5e1;
    border: 2px solid rgba(254, 193, 149, 0.3);
    box-shadow: none;
  }

  button.star-btn.variant-tab.is-active {
    background: #fec195;
    color: #181818;
    border-color: #fec195;
    box-shadow: 0 0 20px #fec1958c;
  }

  button.star-btn.variant-default.is-active {
    background: #fec195;
    color: #181818;
    border-color: #fec195;
    box-shadow: 0 0 22px #fec1958c;
  }

  /* Star particle elements */
  .star-1, .star-2, .star-3, .star-4, .star-5, .star-6 {
    pointer-events: none;
  }

  .star-1 {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 24px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
  }

  .star-2 {
    position: absolute;
    top: 45%;
    left: 45%;
    width: 14px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-3 {
    position: absolute;
    top: 40%;
    left: 40%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-4 {
    position: absolute;
    top: 20%;
    left: 40%;
    width: 8px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-5 {
    position: absolute;
    top: 25%;
    left: 45%;
    width: 14px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-6 {
    position: absolute;
    top: 5%;
    left: 50%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 0.8s ease;
  }

  /* Hover effect with star dispersion */
  button.star-btn:hover {
    background: transparent;
    color: #fec195;
    border-color: #fec195;
    box-shadow: 0 0 25px #fec1958c;
  }

  button.star-btn:hover .star-1 {
    position: absolute;
    top: -80%;
    left: -25%;
    width: 24px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  button.star-btn:hover .star-2 {
    position: absolute;
    top: -25%;
    left: 10%;
    width: 14px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  button.star-btn:hover .star-3 {
    position: absolute;
    top: 55%;
    left: 25%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  button.star-btn:hover .star-4 {
    position: absolute;
    top: 30%;
    left: 80%;
    width: 8px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  button.star-btn:hover .star-5 {
    position: absolute;
    top: 25%;
    left: 110%;
    width: 14px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  button.star-btn:hover .star-6 {
    position: absolute;
    top: 5%;
    left: 60%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  .fil0 {
    fill: #fffdef;
  }
`;
