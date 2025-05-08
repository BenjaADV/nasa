import { FuelElementHeader } from './components/FuelElementHeader';
import FuelElementTable from './components/FuelElementTable';
import FuelTaskTable from './components/FuelTaskTable';

const FuelElement = () => {
  return (
    <div className="flex flex-col gap-5">
      <FuelElementHeader />
      <FuelTaskTable />
    </div>
  );
};

export default FuelElement;
