# 问视间 (SuperInsight)

<div align="center">
  <img src="https://via.placeholder.com/128x128/1890FF/FFFFFF?text=Logo" alt="SuperInsight Logo" width="128" height="128" style="border-radius: 16px;" />
  
  <h1>企业级 AI 数据标注管理平台</h1>
  <p>Enterprise AI Data Annotation Management Platform</p>

  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![React](https://img.shields.io/badge/React-18+-61DAFB.svg?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4+-06B6D4.svg?logo=tailwind-css)](https://tailwindcss.com/)

  <p>
    <a href="#快速开始">快速开始</a> •
    <a href="#功能模块">功能模块</a> •
    <a href="#技术栈">技术栈</a> •
    <a href="QUICK_START.md">快速指南</a> •
    <a href="LOGO_DESIGN.md">Logo 设计</a> •
    <a href="OPTIMIZATION_SUMMARY.md">优化报告</a>
  </p>
</div>

---

## 📖 项目简介

**问视间 (SuperInsight)** 是一个现代化的企业级 AI 数据标注管理平台，致力于为企业提供高效、智能的数据标注解决方案。平台采用先进的 React + TypeScript + Tailwind CSS 技术栈，支持双主题（明亮模式和睿黑模式）、双语言（中文和英文），为用户提供优质的使用体验。

### ✨ 核心特性

- 🎨 **现代化设计**: 基于 Ant Design 规范的企业级 UI 设计
- 🌓 **双主题支持**: 明亮模式和睿黑模式，自动适配用户偏好
- 🌍 **国际化**: 完整的中英文双语支持
- 📱 **响应式设计**: 完美支持桌面、平板和移动设备
- 🤖 **AI 驱动**: 集成 AI 助手，智能化数据标注流程
- 🔒 **企业级安全**: 完善的安全管理和权限控制
- 📊 **数据可视化**: 丰富的图表和数据展示
- ⚡ **高性能**: 优化的代码结构和加载性能

---

## 🎯 功能模块

### 核心功能

- **📊 仪表盘 (Dashboard)**: 数据概览、任务统计、性能分析
- **🤖 AI 助手 (AI Assistant)**: 智能对话、任务建议、自动化标注
- **📝 任务管理 (Tasks)**: 创建、分配、跟踪标注任务
- **🗃️ 数据结构化 (Data Structuring)**: 数据导入、清洗、转换
- **🔄 数据同步 (Data Sync)**: 多平台数据同步和备份

### AI 能力

- **✨ AI 标注 (AI Annotation)**: 自动化智能标注
- **🎭 数据增强 (Augmentation)**: 数据扩充和变换

### 质量与安全

- **✅ 质量管理 (Quality Management)**: 质量检查、审核流程
- **🔐 安全中心 (Security Center)**: 安全审计、权限管理

### 系统管理

- **⚙️ 管理控制台 (Admin Console)**: 系统配置、用户管理
- **💳 计费管理 (Billing)**: 账单、套餐、支付管理
- **🔑 许可证管理 (License)**: 授权管理、功能控制

---

## 🎨 品牌设计

### Logo 设计

问视间的 Logo 融合了数据标注和智能分析的核心概念：

- **数据流动**: 波浪线代表数据的流动和处理
- **W 字形**: 象征 "Wins"（问视间），代表多维度分析
- **标注标识**: 绿色圆点表示标注完成和质量保证
- **结构化基线**: 代表数据的整理和结构化

详细的 Logo 设计说明请查看 [LOGO_DESIGN.md](LOGO_DESIGN.md)

### 配色方案

| 颜色 | 色值 | 用途 |
|------|------|------|
| 主蓝色 | `#1890FF` | 主要品牌色、按钮、链接 |
| 浅蓝色 | `#40A9FF` | 辅助色、hover 状态 |
| 主紫色 | `#722ED1` | AI 功能、渐变 |
| 标注绿 | `#52C41A` | 成功状态、标注完成 |
| 警告红 | `#FF4D4F` | 错误、警告状态 |

---

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm / npm / yarn

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 启动开发服务器

```bash
pnpm dev
# 或
npm run dev
# 或
yarn dev
```

访问 `http://localhost:5173` 查看应用。

### 构建生产版本

```bash
pnpm build
# 或
npm run build
# 或
yarn build
```

---

## 🏗️ 技术栈

### 核心技术

- **React 18+**: UI 框架
- **TypeScript 5+**: 类型安全
- **Vite**: 构建工具
- **React Router**: 路由管理

### UI 框架

- **Tailwind CSS 4**: 样式框架
- **shadcn/ui**: 组件库
- **Lucide React**: 图标库

### 数据可视化

- **Recharts**: 图表库

### 状态管理

- **React Context API**: 全局状态管理

---

## 📁 项目结构

```
/
├── src/
│   ├── app/
│   │   ├── components/          # 组件目录
│   │   │   ├── layout/         # 布局组件
│   │   │   │   └── AppLayout.tsx
│   │   │   └── ui/             # UI 组件
│   │   │       ├── logo.tsx    # Logo 组件
│   │   │       ├── button.tsx
│   │   │       └── ...
│   │   ├── context/            # Context 上下文
│   │   │   └── AppContext.tsx
│   │   ├── pages/              # 页面组件
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Login.tsx
│   │   │   └── ...
│   │   ├── App.tsx             # 应用入口
│   │   └── routes.tsx          # 路由配置
│   ├── styles/                 # 样式文件
│   │   ├── index.css
│   │   ├── theme.css
│   │   └── tailwind.css
├── LOGO_DESIGN.md              # Logo 设计说明
├── README.md                   # 项目文档
└── package.json
```

---

## 🎨 Logo 使用

### 在代码中使用

```tsx
import { Logo, LogoIconSimple } from '@/components/ui/logo';

// 完整 Logo（带文字）
<Logo variant="full" showSubtitle={true} />

// 仅图标
<Logo variant="icon" />

// 简化图标（用于收起的侧边栏）
<LogoIconSimple className="w-8 h-8" />
```

### Logo 展示页面

访问应用内的 Logo 展示页面查看所有变体和使用场景示例。

---

## 🌍 国际化

应用支持以下语言：

- 🇨🇳 简体中文 (Simplified Chinese)
- 🇺🇸 英语 (English)

语言切换位置：
- 顶部导航栏的语言切换按钮
- 用户下拉菜单中的语言选项

---

## 🎨 主题

应用支持以下主题：

- ☀️ **明亮模式 (Light Mode)**: 适合白天使用
- 🌙 **睿黑模式 (Dark Mode)**: 适合夜间使用

主题会自动保存用户偏好。

---

## 📱 响应式设计

应用完全响应式，支持以下设备：

- 💻 **桌面端**: 宽屏、标准屏幕
- 📱 **平板**: iPad、Android 平板
- 📱 **移动端**: 手机设备

移动端提供专门优化的导航和交互体验。

---

## 🔐 安全性

- 企业级安全审计
- 完善的权限控制系统
- 数据加密传输
- 会话管理和超时控制

---

## 🤝 贡献指南

欢迎贡献代码、报告问题或提出建议！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 开源协议

本项目采用 MIT 协议。详见 [LICENSE](LICENSE) 文件。

---

## 📞 联系我们

- **项目主页**: [问视间官网](https://superinsight.example.com)
- **文档中心**: [docs.superinsight.example.com](https://docs.superinsight.example.com)
- **问题反馈**: [GitHub Issues](https://github.com/superinsight/superinsight/issues)
- **邮件联系**: support@superinsight.example.com

---

## 🙏 致谢

- [shadcn/ui](https://ui.shadcn.com/) - UI 组件库
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Lucide](https://lucide.dev/) - 图标库
- [Recharts](https://recharts.org/) - 图表库
- [Unsplash](https://unsplash.com/) - 图片资源

---

<div align="center">
  <p>© 2025 问视间 (SuperInsight). 保留所有权利 / All rights reserved.</p>
  <p>Made with ❤️ for better data annotation</p>
</div>