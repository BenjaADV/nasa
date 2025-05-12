import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import AppLayout from '@/components/layout/AppLayout';

const Home = lazy(() => import('@/pages/home/Home'));
const FuelElement = lazy(() => import('@/pages/fuelElement/FuelElement'));
const Reactor = lazy(() => import('@/pages/reactor/Reactor'));
const Pools = lazy(() => import('@/pages/pools/Pools'));
const Machine = lazy(() => import('@/pages/machine/Machine'));
const Movements = lazy(() => import('@/pages/movements/Movements'));
const Lists = lazy(() => import('@/pages/lists/Lists'));
const Utilities = lazy(() => import('@/pages/utilities/Utilities'));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
//    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/fuelElement', element: <FuelElement /> },
      { path: '/reactor', element: <Reactor /> },
      { path: '/pools', element: <Pools /> },
      { path: '/machine', element: <Machine /> },
      { path: '/movements', element: <Movements /> },
      { path: '/lists', element: <Lists /> },
      { path: '/utilities', element: <Utilities /> },
    ],
  },
]);
