import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DetailSheet from "./DetailSheet";
import OrderActions from "./OrderActions";

const columns = [
  {
    accessorKey: "_id",
    header: "Order ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("_id")}</div>,
  },
  {
    accessorKey: "user.name",
    header: "Customer",
    cell: ({ row }) => <div>{row.original.user?.firstName}</div>,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => <div>{new Date(row.getValue("createdAt")).toLocaleDateString()}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => <OrderActions order={row.original} />,
  },
];

export default columns;
