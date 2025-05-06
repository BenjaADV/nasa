import {
  Building,
  Calculator,
  ChartNoAxesColumnIncreasingIcon,
  House,
  List,
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
      url: '#',
      icon: TrendingDown,
    },
    {
      title: 'Reactor',
      url: '#',
      icon: Building,
    },
    {
      title: 'Piletas',
      url: '#',
      icon: ChartNoAxesColumnIncreasingIcon,
    },
    {
      title: 'Maquina de Carga',
      url: '#',
      icon: TrendingUp,
    },
    {
      title: 'Movimientos',
      url: '#',
      icon: House,
    },
    {
      title: 'Listados',
      url: '#',
      icon: Calculator,
    },
    {
      title: 'Utilidades',
      url: '#',
      icon: Users,
    },
    {
      title: 'Ventana',
      url: '#',
      icon: List,
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
