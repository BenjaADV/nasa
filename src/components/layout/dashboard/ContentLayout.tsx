import { ReactNode } from 'react';
import { AppBreadcrumbs } from '@/components/shared/AppBreadcrumbs';

interface ContentLayoutProps {
  children: ReactNode;
  title?: string;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="flex-1 flex flex-col mx-auto p-6 w-full">
      <div className="mb-6">
        <AppBreadcrumbs />
      </div>

      {children}
    </div>
  );
}
