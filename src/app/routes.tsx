import { createBrowserRouter } from 'react-router';
import { AppProvider } from './context/AppContext';
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
import { AIAnnotation } from './pages/AIAnnotation';
import { Augmentation } from './pages/Augmentation';
import { FeatureShowcase } from './pages/FeatureShowcase';

// Root layout component that provides AppContext to all routes
function RootLayout({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout><AppLayout><Dashboard /></AppLayout></RootLayout>,
  },
  {
    path: '/login',
    element: <RootLayout><Login /></RootLayout>,
  },
  {
    path: '/register',
    element: <RootLayout><Register /></RootLayout>,
  },
  {
    path: '/forgot-password',
    element: <RootLayout><ForgotPassword /></RootLayout>,
  },
  {
    path: '/reset-password',
    element: <RootLayout><ResetPassword /></RootLayout>,
  },
  {
    path: '/error-403',
    element: <RootLayout><Error403 /></RootLayout>,
  },
  {
    path: '/error-500',
    element: <RootLayout><Error500 /></RootLayout>,
  },
  {
    path: '/welcome',
    element: <RootLayout><AppLayout><Welcome /></AppLayout></RootLayout>,
  },
  {
    path: '/logo-showcase',
    element: <RootLayout><AppLayout><LogoShowcase /></AppLayout></RootLayout>,
  },
  {
    path: '/tasks',
    element: <RootLayout><AppLayout><Tasks /></AppLayout></RootLayout>,
  },
  {
    path: '/ai-assistant',
    element: <RootLayout><AppLayout><AIAssistant /></AppLayout></RootLayout>,
  },
  {
    path: '/data-structuring',
    element: <RootLayout><AppLayout><DataStructuring /></AppLayout></RootLayout>,
  },
  {
    path: '/data-sync',
    element: <RootLayout><AppLayout><DataSync /></AppLayout></RootLayout>,
  },
  {
    path: '/ai-annotation',
    element: <RootLayout><AppLayout><AIAnnotation /></AppLayout></RootLayout>,
  },
  {
    path: '/augmentation',
    element: <RootLayout><AppLayout><Augmentation /></AppLayout></RootLayout>,
  },
  {
    path: '/quality',
    element: <RootLayout><AppLayout><QualityManagement /></AppLayout></RootLayout>,
  },
  {
    path: '/security',
    element: <RootLayout><AppLayout><SecurityCenter /></AppLayout></RootLayout>,
  },
  {
    path: '/admin',
    element: <RootLayout><AppLayout><AdminConsole /></AppLayout></RootLayout>,
  },
  {
    path: '/billing',
    element: <RootLayout><AppLayout><Billing /></AppLayout></RootLayout>,
  },
  {
    path: '/license',
    element: <RootLayout><AppLayout><License /></AppLayout></RootLayout>,
  },
  {
    path: '/help-center',
    element: <RootLayout><AppLayout><HelpCenter /></AppLayout></RootLayout>,
  },
  {
    path: '/settings',
    element: <RootLayout><AppLayout><Settings /></AppLayout></RootLayout>,
  },
  {
    path: '/workspaces',
    element: <RootLayout><AppLayout><Workspaces /></AppLayout></RootLayout>,
  },
  {
    path: '/component-showcase',
    element: <RootLayout><AppLayout><ComponentShowcase /></AppLayout></RootLayout>,
  },
  {
    path: '/feature-showcase',
    element: <RootLayout><AppLayout><FeatureShowcase /></AppLayout></RootLayout>,
  },
  {
    path: '*',
    element: <RootLayout><NotFound /></RootLayout>,
  },
]);