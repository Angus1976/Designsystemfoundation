import { createBrowserRouter } from 'react-router';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { Tasks } from './pages/Tasks';
import { AIAssistant } from './pages/AIAssistant';
import { DataStructuring } from './pages/DataStructuring';
import { DataSync } from './pages/DataSync';
import { AdminConsole } from './pages/AdminConsole';
import { SecurityCenter } from './pages/SecurityCenter';
import { QualityManagement } from './pages/QualityManagement';
import { Billing } from './pages/Billing';
import { License } from './pages/License';
import { NotFound } from './pages/NotFound';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { Error403 } from './pages/Error403';
import { Error500 } from './pages/Error500';
import { Welcome } from './pages/Welcome';
import { HelpCenter } from './pages/HelpCenter';
import { Settings } from './pages/Settings';
import { Workspaces } from './pages/Workspaces';
import { ComponentShowcase } from './pages/ComponentShowcase';
import { LogoShowcase } from './components/ui/logo-showcase';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/error-403',
    element: <Error403 />,
  },
  {
    path: '/error-500',
    element: <Error500 />,
  },
  {
    path: '/welcome',
    element: (
      <AppLayout>
        <Welcome />
      </AppLayout>
    ),
  },
  {
    path: '/',
    element: (
      <AppLayout>
        <Dashboard />
      </AppLayout>
    ),
  },
  {
    path: '/logo-showcase',
    element: (
      <AppLayout>
        <LogoShowcase />
      </AppLayout>
    ),
  },
  {
    path: '/tasks',
    element: (
      <AppLayout>
        <Tasks />
      </AppLayout>
    ),
  },
  {
    path: '/ai-assistant',
    element: (
      <AppLayout>
        <AIAssistant />
      </AppLayout>
    ),
  },
  {
    path: '/data-structuring',
    element: (
      <AppLayout>
        <DataStructuring />
      </AppLayout>
    ),
  },
  {
    path: '/data-sync',
    element: (
      <AppLayout>
        <DataSync />
      </AppLayout>
    ),
  },
  {
    path: '/ai-annotation',
    element: (
      <AppLayout>
        <div className="p-6">
          <h1 className="text-2xl font-semibold">AI 标注 / AI Annotation</h1>
          <p className="text-muted-foreground mt-2">功能开发中... / Coming soon...</p>
        </div>
      </AppLayout>
    ),
  },
  {
    path: '/augmentation',
    element: (
      <AppLayout>
        <div className="p-6">
          <h1 className="text-2xl font-semibold">数据增强 / Augmentation</h1>
          <p className="text-muted-foreground mt-2">功能开发中... / Coming soon...</p>
        </div>
      </AppLayout>
    ),
  },
  {
    path: '/quality',
    element: (
      <AppLayout>
        <QualityManagement />
      </AppLayout>
    ),
  },
  {
    path: '/security',
    element: (
      <AppLayout>
        <SecurityCenter />
      </AppLayout>
    ),
  },
  {
    path: '/admin',
    element: (
      <AppLayout>
        <AdminConsole />
      </AppLayout>
    ),
  },
  {
    path: '/billing',
    element: (
      <AppLayout>
        <Billing />
      </AppLayout>
    ),
  },
  {
    path: '/license',
    element: (
      <AppLayout>
        <License />
      </AppLayout>
    ),
  },
  {
    path: '/help-center',
    element: (
      <AppLayout>
        <HelpCenter />
      </AppLayout>
    ),
  },
  {
    path: '/settings',
    element: (
      <AppLayout>
        <Settings />
      </AppLayout>
    ),
  },
  {
    path: '/workspaces',
    element: (
      <AppLayout>
        <Workspaces />
      </AppLayout>
    ),
  },
  {
    path: '/component-showcase',
    element: (
      <AppLayout>
        <ComponentShowcase />
      </AppLayout>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);