import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { 
  Database, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  Settings,
  Search,
  Edit,
  Trash2,
  Play,
  Download,
  FileJson,
  FileSpreadsheet,
  XCircle,
  Shield,
  Calendar,
  ChevronDown
} from 'lucide-react';

const syncSources = [
  {
    id: '1',
    name: 'PostgreSQL - Production',
    type: 'PostgreSQL',
    status: 'connected',
    lastSync: '2025-02-26 10:30',
    frequency: '每小时',
    frequencyEn: 'Hourly',
    records: 125430,
    icon: Database,
  },
  {
    id: '2',
    name: 'Redis Cache',
    type: 'Redis',
    status: 'connected',
    lastSync: '2025-02-26 10:45',
    frequency: '实时',
    frequencyEn: 'Real-time',
    records: 8920,
    icon: Database,
  },
  {
    id: '3',
    name: 'External API',
    type: 'REST API',
    status: 'syncing',
    lastSync: '2025-02-26 10:00',
    frequency: '每30分钟',
    frequencyEn: 'Every 30 min',
    records: 3450,
    icon: Database,
  },
  {
    id: '4',
    name: 'MongoDB Cluster',
    type: 'MongoDB',
    status: 'connected',
    lastSync: '2025-02-26 10:15',
    frequency: '每2小时',
    frequencyEn: 'Every 2 hours',
    records: 45200,
    icon: Database,
  },
  {
    id: '5',
    name: 'S3 Storage',
    type: 'AWS S3',
    status: 'error',
    lastSync: '2025-02-26 08:30',
    frequency: '每天',
    frequencyEn: 'Daily',
    records: 0,
    icon: Database,
  },
];

const syncHistory = [
  {
    id: '1',
    source: 'PostgreSQL - Production',
    timestamp: '2025-02-26 10:30:45',
    duration: '2m 34s',
    records: 1250,
    errors: 0,
    status: 'success',
  },
  {
    id: '2',
    source: 'Redis Cache',
    timestamp: '2025-02-26 10:45:12',
    duration: '15s',
    records: 320,
    errors: 0,
    status: 'success',
  },
  {
    id: '3',
    source: 'External API',
    timestamp: '2025-02-26 10:00:23',
    duration: '5m 12s',
    records: 890,
    errors: 3,
    status: 'warning',
  },
  {
    id: '4',
    source: 'MongoDB Cluster',
    timestamp: '2025-02-26 10:15:34',
    duration: '3m 45s',
    records: 2340,
    errors: 0,
    status: 'success',
  },
  {
    id: '5',
    source: 'S3 Storage',
    timestamp: '2025-02-26 08:30:11',
    duration: '0s',
    records: 0,
    errors: 1,
    status: 'error',
  },
  {
    id: '6',
    source: 'PostgreSQL - Production',
    timestamp: '2025-02-26 09:30:22',
    duration: '2m 28s',
    records: 1180,
    errors: 0,
    status: 'success',
  },
];

const scheduledJobs = [
  {
    id: '1',
    name: 'PostgreSQL 每小时同步',
    nameEn: 'PostgreSQL Hourly Sync',
    source: 'PostgreSQL - Production',
    schedule: '0 * * * *',
    nextRun: '2025-02-26 11:00',
    enabled: true,
  },
  {
    id: '2',
    name: 'MongoDB 每2小时同步',
    nameEn: 'MongoDB 2-Hour Sync',
    source: 'MongoDB Cluster',
    schedule: '0 */2 * * *',
    nextRun: '2025-02-26 12:00',
    enabled: true,
  },
  {
    id: '3',
    name: 'S3 每日同步',
    nameEn: 'S3 Daily Sync',
    source: 'S3 Storage',
    schedule: '0 0 * * *',
    nextRun: '2025-02-27 00:00',
    enabled: false,
  },
  {
    id: '4',
    name: 'API 每30分钟同步',
    nameEn: 'API 30-Min Sync',
    source: 'External API',
    schedule: '*/30 * * * *',
    nextRun: '2025-02-26 11:00',
    enabled: true,
  },
];

type TabType = 'overview' | 'sources' | 'history' | 'scheduler' | 'security' | 'export';

export function DataSync() {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [exportFormat, setExportFormat] = useState<'json' | 'csv' | 'excel'>('json');
  const [selectedFields, setSelectedFields] = useState<Record<string, boolean>>({
    id: true,
    name: true,
    type: true,
    status: true,
    lastSync: true,
    frequency: false,
    records: false,
  });

  const exportFields = [
    { id: 'id', label: 'ID', checked: true },
    { id: 'name', label: language === 'zh' ? '名称' : 'Name', checked: true },
    { id: 'type', label: language === 'zh' ? '类型' : 'Type', checked: true },
    { id: 'status', label: language === 'zh' ? '状态' : 'Status', checked: true },
    { id: 'lastSync', label: language === 'zh' ? '最后同步' : 'Last Sync', checked: true },
    { id: 'frequency', label: language === 'zh' ? '频率' : 'Frequency', checked: false },
    { id: 'records', label: language === 'zh' ? '记录数' : 'Records', checked: false },
  ];

  const tabs = [
    { id: 'overview', label: language === 'zh' ? '概览' : 'Overview' },
    { id: 'sources', label: language === 'zh' ? '数据源' : 'Sources' },
    { id: 'history', label: language === 'zh' ? '同步历史' : 'History' },
    { id: 'scheduler', label: language === 'zh' ? '调度器' : 'Scheduler' },
    { id: 'security', label: language === 'zh' ? '安全' : 'Security' },
    { id: 'export', label: language === 'zh' ? '导出' : 'Export' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
      case 'success':
        return 'text-[#52C41A]';
      case 'syncing':
      case 'warning':
        return 'text-[#FAAD14]';
      case 'error':
        return 'text-[#FF4D4F]';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      connected: language === 'zh' ? '已连接' : 'Connected',
      syncing: language === 'zh' ? '同步中' : 'Syncing',
      error: language === 'zh' ? '错误' : 'Error',
      success: language === 'zh' ? '成功' : 'Success',
      warning: language === 'zh' ? '警告' : 'Warning',
    };
    return labels[status as keyof typeof labels] || status;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            {language === 'zh' ? '数据同步' : 'Data Sync'}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {language === 'zh' ? '管理数据源同步配置' : 'Manage data source sync configuration'}
          </p>
        </div>
        <Button>
          {language === 'zh' ? '添加数据源' : 'Add Data Source'}
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex gap-6 overflow-x-auto">
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
        <div className="space-y-4 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {syncSources.map((source) => (
              <Card key={source.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Database className="w-8 h-8 text-[#1890FF]" />
                    <div className={`w-2 h-2 rounded-full ${
                      source.status === 'connected' ? 'bg-[#52C41A]' : 
                      source.status === 'syncing' ? 'bg-[#FAAD14]' : 
                      'bg-[#FF4D4F]'
                    } animate-pulse`} />
                  </div>
                  <CardTitle className="text-base mt-2">{source.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{source.type}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === 'zh' ? '状态' : 'Status'}
                      </span>
                      <span className={`font-medium ${getStatusColor(source.status)}`}>
                        {getStatusLabel(source.status)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === 'zh' ? '最后同步' : 'Last Sync'}
                      </span>
                      <span className="font-medium">{source.lastSync}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === 'zh' ? '同步频率' : 'Frequency'}
                      </span>
                      <span className="font-medium">
                        {language === 'zh' ? source.frequency : source.frequencyEn}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === 'zh' ? '记录数' : 'Records'}
                      </span>
                      <span className="font-medium">{source.records.toLocaleString()}</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <RefreshCw className="w-4 h-4 mr-1" />
                        {language === 'zh' ? '同步' : 'Sync'}
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
        </div>
      )}

      {/* Sources Tab */}
      {activeTab === 'sources' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={language === 'zh' ? '搜索数据源...' : 'Search sources...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '名称' : 'Name'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '类型' : 'Type'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '状态' : 'Status'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '同步频率' : 'Frequency'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '记录数' : 'Records'}
                    </th>
                    <th className="text-right p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '操作' : 'Actions'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {syncSources.map((source) => (
                    <tr key={source.id} className="border-b border-border hover:bg-muted/50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Database className="w-5 h-5 text-[#1890FF]" />
                          <span className="font-medium">{source.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{source.type}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            source.status === 'connected' ? 'bg-[#52C41A]' : 
                            source.status === 'syncing' ? 'bg-[#FAAD14]' : 
                            'bg-[#FF4D4F]'
                          }`} />
                          <span className={`text-sm ${getStatusColor(source.status)}`}>
                            {getStatusLabel(source.status)}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm">
                        {language === 'zh' ? source.frequency : source.frequencyEn}
                      </td>
                      <td className="p-4 text-sm">{source.records.toLocaleString()}</td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Play className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4 text-[#FF4D4F]" />
                          </Button>
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

      {/* History Tab */}
      {activeTab === 'history' && (
        <div className="space-y-4 animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle>{language === 'zh' ? '同步历史' : 'Sync History'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {syncHistory.map((event, index) => (
                  <div key={event.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        event.status === 'success' ? 'bg-[#F6FFED] text-[#52C41A]' :
                        event.status === 'warning' ? 'bg-[#FFFBE6] text-[#FAAD14]' :
                        'bg-[#FFF2F0] text-[#FF4D4F]'
                      }`}>
                        {event.status === 'success' ? <CheckCircle2 className="w-5 h-5" /> :
                         event.status === 'warning' ? <Clock className="w-5 h-5" /> :
                         <XCircle className="w-5 h-5" />}
                      </div>
                      {index < syncHistory.length - 1 && (
                        <div className="w-0.5 flex-1 bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{event.source}</h4>
                          <p className="text-sm text-muted-foreground">{event.timestamp}</p>
                        </div>
                        <Badge
                          className={
                            event.status === 'success'
                              ? 'bg-[#52C41A] text-white'
                              : event.status === 'warning'
                              ? 'bg-[#FAAD14] text-white'
                              : 'bg-[#FF4D4F] text-white'
                          }
                        >
                          {getStatusLabel(event.status)}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">
                            {language === 'zh' ? '持续时间' : 'Duration'}:
                          </span>
                          <span className="ml-2 font-medium">{event.duration}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            {language === 'zh' ? '记录数' : 'Records'}:
                          </span>
                          <span className="ml-2 font-medium">{event.records.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            {language === 'zh' ? '错误' : 'Errors'}:
                          </span>
                          <span className={`ml-2 font-medium ${
                            event.errors > 0 ? 'text-[#FF4D4F]' : 'text-[#52C41A]'
                          }`}>
                            {event.errors}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Scheduler Tab */}
      {activeTab === 'scheduler' && (
        <div className="space-y-4 animate-fade-in-up">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{language === 'zh' ? '计划任务' : 'Scheduled Jobs'}</CardTitle>
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {language === 'zh' ? '日历视图' : 'Calendar View'}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {scheduledJobs.map((job) => (
                  <Card key={job.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium">
                              {language === 'zh' ? job.name : job.nameEn}
                            </h4>
                            <Badge variant="outline" className="text-xs">
                              {job.schedule}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{job.source}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-muted-foreground">
                              {language === 'zh' ? '下次运行' : 'Next Run'}:
                            </span>
                            <span className="font-medium">{job.nextRun}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={job.enabled}
                              onChange={() => {}}
                              className="w-4 h-4 rounded border-border text-[#1890FF] focus:ring-[#1890FF] focus:ring-offset-0"
                            />
                            <span className="text-sm text-muted-foreground">
                              {language === 'zh' ? '启用' : 'Enabled'}
                            </span>
                          </label>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="space-y-4 animate-fade-in-up">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'zh' ? '安全配置' : 'Security Configuration'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#1890FF]" />
                  <div>
                    <h4 className="font-medium">
                      {language === 'zh' ? 'SSL/TLS 加密' : 'SSL/TLS Encryption'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'zh' ? '启用传输层加密' : 'Enable transport encryption'}
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  className="w-4 h-4 rounded border-border text-[#1890FF] focus:ring-[#1890FF]"
                />
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#1890FF]" />
                  <div>
                    <h4 className="font-medium">
                      {language === 'zh' ? 'API 密钥轮换' : 'API Key Rotation'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'zh' ? '每30天自动轮换密钥' : 'Auto-rotate keys every 30 days'}
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  className="w-4 h-4 rounded border-border text-[#1890FF] focus:ring-[#1890FF]"
                />
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#1890FF]" />
                  <div>
                    <h4 className="font-medium">
                      {language === 'zh' ? 'IP 白名单' : 'IP Whitelist'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'zh' ? '限制可访问的IP地址' : 'Restrict accessible IP addresses'}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {language === 'zh' ? '配置' : 'Configure'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Export Tab */}
      {activeTab === 'export' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Configuration */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>{language === 'zh' ? '导出格式' : 'Export Format'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <button
                    onClick={() => setExportFormat('json')}
                    className={`w-full p-4 border rounded-lg flex items-center gap-3 transition-colors ${
                      exportFormat === 'json'
                        ? 'border-[#1890FF] bg-[#E6F7FF] dark:bg-[#1890FF]/10'
                        : 'border-border hover:bg-muted'
                    }`}
                  >
                    <FileJson className="w-5 h-5 text-[#1890FF]" />
                    <div className="text-left">
                      <div className="font-medium">JSON</div>
                      <div className="text-sm text-muted-foreground">
                        {language === 'zh' ? '结构化数据格式' : 'Structured data format'}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setExportFormat('csv')}
                    className={`w-full p-4 border rounded-lg flex items-center gap-3 transition-colors ${
                      exportFormat === 'csv'
                        ? 'border-[#1890FF] bg-[#E6F7FF] dark:bg-[#1890FF]/10'
                        : 'border-border hover:bg-muted'
                    }`}
                  >
                    <FileSpreadsheet className="w-5 h-5 text-[#52C41A]" />
                    <div className="text-left">
                      <div className="font-medium">CSV</div>
                      <div className="text-sm text-muted-foreground">
                        {language === 'zh' ? '逗号分隔值' : 'Comma-separated values'}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setExportFormat('excel')}
                    className={`w-full p-4 border rounded-lg flex items-center gap-3 transition-colors ${
                      exportFormat === 'excel'
                        ? 'border-[#1890FF] bg-[#E6F7FF] dark:bg-[#1890FF]/10'
                        : 'border-border hover:bg-muted'
                    }`}
                  >
                    <FileSpreadsheet className="w-5 h-5 text-[#52C41A]" />
                    <div className="text-left">
                      <div className="font-medium">Excel</div>
                      <div className="text-sm text-muted-foreground">
                        {language === 'zh' ? 'Microsoft Excel 格式' : 'Microsoft Excel format'}
                      </div>
                    </div>
                  </button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{language === 'zh' ? '选择字段' : 'Select Fields'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(selectedFields).map(([field, checked]) => (
                      <label key={field} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-muted rounded">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={(e) =>
                            setSelectedFields({ ...selectedFields, [field]: e.target.checked })
                          }
                          className="w-4 h-4 rounded border-border text-[#1890FF] focus:ring-[#1890FF]"
                        />
                        <span className="text-sm capitalize">{field}</span>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Preview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{language === 'zh' ? '预览' : 'Preview'}</CardTitle>
                  <Badge variant="outline">{exportFormat.toUpperCase()}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-4 font-mono text-xs overflow-auto max-h-[400px]">
                  {exportFormat === 'json' && (
                    <pre>{JSON.stringify(
                      syncSources.slice(0, 2).map(source => {
                        const filtered: any = {};
                        Object.entries(selectedFields).forEach(([field, checked]) => {
                          if (checked && field in source) {
                            filtered[field] = (source as any)[field];
                          }
                        });
                        return filtered;
                      }),
                      null,
                      2
                    )}</pre>
                  )}
                  {exportFormat === 'csv' && (
                    <pre>
                      {Object.keys(selectedFields).filter(k => selectedFields[k]).join(',')}{'\n'}
                      {syncSources.slice(0, 2).map(source => 
                        Object.keys(selectedFields)
                          .filter(k => selectedFields[k])
                          .map(k => (source as any)[k])
                          .join(',')
                      ).join('\n')}
                    </pre>
                  )}
                  {exportFormat === 'excel' && (
                    <div className="text-muted-foreground text-center py-8">
                      {language === 'zh' 
                        ? 'Excel 文件将包含选定的字段和所有数据源'
                        : 'Excel file will contain selected fields and all sources'}
                    </div>
                  )}
                </div>
                <Button className="w-full mt-4">
                  <Download className="w-4 h-4 mr-2" />
                  {language === 'zh' ? '导出数据' : 'Export Data'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}