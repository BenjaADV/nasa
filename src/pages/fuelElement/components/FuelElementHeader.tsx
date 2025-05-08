import { Button } from '@/components/ui/button';

export function FuelElementHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-purple-600">Elemento Combustible</h1>
      <div className="flex gap-3">
        <Button variant="outline" className="bg-white border-purple-700 border-2 text-purple-700">
          Importar lista de empaque
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700">Nuevo Elemento Combustible</Button>
      </div>
    </div>
  );
}
