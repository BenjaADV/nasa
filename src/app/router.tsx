import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import AppLayout from '@/components/layout/AppLayout';

const Home = lazy(() => import('@/pages/home/Home'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
//    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/dashboard', element: <Dashboard /> },
    ],
  },
]);
