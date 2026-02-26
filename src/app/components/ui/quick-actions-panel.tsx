import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router';
import {
  Plus,
  Upload,
  Download,
  FileText,
  Sparkles,
  Layers,
  Database,
  Settings,
  BarChart3,
  Users,
  Bell,
  Search,
  Zap,
  Clock,
  Star,
  X,
} from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { Badge } from './badge';
import { Input } from './input';

interface QuickAction {
  id: string;
  icon: React.ReactNode;
  label: string;
  labelEn: string;
  description: string;
  descriptionEn: string;
  path?: string;
  action?: () => void;
  badge?: string;
  badgeEn?: string;
  color: string;
  shortcut?: string;
}

interface QuickActionsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickActionsPanel({ isOpen, onClose }: QuickActionsPanelProps) {
  const { language } = useApp();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const quickActions: QuickAction[] = [
    {
      id: 'new-task',
      icon: <Plus className="w-5 h-5" />,
      label: '新建标注任务',
      labelEn: 'New Annotation Task',
      description: '创建一个新的数据标注任务',
      descriptionEn: 'Create a new data annotation task',
      path: '/tasks',
      color: 'bg-blue-500',
      shortcut: 'Ctrl+N',
    },
    {
      id: 'ai-annotation',
      icon: <Sparkles className="w-5 h-5" />,
      label: 'AI 智能标注',
      labelEn: 'AI Annotation',
      description: '使用 AI 模型自动标注数据',
      descriptionEn: 'Automatically annotate data with AI models',
      path: '/ai-annotation',
      badge: '热门',
      badgeEn: 'Hot',
      color: 'bg-purple-500',
    },
    {
      id: 'data-augmentation',
      icon: <Layers className="w-5 h-5" />,
      label: '数据增强',
      labelEn: 'Data Augmentation',
      description: '扩充和增强您的训练数据',
      descriptionEn: 'Expand and enhance your training data',
      path: '/augmentation',
      badge: '热门',
      badgeEn: 'Hot',
      color: 'bg-green-500',
    },
    {
      id: 'upload-data',
      icon: <Upload className="w-5 h-5" />,
      label: '上传数据',
      labelEn: 'Upload Data',
      description: '批量上传待标注的数据文件',
      descriptionEn: 'Batch upload data files for annotation',
      path: '/data-structuring',
      color: 'bg-orange-500',
      shortcut: 'Ctrl+U',
    },
    {
      id: 'export-data',
      icon: <Download className="w-5 h-5" />,
      label: '导出数据',
      labelEn: 'Export Data',
      description: '导出标注结果和统计报告',
      descriptionEn: 'Export annotation results and reports',
      action: () => {
        alert(language === 'zh' ? '导出功能开发中...' : 'Export feature coming soon...');
      },
      color: 'bg-cyan-500',
      shortcut: 'Ctrl+E',
    },
    {
      id: 'view-reports',
      icon: <BarChart3 className="w-5 h-5" />,
      label: '查看报告',
      labelEn: 'View Reports',
      description: '查看数据标注的统计报告',
      descriptionEn: 'View statistical reports of annotations',
      path: '/quality',
      color: 'bg-indigo-500',
    },
    {
      id: 'data-sync',
      icon: <Database className="w-5 h-5" />,
      label: '数据同步',
      labelEn: 'Data Sync',
      description: '同步外部数据源',
      descriptionEn: 'Sync external data sources',
      path: '/data-sync',
      color: 'bg-teal-500',
    },
    {
      id: 'team-management',
      icon: <Users className="w-5 h-5" />,
      label: '团队管理',
      labelEn: 'Team Management',
      description: '管理团队成员和权限',
      descriptionEn: 'Manage team members and permissions',
      path: '/admin',
      color: 'bg-pink-500',
    },
    {
      id: 'notifications',
      icon: <Bell className="w-5 h-5" />,
      label: '通知中心',
      labelEn: 'Notifications',
      description: '查看系统通知和消息',
      descriptionEn: 'View system notifications and messages',
      action: () => {
        alert(language === 'zh' ? '暂无新通知' : 'No new notifications');
      },
      color: 'bg-yellow-500',
    },
    {
      id: 'help',
      icon: <FileText className="w-5 h-5" />,
      label: '帮助文档',
      labelEn: 'Help Documentation',
      description: '查看使用指南和文档',
      descriptionEn: 'View guides and documentation',
      path: '/help-center',
      color: 'bg-gray-500',
      shortcut: 'F1',
    },
    {
      id: 'settings',
      icon: <Settings className="w-5 h-5" />,
      label: '系统设置',
      labelEn: 'System Settings',
      description: '配置系统参数和偏好',
      descriptionEn: 'Configure system parameters and preferences',
      path: '/settings',
      color: 'bg-slate-500',
    },
    {
      id: 'feature-showcase',
      icon: <Star className="w-5 h-5" />,
      label: '功能展示',
      labelEn: 'Feature Showcase',
      description: '查看平台核心功能介绍',
      descriptionEn: 'View platform core features',
      path: '/feature-showcase',
      badge: '新',
      badgeEn: 'New',
      color: 'bg-amber-500',
    },
  ];

  const filteredActions = quickActions.filter((action) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const label = language === 'zh' ? action.label : action.labelEn;
    const description = language === 'zh' ? action.description : action.descriptionEn;
    return label.toLowerCase().includes(query) || description.toLowerCase().includes(query);
  });

  const handleActionClick = (action: QuickAction) => {
    if (action.path) {
      navigate(action.path);
    } else if (action.action) {
      action.action();
    }
    onClose();
  };

  const recentActions = quickActions.filter((action) =>
    ['new-task', 'ai-annotation', 'data-augmentation', 'upload-data'].includes(action.id)
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[100] animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed inset-x-0 top-0 z-[101] flex justify-center pt-20 px-4 animate-in slide-in-from-top duration-300">
        <Card className="w-full max-w-3xl max-h-[80vh] overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {language === 'zh' ? '快捷操作' : 'Quick Actions'}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === 'zh'
                    ? '快速访问常用功能和操作'
                    : 'Quick access to common features and actions'}
                </p>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={
                  language === 'zh' ? '搜索操作...' : 'Search actions...'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                autoFocus
              />
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(80vh-180px)]">
            {!searchQuery && (
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <h3 className="text-sm font-semibold text-foreground">
                    {language === 'zh' ? '最近使用' : 'Recent'}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {recentActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleActionClick(action)}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border hover:border-[#1890FF] hover:bg-accent transition-all group"
                    >
                      <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center text-white`}>
                        {action.icon}
                      </div>
                      <span className="text-xs font-medium text-center">
                        {language === 'zh' ? action.label : action.labelEn}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold text-foreground">
                  {language === 'zh' ? '所有操作' : 'All Actions'}
                </h3>
              </div>

              {filteredActions.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh' ? '未找到匹配的操作' : 'No actions found'}
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleActionClick(action)}
                      className="w-full flex items-center gap-4 p-4 rounded-lg border border-border hover:border-[#1890FF] hover:bg-accent transition-all group"
                    >
                      <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center text-white flex-shrink-0`}>
                        {action.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-foreground">
                            {language === 'zh' ? action.label : action.labelEn}
                          </span>
                          {action.badge && (
                            <Badge variant="secondary" className="text-xs">
                              {language === 'zh' ? action.badge : action.badgeEn}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {language === 'zh' ? action.description : action.descriptionEn}
                        </p>
                      </div>
                      {action.shortcut && (
                        <kbd className="hidden md:inline-block px-2 py-1 text-xs font-mono bg-muted rounded border border-border">
                          {action.shortcut}
                        </kbd>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border bg-muted/30">
            <p className="text-xs text-center text-muted-foreground">
              {language === 'zh' ? (
                <>
                  按 <kbd className="px-1.5 py-0.5 bg-background rounded border border-border">Ctrl</kbd> +{' '}
                  <kbd className="px-1.5 py-0.5 bg-background rounded border border-border">K</kbd>{' '}
                  随时打开快捷操作面板
                </>
              ) : (
                <>
                  Press <kbd className="px-1.5 py-0.5 bg-background rounded border border-border">Ctrl</kbd> +{' '}
                  <kbd className="px-1.5 py-0.5 bg-background rounded border border-border">K</kbd>{' '}
                  to open quick actions anytime
                </>
              )}
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}

// Hook to manage quick actions panel
export function useQuickActionsPanel() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Escape
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((prev) => !prev),
  };
}
