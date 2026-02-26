import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Plus,
  Play,
  Pause,
  CheckCircle,
  Clock,
  Settings,
  Download,
  Trash2,
  Eye,
  MoreVertical,
  Sparkles,
  Cpu,
  Activity,
  TrendingUp,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Switch } from '../components/ui/switch';
import { Progress } from '../components/ui/progress';

interface AnnotationTask {
  id: string;
  name: string;
  model: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  accuracy: number;
  createdAt: string;
  processedSamples: number;
  totalSamples: number;
}

interface AIModel {
  id: string;
  name: string;
  type: 'NER' | 'Classification' | 'Segmentation' | 'Detection';
  version: string;
  accuracy: number;
  isActive: boolean;
  description: string;
  lastTrained: string;
}

interface AnnotationTemplate {
  id: string;
  name: string;
  thumbnail: string;
  fieldCount: number;
  type: string;
  description: string;
  usageCount: number;
}

export function AIAnnotation() {
  const { language, t } = useApp();
  const [activeTab, setActiveTab] = useState('tasks');

  // Mock data - Tasks
  const tasks: AnnotationTask[] = [
    {
      id: '1',
      name: language === 'zh' ? '商品实体识别任务' : 'Product Entity Recognition',
      model: 'BERT-NER-v2.1',
      status: 'completed',
      accuracy: 94.5,
      createdAt: '2025-02-25',
      processedSamples: 5000,
      totalSamples: 5000,
    },
    {
      id: '2',
      name: language === 'zh' ? '情感分类标注' : 'Sentiment Classification',
      model: 'TextCNN-v3.0',
      status: 'running',
      accuracy: 89.2,
      createdAt: '2025-02-26',
      processedSamples: 3200,
      totalSamples: 8000,
    },
    {
      id: '3',
      name: language === 'zh' ? '医疗影像分割' : 'Medical Image Segmentation',
      model: 'U-Net-v1.5',
      status: 'pending',
      accuracy: 0,
      createdAt: '2025-02-26',
      processedSamples: 0,
      totalSamples: 1500,
    },
    {
      id: '4',
      name: language === 'zh' ? '文本分类任务' : 'Text Classification Task',
      model: 'RoBERTa-v2.0',
      status: 'completed',
      accuracy: 92.8,
      createdAt: '2025-02-24',
      processedSamples: 10000,
      totalSamples: 10000,
    },
    {
      id: '5',
      name: language === 'zh' ? '目标检测标注' : 'Object Detection Annotation',
      model: 'YOLOv8-v1.0',
      status: 'failed',
      accuracy: 0,
      createdAt: '2025-02-23',
      processedSamples: 450,
      totalSamples: 2000,
    },
  ];

  // Mock data - Models
  const models: AIModel[] = [
    {
      id: '1',
      name: 'BERT-NER-v2.1',
      type: 'NER',
      version: '2.1.0',
      accuracy: 94.5,
      isActive: true,
      description: language === 'zh' ? '基于BERT的命名实体识别模型' : 'BERT-based Named Entity Recognition',
      lastTrained: '2025-02-20',
    },
    {
      id: '2',
      name: 'TextCNN-v3.0',
      type: 'Classification',
      version: '3.0.2',
      accuracy: 89.2,
      isActive: true,
      description: language === 'zh' ? '文本卷积神经网络分类器' : 'Text CNN Classifier',
      lastTrained: '2025-02-18',
    },
    {
      id: '3',
      name: 'U-Net-v1.5',
      type: 'Segmentation',
      version: '1.5.1',
      accuracy: 91.7,
      isActive: true,
      description: language === 'zh' ? '医疗影像语义分割模型' : 'Medical Image Segmentation Model',
      lastTrained: '2025-02-15',
    },
    {
      id: '4',
      name: 'YOLOv8-v1.0',
      type: 'Detection',
      version: '1.0.3',
      accuracy: 88.3,
      isActive: false,
      description: language === 'zh' ? '实时目标检测模型' : 'Real-time Object Detection',
      lastTrained: '2025-02-10',
    },
    {
      id: '5',
      name: 'RoBERTa-v2.0',
      type: 'Classification',
      version: '2.0.0',
      accuracy: 92.8,
      isActive: true,
      description: language === 'zh' ? '优化的BERT文本分类模型' : 'Optimized BERT Text Classifier',
      lastTrained: '2025-02-22',
    },
    {
      id: '6',
      name: 'DistilBERT-Lite',
      type: 'NER',
      version: '1.2.0',
      accuracy: 87.5,
      isActive: false,
      description: language === 'zh' ? '轻量级实体识别模型' : 'Lightweight NER Model',
      lastTrained: '2025-02-05',
    },
  ];

  // Mock data - Templates
  const templates: AnnotationTemplate[] = [
    {
      id: '1',
      name: language === 'zh' ? '命名实体识别模板' : 'NER Template',
      thumbnail: '🏷️',
      fieldCount: 8,
      type: 'NER',
      description: language === 'zh' ? '人名、地名、机构名等实体标注' : 'Person, Location, Organization entities',
      usageCount: 245,
    },
    {
      id: '2',
      name: language === 'zh' ? '文本分类模板' : 'Text Classification',
      thumbnail: '📊',
      fieldCount: 5,
      type: 'Classification',
      description: language === 'zh' ? '多类别文本分类标注' : 'Multi-class text classification',
      usageCount: 189,
    },
    {
      id: '3',
      name: language === 'zh' ? '图像语义分割模板' : 'Image Segmentation',
      thumbnail: '🖼️',
      fieldCount: 12,
      type: 'Segmentation',
      description: language === 'zh' ? '像素级图像分割标注' : 'Pixel-level image segmentation',
      usageCount: 167,
    },
    {
      id: '4',
      name: language === 'zh' ? '情感分析模板' : 'Sentiment Analysis',
      thumbnail: '😊',
      fieldCount: 3,
      type: 'Classification',
      description: language === 'zh' ? '正面、负面、中性情感' : 'Positive, Negative, Neutral',
      usageCount: 312,
    },
    {
      id: '5',
      name: language === 'zh' ? '关系抽取模板' : 'Relation Extraction',
      thumbnail: '🔗',
      fieldCount: 10,
      type: 'NER',
      description: language === 'zh' ? '实体间关系标注' : 'Entity relationship annotation',
      usageCount: 98,
    },
    {
      id: '6',
      name: language === 'zh' ? '目标检测模板' : 'Object Detection',
      thumbnail: '🎯',
      fieldCount: 6,
      type: 'Detection',
      description: language === 'zh' ? '矩形框目标检测' : 'Bounding box detection',
      usageCount: 203,
    },
  ];

  const getStatusBadge = (status: AnnotationTask['status']) => {
    const statusConfig = {
      pending: {
        label: language === 'zh' ? '待处理' : 'Pending',
        className: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
        icon: <Clock className="w-3 h-3" />,
      },
      running: {
        label: language === 'zh' ? '运行中' : 'Running',
        className: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
        icon: <Play className="w-3 h-3" />,
      },
      completed: {
        label: language === 'zh' ? '已完成' : 'Completed',
        className: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
        icon: <CheckCircle className="w-3 h-3" />,
      },
      failed: {
        label: language === 'zh' ? '失败' : 'Failed',
        className: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
        icon: <Trash2 className="w-3 h-3" />,
      },
    };

    const config = statusConfig[status];
    return (
      <Badge className={`${config.className} flex items-center gap-1`}>
        {config.icon}
        {config.label}
      </Badge>
    );
  };

  const getModelTypeBadge = (type: AIModel['type']) => {
    const typeConfig = {
      NER: {
        label: language === 'zh' ? '实体识别' : 'NER',
        className: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
      },
      Classification: {
        label: language === 'zh' ? '分类' : 'Classification',
        className: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      },
      Segmentation: {
        label: language === 'zh' ? '分割' : 'Segmentation',
        className: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      },
      Detection: {
        label: language === 'zh' ? '检测' : 'Detection',
        className: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
      },
    };

    const config = typeConfig[type];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background-tertiary">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1890FF] to-[#722ED1] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                {language === 'zh' ? 'AI 标注' : 'AI Annotation'}
              </h1>
              <p className="text-sm text-muted-foreground">
                {language === 'zh'
                  ? '智能化数据标注与模型训练平台'
                  : 'Intelligent data annotation and model training platform'}
              </p>
            </div>
          </div>
          <Button className="bg-[#1890FF] hover:bg-[#1890FF]/90">
            <Plus className="w-4 h-4 mr-2" />
            {language === 'zh' ? '新建标注任务' : 'New Annotation Task'}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="tasks">
              {language === 'zh' ? '任务列表' : 'Task List'}
            </TabsTrigger>
            <TabsTrigger value="models">
              {language === 'zh' ? '模型管理' : 'Model Management'}
            </TabsTrigger>
            <TabsTrigger value="templates">
              {language === 'zh' ? '标注模板' : 'Templates'}
            </TabsTrigger>
          </TabsList>

          {/* Task List Tab */}
          <TabsContent value="tasks">
            <Card className="overflow-hidden">
              <div className="p-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <Input
                    placeholder={language === 'zh' ? '搜索任务...' : 'Search tasks...'}
                    className="max-w-xs"
                  />
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      {language === 'zh' ? '导出' : 'Export'}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        {language === 'zh' ? '任务名称 (Task Name)' : 'Task Name'}
                      </TableHead>
                      <TableHead>
                        {language === 'zh' ? '使用模型 (Model)' : 'Model Used'}
                      </TableHead>
                      <TableHead>
                        {language === 'zh' ? '状态 (Status)' : 'Status'}
                      </TableHead>
                      <TableHead>
                        {language === 'zh' ? '进度 (Progress)' : 'Progress'}
                      </TableHead>
                      <TableHead>
                        {language === 'zh' ? '准确率 (Accuracy)' : 'Accuracy'}
                      </TableHead>
                      <TableHead>
                        {language === 'zh' ? '创建时间 (Created)' : 'Created'}
                      </TableHead>
                      <TableHead className="text-right">
                        {language === 'zh' ? '操作 (Actions)' : 'Actions'}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-[#1890FF]" />
                            <span className="text-sm">{task.model}</span>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(task.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 min-w-[200px]">
                            <Progress
                              value={(task.processedSamples / task.totalSamples) * 100}
                              className="flex-1"
                            />
                            <span className="text-xs text-muted-foreground whitespace-nowrap">
                              {task.processedSamples}/{task.totalSamples}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {task.accuracy > 0 ? (
                            <div className="flex items-center gap-1">
                              <TrendingUp className="w-4 h-4 text-green-500" />
                              <span className="font-medium text-green-600 dark:text-green-400">
                                {task.accuracy}%
                              </span>
                            </div>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {task.createdAt}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                {language === 'zh' ? '查看详情' : 'View Details'}
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="w-4 h-4 mr-2" />
                                {language === 'zh' ? '导出结果' : 'Export Results'}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="w-4 h-4 mr-2" />
                                {language === 'zh' ? '删除' : 'Delete'}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          {/* Model Management Tab */}
          <TabsContent value="models">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {models.map((model) => (
                <Card key={model.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1890FF] to-[#722ED1] flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{model.name}</h3>
                        <p className="text-xs text-muted-foreground">v{model.version}</p>
                      </div>
                    </div>
                    <Switch checked={model.isActive} />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      {getModelTypeBadge(model.type)}
                      <div className="flex items-center gap-1">
                        <Activity className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">
                          {model.accuracy}%
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {model.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        {language === 'zh' ? '最后训练' : 'Last trained'}: {model.lastTrained}
                      </span>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        {language === 'zh' ? '配置' : 'Configure'}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {templates.map((template) => (
                <Card key={template.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#E6F7FF] to-[#BAE7FF] dark:from-[#1F1F1F] dark:to-[#2A2A2A] flex items-center justify-center text-3xl">
                      {template.thumbnail}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{template.name}</h3>
                      <p className="text-xs text-muted-foreground">{template.type}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {template.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">
                        {language === 'zh' ? '字段数' : 'Fields'}: {template.fieldCount}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {language === 'zh' ? '使用次数' : 'Usage'}: {template.usageCount}
                      </div>
                    </div>
                    <Button className="bg-[#1890FF] hover:bg-[#1890FF]/90">
                      {language === 'zh' ? '使用' : 'Use'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
