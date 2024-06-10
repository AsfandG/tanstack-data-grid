import EditableCell from "@/components/ui/EditableCell";
import { ColumnDef } from "@tanstack/react-table";

export type TasksType = {
  id?: number;
  task: string;
  status: string;
  due: Date;
  notes: string;
};

export const columns: ColumnDef<TasksType>[] = [
  {
    accessorKey: "task",
    header: "Task",
    cell: EditableCell,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "due",
    header: "Due",
    cell: ({ getValue }: { getValue: () => any }) => (
      <p>{getValue()?.toLocaleTimeString()}</p>
    ),
  },
  {
    accessorKey: "notes",
    header: "Notes",
  },
];
