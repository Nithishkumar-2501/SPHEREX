import React from 'react';

export default function LogoIcon({ className = 'h-8 w-8 text-white', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16H8Z"
        fill="currentColor"
      />
      <circle cx="12.5" cy="18.5" r="1.25" fill="#000" />
      <circle cx="16" cy="20.5" r="1.25" fill="#000" />
      <circle cx="19.5" cy="18.5" r="1.25" fill="#000" />
    </svg>
  );
}
