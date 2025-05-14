import {
  Building,
  ClipboardList,
  Fuel,
  MonitorUp,
  SquareActivity,
  Waves,
  Wrench,
} from 'lucide-react';

import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { NavMain } from './NavMain';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

const data = {
  navMain: [
    {
      title: 'Elemento Combustible',
      url: ROUTES.FUEL_ELEMENT,
      icon: Fuel,
    },
    {
      title: 'Reactor',
      url: ROUTES.REACTOR,
      icon: Building,
    },
    {
      title: 'Piletas',
      url: ROUTES.POOLS,
      icon: Waves,
    },
    {
      title: 'Maquina de Carga',
      url: ROUTES.MACHINE,
      icon: MonitorUp,
    },
    {
      title: 'Movimientos',
      url: ROUTES.MOVEMENTS,
      icon: SquareActivity,
    },
    {
      title: 'Listados',
      url: ROUTES.LISTS,
      icon: ClipboardList,
    },
    {
      title: 'Utilidades',
      url: ROUTES.UTILITIES,
      icon: Wrench,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link to="/home" className="flex justify-center items-center m-8">
          <img
            src="/src/assets/images/nucleoelectrica_logo.png"
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
