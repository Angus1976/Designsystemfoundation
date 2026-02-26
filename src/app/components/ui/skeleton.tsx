import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

/**
 * Skeleton loading component
 * 骨架屏加载组件
 */
export function Skeleton({
  className = '',
  variant = 'text',
  width,
  height,
  animation = 'pulse'
}: SkeletonProps) {
  const baseStyles = 'bg-muted animate-shimmer';
  
  const variantStyles = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: '',
    rounded: 'rounded-lg'
  };
  
  const animationStyles = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: ''
  };
  
  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;
  
  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${animationStyles[animation]} ${className}`}
      style={style}
    />
  );
}

/**
 * Skeleton card component
 */
export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`p-6 space-y-4 ${className}`}>
      <Skeleton variant="text" height={24} width="60%" />
      <Skeleton variant="text" height={16} width="100%" />
      <Skeleton variant="text" height={16} width="90%" />
      <Skeleton variant="text" height={16} width="80%" />
      <div className="flex gap-2 pt-2">
        <Skeleton variant="rounded" height={32} width={80} />
        <Skeleton variant="rounded" height={32} width={80} />
      </div>
    </div>
  );
}

/**
 * Skeleton table component
 */
export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex gap-4 pb-3 border-b border-border">
        <Skeleton height={20} width={60} />
        <Skeleton height={20} width={120} />
        <Skeleton height={20} width={100} />
        <Skeleton height={20} width={80} />
      </div>
      
      {/* Rows */}
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex gap-4 items-center">
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton height={16} width={120} />
          <Skeleton height={16} width={100} />
          <Skeleton height={16} width={80} />
        </div>
      ))}
    </div>
  );
}

/**
 * Skeleton list component
 */
export function SkeletonList({ items = 5 }: { items?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-center gap-4">
          <Skeleton variant="circular" width={48} height={48} />
          <div className="flex-1 space-y-2">
            <Skeleton height={16} width="70%" />
            <Skeleton height={14} width="40%" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Skeleton dashboard component
 */
export function SkeletonDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="p-6 rounded-lg border border-border space-y-3">
            <Skeleton height={20} width={100} />
            <Skeleton height={32} width={80} />
            <Skeleton height={16} width={120} />
          </div>
        ))}
      </div>
      
      {/* Chart */}
      <div className="p-6 rounded-lg border border-border space-y-4">
        <Skeleton height={24} width={200} />
        <Skeleton variant="rounded" height={300} width="100%" />
      </div>
      
      {/* Table */}
      <div className="p-6 rounded-lg border border-border">
        <Skeleton height={24} width={150} className="mb-4" />
        <SkeletonTable rows={5} />
      </div>
    </div>
  );
}
