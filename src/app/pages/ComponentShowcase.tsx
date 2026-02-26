import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { HelpIcon } from '../components/help/HelpIcon';
import { HelpPopover } from '../components/help/HelpPopover';
import { HelpOverlay } from '../components/help/HelpOverlay';
import { EmptyState } from '../components/empty-states/EmptyState';
import { PageSkeleton } from '../components/loading/PageSkeleton';
import { TableSkeleton } from '../components/loading/TableSkeleton';
import { InlineSpinner } from '../components/loading/InlineSpinner';
import { 
  ClipboardList, 
  Search, 
  Database,
  Loader2,
  HelpCircle
} from 'lucide-react';

export function ComponentShowcase() {
  const { language } = useApp();
  const [showHelpPopover, setShowHelpPopover] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [showHelpOverlay, setShowHelpOverlay] = useState(false);
  const [showPageSkeleton, setShowPageSkeleton] = useState(false);
  const [showTableSkeleton, setShowTableSkeleton] = useState(false);
  const [showInlineSpinner, setShowInlineSpinner] = useState(false);

  const handleHelpIconClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPopoverPosition({
      top: rect.bottom + 8,
      left: rect.left,
    });
    setShowHelpPopover(true);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">
          {language === 'zh' ? '组件展示' : 'Component Showcase'}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {language === 'zh' ? '新增组件和功能展示' : 'New components and features showcase'}
        </p>
      </div>

      {/* Help System */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            {language === 'zh' ? '帮助系统' : 'Help System'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* HelpIcon Examples */}
          <div>
            <h3 className="font-medium mb-3 flex items-center gap-2">
              {language === 'zh' ? 'HelpIcon 示例' : 'HelpIcon Examples'}
              <HelpIcon onClick={handleHelpIconClick} />
            </h3>
            <div className="space-y-3 p-4 border border-border rounded-lg">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">
                  {language === 'zh' ? '任务名称' : 'Task Name'}
                </label>
                <HelpIcon onClick={handleHelpIconClick} />
              </div>
              <div className="flex items-center justify-between">
                <h4 className="font-medium flex items-center gap-2">
                  {language === 'zh' ? '表格标题' : 'Table Header'}
                  <HelpIcon onClick={handleHelpIconClick} />
                </h4>
              </div>
            </div>
          </div>

          {/* HelpOverlay */}
          <div>
            <h3 className="font-medium mb-3">
              {language === 'zh' ? 'HelpOverlay 浮动面板' : 'HelpOverlay Panel'}
            </h3>
            <Button onClick={() => setShowHelpOverlay(true)}>
              {language === 'zh' ? '打开帮助面板' : 'Open Help Panel'}
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              {language === 'zh' ? '提示: 按 F1 或 ? 也可以打开帮助' : 'Tip: Press F1 or ? to open help'}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Empty States */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'zh' ? '空状态组件' : 'Empty States'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Tasks Empty */}
          <div className="border border-border rounded-lg">
            <EmptyState
              icon={ClipboardList}
              title="暂无任务"
              titleEn="No tasks yet"
              description="点击新建开始创建您的第一个任务"
              descriptionEn="Click new task to create your first task"
              actionLabel="新建任务"
              actionLabelEn="New Task"
              onAction={() => alert('Create task')}
            />
          </div>

          {/* Search No Results */}
          <div className="border border-border rounded-lg">
            <EmptyState
              icon={Search}
              title="未找到匹配结果"
              titleEn="No results found"
              description="尝试调整您的搜索条件或筛选器"
              descriptionEn="Try adjusting your search terms or filters"
              actionLabel="清除筛选"
              actionLabelEn="Clear Filters"
              onAction={() => alert('Clear filters')}
            />
          </div>

          {/* Data Sync No Sources */}
          <div className="border border-border rounded-lg">
            <EmptyState
              icon={Database}
              title="尚未配置数据源"
              titleEn="No data sources configured"
              description="添加您的第一个数据源以开始同步"
              descriptionEn="Add your first data source to start syncing"
              actionLabel="添加数据源"
              actionLabelEn="Add Data Source"
              onAction={() => alert('Add source')}
              secondaryActionLabel="查看文档"
              secondaryActionLabelEn="View Docs"
              onSecondaryAction={() => alert('View docs')}
            />
          </div>
        </CardContent>
      </Card>

      {/* Loading States */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'zh' ? '加载状态组件' : 'Loading States'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Page Skeleton */}
          <div>
            <h3 className="font-medium mb-3">
              {language === 'zh' ? 'Page Skeleton (页面骨架屏)' : 'Page Skeleton'}
            </h3>
            <Button onClick={() => setShowPageSkeleton(!showPageSkeleton)}>
              {showPageSkeleton
                ? language === 'zh'
                  ? '隐藏'
                  : 'Hide'
                : language === 'zh'
                ? '显示'
                : 'Show'}
            </Button>
            {showPageSkeleton && (
              <div className="mt-4 border border-border rounded-lg overflow-hidden">
                <PageSkeleton />
              </div>
            )}
          </div>

          {/* Table Skeleton */}
          <div>
            <h3 className="font-medium mb-3">
              {language === 'zh' ? 'Table Skeleton (表格骨架屏)' : 'Table Skeleton'}
            </h3>
            <Button onClick={() => setShowTableSkeleton(!showTableSkeleton)}>
              {showTableSkeleton
                ? language === 'zh'
                  ? '隐藏'
                  : 'Hide'
                : language === 'zh'
                ? '显示'
                : 'Show'}
            </Button>
            {showTableSkeleton && (
              <div className="mt-4">
                <TableSkeleton rows={3} columns={4} />
              </div>
            )}
          </div>

          {/* Inline Spinner */}
          <div>
            <h3 className="font-medium mb-3">
              {language === 'zh' ? 'Inline Spinner (内联加载)' : 'Inline Spinner'}
            </h3>
            <Button onClick={() => setShowInlineSpinner(!showInlineSpinner)}>
              {showInlineSpinner
                ? language === 'zh'
                  ? '停止'
                  : 'Stop'
                : language === 'zh'
                ? '启动'
                : 'Start'}
            </Button>
            {showInlineSpinner && (
              <div className="mt-4 p-4 border border-border rounded-lg space-y-3">
                <div>
                  <InlineSpinner size="sm" />
                </div>
                <div>
                  <InlineSpinner size="md" />
                </div>
                <div>
                  <InlineSpinner size="lg" />
                </div>
                <div>
                  <InlineSpinner size="md" showText={false} />
                  <span className="ml-2 text-sm text-muted-foreground">
                    {language === 'zh' ? '不带文字的加载器' : 'Spinner without text'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Help Popover */}
      {showHelpPopover && (
        <HelpPopover
          title="帮助提示"
          titleEn="Help Tip"
          description="这是一个帮助提示弹出框，可以显示详细的帮助信息和指导。"
          descriptionEn="This is a help popover that displays detailed help information and guidance."
          learnMoreLink="#"
          onClose={() => setShowHelpPopover(false)}
          position={popoverPosition}
        />
      )}

      {/* Help Overlay */}
      <HelpOverlay
        isOpen={showHelpOverlay}
        onClose={() => setShowHelpOverlay(false)}
        contextPage="component-showcase"
      />
    </div>
  );
}
