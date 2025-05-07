import { Outlet } from 'react-router-dom';
import { DashboardLayout } from './dashboard/DashboardLayout';

export default function AppLayout() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
