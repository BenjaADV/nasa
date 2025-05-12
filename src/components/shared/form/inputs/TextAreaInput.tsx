import { Textarea } from '@/components/ui/textarea';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

type TextAreaInputProps = {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
};

export const TextAreaInput = ({
  control,
  name,
  label,
  placeholder = '',
  rows = 4,
}: TextAreaInputProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea
            {...field}
            placeholder={placeholder}
            rows={rows}
            className="resize-none focus-visible:ring-1 focus-visible:ring-purple-500"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
