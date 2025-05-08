import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Calendar, Search, Filter } from 'lucide-react';
import { DataTable } from './DataTable';
import { FuelElement } from '@/interfaces/IFuelElement.interface';
import { columns } from './Columns';

async function getData(): Promise<FuelElement[]> {
  return [
    {
      id: 'RH224',
      comentario: 'Sin Comentario',
      pileta: '3',
      percha: 'T',
      posicion: '28',
      uranio: '152464.00',
      u235: '0.00',
      u235Final: '430.39000',
      u2: '',
    },
    {
      id: 'RH225',
      comentario: 'aweo',
      pileta: '3',
      percha: 'T',
      posicion: '28',
      uranio: '152464.00',
      u235: '2.00',
      u235Final: '430.39000',
      u2: '',
    },
    {
      id: 'RH223',
      comentario: 'kee',
      pileta: '3',
      percha: 'T',
      posicion: '28',
      uranio: '152464.00',
      u235: '1.00',
      u235Final: '430.39000',
      u2: '',
    },

  ];
}

export default function FuelElementTable() {
  const [data, setData] = useState<FuelElement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-4 bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="relative w-80">
          <Input placeholder="Buscar EC" className="pl-9 border-gray-300" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Input placeholder="05/2022 - 11/2022" className="pl-9 w-56 border-gray-300" />
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <Button variant="outline" className="border-gray-300 gap-2">
            <span>Filtro por Característica</span>
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
