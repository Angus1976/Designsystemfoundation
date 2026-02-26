import React, { useState } from 'react';
import { Link } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Logo } from '../components/ui/logo';
import { Lock, ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';

export function ForgotPassword() {
  const { language, toggleLanguage } = useApp();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError(language === 'zh' ? '请输入邮箱地址' : 'Email required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(language === 'zh' ? '邮箱格式不正确' : 'Invalid email format');
      return;
    }

    // Simulate sending reset link
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-br from-[#1890FF]/20 to-[#722ED1]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-gradient-to-br from-[#722ED1]/20 to-[#1890FF]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-br from-[#40A9FF]/20 to-[#597EF7]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Language Switcher */}
      <button
        onClick={toggleLanguage}
        className="fixed top-6 right-6 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:bg-accent transition-colors z-10"
      >
        {language === 'zh' ? 'English' : '中文'}
      </button>

      {/* Forgot Password Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-card rounded-2xl shadow-2xl border border-border p-8 animate-fade-in-up">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo variant="full" size="lg" />
          </div>

          {!submitted ? (
            <>
              {/* Lock Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1890FF]/20 to-[#722ED1]/20 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-[#1890FF]" />
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  {language === 'zh' ? '忘记密码' : 'Forgot Password'}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {language === 'zh' 
                    ? '输入您的邮箱地址，我们将发送密码重置链接'
                    : 'Enter your email and we\'ll send you a reset link'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === 'zh' ? '邮箱地址' : 'Email Address'}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder={language === 'zh' ? '请输入您的邮箱' : 'Enter your email'}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                      }}
                      className={`pl-10 ${error ? 'border-[#FF4D4F]' : ''}`}
                    />
                  </div>
                  {error && (
                    <p className="text-xs text-[#FF4D4F] mt-1">{error}</p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  {language === 'zh' ? '发送重置链接' : 'Send Reset Link'}
                </Button>
              </form>

              {/* Back to Login */}
              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#1890FF] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {language === 'zh' ? '返回登录' : 'Back to Login'}
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center">
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#52C41A]/20 flex items-center justify-center animate-scale-in">
                    <CheckCircle2 className="w-8 h-8 text-[#52C41A]" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-foreground mb-2">
                  {language === 'zh' ? '邮件已发送' : 'Email Sent'}
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  {language === 'zh' 
                    ? `我们已向 ${email} 发送了密码重置链接，请检查您的邮箱。`
                    : `We've sent a password reset link to ${email}. Please check your inbox.`}
                </p>

                {/* Tips */}
                <div className="bg-muted/50 rounded-lg p-4 mb-6 text-left">
                  <p className="text-xs text-muted-foreground mb-2">
                    {language === 'zh' ? '💡 提示：' : '💡 Tips:'}
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• {language === 'zh' ? '链接将在30分钟后过期' : 'Link expires in 30 minutes'}</li>
                    <li>• {language === 'zh' ? '如未收到邮件，请检查垃圾邮件文件夹' : 'Check spam folder if not received'}</li>
                    <li>• {language === 'zh' ? '您可以重新发送重置链接' : 'You can resend the link'}</li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="w-full"
                  >
                    {language === 'zh' ? '重新发送邮件' : 'Resend Email'}
                  </Button>
                  
                  <Link to="/login">
                    <Button variant="ghost" className="w-full">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      {language === 'zh' ? '返回登录' : 'Back to Login'}
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          © 2025 SuperInsight. All rights reserved.
        </div>
      </div>
    </div>
  );
}
