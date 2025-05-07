import { ReactNode } from 'react';
import { AppBreadcrumbs } from '@/components/shared/AppBreadcrumbs';

interface ContentLayoutProps {
  children: ReactNode;
  title?: string;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="mb-6">
        <AppBreadcrumbs />
      </div>

      {children}
    </div>
  );
}
