import React from 'react';
import { LogoAnimated, LogoPulse } from './logo-animated';

interface LoadingProps {
  fullScreen?: boolean;
  message?: string;
  variant?: 'animated' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
}

export function Loading({ 
  fullScreen = false, 
  message,
  variant = 'animated',
  size = 'md'
}: LoadingProps) {
  const sizeMap = {
    sm: 32,
    md: 64,
    lg: 96
  };
  
  const logoSize = sizeMap[size];
  
  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      {variant === 'animated' ? (
        <LogoAnimated size={logoSize} />
      ) : (
        <LogoPulse size={logoSize} />
      )}
      
      {message && (
        <p className="text-muted-foreground text-sm animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
        {content}
      </div>
    );
  }
  
  return content;
}

/**
 * Inline loading spinner
 */
export function LoadingSpinner({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <div className={`inline-block ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
      >
        <defs>
          <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1890FF" />
            <stop offset="100%" stopColor="#722ED1" />
          </linearGradient>
        </defs>
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="url(#spinner-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="60"
          strokeDashoffset="20"
        />
      </svg>
    </div>
  );
}
