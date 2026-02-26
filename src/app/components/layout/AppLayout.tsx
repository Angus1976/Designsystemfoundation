import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import {
  LayoutDashboard,
  Bot,
  ClipboardList,
  Database,
  RefreshCw,
  Sparkles,
  Layers,
  Shield,
  ShieldCheck,
  Settings,
  CreditCard,
  Key,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  HelpCircle,
  Sun,
  Moon,
  User,
  Menu,
  X,
  Keyboard,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Badge } from '../ui/badge';
import { Logo, LogoIconSimple } from '../ui/logo';
import { KeyboardShortcutsDialog } from '../ui/keyboard-shortcuts-dialog';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';

interface NavItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shortcutsDialogOpen, setShortcutsDialogOpen] = useState(false);
  const { theme, language, toggleTheme, toggleLanguage, t } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  // Keyboard shortcuts
  useKeyboardShortcuts([
    {
      key: 'k',
      ctrl: true,
      description: 'Open search',
      action: () => {
        // Focus search input
        document.querySelector('input[type="text"]')?.focus();
      },
      preventDefault: true
    },
    {
      key: 'b',
      ctrl: true,
      description: 'Toggle sidebar',
      action: () => setSidebarCollapsed(!sidebarCollapsed),
      preventDefault: true
    },
    {
      key: '\\',
      ctrl: true,
      description: 'Toggle theme',
      action: () => toggleTheme(),
      preventDefault: true
    },
    {
      key: 'l',
      ctrl: true,
      shift: true,
      description: 'Toggle language',
      action: () => toggleLanguage(),
      preventDefault: true
    },
    {
      key: '?',
      description: 'Show shortcuts',
      action: () => setShortcutsDialogOpen(true),
      preventDefault: true
    },
  ]);

  const navGroups: NavGroup[] = [
    {
      title: t('nav.workbench'),
      items: [
        {
          key: 'dashboard',
          label: t('nav.dashboard'),
          icon: <LayoutDashboard className="w-5 h-5" />,
          path: '/',
        },
        {
          key: 'ai-assistant',
          label: t('nav.aiAssistant'),
          icon: <Bot className="w-5 h-5" />,
          path: '/ai-assistant',
        },
      ],
    },
    {
      title: t('nav.dataManagement'),
      items: [
        {
          key: 'tasks',
          label: t('nav.tasks'),
          icon: <ClipboardList className="w-5 h-5" />,
          path: '/tasks',
        },
        {
          key: 'data-structuring',
          label: t('nav.dataStructuring'),
          icon: <Database className="w-5 h-5" />,
          path: '/data-structuring',
        },
        {
          key: 'data-sync',
          label: t('nav.dataSync'),
          icon: <RefreshCw className="w-5 h-5" />,
          path: '/data-sync',
        },
      ],
    },
    {
      title: t('nav.aiCapability'),
      items: [
        {
          key: 'ai-annotation',
          label: t('nav.aiAnnotation'),
          icon: <Sparkles className="w-5 h-5" />,
          path: '/ai-annotation',
        },
        {
          key: 'augmentation',
          label: t('nav.augmentation'),
          icon: <Layers className="w-5 h-5" />,
          path: '/augmentation',
        },
      ],
    },
    {
      title: t('nav.qualityAndSecurity'),
      items: [
        {
          key: 'quality',
          label: t('nav.quality'),
          icon: <ShieldCheck className="w-5 h-5" />,
          path: '/quality',
        },
        {
          key: 'security',
          label: t('nav.security'),
          icon: <Shield className="w-5 h-5" />,
          path: '/security',
        },
      ],
    },
    {
      title: t('nav.systemManagement'),
      items: [
        {
          key: 'admin',
          label: t('nav.admin'),
          icon: <Settings className="w-5 h-5" />,
          path: '/admin',
        },
        {
          key: 'billing',
          label: t('nav.billing'),
          icon: <CreditCard className="w-5 h-5" />,
          path: '/billing',
        },
        {
          key: 'license',
          label: t('nav.license'),
          icon: <Key className="w-5 h-5" />,
          path: '/license',
        },
      ],
    },
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="h-14 flex items-center justify-between px-4 border-b border-border">
        {!sidebarCollapsed ? (
          <Link to="/" className="flex items-center transition-transform hover:scale-105 duration-300">
            <Logo showSubtitle={true} />
          </Link>
        ) : (
          <Link to="/" className="flex items-center justify-center w-full transition-transform hover:scale-110 duration-300">
            <LogoIconSimple className="w-8 h-8" />
          </Link>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 px-2">
        {navGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-6">
            {!sidebarCollapsed && (
              <div className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {group.title}
              </div>
            )}
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = isActivePath(item.path);
                return (
                  <Link
                    key={item.key}
                    to={item.path}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-md transition-colors
                      ${
                        isActive
                          ? 'bg-[#E6F7FF] dark:bg-[#1F1F1F] text-[#1890FF] border-l-3 border-[#1890FF]'
                          : 'text-foreground-secondary hover:bg-accent hover:text-accent-foreground'
                      }
                      ${sidebarCollapsed ? 'justify-center' : ''}
                    `}
                    title={sidebarCollapsed ? item.label : undefined}
                  >
                    {item.icon}
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Collapse Toggle */}
      <div className="p-2 border-t border-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="w-full"
        >
          {sidebarCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span className="ml-2">{language === 'zh' ? '收起' : 'Collapse'}</span>
            </>
          )}
        </Button>
      </div>
    </>
  );

  return (
    <div className="h-screen flex overflow-hidden bg-background-tertiary">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300 ${
          sidebarCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <aside className="fixed left-0 top-0 bottom-0 w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
            <div className="h-14 flex items-center justify-between px-4 border-b border-border">
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <Logo showSubtitle={true} />
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto py-4 px-2" onClick={() => setMobileMenuOpen(false)}>
              {navGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="mb-6">
                  <div className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {group.title}
                  </div>
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const isActive = isActivePath(item.path);
                      return (
                        <Link
                          key={item.key}
                          to={item.path}
                          className={`
                            flex items-center gap-3 px-3 py-2 rounded-md transition-colors
                            ${
                              isActive
                                ? 'bg-[#E6F7FF] dark:bg-[#1F1F1F] text-[#1890FF] border-l-3 border-[#1890FF]'
                                : 'text-foreground-secondary hover:bg-accent hover:text-accent-foreground'
                            }
                          `}
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-14 bg-card border-b border-border flex items-center justify-between px-4 gap-4">
          {/* Left: Mobile Menu + Search */}
          <div className="flex items-center gap-4 flex-1">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>

            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={`${t('common.search')} (⌘K)`}
                className="pl-10 bg-background-secondary border-border"
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex"
            >
              <span className="text-xs font-medium">
                {language === 'zh' ? '中' : 'EN'}
              </span>
            </Button>

            {/* Theme Toggle */}
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {theme === 'light' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-[#FF4D4F] text-white text-xs">
                3
              </Badge>
            </Button>

            {/* Help */}
            <Button variant="ghost" size="sm">
              <HelpCircle className="w-5 h-5" />
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Avatar className="w-7 h-7">
                    <AvatarFallback className="bg-[#1890FF] text-white text-xs">
                      {language === 'zh' ? '用' : 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline text-sm">
                    {language === 'zh' ? '用户' : 'User'}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>
                  {language === 'zh' ? '我的账户' : 'My Account'}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  {t('nav.settings')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={toggleLanguage} className="md:hidden">
                  {language === 'zh' ? 'English' : '中文'}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-[#FF4D4F]">
                  {t('common.logout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>

      {/* Keyboard Shortcuts Dialog */}
      <KeyboardShortcutsDialog
        open={shortcutsDialogOpen}
        onOpenChange={setShortcutsDialogOpen}
      />
    </div>
  );
}