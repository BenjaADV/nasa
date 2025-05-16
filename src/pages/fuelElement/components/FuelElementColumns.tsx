import { DataTableColumnHeader } from '@/components/commons/table/data-table-column-header';

import { ColumnDef } from '@tanstack/react-table';
import { FuelElement } from './FuelElementSchema';

export const FuelElementColumn: ColumnDef<FuelElement>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableHiding: false,
  },
  {
    accessorKey: 'ec',
    header: ({ column }) => <DataTableColumnHeader column={column} title="EC" />,
    cell: ({ row }) => <div>{row.getValue('ec')}</div>,
  },
  {
    accessorKey: 'code',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Código" />,
    cell: ({ row }) => <div>{row.getValue('code')}</div>,
  },
  {
    accessorKey: 'pool',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Pileta" />,
    cell: ({ row }) => <div>{row.getValue('pool')}</div>,
  },
  {
    accessorKey: 'percha',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Percha" />,
    cell: ({ row }) => <div>{row.getValue('percha')}</div>,
  },
  {
    accessorKey: 'position',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Posición" />,
    cell: ({ row }) => <div>{row.getValue('position')}</div>,
  },
  {
    accessorKey: 'fechaDeNovedad',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Fecha de Novedad" />,
    cell: ({ row }) => <div>{row.getValue('fechaDeNovedad')}</div>,
  },
  {
    accessorKey: 'asociatedChannel',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Canal Asociado" />,
    cell: ({ row }) => <div>{row.getValue('asociatedChannel')}</div>,
  },
  {
    accessorKey: 'positionInReactor',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Posición en Reactor" />,
    cell: ({ row }) => <div>{row.getValue('positionInReactor')}</div>,
  },
  {
    accessorKey: 'uranium',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Uranio" />,
    cell: ({ row }) => <div>{row.getValue('uranium')}</div>,
  },
  {
    accessorKey: 'u235',
    header: ({ column }) => <DataTableColumnHeader column={column} title="U235" />,
    cell: ({ row }) => <div>{row.getValue('u235')}</div>,
  },
  {
    accessorKey: 'u235Final',
    header: ({ column }) => <DataTableColumnHeader column={column} title="U235 Final" />,
    cell: ({ row }) => <div>{row.getValue('u235Final')}</div>,
  },
  {
    accessorKey: 'quemado',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Quemado" />,
    cell: ({ row }) => <div>{row.getValue('quemado')}</div>,
  },
  {
    accessorKey: 'pu',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Pu" />,
    cell: ({ row }) => <div>{row.getValue('pu')}</div>,
  },
  {
    accessorKey: 'estadiaCalendario',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Estadía Calendario" />,
    cell: ({ row }) => <div>{row.getValue('estadiaCalendario')}</div>,
  },
  {
    accessorKey: 'estadiaDPP',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Estadía DPP" />,
    cell: ({ row }) => <div>{row.getValue('estadiaDPP')}</div>,
  },
  {
    accessorKey: 'uranioFinal',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Uranio Final" />,
    cell: ({ row }) => <div>{row.getValue('uranioFinal')}</div>,
  },
  {
    accessorKey: 'observaciones',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Observaciones" />,
    cell: ({ row }) => <div className="truncate">{row.getValue('observaciones')}</div>,
  },
];
