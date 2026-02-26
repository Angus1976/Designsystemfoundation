import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  showSubtitle?: boolean;
}

export function Logo({ className = '', variant = 'full', showSubtitle = true }: LogoProps) {
  const LogoIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={variant === 'icon' ? className : ''}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1890FF" />
          <stop offset="50%" stopColor="#40A9FF" />
          <stop offset="100%" stopColor="#722ED1" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Background Circle with gradient */}
      <circle cx="16" cy="16" r="16" fill="url(#logo-gradient)" />
      
      {/* Data Flow Lines - representing data streams */}
      <path
        d="M7 9 Q10 11, 13 9 T19 9 T25 9"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      
      {/* Central "W" Shape - representing "Wins" and data annotation */}
      <path
        d="M9 13 L11.5 21 L16 15.5 L20.5 21 L23 13"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#shadow)"
      />
      
      {/* Annotation indicator - tag/label icon */}
      <g filter="url(#shadow)">
        <circle cx="24.5" cy="22.5" r="3" fill="#52C41A" />
        <circle cx="24.5" cy="22.5" r="2" fill="white" opacity="0.3" />
      </g>
      
      {/* Structured data line */}
      <path
        d="M7 23 L16 23"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="7" cy="23" r="1.5" fill="white" opacity="0.6" />
    </svg>
  );

  if (variant === 'icon') {
    return <LogoIcon />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon />
      <div className="flex flex-col">
        <span className="font-semibold text-foreground text-base leading-tight">
          问视间
        </span>
        {showSubtitle && (
          <span className="text-xs text-muted-foreground leading-tight">
            SuperInsight
          </span>
        )}
      </div>
    </div>
  );
}

// Alternative simplified icon version for collapsed sidebar
export function LogoIconSimple({ className = '' }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-gradient-simple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1890FF" />
          <stop offset="50%" stopColor="#40A9FF" />
          <stop offset="100%" stopColor="#722ED1" />
        </linearGradient>
      </defs>
      
      {/* Background with rounded corners */}
      <rect width="32" height="32" rx="8" fill="url(#logo-gradient-simple)" />
      
      {/* Simplified "W" with data elements */}
      <path
        d="M8 11 L10.5 21 L16 13.5 L21.5 21 L24 11"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Data flow line */}
      <path
        d="M7 9 Q10 10.5, 13 9 T19 9 T25 9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      
      {/* Annotation dot indicator */}
      <circle cx="25" cy="24" r="2.5" fill="#52C41A" />
      <circle cx="25" cy="24" r="1.5" fill="white" opacity="0.4" />
    </svg>
  );
}