// components/header/SubHeader.tsx
import React from 'react';

export function SubHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {children}
    </div>
  );
}
