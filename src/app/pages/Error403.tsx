import React from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Logo } from '../components/ui/logo';
import { ShieldX, Home, Mail } from 'lucide-react';

export function Error403() {
  const { language } = useApp();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo variant="full" size="lg" />
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="relative">
            {/* Geometric Shield Illustration */}
            <svg
              width="240"
              height="240"
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-float"
            >
              {/* Background Circle */}
              <circle
                cx="120"
                cy="120"
                r="100"
                fill="url(#gradient1)"
                opacity="0.1"
              />
              
              {/* Shield Shape */}
              <path
                d="M120 40L80 60V100C80 130 95 150 120 165C145 150 160 130 160 100V60L120 40Z"
                fill="url(#gradient2)"
                opacity="0.2"
              />
              
              {/* Shield Outline */}
              <path
                d="M120 45L85 63V100C85 127 98 145 120 158C142 145 155 127 155 100V63L120 45Z"
                stroke="url(#gradient3)"
                strokeWidth="3"
                fill="none"
              />
              
              {/* Lock Icon */}
              <rect
                x="105"
                y="95"
                width="30"
                height="35"
                rx="4"
                fill="url(#gradient4)"
              />
              <path
                d="M110 95V85C110 79.5 113.5 75 120 75C126.5 75 130 79.5 130 85V95"
                stroke="url(#gradient5)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Lock Keyhole */}
              <circle cx="120" cy="110" r="3" fill="white" />
              <rect x="118" y="110" width="4" height="8" rx="2" fill="white" />
              
              {/* Decorative Elements */}
              <circle cx="60" cy="80" r="4" fill="url(#gradient6)" opacity="0.6" className="animate-pulse" />
              <circle cx="180" cy="100" r="6" fill="url(#gradient6)" opacity="0.4" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="70" cy="160" r="5" fill="url(#gradient6)" opacity="0.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="170" cy="150" r="4" fill="url(#gradient6)" opacity="0.6" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
              
              {/* Gradients */}
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#1890FF" />
                  <stop offset="100%" stopColor="#722ED1" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#1890FF" />
                  <stop offset="100%" stopColor="#722ED1" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#1890FF" />
                  <stop offset="100%" stopColor="#722ED1" />
                </linearGradient>
                <linearGradient id="gradient4" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#1890FF" />
                  <stop offset="100%" stopColor="#722ED1" />
                </linearGradient>
                <linearGradient id="gradient5" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#1890FF" />
                  <stop offset="100%" stopColor="#722ED1" />
                </linearGradient>
                <linearGradient id="gradient6" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#40A9FF" />
                  <stop offset="100%" stopColor="#597EF7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-8xl font-bold bg-gradient-to-r from-[#1890FF] to-[#722ED1] bg-clip-text text-transparent">
            403
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {language === 'zh' ? '无权访问' : 'Access Denied'}
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {language === 'zh' 
            ? '抱歉，您没有权限访问此页面。如需访问，请联系管理员。'
            : 'Sorry, you don\'t have permission to access this page. Please contact your administrator if you need access.'}
        </p>

        {/* Additional Info Card */}
        <div className="bg-muted/50 rounded-lg p-4 mb-8 max-w-md mx-auto text-left animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground mb-2">
            {language === 'zh' ? '💡 可能的原因：' : '💡 Possible reasons:'}
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• {language === 'zh' ? '您的账号权限不足' : 'Insufficient account permissions'}</li>
            <li>• {language === 'zh' ? '此功能需要特定角色才能访问' : 'Feature requires specific role access'}</li>
            <li>• {language === 'zh' ? '您的会话可能已过期' : 'Your session may have expired'}</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button
            size="lg"
            onClick={() => navigate('/')}
            className="min-w-[200px]"
          >
            <Home className="w-5 h-5 mr-2" />
            {language === 'zh' ? '返回首页' : 'Back to Home'}
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.location.href = 'mailto:admin@superinsight.com'}
            className="min-w-[200px]"
          >
            <Mail className="w-5 h-5 mr-2" />
            {language === 'zh' ? '联系管理员' : 'Contact Admin'}
          </Button>
        </div>

        {/* Footer Help Text */}
        <p className="text-sm text-muted-foreground mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {language === 'zh' 
            ? '如果您认为这是一个错误，请联系技术支持'
            : 'If you believe this is an error, please contact technical support'}
        </p>
      </div>
    </div>
  );
}
