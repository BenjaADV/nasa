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
import { ROUTES } from '@/constants/routes';

const breadcrumbNameMap: Record<string, string> = {
  [ROUTES.HOME]: 'Inicio',
  [ROUTES.FUEL_ELEMENT]: 'Elemento Combustible',
  [ROUTES.FUEL_ELEMENT_MASSIVE_CHARGE]: 'Carga Masiva de Elementos',
  [ROUTES.REACTOR]: 'Reactor',
  [ROUTES.POOLS]: 'Piletas',
  [ROUTES.MACHINE]: 'Maquina de Carga',
  [ROUTES.MOVEMENTS]: 'Movimientos',
  [ROUTES.LISTS]: 'Listados',
  [ROUTES.UTILITIES]: 'Utilidades',
};

export function AppBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Elemento Inicio fijo */}
         <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="flex items-center">
              <Home className="h-4 w-4 mr-2" />

              { !pathnames.find(e => {
          return e === ROUTES.HOME;
        }) && <span className="text-gray-600">Inicio</span> }
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem> 

        {/* Resto de las rutas */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
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
                    <Link to={to} className="text-gray-600">
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
