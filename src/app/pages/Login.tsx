import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Logo } from '../components/ui/logo';

export function Login() {
  const { language, toggleLanguage } = useApp();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, authenticate here
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-[#E6F7FF] dark:to-[#1F1F1F] p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#1890FF]/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-[#722ED1]/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-64 h-64 bg-[#52C41A]/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="absolute top-6 right-6 px-4 py-2 rounded-full border border-border bg-card hover:bg-accent transition-all duration-300 text-sm font-medium hover:scale-105 z-10"
      >
        {language === 'zh' ? 'English' : '中文'}
      </button>

      <Card className="w-full max-w-md relative z-10 shadow-2xl">
        <CardContent className="pt-8 pb-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="mb-2 scale-125 animate-fade-in-down">
              <Logo variant="icon" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground mt-2 animate-fade-in">问视间</h1>
            <p className="text-lg text-muted-foreground animate-fade-in animation-delay-200">SuperInsight</p>
            <p className="text-sm text-muted-foreground mt-2 animate-fade-in animation-delay-400">
              {language === 'zh' ? '企业级 AI 数据标注管理平台' : 'Enterprise AI Data Annotation Platform'}
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {language === 'zh' ? '邮箱 / 用户名' : 'Email / Username'}
              </label>
              <Input
                type="text"
                placeholder={language === 'zh' ? '请输入邮箱或用户名' : 'Enter email or username'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {language === 'zh' ? '密码' : 'Password'}
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={language === 'zh' ? '请输入密码' : 'Enter password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                  {language === 'zh' ? '记住我' : 'Remember me'}
                </label>
              </div>
              <a href="#" className="text-sm text-[#1890FF] hover:underline">
                {language === 'zh' ? '忘记密码？' : 'Forgot password?'}
              </a>
            </div>

            <Button type="submit" className="w-full" size="lg">
              {language === 'zh' ? '登录' : 'Login'}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  {language === 'zh' ? '或' : 'OR'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button type="button" variant="outline" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  />
                </svg>
                Google
              </Button>
              <Button type="button" variant="outline" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,2C6.477,2,2,6.477,2,12c0,4.991,3.657,9.128,8.438,9.879V14.89h-2.54V12h2.54V9.797c0-2.506,1.492-3.89,3.777-3.89c1.094,0,2.238,0.195,2.238,0.195v2.46h-1.26c-1.243,0-1.63,0.771-1.63,1.562V12h2.773l-0.443,2.89h-2.33v6.989C18.343,21.129,22,16.99,22,12C22,6.477,17.523,2,12,2z"
                  />
                </svg>
                {language === 'zh' ? '企业 SSO' : 'SSO'}
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              {language === 'zh' ? '没有账号？' : "Don't have an account?"}{' '}
              <a href="#" className="text-[#1890FF] hover:underline font-medium">
                {language === 'zh' ? '立即注册' : 'Sign up'}
              </a>
            </p>
          </form>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-xs text-muted-foreground">
        <p>© 2025 SuperInsight. {language === 'zh' ? '保留所有权利' : 'All rights reserved'}.</p>
      </div>
    </div>
  );
}