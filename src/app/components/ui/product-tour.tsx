import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { Badge } from './badge';

export interface TourStep {
  target: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  highlightClass?: string;
}

interface ProductTourProps {
  steps: TourStep[];
  onComplete?: () => void;
  onSkip?: () => void;
}

export function ProductTour({ steps, onComplete, onSkip }: ProductTourProps) {
  const { language } = useApp();
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [targetPosition, setTargetPosition] = useState<DOMRect | null>(null);

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  useEffect(() => {
    if (currentStepData && isVisible) {
      const targetElement = document.querySelector(currentStepData.target);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        setTargetPosition(rect);

        // Scroll into view
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });

        // Add highlight class
        if (currentStepData.highlightClass) {
          targetElement.classList.add(currentStepData.highlightClass);
        }
      }
    }

    // Cleanup
    return () => {
      if (currentStepData) {
        const targetElement = document.querySelector(currentStepData.target);
        if (targetElement && currentStepData.highlightClass) {
          targetElement.classList.remove(currentStepData.highlightClass);
        }
      }
    };
  }, [currentStep, currentStepData, isVisible]);

  const handleNext = () => {
    if (isLastStep) {
      handleComplete();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleComplete = () => {
    setIsVisible(false);
    onComplete?.();
  };

  const handleSkip = () => {
    setIsVisible(false);
    onSkip?.();
  };

  const getTooltipPosition = () => {
    if (!targetPosition) return {};

    const placement = currentStepData.placement || 'bottom';
    const offset = 20;
    const tooltipWidth = 400;
    const tooltipHeight = 200;

    switch (placement) {
      case 'top':
        return {
          top: targetPosition.top - tooltipHeight - offset,
          left: targetPosition.left + targetPosition.width / 2 - tooltipWidth / 2,
        };
      case 'bottom':
        return {
          top: targetPosition.bottom + offset,
          left: targetPosition.left + targetPosition.width / 2 - tooltipWidth / 2,
        };
      case 'left':
        return {
          top: targetPosition.top + targetPosition.height / 2 - tooltipHeight / 2,
          left: targetPosition.left - tooltipWidth - offset,
        };
      case 'right':
        return {
          top: targetPosition.top + targetPosition.height / 2 - tooltipHeight / 2,
          left: targetPosition.right + offset,
        };
      default:
        return {
          top: targetPosition.bottom + offset,
          left: targetPosition.left + targetPosition.width / 2 - tooltipWidth / 2,
        };
    }
  };

  const getHighlightStyle = () => {
    if (!targetPosition) return {};

    return {
      top: targetPosition.top - 8,
      left: targetPosition.left - 8,
      width: targetPosition.width + 16,
      height: targetPosition.height + 16,
    };
  };

  if (!isVisible || !currentStepData) return null;

  const tooltipPosition = getTooltipPosition();
  const highlightStyle = getHighlightStyle();

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-[9998] animate-in fade-in duration-300" />

      {/* Highlight */}
      {targetPosition && (
        <div
          className="fixed z-[9999] rounded-lg border-2 border-[#1890FF] shadow-[0_0_0_4px_rgba(24,144,255,0.2)] animate-in fade-in zoom-in-95 duration-300"
          style={highlightStyle}
        />
      )}

      {/* Tooltip */}
      <Card
        className="fixed z-[10000] w-[400px] max-w-[90vw] p-6 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300"
        style={tooltipPosition}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                {language === 'zh' ? currentStepData.title : currentStepData.titleEn}
              </h3>
              <Badge variant="outline" className="text-xs">
                {currentStep + 1} / {steps.length}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'zh' ? currentStepData.content : currentStepData.contentEn}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSkip}
            className="ml-2 flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex gap-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  index <= currentStep ? 'bg-[#1890FF]' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSkip}
            className="text-muted-foreground"
          >
            {language === 'zh' ? '跳过导览' : 'Skip Tour'}
          </Button>
          <div className="flex gap-2">
            {!isFirstStep && (
              <Button variant="outline" size="sm" onClick={handlePrevious}>
                <ChevronLeft className="w-4 h-4 mr-1" />
                {language === 'zh' ? '上一步' : 'Previous'}
              </Button>
            )}
            <Button size="sm" onClick={handleNext} className="bg-[#1890FF] hover:bg-[#1890FF]/90">
              {isLastStep ? (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  {language === 'zh' ? '完成' : 'Finish'}
                </>
              ) : (
                <>
                  {language === 'zh' ? '下一步' : 'Next'}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}

// Hook to manage tour state
export function useProductTour(tourKey: string) {
  const [shouldShowTour, setShouldShowTour] = useState(false);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem(`tour_completed_${tourKey}`);
    if (!hasSeenTour) {
      // Delay to ensure DOM is ready
      const timer = setTimeout(() => {
        setShouldShowTour(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [tourKey]);

  const completeTour = () => {
    localStorage.setItem(`tour_completed_${tourKey}`, 'true');
    setShouldShowTour(false);
  };

  const skipTour = () => {
    localStorage.setItem(`tour_completed_${tourKey}`, 'true');
    setShouldShowTour(false);
  };

  const resetTour = () => {
    localStorage.removeItem(`tour_completed_${tourKey}`);
    setShouldShowTour(true);
  };

  return {
    shouldShowTour,
    completeTour,
    skipTour,
    resetTour,
  };
}

// Predefined tour steps for different pages
export const dashboardTourSteps: TourStep[] = [
  {
    target: '[data-tour="welcome"]',
    title: '欢迎使用问视间',
    titleEn: 'Welcome to SuperInsight',
    content: '这是您的数据标注管理中心，您可以在这里查看所有重要的统计信息和快速访问常用功能。',
    contentEn:
      'This is your data annotation management center where you can view all important statistics and quickly access common features.',
    placement: 'bottom',
    highlightClass: 'tour-highlight',
  },
  {
    target: '[data-tour="stats"]',
    title: '数据统计概览',
    titleEn: 'Data Statistics Overview',
    content: '这里展示了您的关键指标，包括任务总数、完成率、团队成员和数据量。',
    contentEn:
      'Key metrics are displayed here, including total tasks, completion rate, team members, and data volume.',
    placement: 'bottom',
    highlightClass: 'tour-highlight',
  },
  {
    target: '[data-tour="quick-actions"]',
    title: '快速操作',
    titleEn: 'Quick Actions',
    content: '使用这些快捷按钮快速创建新任务、上传数据或查看报告。',
    contentEn: 'Use these quick buttons to create new tasks, upload data, or view reports.',
    placement: 'left',
    highlightClass: 'tour-highlight',
  },
  {
    target: '[data-tour="recent-tasks"]',
    title: '最近任务',
    titleEn: 'Recent Tasks',
    content: '在这里可以查看最近的标注任务和它们的状态。点击任务可以查看详细信息。',
    contentEn:
      'View recent annotation tasks and their status here. Click on a task to see details.',
    placement: 'top',
    highlightClass: 'tour-highlight',
  },
];

export const aiAnnotationTourSteps: TourStep[] = [
  {
    target: '[data-tour="ai-annotation-tabs"]',
    title: 'AI 标注功能模块',
    titleEn: 'AI Annotation Modules',
    content: 'AI 标注包含三大功能：任务列表、模型管理和标注模板。',
    contentEn: 'AI Annotation includes three modules: Task List, Model Management, and Templates.',
    placement: 'bottom',
    highlightClass: 'tour-highlight',
  },
  {
    target: '[data-tour="task-table"]',
    title: '任务列表',
    titleEn: 'Task List',
    content: '在这里查看和管理所有 AI 标注任务，包括进度、准确率和状态。',
    contentEn: 'View and manage all AI annotation tasks here, including progress, accuracy, and status.',
    placement: 'top',
    highlightClass: 'tour-highlight',
  },
  {
    target: '[data-tour="new-task-button"]',
    title: '创建新任务',
    titleEn: 'Create New Task',
    content: '点击这里创建新的 AI 标注任务，选择模型并配置参数。',
    contentEn: 'Click here to create a new AI annotation task, select a model, and configure parameters.',
    placement: 'left',
    highlightClass: 'tour-highlight',
  },
];

export const augmentationTourSteps: TourStep[] = [
  {
    target: '[data-tour="augmentation-stats"]',
    title: '数据增强统计',
    titleEn: 'Augmentation Statistics',
    content: '查看您的原始样本数量、增强样本数量和成功率等关键指标。',
    contentEn: 'View key metrics like original samples, augmented samples, and success rate.',
    placement: 'bottom',
    highlightClass: 'tour-highlight',
  },
  {
    target: '[data-tour="augmentation-config"]',
    title: '增强配置',
    titleEn: 'Augmentation Configuration',
    content: '切换到配置标签页，选择增强方法并调整强度参数。',
    contentEn: 'Switch to the configuration tab to select augmentation methods and adjust intensity parameters.',
    placement: 'bottom',
    highlightClass: 'tour-highlight',
  },
  {
    target: '[data-tour="augmentation-methods"]',
    title: '增强方法',
    titleEn: 'Augmentation Methods',
    content: '我们提供 6 种数据增强方法：旋转、翻转、裁剪、亮度、对比度和缩放。',
    contentEn: 'We provide 6 augmentation methods: rotation, flip, crop, brightness, contrast, and zoom.',
    placement: 'top',
    highlightClass: 'tour-highlight',
  },
];
