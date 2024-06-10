import { TasksType } from "./columns";

export const DATA: TasksType[] = [
  {
    task: "Add New Features",
    status: "Pending",
    due: new Date("2023-04-12"),
    notes: "This is a note",
  },
  {
    task: "Write Integration Test",
    status: "deployed",
    due: new Date("2023-10-25"),
    notes: "Use Jest",
  },
];
