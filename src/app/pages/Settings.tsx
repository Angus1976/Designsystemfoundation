import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import {
  User,
  Mail,
  Globe,
  Moon,
  Sun,
  Bell,
  Webhook,
  Lock,
  Shield,
  Monitor,
  Trash2,
  Upload,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle2,
  X
} from 'lucide-react';

const activeSessions = [
  {
    id: '1',
    device: 'Chrome on Windows',
    location: '北京, 中国',
    locationEn: 'Beijing, China',
    ip: '192.168.1.100',
    lastActive: '当前设备',
    lastActiveEn: 'Current Device',
    isCurrent: true,
  },
  {
    id: '2',
    device: 'Safari on macOS',
    location: '上海, 中国',
    locationEn: 'Shanghai, China',
    ip: '192.168.1.101',
    lastActive: '2小时前',
    lastActiveEn: '2 hours ago',
    isCurrent: false,
  },
  {
    id: '3',
    device: 'Firefox on Linux',
    location: '深圳, 中国',
    locationEn: 'Shenzhen, China',
    ip: '192.168.1.102',
    lastActive: '1天前',
    lastActiveEn: '1 day ago',
    isCurrent: false,
  },
];

export function Settings() {
  const { language, theme, setTheme, setLanguage } = useApp();
  const [displayName, setDisplayName] = useState('张三');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(true);
  const [webhookNotifications, setWebhookNotifications] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('');

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert(language === 'zh' ? '密码不匹配' : 'Passwords do not match');
      return;
    }
    // Handle password change logic
    alert(language === 'zh' ? '密码已更新' : 'Password updated');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleDeleteAccount = () => {
    // Handle account deletion logic
    alert(language === 'zh' ? '账户已删除' : 'Account deleted');
    setShowDeleteDialog(false);
  };

  const handleRevokeSession = (sessionId: string) => {
    alert(language === 'zh' ? `会话 ${sessionId} 已注销` : `Session ${sessionId} revoked`);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">
          {language === 'zh' ? '设置' : 'Settings'}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {language === 'zh' ? '管理您的账户设置和偏好' : 'Manage your account settings and preferences'}
        </p>
      </div>

      {/* Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            {language === 'zh' ? '个人资料' : 'Profile'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {language === 'zh' ? '头像' : 'Avatar'}
            </label>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1890FF] to-[#722ED1] flex items-center justify-center text-white text-2xl font-semibold overflow-hidden">
                {avatarPreview ? (
                  <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  displayName.charAt(0)
                )}
              </div>
              <div>
                <input
                  type="file"
                  id="avatar-upload"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
                <label htmlFor="avatar-upload">
                  <Button variant="outline" size="sm" asChild>
                    <span className="cursor-pointer">
                      <Upload className="w-4 h-4 mr-2" />
                      {language === 'zh' ? '上传头像' : 'Upload Avatar'}
                    </span>
                  </Button>
                </label>
                <p className="text-xs text-muted-foreground mt-1">
                  {language === 'zh' ? '支持 JPG、PNG 格式，最大 2MB' : 'JPG, PNG up to 2MB'}
                </p>
              </div>
            </div>
          </div>

          {/* Display Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {language === 'zh' ? '显示名称' : 'Display Name'}
            </label>
            <Input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder={language === 'zh' ? '输入您的名称' : 'Enter your name'}
            />
          </div>

          {/* Email (Read-only) */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {language === 'zh' ? '邮箱地址' : 'Email Address'}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value="zhangsan@example.com"
                readOnly
                className="pl-9 bg-muted cursor-not-allowed"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {language === 'zh' ? '邮箱地址无法修改' : 'Email address cannot be changed'}
            </p>
          </div>

          {/* Language Preference */}
          <div>
            <label className="block text-sm font-medium mb-2">
              <Globe className="w-4 h-4 inline mr-1" />
              {language === 'zh' ? '语言偏好' : 'Language Preference'}
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'zh' | 'en')}
              className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-[#1890FF]"
            >
              <option value="zh">中文</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Theme Preference */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {language === 'zh' ? '主题偏好' : 'Theme Preference'}
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme('light')}
                className={`flex-1 p-4 border rounded-lg transition-colors ${
                  theme === 'light'
                    ? 'border-[#1890FF] bg-[#E6F7FF] dark:bg-[#1890FF]/10'
                    : 'border-border hover:bg-muted'
                }`}
              >
                <Sun className="w-5 h-5 mx-auto mb-2" />
                <div className="text-sm font-medium">
                  {language === 'zh' ? '明亮模式' : 'Light Mode'}
                </div>
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex-1 p-4 border rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'border-[#1890FF] bg-[#E6F7FF] dark:bg-[#1890FF]/10'
                    : 'border-border hover:bg-muted'
                }`}
              >
                <Moon className="w-5 h-5 mx-auto mb-2" />
                <div className="text-sm font-medium">
                  {language === 'zh' ? '睿黑模式' : 'Dark Mode'}
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Button>
              {language === 'zh' ? '保存更改' : 'Save Changes'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            {language === 'zh' ? '通知偏好' : 'Notification Preferences'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#1890FF]" />
              <div>
                <h4 className="font-medium">
                  {language === 'zh' ? '邮件通知' : 'Email Notifications'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'zh' ? '接收重要更新的邮件通知' : 'Receive email notifications for important updates'}
                </p>
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="w-4 h-4 rounded border-border text-[#1890FF] focus:ring-[#1890FF]"
              />
            </label>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#1890FF]" />
              <div>
                <h4 className="font-medium">
                  {language === 'zh' ? '应用内通知' : 'In-App Notifications'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'zh' ? '在应用内显示通知' : 'Show notifications within the app'}
                </p>
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={inAppNotifications}
                onChange={(e) => setInAppNotifications(e.target.checked)}
                className="w-4 h-4 rounded border-border text-[#1890FF] focus:ring-[#1890FF]"
              />
            </label>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <Webhook className="w-5 h-5 text-[#1890FF]" />
              <div>
                <h4 className="font-medium">
                  {language === 'zh' ? 'Webhook 通知' : 'Webhook Notifications'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'zh' ? '通过 Webhook 接收事件通知' : 'Receive event notifications via webhook'}
                </p>
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={webhookNotifications}
                onChange={(e) => setWebhookNotifications(e.target.checked)}
                className="w-4 h-4 rounded border-border text-[#1890FF] focus:ring-[#1890FF]"
              />
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Security Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            {language === 'zh' ? '安全设置' : 'Security'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Change Password */}
          <div>
            <h4 className="font-medium mb-4">
              {language === 'zh' ? '修改密码' : 'Change Password'}
            </h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'zh' ? '当前密码' : 'Current Password'}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="pl-9 pr-9"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'zh' ? '新密码' : 'New Password'}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="pl-9 pr-9"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'zh' ? '确认新密码' : 'Confirm New Password'}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-9 pr-9"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button onClick={handlePasswordChange}>
                {language === 'zh' ? '更新密码' : 'Update Password'}
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            {/* Two-Factor Authentication */}
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#1890FF]" />
                <div>
                  <h4 className="font-medium">
                    {language === 'zh' ? '双因素认证' : 'Two-Factor Authentication'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh' ? '为您的账户增加额外的安全层' : 'Add an extra layer of security to your account'}
                  </p>
                </div>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={twoFactorEnabled}
                  onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                  className="w-4 h-4 rounded border-border text-[#1890FF] focus:ring-[#1890FF]"
                />
              </label>
            </div>
          </div>

          {/* Active Sessions */}
          <div className="border-t border-border pt-6">
            <h4 className="font-medium mb-4 flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              {language === 'zh' ? '活跃会话' : 'Active Sessions'}
            </h4>
            <div className="space-y-3">
              {activeSessions.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="font-medium text-sm">{session.device}</h5>
                      {session.isCurrent && (
                        <Badge className="bg-[#52C41A] text-white text-xs">
                          {language === 'zh' ? '当前' : 'Current'}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {language === 'zh' ? session.location : session.locationEn} • {session.ip}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {language === 'zh' ? session.lastActive : session.lastActiveEn}
                    </p>
                  </div>
                  {!session.isCurrent && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRevokeSession(session.id)}
                    >
                      {language === 'zh' ? '注销' : 'Revoke'}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-[#FF4D4F]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#FF4D4F]">
            <AlertTriangle className="w-5 h-5" />
            {language === 'zh' ? '危险区域' : 'Danger Zone'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {language === 'zh'
                ? '删除账户将永久清除所有数据，此操作无法撤销。'
                : 'Deleting your account will permanently remove all your data. This action cannot be undone.'}
            </p>
            <Button
              variant="outline"
              className="border-[#FF4D4F] text-[#FF4D4F] hover:bg-[#FF4D4F] hover:text-white"
              onClick={() => setShowDeleteDialog(true)}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              {language === 'zh' ? '删除账户' : 'Delete Account'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-[#FF4D4F]">
                  {language === 'zh' ? '确认删除账户' : 'Confirm Account Deletion'}
                </CardTitle>
                <button
                  onClick={() => setShowDeleteDialog(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-[#FFF2F0] dark:bg-[#FF4D4F]/10 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-[#FF4D4F] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  {language === 'zh'
                    ? '此操作将永久删除您的账户和所有相关数据。您将无法恢复任何信息。'
                    : 'This action will permanently delete your account and all associated data. You will not be able to recover any information.'}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {language === 'zh'
                  ? '请输入 "删除我的账户" 以确认：'
                  : 'Type "DELETE MY ACCOUNT" to confirm:'}
              </p>
              <Input placeholder={language === 'zh' ? '删除我的账户' : 'DELETE MY ACCOUNT'} />
              <div className="flex gap-3 justify-end">
                <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
                  {language === 'zh' ? '取消' : 'Cancel'}
                </Button>
                <Button
                  className="bg-[#FF4D4F] hover:bg-[#FF4D4F]/90 text-white"
                  onClick={handleDeleteAccount}
                >
                  {language === 'zh' ? '永久删除' : 'Delete Permanently'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
