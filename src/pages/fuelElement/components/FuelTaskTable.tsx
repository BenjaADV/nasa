import { z } from 'zod';
import fakeData from '@/pages/fuelElement/components/fakeData.json';

import { TableLayout } from '@/components/commons/table/TableLayout';
import { FuelElementColumn } from './FuelElementColumns';
import { fuelElementSchema } from './FuelElementSchema';

function getTasks() {
  return z.array(fuelElementSchema).parse(fakeData);
}

export default function FuelTaskTable() {
  const tasks = getTasks();

  return (
    <div>
        <TableLayout data={tasks} columns={FuelElementColumn} />
    </div>
  );
}
