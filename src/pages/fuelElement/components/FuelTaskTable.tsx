import { z } from 'zod';
import { taskSchema } from '@/components/commons/table/data/schema';
import { DataTable } from '@/components/commons/table/data-table';
import { columns } from '@/components/commons/table/columns';
import tasksData from '@/components/commons/table/data/tasks.json';

function getTasks() {
  return z.array(taskSchema).parse(tasksData);
}

export default function FuelTaskTable() {
  const tasks = getTasks();

  return (
    <>
      <div className="flex ">
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
