import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import {
  Search,
  BookOpen,
  MessageCircle,
  Video,
  FileText,
  HelpCircle,
  Mail,
  Phone,
  Globe,
  ChevronRight,
  CheckCircle2,
  Lightbulb,
  Zap,
  Shield,
  Users,
} from 'lucide-react';

export function HelpCenter() {
  const { language } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const quickLinks = [
    {
      icon: <Zap className="w-5 h-5 text-[#FAAD14]" />,
      title: language === 'zh' ? '快速入门指南' : 'Quick Start Guide',
      desc: language === 'zh' ? '5分钟学会使用平台' : 'Learn the platform in 5 minutes',
      href: '#quick-start'
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#1890FF]" />,
      title: language === 'zh' ? '用户手册' : 'User Manual',
      desc: language === 'zh' ? '详细的功能说明文档' : 'Detailed feature documentation',
      href: '#manual'
    },
    {
      icon: <Video className="w-5 h-5 text-[#722ED1]" />,
      title: language === 'zh' ? '视频教程' : 'Video Tutorials',
      desc: language === 'zh' ? '观看操作演示视频' : 'Watch demo videos',
      href: '#videos'
    },
    {
      icon: <FileText className="w-5 h-5 text-[#52C41A]" />,
      title: language === 'zh' ? 'API 文档' : 'API Documentation',
      desc: language === 'zh' ? '开发者接口文档' : 'Developer API docs',
      href: '#api'
    },
  ];

  const faqs = [
    {
      question: language === 'zh' ? '如何创建第一个标注任务？' : 'How to create the first annotation task?',
      answer: language === 'zh' 
        ? '进入"任务管理"页面，点击"创建任务"按钮，填写任务信息并上传数据文件，配置标注规则后即可发布任务。'
        : 'Go to "Tasks" page, click "Create Task" button, fill in task info and upload data files, configure annotation rules and publish.'
    },
    {
      question: language === 'zh' ? 'AI 助手如何帮助标注？' : 'How does AI Assistant help with annotation?',
      answer: language === 'zh'
        ? 'AI 助手可以自动分析数据特征，提供智能标注建议，批量处理相似数据，大幅提升标注效率。'
        : 'AI Assistant analyzes data features, provides smart annotation suggestions, batch processes similar data to boost efficiency.'
    },
    {
      question: language === 'zh' ? '如何保证数据安全？' : 'How to ensure data security?',
      answer: language === 'zh'
        ? '平台采用企业级加密技术，支持私有化部署，提供完善的权限控制和审计日志，确保数据安全。'
        : 'Platform uses enterprise encryption, supports private deployment, provides comprehensive access control and audit logs.'
    },
    {
      question: language === 'zh' ? '支持哪些数据格式？' : 'What data formats are supported?',
      answer: language === 'zh'
        ? '支持 JSON、CSV、XML、图片（JPG/PNG）、文本等多种格式，可通过 API 自定义数据导入。'
        : 'Supports JSON, CSV, XML, images (JPG/PNG), text and more, with custom import via API.'
    },
    {
      question: language === 'zh' ? '如何导出标注结果？' : 'How to export annotation results?',
      answer: language === 'zh'
        ? '在任务详情页选择导出格式（JSON/CSV/XML），可以导出全部或部分标注数据，支持自定义字段。'
        : 'Select export format (JSON/CSV/XML) in task details, export all or partial data with custom fields.'
    },
    {
      question: language === 'zh' ? '团队协作功能如何使用？' : 'How to use team collaboration features?',
      answer: language === 'zh'
        ? '在管理控制台添加团队成员，分配不同角色和权限，可以实时查看团队成员的标注进度。'
        : 'Add team members in admin console, assign roles and permissions, track team progress in real-time.'
    },
  ];

  const resources = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: language === 'zh' ? '最佳实践' : 'Best Practices',
      desc: language === 'zh' ? '行业专家分享的标注经验' : 'Expert annotation tips',
      color: 'text-[#FAAD14] bg-[#FAAD14]/10'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: language === 'zh' ? '社区论坛' : 'Community Forum',
      desc: language === 'zh' ? '与其他用户交流讨论' : 'Discuss with other users',
      color: 'text-[#1890FF] bg-[#1890FF]/10'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: language === 'zh' ? '安全指南' : 'Security Guide',
      desc: language === 'zh' ? '数据安全和隐私保护' : 'Data security and privacy',
      color: 'text-[#52C41A] bg-[#52C41A]/10'
    },
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: language === 'zh' ? '邮件支持' : 'Email Support',
      value: 'support@superinsight.com',
      action: language === 'zh' ? '发送邮件' : 'Send Email'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: language === 'zh' ? '在线客服' : 'Live Chat',
      value: language === 'zh' ? '工作日 9:00-18:00' : 'Weekdays 9:00-18:00',
      action: language === 'zh' ? '开始聊天' : 'Start Chat'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: language === 'zh' ? '电话支持' : 'Phone Support',
      value: '+86 400-123-4567',
      action: language === 'zh' ? '拨打电话' : 'Call Now'
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4 py-8">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1890FF] to-[#722ED1] flex items-center justify-center">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold">
          {language === 'zh' ? '帮助中心' : 'Help Center'}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {language === 'zh' 
            ? '查找答案、学习教程、获取支持 - 我们随时为您提供帮助'
            : 'Find answers, learn tutorials, get support - We\'re here to help'}
        </p>

        {/* Search */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder={language === 'zh' ? '搜索帮助内容...' : 'Search help content...'}
              className="pl-10 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickLinks.map((link, index) => (
          <a key={index} href={link.href}>
            <Card className="hover:shadow-lg transition-all hover:border-[#1890FF] cursor-pointer group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-background-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-[#1890FF] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.desc}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-[#1890FF] group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {/* FAQs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            {language === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border hover:border-[#1890FF] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#52C41A] flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                {language === 'zh' ? '未找到相关问题' : 'No questions found'}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Resources */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          {language === 'zh' ? '学习资源' : 'Learning Resources'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className={`w-12 h-12 rounded-lg ${resource.color} flex items-center justify-center mb-4`}>
                  {resource.icon}
                </div>
                <h3 className="font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            {language === 'zh' ? '联系我们' : 'Contact Us'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1890FF]/10 flex items-center justify-center text-[#1890FF]">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{method.title}</h4>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  {method.action}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Footer CTA */}
      <Card className="bg-gradient-to-r from-[#1890FF]/10 via-[#40A9FF]/10 to-[#722ED1]/10 border-[#1890FF]/20">
        <CardContent className="pt-6 text-center">
          <h3 className="text-lg font-semibold mb-2">
            {language === 'zh' ? '没有找到答案？' : 'Didn\'t find your answer?'}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {language === 'zh' 
              ? '我们的支持团队随时准备帮助您'
              : 'Our support team is ready to help you'}
          </p>
          <Button>
            <MessageCircle className="w-4 h-4 mr-2" />
            {language === 'zh' ? '联系支持团队' : 'Contact Support'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
