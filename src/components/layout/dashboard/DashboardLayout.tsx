import type React from 'react';
import { DashboardHeader } from './DashboardHeader';
import { AppSidebar } from '../AppSidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ContentLayout } from '../ContentLayout';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="overflow-hidden md:!m-0">
          <DashboardHeader />

          {/* Trigger para mobile */}
          <div className="md:hidden fixed top-4 left-4 z-50">
            <SidebarTrigger />
          </div>

          <ContentLayout>{children}</ContentLayout>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
