import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Logo } from '../components/ui/logo';
import { Eye, EyeOff, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export function Register() {
  const { language, toggleLanguage, t } = useApp();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username) {
      newErrors.username = language === 'zh' ? '请输入用户名' : 'Username required';
    }

    if (!formData.email) {
      newErrors.email = language === 'zh' ? '请输入邮箱' : 'Email required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'zh' ? '邮箱格式不正确' : 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = language === 'zh' ? '请输入密码' : 'Password required';
    } else if (formData.password.length < 8) {
      newErrors.password = language === 'zh' ? '密码至少8位' : 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = language === 'zh' ? '请确认密码' : 'Confirm password required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = language === 'zh' ? '两次密码不一致' : 'Passwords do not match';
    }

    if (!formData.organization) {
      newErrors.organization = language === 'zh' ? '请输入组织名称' : 'Organization required';
    }

    if (!agreeTerms) {
      newErrors.terms = language === 'zh' ? '请同意服务条款' : 'Please agree to terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate registration
      setTimeout(() => {
        navigate('/login');
      }, 500);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
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

      {/* Register Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-card rounded-2xl shadow-2xl border border-border p-8 animate-fade-in-up">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo variant="full" size="lg" />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {language === 'zh' ? '创建账号' : 'Create Account'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {language === 'zh' ? '开始您的数据标注之旅' : 'Start your annotation journey'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === 'zh' ? '用户名' : 'Username'}
              </label>
              <Input
                type="text"
                placeholder={language === 'zh' ? '请输入用户名' : 'Enter username'}
                value={formData.username}
                onChange={(e) => handleChange('username', e.target.value)}
                className={errors.username ? 'border-[#FF4D4F]' : ''}
              />
              {errors.username && (
                <p className="text-xs text-[#FF4D4F] mt-1 flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.username}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === 'zh' ? '邮箱' : 'Email'}
              </label>
              <Input
                type="email"
                placeholder={language === 'zh' ? '请输入邮箱地址' : 'Enter email address'}
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={errors.email ? 'border-[#FF4D4F]' : ''}
              />
              {errors.email && (
                <p className="text-xs text-[#FF4D4F] mt-1 flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === 'zh' ? '密码' : 'Password'}
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={language === 'zh' ? '请输入密码（至少8位）' : 'Enter password (min 8 chars)'}
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
                <p className="text-xs text-[#FF4D4F] mt-1 flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.password}
                </p>
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
                  placeholder={language === 'zh' ? '请再次输入密码' : 'Re-enter password'}
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
                <p className="text-xs text-[#FF4D4F] mt-1 flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Organization */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === 'zh' ? '组织名称' : 'Organization Name'}
              </label>
              <Input
                type="text"
                placeholder={language === 'zh' ? '请输入组织名称' : 'Enter organization name'}
                value={formData.organization}
                onChange={(e) => handleChange('organization', e.target.value)}
                className={errors.organization ? 'border-[#FF4D4F]' : ''}
              />
              {errors.organization && (
                <p className="text-xs text-[#FF4D4F] mt-1 flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {errors.organization}
                </p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => {
                    setAgreeTerms(e.target.checked);
                    if (errors.terms) {
                      setErrors(prev => ({ ...prev, terms: '' }));
                    }
                  }}
                  className="mt-1 w-4 h-4 rounded border-border text-[#1890FF] focus:ring-[#1890FF] focus:ring-offset-0"
                />
                <span className="text-sm text-muted-foreground">
                  {language === 'zh' ? (
                    <>我已阅读并同意<a href="#" className="text-[#1890FF] hover:underline">《服务条款》</a></>
                  ) : (
                    <>I agree to the <a href="#" className="text-[#1890FF] hover:underline">Terms of Service</a></>
                  )}
                </span>
              </label>
              {errors.terms && (
                <p className="text-xs text-[#FF4D4F] mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.terms}
                </p>
              )}
            </div>

            {/* Register Button */}
            <Button type="submit" className="w-full">
              {language === 'zh' ? '注册' : 'Register'}
            </Button>

            {/* Login Link */}
            <div className="text-center">
              <Link
                to="/login"
                className="text-sm text-muted-foreground hover:text-[#1890FF] transition-colors"
              >
                {language === 'zh' ? '已有账号？' : 'Already have an account? '}
                <span className="text-[#1890FF] font-medium">
                  {language === 'zh' ? '立即登录' : 'Sign in'}
                </span>
              </Link>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          © 2025 SuperInsight. All rights reserved.
        </div>
      </div>
    </div>
  );
}
