import React from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Shield, ShieldCheck, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

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
];

export function SecurityCenter() {
  const { language } = useApp();

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

      {/* Security Score */}
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
                  <span className="text-[#FAAD14]">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="audit" className="w-full">
        <TabsList>
          <TabsTrigger value="audit">
            {language === 'zh' ? '审计日志' : 'Audit Logs'}
          </TabsTrigger>
          <TabsTrigger value="rbac">
            {language === 'zh' ? 'RBAC' : 'RBAC'}
          </TabsTrigger>
          <TabsTrigger value="sso">
            {language === 'zh' ? 'SSO' : 'SSO'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="audit">
          <Card>
            <CardHeader>
              <CardTitle>{language === 'zh' ? '审计日志' : 'Audit Logs'}</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{language === 'zh' ? '用户' : 'User'}</TableHead>
                    <TableHead>{language === 'zh' ? '操作' : 'Action'}</TableHead>
                    <TableHead>{language === 'zh' ? '资源' : 'Resource'}</TableHead>
                    <TableHead>{language === 'zh' ? 'IP 地址' : 'IP Address'}</TableHead>
                    <TableHead>{language === 'zh' ? '状态' : 'Status'}</TableHead>
                    <TableHead>{language === 'zh' ? '时间' : 'Time'}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">
                        {language === 'zh' ? log.user : log.userEn}
                      </TableCell>
                      <TableCell>
                        {language === 'zh' ? log.action : log.actionEn}
                      </TableCell>
                      <TableCell>
                        {language === 'zh' ? log.resource : log.resourceEn}
                      </TableCell>
                      <TableCell className="font-mono text-sm">{log.ip}</TableCell>
                      <TableCell>
                        {log.status === 'success' ? (
                          <Badge className="bg-[#52C41A] text-white">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            {language === 'zh' ? '成功' : 'Success'}
                          </Badge>
                        ) : (
                          <Badge className="bg-[#FF4D4F] text-white">
                            <XCircle className="w-3 h-3 mr-1" />
                            {language === 'zh' ? '拒绝' : 'Denied'}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground">{log.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rbac">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                {language === 'zh' ? '角色权限管理功能' : 'Role-based access control features'}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sso">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                {language === 'zh' ? '单点登录配置' : 'Single sign-on configuration'}
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
