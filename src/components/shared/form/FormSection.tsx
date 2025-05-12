import { FormLabel } from '@/components/ui/form';

export const FormSection = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <div className="space-y-6 mx-auto py-10 bg-white p-6 rounded-md">
    {title && <FormLabel className="text-base font-semibold leading-none">{title}</FormLabel>}
    {children}
  </div>
);
