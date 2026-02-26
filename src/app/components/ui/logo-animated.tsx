import React from 'react';

interface LogoAnimatedProps {
  className?: string;
  size?: number;
}

/**
 * Animated Logo Component with loading animation
 * 带加载动画的 Logo 组件
 */
export function LogoAnimated({ className = '', size = 64 }: LogoAnimatedProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin-slow"
        style={{ animationDuration: '3s' }}
      >
        <defs>
          <linearGradient id="logo-gradient-animated" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1890FF" />
            <stop offset="50%" stopColor="#40A9FF" />
            <stop offset="100%" stopColor="#722ED1" />
          </linearGradient>
        </defs>
        
        {/* Outer Circle */}
        <circle 
          cx="32" 
          cy="32" 
          r="30" 
          stroke="url(#logo-gradient-animated)" 
          strokeWidth="2"
          fill="none"
          strokeDasharray="188"
          strokeDashoffset="0"
          className="animate-dash"
        />
      </svg>
      
      {/* Center Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width={size * 0.6}
          height={size * 0.6}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logo-gradient-center" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1890FF" />
              <stop offset="50%" stopColor="#40A9FF" />
              <stop offset="100%" stopColor="#722ED1" />
            </linearGradient>
            <linearGradient id="tag-gradient-center" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#52C41A" />
              <stop offset="100%" stopColor="#73D13D" />
            </linearGradient>
          </defs>
          
          {/* Background Circle */}
          <circle cx="16" cy="16" r="15.5" fill="url(#logo-gradient-center)" />
          
          {/* Data Grid Background */}
          <g opacity="0.15">
            <line x1="8" y1="10" x2="24" y2="10" stroke="white" strokeWidth="0.5" />
            <line x1="8" y1="14" x2="24" y2="14" stroke="white" strokeWidth="0.5" />
            <line x1="8" y1="18" x2="24" y2="18" stroke="white" strokeWidth="0.5" />
            <line x1="8" y1="22" x2="24" y2="22" stroke="white" strokeWidth="0.5" />
            <line x1="12" y1="8" x2="12" y2="24" stroke="white" strokeWidth="0.5" />
            <line x1="16" y1="8" x2="16" y2="24" stroke="white" strokeWidth="0.5" />
            <line x1="20" y1="8" x2="20" y2="24" stroke="white" strokeWidth="0.5" />
          </g>
          
          {/* W Shape */}
          <path
            d="M8.5 12 L11 21 L16 14.5 L21 21 L23.5 12"
            stroke="white"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="animate-draw-path"
          />
          
          {/* Data points */}
          <circle cx="11" cy="21" r="1.2" fill="white" opacity="0.9" className="animate-pulse-slow" />
          <circle cx="16" cy="14.5" r="1.2" fill="white" opacity="0.9" className="animate-pulse-slow" style={{ animationDelay: '0.3s' }} />
          <circle cx="21" cy="21" r="1.2" fill="white" opacity="0.9" className="animate-pulse-slow" style={{ animationDelay: '0.6s' }} />
          
          {/* Annotation Tag */}
          <g transform="translate(21, 6)" className="animate-float">
            <path
              d="M0 0 L6 0 L6 4 L3 7 L0 4 Z"
              fill="url(#tag-gradient-center)"
            />
            <circle cx="3.5" cy="2" r="0.8" fill="white" opacity="0.9" />
          </g>
          
          {/* Data flow curves */}
          <path
            d="M6 24 Q8 22, 10 24"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.4"
            className="animate-draw-path-delayed"
          />
          <path
            d="M13 25 Q15 23.5, 17 25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.4"
            className="animate-draw-path-delayed"
            style={{ animationDelay: '0.2s' }}
          />
          <path
            d="M20 24 Q22 22, 24 24"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.4"
            className="animate-draw-path-delayed"
            style={{ animationDelay: '0.4s' }}
          />
          
          {/* AI indicator dot */}
          <circle 
            cx="25.5" 
            cy="25.5" 
            r="2.5" 
            fill="#52C41A"
            opacity="0.3"
            className="animate-pulse"
          />
          <circle 
            cx="25.5" 
            cy="25.5" 
            r="1.8" 
            fill="#52C41A"
            className="animate-pulse"
          />
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 188;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes draw-path {
          0% {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.9;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }
        
        .animate-dash {
          animation: dash 2s ease-in-out infinite;
        }
        
        .animate-draw-path {
          animation: draw-path 2s ease-in-out infinite;
        }
        
        .animate-draw-path-delayed {
          animation: draw-path 2s ease-in-out 0.3s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

/**
 * Simple pulse loading animation
 * 简单的脉冲加载动画
 */
export function LogoPulse({ className = '', size = 48 }: LogoAnimatedProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse"
      >
        <defs>
          <linearGradient id="logo-gradient-pulse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1890FF" />
            <stop offset="50%" stopColor="#40A9FF" />
            <stop offset="100%" stopColor="#722ED1" />
          </linearGradient>
          <linearGradient id="tag-gradient-pulse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#52C41A" />
            <stop offset="100%" stopColor="#73D13D" />
          </linearGradient>
        </defs>
        
        <circle cx="16" cy="16" r="15.5" fill="url(#logo-gradient-pulse)" />
        
        {/* Data Grid */}
        <g opacity="0.15">
          <line x1="8" y1="10" x2="24" y2="10" stroke="white" strokeWidth="0.5" />
          <line x1="8" y1="14" x2="24" y2="14" stroke="white" strokeWidth="0.5" />
          <line x1="8" y1="18" x2="24" y2="18" stroke="white" strokeWidth="0.5" />
          <line x1="8" y1="22" x2="24" y2="22" stroke="white" strokeWidth="0.5" />
          <line x1="12" y1="8" x2="12" y2="24" stroke="white" strokeWidth="0.5" />
          <line x1="16" y1="8" x2="16" y2="24" stroke="white" strokeWidth="0.5" />
          <line x1="20" y1="8" x2="20" y2="24" stroke="white" strokeWidth="0.5" />
        </g>
        
        <path
          d="M8.5 12 L11 21 L16 14.5 L21 21 L23.5 12"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Data points */}
        <circle cx="11" cy="21" r="1.2" fill="white" opacity="0.9" />
        <circle cx="16" cy="14.5" r="1.2" fill="white" opacity="0.9" />
        <circle cx="21" cy="21" r="1.2" fill="white" opacity="0.9" />
        
        {/* Annotation Tag */}
        <g transform="translate(21, 6)">
          <path
            d="M0 0 L6 0 L6 4 L3 7 L0 4 Z"
            fill="url(#tag-gradient-pulse)"
          />
          <circle cx="3.5" cy="2" r="0.8" fill="white" opacity="0.9" />
        </g>
        
        {/* Data flow curves */}
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
        
        <circle cx="25.5" cy="25.5" r="2.5" fill="#52C41A" opacity="0.3" />
        <circle cx="25.5" cy="25.5" r="1.8" fill="#52C41A" />
      </svg>
    </div>
  );
}