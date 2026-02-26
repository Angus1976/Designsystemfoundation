import React from 'react';
import { HelpCircle } from 'lucide-react';

interface HelpIconProps {
  className?: string;
  onClick?: () => void;
}

export function HelpIcon({ className = '', onClick }: HelpIconProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center w-6 h-6 rounded-full border border-border text-muted-foreground hover:text-[#1890FF] hover:border-[#1890FF] transition-colors ${className}`}
      aria-label="Help"
    >
      <HelpCircle className="w-4 h-4" />
    </button>
  );
}
