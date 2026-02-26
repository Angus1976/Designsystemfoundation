import React from 'react';
import { Loader2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface InlineSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  text?: string;
  textEn?: string;
  className?: string;
}

export function InlineSpinner({
  size = 'md',
  showText = true,
  text = '加载中...',
  textEn = 'Loading...',
  className = '',
}: InlineSpinnerProps) {
  const { language } = useApp();

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-[#1890FF]`} />
      {showText && (
        <span className={`${textSizeClasses[size]} text-muted-foreground`}>
          {language === 'zh' ? text : textEn}
        </span>
      )}
    </div>
  );
}
