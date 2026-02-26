import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export interface TourStep {
  target: string; // CSS selector
  title: string;
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  disableBeacon?: boolean;
}

interface TourProps {
  steps: TourStep[];
  run: boolean;
  onComplete: () => void;
  onSkip: () => void;
}

/**
 * Product Tour Component
 * 产品引导组件
 */
export function Tour({ steps, run, onComplete, onSkip }: TourProps) {
  const { language } = useApp();
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!run || steps.length === 0) return;

    const updatePosition = () => {
      const step = steps[currentStep];
      const element = document.querySelector(step.target);
      
      if (element) {
        const rect = element.getBoundingClientRect();
        const placement = step.placement || 'bottom';
        
        let top = 0;
        let left = 0;
        
        switch (placement) {
          case 'top':
            top = rect.top - 20;
            left = rect.left + rect.width / 2;
            break;
          case 'bottom':
            top = rect.bottom + 20;
            left = rect.left + rect.width / 2;
            break;
          case 'left':
            top = rect.top + rect.height / 2;
            left = rect.left - 20;
            break;
          case 'right':
            top = rect.top + rect.height / 2;
            left = rect.right + 20;
            break;
        }
        
        setPosition({ top, left });
        
        // Highlight element
        element.classList.add('tour-highlight');
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
      
      // Remove highlight from all elements
      document.querySelectorAll('.tour-highlight').forEach(el => {
        el.classList.remove('tour-highlight');
      });
    };
  }, [currentStep, steps, run]);

  if (!run || steps.length === 0) return null;

  const step = steps[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLast) {
      onComplete();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirst) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40 animate-fade-in" onClick={onSkip} />

      {/* Tour Card */}
      <div
        className="fixed z-50 bg-card border border-border rounded-lg shadow-lg p-6 max-w-sm animate-fade-in-up"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          transform: 'translate(-50%, 0)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onSkip}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {step.content}
            </p>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  index === currentStep
                    ? 'bg-primary'
                    : index < currentStep
                    ? 'bg-primary/50'
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              {currentStep + 1} / {steps.length}
            </div>

            <div className="flex gap-2">
              {!isFirst && (
                <Button variant="outline" size="sm" onClick={handlePrevious}>
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {language === 'zh' ? '上一步' : 'Previous'}
                </Button>
              )}
              
              <Button size="sm" onClick={handleNext}>
                {isLast 
                  ? (language === 'zh' ? '完成' : 'Finish')
                  : (language === 'zh' ? '下一步' : 'Next')
                }
                {!isLast && <ChevronRight className="w-4 h-4 ml-1" />}
              </Button>
            </div>
          </div>

          {/* Skip */}
          <button
            onClick={onSkip}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors w-full text-center"
          >
            {language === 'zh' ? '跳过引导' : 'Skip tour'}
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .tour-highlight {
          position: relative;
          z-index: 41;
          box-shadow: 0 0 0 4px rgba(24, 144, 255, 0.4), 0 0 0 9999px rgba(0, 0, 0, 0.5);
          border-radius: 4px;
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 4px rgba(24, 144, 255, 0.4), 0 0 0 9999px rgba(0, 0, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(24, 144, 255, 0.2), 0 0 0 9999px rgba(0, 0, 0, 0.5);
          }
        }
      `}</style>
    </>
  );
}

/**
 * Hook for managing tour state
 */
export function useTour(tourKey: string) {
  const [run, setRun] = useState(false);

  useEffect(() => {
    // Check if tour has been completed
    const completed = localStorage.getItem(`tour_completed_${tourKey}`);
    if (!completed) {
      setRun(true);
    }
  }, [tourKey]);

  const completeTour = () => {
    localStorage.setItem(`tour_completed_${tourKey}`, 'true');
    setRun(false);
  };

  const skipTour = () => {
    localStorage.setItem(`tour_completed_${tourKey}`, 'true');
    setRun(false);
  };

  const resetTour = () => {
    localStorage.removeItem(`tour_completed_${tourKey}`);
    setRun(true);
  };

  return { run, completeTour, skipTour, resetTour, setRun };
}
