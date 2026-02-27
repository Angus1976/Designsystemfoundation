# 问视间 Logo 资源使用指南

## 📦 已保存的 Logo 文件

所有 Logo 文件已保存到 `/public/logos/` 目录，共 **7 个 SVG 文件**。

---

## 📁 文件清单

| 文件名 | 尺寸 | 用途 | 文件大小 |
|--------|------|------|----------|
| `logo-full.svg` | 240×80px | 完整版（图标+文字+标语） | ~3KB |
| `logo-icon-64.svg` | 64×64px | 小尺寸图标 | ~2KB |
| `logo-icon-128.svg` | 128×128px | 中等尺寸图标 | ~2.5KB |
| `logo-simple-48.svg` | 48×48px | 简化版（圆角矩形） | ~1KB |
| `logo-horizontal.svg` | 320×64px | 横向版（图标+文字） | ~3.5KB |
| `logo-favicon.svg` | 32×32px | 浏览器图标 | ~0.8KB |
| `logo-square-256.svg` | 256×256px | 高清方形版 | ~3KB |
| `README.md` | - | 使用说明文档 | ~8KB |

**总计**: 8 个文件，约 23KB

---

## 🎯 快速使用指南

### 1. 在 HTML 中使用

```html
<!-- 网站 Logo -->
<img src="/logos/logo-full.svg" alt="问视间 SuperInsight" height="80">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/logos/logo-favicon.svg">
<link rel="apple-touch-icon" href="/logos/logo-square-256.svg">

<!-- 预加载（可选） -->
<link rel="preload" as="image" href="/logos/logo-full.svg">
```

### 2. 在 React 中使用

```tsx
// 方式 1: 直接引用
<img src="/logos/logo-full.svg" alt="问视间" />

// 方式 2: Import（需要配置）
import LogoFull from '/logos/logo-full.svg';
<img src={LogoFull} alt="问视间" />

// 方式 3: 在 Logo 组件中使用
import { Logo } from './components/ui/logo';
<Logo variant="full" />
```

### 3. 在 CSS 中使用

```css
/* 背景图 */
.header-logo {
  background-image: url('/logos/logo-horizontal.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 320px;
  height: 64px;
}

/* Mask 效果 */
.logo-mask {
  mask-image: url('/logos/logo-icon-64.svg');
  mask-size: contain;
  mask-repeat: no-repeat;
}
```

---

## 📐 使用场景对照表

| 场景 | 推荐文件 | 尺寸 | 说明 |
|------|---------|------|------|
| **网站 Header** | logo-full.svg | 240×80 | 完整品牌展示 |
| **侧边栏展开** | logo-icon-64.svg | 64×64 | 带完整元素 |
| **侧边栏收起** | logo-simple-48.svg | 48×48 | 简化版，圆角矩形 |
| **浏览器标签** | logo-favicon.svg | 32×32 | 极简版 |
| **应用图标** | logo-square-256.svg | 256×256 | 高清方形 |
| **登录页面** | logo-horizontal.svg | 320×64 | 横向布局 |
| **移动端顶部** | logo-simple-48.svg | 48×48 | 紧凑型 |
| **打印材料** | logo-full.svg | 240×80 | 矢量无损 |
| **社交媒体** | logo-icon-128.svg | 128×128 | 头像尺寸 |
| **邮件签名** | logo-horizontal.svg | 320×64 | 横向布局 |

---

## 🎨 设计元素说明

### 每个 Logo 都包含的核心元素：

1. **"W" 形状** - 品牌标识，代表"问视间 (Wins)"
2. **数据点** - 3个白色圆点，象征标注数据
3. **数据网格** - 交叉线，代表结构化数据
4. **渐变背景** - #1890FF 到 #096DD9 的蓝色渐变
5. **标注标签** - 绿色渐变图标，核心业务
6. **数据流曲线** - 波浪线，表示数据处理
7. **AI 指示点** - 紫色同心圆，代表 AI 能力

### 简化程度：

```
logo-full.svg (完整版)
  ├─ 所有 7 个元素
  └─ 中英文文字 + 标语

logo-icon-64/128.svg (图标版)
  ├─ 所有 7 个元素
  └─ 无文字

logo-simple-48.svg (简化版)
  ├─ W 形状
  ├─ 数据点
  └─ 圆角矩形背景

logo-favicon.svg (极简版)
  ├─ W 形状
  ├─ 数据点
  └─ AI 点
```

---

## 🚀 Git 提交建议

### 1. 提交到 Git 仓库

```bash
# 添加 Logo 文件
git add public/logos/*.svg
git add public/logos/README.md
git add LOGO_ASSETS_GUIDE.md

# 提交
git commit -m "feat: Add complete logo assets package (7 SVG variants)

- Add logo-full.svg (240×80) - Full version with text
- Add logo-icon-64.svg (64×64) - Small icon
- Add logo-icon-128.svg (128×128) - Medium icon
- Add logo-simple-48.svg (48×48) - Simplified version
- Add logo-horizontal.svg (320×64) - Horizontal layout
- Add logo-favicon.svg (32×32) - Favicon
- Add logo-square-256.svg (256×256) - High-res square
- Add comprehensive documentation"

# 推送
git push origin main
```

### 2. 创建 Git Tag（可选）

```bash
# 创建版本标签
git tag -a v2.6.2-logo-assets -m "Logo assets package v2.6.2"

# 推送标签
git push origin v2.6.2-logo-assets
```

---

## 📦 目录结构

```
project-root/
├── public/
│   └── logos/
│       ├── logo-full.svg           # 完整版 Logo
│       ├── logo-icon-64.svg        # 图标版 64px
│       ├── logo-icon-128.svg       # 图标版 128px
│       ├── logo-simple-48.svg      # 简化版 48px
│       ├── logo-horizontal.svg     # 横向版
│       ├── logo-favicon.svg        # Favicon
│       ├── logo-square-256.svg     # 方形版 256px
│       └── README.md               # Logo 使用说明
├── src/
│   └── app/
│       └── components/
│           └── ui/
│               ├── logo.tsx         # Logo React 组件
│               └── logo-animated.tsx # 动画 Logo 组件
└── LOGO_ASSETS_GUIDE.md            # 本文档
```

---

## 🔄 更新现有代码

如果您的项目中已经有 Logo 组件，可以更新引用：

### 更新 Logo 组件 (`src/app/components/ui/logo.tsx`)

```tsx
// 现有的 Logo 组件已经使用 SVG 代码
// 如需引用文件，可以这样更新：

export function Logo({ variant = 'full' }: LogoProps) {
  if (variant === 'full') {
    return <img src="/logos/logo-full.svg" alt="问视间 SuperInsight" />;
  }
  if (variant === 'icon') {
    return <img src="/logos/logo-icon-64.svg" alt="SuperInsight" />;
  }
  // ... 其他变体
}
```

### 更新 HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/logos/logo-favicon.svg">
  <link rel="apple-touch-icon" sizes="256x256" href="/logos/logo-square-256.svg">
  
  <!-- PWA Manifest -->
  <link rel="manifest" href="/manifest.json">
  
  <title>问视间 (SuperInsight) - 数据标注，智见未来</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

### 创建 PWA Manifest (`public/manifest.json`)

```json
{
  "name": "问视间 (SuperInsight)",
  "short_name": "SuperInsight",
  "description": "企业级 AI 数据标注管理平台",
  "icons": [
    {
      "src": "/logos/logo-favicon.svg",
      "sizes": "32x32",
      "type": "image/svg+xml"
    },
    {
      "src": "/logos/logo-icon-64.svg",
      "sizes": "64x64",
      "type": "image/svg+xml"
    },
    {
      "src": "/logos/logo-icon-128.svg",
      "sizes": "128x128",
      "type": "image/svg+xml"
    },
    {
      "src": "/logos/logo-square-256.svg",
      "sizes": "256x256",
      "type": "image/svg+xml"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#1890FF",
  "background_color": "#ffffff"
}
```

---

## 📊 文件对比

### SVG vs PNG

| 特性 | SVG | PNG |
|------|-----|-----|
| 文件大小 | 小（1-3KB） | 大（10-100KB） |
| 缩放质量 | 无损 | 有损 |
| 支持动画 | ✅ | ❌ |
| 支持交互 | ✅ | ❌ |
| Git 友好 | ✅ 文本格式 | ❌ 二进制 |
| 浏览器支持 | 现代浏览器 | 所有浏览器 |
| 编辑难度 | 需要工具 | 简单 |

**推荐**: 优先使用 SVG，仅在必要时导出 PNG

---

## 🎯 导出 PNG 指南

如需导出 PNG 格式（用于特殊场景）：

### 使用在线工具
1. 访问 https://svgtopng.com/
2. 上传 SVG ���件
3. 选择尺寸（推荐 2x 或 3x）
4. 下载 PNG

### 使用命令行（需要安装 Inkscape）
```bash
# 导出 PNG (2x)
inkscape logo-full.svg --export-png=logo-full@2x.png --export-width=480

# 批量导出
for file in *.svg; do
  inkscape "$file" --export-png="${file%.svg}@2x.png" --export-width=480
done
```

### 推荐尺寸
- **1x**: 原始尺寸（用于 Web）
- **2x**: 原始尺寸 × 2（用于 Retina 显示器）
- **3x**: 原始尺寸 × 3（用于移动端）

---

## ✅ 质量检查清单

上传到 Git 前，请确认：

- [ ] 所有 7 个 SVG 文件都已创建
- [ ] 文件大小合理（< 5KB）
- [ ] SVG 在浏览器中正确显示
- [ ] 颜色与设计稿一致
- [ ] 文档 README.md 已创建
- [ ] Git commit 信息清晰
- [ ] 文件路径正确 (`/public/logos/`)
- [ ] 无敏感信息或临时文件

---

## 🔒 版本控制建议

### .gitignore 配置

```gitignore
# 不需要提交的文件
public/logos/*.png        # PNG 导出文件（如果有）
public/logos/*.jpg        # JPG 导出文件（如果有）
public/logos/.DS_Store    # macOS 系统文件
public/logos/Thumbs.db    # Windows 缩略图
```

### 仅提交 SVG

```bash
# 只添加 SVG 和文档
git add public/logos/*.svg
git add public/logos/README.md
git add LOGO_ASSETS_GUIDE.md
```

---

## 📞 技术支持

如有问题，请参考：

1. **Logo 组件文档**: [LOGO_DESIGN_DOCUMENTATION.md](LOGO_DESIGN_DOCUMENTATION.md)
2. **设计规范**: [README.md](public/logos/README.md)
3. **项目文档**: [README.md](README.md)

---

## 🎉 完成确认

所有 Logo 资源已准备就绪，可以上传到 Git！

### 文件清单确认

✅ `public/logos/logo-full.svg` - 完整版 Logo  
✅ `public/logos/logo-icon-64.svg` - 图标版 64px  
✅ `public/logos/logo-icon-128.svg` - 图标版 128px  
✅ `public/logos/logo-simple-48.svg` - 简化版  
✅ `public/logos/logo-horizontal.svg` - 横向版  
✅ `public/logos/logo-favicon.svg` - Favicon  
✅ `public/logos/logo-square-256.svg` - 方形版 256px  
✅ `public/logos/README.md` - 使用说明  
✅ `LOGO_ASSETS_GUIDE.md` - 本指南  

### Git 提交命令

```bash
# 一键提交所有 Logo 资源
git add public/logos/
git add LOGO_ASSETS_GUIDE.md
git commit -m "feat: Add complete logo assets package (v2.6.2)"
git push
```

---

<div align="center">
  <h2>🎊 Logo 资源包已准备完毕！</h2>
  <p><strong>问视间 (SuperInsight) v2.6.2</strong></p>
  <p>7 个 SVG 文件 • 完整文档 • Git 就绪</p>
  <br>
  <p>© 2025 SuperInsight Team. All rights reserved.</p>
</div>
