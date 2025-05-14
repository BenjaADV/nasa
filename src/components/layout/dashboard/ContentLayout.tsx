import { ReactNode } from 'react';
import { AppBreadcrumbs } from '@/components/shared/AppBreadcrumbs';

interface ContentLayoutProps {
  children: ReactNode;
  title?: string;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="container flex-1 flex flex-col mx-auto p-8 w-full">
      <div className="mb-6">
        <AppBreadcrumbs />
      </div>

      {children}
    </div>
  );
}
