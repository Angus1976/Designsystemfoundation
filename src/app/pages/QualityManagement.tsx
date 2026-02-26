import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  ShieldCheck, 
  TrendingUp, 
  AlertTriangle, 
  Settings, 
  FileText, 
  Workflow,
  Search,
  Download,
  MoreVertical,
  GripVertical,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const qualityData = [
  { date: '02/20', score: 78 },
  { date: '02/21', score: 82 },
  { date: '02/22', score: 85 },
  { date: '02/23', score: 83 },
  { date: '02/24', score: 88 },
  { date: '02/25', score: 90 },
  { date: '02/26', score: 92 },
];

const qualityRules = [
  {
    id: '1',
    name: '数据完整性检查',
    nameEn: 'Data Integrity Check',
    description: '确保所有必填字段都已填写',
    descriptionEn: 'Ensure all required fields are filled',
    severity: 'high',
    enabled: true,
    violations: 12,
  },
  {
    id: '2',
    name: '格式一致性',
    nameEn: 'Format Consistency',
    description: '验证日期、邮箱等字段格式',
    descriptionEn: 'Validate date, email field formats',
    severity: 'medium',
    enabled: true,
    violations: 5,
  },
  {
    id: '3',
    name: '重复数据检测',
    nameEn: 'Duplicate Detection',
    description: '识别和标记重复记录',
    descriptionEn: 'Identify and flag duplicate records',
    severity: 'high',
    enabled: true,
    violations: 3,
  },
  {
    id: '4',
    name: '标注一致性',
    nameEn: 'Annotation Consistency',
    description: '检查标注者之间的一致性',
    descriptionEn: 'Check consistency across annotators',
    severity: 'medium',
    enabled: false,
    violations: 0,
  },
  {
    id: '5',
    name: '数据准确性',
    nameEn: 'Data Accuracy',
    description: '验证数据值的准确性和合理性',
    descriptionEn: 'Validate accuracy of data values',
    severity: 'low',
    enabled: true,
    violations: 8,
  },
  {
    id: '6',
    name: '时效性检查',
    nameEn: 'Timeliness Check',
    description: '检查数据是否及时更新',
    descriptionEn: 'Check if data is updated timely',
    severity: 'low',
    enabled: true,
    violations: 2,
  },
];

const qualityReports = [
  {
    id: '1',
    title: '2月质量报告',
    titleEn: 'February Quality Report',
    dateRange: '2025-02-01 至 2025-02-28',
    dateRangeEn: '2025-02-01 to 2025-02-28',
    overallScore: 92,
    totalRecords: 15420,
    passedRecords: 14186,
    issues: 234,
  },
  {
    id: '2',
    title: '1月质量报告',
    titleEn: 'January Quality Report',
    dateRange: '2025-01-01 至 2025-01-31',
    dateRangeEn: '2025-01-01 to 2025-01-31',
    overallScore: 88,
    totalRecords: 14230,
    passedRecords: 12522,
    issues: 1708,
  },
  {
    id: '3',
    title: '12月质量报告',
    titleEn: 'December Quality Report',
    dateRange: '2024-12-01 至 2024-12-31',
    dateRangeEn: '2024-12-01 to 2024-12-31',
    overallScore: 85,
    totalRecords: 13890,
    passedRecords: 11806,
    issues: 2084,
  },
];

const improvementTasks = [
  {
    id: '1',
    title: '修复数据完整性问题',
    titleEn: 'Fix data integrity issues',
    description: '处理12个缺失必填字段的记录',
    descriptionEn: 'Handle 12 records with missing required fields',
    assignee: '张三',
    assigneeEn: 'Zhang San',
    priority: 'high',
    status: 'pending',
  },
  {
    id: '2',
    title: '优化标注流程',
    titleEn: 'Optimize annotation process',
    description: '减少标注者之间的差异',
    descriptionEn: 'Reduce variance between annotators',
    assignee: '李四',
    assigneeEn: 'Li Si',
    priority: 'medium',
    status: 'pending',
  },
  {
    id: '3',
    title: '格式标准化',
    titleEn: 'Format standardization',
    description: '统一日期和邮箱格式',
    descriptionEn: 'Unify date and email formats',
    assignee: '王五',
    assigneeEn: 'Wang Wu',
    priority: 'low',
    status: 'inProgress',
  },
  {
    id: '4',
    title: '去重处理',
    titleEn: 'Deduplication',
    description: '合并3组重复记录',
    descriptionEn: 'Merge 3 duplicate record groups',
    assignee: '赵六',
    assigneeEn: 'Zhao Liu',
    priority: 'high',
    status: 'inProgress',
  },
  {
    id: '5',
    title: '数据验证规则更新',
    titleEn: 'Update validation rules',
    description: '添加新的数据验证规则',
    descriptionEn: 'Add new validation rules',
    assignee: '张三',
    assigneeEn: 'Zhang San',
    priority: 'medium',
    status: 'completed',
  },
  {
    id: '6',
    title: '质量报告自动化',
    titleEn: 'Automate quality reports',
    description: '实现每周自动生成报告',
    descriptionEn: 'Auto-generate weekly reports',
    assignee: '李四',
    assigneeEn: 'Li Si',
    priority: 'low',
    status: 'verified',
  },
];

type TabType = 'overview' | 'rules' | 'reports' | 'workflow';

export function QualityManagement() {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [ruleToggles, setRuleToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(qualityRules.map(rule => [rule.id, rule.enabled]))
  );

  const tabs = [
    { id: 'overview', label: language === 'zh' ? '概览' : 'Overview' },
    { id: 'rules', label: language === 'zh' ? '规则管理' : 'Rules' },
    { id: 'reports', label: language === 'zh' ? '报告' : 'Reports' },
    { id: 'workflow', label: language === 'zh' ? '改进工作流' : 'Workflow' },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-[#FF4D4F] text-white';
      case 'medium':
        return 'bg-[#FAAD14] text-white';
      case 'low':
        return 'bg-[#52C41A] text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityLabel = (severity: string) => {
    if (language === 'zh') {
      return { high: '高', medium: '中', low: '低' }[severity];
    }
    return { high: 'High', medium: 'Medium', low: 'Low' }[severity];
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-[#FF4D4F]';
      case 'medium':
        return 'border-[#FAAD14]';
      case 'low':
        return 'border-[#52C41A]';
      default:
        return 'border-border';
    }
  };

  const getStatusColumn = (status: string) => {
    return { pending: 0, inProgress: 1, completed: 2, verified: 3 }[status] || 0;
  };

  const tasksByStatus = {
    pending: improvementTasks.filter(t => t.status === 'pending'),
    inProgress: improvementTasks.filter(t => t.status === 'inProgress'),
    completed: improvementTasks.filter(t => t.status === 'completed'),
    verified: improvementTasks.filter(t => t.status === 'verified'),
  };

  const filteredRules = qualityRules.filter(rule =>
    searchTerm === '' ||
    rule.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rule.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">
          {language === 'zh' ? '质量管理' : 'Quality Management'}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {language === 'zh' ? '数据质量监控与改进' : 'Data quality monitoring and improvement'}
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#F6FFED] dark:bg-[#1F1F1F] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#52C41A]" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">92</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'zh' ? '质量分数' : 'Quality Score'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#E6F7FF] dark:bg-[#1F1F1F] flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#1890FF]" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">+14%</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'zh' ? '本月提升' : 'Monthly Improvement'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#FFFBE6] dark:bg-[#1F1F1F] flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-[#FAAD14]" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">3</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'zh' ? '待处理问题' : 'Pending Issues'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'zh' ? '质量趋势' : 'Quality Trend'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={qualityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="date" stroke="var(--foreground-tertiary)" />
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
                    dataKey="score"
                    stroke="#52C41A"
                    strokeWidth={2}
                    dot={{ fill: '#52C41A', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Rules Tab */}
      {activeTab === 'rules' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={language === 'zh' ? '搜索规则...' : 'Search rules...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button>
              <Settings className="w-4 h-4 mr-2" />
              {language === 'zh' ? '新建规则' : 'New Rule'}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRules.map((rule) => (
              <Card key={rule.id} className="relative">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base">
                        {language === 'zh' ? rule.name : rule.nameEn}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {language === 'zh' ? rule.description : rule.descriptionEn}
                      </p>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className={getSeverityColor(rule.severity)}>
                        {getSeverityLabel(rule.severity)}
                      </Badge>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={ruleToggles[rule.id]}
                          onChange={(e) => {
                            setRuleToggles({ ...ruleToggles, [rule.id]: e.target.checked });
                          }}
                          className="w-4 h-4 rounded border-border text-[#1890FF] focus:ring-[#1890FF] focus:ring-offset-0"
                        />
                        <span className="text-sm text-muted-foreground">
                          {language === 'zh' ? '启用' : 'Enabled'}
                        </span>
                      </label>
                    </div>
                    {rule.violations > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-[#FF4D4F]" />
                        <span className="text-muted-foreground">
                          {language === 'zh' ? `${rule.violations} 个违规` : `${rule.violations} violations`}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Reports Tab */}
      {activeTab === 'reports' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {language === 'zh' ? '质量报告' : 'Quality Reports'}
            </h2>
            <Button variant="outline">
              {language === 'zh' ? '生成报告' : 'Generate Report'}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualityReports.map((report) => (
              <Card key={report.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <FileText className="w-8 h-8 text-[#1890FF]" />
                    <Badge className="bg-[#E6F7FF] text-[#1890FF]">
                      {language === 'zh' ? '已完成' : 'Completed'}
                    </Badge>
                  </div>
                  <CardTitle className="text-base mt-2">
                    {language === 'zh' ? report.title : report.titleEn}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {language === 'zh' ? report.dateRange : report.dateRangeEn}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {language === 'zh' ? '总体分数' : 'Overall Score'}
                      </span>
                      <span className="text-2xl font-semibold text-[#52C41A]">
                        {report.overallScore}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {language === 'zh' ? '总记录数' : 'Total Records'}
                        </span>
                        <span className="font-medium">{report.totalRecords.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {language === 'zh' ? '通过记录' : 'Passed'}
                        </span>
                        <span className="font-medium text-[#52C41A]">
                          {report.passedRecords.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {language === 'zh' ? '问题数量' : 'Issues'}
                        </span>
                        <span className="font-medium text-[#FF4D4F]">
                          {report.issues.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      <Download className="w-4 h-4 mr-2" />
                      {language === 'zh' ? '下载 PDF' : 'Download PDF'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Workflow Tab - Kanban Board */}
      {activeTab === 'workflow' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {language === 'zh' ? '改进工作流' : 'Improvement Workflow'}
            </h2>
            <Button>
              {language === 'zh' ? '新建任务' : 'New Task'}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { key: 'pending', label: language === 'zh' ? '待处理' : 'Pending', color: 'bg-muted' },
              { key: 'inProgress', label: language === 'zh' ? '进行中' : 'In Progress', color: 'bg-[#1890FF]/10' },
              { key: 'completed', label: language === 'zh' ? '已完成' : 'Completed', color: 'bg-[#52C41A]/10' },
              { key: 'verified', label: language === 'zh' ? '已验证' : 'Verified', color: 'bg-[#722ED1]/10' },
            ].map((column) => (
              <div key={column.key} className="space-y-3">
                <div className={`${column.color} rounded-lg p-3`}>
                  <h3 className="font-medium text-sm">
                    {column.label}
                    <span className="ml-2 text-muted-foreground">
                      ({tasksByStatus[column.key as keyof typeof tasksByStatus].length})
                    </span>
                  </h3>
                </div>

                <div className="space-y-2">
                  {tasksByStatus[column.key as keyof typeof tasksByStatus].map((task) => (
                    <Card
                      key={task.id}
                      className={`cursor-move hover:shadow-md transition-shadow border-l-4 ${getPriorityColor(task.priority)}`}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-start justify-between mb-2">
                          <GripVertical className="w-4 h-4 text-muted-foreground mt-0.5" />
                          <button className="text-muted-foreground hover:text-foreground">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                        <h4 className="font-medium text-sm mb-1">
                          {language === 'zh' ? task.title : task.titleEn}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-3">
                          {language === 'zh' ? task.description : task.descriptionEn}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1890FF] to-[#722ED1] flex items-center justify-center text-xs text-white font-medium">
                              {(language === 'zh' ? task.assignee : task.assigneeEn).charAt(0)}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {language === 'zh' ? task.assignee : task.assigneeEn}
                            </span>
                          </div>
                          <Badge
                            variant="outline"
                            className={
                              task.priority === 'high'
                                ? 'border-[#FF4D4F] text-[#FF4D4F]'
                                : task.priority === 'medium'
                                ? 'border-[#FAAD14] text-[#FAAD14]'
                                : 'border-[#52C41A] text-[#52C41A]'
                            }
                          >
                            {language === 'zh'
                              ? { high: '高', medium: '中', low: '低' }[task.priority]
                              : { high: 'High', medium: 'Med', low: 'Low' }[task.priority]}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
