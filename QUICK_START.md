# 问视间 (SuperInsight) - 快速开始指南

## 🚀 快速启动

### 1. 安装依赖
```bash
pnpm install
# 或
npm install
```

### 2. 启动开发服务器
```bash
pnpm dev
# 或
npm run dev
```

### 3. 访问应用
打开浏览器访问：`http://localhost:5173`

---

## 📱 核心页面导航

| 页面 | 路径 | 说明 |
|------|------|------|
| 登录页面 | `/login` | 用户登录入口 |
| 欢迎页面 | `/welcome` | 新用户引导和快速上手 |
| 仪表盘 | `/` | 数据概览和统计 |
| Logo 展示 | `/logo-showcase` | 品牌 Logo 展示和说明 |
| 任务管理 | `/tasks` | 创建和管理标注任务 |
| AI 助手 | `/ai-assistant` | 智能对话和自动化 |
| 数据结构化 | `/data-structuring` | 数据导入和清洗 |
| 数据同步 | `/data-sync` | 多平台数据同步 |
| 质量管理 | `/quality` | 质量检查和审核 |
| 安全中心 | `/security` | 安全审计和权限 |
| 管理控制台 | `/admin` | 系统配置和用户管理 |
| 计费管理 | `/billing` | 账单和支付 |
| 许可证管理 | `/license` | 授权和功能控制 |

---

## 🎨 使用新 Logo

### 在组件中引入
```tsx
import { Logo, LogoIconSimple } from '@/components/ui/logo';
```

### 完整 Logo
```tsx
<Logo variant="full" showSubtitle={true} />
```

### 仅图标
```tsx
<Logo variant="icon" />
```

### 简化图标
```tsx
<LogoIconSimple className="w-8 h-8" />
```

### 带动画的 Logo
```tsx
import { LogoAnimated, LogoPulse } from '@/components/ui/logo-animated';

<LogoAnimated size={64} />
<LogoPulse size={48} />
```

---

## ✨ 使用动画效果

### 淡入动画
```tsx
<div className="animate-fade-in">内容</div>
<div className="animate-fade-in-down">从上淡入</div>
<div className="animate-fade-in-up">从下淡入</div>
```

### 带延迟的动画
```tsx
<div className="animate-fade-in animation-delay-200">延迟 0.2s</div>
<div className="animate-fade-in animation-delay-400">延迟 0.4s</div>
```

### 特效动画
```tsx
<div className="animate-blob">背景流动</div>
<div className="animate-pulse-slow">慢速脉冲</div>
```

---

## 🎯 加载组件

### 全屏加载
```tsx
import { Loading } from '@/components/ui/loading';

<Loading fullScreen message="加载中..." variant="animated" />
```

### 内联加载
```tsx
<Loading size="md" variant="pulse" />
```

### 行内加载动画
```tsx
import { LoadingSpinner } from '@/components/ui/loading';

<LoadingSpinner size={24} />
```

---

## 🌍 国际化使用

### 获取当前语言
```tsx
import { useApp } from '@/context/AppContext';

const { language, toggleLanguage, t } = useApp();
```

### 使用翻译
```tsx
<h1>{t('nav.dashboard')}</h1>
<p>{language === 'zh' ? '中文内容' : 'English content'}</p>
```

### 切换语言
```tsx
<button onClick={toggleLanguage}>
  {language === 'zh' ? 'English' : '中文'}
</button>
```

---

## 🌓 主题切换

### 获取和切换主题
```tsx
import { useApp } from '@/context/AppContext';

const { theme, toggleTheme } = useApp();

<button onClick={toggleTheme}>
  {theme === 'light' ? '🌙' : '☀️'}
</button>
```

---

## 🎨 设计系统颜色

### CSS 变量使用
```css
.custom-element {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  border: 1px solid var(--border);
}
```

### Tailwind 类使用
```tsx
<div className="bg-[#1890FF] text-white border border-border">
  主题色背景
</div>
```

### 主要颜色
| 颜色名称 | 色值 | 用途 |
|---------|------|------|
| 主蓝色 | `#1890FF` | 主要品牌色 |
| 浅蓝色 | `#40A9FF` | 辅助色 |
| 主紫色 | `#722ED1` | AI 功能 |
| 成功绿 | `#52C41A` | 成功状态 |
| 警告黄 | `#FAAD14` | 警告提示 |
| 错误红 | `#FF4D4F` | 错误状态 |

---

## 📦 主要依赖

### UI 框架
- React 18+
- TypeScript 5+
- Tailwind CSS 4

### UI 组件
- shadcn/ui
- Radix UI
- Lucide Icons

### 图表
- Recharts

### 路由
- React Router 7

### 状态管理
- React Context API

---

## 🔧 开发建议

### 1. 组件开发
- 使用 TypeScript 进行类型检查
- 遵循 React Hooks 最佳实践
- 组件复用优先

### 2. 样式开发
- 优先使用 Tailwind CSS 类
- 自定义样式使用 CSS 变量
- 保持响应式设计

### 3. 动画使用
- 优先使用 CSS 动画
- 避免过度动画
- 注意性能影响

### 4. 性能优化
- 使用 React.memo 避免不必要渲染
- 合理使用 useMemo 和 useCallback
- 图片懒加载
- 代码分割

---

## 📝 常见任务

### 添加新页面
1. 在 `/src/app/pages/` 创建新组件
2. 在 `/src/app/routes.tsx` 添加路由
3. 在侧边栏导航中添加链接（如需要）

### 添加新组件
1. 在 `/src/app/components/` 创建组件
2. 使用 TypeScript 定义 Props 接口
3. 导出组件供其他文件使用

### 修改主题颜色
1. 编辑 `/src/styles/theme.css`
2. 修改 `:root` 和 `.dark` 中的颜色变量
3. 保持明亮和睿黑模式的一致性

### 添加新动画
1. 在 `/src/styles/theme.css` 的 `@layer utilities` 中定义
2. 使用 `@keyframes` 创建动画
3. 创建对应的 `.animate-*` 类

---

## 🐛 调试技巧

### React DevTools
安装 React Developer Tools 浏览器扩展进行组件调试

### 查看主题变量
在浏览器控制台运行：
```javascript
getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
```

### 性能分析
使用 Chrome DevTools 的 Performance 面板分析性能

---

## 📚 文档索引

- [README.md](/README.md) - 项目完整文档
- [LOGO_DESIGN.md](/LOGO_DESIGN.md) - Logo 设计说明
- [LOGO_IMPLEMENTATION.md](/LOGO_IMPLEMENTATION.md) - Logo 实施报告
- [OPTIMIZATION_SUMMARY.md](/OPTIMIZATION_SUMMARY.md) - 优化总结报告

---

## 💡 提示和技巧

### 1. 快速导航
- 桌面端：使用侧边栏快速切换页面
- 移动端：点击菜单图标打开导航

### 2. 主题切换
- 点击顶部的 ☀️/🌙 图标切换主题
- 主题偏好会自动保存

### 3. 语言切换
- 点击顶部的 中/EN 按钮切换语言
- 支持中文和英文完整翻译

### 4. 搜索功能
- 使用顶部搜索框（⌘K 快捷键）
- 快速查找任务和内容

---

## 🆘 获取帮助

遇到问题？

1. 查看文档目录中的相关文档
2. 检查浏览器控制台错误信息
3. 查看 React DevTools 组件状态
4. 联系技术支持团队

---

<div align="center">
  <p><strong>问视间 (SuperInsight)</strong></p>
  <p>让数据标注更智能、更高效</p>
  <p>Happy Coding! 🚀</p>
</div>
