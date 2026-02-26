import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Checkbox } from '../components/ui/checkbox';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Progress } from '../components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Search,
  Plus,
  Download,
  Trash2,
  UserPlus,
  Eye,
  Edit,
  Settings,
  RefreshCw,
  Filter,
  ClipboardList,
} from 'lucide-react';

interface Task {
  id: string;
  name: string;
  type: string;
  status: 'processing' | 'success' | 'warning' | 'pending';
  progress: number;
  assignees: string[];
  createdAt: string;
}

const mockTasks: Task[] = [
  {
    id: '1',
    name: '图像分类 - 批次01',
    type: '图像分类',
    status: 'processing',
    progress: 75,
    assignees: ['张三', '李四'],
    createdAt: '2025-02-20',
  },
  {
    id: '2',
    name: '文本标注 - 批次03',
    type: '文本标注',
    status: 'success',
    progress: 100,
    assignees: ['王五'],
    createdAt: '2025-02-18',
  },
  {
    id: '3',
    name: '数据清洗 - 批次02',
    type: '数据清洗',
    status: 'warning',
    progress: 45,
    assignees: ['赵六', '钱七', '孙八'],
    createdAt: '2025-02-22',
  },
  {
    id: '4',
    name: '语音识别 - 批次05',
    type: '语音识别',
    status: 'pending',
    progress: 10,
    assignees: ['周九'],
    createdAt: '2025-02-24',
  },
  {
    id: '5',
    name: '目标检测 - 批次04',
    type: '目标检测',
    status: 'processing',
    progress: 60,
    assignees: ['吴十', '郑十一'],
    createdAt: '2025-02-21',
  },
];

export function Tasks() {
  const { t, language } = useApp();
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const statusConfig = {
    processing: {
      label: language === 'zh' ? '处理中' : 'Processing',
      color: 'bg-[#1890FF] text-white',
    },
    success: {
      label: language === 'zh' ? '已完成' : 'Completed',
      color: 'bg-[#52C41A] text-white',
    },
    warning: {
      label: language === 'zh' ? '进行中' : 'In Progress',
      color: 'bg-[#FAAD14] text-white',
    },
    pending: {
      label: language === 'zh' ? '待处理' : 'Pending',
      color: 'bg-gray-500 text-white',
    },
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTasks(mockTasks.map((t) => t.id));
    } else {
      setSelectedTasks([]);
    }
  };

  const handleSelectTask = (taskId: string, checked: boolean) => {
    if (checked) {
      setSelectedTasks([...selectedTasks, taskId]);
    } else {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{t('tasks.title')}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {language === 'zh' ? '管理和跟踪所有标注任务' : 'Manage and track all annotation tasks'}
          </p>
        </div>
        <Button size="lg">
          <Plus className="w-5 h-5 mr-2" />
          {t('tasks.newTask')}
        </Button>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={`${t('common.search')}...`}
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Status Filter */}
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder={t('common.status')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{language === 'zh' ? '全部状态' : 'All Status'}</SelectItem>
                <SelectItem value="processing">{language === 'zh' ? '处理中' : 'Processing'}</SelectItem>
                <SelectItem value="success">{language === 'zh' ? '已完成' : 'Completed'}</SelectItem>
                <SelectItem value="warning">{language === 'zh' ? '进行中' : 'In Progress'}</SelectItem>
                <SelectItem value="pending">{language === 'zh' ? '待处理' : 'Pending'}</SelectItem>
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder={t('common.type')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{language === 'zh' ? '全部类型' : 'All Types'}</SelectItem>
                <SelectItem value="image">{language === 'zh' ? '图像分类' : 'Image Classification'}</SelectItem>
                <SelectItem value="text">{language === 'zh' ? '文本标注' : 'Text Annotation'}</SelectItem>
                <SelectItem value="audio">{language === 'zh' ? '语音识别' : 'Audio Recognition'}</SelectItem>
              </SelectContent>
            </Select>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <RefreshCw className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Batch Actions */}
          {selectedTasks.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                {language === 'zh' ? `已选择 ${selectedTasks.length} 项` : `${selectedTasks.length} selected`}
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  {t('tasks.batchExport')}
                </Button>
                <Button variant="outline" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  {t('tasks.batchAssign')}
                </Button>
                <Button variant="outline" size="sm" className="text-[#FF4D4F] hover:text-[#FF4D4F]">
                  <Trash2 className="w-4 h-4 mr-2" />
                  {t('tasks.batchDelete')}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tasks Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedTasks.length === mockTasks.length}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>{t('tasks.taskName')}</TableHead>
                <TableHead>{t('common.type')}</TableHead>
                <TableHead>{t('common.status')}</TableHead>
                <TableHead>{t('tasks.progress')}</TableHead>
                <TableHead>{t('tasks.assignee')}</TableHead>
                <TableHead>{t('common.createdAt')}</TableHead>
                <TableHead className="text-right">{t('common.actions')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTasks.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="h-64 text-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <ClipboardList className="w-12 h-12 text-muted-foreground" />
                      <p className="text-muted-foreground">{t('tasks.noTasks')}</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                mockTasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedTasks.includes(task.id)}
                        onCheckedChange={(checked) =>
                          handleSelectTask(task.id, checked as boolean)
                        }
                      />
                    </TableCell>
                    <TableCell className="font-medium">{task.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{task.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusConfig[task.status].color}>
                        {statusConfig[task.status].label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 min-w-32">
                        <Progress value={task.progress} className="flex-1" />
                        <span className="text-sm text-muted-foreground w-10">
                          {task.progress}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex -space-x-2">
                        {task.assignees.slice(0, 3).map((assignee, index) => (
                          <Avatar key={index} className="w-8 h-8 border-2 border-background">
                            <AvatarFallback className="bg-[#1890FF] text-white text-xs">
                              {assignee.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                        {task.assignees.length > 3 && (
                          <Avatar className="w-8 h-8 border-2 border-background">
                            <AvatarFallback className="bg-muted text-muted-foreground text-xs">
                              +{task.assignees.length - 3}
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{task.createdAt}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-[#FF4D4F] hover:text-[#FF4D4F]">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}