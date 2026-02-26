import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Plus,
  Image as ImageIcon,
  BarChart3,
  Settings,
  Download,
  Trash2,
  Eye,
  MoreVertical,
  Layers,
  RefreshCw,
  CheckCircle2,
  Clock,
  TrendingUp,
  FileImage,
  Sliders,
  Palette,
  RotateCw,
  Crop,
  FlipHorizontal,
  ZoomIn,
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
import { Progress } from '../components/ui/progress';
import { Switch } from '../components/ui/switch';
import { Slider } from '../components/ui/slider';

interface AugmentationJob {
  id: string;
  name: string;
  sourceCount: number;
  augmentedCount: number;
  status: 'pending' | 'running' | 'completed' | 'failed';
  config: string;
  createdAt: string;
  completedAt?: string;
}

interface Sample {
  id: string;
  thumbnail: string;
  name: string;
  source: 'original' | 'augmented';
  augmentationType?: string;
  status: 'pending' | 'processing' | 'completed';
  createdAt: string;
}

interface AugConfig {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  enabled: boolean;
  intensity: number;
}

export function Augmentation() {
  const { language, t } = useApp();
  const [activeTab, setActiveTab] = useState('overview');

  // Stats data
  const stats = [
    {
      label: language === 'zh' ? '原始样本 (Original Samples)' : 'Original Samples',
      value: '12,458',
      change: '+8.2%',
      icon: <FileImage className="w-5 h-5" />,
      color: 'bg-blue-500',
    },
    {
      label: language === 'zh' ? '增强样本 (Augmented)' : 'Augmented',
      value: '48,932',
      change: '+24.5%',
      icon: <Layers className="w-5 h-5" />,
      color: 'bg-green-500',
    },
    {
      label: language === 'zh' ? '待处理 (Pending)' : 'Pending',
      value: '2,156',
      change: '-12.3%',
      icon: <Clock className="w-5 h-5" />,
      color: 'bg-orange-500',
    },
    {
      label: language === 'zh' ? '成功率 (Success Rate)' : 'Success Rate',
      value: '96.8%',
      change: '+2.1%',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'bg-purple-500',
    },
  ];

  // Mock data - Recent jobs
  const recentJobs: AugmentationJob[] = [
    {
      id: '1',
      name: language === 'zh' ? '产品图片增强批次#001' : 'Product Image Batch #001',
      sourceCount: 500,
      augmentedCount: 2000,
      status: 'completed',
      config: 'Rotation + Flip + Color',
      createdAt: '2025-02-25 14:30',
      completedAt: '2025-02-25 15:45',
    },
    {
      id: '2',
      name: language === 'zh' ? '人脸数据增强#128' : 'Face Data Aug #128',
      sourceCount: 1200,
      augmentedCount: 3600,
      status: 'running',
      config: 'Crop + Brightness + Noise',
      createdAt: '2025-02-26 09:15',
    },
    {
      id: '3',
      name: language === 'zh' ? '场景图片扩充' : 'Scene Image Expansion',
      sourceCount: 800,
      augmentedCount: 0,
      status: 'pending',
      config: 'All Methods',
      createdAt: '2025-02-26 10:00',
    },
    {
      id: '4',
      name: language === 'zh' ? '医疗影像增强' : 'Medical Image Aug',
      sourceCount: 350,
      augmentedCount: 1400,
      status: 'completed',
      config: 'Rotation + Flip',
      createdAt: '2025-02-24 16:20',
      completedAt: '2025-02-24 17:05',
    },
    {
      id: '5',
      name: language === 'zh' ? '文档图像处理' : 'Document Processing',
      sourceCount: 600,
      augmentedCount: 180,
      status: 'failed',
      config: 'Perspective + Distortion',
      createdAt: '2025-02-23 11:30',
    },
  ];

  // Mock data - Samples
  const samples: Sample[] = [
    {
      id: '1',
      thumbnail: '🏞️',
      name: 'landscape_001.jpg',
      source: 'original',
      status: 'completed',
      createdAt: '2025-02-25',
    },
    {
      id: '2',
      thumbnail: '🏞️',
      name: 'landscape_001_rot90.jpg',
      source: 'augmented',
      augmentationType: 'Rotation',
      status: 'completed',
      createdAt: '2025-02-25',
    },
    {
      id: '3',
      thumbnail: '🏞️',
      name: 'landscape_001_flip.jpg',
      source: 'augmented',
      augmentationType: 'Flip',
      status: 'completed',
      createdAt: '2025-02-25',
    },
    {
      id: '4',
      thumbnail: '👤',
      name: 'portrait_045.jpg',
      source: 'original',
      status: 'completed',
      createdAt: '2025-02-24',
    },
    {
      id: '5',
      thumbnail: '👤',
      name: 'portrait_045_bright.jpg',
      source: 'augmented',
      augmentationType: 'Brightness',
      status: 'processing',
      createdAt: '2025-02-24',
    },
    {
      id: '6',
      thumbnail: '🏙️',
      name: 'city_scene_012.jpg',
      source: 'original',
      status: 'pending',
      createdAt: '2025-02-26',
    },
  ];

  // Augmentation configurations
  const [augConfigs, setAugConfigs] = useState<AugConfig[]>([
    {
      id: '1',
      name: language === 'zh' ? '旋转变换 (Rotation)' : 'Rotation',
      icon: <RotateCw className="w-5 h-5" />,
      description: language === 'zh' ? '0-360度随机旋转' : 'Random rotation 0-360°',
      enabled: true,
      intensity: 45,
    },
    {
      id: '2',
      name: language === 'zh' ? '水平翻转 (Flip)' : 'Horizontal Flip',
      icon: <FlipHorizontal className="w-5 h-5" />,
      description: language === 'zh' ? '水平镜像翻转' : 'Horizontal mirror flip',
      enabled: true,
      intensity: 100,
    },
    {
      id: '3',
      name: language === 'zh' ? '裁剪缩放 (Crop & Zoom)' : 'Crop & Zoom',
      icon: <Crop className="w-5 h-5" />,
      description: language === 'zh' ? '随机裁剪和缩放' : 'Random crop and zoom',
      enabled: true,
      intensity: 30,
    },
    {
      id: '4',
      name: language === 'zh' ? '亮度调整 (Brightness)' : 'Brightness',
      icon: <Palette className="w-5 h-5" />,
      description: language === 'zh' ? '亮度随机变化±30%' : 'Brightness variation ±30%',
      enabled: false,
      intensity: 50,
    },
    {
      id: '5',
      name: language === 'zh' ? '对比度 (Contrast)' : 'Contrast',
      icon: <Sliders className="w-5 h-5" />,
      description: language === 'zh' ? '对比度调整' : 'Contrast adjustment',
      enabled: false,
      intensity: 40,
    },
    {
      id: '6',
      name: language === 'zh' ? '缩放变换 (Scale)' : 'Scale Transform',
      icon: <ZoomIn className="w-5 h-5" />,
      description: language === 'zh' ? '0.8-1.2倍缩放' : 'Scale 0.8-1.2x',
      enabled: true,
      intensity: 60,
    },
  ]);

  const getStatusBadge = (status: AugmentationJob['status']) => {
    const statusConfig = {
      pending: {
        label: language === 'zh' ? '待处理' : 'Pending',
        className: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
        icon: <Clock className="w-3 h-3" />,
      },
      running: {
        label: language === 'zh' ? '运行中' : 'Running',
        className: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
        icon: <RefreshCw className="w-3 h-3 animate-spin" />,
      },
      completed: {
        label: language === 'zh' ? '已完成' : 'Completed',
        className: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
        icon: <CheckCircle2 className="w-3 h-3" />,
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

  const getSampleStatusBadge = (status: Sample['status']) => {
    const statusConfig = {
      pending: {
        label: language === 'zh' ? '待处理' : 'Pending',
        className: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
      },
      processing: {
        label: language === 'zh' ? '处理中' : 'Processing',
        className: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      },
      completed: {
        label: language === 'zh' ? '完成' : 'Completed',
        className: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      },
    };

    const config = statusConfig[status];
    return <Badge className={`${config.className} text-xs`}>{config.label}</Badge>;
  };

  const toggleAugConfig = (id: string) => {
    setAugConfigs((prev) =>
      prev.map((config) =>
        config.id === id ? { ...config, enabled: !config.enabled } : config
      )
    );
  };

  const updateIntensity = (id: string, value: number[]) => {
    setAugConfigs((prev) =>
      prev.map((config) => (config.id === id ? { ...config, intensity: value[0] } : config))
    );
  };

  return (
    <div className="min-h-screen bg-background-tertiary">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1890FF] to-[#722ED1] flex items-center justify-center">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                {language === 'zh' ? '数据增强' : 'Data Augmentation'}
              </h1>
              <p className="text-sm text-muted-foreground">
                {language === 'zh'
                  ? '智能化数据扩充与样本生成平台'
                  : 'Intelligent data expansion and sample generation platform'}
              </p>
            </div>
          </div>
          <Button className="bg-[#1890FF] hover:bg-[#1890FF]/90">
            <Plus className="w-4 h-4 mr-2" />
            {language === 'zh' ? '新建增强任务' : 'New Augmentation Task'}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview">
              {language === 'zh' ? '概览' : 'Overview'}
            </TabsTrigger>
            <TabsTrigger value="samples">
              {language === 'zh' ? '样本管理' : 'Sample Management'}
            </TabsTrigger>
            <TabsTrigger value="config">
              {language === 'zh' ? '增强配置' : 'Configuration'}
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-white`}>
                      {stat.icon}
                    </div>
                    <Badge
                      className={`${
                        stat.change.startsWith('+')
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                      }`}
                    >
                      {stat.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Recent Jobs Table */}
            <Card className="overflow-hidden">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold">
                  {language === 'zh' ? '最近增强任务 (Recent Jobs)' : 'Recent Augmentation Jobs'}
                </h3>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        {language === 'zh' ? '任务名称 (Task Name)' : 'Task Name'}
                      </TableHead>
                      <TableHead>
                        {language === 'zh' ? '样本数 (Samples)' : 'Samples'}
                      </TableHead>
                      <TableHead>
                        {language === 'zh' ? '增强配置 (Config)' : 'Configuration'}
                      </TableHead>
                      <TableHead>
                        {language === 'zh' ? '状态 (Status)' : 'Status'}
                      </TableHead>
                      <TableHead>
                        {language === 'zh' ? '创建时间 (Created)' : 'Created At'}
                      </TableHead>
                      <TableHead>
                        {language === 'zh' ? '完成时间 (Completed)' : 'Completed At'}
                      </TableHead>
                      <TableHead className="text-right">
                        {language === 'zh' ? '操作 (Actions)' : 'Actions'}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentJobs.map((job) => (
                      <TableRow key={job.id}>
                        <TableCell className="font-medium">{job.name}</TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1">
                            <div className="text-sm">
                              {language === 'zh' ? '原始' : 'Source'}: {job.sourceCount}
                            </div>
                            <div className="text-sm text-green-600 dark:text-green-400">
                              {language === 'zh' ? '增强' : 'Aug'}: {job.augmentedCount}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-xs">
                            {job.config}
                          </Badge>
                        </TableCell>
                        <TableCell>{getStatusBadge(job.status)}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {job.createdAt}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {job.completedAt || '-'}
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

          {/* Samples Tab */}
          <TabsContent value="samples">
            <Card className="overflow-hidden">
              <div className="p-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <Input
                    placeholder={language === 'zh' ? '搜索样本...' : 'Search samples...'}
                    className="max-w-xs"
                  />
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      {language === 'zh' ? '批量上传' : 'Batch Upload'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      {language === 'zh' ? '导出' : 'Export'}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {samples.map((sample) => (
                    <Card
                      key={sample.id}
                      className="p-3 hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <div className="aspect-square bg-gradient-to-br from-[#E6F7FF] to-[#BAE7FF] dark:from-[#1F1F1F] dark:to-[#2A2A2A] rounded-lg flex items-center justify-center text-4xl mb-3">
                        {sample.thumbnail}
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-medium truncate" title={sample.name}>
                          {sample.name}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge
                            className={
                              sample.source === 'original'
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs'
                                : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs'
                            }
                          >
                            {sample.source === 'original'
                              ? language === 'zh'
                                ? '原始'
                                : 'Orig'
                              : language === 'zh'
                              ? '增强'
                              : 'Aug'}
                          </Badge>
                          {getSampleStatusBadge(sample.status)}
                        </div>
                        {sample.augmentationType && (
                          <p className="text-xs text-muted-foreground truncate">
                            {sample.augmentationType}
                          </p>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Configuration Tab */}
          <TabsContent value="config">
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'zh' ? '增强方法配置 (Augmentation Methods)' : 'Augmentation Methods'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'zh'
                    ? '启用和配置数据增强方法，调整增强强度'
                    : 'Enable and configure data augmentation methods, adjust intensity'}
                </p>
              </div>

              <div className="space-y-6">
                {augConfigs.map((config) => (
                  <div
                    key={config.id}
                    className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            config.enabled
                              ? 'bg-[#1890FF] text-white'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                          }`}
                        >
                          {config.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{config.name}</h4>
                          <p className="text-sm text-muted-foreground">{config.description}</p>
                        </div>
                      </div>
                      <Switch
                        checked={config.enabled}
                        onCheckedChange={() => toggleAugConfig(config.id)}
                      />
                    </div>

                    {config.enabled && (
                      <div className="pl-13 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            {language === 'zh' ? '强度 (Intensity)' : 'Intensity'}
                          </span>
                          <span className="font-medium text-[#1890FF]">{config.intensity}%</span>
                        </div>
                        <Slider
                          value={[config.intensity]}
                          onValueChange={(value) => updateIntensity(config.id, value)}
                          max={100}
                          step={5}
                          className="w-full"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between p-4 bg-[#E6F7FF] dark:bg-[#1F1F1F] rounded-lg border border-[#1890FF]/20">
                <div>
                  <p className="font-medium">
                    {language === 'zh'
                      ? `已启用 ${augConfigs.filter((c) => c.enabled).length} 个增强方法`
                      : `${augConfigs.filter((c) => c.enabled).length} methods enabled`}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh'
                      ? '预计每个原始样本生成 4-6 个增强样本'
                      : 'Expected 4-6 augmented samples per original'}
                  </p>
                </div>
                <Button className="bg-[#1890FF] hover:bg-[#1890FF]/90">
                  <Settings className="w-4 h-4 mr-2" />
                  {language === 'zh' ? '保存配置' : 'Save Config'}
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
