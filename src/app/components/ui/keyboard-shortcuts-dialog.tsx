import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './dialog';
import { useApp } from '../../context/AppContext';
import { Keyboard } from 'lucide-react';

interface ShortcutItem {
  key: string;
  description: string;
  category: string;
}

interface KeyboardShortcutsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function KeyboardShortcutsDialog({ open, onOpenChange }: KeyboardShortcutsDialogProps) {
  const { language } = useApp();
  const isMac = navigator.platform.includes('Mac');

  const shortcuts: ShortcutItem[] = [
    // Navigation
    {
      key: isMac ? '⌘ + K' : 'Ctrl + K',
      description: language === 'zh' ? '打开搜索' : 'Open search',
      category: language === 'zh' ? '导航' : 'Navigation'
    },
    {
      key: 'G then D',
      description: language === 'zh' ? '前往仪表盘' : 'Go to Dashboard',
      category: language === 'zh' ? '导航' : 'Navigation'
    },
    {
      key: 'G then T',
      description: language === 'zh' ? '前往任务' : 'Go to Tasks',
      category: language === 'zh' ? '导航' : 'Navigation'
    },
    {
      key: 'G then A',
      description: language === 'zh' ? '前往 AI 助手' : 'Go to AI Assistant',
      category: language === 'zh' ? '导航' : 'Navigation'
    },
    
    // Actions
    {
      key: 'C',
      description: language === 'zh' ? '创建新任务' : 'Create new task',
      category: language === 'zh' ? '操作' : 'Actions'
    },
    {
      key: isMac ? '⌘ + S' : 'Ctrl + S',
      description: language === 'zh' ? '保存' : 'Save',
      category: language === 'zh' ? '操作' : 'Actions'
    },
    {
      key: 'Esc',
      description: language === 'zh' ? '关闭对话框' : 'Close dialog',
      category: language === 'zh' ? '操作' : 'Actions'
    },
    
    // View
    {
      key: isMac ? '⌘ + B' : 'Ctrl + B',
      description: language === 'zh' ? '切换侧边栏' : 'Toggle sidebar',
      category: language === 'zh' ? '视图' : 'View'
    },
    {
      key: isMac ? '⌘ + \\' : 'Ctrl + \\',
      description: language === 'zh' ? '切换主题' : 'Toggle theme',
      category: language === 'zh' ? '视图' : 'View'
    },
    {
      key: isMac ? '⌘ + Shift + L' : 'Ctrl + Shift + L',
      description: language === 'zh' ? '切换语言' : 'Toggle language',
      category: language === 'zh' ? '视图' : 'View'
    },
    
    // Help
    {
      key: '?',
      description: language === 'zh' ? '显示快捷键' : 'Show shortcuts',
      category: language === 'zh' ? '帮助' : 'Help'
    },
  ];

  const groupedShortcuts = shortcuts.reduce((acc, shortcut) => {
    if (!acc[shortcut.category]) {
      acc[shortcut.category] = [];
    }
    acc[shortcut.category].push(shortcut);
    return acc;
  }, {} as Record<string, ShortcutItem[]>);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Keyboard className="w-5 h-5" />
            {language === 'zh' ? '键盘快捷键' : 'Keyboard Shortcuts'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {Object.entries(groupedShortcuts).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                {category}
              </h3>
              <div className="space-y-2">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-accent transition-colors"
                  >
                    <span className="text-sm text-muted-foreground">
                      {item.description}
                    </span>
                    <kbd className="px-2 py-1 text-xs font-semibold text-foreground bg-muted border border-border rounded">
                      {item.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            {language === 'zh' 
              ? '按 ? 键随时查看此帮助'
              : 'Press ? to show this help anytime'}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
