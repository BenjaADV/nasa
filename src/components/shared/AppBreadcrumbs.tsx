// src/components/shared/AppBreadcrumbs.tsx
import { useLocation, Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';

const breadcrumbNameMap: Record<string, string> = {
  home: 'Inicio',
  fuelElement: 'Elemento Combustible',
  reactor: 'Reactor',
  pools: 'Piletas',
  machine: 'Maquina de Carga',
  movements: 'Movimientos',
  lists: 'Listados',
};

export function AppBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathnames.map((value, index) => {
          const to = '/' + pathnames.slice(0, index + 1).join('/');
          const isLast = index === pathnames.length - 1;
          const label = breadcrumbNameMap[value] || value;

          return (
            <React.Fragment key={to}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <span className="text-purple-600">{label}</span>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={to} className="text-purple-600">
                      {label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
