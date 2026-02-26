import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import {
  Users,
  Calendar,
  Crown,
  Plus,
  Settings,
  Trash2,
  Mail,
  X,
  ChevronDown,
  MoreVertical
} from 'lucide-react';

const workspaces = [
  {
    id: '1',
    name: '企业工作空间 A',
    nameEn: 'Enterprise Workspace A',
    description: '主要数据标注项目',
    descriptionEn: 'Primary data annotation projects',
    memberCount: 45,
    createdDate: '2024-01-15',
    owner: {
      name: '张三',
      nameEn: 'Zhang San',
      avatar: '👤',
    },
  },
  {
    id: '2',
    name: '研发团队空间',
    nameEn: 'R&D Team Space',
    description: 'AI 模型训练数据准备',
    descriptionEn: 'AI model training data preparation',
    memberCount: 28,
    createdDate: '2024-02-20',
    owner: {
      name: '李四',
      nameEn: 'Li Si',
      avatar: '👤',
    },
  },
  {
    id: '3',
    name: '测试环境',
    nameEn: 'Test Environment',
    description: '新功能测试和验证',
    descriptionEn: 'New feature testing and validation',
    memberCount: 12,
    createdDate: '2024-03-01',
    owner: {
      name: '王五',
      nameEn: 'Wang Wu',
      avatar: '👤',
    },
  },
];

const members = [
  {
    id: '1',
    name: '张三',
    nameEn: 'Zhang San',
    email: 'zhangsan@example.com',
    avatar: '👤',
    role: 'admin',
    joinedDate: '2024-01-15',
  },
  {
    id: '2',
    name: '李四',
    nameEn: 'Li Si',
    email: 'lisi@example.com',
    avatar: '👤',
    role: 'editor',
    joinedDate: '2024-01-20',
  },
  {
    id: '3',
    name: '王五',
    nameEn: 'Wang Wu',
    email: 'wangwu@example.com',
    avatar: '👤',
    role: 'editor',
    joinedDate: '2024-02-01',
  },
  {
    id: '4',
    name: '赵六',
    nameEn: 'Zhao Liu',
    email: 'zhaoliu@example.com',
    avatar: '👤',
    role: 'viewer',
    joinedDate: '2024-02-10',
  },
  {
    id: '5',
    name: '钱七',
    nameEn: 'Qian Qi',
    email: 'qianqi@example.com',
    avatar: '👤',
    role: 'viewer',
    joinedDate: '2024-02-15',
  },
];

type ViewType = 'list' | 'members';

export function Workspaces() {
  const { language } = useApp();
  const [activeView, setActiveView] = useState<ViewType>('list');
  const [selectedWorkspace, setSelectedWorkspace] = useState<string | null>(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'admin' | 'editor' | 'viewer'>('viewer');

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-[#FF4D4F] text-white';
      case 'editor':
        return 'bg-[#1890FF] text-white';
      case 'viewer':
        return 'bg-[#52C41A] text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getRoleLabel = (role: string) => {
    const labels = {
      admin: language === 'zh' ? '管理员' : 'Admin',
      editor: language === 'zh' ? '编辑者' : 'Editor',
      viewer: language === 'zh' ? '查看者' : 'Viewer',
    };
    return labels[role as keyof typeof labels] || role;
  };

  const handleInvite = () => {
    // Handle invitation logic
    alert(
      language === 'zh'
        ? `已向 ${inviteEmail} 发送邀请`
        : `Invitation sent to ${inviteEmail}`
    );
    setInviteEmail('');
    setShowInviteModal(false);
  };

  const handleRemoveMember = (memberId: string, memberName: string) => {
    if (confirm(language === 'zh' ? `确定移除 ${memberName}?` : `Remove ${memberName}?`)) {
      alert(language === 'zh' ? `已移除 ${memberName}` : `${memberName} removed`);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            {language === 'zh' ? '工作空间' : 'Workspaces'}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {language === 'zh' ? '管理您的工作空间和团队成员' : 'Manage your workspaces and team members'}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={activeView === 'list' ? 'default' : 'outline'}
            onClick={() => setActiveView('list')}
          >
            {language === 'zh' ? '工作空间' : 'Workspaces'}
          </Button>
          <Button
            variant={activeView === 'members' ? 'default' : 'outline'}
            onClick={() => setActiveView('members')}
          >
            {language === 'zh' ? '成员管理' : 'Members'}
          </Button>
        </div>
      </div>

      {/* Workspace List View */}
      {activeView === 'list' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex justify-end">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              {language === 'zh' ? '新建工作空间' : 'New Workspace'}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {workspaces.map((workspace) => (
              <Card key={workspace.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base mb-1">
                        {language === 'zh' ? workspace.name : workspace.nameEn}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {language === 'zh' ? workspace.description : workspace.descriptionEn}
                      </p>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {/* Owner */}
                    <div className="flex items-center gap-2 text-sm">
                      <Crown className="w-4 h-4 text-[#FAAD14]" />
                      <span className="text-muted-foreground">
                        {language === 'zh' ? '所有者:' : 'Owner:'}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1890FF] to-[#722ED1] flex items-center justify-center text-white text-xs">
                          {workspace.owner.avatar}
                        </div>
                        <span className="font-medium">
                          {language === 'zh' ? workspace.owner.name : workspace.owner.nameEn}
                        </span>
                      </div>
                    </div>

                    {/* Member Count */}
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-[#1890FF]" />
                      <span className="text-muted-foreground">
                        {language === 'zh' ? '成员:' : 'Members:'}
                      </span>
                      <span className="font-medium">{workspace.memberCount}</span>
                    </div>

                    {/* Created Date */}
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-[#52C41A]" />
                      <span className="text-muted-foreground">
                        {language === 'zh' ? '创建于:' : 'Created:'}
                      </span>
                      <span className="font-medium">{workspace.createdDate}</span>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => {
                          setSelectedWorkspace(workspace.id);
                          setActiveView('members');
                        }}
                      >
                        <Users className="w-4 h-4 mr-1" />
                        {language === 'zh' ? '管理' : 'Manage'}
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

      {/* Member Management View */}
      {activeView === 'members' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex justify-end">
            <Button onClick={() => setShowInviteModal(true)}>
              <Mail className="w-4 h-4 mr-2" />
              {language === 'zh' ? '邀请成员' : 'Invite Member'}
            </Button>
          </div>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '成员' : 'Member'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '邮箱' : 'Email'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '角色' : 'Role'}
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '加入日期' : 'Joined'}
                    </th>
                    <th className="text-right p-4 text-sm font-medium text-muted-foreground">
                      {language === 'zh' ? '操作' : 'Actions'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member.id} className="border-b border-border hover:bg-muted/50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1890FF] to-[#722ED1] flex items-center justify-center text-white text-sm">
                            {member.avatar}
                          </div>
                          <span className="font-medium">
                            {language === 'zh' ? member.name : member.nameEn}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{member.email}</td>
                      <td className="p-4">
                        <select
                          value={member.role}
                          onChange={(e) => {
                            alert(
                              language === 'zh'
                                ? `角色已更改为 ${getRoleLabel(e.target.value)}`
                                : `Role changed to ${getRoleLabel(e.target.value)}`
                            );
                          }}
                          className="px-3 py-1 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#1890FF]"
                        >
                          <option value="admin">{getRoleLabel('admin')}</option>
                          <option value="editor">{getRoleLabel('editor')}</option>
                          <option value="viewer">{getRoleLabel('viewer')}</option>
                        </select>
                      </td>
                      <td className="p-4 text-sm">{member.joinedDate}</td>
                      <td className="p-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleRemoveMember(
                              member.id,
                              language === 'zh' ? member.name : member.nameEn
                            )
                          }
                        >
                          <Trash2 className="w-4 h-4 text-[#FF4D4F]" />
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

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {language === 'zh' ? '邀请成员' : 'Invite Member'}
                </CardTitle>
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'zh' ? '邮箱地址' : 'Email Address'}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="user@example.com"
                    className="pl-9"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'zh' ? '角色' : 'Role'}
                </label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value as 'admin' | 'editor' | 'viewer')}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-[#1890FF]"
                >
                  <option value="admin">{getRoleLabel('admin')}</option>
                  <option value="editor">{getRoleLabel('editor')}</option>
                  <option value="viewer">{getRoleLabel('viewer')}</option>
                </select>
              </div>

              <div className="flex gap-3 justify-end pt-2">
                <Button variant="outline" onClick={() => setShowInviteModal(false)}>
                  {language === 'zh' ? '取消' : 'Cancel'}
                </Button>
                <Button onClick={handleInvite} disabled={!inviteEmail}>
                  {language === 'zh' ? '发送邀请' : 'Send Invite'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
