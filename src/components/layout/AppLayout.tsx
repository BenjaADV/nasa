import { Outlet } from 'react-router-dom';
import { DashboardLayout } from './dashboard/DashboardLayout';

export default function AppLayout() {
  return (
    <DashboardLayout
      subheader={<span>2181,00 - Último movimiento DPP - Última semana</span>}
    >
      <Outlet />
    </DashboardLayout>
  );
}
