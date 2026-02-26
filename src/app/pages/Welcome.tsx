import React from 'react';
import { Link } from 'react-router';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Logo } from '../components/ui/logo';
import {
  Rocket,
  BookOpen,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  LayoutDashboard,
  ClipboardList,
  Bot,
} from 'lucide-react';

export function Welcome() {
  const { language } = useApp();

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-[#FAAD14]" />,
      title: language === 'zh' ? '快速上手' : 'Quick Start',
      desc: language === 'zh' 
        ? '简洁直观的界面，5分钟内即可完成首个标注任务'
        : 'Intuitive interface, complete your first annotation in 5 minutes'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#722ED1]" />,
      title: language === 'zh' ? 'AI 智能助手' : 'AI Assistant',
      desc: language === 'zh'
        ? '智能推荐标注策略，提升工作效率10倍'
        : 'Smart annotation strategies to boost efficiency 10x'
    },
    {
      icon: <Shield className="w-6 h-6 text-[#52C41A]" />,
      title: language === 'zh' ? '企业级安全' : 'Enterprise Security',
      desc: language === 'zh'
        ? '数据加密传输，符合国际安全标准'
        : 'Encrypted data transmission, meets international standards'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#1890FF]" />,
      title: language === 'zh' ? '实时分析' : 'Real-time Analytics',
      desc: language === 'zh'
        ? '可视化数据看板，随时掌握项目进度'
        : 'Visual dashboards to track project progress'
    }
  ];

  const quickActions = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: language === 'zh' ? '创建任务' : 'Create Task',
      desc: language === 'zh' ? '开始您的第一个标注任务' : 'Start your first annotation task',
      path: '/tasks',
      color: 'bg-[#1890FF]'
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: language === 'zh' ? 'AI 助手' : 'AI Assistant',
      desc: language === 'zh' ? '智能标注建议和自动化' : 'Smart suggestions and automation',
      path: '/ai-assistant',
      color: 'bg-[#722ED1]'
    },
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      title: language === 'zh' ? '查看仪表盘' : 'View Dashboard',
      desc: language === 'zh' ? '了解项目整体情况' : 'Get project overview',
      path: '/',
      color: 'bg-[#52C41A]'
    }
  ];

  const steps = [
    {
      title: language === 'zh' ? '导入数据' : 'Import Data',
      desc: language === 'zh' ? '支持多种格式的数据导入' : 'Support multiple data formats'
    },
    {
      title: language === 'zh' ? '配置任务' : 'Configure Task',
      desc: language === 'zh' ? '设置标注规则和分配人员' : 'Set rules and assign team'
    },
    {
      title: language === 'zh' ? '开始标注' : 'Start Annotation',
      desc: language === 'zh' ? '使用AI辅助快速完成标注' : 'AI-assisted annotation'
    },
    {
      title: language === 'zh' ? '质量审核' : 'Quality Review',
      desc: language === 'zh' ? '确保数据标注质量' : 'Ensure annotation quality'
    },
    {
      title: language === 'zh' ? '导出结果' : 'Export Results',
      desc: language === 'zh' ? '多种格式导出标注数据' : 'Export in various formats'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-[#E6F7FF] dark:to-[#1F1F1F]">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="animate-bounce-slow">
              <Logo variant="icon" className="w-20 h-20" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === 'zh' ? '欢迎来到问视间' : 'Welcome to SuperInsight'}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {language === 'zh'
              ? '企业级 AI 数据标注管理平台，让数据标注更智能、更高效'
              : 'Enterprise AI Data Annotation Platform - Smarter, Faster, Better'}
          </p>

          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/tasks">
                <Rocket className="w-5 h-5 mr-2" />
                {language === 'zh' ? '立即开始' : 'Get Started'}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/logo-showcase">
                <BookOpen className="w-5 h-5 mr-2" />
                {language === 'zh' ? '了解更多' : 'Learn More'}
              </Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-background-secondary flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>
              {language === 'zh' ? '快速操作' : 'Quick Actions'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.path}>
                  <div className="p-6 rounded-lg border border-border hover:border-[#1890FF] hover:shadow-md transition-all group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center text-white`}>
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 group-hover:text-[#1890FF] transition-colors">
                          {action.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {action.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[#1890FF] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Getting Started Steps */}
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'zh' ? '五步快速上手' : 'Get Started in 5 Steps'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-5 left-5 right-5 h-0.5 bg-border hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center text-center space-y-3">
                      {/* Step Number */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1890FF] to-[#722ED1] flex items-center justify-center text-white font-bold text-lg relative z-10">
                        {index + 1}
                      </div>
                      
                      {/* Step Info */}
                      <div>
                        <h4 className="font-semibold mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {step.desc}
                        </p>
                      </div>
                      
                      {/* Check Icon */}
                      <CheckCircle2 className="w-5 h-5 text-[#52C41A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer CTA */}
        <div className="text-center mt-12 p-8 rounded-lg bg-gradient-to-r from-[#1890FF]/10 via-[#40A9FF]/10 to-[#722ED1]/10 border border-border">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'zh' ? '准备好开始了吗？' : 'Ready to Get Started?'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {language === 'zh'
              ? '加入数千家企业，使用问视间提升数据标注效率'
              : 'Join thousands of companies using SuperInsight for better data annotation'}
          </p>
          <Button size="lg" asChild>
            <Link to="/tasks">
              {language === 'zh' ? '创建第一个任务' : 'Create First Task'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
