import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import {
  Upload,
  FileText,
  FileSpreadsheet,
  File,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const steps = [
  { key: 'upload', labelZh: '上传', labelEn: 'Upload' },
  { key: 'preview', labelZh: '预览', labelEn: 'Preview' },
  { key: 'schema', labelZh: '结构定义', labelEn: 'Schema' },
  { key: 'results', labelZh: '结果', labelEn: 'Results' },
];

export function DataStructuring() {
  const { t, language } = useApp();
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          {language === 'zh' ? '数据结构化' : 'Data Structuring'}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {language === 'zh'
            ? '将非结构化数据转换为结构化格式'
            : 'Convert unstructured data into structured format'}
        </p>
      </div>

      {/* Step Wizard */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <React.Fragment key={step.key}>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      index < currentStep
                        ? 'bg-[#52C41A] text-white'
                        : index === currentStep
                        ? 'bg-[#1890FF] text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {index < currentStep ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={`text-sm mt-2 ${
                      index <= currentStep
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {language === 'zh' ? step.labelZh : step.labelEn}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-4 rounded transition-colors ${
                      index < currentStep ? 'bg-[#52C41A]' : 'bg-muted'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Content */}
          <div className="min-h-96">
            {currentStep === 0 && (
              <div className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-[#1890FF] hover:bg-[#E6F7FF] dark:hover:bg-[#1F1F1F] transition-colors cursor-pointer">
                  <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">
                    {language === 'zh' ? '拖放文件到这里' : 'Drag and drop files here'}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'zh'
                      ? '或点击选择文件'
                      : 'or click to select files'}
                  </p>
                  <Button>{language === 'zh' ? '选择文件' : 'Select Files'}</Button>
                </div>

                <div>
                  <p className="text-sm font-medium mb-3">
                    {language === 'zh' ? '支持的文件类型：' : 'Supported file types:'}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { icon: FileText, name: 'PDF', color: '#FF4D4F' },
                      { icon: FileSpreadsheet, name: 'Excel', color: '#52C41A' },
                      { icon: File, name: 'CSV', color: '#1890FF' },
                      { icon: FileText, name: 'Word', color: '#1890FF' },
                    ].map((type) => (
                      <div
                        key={type.name}
                        className="flex items-center gap-3 p-3 rounded-lg border border-border"
                      >
                        <type.icon className="w-8 h-8" style={{ color: type.color }} />
                        <span className="font-medium">{type.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mock uploaded files */}
                <div className="space-y-2">
                  <p className="text-sm font-medium">
                    {language === 'zh' ? '已上传文件：' : 'Uploaded files:'}
                  </p>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-[#FF4D4F]" />
                        <div className="flex-1">
                          <p className="font-medium">sales_data_2025.pdf</p>
                          <p className="text-sm text-muted-foreground">2.4 MB</p>
                        </div>
                        <Progress value={100} className="w-24" />
                        <Badge className="bg-[#52C41A] text-white">
                          {language === 'zh' ? '完成' : 'Done'}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  {language === 'zh' ? '数据预览' : 'Data Preview'}
                </h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left p-3 font-medium">
                              {language === 'zh' ? '产品名称' : 'Product Name'}
                            </th>
                            <th className="text-left p-3 font-medium">
                              {language === 'zh' ? '销售额' : 'Sales'}
                            </th>
                            <th className="text-left p-3 font-medium">
                              {language === 'zh' ? '数量' : 'Quantity'}
                            </th>
                            <th className="text-left p-3 font-medium">
                              {language === 'zh' ? '日期' : 'Date'}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[...Array(5)].map((_, i) => (
                            <tr key={i} className="border-b border-border">
                              <td className="p-3">
                                {language === 'zh' ? `产品 ${i + 1}` : `Product ${i + 1}`}
                              </td>
                              <td className="p-3">¥{(Math.random() * 10000).toFixed(2)}</td>
                              <td className="p-3">{Math.floor(Math.random() * 100)}</td>
                              <td className="p-3">2025-02-{20 + i}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  {language === 'zh' ? '定义数据结构' : 'Define Data Schema'}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        {language === 'zh' ? '源数据' : 'Source Data'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 font-mono text-sm">
                        <div className="p-2 bg-muted rounded">Product Name: "产品 1"</div>
                        <div className="p-2 bg-muted rounded">Sales: "¥8,234.56"</div>
                        <div className="p-2 bg-muted rounded">Quantity: "45"</div>
                        <div className="p-2 bg-muted rounded">Date: "2025-02-20"</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        {language === 'zh' ? '目标结构' : 'Target Schema'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-2 border border-border rounded">
                          <span className="text-sm">productName</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          <Badge variant="outline">String</Badge>
                        </div>
                        <div className="flex items-center gap-2 p-2 border border-border rounded">
                          <span className="text-sm">salesAmount</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          <Badge variant="outline">Number</Badge>
                        </div>
                        <div className="flex items-center gap-2 p-2 border border-border rounded">
                          <span className="text-sm">quantity</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          <Badge variant="outline">Integer</Badge>
                        </div>
                        <div className="flex items-center gap-2 p-2 border border-border rounded">
                          <span className="text-sm">date</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          <Badge variant="outline">Date</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    {language === 'zh' ? '结构化结果' : 'Structured Results'}
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      {language === 'zh' ? '导出 JSON' : 'Export JSON'}
                    </Button>
                    <Button variant="outline">
                      {language === 'zh' ? '导出 CSV' : 'Export CSV'}
                    </Button>
                    <Button>{language === 'zh' ? '导出 Excel' : 'Export Excel'}</Button>
                  </div>
                </div>

                <Card className="bg-[#F6FFED] dark:bg-[#1F1F1F] border-[#52C41A]">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 text-[#52C41A]">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-medium">
                        {language === 'zh'
                          ? '成功处理 128 条记录'
                          : 'Successfully processed 128 records'}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                      {JSON.stringify(
                        {
                          records: [
                            {
                              productName: '产品 1',
                              salesAmount: 8234.56,
                              quantity: 45,
                              date: '2025-02-20',
                            },
                            {
                              productName: '产品 2',
                              salesAmount: 5678.90,
                              quantity: 32,
                              date: '2025-02-21',
                            },
                          ],
                          totalRecords: 128,
                          processed: 128,
                          errors: 0,
                        },
                        null,
                        2
                      )}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              {language === 'zh' ? '上一步' : 'Previous'}
            </Button>
            <Button
              onClick={() =>
                setCurrentStep(Math.min(steps.length - 1, currentStep + 1))
              }
              disabled={currentStep === steps.length - 1}
            >
              {language === 'zh' ? '下一步' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
