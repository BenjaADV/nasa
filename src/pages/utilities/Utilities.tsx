import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FormSection } from '@/components/shared/form/FormSection';
import { useForm } from 'react-hook-form';
import { BaseForm } from '@/components/shared/form/BaseForm';
import { FormGrid } from '@/components/shared/form/FormGrid';
import { ComboboxInput } from '@/components/shared/form/inputs/ComboBoxInput';
import { SelectInput } from '@/components/shared/form/inputs/SelectInput';
import { TextInput } from '@/components/shared/form/inputs/TextInput';
import { DatePickerInput } from '@/components/shared/form/inputs/DatePickerInput';
import { CheckboxGroupInput } from '@/components/shared/form/inputs/CheckboxGroupInput';
import { TextAreaInput } from '@/components/shared/form/inputs/TextAreaInput';

const items = [
  { id: '1', label: 'EC con registro de interacciones mecánicas' },
  { id: '2', label: 'EC con manchas superficiales' },
  { id: '3', label: 'EC con descarga de peso en Máquina de Carga' },
  { id: '4', label: 'EC con indicaciones de actividades' },
  { id: '5', label: 'EC con debns' },
];

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
];

const formSchema = z.object({
  fuelElement: z.string({ required_error: 'Por favor selecciona un elemento.' }),
  code: z.string(),
  container: z.string(),
  row: z.string(),
  position: z.string(),
  uO2: z.string().min(1),
  massUO2: z.string().min(1),
  startDate: z.coerce.date(),
  uranium: z.string().min(1),
  observers: z.string(),
  date: z.coerce.date(),
  channel: z.string(),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'Debes seleccionar al menos un item.',
  }),
});

export default function Utilities() {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: ['recents', 'home'],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error('Error al enviar el formulario', error);
      toast.error('Error al enviar el formulario. Por favor intenta nuevamente.');
    }
  };

  const handleCancel = () => {
    methods.reset();
    // Lógica adicional de cancelación si es necesaria
  };

  return (
    <BaseForm<z.infer<typeof formSchema>>
      methods={methods}
      onSubmit={onSubmit}
      onCancel={handleCancel}
    >
      <FormSection title="Datos del EC">
        <FormGrid>
          <div className="col-span-6">
            <ComboboxInput
              control={methods.control}
              name="fuelElement"
              label="Elemento combustible"
              options={languages}
              placeholder="Buscar EC"
            />
          </div>

          <div className="col-span-6">
            <SelectInput
              control={methods.control}
              name="code"
              label="Código"
              options={[
                { value: 'm@example.com', label: 'm@example.com' },
                { value: 'm@google.com', label: 'm@google.com' },
                { value: 'm@support.com', label: 'm@support.com' },
              ]}
              placeholder="Selecciona un código"
            />
          </div>

          <div className="col-span-6">
            <SelectInput
              control={methods.control}
              name="container"
              label="Contenedor"
              options={[
                { value: 'cont1', label: 'Contenedor 1' },
                { value: 'cont2', label: 'Contenedor 2' },
                { value: 'cont3', label: 'Contenedor 3' },
              ]}
              placeholder="Selecciona un contenedor"
            />
          </div>

          <div className="col-span-3">
            <SelectInput
              control={methods.control}
              name="row"
              label="Fila"
              options={[
                { value: 'fila1', label: 'Fila 1' },
                { value: 'fila2', label: 'Fila 2' },
                { value: 'fila3', label: 'Fila 3' },
              ]}
              placeholder="Seleccione una fila"
            />
          </div>

          <div className="col-span-3">
            <SelectInput
              control={methods.control}
              name="position"
              label="Posición"
              options={[
                { value: 'pos1', label: 'Posición 1' },
                { value: 'pos2', label: 'Posición 2' },
                { value: 'pos3', label: 'Posición 3' },
              ]}
              placeholder="Seleccione una posición"
            />
          </div>

          <div className="col-span-6">
            <TextInput control={methods.control} name="uO2" label="UO2" placeholder="Ingrese UO2" />
          </div>

          <div className="col-span-6">
            <TextInput
              control={methods.control}
              name="massUO2"
              label="Masa UO2 (g)"
              placeholder="Ingrese masa UO2"
            />
          </div>

          <div className="col-span-6">
            <DatePickerInput control={methods.control} name="startDate" label="Fecha de alta" />
          </div>

          <div className="col-span-6">
            <TextInput
              control={methods.control}
              name="uranium"
              label="Uranio (g)"
              placeholder="Ingrese cantidad de uranio"
            />
          </div>

          <div className="col-span-12">
            <TextAreaInput
              control={methods.control}
              name="observers"
              label="Observaciones"
              placeholder="Escriba alguna observación"
              rows={3}
            />
          </div>
        </FormGrid>
      </FormSection>

      <FormSection title="Detalles adicionales">
        <FormGrid>
          <div className="col-span-6">
            <DatePickerInput control={methods.control} name="date" label="Fecha" />
          </div>

          <div className="col-span-6">
            <SelectInput
              control={methods.control}
              name="channel"
              label="Canal"
              options={[
                { value: 'canal1', label: 'Canal 1' },
                { value: 'canal2', label: 'Canal 2' },
                { value: 'canal3', label: 'Canal 3' },
              ]}
              placeholder="Seleccione un canal"
            />
          </div>

          <div className="col-span-12">
            <CheckboxGroupInput control={methods.control} name="items" items={items} />
          </div>
        </FormGrid>
      </FormSection>
    </BaseForm>
  );
}
