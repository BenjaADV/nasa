import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function DashboardHeader() {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4">
      <div className="flex items-center">
        <div className="mr-8"></div>
      </div>
      <div className="flex items-center gap-4">
        <Select defaultValue="proyecto1">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Nombre del proyecto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="proyecto1">Nombre del proyecto</SelectItem>
            <SelectItem value="proyecto2">Proyecto 2</SelectItem>
            <SelectItem value="proyecto3">Proyecto 3</SelectItem>
          </SelectContent>
        </Select>
        <button className="p-2 relative">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <Avatar className="h-10 w-10 bg-purple-800 text-white">
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
