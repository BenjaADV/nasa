import type React from 'react';
import { DashboardHeader } from '../header/DashboardHeader';
import { AppSidebar } from '../sidebar/AppSidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ContentLayout } from './ContentLayout';
import { SubHeader } from '../header/SubHeader';

interface Props {
  children: React.ReactNode;
  subheader?: React.ReactNode;
}

export function DashboardLayout({ children, subheader }: Props) {

  
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="overflow-hidden md:!m-0">
          <DashboardHeader />

          {subheader && <SubHeader>{subheader}</SubHeader>}

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
