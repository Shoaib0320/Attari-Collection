import { TableBody, TableRow, TableCell } from "@/components/ui/table"
import { flexRender } from "@tanstack/react-table"
import OrderActions from './OrderActions'

const OrdersTableBody = ({ orders, table }) => {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} className="hover:bg-gray-100 transition-colors">
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className="py-4 px-6">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
            <TableCell className="py-4 px-6">
              <OrderActions order={row.original} />
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}

export default OrdersTableBody
