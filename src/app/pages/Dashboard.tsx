import React from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Plus,
  Upload,
  FileText,
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const progressData = [
  { date: '02/20', value: 45 },
  { date: '02/21', value: 52 },
  { date: '02/22', value: 61 },
  { date: '02/23', value: 58 },
  { date: '02/24', value: 70 },
  { date: '02/25', value: 78 },
  { date: '02/26', value: 85 },
];

const statusData = [
  { name: '进行中', value: 35, nameEn: 'In Progress' },
  { name: '已完成', value: 45, nameEn: 'Completed' },
  { name: '待审核', value: 15, nameEn: 'Pending' },
  { name: '暂停', value: 5, nameEn: 'Paused' },
];

const COLORS = ['#1890FF', '#52C41A', '#FAAD14', '#FF4D4F'];

const activities = [
  {
    id: 1,
    user: '张三',
    userEn: 'Zhang San',
    action: '完成了任务',
    actionEn: 'completed task',
    target: '图像分类-批次01',
    targetEn: 'Image Classification - Batch 01',
    time: '5分钟前',
    timeEn: '5 minutes ago',
  },
  {
    id: 2,
    user: '李四',
    userEn: 'Li Si',
    action: '创建了任务',
    actionEn: 'created task',
    target: '文本标注-批次03',
    targetEn: 'Text Annotation - Batch 03',
    time: '1小时前',
    timeEn: '1 hour ago',
  },
  {
    id: 3,
    user: '王五',
    userEn: 'Wang Wu',
    action: '审核通过',
    actionEn: 'approved',
    target: '数据清洗-批次02',
    targetEn: 'Data Cleaning - Batch 02',
    time: '2小时前',
    timeEn: '2 hours ago',
  },
  {
    id: 4,
    user: '赵六',
    userEn: 'Zhao Liu',
    action: '导出了数据',
    actionEn: 'exported data',
    target: '标注结果-月度汇总',
    targetEn: 'Annotation Results - Monthly Summary',
    time: '3小时前',
    timeEn: '3 hours ago',
  },
];

export function Dashboard() {
  const { t, language } = useApp();

  const stats = [
    {
      title: t('dashboard.totalTasks'),
      value: '248',
      change: '+12%',
      trend: 'up',
      icon: ClipboardList,
      color: '#1890FF',
      bgColor: '#E6F7FF',
    },
    {
      title: t('dashboard.inProgress'),
      value: '87',
      change: '+5%',
      trend: 'up',
      icon: Clock,
      color: '#FAAD14',
      bgColor: '#FFFBE6',
    },
    {
      title: t('dashboard.completed'),
      value: '142',
      change: '+18%',
      trend: 'up',
      icon: CheckCircle2,
      color: '#52C41A',
      bgColor: '#F6FFED',
    },
    {
      title: t('dashboard.pending'),
      value: '19',
      change: '-3%',
      trend: 'down',
      icon: AlertCircle,
      color: '#FF4D4F',
      bgColor: '#FFF2F0',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-r from-[#1890FF] to-[#722ED1] text-white border-0">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-semibold mb-2">
            {t('dashboard.welcome')}, {language === 'zh' ? '用户' : 'User'}
          </h1>
          <p className="text-white/90">
            {new Date().toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <h3 className="text-3xl font-semibold mb-2">{stat.value}</h3>
                  <div className="flex items-center gap-1">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-[#52C41A]" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-[#FF4D4F]" />
                    )}
                    <span
                      className={`text-sm ${
                        stat.trend === 'up' ? 'text-[#52C41A]' : 'text-[#FF4D4F]'
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Area Chart */}
        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.annotationTrend')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={progressData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1890FF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#1890FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
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
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#1890FF"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.taskDistribution')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent, nameEn }) => `${language === 'zh' ? name : nameEn} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{t('dashboard.recentActivity')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-[#E6F7FF] dark:bg-[#1F1F1F] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1890FF] font-medium text-sm">
                      {(language === 'zh' ? activity.user : activity.userEn).charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{language === 'zh' ? activity.user : activity.userEn}</span>
                      {' '}
                      <span className="text-foreground-secondary">
                        {language === 'zh' ? activity.action : activity.actionEn}
                      </span>
                      {' '}
                      <span className="font-medium">{language === 'zh' ? activity.target : activity.targetEn}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {language === 'zh' ? activity.time : activity.timeEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.quickActions')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start" size="lg">
                <Plus className="w-5 h-5 mr-2" />
                {t('dashboard.newTask')}
              </Button>
              <Button className="w-full justify-start" variant="outline" size="lg">
                <Upload className="w-5 h-5 mr-2" />
                {t('dashboard.importData')}
              </Button>
              <Button className="w-full justify-start" variant="outline" size="lg">
                <FileText className="w-5 h-5 mr-2" />
                {t('dashboard.viewReport')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
