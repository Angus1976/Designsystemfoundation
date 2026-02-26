import React from 'react';
import { Card } from './card';
import { Badge } from './badge';
import { TrendingUp, TrendingDown, Minus, ArrowUpRight } from 'lucide-react';

interface StatsCardEnhancedProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive?: boolean;
    label?: string;
  };
  description?: string;
  color?: string;
  gradient?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  loading?: boolean;
}

export function StatsCardEnhanced({
  title,
  value,
  icon,
  trend,
  description,
  color = 'bg-blue-500',
  gradient = 'from-blue-500 to-blue-600',
  onClick,
  children,
  loading,
}: StatsCardEnhancedProps) {
  const getTrendIcon = () => {
    if (!trend) return null;
    if (trend.value === 0) return <Minus className="w-4 h-4" />;
    if (trend.isPositive === false) return <TrendingDown className="w-4 h-4" />;
    return <TrendingUp className="w-4 h-4" />;
  };

  const getTrendColor = () => {
    if (!trend) return '';
    if (trend.value === 0) return 'text-gray-500';
    if (trend.isPositive === false) return 'text-red-500';
    return 'text-green-500';
  };

  if (loading) {
    return (
      <Card className="p-6">
        <div className="animate-pulse">
          <div className="flex items-start justify-between mb-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24" />
            <div className={`w-12 h-12 rounded-xl ${color} opacity-20`} />
          </div>
          <div className="space-y-3">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-32" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={`p-6 hover:shadow-lg transition-all duration-300 ${onClick ? 'cursor-pointer group' : ''}`}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
          {trend && (
            <div className={`flex items-center gap-1 text-xs font-medium ${getTrendColor()}`}>
              {getTrendIcon()}
              <span>{Math.abs(trend.value)}%</span>
              {trend.label && <span className="text-muted-foreground ml-1">{trend.label}</span>}
            </div>
          )}
        </div>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg ${onClick ? 'group-hover:scale-110 transition-transform' : ''}`}>
          {icon}
        </div>
      </div>

      {/* Value */}
      <div className="mb-3">
        <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>

      {/* Custom Content */}
      {children && <div className="mt-4">{children}</div>}

      {/* Quick Action */}
      {onClick && (
        <div className="mt-4 flex items-center text-xs text-[#1890FF] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          <span>查看详情</span>
          <ArrowUpRight className="w-3 h-3 ml-1" />
        </div>
      )}
    </Card>
  );
}

// Mini chart component for stats card
interface MiniChartProps {
  data: number[];
  color?: string;
  height?: number;
}

export function MiniChart({ data, color = '#1890FF', height = 40 }: MiniChartProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  return (
    <div className="flex items-end gap-1" style={{ height }}>
      {data.map((value, index) => {
        const percentage = ((value - min) / range) * 100;
        return (
          <div
            key={index}
            className="flex-1 rounded-t transition-all hover:opacity-80"
            style={{
              height: `${Math.max(percentage, 5)}%`,
              backgroundColor: color,
              opacity: 0.7 + (percentage / 100) * 0.3,
            }}
          />
        );
      })}
    </div>
  );
}

// Progress ring component for stats card
interface ProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export function ProgressRing({
  percentage,
  size = 60,
  strokeWidth = 6,
  color = '#1890FF',
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-200 dark:text-gray-700"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold" style={{ color }}>
          {percentage}%
        </span>
      </div>
    </div>
  );
}

// Comparison bars for stats card
interface ComparisonBarsProps {
  data: Array<{
    label: string;
    value: number;
    color?: string;
  }>;
  maxValue?: number;
}

export function ComparisonBars({ data, maxValue }: ComparisonBarsProps) {
  const max = maxValue || Math.max(...data.map((d) => d.value));

  return (
    <div className="space-y-3">
      {data.map((item, index) => {
        const percentage = (item.value / max) * 100;
        return (
          <div key={index}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium text-foreground">{item.value}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: item.color || '#1890FF',
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Stats grid container
interface StatsGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function StatsGrid({ children, columns = 4, className = '' }: StatsGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {children}
    </div>
  );
}
