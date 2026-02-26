import React from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CreditCard, Download, TrendingUp } from 'lucide-react';

const usageData = [
  { date: '02/20', api: 1200, storage: 45, compute: 30 },
  { date: '02/21', api: 1500, storage: 48, compute: 35 },
  { date: '02/22', api: 1800, storage: 50, compute: 40 },
  { date: '02/23', api: 1600, storage: 52, compute: 38 },
  { date: '02/24', api: 2000, storage: 55, compute: 45 },
  { date: '02/25', api: 2200, storage: 58, compute: 50 },
  { date: '02/26', api: 2500, storage: 60, compute: 55 },
];

const invoices = [
  {
    id: 'INV-2025-02',
    date: '2025-02-01',
    amount: '¥4,580.00',
    status: 'paid',
  },
  {
    id: 'INV-2025-01',
    date: '2025-01-01',
    amount: '¥3,920.00',
    status: 'paid',
  },
  {
    id: 'INV-2024-12',
    date: '2024-12-01',
    amount: '¥4,120.00',
    status: 'paid',
  },
];

export function Billing() {
  const { language } = useApp();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            {language === 'zh' ? '计费管理' : 'Billing'}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {language === 'zh' ? '使用情况与账单管理' : 'Usage and billing management'}
          </p>
        </div>
        <Button>
          <CreditCard className="w-4 h-4 mr-2" />
          {language === 'zh' ? '更新支付方式' : 'Update Payment'}
        </Button>
      </div>

      {/* Current Plan */}
      <Card className="border-[#1890FF] bg-gradient-to-br from-card to-[#E6F7FF] dark:to-[#1F1F1F]">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <Badge className="bg-[#1890FF] text-white mb-2">
                {language === 'zh' ? '企业版' : 'Enterprise'}
              </Badge>
              <h3 className="text-2xl font-semibold">¥4,999 / {language === 'zh' ? '月' : 'month'}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {language === 'zh' ? '无限用户 · 无限项目 · 高级功能' : 'Unlimited users · Unlimited projects · Advanced features'}
              </p>
            </div>
            <Button variant="outline">
              {language === 'zh' ? '升级套餐' : 'Upgrade Plan'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Usage Meters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {language === 'zh' ? 'API 调用' : 'API Calls'}
                </span>
                <span className="font-medium">45.2K / 100K</span>
              </div>
              <Progress value={45.2} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {language === 'zh' ? '存储空间' : 'Storage'}
                </span>
                <span className="font-medium">60 GB / 200 GB</span>
              </div>
              <Progress value={30} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {language === 'zh' ? '计算时长' : 'Compute Hours'}
                </span>
                <span className="font-medium">55h / 500h</span>
              </div>
              <Progress value={11} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Chart */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'zh' ? '使用趋势' : 'Usage Trend'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={usageData}>
              <defs>
                <linearGradient id="colorApi" x1="0" y1="0" x2="0" y2="1">
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
                dataKey="api"
                stroke="#1890FF"
                fillOpacity={1}
                fill="url(#colorApi)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Invoices */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'zh' ? '账单历史' : 'Invoice History'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{language === 'zh' ? '账单号' : 'Invoice'}</TableHead>
                <TableHead>{language === 'zh' ? '日期' : 'Date'}</TableHead>
                <TableHead>{language === 'zh' ? '金额' : 'Amount'}</TableHead>
                <TableHead>{language === 'zh' ? '状态' : 'Status'}</TableHead>
                <TableHead className="text-right">
                  {language === 'zh' ? '操作' : 'Actions'}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell className="font-semibold">{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge className="bg-[#52C41A] text-white">
                      {language === 'zh' ? '已支付' : 'Paid'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      {language === 'zh' ? '下载' : 'Download'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
