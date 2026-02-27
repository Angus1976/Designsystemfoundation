# 问视间 (WINS) Logo 资源包

## 🎯 设计理念

**核心概念**：W 形状 = 逐级上升 = 成功增长

- **"W" 变形**：5个逐级升高的柱状条形成 "W" 形状
- **WINS (问视间)**：中文"问视间"与英文"Wins"谐音，寓意成功
- **数据上升**：从左到右逐级升高，象征数据增长和持续成功
- **渐变配色**：从蓝色 (#1890FF) 到绿色 (#52C41A)，表示从数据到成功的转化

---

## 📦 文件清单

### 核心 Logo 文件（8个 SVG）

| 文件名 | 尺寸 | 动画 | 用途 | 大小 |
|--------|------|------|------|------|
| `logo-full.svg` | 280×80px | ✅ 有 | 完整版（动态） | ~4KB |
| `logo-full-static.svg` | 280×80px | ❌ 无 | 完整版（静态） | ~3KB |
| `logo-icon-64.svg` | 64×64px | ❌ 无 | 小尺寸图标 | ~2KB |
| `logo-icon-128.svg` | 128×128px | ❌ 无 | 中等尺寸图标 | ~2.5KB |
| `logo-simple-48.svg` | 48×48px | ❌ 无 | 简化版（圆角矩形） | ~1.5KB |
| `logo-horizontal.svg` | 360×72px | ❌ 无 | 横向版 | ~3.5KB |
| `logo-favicon.svg` | 32×32px | ❌ 无 | 浏览器图标 | ~1KB |
| `logo-square-256.svg` | 256×256px | ❌ 无 | 高清方形版 | ~3.5KB |

**总计**: 8 个文件，约 21KB

---

## 🎨 设计元素详解

### 核心元素：W 形上升柱

```
     ↑ 成功
     █  ← 最高（第5柱）
    ███  ← 较高（第4柱）
   █████  ← 中等（第3柱）
  ███████  ← 较低（第2柱）
 █████████  ← 最低（第1柱）
───────────────
  W 形状
```

**5个柱子的高度比例**：
1. 左柱（第1）：最低 - 起点
2. 左中柱（第2）：较低 - 增长
3. 中柱（第3）：中等 - 发展
4. 右中柱（第4）：较高 - 突破
5. 右柱（第5）：最高 - 成功

### 视觉元素

1. **渐变柱子** - 蓝到绿的渐变（从数据到成功）
2. **白色数据点** - 每个柱子顶部的关键节点
3. **趋势连线** - 连接所有数据点，展示增长曲线
4. **成功箭头** - 右上角向上箭头，强调上升趋势
5. **背景光晕** - 淡淡的渐变圆形背景
6. **基准网格** - 可选的参考线（仅部分版本）

### 颜色系统

| 颜色 | 色值 | 用途 | 象征意义 |
|------|------|------|----------|
| 品牌蓝 | #1890FF | 主色调（柱子底部） | 数据、技术、专业 |
| 成功绿 | #52C41A | 渐变顶部、箭头 | 成长、成功、正向 |
| 纯白 | #FFFFFF | 数据点、趋势线 | 清晰、准确、可信 |
| 渐变背景 | #1890FF → #52C41A | 柱子填充 | 转化、进化、提升 |

---

## 📐 使用场景对照表

| 场景 | 推荐文件 | 尺寸 | 说明 |
|------|---------|------|------|
| **网站 Header** | logo-full-static.svg | 280×80 | 静态版，不分散注意力 |
| **启动画面** | logo-full.svg | 280×80 | 动画版，增强吸引力 |
| **侧边栏展开** | logo-icon-64.svg | 64×64 | 完整 W 形，识别度高 |
| **侧边栏收起** | logo-simple-48.svg | 48×48 | 简化版，适合小空间 |
| **浏览器标签** | logo-favicon.svg | 32×32 | 极简版，清晰可辨 |
| **应用图标** | logo-square-256.svg | 256×256 | 高清，带文字 |
| **登录页面** | logo-horizontal.svg | 360×72 | 横向布局，专业感 |
| **移动端顶部** | logo-simple-48.svg | 48×48 | 紧凑高效 |
| **打印材料** | logo-full-static.svg | 矢量 | 静态版，打印友好 |
| **社交媒体** | logo-icon-128.svg | 128×128 | 清晰的 W 形标识 |
| **邮件签名** | logo-horizontal.svg | 360×72 | 横向，便于排版 |
| **PPT/文档** | logo-full-static.svg | 280×80 | 完整品牌展示 |

---

## 🚀 快速使用指南

### 1. HTML 中使用

```html
<!-- 网站 Logo（静态版） -->
<img src="/logos/logo-full-static.svg" alt="问视间 WINS" height="80">

<!-- 网站 Logo（动画版，用于首次访问） -->
<img src="/logos/logo-full.svg" alt="问视间 WINS" height="80">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/logos/logo-favicon.svg">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/logos/logo-square-256.svg">
```

### 2. React/Vue 中使用

```tsx
// 静态版
<img src="/logos/logo-full-static.svg" alt="问视间" className="h-20" />

// 动画版
<img src="/logos/logo-full.svg" alt="问视间" className="h-20" />

// 图标版
<img src="/logos/logo-icon-64.svg" alt="WINS" className="w-16 h-16" />
```

### 3. CSS 中使用

```css
/* 背景图 */
.header-logo {
  background-image: url('/logos/logo-horizontal.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 360px;
  height: 72px;
}

/* Favicon */
.favicon {
  content: url('/logos/logo-favicon.svg');
}
```

---

## 🎭 动画版 vs 静态版

### logo-full.svg（动画版）

**特点**：
- ✅ 柱子有呼吸动画（上下微动）
- ✅ 箭头闪烁效果
- ✅ 趋势线流动效果
- ✅ 增强视觉吸引力

**适用场景**：
- 启动画面
- 加载页面
- 功能展示页
- 营销落地页

### logo-full-static.svg（静态版）

**特点**：
- ✅ 完全静态，无动画
- ✅ 性能更好
- ✅ 不分散注意力
- ✅ 打印友好

**适用场景**：
- 常规网站 Header
- 文档页面
- 打印材料
- 邮件签名

---

## 📏 设计规范

### 最小尺寸

- **完整版**: 最小宽度 180px（保持可读性）
- **图标版**: 最小尺寸 32×32px（保持 W 形清晰）
- **简化版**: 最小尺寸 24×24px
- **Favicon**: 固定 32×32px 或 16×16px

### 留白空间

- Logo 周围至少保留 Logo 高度 **20%** 的留白
- 不要让其他元素靠得太近
- 保持呼吸感

### 颜色使用

**亮色背景**（推荐）：
- 使用原始颜色
- W 柱清晰可见
- 对比度良好

**深色背景**：
- 同样适用
- 白色数据点更突出
- 渐变效果更明显

### 禁止操作 ❌

- ❌ 不要改变颜色（破坏品牌识别）
- ❌ 不要拉伸变形（保持宽高比）
- ❌ 不要旋转 Logo（W 形需要直立）
- ❌ 不要分离元素（保持完整性）
- ❌ 不要添加阴影/外描边（已内置）
- ❌ 不要改变柱子高度比例（破坏上升含义）

### 推荐操作 ✅

- ✅ 保持原始宽高比
- ✅ 使用纯色背景
- ✅ 根据场景选择合适版本
- ✅ 保持清晰可辨识
- ✅ 考虑性能选择静态版

---

## 💼 品牌含义

### "W" = 问视间 = WINS

**三重含义**：

1. **形状含义**：W 字母
   - 代表 "Wins"（成功）
   - 代表 "问视间"（品牌名称）
   - 西方字母与中文完美结合

2. **结构含义**：5柱上升
   - 象征数据逐步增长
   - 代表业务持续成功
   - 展现正向发展趋势

3. **色彩含义**：蓝到绿渐变
   - 蓝色 = 数据、科技、专业
   - 绿色 = 成长、成功、正向
   - 渐变 = 转化、提升、进化

### 品牌标语

**中文**：数据上升，智见成功  
**含义**：通过数据标注使数据价值上升，智能洞察通向成功

**英文**：Data Rising, Winning Insight  
**含义**：Rising data leads to winning insights

---

## 🔧 技术规格

### 文件格式

- **格式**: SVG (Scalable Vector Graphics)
- **版本**: SVG 1.1
- **命名空间**: http://www.w3.org/2000/svg

### 优势

✅ **矢量格式**：无损缩放，任意尺寸清晰  
✅ **文件小巧**：平均 2-4KB，加载快速  
✅ **动画支持**：原生 SVG 动画（SMIL）  
✅ **Git 友好**：文本格式，易于版本控制  
✅ **响应式**：自动适配不同屏幕  
✅ **可访问性**：支持 alt 文本和 ARIA  

### 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ��� iOS Safari 14+
- ✅ Android Chrome 90+

### 导出建议

**如需 PNG 格式**（特殊场景）：
- **1x**: 原始尺寸（Web 常规）
- **2x**: 2倍尺寸（Retina 显示器）
- **3x**: 3倍尺寸（移动端高清）
- **300 DPI**: 打印质量

**推荐工具**：
- 在线：https://svgtopng.com/
- 本地：Inkscape、GIMP
- 命令行：ImageMagick、rsvg-convert

---

## 📱 响应式建议

### 桌面端（> 1024px）

```html
<!-- Header: 完整版 Logo -->
<img src="/logos/logo-full-static.svg" alt="问视间" height="60">

<!-- 侧边栏展开 -->
<img src="/logos/logo-icon-64.svg" alt="WINS" width="48">

<!-- 侧边栏收起 -->
<img src="/logos/logo-simple-48.svg" alt="WINS" width="40">
```

### 平板端（768px - 1024px）

```html
<!-- Header: 横向版 -->
<img src="/logos/logo-horizontal.svg" alt="问视间" height="48">

<!-- 侧边栏: 图标版 -->
<img src="/logos/logo-icon-64.svg" alt="WINS" width="40">
```

### 移动端（< 768px）

```html
<!-- 顶部栏: 简化版 -->
<img src="/logos/logo-simple-48.svg" alt="WINS" width="36">

<!-- 启动页: 方形版 -->
<img src="/logos/logo-square-256.svg" alt="问视间" width="120">
```

---

## 🎯 应用示例

### 网站应用

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/logos/logo-favicon.svg">
  
  <!-- Apple Touch Icon -->
  <link rel="apple-touch-icon" sizes="256x256" href="/logos/logo-square-256.svg">
  
  <!-- PWA Manifest -->
  <link rel="manifest" href="/manifest.json">
  
  <title>问视间 (WINS) - 数据上升，智见成功</title>
</head>
<body>
  <!-- Header Logo -->
  <header>
    <img src="/logos/logo-full-static.svg" alt="问视间 WINS" height="60">
  </header>
</body>
</html>
```

### PWA Manifest

```json
{
  "name": "问视间 (WINS)",
  "short_name": "WINS",
  "description": "数据上升，智见成功",
  "icons": [
    {
      "src": "/logos/logo-favicon.svg",
      "sizes": "32x32",
      "type": "image/svg+xml"
    },
    {
      "src": "/logos/logo-square-256.svg",
      "sizes": "256x256",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#1890FF",
  "background_color": "#ffffff"
}
```

### React 组件

```tsx
interface LogoProps {
  variant?: 'full' | 'full-static' | 'icon' | 'simple' | 'horizontal' | 'square';
  size?: number;
  className?: string;
}

export function Logo({ variant = 'full-static', size, className }: LogoProps) {
  const logos = {
    'full': '/logos/logo-full.svg',
    'full-static': '/logos/logo-full-static.svg',
    'icon': '/logos/logo-icon-64.svg',
    'simple': '/logos/logo-simple-48.svg',
    'horizontal': '/logos/logo-horizontal.svg',
    'square': '/logos/logo-square-256.svg',
  };

  return (
    <img 
      src={logos[variant]} 
      alt="问视间 WINS" 
      height={size}
      className={className}
    />
  );
}
```

---

## 📋 Git 提交清单

上传前检查：

- [ ] 所有 8 个 SVG 文件已创建
- [ ] 文件命名规范一致
- [ ] 文件大小合理（< 5KB）
- [ ] 在浏览器中测试显示
- [ ] 动画效果正常（logo-full.svg）
- [ ] 颜色与设计规范一致
- [ ] 文档完整详细
- [ ] 无敏感信息

---

## 🔄 版本历史

### v2.6.3 (2025-02-26) - 当前版本

**重大升级**：全新 W 形上升设计

✅ **设计理念**：
- "W" 形状由 5 个逐级升高的柱子组成
- 完美诠释"数据上升"和"成功增长"
- 中文"问视间"与英文"Wins"谐音

✅ **核心元素**：
- 5柱上升形成 W 形
- 蓝到绿渐变（数据到成功）
- 白色数据点和趋势线
- 向上箭头强调成功

✅ **文件清单**：
- 8 个 SVG 文件
- 动画版 + 静态版
- 完整尺寸覆盖

---

## 📞 联系方式

**设计团队**: WINS Design Team  
**邮箱**: design@wins.example.com  
**项目**: 问视间 (WINS) 企业级数据标注平台

---

## 📄 许可证

© 2025 问视间 (WINS) Team. All rights reserved.

这些 Logo 资源仅供问视间项目官方使用。

---

<div align="center">
  <br>
  <img src="logo-full-static.svg" alt="问视间 WINS" height="80" />
  <br><br>
  <h3>数据上升，智见成功</h3>
  <p><strong>Data Rising, Winning Insight</strong></p>
  <br>
  <p>W 形状 • 逐级上升 • 持续成功</p>
</div>
