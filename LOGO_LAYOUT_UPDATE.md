# LOGO 布局更新文档

## 📝 更新概述

本次更新重新设计了应用的 LOGO 布局结构，将"问视间 (SuperInsight)"从左上角主 LOGO 位置移至页面底部，左上角改为显示客户公司的 LOGO 和名称，实现了白标化（White-Label）设计。

---

## 🎯 更新内容

### 1. 左上角 - 客户公司信息

**之前**：显示"问视间 SuperInsight" LOGO

**现在**：显示客户公司信息
- ✅ 公司 LOGO（渐变色首字母头像）
- ✅ 公司名称（主标题）
- ✅ "企业版" 副标题

#### 视觉设计

**展开状态**（侧边栏宽度 256px）：
```
┌────────────────────────────┐
│ [S] SuperInsight           │
│     企业版                  │
└────────────────────────────┘
```

**收起状态**（侧边栏宽度 64px）：
```
┌────┐
│ S  │
└────┘
```

#### 样式规范

```tsx
// LOGO 容器
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1890FF] to-[#722ED1]">
  {clientCompany.name.charAt(0)}
</div>

// 公司名称
<h2 className="text-sm font-semibold truncate">
  {clientCompany.name}
</h2>

// 副标题
<p className="text-xs text-muted-foreground truncate">
  企业版
</p>
```

#### 交互效果

- **悬停效果**: `hover:scale-105` （展开状态）/ `hover:scale-110` （收起状态）
- **过渡动画**: `transition-transform duration-300`
- **文字截断**: `truncate` 防止长文本溢出

---

### 2. 页面底部 - 问视间 LOGO

**新增**：在每个页面的底部中心位置添加"问视间 SuperInsight" LOGO 和版权信息

#### 布局结构

```
┌──────────────────────────────────┐
│                                  │
│    [问视间 SuperInsight LOGO]    │
│                                  │
│  技术支持 问视间 SuperInsight    │
│                                  │
│  © 2025 问视间科技. 保留所有权利 │
│                                  │
└──────────────────────────────────┘
```

#### 实现代码

```tsx
<footer className="bg-card border-t border-border py-4 px-6">
  <div className="flex flex-col items-center justify-center gap-2">
    {/* LOGO */}
    <Link to="/logo-showcase" className="transition-transform hover:scale-105 duration-300">
      <Logo showSubtitle={false} className="opacity-60 hover:opacity-100 transition-opacity" />
    </Link>
    
    {/* 技术支持 */}
    <p className="text-xs text-muted-foreground text-center">
      {language === 'zh' ? '技术支持' : 'Powered by'}{' '}
      <span className="font-medium text-[#1890FF]">
        {language === 'zh' ? '问视间 SuperInsight' : 'SuperInsight'}
      </span>
    </p>
    
    {/* 版权信息 */}
    <p className="text-xs text-muted-foreground">
      © 2025 {language === 'zh' ? '问视间科技' : 'SuperInsight Tech'}. 
      {language === 'zh' ? '保留所有权利' : 'All rights reserved'}.
    </p>
  </div>
</footer>
```

#### 样式特点

- **LOGO 透明度**: 默认 60%，悬停 100%
- **居中对齐**: 垂直和水平完全居中
- **间距控制**: `gap-2` (8px 间距)
- **文字大小**: `text-xs` (12px)
- **颜色**: `text-muted-foreground` + 品牌蓝色强调
- **可点击**: 点击 LOGO 跳转至 `/logo-showcase`

---

## 🔧 技术实现

### AppContext 更新

新增 `ClientCompany` 接口和相关状态管理：

```typescript
interface ClientCompany {
  name: string;        // 中文名称
  nameEn: string;      // 英文名称
  logo?: string;       // LOGO URL（可选）
}

interface AppContextType {
  // ... 其他字段
  clientCompany: ClientCompany;
  setClientCompany: (company: ClientCompany) => void;
}
```

### 默认客户公司配置

```typescript
const [clientCompany, setClientCompanyState] = useState<ClientCompany>({
  name: 'SuperInsight',
  nameEn: 'SuperInsight',
  logo: 'https://example.com/logo.png', // 可选的 LOGO URL
});
```

### AppLayout 更新

#### 1. 引入 clientCompany

```typescript
const { theme, language, clientCompany, toggleTheme, toggleLanguage, t } = useApp();
```

#### 2. 侧边栏头部重构

**桌面端侧边栏**：
- 展开状态：显示 LOGO + 名称 + 副标题
- 收起状态：仅显示 LOGO

**移动端侧边栏**：
- 始终显示完整信息（LOGO + 名称 + 副标题）
- 右侧添加关闭按钮

#### 3. 主内容区域添加 Footer

在 `<main>` 标签内的 `{children}` 后添加 Footer 组件

---

## 📱 响应式设计

### 桌面端（≥768px）

- **侧边栏**：可展开/收起，切换显示完整/简化版客户信息
- **Footer**：完整显示所有元素

### 移动端（<768px）

- **侧边栏**：全屏抽屉式，显示完整客户信息
- **Footer**：垂直堆叠，保持居中对齐

---

## 🎨 设计规范

### 颜色方案

| 元素 | 颜色 | 说明 |
|------|------|------|
| LOGO 背景 | `from-[#1890FF] to-[#722ED1]` | 品牌渐变色 |
| 公司名称 | `text-foreground` | 主文本色 |
| 副标题 | `text-muted-foreground` | 次要文本色 |
| 品牌强调 | `text-[#1890FF]` | 品牌蓝色 |
| Footer LOGO | `opacity-60` → `opacity-100` | 渐变透明度 |

### 字体大小

| 元素 | 大小 | 类名 |
|------|------|------|
| 公司名称 | 14px | `text-sm` |
| 副标题 | 12px | `text-xs` |
| Footer 文字 | 12px | `text-xs` |

### 间距规范

| 元素 | 间距 | 说明 |
|------|------|------|
| LOGO 与文字间距 | 12px | `gap-3` |
| Footer 元素间距 | 8px | `gap-2` |
| Footer 内边距 | 16px 24px | `py-4 px-6` |

### 圆角规范

| 元素 | 圆角 | 类名 |
|------|------|------|
| LOGO 容器 | 8px | `rounded-lg` |

---

## 🌐 国际化支持

### 中文界面

```
┌────────────────────┐
│ [S] SuperInsight   │
│     企业版          │
└────────────────────┘

技术支持 问视间 SuperInsight
© 2025 问视间科技. 保留所有权利
```

### 英文界面

```
┌────────────────────┐
│ [S] SuperInsight   │
│     Enterprise     │
└────────────────────┘

Powered by SuperInsight
© 2025 SuperInsight Tech. All rights reserved.
```

---

## 🔄 如何自定义客户公司信息

### 方法 1：在代码中修改

编辑 `/src/app/context/AppContext.tsx`：

```typescript
const [clientCompany, setClientCompanyState] = useState<ClientCompany>({
  name: '您的公司名称',
  nameEn: 'Your Company Name',
  logo: 'https://your-domain.com/logo.png', // 可选
});
```

### 方法 2：通过 API 动态设置

```typescript
// 在应用初始化时调用
const { setClientCompany } = useApp();

setClientCompany({
  name: '客户公司',
  nameEn: 'Client Company',
  logo: 'https://client.com/logo.png',
});
```

### 方法 3：从后端配置加载

```typescript
useEffect(() => {
  // 从 API 获取客户配置
  fetch('/api/client-config')
    .then(res => res.json())
    .then(config => {
      setClientCompany({
        name: config.companyName,
        nameEn: config.companyNameEn,
        logo: config.logoUrl,
      });
    });
}, []);
```

---

## ✨ 交互效果

### 1. 悬停动画

**左上角 LOGO**：
```css
transition-transform duration-300
hover:scale-105  /* 展开状态 */
hover:scale-110  /* 收起状态 */
```

**Footer LOGO**：
```css
transition-opacity
opacity-60 → opacity-100
transition-transform duration-300
hover:scale-105
```

### 2. 点击交互

- **Footer LOGO**: 点击跳转到 `/logo-showcase`
- **左上角客户信息**: 无点击事件（静态展示）

### 3. 响应式切换

- **侧边栏收起/展开**: 平滑过渡动画
- **移动端抽屉**: 滑入/滑出效果

---

## 📊 布局对比

### 更新前

```
┌─────────────────────────────────┐
│ [问视间 LOGO] ← 左上角          │
├─────────────────────────────────┤
│                                 │
│        页面内容区域              │
│                                 │
│                                 │
└─────────────────────────────────┘
```

### 更新后

```
┌─────────────────────────────────┐
│ [客户公司 LOGO] ← 左上角         │
├─────────────────────────────────┤
│                                 │
│        页面内容区域              │
│                                 │
├─────────────────────────────────┤
│    [问视间 LOGO] ← 页面底部      │
│   技术支持 问视间 SuperInsight   │
│   © 2025 版权信息                │
└─────────────────────────────────┘
```

---

## 🎯 设计优势

### 1. **白标化 (White-Label)**
- ✅ 支持多租户/多客户场景
- ✅ 每个客户可以有自己的品牌标识
- ✅ 提升产品的定制化能力

### 2. **品牌平衡**
- ✅ 客户品牌位于主要位置（左上角）
- ✅ SuperInsight 品牌位于次要位置（底部）
- ✅ 保持技术支持的可见性

### 3. **用户体验**
- ✅ 清晰的品牌归属感
- ✅ 专业的企业版标识
- ✅ 友好的版权声明

### 4. **灵活性**
- ✅ 支持动态配置
- ✅ 支持自定义 LOGO
- ✅ 支持国际化

---

## 🔍 实现细节

### LOGO 首字母生成

```typescript
// 中文环境
language === 'zh' ? clientCompany.name.charAt(0) : clientCompany.nameEn.charAt(0)

// 示例：
// 'SuperInsight' → 'S'
// '阿里巴巴' → '阿'
// 'Google' → 'G'
```

### 文字截断处理

```css
/* 防止长文本溢出 */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 配合容器 */
.min-w-0 {
  min-width: 0;
}
```

### 渐变色 LOGO 背景

```css
/* 品牌渐变色 */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.from-[#1890FF] {
  --tw-gradient-from: #1890FF;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-[#722ED1] {
  --tw-gradient-to: #722ED1;
}
```

---

## 📝 使用示例

### 基础使用

```tsx
// 应用会自动使用 AppContext 中的 clientCompany 配置
import { AppLayout } from './components/layout/AppLayout';

function App() {
  return (
    <AppLayout>
      <YourPageContent />
    </AppLayout>
  );
}
```

### 动态更新客户信息

```tsx
import { useApp } from './context/AppContext';

function AdminSettings() {
  const { setClientCompany } = useApp();

  const handleUpdateCompany = () => {
    setClientCompany({
      name: '新客户名称',
      nameEn: 'New Client Name',
      logo: 'https://new-client.com/logo.png',
    });
  };

  return <button onClick={handleUpdateCompany}>更新公司信息</button>;
}
```

---

## 🚀 未来扩展

### 计划功能

1. **LOGO 图片上传**
   - ✅ 接口已预留 `logo?: string`
   - 🚧 待实现文件上传功能
   - 🚧 待添加图片裁剪和压缩

2. **多种 LOGO 样式**
   - 🚧 支持图片 LOGO
   - 🚧 支持 SVG LOGO
   - 🚧 支持自定义渐变色

3. **更多自定义选项**
   - 🚧 自定义副标题
   - 🚧 自定义品牌色
   - 🚧 自定义 Footer 文案

---

## ✅ 更新检查清单

- [x] AppContext 添加 ClientCompany 接口
- [x] AppContext 添加 clientCompany 状态
- [x] AppContext 添加 setClientCompany 方法
- [x] AppLayout 左上角显示客户公司信息
- [x] AppLayout 底部添加 SuperInsight Footer
- [x] 桌面端侧边栏展开/收起状态
- [x] 移动端侧边栏完整显示
- [x] 国际化支持（中/英文）
- [x] 响应式设计
- [x] 悬停动画效果
- [x] 文档编写

---

## 🎨 视觉效果预览

### 桌面端 - 展开状态

```
┌──────────────────┬────────────────────────────┐
│                  │ Header                     │
│  [S]             ├────────────────────────────┤
│  SuperInsight    │                            │
│  企业版          │                            │
│                  │      页面内容区域           │
│ ──────────       │                            │
│                  │                            │
│ 🏠 仪表盘        │                            │
│ 🤖 AI 助手       ├────────────────────────────┤
│ 📋 标注任务      │    [问视间 LOGO]           │
│ ...              │  技术支持 问视间 SuperInsight│
│                  │  © 2025 问视间科技           │
└──────────────────┴────────────────────────────┘
```

### 桌面端 - 收起状态

```
┌───┬────────────────────────────┐
│   │ Header                     │
│ S ├────────────────────────────┤
│   │                            │
│   │                            │
│── │      页面内容区域           │
│   │                            │
│🏠 │                            │
│🤖 │                            │
│📋 ├────────────────────────────┤
│.. │    [问视间 LOGO]           │
│   │  技术支持 问视间 SuperInsight│
│   │  © 2025 问视间科技           │
└───┴────────────────────────────┘
```

---

## 📞 技术支持

如有任何问题或建议，请联系：
- **文档版本**: v1.0.0
- **更新日期**: 2025-02-26
- **适用版本**: SuperInsight v2.4.0+

---

<div align="center">
  <p><strong>问视间 (SuperInsight) v2.4.0</strong></p>
  <p>白标化 LOGO 布局设计</p>
  <p>© 2025 SuperInsight Team. All rights reserved.</p>
</div>
