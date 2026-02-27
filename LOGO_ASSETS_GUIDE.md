# 问视间 (WINS) Logo 资源 - Git 上传指南

## 🎯 全新设计理念

**4柱 W 形 = 标注流程 = 智胜未来**

- **4个柱子**：形成标准 "W" 形状（高-低-高-最高）
- **W 谷底**：第2柱最低，象征数据清洗的关键环节
- **最后上升**：第4柱最高，强烈的成功趋势
- **WINS (问视间)**：中文与英文谐音，寓意成功
- **业务映射**：4阶段对应数据标注业务流程
- **渐变色彩**：从蓝色（数据）到绿色（AI智能）

---

## 📦 完整文件清单

### Logo SVG 文件（8个）

| # | 文件名 | 尺寸 | 动画 | 用途 | 大小 |
|---|--------|------|------|------|------|
| 1 | `logo-full.svg` | 280×80px | ✅ 有 | 完整版（动画） | ~4KB |
| 2 | `logo-full-static.svg` | 280×80px | ❌ 无 | 完整版（静态）⭐ | ~3KB |
| 3 | `logo-icon-64.svg` | 64×64px | ❌ 无 | 小图标 | ~2KB |
| 4 | `logo-icon-128.svg` | 128×128px | ❌ 无 | 中等图标 | ~2.5KB |
| 5 | `logo-simple-48.svg` | 48×48px | ❌ 无 | 简化版 | ~1.5KB |
| 6 | `logo-horizontal.svg` | 360×72px | ❌ 无 | 横向版 | ~3.5KB |
| 7 | `logo-favicon.svg` | 32×32px | ❌ 无 | 浏览器图标 | ~1KB |
| 8 | `logo-square-256.svg` | 256×256px | ❌ 无 | 高清方形 | ~3.5KB |

**总计**: 8 个 SVG 文件，约 21KB

---

## 🎨 设计核心

### 4柱 W 形的构成

```
视觉示意：

       ↑ 智胜
       █      100%  ← 第4柱（价值输出）
      ███     80%   ← 第3柱（AI训练）
     █████    50%   ← 第2柱（数据清洗）W谷底
    ███████   70%   ← 第1柱（数据采集）
   ──────────────
      W 形状
```

### 4柱业务映射

| 柱子 | 高度 | 业务阶段 | 象征意义 |
|------|------|----------|----------|
| 第1柱（左） | 70% | 数据采集 | 起点 - 建立基础 |
| 第2柱（中左）| 50% | 数据清洗 | 关键 - 质量把控 ⭐ |
| 第3柱（中右）| 80% | AI 训练 | 提升 - 模型优化 |
| 第4柱（右） | 100% | 价值输出 | 成功 - 智能洞察 |

### 核心视觉元素

1. **4个渐变柱** - #1890FF → #52C41A（蓝到绿）
2. **4个标注标签** - 绿色小矩形（业务特色）
3. **4个白色数据点** - 关键节点标记
4. **上升趋势线** - W 形连线，展示流程
5. **成功箭头** - 右上角↑，最后突破
6. **背景光晕** - 淡蓝绿渐变圆形

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
git commit -m "feat: Add WINS logo with 4-bar W shape design (v2.6.4)

Core Concept:
- 4 bars forming standard W shape (high-low-high-highest)
- Bar 2 (lowest) represents data cleaning - the critical stage
- Bar 4 (highest) shows final rising trend
- Maps to annotation business workflow
- Chinese '问视间' sounds like 'Wins' (success)

Business Mapping:
- Bar 1 (70%): Data Collection
- Bar 2 (50%): Data Cleaning (W valley - key stage)
- Bar 3 (80%): AI Training  
- Bar 4 (100%): Value Output (success!)

Visual Elements:
- 4 gradient bars (blue to green)
- 4 annotation tags (green labels)
- 4 white data points
- W-shaped trend line
- Success arrow (↑)

Files Added:
- 8 SVG variants (32px to 360px)
- Animated and static versions
- Complete documentation

Total Size: ~21KB
Tagline: 标注赋能，智胜未来 (Annotation Empowers, Intelligence Wins)"

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
git commit -m "feat: Add WINS logo 4-bar W design (v2.6.4)"

# 5. 推送
git push
```

### 方法三：创建 Git Tag

```bash
# 提交后创建版本标签
git tag -a v2.6.4-logo -m "WINS Logo v2.6.4
- 4-bar W shape design
- Business workflow mapping
- Annotation-focused elements
- 8 SVG variants"

# 推送标签
git push origin v2.6.4-logo

# 查看所有标签
git tag -l
```

---

## 📋 提交前检查清单

### 文件完整性 ✅

- [x] `logo-full.svg` - 完整版（动画）
- [x] `logo-full-static.svg` - 完整版（静态）⭐
- [x] `logo-icon-64.svg` - 小图标
- [x] `logo-icon-128.svg` - 中等图标
- [x] `logo-simple-48.svg` - 简化版
- [x] `logo-horizontal.svg` - 横向版
- [x] `logo-favicon.svg` - Favicon
- [x] `logo-square-256.svg` - 方形版
- [x] `public/logos/README.md` - 使用文档
- [x] `LOGO_ASSETS_GUIDE.md` - 本指南

### 质量检查 ✅

- [x] 所有文件都是 SVG 格式
- [x] 文件大小合理（< 5KB）
- [x] 在浏览器中测试显示正常
- [x] 动画效果流畅（logo-full.svg）
- [x] W 形状清晰可辨（4柱）
- [x] 颜色渐变正确
- [x] 标注标签清晰可见
- [x] 文档内容完整
- [x] 无临时文件

---

## 💡 使用示例

### HTML

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
    />
  );
}

// 使用
<Logo variant="full-static" size={60} /> {/* 推荐 */}
<Logo variant="icon" size={48} />
<Logo animated={true} /> {/* 启动页 */}
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

---

## 🎨 设计哲学

### 为什么选择4柱 W 形？

1. **标准 W 形状**
   - 4个柱子：高-低-高-最高
   - 清晰的 W 字母形状
   - 一眼识别，过目不忘

2. **业务流程映射**
   - 第1柱：数据采集（起点）
   - 第2柱：数据清洗（关键，W谷底）
   - 第3柱：AI训练（提升）
   - 第4柱：价值输出（成功）

3. **最后上升趋势**
   - 第4柱最高
   - 强烈的上升感
   - 积极正向的寓意

4. **业务特色体现**
   - 绿色标注标签
   - 数据处理流程
   - 智能洞察成果

---

## 📐 尺寸规范

### 推荐尺寸

```
场景              完整版    图标版   简化版
────────────────────────────────────
桌面Header        60-80px   -        -
平板Header        48-60px   -        -
移动Header        -         -        36-40px
侧边栏展开        -         48-56px  -
侧边栏收起        -         -        36-40px
Favicon           -         -        32px
应用图标          -         120-256px -
```

---

## 🔄 更新现有代码

### 1. 更新 index.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/logos/logo-favicon.svg">
  
  <!-- Apple Touch Icon -->
  <link rel="apple-touch-icon" href="/logos/logo-square-256.svg">
  
  <title>问视间 (WINS) - 标注赋能，智胜未来</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

### 2. 更新 manifest.json

```json
{
  "name": "问视间 (WINS)",
  "short_name": "WINS",
  "description": "标注赋能，智胜未来 - 企业级数据标注平台",
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

---

## ✅ Git 提交完整命令

```bash
# 1. 查看当前状态
git status

# 2. 添加 Logo 文件
git add public/logos/

# 3. 添加文档
git add LOGO_ASSETS_GUIDE.md

# 4. 提交
git commit -m "feat: Add WINS logo with 4-bar W shape (v2.6.4)

- Standard W shape: high-low-high-highest
- Maps to annotation workflow (4 stages)
- Bar 2 valley represents critical data cleaning
- Bar 4 highest shows final success
- Green annotation tags highlight business focus
- Total: 8 SVG files (~21KB)"

# 5. 推送
git push origin main

# 6. 验证
git log -1
```

---

## 📊 与旧版对比

### v2.6.3（5柱） vs v2.6.4（4柱）

| 特性 | v2.6.3 (5柱) | v2.6.4 (4柱) |
|------|-------------|-------------|
| 柱子数量 | 5个 | 4个 ✅ |
| W 形状 | 不太标准 | 标准 W ✅ |
| 识别度 | 中等 | 极高 ✅ |
| 业务关联 | 一般 | 强（4阶段）✅ |
| 简洁度 | 较复杂 | 更简洁 ✅ |
| 上升感 | 明显 | 更强烈 ✅ |
| 标注元素 | 无 | 有（绿标签）✅ |

---

## 🎉 完成确认

### 文件清单确认

✅ `public/logos/logo-full.svg` - 动画版  
✅ `public/logos/logo-full-static.svg` - 静态版 ⭐  
✅ `public/logos/logo-icon-64.svg` - 图标 64px  
✅ `public/logos/logo-icon-128.svg` - 图标 128px  
✅ `public/logos/logo-simple-48.svg` - 简化版  
✅ `public/logos/logo-horizontal.svg` - 横向版  
✅ `public/logos/logo-favicon.svg` - Favicon  
✅ `public/logos/logo-square-256.svg` - 方形 256px  
✅ `public/logos/README.md` - 使用文档  
✅ `LOGO_ASSETS_GUIDE.md` - 本指南  

---

<div align="center">

# 🎊 准备完毕！可以上传了！

**问视间 (WINS) Logo v2.6.4**

---

### ✨ 核心特色

**4柱 W 形** • **标注赋能** • **智胜未来**

---

### 📦 文件清单

8 个 SVG 文件 • 完整使用指南 • Git 就绪

---

### 🚀 一键提交

```bash
git add public/logos/ LOGO_ASSETS_GUIDE.md
git commit -m "feat: Add WINS logo 4-bar W (v2.6.4)"
git push origin main
```

---

**标注赋能，智胜未来**  
**Annotation Empowers, Intelligence Wins**

© 2025 WINS Team. All rights reserved.

</div>
