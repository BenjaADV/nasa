import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { DataTablePagination } from './data-table-pagination';
import { DataTableToolbar } from './data-table-toolbar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Filter } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataTableFeatureFilter } from './data-table-feature-filter';
import { DatePickerWithRange } from '@/components/shared/dateTimePicker/DatePickerWithRange';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  features?: {
    value: string;
    label: string;
  }[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  features = [],
}: DataTableProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4 bg-white p-4 rounded-md">
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-80">
          <Input
            placeholder="Buscar EC"
            className="pr-9 border-gray-300"
            value={(table.getColumn('id')?.getFilterValue() as string) ?? ''}
            onChange={(event) => table.getColumn('id')?.setFilterValue(event.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <div className="flex items-center gap-4">
          <DatePickerWithRange className="w-[300px] [&>div>button]:w-56 [&>div>button]:border-gray-300 [&>div>button]:pr-9 [&>div>button]:justify-start" />
          <DataTableFeatureFilter table={table} features={features} />
        </div>
      </div>
      <div className="space-y-4 w-full">
        <div className="rounded-md w-full">
          <ScrollArea className="w-full">
            <div className="w-full overflow-x-auto pb-4">
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead
                            key={header.id}
                            colSpan={header.colSpan}
                            className="whitespace-nowrap bg-[#F9F5FF] text-[#7622FF]"
                          >
                            {header.isPlaceholder
                              ? null
                              : flexRender(header.column.columnDef.header, header.getContext())}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow key={row.id} className="h-12 border-b border-gray-200 border-l-4 border-l-transparent hover:border-l-[#7622FF] transition-colors">
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id} className="truncate ">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={columns.length} className="h-24 text-center">
                        Sin resultados.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <DataTablePagination table={table} />
      </div>{' '}
    </div>
  );
}
