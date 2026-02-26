import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type Language = 'zh' | 'en';

interface ClientCompany {
  name: string;
  nameEn: string;
  logo?: string; // URL to logo image
}

interface AppContextType {
  theme: Theme;
  language: Language;
  clientCompany: ClientCompany;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
  setClientCompany: (company: ClientCompany) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  zh: {
    // Navigation
    'nav.dashboard': '仪表盘',
    'nav.aiAssistant': 'AI 助手',
    'nav.tasks': '标注任务',
    'nav.dataStructuring': '数据结构化',
    'nav.dataSync': '数据同步',
    'nav.aiAnnotation': 'AI 标注',
    'nav.augmentation': '数据增强',
    'nav.quality': '质量管理',
    'nav.security': '安全中心',
    'nav.admin': '管理后台',
    'nav.settings': '系统设置',
    'nav.billing': '计费管理',
    'nav.license': '许可证',
    'nav.workbench': '工作台',
    'nav.dataManagement': '数据管理',
    'nav.aiCapability': 'AI 能力',
    'nav.qualityAndSecurity': '质量与安全',
    'nav.systemManagement': '系统管理',
    
    // Common
    'common.search': '搜索',
    'common.confirm': '确定',
    'common.cancel': '取消',
    'common.submit': '提交',
    'common.save': '保存',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.view': '查看',
    'common.export': '导出',
    'common.import': '导入',
    'common.create': '新建',
    'common.refresh': '刷新',
    'common.filter': '筛选',
    'common.sort': '排序',
    'common.actions': '操作',
    'common.status': '状态',
    'common.type': '类型',
    'common.name': '名称',
    'common.description': '描述',
    'common.createdAt': '创建时间',
    'common.updatedAt': '更新时间',
    'common.loading': '加载中...',
    'common.noData': '暂无数据',
    'common.logout': '退出登录',
    
    // Dashboard
    'dashboard.title': '仪表盘',
    'dashboard.welcome': '欢迎回来',
    'dashboard.totalTasks': '总任务数',
    'dashboard.inProgress': '进行中',
    'dashboard.completed': '已完成',
    'dashboard.pending': '待审核',
    'dashboard.annotationTrend': '标注进度趋势',
    'dashboard.taskDistribution': '任务状态分布',
    'dashboard.recentActivity': '最近活动',
    'dashboard.quickActions': '快速操作',
    'dashboard.newTask': '新建任务',
    'dashboard.importData': '导入数据',
    'dashboard.viewReport': '查看报告',
    
    // Tasks
    'tasks.title': '标注任务',
    'tasks.newTask': '新建任务',
    'tasks.taskName': '任务名称',
    'tasks.progress': '进度',
    'tasks.assignee': '负责人',
    'tasks.batchExport': '批量导出',
    'tasks.batchDelete': '批量删除',
    'tasks.batchAssign': '批量分配',
    'tasks.noTasks': '暂无任务，点击新建开始',
    
    // Status
    'status.processing': '处理中',
    'status.success': '成功',
    'status.warning': '警告',
    'status.error': '错误',
    'status.pending': '待处理',
    'status.active': '活跃',
    'status.inactive': '未激活',
    
    // Auth
    'auth.login': '登录',
    'auth.register': '注册',
    'auth.forgotPassword': '忘记密码',
    'auth.rememberMe': '记住我',
    'auth.noAccount': '没有账号？立即注册',
    'auth.hasAccount': '已有账号？立即登录',
    'auth.email': '邮箱',
    'auth.password': '密码',
    'auth.confirmPassword': '确认密码',
    'auth.username': '用户名',
    'auth.organization': '组织名称',
  },
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.aiAssistant': 'AI Assistant',
    'nav.tasks': 'Tasks',
    'nav.dataStructuring': 'Data Structuring',
    'nav.dataSync': 'Data Sync',
    'nav.aiAnnotation': 'AI Annotation',
    'nav.augmentation': 'Augmentation',
    'nav.quality': 'Quality',
    'nav.security': 'Security',
    'nav.admin': 'Admin',
    'nav.settings': 'Settings',
    'nav.billing': 'Billing',
    'nav.license': 'License',
    'nav.workbench': 'Workbench',
    'nav.dataManagement': 'Data Management',
    'nav.aiCapability': 'AI Capability',
    'nav.qualityAndSecurity': 'Quality & Security',
    'nav.systemManagement': 'System Management',
    
    // Common
    'common.search': 'Search',
    'common.confirm': 'Confirm',
    'common.cancel': 'Cancel',
    'common.submit': 'Submit',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.export': 'Export',
    'common.import': 'Import',
    'common.create': 'Create',
    'common.refresh': 'Refresh',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.actions': 'Actions',
    'common.status': 'Status',
    'common.type': 'Type',
    'common.name': 'Name',
    'common.description': 'Description',
    'common.createdAt': 'Created At',
    'common.updatedAt': 'Updated At',
    'common.loading': 'Loading...',
    'common.noData': 'No data',
    'common.logout': 'Logout',
    
    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.welcome': 'Welcome back',
    'dashboard.totalTasks': 'Total Tasks',
    'dashboard.inProgress': 'In Progress',
    'dashboard.completed': 'Completed',
    'dashboard.pending': 'Pending',
    'dashboard.annotationTrend': 'Annotation Progress Trend',
    'dashboard.taskDistribution': 'Task Status Distribution',
    'dashboard.recentActivity': 'Recent Activity',
    'dashboard.quickActions': 'Quick Actions',
    'dashboard.newTask': 'New Task',
    'dashboard.importData': 'Import Data',
    'dashboard.viewReport': 'View Report',
    
    // Tasks
    'tasks.title': 'Tasks',
    'tasks.newTask': 'New Task',
    'tasks.taskName': 'Task Name',
    'tasks.progress': 'Progress',
    'tasks.assignee': 'Assignee',
    'tasks.batchExport': 'Batch Export',
    'tasks.batchDelete': 'Batch Delete',
    'tasks.batchAssign': 'Batch Assign',
    'tasks.noTasks': 'No tasks yet, click to create',
    
    // Status
    'status.processing': 'Processing',
    'status.success': 'Success',
    'status.warning': 'Warning',
    'status.error': 'Error',
    'status.pending': 'Pending',
    'status.active': 'Active',
    'status.inactive': 'Inactive',
    
    // Auth
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.forgotPassword': 'Forgot Password',
    'auth.rememberMe': 'Remember me',
    'auth.noAccount': 'No account? Sign up',
    'auth.hasAccount': 'Have an account? Sign in',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.username': 'Username',
    'auth.organization': 'Organization',
  },
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = localStorage.getItem('superinsight-theme');
    return (stored as Theme) || 'light';
  });

  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('superinsight-language');
    return (stored as Language) || 'zh';
  });

  const [clientCompany, setClientCompanyState] = useState<ClientCompany>({
    name: 'SuperInsight',
    nameEn: 'SuperInsight',
    logo: 'https://example.com/logo.png',
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('superinsight-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('superinsight-language', language);
  }, [language]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  const setClientCompany = (company: ClientCompany) => {
    setClientCompanyState(company);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key;
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        language,
        clientCompany,
        toggleTheme,
        setTheme,
        toggleLanguage,
        setLanguage,
        setClientCompany,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}