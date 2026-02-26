import React, { useState, useEffect } from 'react';
import { X, Search, ChevronRight, HelpCircle, Keyboard } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Input } from '../ui/input';

interface HelpTopic {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  content: string;
  contentEn: string;
}

const helpTopics: HelpTopic[] = [
  {
    id: '1',
    title: '如何创建新任务',
    titleEn: 'How to create a new task',
    category: '任务管理',
    categoryEn: 'Task Management',
    content: '点击任务页面右上角的"新建任务"按钮，填写任务名称、描述、优先级等信息，然后点击"创建"即可。',
    contentEn: 'Click the "New Task" button in the top right of the Tasks page, fill in the task name, description, priority, etc., then click "Create".',
  },
  {
    id: '2',
    title: '如何配置数据源',
    titleEn: 'How to configure data sources',
    category: '数据同步',
    categoryEn: 'Data Sync',
    content: '进入数据同步页面，点击"添加数据源"，选择数据源类型（PostgreSQL、Redis等），填写连接信息并测试连接，配置同步频率后保存。',
    contentEn: 'Go to Data Sync page, click "Add Data Source", select the source type (PostgreSQL, Redis, etc.), fill in connection details and test, configure sync frequency and save.',
  },
  {
    id: '3',
    title: '如何使用 AI 助手',
    titleEn: 'How to use AI Assistant',
    category: 'AI 功能',
    categoryEn: 'AI Features',
    content: '在 AI 助手页面输入您的问题或需求，AI 会根据您的数据和上下文提供智能建议和答案。您可以对回答进行评价以帮助改进。',
    contentEn: 'Enter your question or requirement in the AI Assistant page. The AI will provide intelligent suggestions and answers based on your data and context. You can rate responses to help improve.',
  },
  {
    id: '4',
    title: '如何管理团队成员',
    titleEn: 'How to manage team members',
    category: '用户管理',
    categoryEn: 'User Management',
    content: '在管理控制台的用户管理标签下，您可以查看所有用户、分配角色、修改权限，或通过邮箱邀请新成员加入。',
    contentEn: 'Under the User Management tab in Admin Console, you can view all users, assign roles, modify permissions, or invite new members via email.',
  },
  {
    id: '5',
    title: '如何查看审计日志',
    titleEn: 'How to view audit logs',
    category: '安全中心',
    categoryEn: 'Security Center',
    content: '访问安全中心的审计日志标签，您可以查看所有用户操作的详细记录，包括时间、操作类型、资源和 IP 地址等信息。支持搜索和筛选。',
    contentEn: 'Visit the Audit Logs tab in Security Center to view detailed records of all user actions, including time, action type, resource, and IP address. Supports search and filtering.',
  },
];

interface HelpOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  contextPage?: string;
}

export function HelpOverlay({ isOpen, onClose, contextPage }: HelpOverlayProps) {
  const { language } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<HelpTopic | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.key === 'F1' || e.key === '?') && !isOpen) {
        e.preventDefault();
        // This would trigger opening, but handled by parent
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredTopics = helpTopics.filter((topic) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      topic.title.toLowerCase().includes(searchLower) ||
      topic.titleEn.toLowerCase().includes(searchLower) ||
      topic.content.toLowerCase().includes(searchLower) ||
      topic.contentEn.toLowerCase().includes(searchLower)
    );
  });

  // Group topics by category
  const groupedTopics = filteredTopics.reduce((acc, topic) => {
    const category = language === 'zh' ? topic.category : topic.categoryEn;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(topic);
    return acc;
  }, {} as Record<string, HelpTopic[]>);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* Overlay Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-[360px] bg-card border-l border-border shadow-2xl z-50 flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#1890FF]" />
              {language === 'zh' ? '帮助' : 'Help'}
            </h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={language === 'zh' ? '搜索帮助内容...' : 'Search help...'}
              className="pl-9"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4">
          {selectedTopic ? (
            // Topic Detail View
            <div className="space-y-4">
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-sm text-[#1890FF] hover:underline flex items-center gap-1"
              >
                ← {language === 'zh' ? '返回' : 'Back'}
              </button>
              
              <div>
                <div className="text-xs text-muted-foreground mb-1">
                  {language === 'zh' ? selectedTopic.category : selectedTopic.categoryEn}
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {language === 'zh' ? selectedTopic.title : selectedTopic.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === 'zh' ? selectedTopic.content : selectedTopic.contentEn}
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-medium mb-2">
                  {language === 'zh' ? '相关主题' : 'Related Topics'}
                </h4>
                <div className="space-y-2">
                  {helpTopics
                    .filter((t) => t.id !== selectedTopic.id && t.category === selectedTopic.category)
                    .slice(0, 3)
                    .map((topic) => (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic)}
                        className="w-full text-left p-2 rounded hover:bg-muted text-sm flex items-center justify-between group"
                      >
                        <span>{language === 'zh' ? topic.title : topic.titleEn}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                      </button>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            // Topics List View
            <div className="space-y-6">
              {Object.keys(groupedTopics).length === 0 ? (
                <div className="text-center py-8">
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh' ? '未找到匹配的帮助内容' : 'No help topics found'}
                  </p>
                </div>
              ) : (
                Object.entries(groupedTopics).map(([category, topics]) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold mb-2 text-muted-foreground">
                      {category}
                    </h3>
                    <div className="space-y-1">
                      {topics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => setSelectedTopic(topic)}
                          className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors text-sm flex items-center justify-between group"
                        >
                          <span className="font-medium">
                            {language === 'zh' ? topic.title : topic.titleEn}
                          </span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Keyboard className="w-4 h-4" />
            <span>
              {language === 'zh' ? '按 F1 或 ? 打开帮助' : 'Press F1 or ? to open help'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
