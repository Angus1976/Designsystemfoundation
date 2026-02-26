import React from 'react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Logo } from '../components/ui/logo';

export function NotFound() {
  const { language } = useApp();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-[#E6F7FF] dark:to-[#1F1F1F] p-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Link to="/">
            <Logo variant="icon" className="hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>

        {/* 404 Illustration */}
        <div className="relative">
          <div className="text-9xl font-bold text-muted-foreground/10 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1890FF]/20 to-[#722ED1]/20 flex items-center justify-center animate-pulse">
              <div className="text-6xl">🔍</div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-foreground">
            {language === 'zh' ? '页面未找到' : 'Page Not Found'}
          </h1>
          <p className="text-muted-foreground text-base">
            {language === 'zh'
              ? '抱歉，您访问的页面不存在或已被移除。'
              : 'Sorry, the page you are looking for does not exist or has been removed.'}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'zh' ? '返回' : 'Go Back'}
          </Button>
          <Button asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              {language === 'zh' ? '返回首页' : 'Go Home'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}