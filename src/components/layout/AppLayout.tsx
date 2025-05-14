import { Outlet } from 'react-router-dom';
import { DashboardLayout } from './dashboard/DashboardLayout';
import { SubHeaderDataFetcher } from './header/SubHeaderData';

export default function AppLayout() {




  return (
    <DashboardLayout
      subheader={<SubHeaderDataFetcher/>}
    >
      <Outlet />
    </DashboardLayout>
  );
}
