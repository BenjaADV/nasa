import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import LoginPage from '@/pages/auth/Login';
import { ROUTES } from '@/constants/routes';
import FuelElementMassiveCharge from '@/pages/fuelElement/FuelElementMassiveCharge';

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
    element: <LoginPage />,
    children: [{ path: '/login', element: <LoginPage /> }],
  },
  {
    element: <AppLayout />,
    //    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: `/${ROUTES.HOME}`, element: <Home /> },
      {
        path: `/${ROUTES.FUEL_ELEMENT}`,
        element: <FuelElement />,
      },
      {
        path: `/${ROUTES.FUEL_ELEMENT}/${ROUTES.FUEL_ELEMENT_MASSIVE_CHARGE}`,
        element: <FuelElementMassiveCharge />,
      },
      { path: `/${ROUTES.REACTOR}`, element: <Reactor /> },
      { path: `/${ROUTES.POOLS}`, element: <Pools /> },
      { path: `/${ROUTES.MACHINE}`, element: <Machine /> },
      { path: `/${ROUTES.MOVEMENTS}`, element: <Movements /> },
      { path: `/${ROUTES.LISTS}`, element: <Lists /> },
      { path: `/${ROUTES.UTILITIES}`, element: <Utilities /> },
    ],
  },
]);
