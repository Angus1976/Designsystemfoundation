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
          </defs>
          
          {/* Background Circle */}
          <circle cx="16" cy="16" r="16" fill="url(#logo-gradient-center)" />
          
          {/* W Shape */}
          <path
            d="M9 13 L11.5 21 L16 15.5 L20.5 21 L23 13"
            stroke="white"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="animate-draw-path"
          />
          
          {/* Data flow */}
          <path
            d="M7 9 Q10 11, 13 9 T19 9 T25 9"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
            className="animate-draw-path-delayed"
          />
          
          {/* Annotation dot */}
          <circle 
            cx="24.5" 
            cy="22.5" 
            r="3" 
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
        </defs>
        
        <circle cx="16" cy="16" r="16" fill="url(#logo-gradient-pulse)" />
        
        <path
          d="M9 13 L11.5 21 L16 15.5 L20.5 21 L23 13"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        <path
          d="M7 9 Q10 11, 13 9 T19 9 T25 9"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        
        <circle cx="24.5" cy="22.5" r="3" fill="#52C41A" />
      </svg>
    </div>
  );
}
