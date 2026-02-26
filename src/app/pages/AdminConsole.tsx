import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Progress } from '../components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Cpu, 
  HardDrive, 
  Users, 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  Search,
  MoreVertical,
  Building2,
  Shield,
  Package,
  CreditCard,
  Settings,
  Brain,
  Eye,
  EyeOff,
  TestTube2,
  Clock
} from 'lucide-react';

const apiCallsData = [
  { time: '00:00', calls: 1200 },
  { time: '04:00', calls: 800 },
  { time: '08:00', calls: 2100 },
  { time: '12:00', calls: 3500 },
  { time: '16:00', calls: 2800 },
  { time: '20:00', calls: 1600 },
];

const llmProviders = [
  {
    id: '1',
    name: 'OpenAI',
    logo: '🤖',
    status: 'active',
    models: ['gpt-4', 'gpt-3.5-turbo', 'gpt-4-turbo'],
    apiCallsToday: 12450,
    quota: 50000,
  },
  {
    id: '2',
    name: 'Ollama',
    logo: '🦙',
    status: 'active',
    models: ['llama2', 'mistral', 'codellama'],
    apiCallsToday: 3200,
    quota: 10000,
  },
  {
    id: '3',
    name: 'Anthropic Claude',
    logo: '🧠',
    status: 'inactive',
    models: ['claude-3-opus', 'claude-3-sonnet'],
    apiCallsToday: 0,
    quota: 20000,
  },
  {
    id: '4',
    name: 'Google PaLM',
    logo: '🔮',
    status: 'active',
    models: ['palm-2', 'gemini-pro'],
    apiCallsToday: 5680,
    quota: 30000,
  },
];

const tenants = [
  {
    id: '1',
    name: '企业租户 A',
    nameEn: 'Enterprise Tenant A',
    domain: 'tenant-a.superinsight.com',
    users: 245,
    status: 'active',
    plan: 'Enterprise',
    storage: 52.3,
    storageLimit: 100,
  },
  {
    id: '2',
    name: '企业租户 B',
    nameEn: 'Enterprise Tenant B',
    domain: 'tenant-b.superinsight.com',
    users: 128,
    status: 'active',
    plan: 'Professional',
    storage: 28.5,
    storageLimit: 50,
  },
  {
    id: '3',
    name: '测试租户',
    nameEn: 'Test Tenant',
    domain: 'test.superinsight.com',
    users: 12,
    status: 'trial',
    plan: 'Trial',
    storage: 2.1,
    storageLimit: 10,
  },
];

const systemUsers = [
  {
    id: '1',
    name: '张三',
    nameEn: 'Zhang San',
    email: 'zhangsan@example.com',
    avatar: '👤',
    role: 'Admin',
    status: 'active',
    lastLogin: '2025-02-26 10:30',
    tenant: '企业租户 A',
  },
  {
    id: '2',
    name: '李四',
    nameEn: 'Li Si',
    email: 'lisi@example.com',
    avatar: '👤',
    role: 'Manager',
    status: 'active',
    lastLogin: '2025-02-26 09:15',
    tenant: '企业租户 A',
  },
  {
    id: '3',
    name: '王五',
    nameEn: 'Wang Wu',
    email: 'wangwu@example.com',
    avatar: '👤',
    role: 'User',
    status: 'active',
    lastLogin: '2025-02-26 10:45',
    tenant: '企业租户 B',
  },
  {
    id: '4',
    name: '赵六',
    nameEn: 'Zhao Liu',
    email: 'zhaoliu@example.com',
    avatar: '👤',
    role: 'User',
    status: 'inactive',
    lastLogin: '2025-02-20 14:20',
    tenant: '企业租户 B',
  },
];

type TabType = 'console' | 'tenants' | 'users' | 'permissions' | 'quota' | 'billing' | 'llm' | 'settings';

export function AdminConsole() {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState<TabType>('console');
  const [searchTerm, setSearchTerm] = useState('');
  const [showApiKey, setShowApiKey] = useState<Record<string, boolean>>({});

  const tabs = [
    { id: 'console', label: language === 'zh' ? '控制台' : 'Console', icon: Activity },
    { id: 'tenants', label: language === 'zh' ? '租户管理' : 'Tenants', icon: Building2 },
    { id: 'users', label: language === 'zh' ? '用户管理' : 'Users', icon: Users },
    { id: 'permissions', label: language === 'zh' ? '权限配置' : 'Permissions', icon: Shield },
    { id: 'quota', label: language === 'zh' ? '配额管理' : 'Quota', icon: Package },
    { id: 'billing', label: language === 'zh' ? '计费管理' : 'Billing', icon: CreditCard },
    { id: 'llm', label: language === 'zh' ? 'LLM 配置' : 'LLM Config', icon: Brain },
    { id: 'settings', label: language === 'zh' ? '系统设置' : 'Settings', icon: Settings },
  ];

  const systemMetrics = [
    { label: 'CPU', labelEn: 'CPU', value: 45, icon: Cpu, color: '#1890FF' },
    { label: '内存', labelEn: 'Memory', value: 68, icon: HardDrive, color: '#FAAD14' },
    { label: '存储', labelEn: 'Storage', value: 52, icon: HardDrive, color: '#52C41A' },
    { label: '活跃用户', labelEn: 'Active Users', value: 87, icon: Users, color: '#722ED1' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-[#52C41A] text-white';
      case 'inactive':
        return 'bg-[#FF4D4F] text-white';
      case 'trial':
        return 'bg-[#FAAD14] text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin':
        return 'bg-[#FF4D4F] text-white';
      case 'Manager':
        return 'bg-[#1890FF] text-white';
      case 'User':
        return 'bg-[#52C41A] text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">
          {language === 'zh' ? '管理控制台' : 'Admin Console'}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {language === 'zh' ? '系统监控与管理' : 'System monitoring and management'}
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-border overflow-x-auto">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`pb-3 px-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'border-[#1890FF] text-[#1890FF]'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Console Tab */}
      {activeTab === 'console' && (
        <div className="space-y-6 animate-fade-in-up">
          {/* System Health Gauges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className="w-8 h-8" style={{ color: metric.color }} />
                    <span className="text-2xl font-semibold">{metric.value}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {language === 'zh' ? metric.label : metric.labelEn}
                  </p>
                  <Progress value={metric.value} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Active Users Count */}
          <Card>
            <CardHeader>
              <CardTitle>{language === 'zh' ? '实时统计' : 'Real-time Stats'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1890FF] mb-2">1,248</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'zh' ? '在线用户' : 'Online Users'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#52C41A] mb-2">98.7%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'zh' ? '系统可用性' : 'Uptime'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#722ED1] mb-2">45ms</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'zh' ? '平均响应时间' : 'Avg Response'}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Calls Chart */}
          <Card>
            <CardHeader>
              <CardTitle>{language === 'zh' ? 'API 调用量' : 'API Calls'}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={apiCallsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="time" stroke="var(--foreground-tertiary)" />
                  <YAxis stroke="var(--foreground-tertiary)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="calls"
                    stroke="#1890FF"
                    strokeWidth={2}
                    dot={{ fill: '#1890FF', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tenants Tab */}
      {activeTab === 'tenants' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={language === 'zh' ? '搜索租户...' : 'Search tenants...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button>
              {language === 'zh' ? '新建租户' : 'New Tenant'}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {tenants.map((tenant) => (
              <Card key={tenant.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base">
                        {language === 'zh' ? tenant.name : tenant.nameEn}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{tenant.domain}</p>
                    </div>
                    <Badge className={getStatusColor(tenant.status)}>
                      {tenant.status === 'active' ? (language === 'zh' ? '活跃' : 'Active') :
                       tenant.status === 'trial' ? (language === 'zh' ? '试用' : 'Trial') :
                       (language === 'zh' ? '未活跃' : 'Inactive')}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === 'zh' ? '套餐' : 'Plan'}
                      </span>
                      <Badge variant="outline">{tenant.plan}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === 'zh' ? '用户数' : 'Users'}
                      </span>
                      <span className="font-medium">{tenant.users}</span>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">
                          {language === 'zh' ? '存储使用' : 'Storage'}
                        </span>
                        <span className="font-medium">
                          {tenant.storage} GB / {tenant.storageLimit} GB
                        </span>
                      </div>
                      <Progress value={(tenant.storage / tenant.storageLimit) * 100} className="h-2" />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        {language === 'zh' ? '管理' : 'Manage'}
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={language === 'zh' ? '搜索用户...' : 'Search users...'}
                className="pl-9"
              />
            </div>
            <Button>
              {language === 'zh' ? '新建用户' : 'New User'}
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
                      {language === 'zh' ? '邮箱' : 'Email'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '角色' : 'Role'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '状态' : 'Status'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '最后登录' : 'Last Login'}
                    </th>
                    <th className="text-right p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '操作' : 'Actions'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {systemUsers.map((user) => (
                    <tr key={user.id} className="border-b border-border hover:bg-muted/50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1890FF] to-[#722ED1] flex items-center justify-center text-white text-sm">
                            {user.avatar}
                          </div>
                          <span className="font-medium">
                            {language === 'zh' ? user.name : user.nameEn}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{user.email}</td>
                      <td className="p-4">
                        <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                      </td>
                      <td className="p-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={user.status === 'active'}
                            className="w-4 h-4 rounded border-border text-[#1890FF] focus:ring-[#1890FF]"
                          />
                          <span className="text-sm text-muted-foreground">
                            {user.status === 'active' 
                              ? (language === 'zh' ? '活跃' : 'Active')
                              : (language === 'zh' ? '未活跃' : 'Inactive')}
                          </span>
                        </label>
                      </td>
                      <td className="p-4 text-sm">{user.lastLogin}</td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
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

      {/* LLM Config Tab */}
      {activeTab === 'llm' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {language === 'zh' ? 'LLM 提供商配置' : 'LLM Provider Configuration'}
            </h2>
            <Button>
              {language === 'zh' ? '添加提供商' : 'Add Provider'}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {llmProviders.map((provider) => (
              <Card key={provider.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{provider.logo}</div>
                      <div>
                        <CardTitle className="text-base">{provider.name}</CardTitle>
                        <p className="text-xs text-muted-foreground mt-1">
                          {provider.models.length} {language === 'zh' ? '个模型' : 'models'}
                        </p>
                      </div>
                    </div>
                    <Badge className={provider.status === 'active' 
                      ? 'bg-[#52C41A] text-white' 
                      : 'bg-muted text-muted-foreground'}>
                      {provider.status === 'active' 
                        ? (language === 'zh' ? '已启用' : 'Active')
                        : (language === 'zh' ? '未启用' : 'Inactive')}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">
                        {language === 'zh' ? '可用模型' : 'Available Models'}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {provider.models.map((model, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {model}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">
                          {language === 'zh' ? '今日调用' : 'Today\'s Calls'}
                        </span>
                        <span className="font-medium">
                          {provider.apiCallsToday.toLocaleString()} / {provider.quota.toLocaleString()}
                        </span>
                      </div>
                      <Progress 
                        value={(provider.apiCallsToday / provider.quota) * 100} 
                        className="h-2" 
                      />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <TestTube2 className="w-4 h-4 mr-2" />
                        {language === 'zh' ? '测试连接' : 'Test Connection'}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* API Key Management */}
          <Card>
            <CardHeader>
              <CardTitle>{language === 'zh' ? 'API 密钥管理' : 'API Key Management'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {llmProviders.filter(p => p.status === 'active').map((provider) => (
                  <div key={provider.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{provider.logo}</span>
                      <div>
                        <div className="font-medium">{provider.name}</div>
                        <div className="text-sm text-muted-foreground font-mono">
                          {showApiKey[provider.id] 
                            ? 'sk-proj-1234567890abcdef1234567890abcdef'
                            : '••••••••••••••••••••••••••••••••'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowApiKey({ ...showApiKey, [provider.id]: !showApiKey[provider.id] })}
                      >
                        {showApiKey[provider.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button variant="outline" size="sm">
                        {language === 'zh' ? '更新' : 'Update'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Placeholder for other tabs */}
      {['permissions', 'quota', 'billing', 'settings'].includes(activeTab) && (
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
