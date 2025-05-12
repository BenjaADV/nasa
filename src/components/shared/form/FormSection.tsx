import { FormLabel } from '@/components/ui/form';

export const FormSection = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <div className="space-y-6 mx-auto py-10 bg-white p-6 rounded-md">
    {title && <FormLabel className="text-2xl font-bold">{title}</FormLabel>}
    {children}
  </div>
);

