import React from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ShieldCheck, TrendingUp, AlertTriangle } from 'lucide-react';

const qualityData = [
  { date: '02/20', score: 78 },
  { date: '02/21', score: 82 },
  { date: '02/22', score: 85 },
  { date: '02/23', score: 83 },
  { date: '02/24', score: 88 },
  { date: '02/25', score: 90 },
  { date: '02/26', score: 92 },
];

export function QualityManagement() {
  const { language } = useApp();

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
  );
}
