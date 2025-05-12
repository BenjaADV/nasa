import { FormProvider, useForm, FieldValues } from 'react-hook-form';
import { ReactNode } from 'react';
import { FormButtons } from './FormButtons';

type BaseFormProps<T extends FieldValues> = {
  children: ReactNode;
  onSubmit: (data: T) => void;
  onCancel: () => void;
  methods: ReturnType<typeof useForm<T>>;
};

export const BaseForm = <T extends FieldValues>({
  children,
  onSubmit,
  onCancel,
  methods,
}: BaseFormProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
        {children}
        <FormButtons onCancel={onCancel} />
      </form>
    </FormProvider>
  );
};
