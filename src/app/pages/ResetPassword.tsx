import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Logo } from '../components/ui/logo';
import { Eye, EyeOff, CheckCircle2, Key } from 'lucide-react';

export function ResetPassword() {
  const { language, toggleLanguage } = useApp();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);

  // Password strength calculation
  const getPasswordStrength = (password: string) => {
    if (!password) return { level: 0, text: '', color: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    if (strength <= 2) {
      return {
        level: 1,
        text: language === 'zh' ? '弱' : 'Weak',
        color: 'bg-[#FF4D4F]'
      };
    } else if (strength <= 3) {
      return {
        level: 2,
        text: language === 'zh' ? '中等' : 'Medium',
        color: 'bg-[#FAAD14]'
      };
    } else {
      return {
        level: 3,
        text: language === 'zh' ? '强' : 'Strong',
        color: 'bg-[#52C41A]'
      };
    }
  };

  const passwordStrength = getPasswordStrength(formData.password);

  // Countdown timer after success
  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (isSuccess && countdown === 0) {
      navigate('/login');
    }
  }, [isSuccess, countdown, navigate]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.password) {
      newErrors.password = language === 'zh' ? '请输入新密码' : 'New password required';
    } else if (formData.password.length < 8) {
      newErrors.password = language === 'zh' ? '密码至少8位' : 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = language === 'zh' ? '请确认密码' : 'Confirm password required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = language === 'zh' ? '两次密码不一致' : 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate password reset
      setTimeout(() => {
        setIsSuccess(true);
      }, 500);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
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

      {/* Reset Password Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-card rounded-2xl shadow-2xl border border-border p-8 animate-fade-in-up">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo variant="full" size="lg" />
          </div>

          {!isSuccess ? (
            <>
              {/* Key Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1890FF]/20 to-[#722ED1]/20 flex items-center justify-center">
                  <Key className="w-8 h-8 text-[#1890FF]" />
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  {language === 'zh' ? '重置密码' : 'Reset Password'}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {language === 'zh' 
                    ? '请设置您的新密码'
                    : 'Please set your new password'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* New Password */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === 'zh' ? '新密码' : 'New Password'}
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder={language === 'zh' ? '请输入新密码（至少8位）' : 'Enter new password (min 8 chars)'}
                      value={formData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                      className={errors.password ? 'border-[#FF4D4F]' : ''}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                            style={{ width: `${(passwordStrength.level / 3) * 100}%` }}
                          />
                        </div>
                        <span className={`text-xs font-medium ${passwordStrength.color.replace('bg-', 'text-')}`}>
                          {passwordStrength.text}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {errors.password && (
                    <p className="text-xs text-[#FF4D4F] mt-1">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === 'zh' ? '确认密码' : 'Confirm Password'}
                  </label>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder={language === 'zh' ? '请再次输入新密码' : 'Re-enter new password'}
                      value={formData.confirmPassword}
                      onChange={(e) => handleChange('confirmPassword', e.target.value)}
                      className={errors.confirmPassword ? 'border-[#FF4D4F]' : ''}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {formData.confirmPassword && formData.password === formData.confirmPassword && (
                    <p className="text-xs text-[#52C41A] mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {language === 'zh' ? '密码匹配' : 'Passwords match'}
                    </p>
                  )}
                  {errors.confirmPassword && (
                    <p className="text-xs text-[#FF4D4F] mt-1">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full mt-6">
                  {language === 'zh' ? '重置密码' : 'Reset Password'}
                </Button>
              </form>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center">
                {/* Success Icon with Animation */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#52C41A]/20 flex items-center justify-center animate-scale-in">
                    <CheckCircle2 className="w-10 h-10 text-[#52C41A] animate-check-mark" />
                  </div>
                </div>

                {/* Success Message */}
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {language === 'zh' ? '密码已重置' : 'Password Reset'}
                </h2>
                <p className="text-sm text-muted-foreground mb-8">
                  {language === 'zh' 
                    ? '您的密码已成功重置，请使用新密码登录'
                    : 'Your password has been reset successfully'}
                </p>

                {/* Countdown */}
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh' 
                      ? `${countdown} 秒后自动跳转到登录页...`
                      : `Redirecting to login in ${countdown} seconds...`}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1890FF] transition-all duration-1000"
                      style={{ width: `${((3 - countdown) / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Manual Redirect Button */}
                <Button
                  onClick={() => navigate('/login')}
                  className="w-full"
                >
                  {language === 'zh' ? '立即前往登录' : 'Go to Login Now'}
                </Button>
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
