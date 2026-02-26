import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface HelpPopoverProps {
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  learnMoreLink?: string;
  onClose: () => void;
  position?: { top: number; left: number };
}

export function HelpPopover({
  title,
  titleEn,
  description,
  descriptionEn,
  learnMoreLink,
  onClose,
  position = { top: 0, left: 0 },
}: HelpPopoverProps) {
  const { language } = useApp();

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Popover */}
      <div
        className="fixed z-50 w-80 max-w-[320px] bg-card border border-border rounded-lg shadow-lg p-4 animate-scale-in"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-sm">
            {language === 'zh' ? title : (titleEn || title)}
          </h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground -mt-1 -mr-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3">
          {language === 'zh' ? description : (descriptionEn || description)}
        </p>
        
        {learnMoreLink && (
          <a
            href={learnMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-[#1890FF] hover:underline"
          >
            {language === 'zh' ? '了解更多' : 'Learn More'}
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </>
  );
}
