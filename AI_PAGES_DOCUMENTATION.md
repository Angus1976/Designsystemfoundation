# AI 功能页面完整实现文档

## 📝 文档概述

本文档详细记录了"问视间 (SuperInsight)" v2.6.0 版本中新增的 AI 标注和数据增强两大核心功能页面的完整实现。

**更新日期**: 2025-02-26  
**版本号**: v2.6.0  
**作者**: SuperInsight 开发团队

---

## 🎯 更新目标

将 AI 标注和数据增强两个功能从简单的"Coming soon"占位符升级为功能完整、设计精美的企业级页面，提供：
- 完整的业务流程支持
- 丰富的数据可视化
- 专业的交互体验
- 响应式设计
- 双主题 + 双语言支持

---

## 🤖 AI 标注页面 (AI Annotation)

### 文件位置
`/src/app/pages/AIAnnotation.tsx`

### 功能概述

AI 标注页面是一个智能化数据标注与模型训练平台，提供任务管理、模型管理、模板管理三大核心功能。

---

### 🎨 页面结构

#### 1. 页面头部 (Header)

```tsx
<div className="bg-card border-b border-border px-6 py-4">
  <div className="flex items-center justify-between">
    {/* 左侧：标题 + 图标 */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1890FF] to-[#722ED1]">
        <Sparkles className="w-5 h-5 text-white" />
      </div>
      <div>
        <h1>AI 标注 / AI Annotation</h1>
        <p>智能化数据标注与模型训练平台</p>
      </div>
    </div>
    
    {/* 右侧：主操作按钮 */}
    <Button className="bg-[#1890FF]">
      <Plus className="w-4 h-4 mr-2" />
      新建标注任务
    </Button>
  </div>
</div>
```

**设计要点**:
- ✅ 渐变色品牌图标 (#1890FF → #722ED1)
- ✅ Sparkles 图标象征 AI 能力
- ✅ 双语标题和描述
- ✅ 主操作按钮醒目突出

---

#### 2. 标签页导航 (Tab Navigation)

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList className="mb-6">
    <TabsTrigger value="tasks">任务列表</TabsTrigger>
    <TabsTrigger value="models">模型管理</TabsTrigger>
    <TabsTrigger value="templates">标注模板</TabsTrigger>
  </TabsList>
</Tabs>
```

**功能**:
- ✅ 3 个主要功能标签页
- ✅ 状态管理切换
- ✅ 底部边框指示器

---

### 📋 任务列表标签页 (Task List Tab)

#### 数据结构

```typescript
interface AnnotationTask {
  id: string;
  name: string;                  // 任务名称
  model: string;                 // 使用的模型
  status: 'pending' | 'running' | 'completed' | 'failed';
  accuracy: number;              // 准确率 (%)
  createdAt: string;             // 创建时间
  processedSamples: number;      // 已处理样本数
  totalSamples: number;          // 总样本数
}
```

#### UI 组件

**1. 搜索和操作栏**
```tsx
<div className="flex items-center justify-between">
  <Input placeholder="搜索任务..." className="max-w-xs" />
  <Button variant="outline" size="sm">
    <Download className="w-4 h-4 mr-2" />
    导出
  </Button>
</div>
```

**2. 数据表格**

| 列名 | 内容 | 说明 |
|------|------|------|
| 任务名称 | 文本 + 粗体 | 主要标识 |
| 使用模型 | 图标 + 文本 | Cpu 图标 |
| 状态 | 彩色徽章 | 4种状态 |
| 进度 | 进度条 + 分数 | 可视化进度 |
| 准确率 | 百分比 + 图标 | 绿色强调 |
| 创建时间 | 日期字符串 | 次要信息 |
| 操作 | 下拉菜单 | 3个操作项 |

**3. 状态徽章设计**

```typescript
const statusConfig = {
  pending: {
    label: '待处理',
    className: 'bg-gray-100 text-gray-700',
    icon: <Clock className="w-3 h-3" />
  },
  running: {
    label: '运行中',
    className: 'bg-blue-100 text-blue-700',
    icon: <Play className="w-3 h-3" />
  },
  completed: {
    label: '已完成',
    className: 'bg-green-100 text-green-700',
    icon: <CheckCircle className="w-3 h-3" />
  },
  failed: {
    label: '失败',
    className: 'bg-red-100 text-red-700',
    icon: <Trash2 className="w-3 h-3" />
  }
};
```

**视觉效果**:
- 🔵 **待处理**: 灰色 + 时钟图标
- 🔵 **运行中**: 蓝色 + 播放图标
- 🟢 **已完成**: 绿色 + 勾选图标
- 🔴 **失败**: 红色 + 垃圾桶图标

**4. 进度条组件**

```tsx
<div className="flex items-center gap-2 min-w-[200px]">
  <Progress value={(processedSamples / totalSamples) * 100} className="flex-1" />
  <span className="text-xs text-muted-foreground">
    {processedSamples}/{totalSamples}
  </span>
</div>
```

**5. 操作下拉菜单**

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="sm">
      <MoreVertical className="w-4 h-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>
      <Eye className="w-4 h-4 mr-2" />
      查看详情
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Download className="w-4 h-4 mr-2" />
      导出结果
    </DropdownMenuItem>
    <DropdownMenuItem className="text-red-600">
      <Trash2 className="w-4 h-4 mr-2" />
      删除
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

#### 示例数据

```typescript
const tasks = [
  {
    id: '1',
    name: '商品实体识别任务',
    model: 'BERT-NER-v2.1',
    status: 'completed',
    accuracy: 94.5,
    createdAt: '2025-02-25',
    processedSamples: 5000,
    totalSamples: 5000,
  },
  {
    id: '2',
    name: '情感分类标注',
    model: 'TextCNN-v3.0',
    status: 'running',
    accuracy: 89.2,
    createdAt: '2025-02-26',
    processedSamples: 3200,
    totalSamples: 8000,
  },
  // ... 更多数据
];
```

---

### 🔧 模型管理标签页 (Model Management Tab)

#### 数据结构

```typescript
interface AIModel {
  id: string;
  name: string;                  // 模型名称
  type: 'NER' | 'Classification' | 'Segmentation' | 'Detection';
  version: string;               // 版本号
  accuracy: number;              // 准确率
  isActive: boolean;             // 是否激活
  description: string;           // 模型描述
  lastTrained: string;           // 最后训练时间
}
```

#### UI 设计 - 卡片网格

**布局**: 响应式网格
- 桌面: 3 列 (lg:grid-cols-3)
- 平板: 2 列 (md:grid-cols-2)
- 手机: 1 列 (grid-cols-1)

**卡片结构**:

```tsx
<Card className="p-6 hover:shadow-lg transition-shadow">
  {/* 头部：图标 + 名称 + 开关 */}
  <div className="flex items-start justify-between mb-4">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1890FF] to-[#722ED1]">
        <Cpu className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="font-semibold">{model.name}</h3>
        <p className="text-xs text-muted-foreground">v{model.version}</p>
      </div>
    </div>
    <Switch checked={model.isActive} />
  </div>

  {/* 内容：类型 + 准确率 */}
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      {getModelTypeBadge(model.type)}
      <div className="flex items-center gap-1">
        <Activity className="w-4 h-4 text-green-500" />
        <span className="text-sm font-medium text-green-600">
          {model.accuracy}%
        </span>
      </div>
    </div>

    <p className="text-sm text-muted-foreground line-clamp-2">
      {model.description}
    </p>

    {/* 底部：训练时间 + 配置按钮 */}
    <div className="flex items-center justify-between pt-3 border-t">
      <span className="text-xs text-muted-foreground">
        最后训练: {model.lastTrained}
      </span>
      <Button variant="outline" size="sm">
        <Settings className="w-4 h-4 mr-2" />
        配置
      </Button>
    </div>
  </div>
</Card>
```

#### 模型类型徽章

```typescript
const typeConfig = {
  NER: {
    label: '实体识别',
    className: 'bg-purple-100 text-purple-700'
  },
  Classification: {
    label: '分类',
    className: 'bg-blue-100 text-blue-700'
  },
  Segmentation: {
    label: '分割',
    className: 'bg-green-100 text-green-700'
  },
  Detection: {
    label: '检测',
    className: 'bg-orange-100 text-orange-700'
  }
};
```

**视觉效果**:
- 🟣 **NER**: 紫色徽章
- 🔵 **分类**: 蓝色徽章
- 🟢 **分割**: 绿色徽章
- 🟠 **检测**: 橙色徽章

#### 示例数据

```typescript
const models = [
  {
    id: '1',
    name: 'BERT-NER-v2.1',
    type: 'NER',
    version: '2.1.0',
    accuracy: 94.5,
    isActive: true,
    description: '基于BERT的命名实体识别模型',
    lastTrained: '2025-02-20',
  },
  {
    id: '2',
    name: 'TextCNN-v3.0',
    type: 'Classification',
    version: '3.0.2',
    accuracy: 89.2,
    isActive: true,
    description: '文本卷积神经网络分类器',
    lastTrained: '2025-02-18',
  },
  // ... 更多模型
];
```

---

### 📄 标注模板标签页 (Templates Tab)

#### 数据结构

```typescript
interface AnnotationTemplate {
  id: string;
  name: string;                  // 模板名称
  thumbnail: string;             // 缩略图（表情符号）
  fieldCount: number;            // 字段数量
  type: string;                  // 模板类型
  description: string;           // 模板描述
  usageCount: number;            // 使用次数
}
```

#### UI 设计 - 模板卡片

**布局**: 响应式网格（同模型管理）

**卡片结构**:

```tsx
<Card className="p-6 hover:shadow-lg transition-shadow">
  {/* 缩略图 + 标题 */}
  <div className="flex items-start gap-4 mb-4">
    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#E6F7FF] to-[#BAE7FF] flex items-center justify-center text-3xl">
      {template.thumbnail}
    </div>
    <div className="flex-1">
      <h3 className="font-semibold mb-1">{template.name}</h3>
      <p className="text-xs text-muted-foreground">{template.type}</p>
    </div>
  </div>

  {/* 描述 */}
  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
    {template.description}
  </p>

  {/* 统计 + 操作按钮 */}
  <div className="flex items-center justify-between">
    <div className="space-y-1">
      <div className="text-xs text-muted-foreground">
        字段数: {template.fieldCount}
      </div>
      <div className="text-xs text-muted-foreground">
        使用次数: {template.usageCount}
      </div>
    </div>
    <Button className="bg-[#1890FF] hover:bg-[#1890FF]/90">
      使用
    </Button>
  </div>
</Card>
```

#### 缩略图设计

使用表情符号作为临时缩略图：
- 🏷️ NER 模板
- 📊 分类模板
- 🖼️ 分割模板
- 😊 情感分析
- 🔗 关系抽取
- 🎯 目标检测

**优势**:
- ✅ 零加载时间
- ✅ 视觉识别性强
- ✅ 跨平台兼容
- ✅ 易于更换

#### 示例数据

```typescript
const templates = [
  {
    id: '1',
    name: '命名实体识别模板',
    thumbnail: '🏷️',
    fieldCount: 8,
    type: 'NER',
    description: '人名、地名、机构名等实体标注',
    usageCount: 245,
  },
  {
    id: '2',
    name: '文本分类模板',
    thumbnail: '📊',
    fieldCount: 5,
    type: 'Classification',
    description: '多类别文本分类标注',
    usageCount: 189,
  },
  // ... 更多模板
];
```

---

### 🎨 设计细节

#### 颜色规范

| 用途 | 颜色 | Tailwind 类 |
|------|------|------------|
| 主品牌色 | #1890FF | bg-[#1890FF] |
| 渐变终点色 | #722ED1 | to-[#722ED1] |
| 成功/完成 | 绿色 | bg-green-100 text-green-700 |
| 警告/运行 | 蓝色 | bg-blue-100 text-blue-700 |
| 错误/失败 | 红色 | bg-red-100 text-red-700 |
| 待处理 | 灰色 | bg-gray-100 text-gray-700 |

#### 间距规范

| 元素 | 间距 | Tailwind 类 |
|------|------|------------|
| 页面边距 | 24px | px-6 py-4 |
| 卡片内边距 | 24px | p-6 |
| 标签页间距 | 24px | mb-6 |
| 元素间距 | 12px | gap-3 |
| 图标边距 | 8px | mr-2 |

#### 圆角规范

| 元素 | 圆角 | Tailwind 类 |
|------|------|------------|
| 卡片 | 8px | rounded-lg |
| 按钮 | 6px | rounded-md |
| 图标容器 | 8px | rounded-lg |
| 徽章 | 9999px | rounded-full |

---

## 🎨 数据增强页面 (Augmentation)

### 文件位置
`/src/app/pages/Augmentation.tsx`

### 功能概述

数据增强页面是一个智能化数据扩充与样本生成平台，提供概览统计、样本管理、增强配置三大核心功能。

---

### 🎨 页面结构

#### 1. 页面头部 (Header)

```tsx
<div className="bg-card border-b border-border px-6 py-4">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1890FF] to-[#722ED1]">
        <Layers className="w-5 h-5 text-white" />
      </div>
      <div>
        <h1>数据增强 / Data Augmentation</h1>
        <p>智能化数据扩充与样本生成平台</p>
      </div>
    </div>
    <Button className="bg-[#1890FF]">
      <Plus className="w-4 h-4 mr-2" />
      新建增强任务
    </Button>
  </div>
</div>
```

**图标选择**: Layers（层叠）象征数据增强的叠加特性

---

### 📊 概览标签页 (Overview Tab)

#### 1. 统计卡片 (Stats Cards)

**布局**: 响应式 4 列网格

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {stats.map((stat, index) => (
    <Card key={index} className="p-6">
      <div className="flex items-center justify-between mb-4">
        {/* 彩色图标 */}
        <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-white`}>
          {stat.icon}
        </div>
        {/* 增长徽章 */}
        <Badge className={stat.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
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
```

**4个核心统计**:

| 指标 | 图标 | 颜色 | 说明 |
|------|------|------|------|
| 原始样本 | FileImage | 蓝色 | 原始数据总数 |
| 增强样本 | Layers | 绿色 | 生成的增强数据 |
| 待处理 | Clock | 橙色 | 队列中的任务 |
| 成功率 | TrendingUp | 紫色 | 任务成功百分比 |

**示例数据**:
```typescript
const stats = [
  {
    label: '原始样本 (Original Samples)',
    value: '12,458',
    change: '+8.2%',
    icon: <FileImage className="w-5 h-5" />,
    color: 'bg-blue-500',
  },
  {
    label: '增强样本 (Augmented)',
    value: '48,932',
    change: '+24.5%',
    icon: <Layers className="w-5 h-5" />,
    color: 'bg-green-500',
  },
  // ... 更多统计
];
```

#### 2. 最近任务表格 (Recent Jobs Table)

**数据结构**:

```typescript
interface AugmentationJob {
  id: string;
  name: string;              // 任务名称
  sourceCount: number;       // 原始样本数
  augmentedCount: number;    // 增强样本数
  status: 'pending' | 'running' | 'completed' | 'failed';
  config: string;            // 增强配置
  createdAt: string;         // 创建时间
  completedAt?: string;      // 完成时间（可选）
}
```

**表格列**:

| 列名 | 内容 | 说明 |
|------|------|------|
| 任务名称 | 文本 | 主要标识 |
| 样本数 | 双行显示 | 原始数 + 增强数 |
| 增强配置 | 徽章 | 配置简述 |
| 状态 | 彩色徽章 | 4种状态 |
| 创建时间 | 日期时间 | 任务创建 |
| 完成时间 | 日期时间 | 任务完成 |
| 操作 | 下拉菜单 | 3个操作 |

**样本数显示**:
```tsx
<TableCell>
  <div className="flex flex-col gap-1">
    <div className="text-sm">原始: {job.sourceCount}</div>
    <div className="text-sm text-green-600">增强: {job.augmentedCount}</div>
  </div>
</TableCell>
```

**状态徽章**（带动画）:
```typescript
const statusConfig = {
  running: {
    label: '运行中',
    className: 'bg-blue-100 text-blue-700',
    icon: <RefreshCw className="w-3 h-3 animate-spin" />  // 旋转动画
  },
  // ... 其他状态
};
```

---

### 🖼️ 样本管理标签页 (Samples Tab)

#### 数据结构

```typescript
interface Sample {
  id: string;
  thumbnail: string;         // 缩略图（表情符号）
  name: string;              // 文件名
  source: 'original' | 'augmented';
  augmentationType?: string; // 增强类型（可选）
  status: 'pending' | 'processing' | 'completed';
  createdAt: string;         // 创建日期
}
```

#### UI 设计 - 图片网格

**布局**: 响应式网格
- 超大屏: 6 列 (xl:grid-cols-6)
- 大屏: 4 列 (lg:grid-cols-4)
- 平板: 3 列 (md:grid-cols-3)
- 手机: 2 列 (grid-cols-2)

**样本卡片**:

```tsx
<Card className="p-3 hover:shadow-lg transition-shadow cursor-pointer">
  {/* 缩略图 */}
  <div className="aspect-square bg-gradient-to-br from-[#E6F7FF] to-[#BAE7FF] rounded-lg flex items-center justify-center text-4xl mb-3">
    {sample.thumbnail}
  </div>

  {/* 信息区域 */}
  <div className="space-y-2">
    {/* 文件名 */}
    <p className="text-xs font-medium truncate" title={sample.name}>
      {sample.name}
    </p>

    {/* 双徽章：来源 + 状态 */}
    <div className="flex items-center justify-between">
      <Badge className={sample.source === 'original' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}>
        {sample.source === 'original' ? '原始' : '增强'}
      </Badge>
      {getSampleStatusBadge(sample.status)}
    </div>

    {/* 增强类型（如果适用） */}
    {sample.augmentationType && (
      <p className="text-xs text-muted-foreground truncate">
        {sample.augmentationType}
      </p>
    )}
  </div>
</Card>
```

**缩略图占位符**:
- 🏞️ 风景图片
- 👤 人像图片
- 🏙️ 城市场景
- 📸 通用图片

**来源标签颜色**:
- 🔵 **原始**: 蓝色徽章 (bg-blue-100)
- 🟣 **增强**: 紫色徽章 (bg-purple-100)

#### 顶部操作栏

```tsx
<div className="flex items-center justify-between">
  <Input placeholder="搜索样本..." className="max-w-xs" />
  <div className="flex gap-2">
    <Button variant="outline" size="sm">
      <ImageIcon className="w-4 h-4 mr-2" />
      批量上传
    </Button>
    <Button variant="outline" size="sm">
      <Download className="w-4 h-4 mr-2" />
      导出
    </Button>
  </div>
</div>
```

---

### ⚙️ 增强配置标签页 (Configuration Tab)

#### 数据结构

```typescript
interface AugConfig {
  id: string;
  name: string;              // 方法名称
  icon: React.ReactNode;     // 方法图标
  description: string;       // 方法描述
  enabled: boolean;          // 是否启用
  intensity: number;         // 强度 (0-100)
}
```

#### UI 设计 - 配置卡片

**6 种增强方法**:

| 方法 | 图标 | 描述 | 默认强度 |
|------|------|------|----------|
| 旋转变换 | RotateCw | 0-360度随机旋转 | 45% |
| 水平翻转 | FlipHorizontal | 水平镜像翻转 | 100% |
| 裁剪缩放 | Crop | 随机裁剪和缩放 | 30% |
| 亮度调整 | Palette | 亮度随机变化±30% | 50% |
| 对比度 | Sliders | 对比度调整 | 40% |
| 缩放变换 | ZoomIn | 0.8-1.2倍缩放 | 60% |

**配置卡片结构**:

```tsx
<div className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
  {/* 头部：图标 + 标题 + 开关 */}
  <div className="flex items-start justify-between mb-4">
    <div className="flex items-start gap-3 flex-1">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${config.enabled ? 'bg-[#1890FF] text-white' : 'bg-gray-100 text-gray-400'}`}>
        {config.icon}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold mb-1">{config.name}</h4>
        <p className="text-sm text-muted-foreground">{config.description}</p>
      </div>
    </div>
    <Switch checked={config.enabled} onCheckedChange={() => toggleAugConfig(config.id)} />
  </div>

  {/* 强度滑块（仅在启用时显示） */}
  {config.enabled && (
    <div className="pl-13 space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">强度 (Intensity)</span>
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
```

**状态管理**:

```typescript
const [augConfigs, setAugConfigs] = useState<AugConfig[]>([...]);

// 切换启用/禁用
const toggleAugConfig = (id: string) => {
  setAugConfigs((prev) =>
    prev.map((config) =>
      config.id === id ? { ...config, enabled: !config.enabled } : config
    )
  );
};

// 更新强度
const updateIntensity = (id: string, value: number[]) => {
  setAugConfigs((prev) =>
    prev.map((config) =>
      config.id === id ? { ...config, intensity: value[0] } : config
    )
  );
};
```

#### 配置摘要面板

```tsx
<div className="mt-8 flex items-center justify-between p-4 bg-[#E6F7FF] dark:bg-[#1F1F1F] rounded-lg border border-[#1890FF]/20">
  <div>
    <p className="font-medium">
      已启用 {augConfigs.filter((c) => c.enabled).length} 个增强方法
    </p>
    <p className="text-sm text-muted-foreground">
      预计每个原始样本生成 4-6 个增强样本
    </p>
  </div>
  <Button className="bg-[#1890FF] hover:bg-[#1890FF]/90">
    <Settings className="w-4 h-4 mr-2" />
    保存配置
  </Button>
</div>
```

**视觉特点**:
- ✅ 浅蓝色背景 (#E6F7FF)
- ✅ 品牌色边框 (#1890FF/20)
- ✅ 启用数量统计
- ✅ 预计效果提示
- ✅ 保存按钮突出

---

## 🎨 设计系统规范

### 颜色系统

#### 主色调 (Primary Colors)

| 用途 | 颜色值 | 使用场景 |
|------|--------|----------|
| 主品牌色 | #1890FF | 按钮、链接、强调 |
| 渐变起点 | #1890FF | 图标渐变背景 |
| 渐变终点 | #722ED1 | 图标渐变背景 |

#### 语义色 (Semantic Colors)

| 语义 | 明亮模式 | 深色模式 | 用途 |
|------|---------|---------|------|
| 成功 | bg-green-100 text-green-700 | bg-green-900/30 text-green-300 | 完成状态 |
| 警告 | bg-blue-100 text-blue-700 | bg-blue-900/30 text-blue-300 | 运行状态 |
| 错误 | bg-red-100 text-red-700 | bg-red-900/30 text-red-300 | 失败状态 |
| 中性 | bg-gray-100 text-gray-700 | bg-gray-800 text-gray-300 | 待处理 |

#### 模型类型色 (Model Type Colors)

| 类型 | 颜色 | Tailwind 类 |
|------|------|------------|
| NER | 紫色 | bg-purple-100 text-purple-700 |
| 分类 | 蓝色 | bg-blue-100 text-blue-700 |
| 分割 | 绿色 | bg-green-100 text-green-700 |
| 检测 | 橙色 | bg-orange-100 text-orange-700 |

#### 统计卡片色 (Stat Card Colors)

| 指标 | 颜色 | 类名 |
|------|------|------|
| 原始样本 | 蓝色 | bg-blue-500 |
| 增强样本 | 绿色 | bg-green-500 |
| 待处理 | 橙色 | bg-orange-500 |
| 成功率 | 紫色 | bg-purple-500 |

---

### 字体规范

| 用途 | 大小 | 行高 | 类名 |
|------|------|------|------|
| 页面标题 | 24px | 32px | text-2xl |
| 卡片标题 | 16px | 24px | text-base font-semibold |
| 副标题 | 14px | 20px | text-sm |
| 正文 | 14px | 20px | text-sm |
| 辅助文字 | 12px | 16px | text-xs text-muted-foreground |
| 统计数字 | 24px | 32px | text-2xl font-bold |

---

### 间距系统

| 用途 | 间距值 | Tailwind 类 |
|------|--------|------------|
| 页面外边距 | 24px | px-6 py-4 |
| 卡片内边距 | 24px | p-6 |
| 节之间 | 24px | mb-6 |
| 元素之间 | 12px | gap-3 |
| 紧密元素 | 8px | gap-2 |
| 图标边距 | 8px | mr-2 |

---

### 圆角系统

| 元素 | 圆角值 | Tailwind 类 |
|------|--------|------------|
| 卡片 | 8px | rounded-lg |
| 按钮 | 6px | rounded-md |
| 输入框 | 6px | rounded-md |
| 图标容器 | 8px | rounded-lg |
| 徽章 | 全圆角 | rounded-full |

---

### 阴影系统

| 用途 | 阴影 | Tailwind 类 |
|------|------|------------|
| 卡片默认 | 小阴影 | (默认) |
| 卡片悬停 | 大阴影 | hover:shadow-lg |
| 下拉菜单 | 中阴影 | shadow-md |

---

## 🎯 交互设计

### 悬停效果 (Hover Effects)

#### 1. 卡片悬停

```tsx
className="hover:shadow-lg transition-shadow"
```

**效果**: 阴影从默认增大到 shadow-lg

#### 2. 按钮悬停

```tsx
className="bg-[#1890FF] hover:bg-[#1890FF]/90"
```

**效果**: 背景透明度从 100% 降至 90%

#### 3. 配置项悬停

```tsx
className="hover:bg-accent/50 transition-colors"
```

**效果**: 背景色淡入 50% 透明度的强调色

---

### 动画效果 (Animations)

#### 1. 运行状态动画

```tsx
<RefreshCw className="w-3 h-3 animate-spin" />
```

**效果**: 刷新图标持续旋转

#### 2. 进度条动画

```tsx
<Progress value={percentage} className="transition-all duration-300" />
```

**效果**: 进度条平滑过渡

#### 3. 滑块动画

```tsx
<Slider ... className="transition-all" />
```

**效果**: 滑块位置平滑移动

---

### 状态管理

#### 1. 标签页状态

```typescript
const [activeTab, setActiveTab] = useState('overview');
```

**用途**: 控制当前显示的标签页

#### 2. 配置开关状态

```typescript
const [augConfigs, setAugConfigs] = useState<AugConfig[]>([...]);
```

**用途**: 管理所有增强方法的启用状态和强度

#### 3. 模型激活状态

```typescript
isActive: boolean
```

**用途**: 控制模型是否处于激活状态

---

## 📱 响应式设计

### 网格布局断点

| 断点 | 屏幕宽度 | 卡片列数 | Tailwind 类 |
|------|---------|---------|------------|
| 手机 | < 768px | 1 列 | grid-cols-1 |
| 平板 | ≥ 768px | 2 列 | md:grid-cols-2 |
| 桌面 | ≥ 1024px | 3 列 | lg:grid-cols-3 |
| 大屏 | ≥ 1280px | 4 列 | xl:grid-cols-4 |

### 样本网格特殊布局

| 断点 | 屏幕宽度 | 列数 | Tailwind 类 |
|------|---------|------|------------|
| 手机 | < 768px | 2 列 | grid-cols-2 |
| 平板 | ≥ 768px | 3 列 | md:grid-cols-3 |
| 桌面 | ≥ 1024px | 4 列 | lg:grid-cols-4 |
| 超大屏 | ≥ 1280px | 6 列 | xl:grid-cols-6 |

**原因**: 样本卡片更小，可以在大屏显示更多列

---

## 🌐 国际化支持

### 实现方式

```typescript
const { language, t } = useApp();

// 双语标题
language === 'zh' ? '商品实体识别任务' : 'Product Entity Recognition'

// 双语徽章
label: language === 'zh' ? '实体识别' : 'NER'

// 双语描述
description: language === 'zh' ? '基于BERT的命名实体识别模型' : 'BERT-based Named Entity Recognition'
```

### 标签格式规范

**格式**: `中文 (English)` 或 `中文`

**示例**:
- ✅ `任务名称 (Task Name)`
- ✅ `使用模型 (Model)`
- ✅ `准确率 (Accuracy)`
- ✅ `AI 标注`（无英文时）

### 数字和日期格式

**数字**: 保持一致，无本地化
- 示例: `94.5%`、`5000`、`12,458`

**日期**: 统一 ISO 格式
- 格式: `YYYY-MM-DD`
- 示例: `2025-02-25`

**日期时间**: 24小时制
- 格式: `YYYY-MM-DD HH:mm`
- 示例: `2025-02-26 14:30`

---

## 📊 数据可视化

### 进度条

**组件**: Radix UI Progress

```tsx
<Progress value={(processedSamples / totalSamples) * 100} />
```

**视觉**: 
- 背景: 灰色 (bg-secondary)
- 填充: 品牌蓝 (#1890FF)
- 高度: 8px (h-2)

### 滑块

**组件**: Radix UI Slider

```tsx
<Slider
  value={[intensity]}
  onValueChange={updateIntensity}
  max={100}
  step={5}
/>
```

**特点**:
- 范围: 0-100
- 步长: 5
- 实时反馈
- 品牌色滑块

### 徽章

**组件**: 自定义 Badge

```tsx
<Badge className="bg-blue-100 text-blue-700 flex items-center gap-1">
  <Icon className="w-3 h-3" />
  {label}
</Badge>
```

**变体**:
- ✅ 图标 + 文字
- ✅ 仅文字
- ✅ 彩色背景
- ✅ 边框样式

---

## 🔧 技术实现

### 组件依赖

```typescript
// UI 组件
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { Switch } from '../components/ui/switch';
import { Progress } from '../components/ui/progress';
import { Slider } from '../components/ui/slider';

// 图标
import { Plus, Play, Pause, CheckCircle, Clock, Settings, Download, Trash2, Eye, MoreVertical, Sparkles, Cpu, Activity, TrendingUp } from 'lucide-react';

// 上下文
import { useApp } from '../context/AppContext';
```

### 状态管理模式

```typescript
// 标签页状态
const [activeTab, setActiveTab] = useState('overview');

// 配置状态
const [augConfigs, setAugConfigs] = useState<AugConfig[]>([...]);

// 更新函数
const toggleConfig = (id: string) => {
  setAugConfigs(prev => 
    prev.map(config => 
      config.id === id ? { ...config, enabled: !config.enabled } : config
    )
  );
};
```

### 类型定义

```typescript
// 任务接口
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

// 联合类型
type Status = 'pending' | 'running' | 'completed' | 'failed';
type ModelType = 'NER' | 'Classification' | 'Segmentation' | 'Detection';
```

---

## ✅ 功能检查清单

### AI 标注页面

#### 基础功能
- [x] 页面头部渲染
- [x] 三个标签页切换
- [x] 任务列表表格
- [x] 模型卡片网格
- [x] 模板卡片网格

#### 数据展示
- [x] 状态徽章显示
- [x] 进度条可视化
- [x] 准确率指标
- [x] 模型类型徽章
- [x] 统计数据

#### 交互功能
- [x] 搜索功能（UI）
- [x] 下拉菜单操作
- [x] 开关切换
- [x] 悬停效果
- [x] 按钮点击（UI）

#### 国际化
- [x] 中文标签
- [x] 英文标签
- [x] 双语切换
- [x] 格式一致性

---

### 数据增强页面

#### 基础功能
- [x] 页面头部渲染
- [x] 三个标签页切换
- [x] 统计卡片展示
- [x] 任务表格展示
- [x] 样本网格展示
- [x] 配置卡片列表

#### 数据展示
- [x] 统计数字
- [x] 增长趋势
- [x] 状态徽章
- [x] 样本缩略图
- [x] 配置强度

#### 交互功能
- [x] 搜索功能（UI）
- [x] 开关切换
- [x] 滑块调整
- [x] 下拉菜单
- [x] 卡片悬停

#### 国际化
- [x] 中文标签
- [x] 英文标签
- [x] 双语切换
- [x] 格式一致性

---

## 🚀 性能优化

### 1. 组件优化

**React.memo**: 对纯展示组件使用 memo
```typescript
const StatCard = React.memo(({ stat }) => {
  // 组件内容
});
```

**useCallback**: 缓存回调函数
```typescript
const toggleConfig = useCallback((id: string) => {
  setAugConfigs(prev => /* ... */);
}, []);
```

**useMemo**: 缓存计算结果
```typescript
const enabledCount = useMemo(
  () => augConfigs.filter(c => c.enabled).length,
  [augConfigs]
);
```

### 2. 渲染优化

**虚拟滚动**: 大数据列表（待实现）
```typescript
// 使用 react-virtual 或 react-window
import { useVirtual } from 'react-virtual';
```

**懒加载**: 标签页内容
```typescript
<TabsContent value="models">
  {activeTab === 'models' && <ModelManagement />}
</TabsContent>
```

### 3. 数据优化

**分页**: 表格数据分页加载
```typescript
const pageSize = 10;
const currentPage = 1;
const displayTasks = tasks.slice((currentPage - 1) * pageSize, currentPage * pageSize);
```

**防抖**: 搜索输入防抖
```typescript
import { useDebouncedValue } from '@/hooks/useDebounce';
const debouncedSearch = useDebouncedValue(searchTerm, 300);
```

---

## 📚 最佳实践

### 1. 代码组织

**文件结构**:
```
pages/
  AIAnnotation.tsx      # AI 标注页面
  Augmentation.tsx      # 数据增强页面
```

**组件拆分**:
- 保持单文件完整性
- 超过 500 行考虑拆分
- 提取可复用组件

### 2. 类型安全

**严格类型定义**:
```typescript
interface Props {
  task: AnnotationTask;
  onUpdate: (id: string, updates: Partial<AnnotationTask>) => void;
}
```

**避免 any**:
```typescript
// ❌ 不推荐
const data: any = fetchData();

// ✅ 推荐
const data: AnnotationTask[] = fetchData();
```

### 3. 可访问性

**语义化 HTML**:
```tsx
<main aria-label="AI Annotation Page">
  <header>
    <h1>AI 标注</h1>
  </header>
</main>
```

**键盘导航**:
- Tab 键可访问所有交互元素
- Enter 键触发按钮
- 箭头键导航下拉菜单

**ARIA 标签**:
```tsx
<Button aria-label="新建标注任务">
  <Plus className="w-4 h-4" />
</Button>
```

### 4. 错误处理

**空状态处理**:
```tsx
{tasks.length === 0 ? (
  <EmptyState
    icon={<ClipboardList />}
    title="暂无任务"
    description="点击新建按钮创建第一个标注任务"
  />
) : (
  <Table>...</Table>
)}
```

**加载状态**:
```tsx
{isLoading ? (
  <TableSkeleton rows={5} columns={7} />
) : (
  <Table>...</Table>
)}
```

---

## 🎓 学习资源

### 组件文档

- **Radix UI**: https://radix-ui.com
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide Icons**: https://lucide.dev

### 设计参考

- **Ant Design**: https://ant.design
- **Material Design**: https://material.io
- **Shadcn UI**: https://ui.shadcn.com

### React 最佳实践

- **React Docs**: https://react.dev
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/

---

## 📝 更新日志

### v2.6.0 (2025-02-26)

**新增**:
- ✅ AI 标注页面完整实现
- ✅ 数据增强页面完整实现
- ✅ 任务列表表格
- ✅ 模型管理卡片
- ✅ 模板管理卡片
- ✅ 统计卡片
- ✅ 样本网格
- ✅ 增强配置

**优化**:
- ✅ 响应式布局
- ✅ 深色模式支持
- ✅ 国际化完善
- ✅ 交互动画

---

## 🔮 未来计划

### 短期 (1-2 周)

- [ ] 添加真实 API 集成
- [ ] 实现数据分页
- [ ] 添加搜索功能
- [ ] 实现筛选功能
- [ ] 添加排序功能

### 中期 (1-2 月)

- [ ] 添加批量操作
- [ ] 实现拖拽上传
- [ ] 添加预览功能
- [ ] 实现导出功能
- [ ] 添加数据图表

### 长期 (3-6 月)

- [ ] 实时任务监控
- [ ] WebSocket 实时更新
- [ ] 高级筛选器
- [ ] 自定义视图
- [ ] 性能优化

---

## 🆘 常见问题

### Q1: 如何添加新的增强方法？

```typescript
const newConfig: AugConfig = {
  id: '7',
  name: '噪声添加 (Noise)',
  icon: <Sparkles className="w-5 h-5" />,
  description: '添加高斯噪声',
  enabled: false,
  intensity: 30,
};

setAugConfigs(prev => [...prev, newConfig]);
```

### Q2: 如何自定义状态颜色？

修改 `getStatusBadge` 函数中的 `statusConfig` 对象：

```typescript
const statusConfig = {
  yourStatus: {
    label: '自定义状态',
    className: 'bg-yellow-100 text-yellow-700',
    icon: <YourIcon className="w-3 h-3" />
  }
};
```

### Q3: 如何添加新的模型类型？

```typescript
// 1. 更新类型定义
type ModelType = 'NER' | 'Classification' | 'Segmentation' | 'Detection' | 'NewType';

// 2. 添加徽章配置
const typeConfig = {
  NewType: {
    label: '新类型',
    className: 'bg-pink-100 text-pink-700'
  }
};
```

---

## 📞 技术支持

如有任何问题或建议，请联系：

- **文档版本**: v2.6.0
- **更新日期**: 2025-02-26
- **维护团队**: SuperInsight 开发团队
- **适用版本**: SuperInsight v2.6.0+

---

<div align="center">
  <p><strong>问视间 (SuperInsight) v2.6.0</strong></p>
  <p>AI 功能页面完整实现</p>
  <p>© 2025 SuperInsight Team. All rights reserved.</p>
</div>
