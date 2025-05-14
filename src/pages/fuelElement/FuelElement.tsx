import { FuelElementHeader } from './components/FuelElementHeader';
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
