// 'use client'

// import { useState, useEffect } from 'react'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
// import { ChevronDown } from 'lucide-react'
// import { getOrders } from '@/actions/ordersActions'

// // Column definitions
// const columns = [
//   {
//     accessorKey: "_id",
//     header: "Order ID",
//     cell: ({ row }) => <div className="capitalize">{row.getValue("_id")}</div>,
//   },
//   {
//     accessorKey: "user.name",
//     header: "Customer",
//     cell: ({ row }) => <div>{row.original.user.firstName}</div>,
//   },
//   {
//     accessorKey: "createdAt",
//     header: "Date",
//     cell: ({ row }) => <div>{new Date(row.getValue("createdAt")).toLocaleDateString()}</div>,
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
//   },
//   {
//     id: "actions",
//     cell: ({ row }) => <OrderActions order={row.original} />,
//   },
// ]

// function DetailSheet({ order }) {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="outline">View Details</Button>
//       </SheetTrigger>
//       <SheetContent className='overflow-y-auto'>
//         <SheetHeader>
//           <SheetTitle>Order Details</SheetTitle>
//         </SheetHeader>
//         <div className="mt-4">
//           <h3 className="font-bold">Customer: {order.user.firstName}</h3> {/* Adjust if needed */}
//           <p>Order ID: {order._id}</p>
//           <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
//           <p>Status: {order.status}</p>
//           <p>Address: {order.address}</p>
//           <p>Phone: {order.number}</p>
//           <h4 className="font-bold mt-4">Products:</h4>
//           <ul>
//             {order.items.map((item, index) => (
//               <div className='bg-gray-300 text-black my-3 p-3' key={index}>
//                 {item.title} - Quantity: {item.quantity} - Price: PKR {item.price}
//               </div>
//             ))}
//           </ul>
//         </div>
//       </SheetContent>
//     </Sheet>
//   )
// }


// // OrderActions component
// function OrderActions({ order }) {
//   return (
//     <div className="flex items-center gap-2">
//       <DetailSheet order={order} />
//       <Button variant="outline" onClick={() => console.log('Delete order', order._id)}>Delete</Button>
//       <Button variant="outline" onClick={() => console.log('Mark as delivered', order._id)}>
//         Mark as Delivered
//       </Button>
//     </div>
//   )
// }

// // Main Orders component
// export default function Orders() {
//   const [orders, setOrders] = useState([])
//   const [sorting, setSorting] = useState([])
//   const [columnFilters, setColumnFilters] = useState([])
//   const [columnVisibility, setColumnVisibility] = useState({}) 
//   const [rowSelection, setRowSelection] = useState({})

//   // Fetching orders from the database
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const ordersData = await getOrders();  // Assuming getOrders fetches the orders
//         setOrders(ordersData);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     fetchOrders();
//   }, []);  // Fetch orders once on component mount

//   const table = useReactTable({
//     data: orders,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   })

//   return (
//     <div className="min-h-screen mx-2 sm:mx-4 lg:mx-10 px-1">
//       <div className="flex items-center py-4">
//         <Input
//           placeholder="Filter orders..."
//           value={(table.getColumn("_id")?.getFilterValue()) ?? ""}
//           onChange={(event) =>
//             table.getColumn("_id")?.setFilterValue(event.target.value)
//           }
//           className="max-w-sm"
//         />
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" className="ml-auto">
//               Columns <ChevronDown className="ml-2 h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table
//               .getAllColumns()
//               .filter((column) => column.getCanHide())
//               .map((column) => {
//                 return (
//                   <DropdownMenuCheckboxItem
//                     key={column.id}
//                     className="capitalize"
//                     checked={column.getIsVisible()}
//                     onCheckedChange={(value) =>
//                       column.toggleVisibility(!!value)
//                     }
//                   >
//                     {column.id}
//                   </DropdownMenuCheckboxItem>
//                 )
//               })}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id}>
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                     </TableHead>
//                   )
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={columns.length} className="h-24 text-center">
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-end space-x-2 py-4">
//         <div className="flex-1 text-sm text-muted-foreground">
//           {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div>
//         <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ChevronDown } from 'lucide-react'
import { getOrders } from '@/actions/ordersActions'

// Column definitions
const columns = [
  {
    accessorKey: "_id",
    header: "Order ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("_id")}</div>,
  },
  {
    accessorKey: "user.name",
    header: "Customer",
    cell: ({ row }) => <div>{row.original.user.firstName}</div>,
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
]

function DetailSheet({ order }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">View Details</Button>
      </SheetTrigger>
      <SheetContent className='overflow-y-auto'>
        <SheetHeader>
          <SheetTitle>Order Details</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
        <div className="flex flex-col items-center gap-4 mt-4">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={order.user.picture}
                  alt={`${order.user.firstName} ${order.user.lastName}`}
                />
                <AvatarFallback>
                  {order.user?.firstName?.charAt(0)}
                  {order.user?.lastName?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <h1 className="font-bold text-2xl text-center">
                {`${order.user.firstName} ${order.user.lastName}`}
              </h1>
            </div>
          <h3 className="font-bold">Customer: {order.user.firstName}</h3>
          <p>Order ID: {order._id}</p>
          <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
          <p>Status: {order.status}</p>
          <p>Address: {order.address}</p>
          <p>Phone: {order.number}</p>
          <h4 className="font-bold mt-4">Products:</h4>
          <ul>
            {order.items.map((item, index) => (
              <div className='bg-gray-300 text-black my-3 p-3' key={index}>
                {item.title} - Quantity: {item.quantity} - Price: PKR {item.price}
              </div>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}

// OrderActions component
function OrderActions({ order }) {
  return (
    <div className="flex items-center gap-2">
      <DetailSheet order={order} />
      <Button variant="outline" onClick={() => console.log('Delete order', order._id)}>Delete</Button>
      <Button variant="outline" onClick={() => console.log('Mark as delivered', order._id)}>
        Mark as Delivered
      </Button>
    </div>
  )
}

// Main Orders component
export default function Orders() {
  const [orders, setOrders] = useState([])
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  // Fetching orders from the database
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await getOrders(); // Assuming getOrders fetches the orders
        setOrders(ordersData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);  // Fetch orders once on component mount

  const table = useReactTable({
    data: orders,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="min-h-screen mx-2 sm:mx-4 lg:mx-10 px-1">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter orders..."
          value={(table.getColumn("_id")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("_id")?.setFilterValue(event.target.value)
          }
          className="max-w-sm rounded-lg shadow-md"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto rounded-lg shadow-md hover:shadow-lg">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Skeleton Loader */}
      {isLoading ? (
            <div className="space-y-6">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="animate-pulse flex space-x-4 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg">
                <div className="h-6 w-32 bg-gray-600 rounded"></div>
                <div className="h-6 w-32 bg-gray-600 rounded"></div>
                <div className="h-6 w-32 bg-gray-600 rounded"></div>
                <div className="h-6 w-32 bg-gray-600 rounded"></div>
              </div>
            ))}
          </div>
      ) : (
        <div className="rounded-md border shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="hover:bg-gray-100 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="py-4 px-6">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
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
          </Table>
        </div>
      )}

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected
          <div className="space-x-2">
             <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
        </div>
      </div>
    </div>
  )
}
