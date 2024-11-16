import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const columns = [
  {
    accessorKey: 'User_ID',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        ID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: 'Customer',
    header: 'Customer',
  },
  {
    accessorKey: 'Date',
    header: 'Date',
  },
  {
    accessorKey: 'TotalPKR',
    header: 'Total PKR',
  },
  {
    id: 'actions',
    cell: ({ row, table }) => {
      const order = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => table.options.meta?.onViewDetails(order)}>
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuItem>Mark as Delivered</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
