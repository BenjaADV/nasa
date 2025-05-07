import {
  Building,
  Calculator,
  ChartNoAxesColumnIncreasingIcon,
  ClipboardList,
  Fuel,
  House,
  MonitorUp,
  SquareActivity,
  TrendingDown,
  TrendingUp,
  Users,
  Waves,
  Wrench,
} from 'lucide-react';

import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { NavMain } from './NavMain';

const data = {
  navMain: [
    {
      title: 'Elemento Combustible',
      url: '/fuelElement',
      icon: Fuel,
    },
    {
      title: 'Reactor',
      url: '/reactor',
      icon: Building,
    },
    {
      title: 'Piletas',
      url: '/pools',
      icon: Waves,
    },
    {
      title: 'Maquina de Carga',
      url: '/machine',
      icon: MonitorUp,
    },
    {
      title: 'Movimientos',
      url: '/movements',
      icon: SquareActivity,
    },
    {
      title: 'Listados',
      url: '/lists',
      icon: ClipboardList,
    },
    {
      title: 'Utilidades',
      url: '/utilities',
      icon: Wrench,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <img
          src="/src/assets/images/nucleoelectrica_logo.png"
          alt="Logo"
          className="h-8 m-8 w-auto object-contain"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
