import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface Feature {
  value: string;
  label: string;
}

interface DataTableFeatureFilterProps {
  table: any;
  features: Feature[];
  columnId?: string;
}

export function DataTableFeatureFilter({
  table,
  features,
  columnId = 'features',
}: DataTableFeatureFilterProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedFeatures, setSelectedFeatures] = React.useState<string[]>([]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          Filtrar por característica
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar característica..." />
          <CommandEmpty>No se encontraron características.</CommandEmpty>
          <CommandGroup>
            {features.map((feature) => (
              <CommandItem
                key={feature.value}
                onSelect={() => {
                  setSelectedFeatures((prev) => {
                    const newSelection = prev.includes(feature.value)
                      ? prev.filter((item) => item !== feature.value)
                      : [...prev, feature.value];

                    // Aquí actualizamos el filtro de la tabla
                    table.getColumn(columnId)?.setFilterValue(newSelection);

                    return newSelection;
                  });
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    selectedFeatures.includes(feature.value) ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {feature.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
