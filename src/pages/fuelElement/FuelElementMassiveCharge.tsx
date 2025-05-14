import { FileUploader } from '@/components/shared/filePicker/FileUploader';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';

const FuelElementMassiveCharge = () => {
  const navigate = useNavigate();
  const handleNavigateToFuelElement = () => {
    navigate( `/${ROUTES.FUEL_ELEMENT}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-purple-600">Nuevo Elemento Combustible</h1>

      <FileUploader />
      <div className="flex justify-between mt-4">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="border-purple-600 text-purple-600 hover:bg-purple-50"
          onClick={handleNavigateToFuelElement}
        >
          Carga manual
        </Button>

        <Button
          type="button"
          variant="default"
          size="sm"
          className=" h-8 px-4 bg-purple-600 hover:bg-purple-700 text-white"
        >
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default FuelElementMassiveCharge;
