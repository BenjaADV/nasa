import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export function FuelElementHeader() {
  const navigate = useNavigate();
  const handleNavigateToMassiveCharge = () => {
    navigate(ROUTES.FUEL_ELEMENT_MASSIVE_CHARGE, { replace: true });
  };

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-purple-600">Elemento Combustible</h1>
      <div className="flex gap-3">
        <Button
          variant="outline"
          className="bg-white border-purple-700 border-2 text-purple-700"
          onClick={handleNavigateToMassiveCharge}
        >
          Importar lista de empaque
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700">Nuevo Elemento Combustible</Button>
      </div>
    </div>
  );
}
