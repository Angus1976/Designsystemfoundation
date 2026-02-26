import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';

interface Action {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'outline' | 'ghost';
  icon?: React.ReactNode;
}

interface EmptyStateEnhancedProps {
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  customIcon?: React.ReactNode;
  title: string;
  description: string;
  actions?: Action[];
  illustration?: 'search' | 'data' | 'task' | 'file' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  showCard?: boolean;
  className?: string;
}

export function EmptyStateEnhanced({
  icon: Icon,
  customIcon,
  title,
  description,
  actions,
  illustration,
  size = 'md',
  showCard = false,
  className = '',
}: EmptyStateEnhancedProps) {
  const sizes = {
    sm: {
      icon: 'w-12 h-12',
      title: 'text-base',
      description: 'text-sm',
      spacing: 'space-y-3',
    },
    md: {
      icon: 'w-16 h-16',
      title: 'text-lg',
      description: 'text-sm',
      spacing: 'space-y-4',
    },
    lg: {
      icon: 'w-24 h-24',
      title: 'text-xl',
      description: 'text-base',
      spacing: 'space-y-6',
    },
  };

  const sizeConfig = sizes[size];

  const renderIllustration = () => {
    if (customIcon) return customIcon;
    
    if (Icon) {
      return (
        <div className={`mx-auto ${sizeConfig.icon} rounded-2xl bg-muted flex items-center justify-center mb-4`}>
          <Icon className={`${size === 'lg' ? 'w-12 h-12' : size === 'md' ? 'w-8 h-8' : 'w-6 h-6'} text-muted-foreground`} />
        </div>
      );
    }

    // SVG illustrations for different types
    switch (illustration) {
      case 'search':
        return (
          <div className="mb-6">
            <svg
              className={`${sizeConfig.icon} mx-auto text-muted-foreground opacity-50`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        );
      
      case 'data':
        return (
          <div className="mb-6">
            <svg
              className={`${sizeConfig.icon} mx-auto text-muted-foreground opacity-50`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
        );
      
      case 'task':
        return (
          <div className="mb-6">
            <svg
              className={`${sizeConfig.icon} mx-auto text-muted-foreground opacity-50`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
        );
      
      case 'file':
        return (
          <div className="mb-6">
            <svg
              className={`${sizeConfig.icon} mx-auto text-muted-foreground opacity-50`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
        );
      
      default:
        return null;
    }
  };

  const content = (
    <div className={`text-center ${sizeConfig.spacing} ${className}`}>
      {renderIllustration()}
      
      <div>
        <h3 className={`font-semibold text-foreground ${sizeConfig.title} mb-2`}>
          {title}
        </h3>
        <p className={`text-muted-foreground ${sizeConfig.description} max-w-md mx-auto`}>
          {description}
        </p>
      </div>

      {actions && actions.length > 0 && (
        <div className="flex flex-wrap gap-3 justify-center">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || 'default'}
              onClick={action.onClick}
              className={index === 0 ? 'bg-[#1890FF] hover:bg-[#1890FF]/90' : ''}
            >
              {action.icon}
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );

  if (showCard) {
    return (
      <Card className="p-12">
        {content}
      </Card>
    );
  }

  return content;
}

// Specialized empty states
interface NoDataProps {
  title?: string;
  description?: string;
  onAction?: () => void;
  actionLabel?: string;
}

export function NoDataFound({ title, description, onAction, actionLabel }: NoDataProps) {
  return (
    <EmptyStateEnhanced
      illustration="data"
      title={title || '暂无数据'}
      description={description || '当前没有可显示的数据，请稍后再试或添加新数据。'}
      actions={
        onAction
          ? [
              {
                label: actionLabel || '添加数据',
                onClick: onAction,
              },
            ]
          : undefined
      }
      size="md"
    />
  );
}

export function NoSearchResults({ query, onClear }: { query: string; onClear?: () => void }) {
  return (
    <EmptyStateEnhanced
      illustration="search"
      title="未找到结果"
      description={`没有找到与"${query}"相关的结果，请尝试其他关键词。`}
      actions={
        onClear
          ? [
              {
                label: '清除搜索',
                onClick: onClear,
                variant: 'outline',
              },
            ]
          : undefined
      }
      size="md"
    />
  );
}

export function NoTasksYet({ onCreate }: { onCreate?: () => void }) {
  return (
    <EmptyStateEnhanced
      illustration="task"
      title="还没有任务"
      description="创建您的第一个标注任务，开始数据标注工作。"
      actions={
        onCreate
          ? [
              {
                label: '创建任务',
                onClick: onCreate,
                icon: <span className="mr-2">+</span>,
              },
            ]
          : undefined
      }
      size="lg"
      showCard
    />
  );
}

export function NoFilesUploaded({ onUpload }: { onUpload?: () => void }) {
  return (
    <EmptyStateEnhanced
      illustration="file"
      title="还没有文件"
      description="上传文件以开始使用数据标注功能。支持多种格式的文件。"
      actions={
        onUpload
          ? [
              {
                label: '上传文件',
                onClick: onUpload,
              },
              {
                label: '了解更多',
                onClick: () => {},
                variant: 'outline',
              },
            ]
          : undefined
      }
      size="lg"
      showCard
    />
  );
}
