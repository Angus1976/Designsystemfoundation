import React from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Key, AlertCircle, CheckCircle2, Calendar } from 'lucide-react';

export function License() {
  const { language } = useApp();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            {language === 'zh' ? '许可证管理' : 'License Management'}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {language === 'zh' ? '许可证信息与使用配额' : 'License information and usage quotas'}
          </p>
        </div>
        <Button>
          <Key className="w-4 h-4 mr-2" />
          {language === 'zh' ? '激活许可证' : 'Activate License'}
        </Button>
      </div>

      {/* License Status */}
      <Card className="border-[#52C41A] bg-gradient-to-br from-card to-[#F6FFED] dark:to-[#1F1F1F]">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#52C41A] flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <Badge className="bg-[#52C41A] text-white mb-2">
                  {language === 'zh' ? '企业版' : 'Enterprise Edition'}
                </Badge>
                <h3 className="text-lg font-semibold mb-1">
                  {language === 'zh' ? '许可证状态：已激活' : 'License Status: Active'}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {language === 'zh' ? '到期时间：' : 'Expires: '}
                      2026-02-26
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AlertCircle className="w-4 h-4 text-[#52C41A]" />
                    <span className="text-[#52C41A]">
                      {language === 'zh' ? '剩余 365 天' : '365 days remaining'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline">
              {language === 'zh' ? '续费' : 'Renew'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Usage Quotas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {language === 'zh' ? '用户数量' : 'Users'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-3xl font-semibold">248</span>
                <span className="text-sm text-muted-foreground">/ 500</span>
              </div>
              <Progress value={49.6} />
              <p className="text-xs text-muted-foreground">
                {language === 'zh' ? '已使用 49.6%' : '49.6% used'}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {language === 'zh' ? '存储空间' : 'Storage'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-3xl font-semibold">1.2</span>
                <span className="text-sm text-muted-foreground">/ 5 TB</span>
              </div>
              <Progress value={24} />
              <p className="text-xs text-muted-foreground">
                {language === 'zh' ? '已使用 24%' : '24% used'}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {language === 'zh' ? 'API 调用' : 'API Calls'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-3xl font-semibold">325K</span>
                <span className="text-sm text-muted-foreground">/ 1M</span>
              </div>
              <Progress value={32.5} />
              <p className="text-xs text-muted-foreground">
                {language === 'zh' ? '本月已使用 32.5%' : '32.5% used this month'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* License Details */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'zh' ? '许可证详情' : 'License Details'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">
                  {language === 'zh' ? '许可证类型' : 'License Type'}
                </span>
                <span className="font-medium">
                  {language === 'zh' ? '企业版' : 'Enterprise'}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">
                  {language === 'zh' ? '激活日期' : 'Activation Date'}
                </span>
                <span className="font-medium">2025-02-26</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">
                  {language === 'zh' ? '到期日期' : 'Expiry Date'}
                </span>
                <span className="font-medium">2026-02-26</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">
                  {language === 'zh' ? '组织名称' : 'Organization'}
                </span>
                <span className="font-medium">SuperInsight Inc.</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">
                  {language === 'zh' ? '授权用户' : 'Licensed Users'}
                </span>
                <span className="font-medium">500</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">
                  {language === 'zh' ? '支持级别' : 'Support Level'}
                </span>
                <Badge className="bg-[#1890FF] text-white">
                  {language === 'zh' ? '高级' : 'Premium'}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alert Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'zh' ? '告警配置' : 'Alert Configuration'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">
                  {language === 'zh' ? '配额预警' : 'Quota Warning'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === 'zh' ? '当使用率达到 80% 时通知' : 'Notify when usage reaches 80%'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value="80"
                  className="w-16 px-2 py-1 border border-border rounded text-sm"
                />
                <span className="text-sm">%</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">
                  {language === 'zh' ? '到期提醒' : 'Expiry Reminder'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === 'zh' ? '提前 30 天提醒续费' : 'Remind 30 days before expiry'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value="30"
                  className="w-16 px-2 py-1 border border-border rounded text-sm"
                />
                <span className="text-sm">{language === 'zh' ? '天' : 'days'}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
