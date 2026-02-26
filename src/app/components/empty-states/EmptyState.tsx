import React from 'react';
import { useApp } from '../../context/AppContext';
import { Button } from '../ui/button';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  actionLabel?: string;
  actionLabelEn?: string;
  onAction?: () => void;
  secondaryActionLabel?: string;
  secondaryActionLabelEn?: string;
  onSecondaryAction?: () => void;
}

export function EmptyState({
  icon: Icon,
  title,
  titleEn,
  description,
  descriptionEn,
  actionLabel,
  actionLabelEn,
  onAction,
  secondaryActionLabel,
  secondaryActionLabelEn,
  onSecondaryAction,
}: EmptyStateProps) {
  const { language } = useApp();

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {/* Icon */}
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
        <Icon className="w-12 h-12 text-muted-foreground" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">
        {language === 'zh' ? title : (titleEn || title)}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6 max-w-md">
        {language === 'zh' ? description : (descriptionEn || description)}
      </p>

      {/* Actions */}
      <div className="flex gap-3">
        {actionLabel && onAction && (
          <Button onClick={onAction}>
            {language === 'zh' ? actionLabel : (actionLabelEn || actionLabel)}
          </Button>
        )}
        {secondaryActionLabel && onSecondaryAction && (
          <Button variant="outline" onClick={onSecondaryAction}>
            {language === 'zh' ? secondaryActionLabel : (secondaryActionLabelEn || secondaryActionLabel)}
          </Button>
        )}
      </div>
    </div>
  );
}
