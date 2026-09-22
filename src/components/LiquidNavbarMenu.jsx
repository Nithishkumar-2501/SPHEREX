import React from 'react';
import styled from 'styled-components';

const navItems = [
  {
    id: 'platform',
    label: 'Platform',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    )
  },
  {
    id: 'lead-management',
    label: 'Candidate Entry',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
      </svg>
    )
  },
  {
    id: 'lead-assignment',
    label: 'Faculty Allocation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.66.75.75 0 0 0 .424-.664v-.006a5.625 5.625 0 0 0-8.73-4.708 7.16 7.16 0 0 1 3.48 5.924Z" />
      </svg>
    )
  },
  {
    id: 'nora-ai',
    label: 'Nora AI',
    isNora: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.93l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5Z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 'mobile-app',
    label: 'Mobile App',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
        <path fillRule="evenodd" d="M6.75 2.25A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 19.5V4.5A2.25 2.25 0 0 0 17.25 2.25H6.75Zm.75 3a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75v10.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 'multi-campus',
    label: 'Campuses',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
        <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 1.5 0v9.918h3v-7.5a.75.75 0 0 1 1.5 0v7.5h4.5v-7.5a.75.75 0 0 1 1.5 0v7.5h3v-9.918a.75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
      </svg>
    )
  }
];

export default function LiquidNavbarMenu({ activeSection, onNavClick }) {
  return (
    <StyledWrapper>
      <div className="menu" role="navigation" aria-label="Primary Navigation">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${isActive ? 'active' : ''} ${item.isNora ? 'nora-item' : ''}`}
              onClick={(e) => onNavClick(e, item.id)}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  --glass-border: rgba(255, 255, 255, 0.22);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;

  .menu {
    position: relative;
    width: max-content;
    max-width: 100%;
    backdrop-filter: blur(14px) saturate(180%) contrast(200%);
    -webkit-backdrop-filter: blur(14px) saturate(180%) contrast(200%);
    background: rgba(0, 122, 255, 0.404);
    border: 1px solid var(--glass-border);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    padding: 6px 8px;
    border-radius: 99rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    z-index: 50;
    overflow: hidden; /* Fix: Guarantees active and hover content never leaks outside the border */
    box-sizing: border-box;
  }

  .menu::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow:
      inset 2px 2px 5px -2px rgba(255, 255, 255, 0.45),
      inset -2px -2px 5px 2px rgba(255, 255, 255, 0.45),
      inset 0 -2px 0 rgba(255, 255, 255, 0.2);
    pointer-events: none;
    z-index: 2;
  }

  .menu a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto; /* Fix: Give each item its natural width so text never collides or overflows */
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    padding: 6px 14px;
    border-radius: 999rem;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    transition:
      background 0.18s var(--ease-spring),
      color 0.18s var(--ease-spring),
      transform 0.18s var(--ease-spring),
      box-shadow 0.25s ease-in-out;
  }

  .menu a:hover {
    transition:
      background 0.18s var(--ease-spring),
      color 0.18s var(--ease-spring),
      transform 0.18s var(--ease-spring),
      box-shadow 0.25s ease-in-out;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow:
      inset 2px 2px 5px -2px rgba(255, 255, 255, 0.4),
      inset -2px -1px 5px 0 rgba(255, 255, 255, 0.4),
      inset 0 -2px 0 rgba(255, 255, 255, 0.2);
    transform: scale(1.02); /* Fix: scale cleanly without tilting corners out of border */
    color: #38bdf8;
  }

  .menu a.nora-item {
    color: #f3e8ff;
  }

  .menu a.nora-item:hover {
    color: #fae8ff;
  }

  .menu a svg {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }

  .menu a span {
    font-size: 0.72rem;
    font-weight: 600;
    line-height: 1.1;
    margin-top: 3px;
    white-space: nowrap;
    letter-spacing: -0.01em;
  }

  .menu a.active {
    background: rgb(237, 237, 237, 85%);
    color: #0066ff;
    font-weight: 700;
    box-shadow:
      inset 2px 2px 5px -2px rgba(255, 255, 255, 0.6),
      inset -2px -1px 5px 0 rgba(255, 255, 255, 0.4);
  }

  .menu a.nora-item.active {
    color: #9333ea;
    background: rgba(245, 235, 255, 0.95);
  }

  .menu a:active {
    transform: scale(0.97);
  }

  @media (max-width: 1200px) {
    .menu {
      padding: 5px 6px;
      gap: 2px;
    }
    .menu a {
      padding: 5px 10px;
    }
    .menu a span {
      font-size: 0.68rem;
    }
    .menu a svg {
      width: 1.15rem;
      height: 1.15rem;
    }
  }

  @media (max-width: 980px) {
    .menu a {
      padding: 4px 7px;
    }
    .menu a span {
      font-size: 0.65rem;
    }
    .menu a svg {
      width: 1.05rem;
      height: 1.05rem;
    }
  }
`;
