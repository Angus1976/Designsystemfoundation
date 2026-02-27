import React, { useId } from 'react';
import { cn } from '@/lib/utils'; // Assuming this exists, or I will use standard class concatenation

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'primary' | 'monochrome' | 'white' | 'dark-tech';
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  variant = 'primary', 
  animated = false,
  ...props 
}) => {
  const idPrefix = useId();
  
  // Refined Color Palette for "SuperInsight" (AI/Data)
  // Primary: Deep Tech Blue / Indigo
  // Accent: Electric Cyan / Sky Blue
  
  const isMonochrome = variant === 'monochrome';
  const isWhite = variant === 'white';
  const isDarkTech = variant === 'dark-tech';

  // Gradient definitions based on variant
  const wGradientStops = isMonochrome ? (
    <>
      <stop offset="0%" stopColor="#000" />
      <stop offset="100%" stopColor="#000" />
    </>
  ) : isWhite ? (
    <>
      <stop offset="0%" stopColor="#FFF" />
      <stop offset="100%" stopColor="#FFF" />
    </>
  ) : isDarkTech ? (
    <>
      <stop offset="0%" stopColor="#4F46E5" /> {/* Indigo 600 */}
      <stop offset="50%" stopColor="#6366F1" /> {/* Indigo 500 */}
      <stop offset="100%" stopColor="#818CF8" /> {/* Indigo 400 */}
    </>
  ) : (
    // Primary Professional Business Blue-Grey-Metallic
    <>
      <stop offset="0%" stopColor="#1e293b" />   {/* Slate 800 */}
      <stop offset="30%" stopColor="#334155" />   {/* Slate 700 */}
      <stop offset="60%" stopColor="#475569" />   {/* Slate 600 */}
      <stop offset="100%" stopColor="#64748b" />  {/* Slate 500 */}
    </>
  );

  const sphereGradientStops = isMonochrome ? (
    <>
      <stop offset="0%" stopColor="#000" />
      <stop offset="100%" stopColor="#000" />
    </>
  ) : isWhite ? (
    <>
      <stop offset="0%" stopColor="#FFF" />
      <stop offset="100%" stopColor="#FFF" />
    </>
  ) : (
    // Vibrant AI/Insight Cyan-Blue
    <>
      <stop offset="0%" stopColor="#bae6fd" /> {/* Sky 200 */}
      <stop offset="30%" stopColor="#38bdf8" /> {/* Sky 400 */}
      <stop offset="70%" stopColor="#0284c7" /> {/* Sky 600 */}
      <stop offset="100%" stopColor="#0369a1" /> {/* Sky 700 */}
    </>
  );

  // Micro-adjustments:
  // Original Sphere: cx="85" cy="12" r="8".
  // Original W Top-Right Flat: y=20.
  // Adjustment: Move sphere up slightly to cy="10" to create a 2px gap (Visual breathing room).
  // Adjustment: Keep r="8" for impact.
  
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id={`${idPrefix}-wGradient`} x1="0%" y1="0%" x2="0%" y2="100%">
          {wGradientStops}
        </linearGradient>

        <radialGradient id={`${idPrefix}-sphereGradient`} cx="30%" cy="30%" r="70%">
          {sphereGradientStops}
        </radialGradient>
        
        {/* Subtle inner shadow for depth on the W */}
        <filter id={`${idPrefix}-innerShadow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feFlood floodColor="#000" floodOpacity="0.3" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glow for the AI sphere */}
        <filter id={`${idPrefix}-glow`} x="-50%" y="-50%" width="200%" height="200%">
           <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
           <feMerge>
               <feMergeNode in="coloredBlur" />
               <feMergeNode in="SourceGraphic" />
           </feMerge>
        </filter>
        
        {/* Metallic Shine for W (Primary only) */}
        {!isMonochrome && !isWhite && (
           <linearGradient id={`${idPrefix}-metalShine`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="40%" stopColor="white" stopOpacity="0" />
              <stop offset="60%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0.1" />
           </linearGradient>
        )}
      </defs>

      {/* Main W Shape - Strictly maintained path data */}
      {/* M10,35 L20,35 L35,80 L45,50 L55,50 L65,80 L80,20 L90,20 L70,95 L60,95 L50,65 L40,95 L30,95 Z */}
      <path 
        d="M10,35 L20,35 L35,80 L45,50 L55,50 L65,80 L80,20 L90,20 L70,95 L60,95 L50,65 L40,95 L30,95 Z" 
        fill={`url(#${idPrefix}-wGradient)`}
        filter={!isMonochrome && !isWhite ? `url(#${idPrefix}-innerShadow)` : undefined}
      />
      
      {/* W Metallic Shine Overlay */}
      {!isMonochrome && !isWhite && (
        <path 
          d="M10,35 L20,35 L35,80 L45,50 L55,50 L65,80 L80,20 L90,20 L70,95 L60,95 L50,65 L40,95 L30,95 Z" 
          fill={`url(#${idPrefix}-metalShine)`}
          style={{ mixBlendMode: 'overlay' }}
        />
      )}

      {/* Sphere (The Insight/Dot) */}
      {/* Adjusted cy from 12 to 10 for better separation from the W */}
      <circle 
        cx="85" 
        cy="10" 
        r="8" 
        fill={`url(#${idPrefix}-sphereGradient)`}
        filter={(!isMonochrome && !isWhite) ? `url(#${idPrefix}-glow)` : undefined}
      />
      
      {/* Sphere Highlights (Glossy effect) - Only for color versions */}
      {!isMonochrome && !isWhite && (
        <>
          <ellipse cx="82.5" cy="7.5" rx="3.5" ry="2.5" fill="white" fillOpacity="0.6" transform="rotate(-15 82.5 7.5)" />
          <circle cx="81.5" cy="7" r="1" fill="white" fillOpacity="0.9" />
        </>
      )}
    </svg>
  );
};

export default Logo;
