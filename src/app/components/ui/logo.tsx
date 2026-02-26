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
        <linearGradient id="logo-gradient-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#52C41A" />
          <stop offset="100%" stopColor="#73D13D" />
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
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background Circle with gradient */}
      <circle cx="16" cy="16" r="15.5" fill="url(#logo-gradient)" />
      
      {/* Data Grid Background - representing structured data */}
      <g opacity="0.15">
        <line x1="8" y1="10" x2="24" y2="10" stroke="white" strokeWidth="0.5" />
        <line x1="8" y1="14" x2="24" y2="14" stroke="white" strokeWidth="0.5" />
        <line x1="8" y1="18" x2="24" y2="18" stroke="white" strokeWidth="0.5" />
        <line x1="8" y1="22" x2="24" y2="22" stroke="white" strokeWidth="0.5" />
        <line x1="12" y1="8" x2="12" y2="24" stroke="white" strokeWidth="0.5" />
        <line x1="16" y1="8" x2="16" y2="24" stroke="white" strokeWidth="0.5" />
        <line x1="20" y1="8" x2="20" y2="24" stroke="white" strokeWidth="0.5" />
      </g>
      
      {/* Central "W" Shape - representing "Wins/问视间" with enhanced design */}
      <path
        d="M8.5 12 L11 21 L16 14.5 L21 21 L23.5 12"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#shadow)"
      />
      
      {/* Data points on the W - representing annotation targets */}
      <g filter="url(#glow)">
        <circle cx="11" cy="21" r="1.2" fill="white" opacity="0.9" />
        <circle cx="16" cy="14.5" r="1.2" fill="white" opacity="0.9" />
        <circle cx="21" cy="21" r="1.2" fill="white" opacity="0.9" />
      </g>
      
      {/* Annotation Tag Icon - top right corner */}
      <g transform="translate(21, 6)">
        <path
          d="M0 0 L6 0 L6 4 L3 7 L0 4 Z"
          fill="url(#logo-gradient-accent)"
          filter="url(#shadow)"
        />
        <circle cx="3.5" cy="2" r="0.8" fill="white" opacity="0.9" />
        <line x1="3" y1="4" x2="3" y2="5.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.8" />
      </g>
      
      {/* Data flow curves - representing data processing */}
      <path
        d="M6 24 Q8 22, 10 24"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M13 25 Q15 23.5, 17 25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M20 24 Q22 22, 24 24"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      
      {/* AI indicator dot with pulse effect */}
      <g filter="url(#glow)">
        <circle cx="25.5" cy="25.5" r="2.5" fill="#52C41A" opacity="0.3" />
        <circle cx="25.5" cy="25.5" r="1.8" fill="#52C41A" />
        <circle cx="25.5" cy="25.5" r="0.8" fill="white" opacity="0.6" />
      </g>
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
        <linearGradient id="tag-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#52C41A" />
          <stop offset="100%" stopColor="#73D13D" />
        </linearGradient>
      </defs>
      
      {/* Background with rounded corners */}
      <rect width="32" height="32" rx="8" fill="url(#logo-gradient-simple)" />
      
      {/* Data Grid Background */}
      <g opacity="0.12">
        <line x1="8" y1="10" x2="24" y2="10" stroke="white" strokeWidth="0.5" />
        <line x1="8" y1="14" x2="24" y2="14" stroke="white" strokeWidth="0.5" />
        <line x1="8" y1="18" x2="24" y2="18" stroke="white" strokeWidth="0.5" />
        <line x1="8" y1="22" x2="24" y2="22" stroke="white" strokeWidth="0.5" />
        <line x1="12" y1="8" x2="12" y2="24" stroke="white" strokeWidth="0.5" />
        <line x1="16" y1="8" x2="16" y2="24" stroke="white" strokeWidth="0.5" />
        <line x1="20" y1="8" x2="20" y2="24" stroke="white" strokeWidth="0.5" />
      </g>
      
      {/* Simplified "W" with data elements */}
      <path
        d="M8 11 L10.5 21 L16 13.5 L21.5 21 L24 11"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Data points */}
      <circle cx="10.5" cy="21" r="1.2" fill="white" opacity="0.9" />
      <circle cx="16" cy="13.5" r="1.2" fill="white" opacity="0.9" />
      <circle cx="21.5" cy="21" r="1.2" fill="white" opacity="0.9" />
      
      {/* Annotation tag indicator */}
      <g transform="translate(22, 7)">
        <path
          d="M0 0 L5 0 L5 3 L2.5 5.5 L0 3 Z"
          fill="url(#tag-gradient)"
        />
        <circle cx="2.8" cy="1.5" r="0.6" fill="white" opacity="0.9" />
      </g>
      
      {/* AI indicator dot */}
      <circle cx="26" cy="26" r="2.5" fill="#52C41A" />
      <circle cx="26" cy="26" r="1.2" fill="white" opacity="0.5" />
    </svg>
  );
}