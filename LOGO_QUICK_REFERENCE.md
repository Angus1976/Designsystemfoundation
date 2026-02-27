# 问视间 (WINS) Logo 快速参考卡

## 🎯 核心理念

```
     ↑
     █     第5柱：成功
    ███    第4柱：突破
   █████   第3柱：发展
  ███████  第2柱：增长  
 █████████ 第1柱：起步
───────────────
   W 形状

问视间 ≈ WINS ≈ 成功
数据上升 = 智见成功
```

---

## 📦 文件速查

| 场景 | 文件 | 尺寸 |
|------|------|------|
| 网站Header | `logo-full-static.svg` | 280×80 |
| 启动页面 | `logo-full.svg` | 280×80 |
| 侧边栏 | `logo-icon-64.svg` | 64×64 |
| 收起侧边栏 | `logo-simple-48.svg` | 48×48 |
| Favicon | `logo-favicon.svg` | 32×32 |
| 应用图标 | `logo-square-256.svg` | 256×256 |
| 横幅/登录 | `logo-horizontal.svg` | 360×72 |

---

## 🎨 色彩速查

| 颜色名 | 色值 | 用途 |
|--------|------|------|
| 品牌蓝 | `#1890FF` | 柱子底部、英文名 |
| 成功绿 | `#52C41A` | 柱子顶部、箭头 |
| 纯白 | `#FFFFFF` | 数据点、趋势线 |

**渐变**：`linear-gradient(to top, #1890FF, #52C41A)`

---

## 💻 代码速查

### HTML
```html
<!-- 静态版 -->
<img src="/logos/logo-full-static.svg" alt="问视间" height="60">

<!-- 动画版 -->
<img src="/logos/logo-full.svg" alt="问视间" height="60">

<!-- Favicon -->
<link rel="icon" href="/logos/logo-favicon.svg">
```

### React
```tsx
// 静态版（推荐）
<img src="/logos/logo-full-static.svg" alt="WINS" />

// 动画版
<img src="/logos/logo-full.svg" alt="WINS" />

// 图标
<img src="/logos/logo-icon-64.svg" width="48" />
```

### CSS
```css
.logo {
  background-image: url('/logos/logo-horizontal.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
```

---

## 📏 尺寸速查

| 版本 | 最小尺寸 | 推荐尺寸 |
|------|----------|----------|
| 完整版 | 180px 宽 | 280px 宽 |
| 图标版 | 32px | 64px |
| 简化版 | 24px | 48px |
| Favicon | 16px | 32px |

---

## ✅ 使用规则

### 允许 ✅
- 等比例缩放
- 白色/浅色背景
- 深色背景
- 渐变背景

### 禁止 ❌
- 改变颜色
- 拉伸变形
- 旋转倾斜
- 添加效果

---

## 🚀 Git 命令

```bash
# 一键提交
git add public/logos/
git commit -m "feat: Add WINS logo (v2.6.3)"
git push

# 查看文件
git ls-files public/logos/

# 创建标签
git tag v2.6.3-logo
git push --tags
```

---

## 🔗 完整文档

- **使用指南**: [public/logos/README.md](public/logos/README.md)
- **Git 指南**: [LOGO_ASSETS_GUIDE.md](LOGO_ASSETS_GUIDE.md)
- **设计说明**: [LOGO_REDESIGN_v2.6.3.md](LOGO_REDESIGN_v2.6.3.md)

---

## 💡 关键提示

1. **常规使用** → `logo-full-static.svg`（无动画）
2. **特殊页面** → `logo-full.svg`（有动画）
3. **小尺寸** → `logo-simple-48.svg`（简化版）
4. **深色背景** → 任何版本都适用

---

<div align="center">

### 问视间 (WINS) v2.6.3

**数据上升 • 智见成功**

5柱W形 • 蓝绿渐变 • 极简有力

</div>
