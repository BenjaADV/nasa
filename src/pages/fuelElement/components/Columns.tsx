import { Button } from '@/components/ui/button';
import { FuelElement } from '@/interfaces/IFuelElement.interface';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUp, ArrowDown } from 'lucide-react';

export const columns: ColumnDef<FuelElement>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="justify-start"
        >
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="mr-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="mr-2 h-4 w-4" />
          ) : (
            <ArrowUp className="mr-2 h-4 w-4 opacity-50" />
          )}
          ID
        </Button>
      );
    },
    sortingFn: 'alphanumeric',
  },
  {
    accessorKey: 'comentario',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="justify-start"
        >
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="mr-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="mr-2 h-4 w-4" />
          ) : (
            <ArrowUp className="mr-2 h-4 w-4 opacity-50" />
          )}
          Comentario
        </Button>
      );
    },
    sortingFn: 'alphanumeric',
  },
  {
    accessorKey: 'pileta',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="justify-start"
        >
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="mr-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="mr-2 h-4 w-4" />
          ) : (
            <ArrowUp className="mr-2 h-4 w-4 opacity-50" />
          )}
          Pileta
        </Button>
      );
    },
    sortingFn: 'alphanumeric',
  },
  {
    accessorKey: 'percha',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="justify-start"
        >
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="mr-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="mr-2 h-4 w-4" />
          ) : (
            <ArrowUp className="mr-2 h-4 w-4 opacity-50" />
          )}
          Percha
        </Button>
      );
    },
    sortingFn: 'alphanumeric',
  },
  {
    accessorKey: 'posicion',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="justify-start"
        >
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="mr-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="mr-2 h-4 w-4" />
          ) : (
            <ArrowUp className="mr-2 h-4 w-4 opacity-50" />
          )}
          Posición
        </Button>
      );
    },
    sortingFn: 'alphanumeric',
  },
  {
    accessorKey: 'uranio',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="justify-start"
        >
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="mr-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="mr-2 h-4 w-4" />
          ) : (
            <ArrowUp className="mr-2 h-4 w-4 opacity-50" />
          )}
          Uranio
        </Button>
      );
    },
    sortingFn: (rowA, rowB) => {
      const a = parseFloat(rowA.getValue('uranio'));
      const b = parseFloat(rowB.getValue('uranio'));
      return a - b;
    },
  },
  {
    accessorKey: 'u235',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="justify-start"
        >
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="mr-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="mr-2 h-4 w-4" />
          ) : (
            <ArrowUp className="mr-2 h-4 w-4 opacity-50" />
          )}
          U235
        </Button>
      );
    },
    sortingFn: (rowA, rowB) => {
      const a = parseFloat(rowA.getValue('u235'));
      const b = parseFloat(rowB.getValue('u235'));
      return a - b;
    },
  },
  {
    accessorKey: 'u235Final',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="justify-start"
        >
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="mr-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="mr-2 h-4 w-4" />
          ) : (
            <ArrowUp className="mr-2 h-4 w-4 opacity-50" />
          )}
          U235 Final
        </Button>
      );
    },
    sortingFn: (rowA, rowB) => {
      const a = parseFloat(rowA.getValue('u235Final'));
      const b = parseFloat(rowB.getValue('u235Final'));
      return a - b;
    },
  },
  {
    accessorKey: 'u2',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="justify-start"
        >
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="mr-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="mr-2 h-4 w-4" />
          ) : (
            <ArrowUp className="mr-2 h-4 w-4 opacity-50" />
          )}
          U2
        </Button>
      );
    },
    sortingFn: 'alphanumeric',
  },
];
