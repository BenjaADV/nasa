import {
  Building,
  Calculator,
  ChartNoAxesColumnIncreasingIcon,
  House,
  TrendingDown,
  TrendingUp,
  Users,
} from 'lucide-react';

import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { NavMain } from './NavMain';

const data = {
  navMain: [
    {
      title: 'Elemento Combustible',
      url: '/fuelElement',
      icon: TrendingDown,
    },
    {
      title: 'Reactor',
      url: '/reactor',
      icon: Building,
    },
    {
      title: 'Piletas',
      url: '/pools',
      icon: ChartNoAxesColumnIncreasingIcon,
    },
    {
      title: 'Maquina de Carga',
      url: '/machine',
      icon: TrendingUp,
    },
    {
      title: 'Movimientos',
      url: '/movements',
      icon: House,
    },
    {
      title: 'Listados',
      url: '/lists',
      icon: Calculator,
    },
    {
      title: 'Utilidades',
      url: '#',
      icon: Users,
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
