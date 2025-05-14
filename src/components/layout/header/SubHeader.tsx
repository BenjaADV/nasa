// components/header/SubHeader.tsx
import React from 'react';

export function SubHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-12 bg-gray-50 border-b border-gray-100 px-4 flex items-center">
      {children}
    </div>
  );
}
