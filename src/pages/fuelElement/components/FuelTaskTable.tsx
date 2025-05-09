import { z } from 'zod';
import { taskSchema } from '@/components/commons/table/data/schema';
import { DataTable } from '@/components/commons/table/data-table';
import { columns } from '@/components/commons/table/columns';
import tasksData from '@/components/commons/table/data/tasks.json';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

function getTasks() {
  return z.array(taskSchema).parse(tasksData);
}

export default function FuelTaskTable() {
  const tasks = getTasks();

  return (
    <div>
        <DataTable data={tasks} columns={columns} />
    </div>
  );
}
