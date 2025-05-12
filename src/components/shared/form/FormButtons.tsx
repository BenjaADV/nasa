import { Button } from '@/components/ui/button';

export const FormButtons = ({ onCancel }: { onCancel: () => void }) => (
  <div className="flex justify-between mt-4">
    <Button
      type="button"
      variant="outline"
      className="border-purple-600 text-purple-600 hover:bg-purple-50"
      onClick={onCancel}
    >
      Cancelar
    </Button>
    <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
      Aceptar
    </Button>
  </div>
);
