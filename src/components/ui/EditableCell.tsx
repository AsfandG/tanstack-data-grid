import { Input } from "@/components/ui/input";
import { TasksType } from "@/pages/shipments/columns";
import { Column, Row, Table } from "@tanstack/react-table";
import { useEffect, useState } from "react";

interface IProps {
  getValue: () => any;
  row: Row<TasksType>;
  column: Column<TasksType>;
  table: Table<TasksType>;
}

const EditableCell = ({ getValue, column, table, row }: IProps) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  function onBlur() {
    table.options.meta?.updateData(row.index, column.id, value);
  }

  //   update local state when the initialValue changes
  useEffect(() => {
    setValue(initialValue);
  }, []);
  return (
    <Input
      type="text"
      placeholder=""
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      className="border-0"
    />
  );
};

export default EditableCell;
