import React from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Cpu, HardDrive, Users, Activity, AlertCircle, CheckCircle2, Info } from 'lucide-react';

export function AdminConsole() {
  const { language } = useApp();

  const systemMetrics = [
    {
      label: 'CPU',
      labelEn: 'CPU',
      value: 45,
      icon: Cpu,
      color: '#1890FF',
    },
    {
      label: '内存',
      labelEn: 'Memory',
      value: 68,
      icon: HardDrive,
      color: '#FAAD14',
    },
    {
      label: '存储',
      labelEn: 'Storage',
      value: 52,
      icon: HardDrive,
      color: '#52C41A',
    },
    {
      label: '活跃用户',
      labelEn: 'Active Users',
      value: 87,
      icon: Users,
      color: '#722ED1',
    },
  ];

  const systemAlerts = [
    {
      id: '1',
      severity: 'info',
      message: '系统更新可用',
      messageEn: 'System update available',
      time: '10 分钟前',
      timeEn: '10 min ago',
    },
    {
      id: '2',
      severity: 'warning',
      message: '磁盘使用率超过 70%',
      messageEn: 'Disk usage over 70%',
      time: '1 小时前',
      timeEn: '1 hour ago',
    },
    {
      id: '3',
      severity: 'success',
      message: '备份任务完成',
      messageEn: 'Backup task completed',
      time: '2 小时前',
      timeEn: '2 hours ago',
    },
  ];

  const severityConfig = {
    info: { icon: Info, color: '#1890FF' },
    warning: { icon: AlertCircle, color: '#FAAD14' },
    success: { icon: CheckCircle2, color: '#52C41A' },
    error: { icon: AlertCircle, color: '#FF4D4F' },
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

      {/* System Health */}
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

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">
              {language === 'zh' ? '总租户数' : 'Total Tenants'}
            </p>
            <p className="text-3xl font-semibold">24</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">
              {language === 'zh' ? '总用户数' : 'Total Users'}
            </p>
            <p className="text-3xl font-semibold">1,248</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">
              {language === 'zh' ? '活跃任务' : 'Active Tasks'}
            </p>
            <p className="text-3xl font-semibold">87</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">
              {language === 'zh' ? '今日 API 调用' : 'API Calls Today'}
            </p>
            <p className="text-3xl font-semibold">45.2K</p>
          </CardContent>
        </Card>
      </div>

      {/* System Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'zh' ? '系统告警' : 'System Alerts'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {systemAlerts.map((alert) => {
              const SeverityIcon = severityConfig[alert.severity as keyof typeof severityConfig].icon;
              const severityColor = severityConfig[alert.severity as keyof typeof severityConfig].color;
              return (
                <div
                  key={alert.id}
                  className="flex items-start gap-3 p-3 rounded-lg border border-border"
                >
                  <SeverityIcon className="w-5 h-5 flex-shrink-0" style={{ color: severityColor }} />
                  <div className="flex-1">
                    <p className="font-medium text-sm">
                      {language === 'zh' ? alert.message : alert.messageEn}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {language === 'zh' ? alert.time : alert.timeEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Admin Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">
            {language === 'zh' ? '概览' : 'Overview'}
          </TabsTrigger>
          <TabsTrigger value="tenants">
            {language === 'zh' ? '租户管理' : 'Tenants'}
          </TabsTrigger>
          <TabsTrigger value="users">
            {language === 'zh' ? '用户管理' : 'Users'}
          </TabsTrigger>
          <TabsTrigger value="llm">
            {language === 'zh' ? 'LLM 配置' : 'LLM Config'}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                {language === 'zh' ? '系统概览信息' : 'System overview information'}
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tenants">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                {language === 'zh' ? '租户管理功能' : 'Tenant management features'}
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="users">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                {language === 'zh' ? '用户管理功能' : 'User management features'}
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="llm">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                {language === 'zh' ? 'LLM 模型配置' : 'LLM model configuration'}
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
