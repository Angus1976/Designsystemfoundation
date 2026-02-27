# 问视间 (WINS) Logo 资源 - Git 上传指南

## 🎯 全新设计理念

**"W" = 逐级上升 = 成功增长**

- **5个柱子**：从左到右逐级升高，形成 "W" 形状
- **WINS (问视间)**：中文与英文谐音，寓意成功
- **数据上升**：象征数据增长和持续成功
- **渐变色彩**：从蓝色（数据）到绿色（成功）的转化

---

## 📦 完整文件清单

### Logo SVG 文件（8个）

| # | 文件名 | 尺寸 | 动画 | 用途 | 大小 |
|---|--------|------|------|------|------|
| 1 | `logo-full.svg` | 280×80px | ✅ 有 | 完整版（动画） | ~4KB |
| 2 | `logo-full-static.svg` | 280×80px | ❌ 无 | 完整版（静态） | ~3KB |
| 3 | `logo-icon-64.svg` | 64×64px | ❌ 无 | 小图标 | ~2KB |
| 4 | `logo-icon-128.svg` | 128×128px | ❌ 无 | 中等图标 | ~2.5KB |
| 5 | `logo-simple-48.svg` | 48×48px | ❌ 无 | 简化版 | ~1.5KB |
| 6 | `logo-horizontal.svg` | 360×72px | ❌ 无 | 横向版 | ~3.5KB |
| 7 | `logo-favicon.svg` | 32×32px | ❌ 无 | 浏览器图标 | ~1KB |
| 8 | `logo-square-256.svg` | 256×256px | ❌ 无 | 高清方形 | ~3.5KB |

### 文档文件（2个）

| # | 文件名 | 说明 | 大小 |
|---|--------|------|------|
| 1 | `public/logos/README.md` | Logo 详细使用文档 | ~12KB |
| 2 | `LOGO_ASSETS_GUIDE.md` | Git 上传指南（本文档） | ~8KB |

**总计**: 10 个文件，约 41KB

---

## 🎨 设计核心

### W 形状的构成

```
视觉示意：

     ↑ 成功
     █      ← 第5柱（最高）
    ███     ← 第4柱（较高）
   █████    ← 第3柱（中等）
  ███████   ← 第2柱（较低）
 █████████  ← 第1柱（最低）
───────────────
   W 形状
```

### 5柱高度比例

| 柱子 | 相对高度 | 象征意义 |
|------|----------|----------|
| 第1柱（左） | 40% | 起步 - 开始 |
| 第2柱（左中） | 60% | 增长 - 发展 |
| 第3柱（中） | 75% | 进步 - 突破 |
| 第4柱（右中） | 90% | 飞跃 - 提升 |
| 第5柱（右） | 100% | 成功 - 目标 |

### 核心视觉元素

1. **渐变柱子** - #1890FF → #52C41A（蓝到绿）
2. **白色数据点** - 每柱顶部，标记关键节点
3. **趋势连线** - 连接数据点，展示增长曲线
4. **成功箭头** - 右上角↑，强调向上趋势
5. **背景光晕** - 淡蓝绿渐变圆形
6. **基准网格** - 参考线（仅部分版本）

---

## 🚀 快速上传到 Git

### 方法一：一键提交（推荐）

```bash
# 进入项目目录
cd your-project-path

# 添加所有 Logo 文件
git add public/logos/

# 添加文档
git add LOGO_ASSETS_GUIDE.md

# 提交
git commit -m "feat: Add new WINS logo with rising W shape design (v2.6.3)

Core Concept:
- W shape formed by 5 rising bars
- Represents data growth and success
- Blue-to-green gradient (data to success)
- Chinese '问视间' sounds like English 'Wins'

Files Added:
- 8 SVG variants (including animated version)
- Complete documentation
- All sizes for different use cases"

# 推送到远程仓库
git push origin main
```

### 方法二：分步提交

```bash
# 1. 添加 Logo SVG 文件
git add public/logos/*.svg

# 2. 添加文档
git add public/logos/README.md
git add LOGO_ASSETS_GUIDE.md

# 3. 查看状态
git status

# 4. 提交
git commit -m "feat: Add WINS logo package (v2.6.3)"

# 5. 推送
git push
```

### 方法三：创建 Git Tag

```bash
# 提交后创建版本标签
git tag -a v2.6.3-logo -m "WINS Logo Package v2.6.3
- Rising W shape design
- 8 SVG variants
- Complete documentation"

# 推送标签
git push origin v2.6.3-logo

# 查看所有标签
git tag -l
```

---

## 📋 提交前检查清单

### 文件完整性 ✅

- [ ] `logo-full.svg` - 完整版（动画）
- [ ] `logo-full-static.svg` - 完整版（静态）
- [ ] `logo-icon-64.svg` - 小图标
- [ ] `logo-icon-128.svg` - 中等图标
- [ ] `logo-simple-48.svg` - 简化版
- [ ] `logo-horizontal.svg` - 横向版
- [ ] `logo-favicon.svg` - Favicon
- [ ] `logo-square-256.svg` - 方形版
- [ ] `public/logos/README.md` - 使用文档
- [ ] `LOGO_ASSETS_GUIDE.md` - 本指南

### 质量检查 ✅

- [ ] 所有文件都是 SVG 格式
- [ ] 文件大小合理（< 5KB）
- [ ] 在浏览器中测试显示正常
- [ ] 动画效果流畅（logo-full.svg）
- [ ] W 形状清晰可辨
- [ ] 颜色渐变正确
- [ ] 文档内容完整
- [ ] 无临时文件或缓存

### Git 规范 ✅

- [ ] commit 信息清晰明确
- [ ] 文件路径正确
- [ ] 无敏感信息
- [ ] .gitignore 配置正确

---

## 📁 目录结构

```
project-root/
├── public/
│   └── logos/
│       ├── logo-full.svg              # 完整版（动画）
│       ├── logo-full-static.svg       # 完整版（静态）✨ 新增
│       ├── logo-icon-64.svg           # 图标 64px
│       ├── logo-icon-128.svg          # 图标 128px
│       ├── logo-simple-48.svg         # 简化版 48px
│       ├── logo-horizontal.svg        # 横向版
│       ├── logo-favicon.svg           # Favicon 32px
│       ├── logo-square-256.svg        # 方形 256px
│       └── README.md                  # Logo 使用文档
│
├── src/
│   └── app/
│       └── components/
│           └── ui/
│               ├── logo.tsx            # Logo React 组件
│               └── logo-animated.tsx   # 动画 Logo 组件
│
├── LOGO_ASSETS_GUIDE.md               # Git 上传指南（本文档）
└── README.md                          # 项目主文档
```

---

## 💡 使用示例

### HTML 基础使用

```html
<!-- 静态版（推荐用于常规页面） -->
<img src="/logos/logo-full-static.svg" alt="问视间 WINS" height="60">

<!-- 动画版（用于启动页、加载页） -->
<img src="/logos/logo-full.svg" alt="问视间 WINS" height="60">

<!-- 图标版（侧边栏、按钮） -->
<img src="/logos/logo-icon-64.svg" alt="WINS" width="48">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/logos/logo-favicon.svg">
```

### React/TypeScript

```tsx
// Logo 组件
interface LogoProps {
  variant?: 'full' | 'full-static' | 'icon' | 'simple';
  animated?: boolean;
  size?: number;
}

export function Logo({ 
  variant = 'full-static', 
  animated = false,
  size = 60 
}: LogoProps) {
  const logoSrc = animated 
    ? '/logos/logo-full.svg'
    : `/logos/logo-${variant}.svg`;

  return (
    <img 
      src={logoSrc} 
      alt="问视间 WINS" 
      height={size}
      className="logo"
    />
  );
}

// 使用
<Logo variant="full-static" size={60} />
<Logo variant="icon" size={48} />
<Logo animated={true} />
```

### CSS 应用

```css
/* Header Logo */
.header-logo {
  background-image: url('/logos/logo-full-static.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  height: 80px;
}

/* Favicon */
.favicon {
  content: url('/logos/logo-favicon.svg');
}

/* 响应式 */
@media (max-width: 768px) {
  .header-logo {
    background-image: url('/logos/logo-simple-48.svg');
    width: 48px;
    height: 48px;
  }
}
```

---

## 🎯 场景应用对照

### 桌面端网站

```html
<!-- Header: 静态完整版 -->
<header>
  <img src="/logos/logo-full-static.svg" alt="问视间" height="60">
</header>

<!-- 侧边栏展开: 图标版 -->
<aside class="sidebar-open">
  <img src="/logos/logo-icon-64.svg" alt="WINS" width="48">
</aside>

<!-- 侧边栏收起: 简化版 -->
<aside class="sidebar-closed">
  <img src="/logos/logo-simple-48.svg" alt="WINS" width="40">
</aside>
```

### 移动端应用

```html
<!-- 顶部栏: 简化版 -->
<nav class="mobile-nav">
  <img src="/logos/logo-simple-48.svg" alt="WINS" width="36">
</nav>

<!-- 启动画面: 方形版 -->
<div class="splash-screen">
  <img src="/logos/logo-square-256.svg" alt="问视间" width="120">
</div>
```

### 营销页面

```html
<!-- 首屏: 动画版（吸引注意） -->
<section class="hero">
  <img src="/logos/logo-full.svg" alt="问视间 WINS" height="80">
</section>

<!-- 特性展示: 横向版 -->
<section class="features">
  <img src="/logos/logo-horizontal.svg" alt="问视间" height="60">
</section>
```

---

## 🔄 更新现有代码

### 1. 更新 Logo 组件

```tsx
// src/app/components/ui/logo.tsx

import React from 'react';

export type LogoVariant = 
  | 'full' 
  | 'full-static' 
  | 'icon-64' 
  | 'icon-128' 
  | 'simple' 
  | 'horizontal' 
  | 'favicon' 
  | 'square';

export interface LogoProps {
  variant?: LogoVariant;
  animated?: boolean;
  size?: number | string;
  className?: string;
}

export function Logo({ 
  variant = 'full-static',
  animated = false,
  size,
  className = '' 
}: LogoProps) {
  // 如果 animated 为 true，使用动画版
  const logoFile = animated && variant === 'full-static'
    ? 'logo-full.svg'
    : `logo-${variant}.svg`;

  const logoSrc = `/logos/${logoFile}`;

  return (
    <img 
      src={logoSrc} 
      alt="问视间 WINS - 数据上升，智见成功" 
      height={size}
      width={size}
      className={className}
    />
  );
}

// 预设尺寸
export const LogoPresets = {
  header: { variant: 'full-static' as const, size: 60 },
  sidebarOpen: { variant: 'icon-64' as const, size: 48 },
  sidebarClosed: { variant: 'simple' as const, size: 40 },
  mobile: { variant: 'simple' as const, size: 36 },
  favicon: { variant: 'favicon' as const, size: 32 },
};
```

### 2. 更新 index.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/logos/logo-favicon.svg">
  
  <!-- Apple Touch Icon -->
  <link rel="apple-touch-icon" sizes="256x256" href="/logos/logo-square-256.svg">
  
  <!-- PWA Manifest -->
  <link rel="manifest" href="/manifest.json">
  
  <!-- SEO Meta -->
  <meta name="description" content="问视间 (WINS) - 数据上升，智见成功">
  
  <title>问视间 (WINS) - 企业级数据标注平台</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```

### 3. 创建/更新 manifest.json

```json
{
  "name": "问视间 (WINS)",
  "short_name": "WINS",
  "description": "数据上升，智见成功 - 企业级数据标注平台",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#1890FF",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "/logos/logo-favicon.svg",
      "sizes": "32x32",
      "type": "image/svg+xml",
      "purpose": "any"
    },
    {
      "src": "/logos/logo-icon-64.svg",
      "sizes": "64x64",
      "type": "image/svg+xml",
      "purpose": "any"
    },
    {
      "src": "/logos/logo-icon-128.svg",
      "sizes": "128x128",
      "type": "image/svg+xml",
      "purpose": "any"
    },
    {
      "src": "/logos/logo-square-256.svg",
      "sizes": "256x256",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 🎨 设计哲学

### 为什么选择"W"形上升设计？

1. **品牌关联**
   - W = Wins = 成功
   - 问视间 ≈ Wins（谐音）
   - 西方字母 + 中文意境

2. **视觉隐喻**
   - 5柱逐级上升 = 数据增长
   - 趋势线向上 = 持续成功
   - 渐变色彩 = 价值转化

3. **易于识别**
   - W 形状独特
   - 上升趋势明显
   - 各尺寸清晰

4. **情感传达**
   - 积极正向
   - 充满希望
   - 追求卓越

---

## 📊 与旧版对比

### v2.6.2（旧版） vs v2.6.3（新版）

| 特性 | 旧版 | 新版 |
|------|------|------|
| 核心形状 | 曲线 W | 柱状 W |
| 上升感 | 一般 | 强烈 |
| 数据感 | 流动 | 增长 |
| 识别度 | 中等 | 很高 |
| 品牌关联 | 弱 | 强（Wins） |
| 适配性 | 复杂 | 简洁 |
| 小尺寸表现 | 一般 | 优秀 |

---

## ✅ Git 提交完整命令

### 完整流程

```bash
# 1. 检查当前状态
git status

# 2. 添加所有 Logo 文件
git add public/logos/

# 3. 添加文档
git add LOGO_ASSETS_GUIDE.md

# 4. 查看将要提交的文件
git diff --cached

# 5. 提交
git commit -m "feat: Add WINS logo with rising W shape design (v2.6.3)

Design Concept:
- W shape formed by 5 rising bars (data growth)
- Chinese '问视间' sounds like 'Wins' (success)
- Blue-to-green gradient (data to success transformation)
- Clear visual metaphor for 'data rising, winning insight'

Core Elements:
- 5 ascending bars forming W shape
- White data points marking key nodes
- Upward arrow emphasizing success
- Trend line showing growth curve
- Blue (#1890FF) to green (#52C41A) gradient

Files Added (8 SVG + 2 Docs):
- logo-full.svg (280×80, animated)
- logo-full-static.svg (280×80, static) ✨ NEW
- logo-icon-64.svg (64×64)
- logo-icon-128.svg (128×128)
- logo-simple-48.svg (48×48)
- logo-horizontal.svg (360×72)
- logo-favicon.svg (32×32)
- logo-square-256.svg (256×256)
- Complete documentation with usage guide

Use Cases:
- Website headers, sidebars, favicons
- Mobile apps, PWAs, print materials
- Social media, email signatures
- All sizes optimized for clarity

Total Size: ~41KB
Browser Support: All modern browsers
Format: SVG (scalable, Git-friendly)

BREAKING CHANGE: Complete logo redesign
Migration: Update all logo references to new files"

# 6. 创建标签（可选）
git tag -a v2.6.3-logo -m "WINS Logo Package v2.6.3"

# 7. 推送到远程
git push origin main

# 8. 推送标签（如果创建了）
git push origin v2.6.3-logo

# 9. 验证
git log -1
git ls-tree -r HEAD --name-only | grep logos/
```

---

## 🎉 完成确认

### 提交后验证

```bash
# 1. 查看提交历史
git log --oneline -5

# 2. 查看 Logo 文件
git ls-files public/logos/

# 3. 查看文件大小
du -sh public/logos/*

# 4. 验证远程仓库
git remote -v
git branch -vv
```

### 预期输出

```
public/logos/
├── logo-favicon.svg (1KB)
├── logo-full-static.svg (3KB)
├── logo-full.svg (4KB)
├── logo-horizontal.svg (3.5KB)
├── logo-icon-128.svg (2.5KB)
├── logo-icon-64.svg (2KB)
├── logo-simple-48.svg (1.5KB)
├── logo-square-256.svg (3.5KB)
└── README.md (12KB)

Total: ~33KB
```

---

## 📚 相关文档

- **Logo 使用文档**: [public/logos/README.md](public/logos/README.md)
- **Logo 设计文档**: [LOGO_DESIGN_DOCUMENTATION.md](LOGO_DESIGN_DOCUMENTATION.md)
- **项目主文档**: [README.md](README.md)
- **版本历史**: [VERSION.md](VERSION.md)

---

## 🆘 常见问题

### Q1: 应该使用动画版还是静态版？

**A**: 
- **常规页面**：使用静态版（logo-full-static.svg）
- **启动页面**：使用动画版（logo-full.svg）
- **性能敏感**：使用静态版

### Q2: 小尺寸下 W 形看不清怎么办？

**A**: 使用简化版（logo-simple-48.svg），它在小尺寸下清晰度最好

### Q3: 深色背景下效果如何？

**A**: Logo 渐变和白色元素在深色背景下表现很好，无需特殊处理

### Q4: 可以改变颜色吗？

**A**: 不建议，渐变色是品牌核心，改变会影响识别度

### Q5: PNG 格式在哪里？

**A**: 我们只提供 SVG，如需 PNG 请使用工具导出（见文档）

---

<div align="center">

# 🎊 准备完毕！可以上传了！

**问视间 (WINS) Logo 资源包 v2.6.3**

---

### ✨ 核心特色

**W 形上升** • **数据增长** • **持续成功**

---

### 📦 文件清单

8 个 SVG 文件 • 2 个文档 • 完整使用指南

---

### 🚀 一键提交

```bash
git add public/logos/ LOGO_ASSETS_GUIDE.md
git commit -m "feat: Add WINS logo (v2.6.3)"
git push origin main
```

---

**数据上升，智见成功**  
**Data Rising, Winning Insight**

© 2025 WINS Team. All rights reserved.

</div>
