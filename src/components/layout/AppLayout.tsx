import { DashboardLayout } from './dashboard/DashboardLayout';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
