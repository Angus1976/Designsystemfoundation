import React from 'react';
import { Logo, LogoIconSimple } from './logo';
import { Card, CardContent, CardHeader, CardTitle } from './card';

/**
 * Logo Showcase Component
 * 用于展示问视间 (SuperInsight) 品牌 Logo 的不同变体和使用场景
 */
export function LogoShowcase() {
  return (
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">问视间 Logo 展示</h1>
        <p className="text-muted-foreground">
          SuperInsight Data Annotation Platform Brand Identity
        </p>
      </div>

      {/* Full Logo Variants */}
      <Card>
        <CardHeader>
          <CardTitle>完整版本 (Full Logo)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-8 p-6 bg-background-secondary rounded-lg">
            <Logo variant="full" showSubtitle={true} />
            <div className="flex-1">
              <h3 className="font-semibold mb-1">标准版本</h3>
              <p className="text-sm text-muted-foreground">
                用于侧边栏、导航栏等主要展示区域
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 p-6 bg-background-secondary rounded-lg">
            <Logo variant="full" showSubtitle={false} />
            <div className="flex-1">
              <h3 className="font-semibold mb-1">无副标题版本</h3>
              <p className="text-sm text-muted-foreground">
                用于空间受限的场景
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Icon Variants */}
      <Card>
        <CardHeader>
          <CardTitle>图标版本 (Icon Variants)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-8 p-6 bg-background-secondary rounded-lg">
            <Logo variant="icon" />
            <div className="flex-1">
              <h3 className="font-semibold mb-1">圆形图标</h3>
              <p className="text-sm text-muted-foreground">
                用于登录页面、应用图标等场景
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 p-6 bg-background-secondary rounded-lg">
            <LogoIconSimple />
            <div className="flex-1">
              <h3 className="font-semibold mb-1">简化图标（圆角矩形）</h3>
              <p className="text-sm text-muted-foreground">
                用于收起的侧边栏、小尺寸显示
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Size Variations */}
      <Card>
        <CardHeader>
          <CardTitle>尺寸变化 (Size Variations)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-6 p-6 bg-background-secondary rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <div className="scale-50">
                <LogoIconSimple />
              </div>
              <span className="text-xs text-muted-foreground">16px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="scale-75">
                <LogoIconSimple />
              </div>
              <span className="text-xs text-muted-foreground">24px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <LogoIconSimple />
              <span className="text-xs text-muted-foreground">32px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="scale-150">
                <LogoIconSimple />
              </div>
              <span className="text-xs text-muted-foreground">48px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="scale-200">
                <LogoIconSimple />
              </div>
              <span className="text-xs text-muted-foreground">64px</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Theme Variations */}
      <Card>
        <CardHeader>
          <CardTitle>主题适配 (Theme Variations)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-6 bg-white rounded-lg border">
            <div className="flex items-center gap-4">
              <Logo variant="full" />
              <span className="text-sm text-gray-600">明亮模式</span>
            </div>
          </div>
          <div className="p-6 bg-[#141414] rounded-lg border border-gray-800">
            <div className="flex items-center gap-4">
              <Logo variant="full" />
              <span className="text-sm text-gray-400">睿黑模式</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Design Elements */}
      <Card>
        <CardHeader>
          <CardTitle>设计元素说明 (Design Elements)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-background-secondary rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1890FF] mt-1.5"></div>
                <div>
                  <h4 className="font-semibold mb-1">数据流动线</h4>
                  <p className="text-sm text-muted-foreground">
                    顶部的波浪线代表数据的流动和处理过程
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-background-secondary rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#722ED1] mt-1.5"></div>
                <div>
                  <h4 className="font-semibold mb-1">W 字形核心</h4>
                  <p className="text-sm text-muted-foreground">
                    中央的"W"造型象征"Wins"（问视间）
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-background-secondary rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#52C41A] mt-1.5"></div>
                <div>
                  <h4 className="font-semibold mb-1">标注指示点</h4>
                  <p className="text-sm text-muted-foreground">
                    绿色圆点象征数据标注的完成和质量保证
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-background-secondary rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-white mt-1.5"></div>
                <div>
                  <h4 className="font-semibold mb-1">结构化基线</h4>
                  <p className="text-sm text-muted-foreground">
                    底部线条代表数据的整理和结构化
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Color Palette */}
      <Card>
        <CardHeader>
          <CardTitle>配色方案 (Color Palette)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-16 rounded-lg bg-[#1890FF]"></div>
              <div className="text-center">
                <p className="text-sm font-medium">#1890FF</p>
                <p className="text-xs text-muted-foreground">主蓝色</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="h-16 rounded-lg bg-[#40A9FF]"></div>
              <div className="text-center">
                <p className="text-sm font-medium">#40A9FF</p>
                <p className="text-xs text-muted-foreground">浅蓝色</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="h-16 rounded-lg bg-[#722ED1]"></div>
              <div className="text-center">
                <p className="text-sm font-medium">#722ED1</p>
                <p className="text-xs text-muted-foreground">主紫色</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="h-16 rounded-lg bg-[#52C41A]"></div>
              <div className="text-center">
                <p className="text-sm font-medium">#52C41A</p>
                <p className="text-xs text-muted-foreground">标注绿</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
