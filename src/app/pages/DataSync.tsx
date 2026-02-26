import React from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Database, RefreshCw, CheckCircle2, Clock, Settings } from 'lucide-react';

const syncSources = [
  {
    id: '1',
    name: 'PostgreSQL - Production',
    type: 'PostgreSQL',
    status: 'connected',
    lastSync: '2025-02-26 10:30',
    frequency: '每小时',
    frequencyEn: 'Hourly',
  },
  {
    id: '2',
    name: 'Redis Cache',
    type: 'Redis',
    status: 'connected',
    lastSync: '2025-02-26 10:45',
    frequency: '实时',
    frequencyEn: 'Real-time',
  },
  {
    id: '3',
    name: 'External API',
    type: 'REST API',
    status: 'syncing',
    lastSync: '2025-02-26 10:00',
    frequency: '每30分钟',
    frequencyEn: 'Every 30 min',
  },
];

export function DataSync() {
  const { language } = useApp();

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {syncSources.map((source) => (
          <Card key={source.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <Database className="w-8 h-8 text-[#1890FF]" />
                <Badge
                  className={
                    source.status === 'connected'
                      ? 'bg-[#52C41A] text-white'
                      : 'bg-[#1890FF] text-white'
                  }
                >
                  {source.status === 'connected'
                    ? language === 'zh'
                      ? '已连接'
                      : 'Connected'
                    : language === 'zh'
                    ? '同步中'
                    : 'Syncing'}
                </Badge>
              </div>
              <CardTitle className="text-base mt-2">{source.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{source.type}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
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
  );
}
