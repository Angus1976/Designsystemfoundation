import React from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Logo } from '../components/ui/logo';
import { ServerCrash, Home, RefreshCw } from 'lucide-react';

export function Error500() {
  const { language } = useApp();
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

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
            {/* Geometric Broken Gear Illustration */}
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
                fill="url(#errorGradient1)"
                opacity="0.1"
              />
              
              {/* Broken Gear - Left Part */}
              <path
                d="M 95 85 L 85 90 L 85 100 L 75 105 L 75 115 L 85 120 L 85 130 L 95 135 L 100 125 L 110 120 L 100 115 L 95 105 Z"
                fill="url(#errorGradient2)"
                opacity="0.8"
              />
              <path
                d="M 95 85 L 85 90 L 85 100 L 75 105 L 75 115 L 85 120 L 85 130 L 95 135 L 100 125 L 110 120 L 100 115 L 95 105 Z"
                stroke="url(#errorGradient3)"
                strokeWidth="2"
                fill="none"
              />
              
              {/* Broken Gear - Right Part */}
              <path
                d="M 145 85 L 155 90 L 155 100 L 165 105 L 165 115 L 155 120 L 155 130 L 145 135 L 140 125 L 130 120 L 140 115 L 145 105 Z"
                fill="url(#errorGradient2)"
                opacity="0.8"
              />
              <path
                d="M 145 85 L 155 90 L 155 100 L 165 105 L 165 115 L 155 120 L 155 130 L 145 135 L 140 125 L 130 120 L 140 115 L 145 105 Z"
                stroke="url(#errorGradient3)"
                strokeWidth="2"
                fill="none"
              />
              
              {/* Center Circle - Left Part */}
              <path
                d="M 120 100 A 20 20 0 0 1 120 140 L 100 120 Z"
                fill="url(#errorGradient4)"
              />
              <path
                d="M 120 100 A 20 20 0 0 1 120 140"
                stroke="url(#errorGradient5)"
                strokeWidth="3"
                fill="none"
              />
              
              {/* Center Circle - Right Part */}
              <path
                d="M 120 100 A 20 20 0 0 0 120 140 L 140 120 Z"
                fill="url(#errorGradient4)"
              />
              <path
                d="M 120 100 A 20 20 0 0 0 120 140"
                stroke="url(#errorGradient5)"
                strokeWidth="3"
                fill="none"
              />
              
              {/* Crack/Break Lines */}
              <line x1="110" y1="100" x2="95" y2="85" stroke="url(#errorGradient6)" strokeWidth="2" strokeLinecap="round" />
              <line x1="130" y1="100" x2="145" y2="85" stroke="url(#errorGradient6)" strokeWidth="2" strokeLinecap="round" />
              <line x1="120" y1="110" x2="120" y2="70" stroke="url(#errorGradient6)" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
              
              {/* Warning Symbols */}
              <circle cx="90" cy="160" r="8" fill="url(#errorGradient7)" className="animate-pulse" />
              <text x="90" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">!</text>
              
              <circle cx="150" cy="160" r="8" fill="url(#errorGradient7)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <text x="150" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">!</text>
              
              {/* Decorative Sparks */}
              <circle cx="50" cy="90" r="3" fill="url(#errorGradient8)" opacity="0.8" className="animate-ping" />
              <circle cx="190" cy="110" r="4" fill="url(#errorGradient8)" opacity="0.6" className="animate-ping" style={{ animationDelay: '0.3s' }} />
              <circle cx="60" cy="150" r="3" fill="url(#errorGradient8)" opacity="0.7" className="animate-ping" style={{ animationDelay: '0.6s' }} />
              <circle cx="180" cy="160" r="3" fill="url(#errorGradient8)" opacity="0.8" className="animate-ping" style={{ animationDelay: '0.9s' }} />
              
              {/* Gradients */}
              <defs>
                <linearGradient id="errorGradient1" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#FF4D4F" />
                  <stop offset="100%" stopColor="#722ED1" />
                </linearGradient>
                <linearGradient id="errorGradient2" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#1890FF" />
                  <stop offset="100%" stopColor="#722ED1" />
                </linearGradient>
                <linearGradient id="errorGradient3" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#1890FF" />
                  <stop offset="100%" stopColor="#722ED1" />
                </linearGradient>
                <linearGradient id="errorGradient4" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#40A9FF" />
                  <stop offset="100%" stopColor="#9254DE" />
                </linearGradient>
                <linearGradient id="errorGradient5" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#1890FF" />
                  <stop offset="100%" stopColor="#722ED1" />
                </linearGradient>
                <linearGradient id="errorGradient6" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#FF4D4F" />
                  <stop offset="100%" stopColor="#FAAD14" />
                </linearGradient>
                <linearGradient id="errorGradient7" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#FF4D4F" />
                  <stop offset="100%" stopColor="#FF7A45" />
                </linearGradient>
                <linearGradient id="errorGradient8" x1="0" y1="0" x2="240" y2="240">
                  <stop offset="0%" stopColor="#FAAD14" />
                  <stop offset="100%" stopColor="#FFA940" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-8xl font-bold bg-gradient-to-r from-[#FF4D4F] via-[#1890FF] to-[#722ED1] bg-clip-text text-transparent">
            500
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {language === 'zh' ? '服务器错误' : 'Server Error'}
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {language === 'zh' 
            ? '抱歉，服务器出现了一些问题。我们正在努力修复，请稍后重试。'
            : 'Sorry, something went wrong on our servers. We\'re working to fix it. Please try again later.'}
        </p>

        {/* Additional Info Card */}
        <div className="bg-muted/50 rounded-lg p-4 mb-8 max-w-md mx-auto text-left animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground mb-2">
            {language === 'zh' ? '💡 您可以尝试：' : '💡 You can try:'}
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• {language === 'zh' ? '刷新当前页面' : 'Refresh the current page'}</li>
            <li>• {language === 'zh' ? '等待几分钟后再试' : 'Wait a few minutes and try again'}</li>
            <li>• {language === 'zh' ? '清除浏览器缓存' : 'Clear your browser cache'}</li>
            <li>• {language === 'zh' ? '联系技术支持团队' : 'Contact technical support'}</li>
          </ul>
        </div>

        {/* Error Details (Optional) */}
        <div className="bg-muted/30 rounded-lg p-3 mb-8 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>{language === 'zh' ? '错误代码' : 'Error ID'}:</span>
            <span className="text-[#FF4D4F]">ERR_500_{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono mt-1">
            <span>{language === 'zh' ? '时间戳' : 'Timestamp'}:</span>
            <span>{new Date().toLocaleString(language === 'zh' ? 'zh-CN' : 'en-US')}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button
            size="lg"
            onClick={handleRefresh}
            className="min-w-[200px]"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            {language === 'zh' ? '刷新页面' : 'Refresh Page'}
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/')}
            className="min-w-[200px]"
          >
            <Home className="w-5 h-5 mr-2" />
            {language === 'zh' ? '返回首页' : 'Back to Home'}
          </Button>
        </div>

        {/* Footer Help Text */}
        <p className="text-sm text-muted-foreground mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {language === 'zh' 
            ? '如果问题持续存在，请发送邮件至 '
            : 'If the problem persists, please email '}
          <a href="mailto:support@superinsight.com" className="text-[#1890FF] hover:underline">
            support@superinsight.com
          </a>
        </p>
      </div>
    </div>
  );
}
