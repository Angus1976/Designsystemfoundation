import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router';
import {
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowRight,
  Play,
  Palette,
  Globe,
  Smartphone,
  Zap,
  Code,
  FileText,
  TrendingUp,
  Database,
  Bot,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Logo, LogoIconSimple } from '../components/ui/logo';
import { LogoAnimated, LogoPulse } from '../components/ui/logo-animated';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function FeatureShowcase() {
  const { language } = useApp();
  const [activeDemo, setActiveDemo] = useState('ai-annotation');

  const features = [
    {
      id: 'ai-annotation',
      icon: <Sparkles className="w-8 h-8" />,
      title: language === 'zh' ? 'AI 标注' : 'AI Annotation',
      description:
        language === 'zh'
          ? '智能化数据标注与模型训练平台，支持任务管理、模型配置和模板库'
          : 'Intelligent data annotation and model training platform with task management, model configuration and template library',
      path: '/ai-annotation',
      color: 'from-blue-500 to-purple-600',
      stats: [
        { label: language === 'zh' ? '任务示例' : 'Tasks', value: '5' },
        { label: language === 'zh' ? 'AI 模型' : 'Models', value: '6' },
        { label: language === 'zh' ? '模板' : 'Templates', value: '6' },
      ],
      highlights: [
        language === 'zh' ? '完整的任务管理表格' : 'Complete task management table',
        language === 'zh' ? '模型卡片网格展示' : 'Model card grid display',
        language === 'zh' ? '标注模板快速使用' : 'Quick template usage',
        language === 'zh' ? '实时进度追踪' : 'Real-time progress tracking',
      ],
    },
    {
      id: 'augmentation',
      icon: <Layers className="w-8 h-8" />,
      title: language === 'zh' ? '数据增强' : 'Data Augmentation',
      description:
        language === 'zh'
          ? '智能化数据扩充与样本生成平台，提供统计分析、样本管理和增强配置'
          : 'Intelligent data expansion and sample generation platform with statistics, sample management and augmentation configuration',
      path: '/augmentation',
      color: 'from-green-500 to-teal-600',
      stats: [
        { label: language === 'zh' ? '增强方法' : 'Methods', value: '6' },
        { label: language === 'zh' ? '样本数' : 'Samples', value: '6' },
        { label: language === 'zh' ? '任务数' : 'Jobs', value: '5' },
      ],
      highlights: [
        language === 'zh' ? '数据统计仪表盘' : 'Data statistics dashboard',
        language === 'zh' ? '样本网格管理' : 'Sample grid management',
        language === 'zh' ? '可视化配置面板' : 'Visual configuration panel',
        language === 'zh' ? '强度滑块调节' : 'Intensity slider control',
      ],
    },
  ];

  const logoVariants = [
    {
      name: language === 'zh' ? '完整版' : 'Full Version',
      component: <Logo variant="full" showSubtitle={true} />,
      description:
        language === 'zh' ? '带中英文标题的完整 Logo' : 'Full logo with bilingual titles',
      usage: language === 'zh' ? '侧边栏展开状态' : 'Expanded sidebar',
    },
    {
      name: language === 'zh' ? '图标版' : 'Icon Only',
      component: <Logo variant="icon" />,
      description: language === 'zh' ? '仅图标的简化版本' : 'Icon-only simplified version',
      usage: language === 'zh' ? '侧边栏收起状态' : 'Collapsed sidebar',
    },
    {
      name: language === 'zh' ? '简化版' : 'Simplified',
      component: <LogoIconSimple />,
      description:
        language === 'zh' ? '圆角矩形背景的简化版' : 'Simplified version with rounded background',
      usage: language === 'zh' ? '应用图标' : 'App icon',
    },
    {
      name: language === 'zh' ? '动画版' : 'Animated',
      component: <LogoAnimated size={64} />,
      description: language === 'zh' ? '带旋转外圈的动画版' : 'Animated with spinning outer ring',
      usage: language === 'zh' ? '加载页面' : 'Loading page',
    },
    {
      name: language === 'zh' ? '脉冲版' : 'Pulse',
      component: <LogoPulse size={48} />,
      description: language === 'zh' ? '简单脉冲动画版本' : 'Simple pulse animation version',
      usage: language === 'zh' ? '内联加载' : 'Inline loading',
    },
  ];

  const designHighlights = [
    {
      icon: <Palette className="w-5 h-5" />,
      title: language === 'zh' ? '统一设计系统' : 'Unified Design System',
      description:
        language === 'zh'
          ? '主色调 #1890FF，完整的颜色、间距、字体规范'
          : 'Primary color #1890FF with complete color, spacing, and typography specs',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: language === 'zh' ? '双语言支持' : 'Bilingual Support',
      description:
        language === 'zh'
          ? '中英文完整翻译，格式：中文 (English)'
          : 'Complete Chinese and English translation in format: 中文 (English)',
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: language === 'zh' ? '响应式设计' : 'Responsive Design',
      description:
        language === 'zh'
          ? '桌面/平板/移动端完美适配，1-6列灵活网格'
          : 'Perfect adaptation for desktop/tablet/mobile with 1-6 column flexible grid',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: language === 'zh' ? '流畅动画' : 'Smooth Animations',
      description:
        language === 'zh'
          ? '10+种动画效果，60fps 流畅运行'
          : '10+ animation effects running smoothly at 60fps',
    },
  ];

  const technicalStats = [
    {
      icon: <Code className="w-6 h-6" />,
      label: language === 'zh' ? '代码量' : 'Code Lines',
      value: '1,780+',
      description: language === 'zh' ? '新增高质量代码' : 'New quality code',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: language === 'zh' ? '文档量' : 'Documentation',
      value: '8,000+',
      description: language === 'zh' ? '详细技术文档' : 'Detailed tech docs',
      color: 'text-green-600 dark:text-green-400',
    },
    {
      icon: <Database className="w-6 h-6" />,
      label: language === 'zh' ? '组件数' : 'Components',
      value: '80+',
      description: language === 'zh' ? '精美 UI 组件' : 'Beautiful UI components',
      color: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: language === 'zh' ? '性能分' : 'Performance',
      value: '95+',
      description: language === 'zh' ? 'Lighthouse 分数' : 'Lighthouse score',
      color: 'text-orange-600 dark:text-orange-400',
    },
  ];

  return (
    <div className="min-h-screen bg-background-tertiary">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1890FF] to-[#722ED1] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative px-6 py-16 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                {language === 'zh' ? '版本 v2.6.1' : 'Version v2.6.1'}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {language === 'zh' ? '问视间 (SuperInsight)' : 'SuperInsight'}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold opacity-90">
                {language === 'zh'
                  ? 'AI 功能全面升级'
                  : 'Complete AI Feature Upgrade'}
              </h2>
              <p className="text-lg opacity-80 max-w-2xl">
                {language === 'zh'
                  ? '企业级 AI 数据标注管理平台，集成智能标注、数据增强、模型管理等核心功能，提供完整的数据处理解决方案。'
                  : 'Enterprise-level AI data annotation management platform with intelligent annotation, data augmentation, model management and complete data processing solutions.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#1890FF] hover:bg-white/90"
                  asChild
                >
                  <Link to="/ai-annotation">
                    <Sparkles className="w-5 h-5 mr-2" />
                    {language === 'zh' ? '体验 AI 标注' : 'Try AI Annotation'}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/augmentation">
                    <Layers className="w-5 h-5 mr-2" />
                    {language === 'zh' ? '体验数据增强' : 'Try Augmentation'}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />
                <LogoAnimated size={200} className="relative" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalStats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                  <div className={stat.color}>{stat.icon}</div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm font-medium text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'zh' ? '核心功能' : 'Core Features'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh'
              ? '全新的 AI 标注和数据增强功能，为您的数据处理工作流程提供强大支持'
              : 'Brand new AI annotation and data augmentation features to power your data processing workflow'}
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                <div className={`lg:w-2/5 bg-gradient-to-br ${feature.color} p-8 lg:p-12 text-white`}>
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="opacity-90">{feature.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {feature.stats.map((stat, i) => (
                        <div key={i} className="bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-sm opacity-80">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-8 lg:p-12">
                  <h4 className="text-lg font-semibold mb-4">
                    {language === 'zh' ? '功能亮点' : 'Feature Highlights'}
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#1890FF] hover:bg-[#1890FF]/90" asChild>
                    <Link to={feature.path}>
                      {language === 'zh' ? '立即体验' : 'Try Now'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Logo Showcase */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'zh' ? 'Logo 设计' : 'Logo Design'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh'
              ? '全新升级的 Logo 设计，深度融合数据标注业务特色，包含数据网格、标注标签、数据流等元素'
              : 'Newly upgraded logo design deeply integrating data annotation business features with data grid, annotation tags, data flow and more'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logoVariants.map((variant, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg flex items-center justify-center mb-4">
                {variant.component}
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">{variant.name}</h3>
                <p className="text-sm text-muted-foreground">{variant.description}</p>
                <Badge variant="outline" className="text-xs">
                  {variant.usage}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link to="/logo-showcase">
              {language === 'zh' ? '查看完整 Logo 展示' : 'View Full Logo Showcase'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Design Highlights */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'zh' ? '设计亮点' : 'Design Highlights'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh'
              ? '企业级设计系统，注重每一个细节'
              : 'Enterprise-level design system with attention to every detail'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designHighlights.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1890FF]/10 flex items-center justify-center flex-shrink-0">
                  <div className="text-[#1890FF]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-16 max-w-7xl mx-auto">
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-br from-[#1890FF] to-[#722ED1] p-12 text-center text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">
                {language === 'zh' ? '开始使用问视间' : 'Start Using SuperInsight'}
              </h2>
              <p className="text-lg opacity-90">
                {language === 'zh'
                  ? '立即体验全新的 AI 数据标注管理平台，提升您的数据处理效率'
                  : 'Experience the new AI data annotation management platform now and boost your data processing efficiency'}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#1890FF] hover:bg-white/90" asChild>
                  <Link to="/dashboard">
                    <Play className="w-5 h-5 mr-2" />
                    {language === 'zh' ? '进入控制台' : 'Go to Dashboard'}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/help">
                    {language === 'zh' ? '查看文档' : 'View Documentation'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
