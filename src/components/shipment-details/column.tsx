import { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Mawb = {
  id: number;
  direction: string;
  messageType: string;
  messageContent: string;
  timestamp: string;
  user: string;
};

export const columns: ColumnDef<Mawb>[] = [
  {
    accessorKey: "direction",
    header: () => (
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger>Direction</DropdownMenuTrigger>

          <DropdownMenuContent>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator /> */}
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
  {
    accessorKey: "messageType", // The key of the row object to use when extracting the value for the column.
    header: "Message Type",
  },
  {
    accessorKey: "messageContent",
    header: "Message Content",
  },
  {
    accessorKey: "timestamp",
    header: "Timestamp",
  },
  {
    accessorKey: "user",
    header: "User",
  },
];
