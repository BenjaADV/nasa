import { type LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}) {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link to={item.url} className="w-full">
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={location.pathname === item.url}
                  className="h-12 px-4 text-base w-full flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 [&:hover_*]:text-[#7622FF] data-[active=true]:bg-[#F1E9FF] data-[active=true]:text-[#7622FF]"
                >
                  {item.icon && <item.icon className="h-6 w-6 transition-colors" />}
                  <span className="transition-colors">{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
