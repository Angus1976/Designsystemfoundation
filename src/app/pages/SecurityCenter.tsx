import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Shield,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Search,
  Filter,
  Download,
  Users,
  Lock,
  Key,
  UserCheck,
  Clock,
  Monitor,
  Database,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

const auditLogs = [
  {
    id: '1',
    user: '张三',
    userEn: 'Zhang San',
    action: '登录系统',
    actionEn: 'Login',
    resource: '仪表盘',
    resourceEn: 'Dashboard',
    ip: '192.168.1.100',
    status: 'success',
    time: '2025-02-26 10:30:25',
  },
  {
    id: '2',
    user: '李四',
    userEn: 'Li Si',
    action: '删除任务',
    actionEn: 'Delete Task',
    resource: '任务-ID-1234',
    resourceEn: 'Task-ID-1234',
    ip: '192.168.1.101',
    status: 'success',
    time: '2025-02-26 10:25:10',
  },
  {
    id: '3',
    user: '王五',
    userEn: 'Wang Wu',
    action: '访问敏感数据',
    actionEn: 'Access Sensitive Data',
    resource: '用户列表',
    resourceEn: 'User List',
    ip: '192.168.1.102',
    status: 'denied',
    time: '2025-02-26 10:20:45',
  },
  {
    id: '4',
    user: '赵六',
    userEn: 'Zhao Liu',
    action: '修改配置',
    actionEn: 'Modify Config',
    resource: '系统设置',
    resourceEn: 'System Settings',
    ip: '192.168.1.103',
    status: 'success',
    time: '2025-02-26 10:15:30',
  },
  {
    id: '5',
    user: '钱七',
    userEn: 'Qian Qi',
    action: '导出数据',
    actionEn: 'Export Data',
    resource: '用户数据',
    resourceEn: 'User Data',
    ip: '192.168.1.104',
    status: 'warning',
    time: '2025-02-26 10:10:15',
  },
];

const roles = [
  {
    id: '1',
    name: 'Admin',
    nameZh: '管理员',
    users: 5,
    description: '完全访问权限',
    descriptionEn: 'Full access',
    color: '#FF4D4F',
  },
  {
    id: '2',
    name: 'Manager',
    nameZh: '经理',
    users: 12,
    description: '管理团队和任务',
    descriptionEn: 'Manage teams and tasks',
    color: '#1890FF',
  },
  {
    id: '3',
    name: 'Annotator',
    nameZh: '标注员',
    users: 156,
    description: '执行标注任务',
    descriptionEn: 'Perform annotation tasks',
    color: '#52C41A',
  },
  {
    id: '4',
    name: 'Reviewer',
    nameZh: '审核员',
    users: 28,
    description: '审核标注质量',
    descriptionEn: 'Review annotation quality',
    color: '#722ED1',
  },
];

const permissions = [
  { id: 'dashboard', name: '仪表盘', nameEn: 'Dashboard' },
  { id: 'tasks', name: '任务管理', nameEn: 'Tasks' },
  { id: 'data', name: '数据管理', nameEn: 'Data' },
  { id: 'users', name: '用户管理', nameEn: 'Users' },
  { id: 'settings', name: '系统设置', nameEn: 'Settings' },
  { id: 'security', name: '安全中心', nameEn: 'Security' },
];

const rolePermissions: Record<string, Record<string, { read: boolean; write: boolean }>> = {
  '1': { // Admin
    dashboard: { read: true, write: true },
    tasks: { read: true, write: true },
    data: { read: true, write: true },
    users: { read: true, write: true },
    settings: { read: true, write: true },
    security: { read: true, write: true },
  },
  '2': { // Manager
    dashboard: { read: true, write: false },
    tasks: { read: true, write: true },
    data: { read: true, write: true },
    users: { read: true, write: false },
    settings: { read: true, write: false },
    security: { read: false, write: false },
  },
  '3': { // Annotator
    dashboard: { read: true, write: false },
    tasks: { read: true, write: false },
    data: { read: true, write: true },
    users: { read: false, write: false },
    settings: { read: false, write: false },
    security: { read: false, write: false },
  },
  '4': { // Reviewer
    dashboard: { read: true, write: false },
    tasks: { read: true, write: false },
    data: { read: true, write: false },
    users: { read: false, write: false },
    settings: { read: false, write: false },
    security: { read: false, write: false },
  },
};

const ssoProviders = [
  {
    id: '1',
    name: 'SAML 2.0',
    description: '企业级单点登录',
    descriptionEn: 'Enterprise SSO',
    enabled: true,
    users: 245,
    icon: '🔐',
  },
  {
    id: '2',
    name: 'OAuth 2.0',
    description: '第三方身份认证',
    descriptionEn: 'Third-party authentication',
    enabled: true,
    users: 128,
    icon: '🔑',
  },
  {
    id: '3',
    name: 'LDAP',
    description: '目录服务集成',
    descriptionEn: 'Directory integration',
    enabled: false,
    users: 0,
    icon: '📂',
  },
];

const sessions = [
  {
    id: '1',
    user: '张三',
    userEn: 'Zhang San',
    device: 'Chrome on Windows',
    ip: '192.168.1.100',
    location: '北京, 中国',
    locationEn: 'Beijing, China',
    loginTime: '2025-02-26 09:00:00',
    lastActive: '2025-02-26 10:30:00',
    status: 'active',
  },
  {
    id: '2',
    user: '李四',
    userEn: 'Li Si',
    device: 'Safari on macOS',
    ip: '192.168.1.101',
    location: '上海, 中国',
    locationEn: 'Shanghai, China',
    loginTime: '2025-02-26 08:30:00',
    lastActive: '2025-02-26 10:25:00',
    status: 'active',
  },
  {
    id: '3',
    user: '王五',
    userEn: 'Wang Wu',
    device: 'Firefox on Linux',
    ip: '192.168.1.102',
    location: '深圳, 中国',
    locationEn: 'Shenzhen, China',
    loginTime: '2025-02-26 07:00:00',
    lastActive: '2025-02-26 09:45:00',
    status: 'expired',
  },
];

type TabType = 'overview' | 'audit' | 'permissions' | 'rbac' | 'sso' | 'sessions' | 'dataPermissions';

export function SecurityCenter() {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('1');
  const [expandedRole, setExpandedRole] = useState<string | null>('1');

  const tabs = [
    { id: 'overview', label: language === 'zh' ? '安全概览' : 'Overview' },
    { id: 'audit', label: language === 'zh' ? '审计日志' : 'Audit Logs' },
    { id: 'permissions', label: language === 'zh' ? '权限管理' : 'Permissions' },
    { id: 'rbac', label: language === 'zh' ? 'RBAC' : 'RBAC' },
    { id: 'sso', label: language === 'zh' ? 'SSO' : 'SSO' },
    { id: 'sessions', label: language === 'zh' ? '会话管理' : 'Sessions' },
    { id: 'dataPermissions', label: language === 'zh' ? '数据权限' : 'Data' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-[#52C41A]';
      case 'denied':
        return 'text-[#FF4D4F]';
      case 'warning':
        return 'text-[#FAAD14]';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'denied':
        return <XCircle className="w-4 h-4" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">
          {language === 'zh' ? '安全中心' : 'Security Center'}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {language === 'zh' ? '系统安全监控与管理' : 'System security monitoring and management'}
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-border overflow-x-auto">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#1890FF] text-[#1890FF]'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6 animate-fade-in-up">
          {/* Security Score Ring */}
          <Card className="border-[#52C41A] bg-gradient-to-br from-card to-[#F6FFED] dark:to-[#1F1F1F]">
            <CardContent className="pt-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-background flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#52C41A]">85</div>
                      <div className="text-sm text-muted-foreground">
                        {language === 'zh' ? '安全分' : 'Score'}
                      </div>
                    </div>
                  </div>
                  <svg className="absolute inset-0 w-32 h-32 -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="var(--border)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#52C41A"
                      strokeWidth="8"
                      strokeDasharray={`${(85 / 100) * 351.86} 351.86`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{language === 'zh' ? '身份认证' : 'Authentication'}</span>
                      <span className="text-[#52C41A]">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{language === 'zh' ? '访问控制' : 'Access Control'}</span>
                      <span className="text-[#52C41A]">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{language === 'zh' ? '数据加密' : 'Data Encryption'}</span>
                      <span className="text-[#FAAD14]">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Threat Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#52C41A]/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#52C41A]" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">1,248</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'zh' ? '正常事件' : 'Normal Events'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#FAAD14]/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-[#FAAD14]" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">12</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'zh' ? '警告' : 'Warnings'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#FF4D4F]/10 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-[#FF4D4F]" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">3</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'zh' ? '拒绝访问' : 'Denied'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#1890FF]/10 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-[#1890FF]" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">456</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'zh' ? '活跃会话' : 'Active Sessions'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Audit Logs Tab */}
      {activeTab === 'audit' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={language === 'zh' ? '搜索日志...' : 'Search logs...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              {language === 'zh' ? '筛选' : 'Filter'}
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              {language === 'zh' ? '导出' : 'Export'}
            </Button>
          </div>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '时间' : 'Timestamp'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '用户' : 'User'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '操作' : 'Action'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '资源' : 'Resource'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      IP
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '状态' : 'Status'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="border-b border-border hover:bg-muted/50">
                      <td className="p-4 text-sm">{log.time}</td>
                      <td className="p-4 text-sm font-medium">
                        {language === 'zh' ? log.user : log.userEn}
                      </td>
                      <td className="p-4 text-sm">
                        {language === 'zh' ? log.action : log.actionEn}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {language === 'zh' ? log.resource : log.resourceEn}
                      </td>
                      <td className="p-4 text-sm font-mono">{log.ip}</td>
                      <td className="p-4">
                        <div className={`flex items-center gap-2 ${getStatusColor(log.status)}`}>
                          {getStatusIcon(log.status)}
                          <span className="text-sm capitalize">{log.status}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* RBAC Tab */}
      {activeTab === 'rbac' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Role Tree */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>{language === 'zh' ? '角色列表' : 'Roles'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => {
                        setSelectedRole(role.id);
                        setExpandedRole(expandedRole === role.id ? null : role.id);
                      }}
                      className={`w-full p-3 rounded-lg border transition-colors text-left ${
                        selectedRole === role.id
                          ? 'border-[#1890FF] bg-[#E6F7FF] dark:bg-[#1890FF]/10'
                          : 'border-border hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: role.color }}
                          />
                          <div>
                            <div className="font-medium">
                              {language === 'zh' ? role.nameZh : role.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {role.users} {language === 'zh' ? '个用户' : 'users'}
                            </div>
                          </div>
                        </div>
                        {expandedRole === role.id ? (
                          <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                      {expandedRole === role.id && (
                        <p className="text-xs text-muted-foreground mt-2">
                          {language === 'zh' ? role.description : role.descriptionEn}
                        </p>
                      )}
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right: Permission Matrix */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === 'zh' ? '权限矩阵' : 'Permission Matrix'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-border">
                        <tr>
                          <th className="text-left p-3 text-sm font-medium text-muted-foreground">
                            {language === 'zh' ? '模块' : 'Module'}
                          </th>
                          <th className="text-center p-3 text-sm font-medium text-muted-foreground">
                            {language === 'zh' ? '读' : 'Read'}
                          </th>
                          <th className="text-center p-3 text-sm font-medium text-muted-foreground">
                            {language === 'zh' ? '写' : 'Write'}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {permissions.map((permission) => {
                          const perm = rolePermissions[selectedRole]?.[permission.id];
                          return (
                            <tr key={permission.id} className="border-b border-border">
                              <td className="p-3 text-sm font-medium">
                                {language === 'zh' ? permission.name : permission.nameEn}
                              </td>
                              <td className="p-3 text-center">
                                {perm?.read ? (
                                  <CheckCircle2 className="w-5 h-5 text-[#52C41A] mx-auto" />
                                ) : (
                                  <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />
                                )}
                              </td>
                              <td className="p-3 text-center">
                                {perm?.write ? (
                                  <CheckCircle2 className="w-5 h-5 text-[#52C41A] mx-auto" />
                                ) : (
                                  <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {/* SSO Tab */}
      {activeTab === 'sso' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {language === 'zh' ? 'SSO 提供商' : 'SSO Providers'}
            </h2>
            <Button>
              {language === 'zh' ? '添加提供商' : 'Add Provider'}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {ssoProviders.map((provider) => (
              <Card key={provider.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{provider.icon}</div>
                      <div>
                        <CardTitle className="text-base">{provider.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {language === 'zh' ? provider.description : provider.descriptionEn}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === 'zh' ? '用户数' : 'Users'}
                      </span>
                      <span className="font-medium">{provider.users}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={provider.enabled}
                          className="w-4 h-4 rounded border-border text-[#1890FF] focus:ring-[#1890FF]"
                        />
                        <span className="text-sm text-muted-foreground">
                          {language === 'zh' ? '启用' : 'Enabled'}
                        </span>
                      </label>
                      <Button variant="outline" size="sm">
                        {language === 'zh' ? '配置' : 'Configure'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Sessions Tab */}
      {activeTab === 'sessions' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {language === 'zh' ? '活跃会话' : 'Active Sessions'}
            </h2>
            <Button variant="outline">
              {language === 'zh' ? '全部注销' : 'Revoke All'}
            </Button>
          </div>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '用户' : 'User'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '设备' : 'Device'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '位置' : 'Location'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '登录时间' : 'Login'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '最后活跃' : 'Last Active'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '状态' : 'Status'}
                    </th>
                    <th className="text-right p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '操作' : 'Actions'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((session) => (
                    <tr key={session.id} className="border-b border-border hover:bg-muted/50">
                      <td className="p-4 text-sm font-medium">
                        {language === 'zh' ? session.user : session.userEn}
                      </td>
                      <td className="p-4 text-sm">{session.device}</td>
                      <td className="p-4 text-sm">
                        <div>
                          <div>{language === 'zh' ? session.location : session.locationEn}</div>
                          <div className="text-xs text-muted-foreground font-mono">
                            {session.ip}
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm">{session.loginTime}</td>
                      <td className="p-4 text-sm">{session.lastActive}</td>
                      <td className="p-4">
                        <Badge
                          className={
                            session.status === 'active'
                              ? 'bg-[#52C41A] text-white'
                              : 'bg-muted text-muted-foreground'
                          }
                        >
                          {session.status === 'active'
                            ? language === 'zh'
                              ? '活跃'
                              : 'Active'
                            : language === 'zh'
                            ? '已过期'
                            : 'Expired'}
                        </Badge>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="sm">
                          {language === 'zh' ? '注销' : 'Revoke'}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* Placeholder for other tabs */}
      {['permissions', 'dataPermissions'].includes(activeTab) && (
        <div className="animate-fade-in-up">
          <Card>
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-4">🚧</div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'zh' ? '功能开发中' : 'Under Development'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'zh'
                  ? '此功能正在开发中，敬请期待'
                  : 'This feature is under development, coming soon'}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
