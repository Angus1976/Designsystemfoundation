import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Input } from '../components/ui/input';
import { Send, Paperclip, Sparkles, User, Search } from 'lucide-react';
import { ScrollArea } from '../components/ui/scroll-area';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const mockConversations = [
  { id: '1', title: '数据标注最佳实践', lastMessage: '如何提高标注质量？', time: '10:30' },
  { id: '2', title: 'AI 模型优化建议', lastMessage: '模型准确率分析', time: '昨天' },
  { id: '3', title: '任务分配策略', lastMessage: '团队协作流程', time: '2天前' },
];

const suggestedPrompts = [
  { zh: '如何创建一个新的标注任务？', en: 'How to create a new annotation task?' },
  { zh: '查看最近的数据分析报告', en: 'View recent data analysis reports' },
  { zh: '优化标注流程的建议', en: 'Suggestions for optimizing annotation workflow' },
  { zh: '团队成员权限设置', en: 'Team member permission settings' },
];

export function AIAssistant() {
  const { t, language } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: language === 'zh' 
        ? '你好！我是 SuperInsight AI 助手。我可以帮助你管理标注任务、分析数据、优化工作流程等。请问有什么我可以帮助你的吗？'
        : 'Hello! I\'m SuperInsight AI Assistant. I can help you manage annotation tasks, analyze data, optimize workflows, and more. How can I assist you today?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-4');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: language === 'zh'
          ? '我理解了你的问题。让我为你提供详细的解答...\n\n基于你的需求，我建议以下几个步骤：\n\n1. 首先，确保数据集已经准备完毕\n2. 创建标注规范文档\n3. 分配任务给团队成员\n4. 设置质量检查流程\n\n需要我详细解释其中的某个步骤吗？'
          : 'I understand your question. Let me provide you with a detailed answer...\n\nBased on your needs, I suggest the following steps:\n\n1. First, ensure your dataset is prepared\n2. Create annotation guidelines\n3. Assign tasks to team members\n4. Set up quality control processes\n\nWould you like me to explain any of these steps in detail?',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handlePromptClick = (prompt: { zh: string; en: string }) => {
    setInputValue(language === 'zh' ? prompt.zh : prompt.en);
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] flex">
      {/* Conversation History */}
      <div className="w-72 border-r border-border bg-card">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder={language === 'zh' ? '搜索对话...' : 'Search conversations...'}
              className="pl-10"
            />
          </div>
        </div>
        <ScrollArea className="h-[calc(100%-5rem)]">
          <div className="p-2 space-y-1">
            {mockConversations.map((conv) => (
              <button
                key={conv.id}
                className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors"
              >
                <div className="font-medium text-sm text-foreground truncate">
                  {conv.title}
                </div>
                <div className="text-xs text-muted-foreground truncate mt-1">
                  {conv.lastMessage}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{conv.time}</div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-background">
        {/* Chat Header */}
        <div className="h-14 border-b border-border px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1890FF] to-[#722ED1] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">
                {language === 'zh' ? 'AI 助手' : 'AI Assistant'}
              </h2>
              <p className="text-xs text-muted-foreground">
                {language === 'zh' ? '智能问答与任务协助' : 'Intelligent Q&A and Task Assistance'}
              </p>
            </div>
          </div>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4">GPT-4</SelectItem>
              <SelectItem value="gpt-3.5">GPT-3.5</SelectItem>
              <SelectItem value="claude">Claude</SelectItem>
              <SelectItem value="gemini">Gemini</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <Avatar className="w-8 h-8 flex-shrink-0">
                  {message.role === 'assistant' ? (
                    <AvatarFallback className="bg-gradient-to-br from-[#1890FF] to-[#722ED1] text-white">
                      <Sparkles className="w-4 h-4" />
                    </AvatarFallback>
                  ) : (
                    <AvatarFallback className="bg-[#1890FF] text-white">
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  )}
                </Avatar>
                <div
                  className={`flex-1 ${
                    message.role === 'user' ? 'flex justify-end' : ''
                  }`}
                >
                  <div
                    className={`inline-block max-w-[80%] rounded-lg p-4 ${
                      message.role === 'user'
                        ? 'bg-[#1890FF] text-white'
                        : 'bg-card border border-border'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </p>
                    <p
                      className={`text-xs mt-2 ${
                        message.role === 'user'
                          ? 'text-white/70'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString(language === 'zh' ? 'zh-CN' : 'en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-border p-4 bg-card">
          <div className="max-w-3xl mx-auto">
            {/* Suggested Prompts */}
            {messages.length <= 1 && (
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">
                  {language === 'zh' ? '快速开始：' : 'Quick start:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handlePromptClick(prompt)}
                      className="px-3 py-2 text-sm bg-background border border-border rounded-lg hover:bg-accent transition-colors"
                    >
                      {language === 'zh' ? prompt.zh : prompt.en}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Box */}
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Paperclip className="w-5 h-5" />
              </Button>
              <Textarea
                placeholder={
                  language === 'zh'
                    ? '输入你的问题... (Shift + Enter 换行)'
                    : 'Type your message... (Shift + Enter for new line)'
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                className="flex-1 min-h-[60px] max-h-[200px] resize-none"
              />
              <Button size="icon" onClick={handleSend} disabled={!inputValue.trim()}>
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
