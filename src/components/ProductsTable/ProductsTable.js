// // // "use client";

// // // import {
// // //   Table,
// // //   TableBody,
// // //   TableCaption,
// // //   TableCell,
// // //   TableHead,
// // //   TableHeader,
// // //   TableRow,
// // // } from "@/components/ui/table";
// // // import { useEffect, useState } from "react";
// // // import { Button } from "../ui/button";
// // // import { fetchProducts as fetchProductsAction, deleteProduct as deleteProductAction } from "@/actions/addProductActions";

// // // export default function ProductsTable({ products = [], onEditProduct }) {
// // //   const [fetchedProducts, setFetchedProducts] = useState(products);

// // //   useEffect(() => {
// // //     // Fetch products initially on component mount
// // //     fetchProducts();
// // //   }, []);

// // //   const fetchProducts = async () => {
// // //     try {
// // //       const data = await fetchProductsAction();
// // //       setFetchedProducts(data); // Update state with fetched data
// // //     } catch (error) {
// // //       console.error("Error fetching products:", error.message);
// // //     }
// // //   };

// // //   const handleDeleteProduct = async (productId) => {
// // //     try {
// // //       await deleteProductAction(productId);
// // //       setFetchedProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
// // //     } catch (error) {
// // //       console.error("Error deleting product:", error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen mx-10">
// // //       <div className="flex justify-between items-center my-4">
// // //         <h1 className="font-bold text-xl">Products</h1>
// // //       </div>
// // //       <Table>
// // //         <TableCaption>A list of your Products.</TableCaption>
// // //         <TableHeader className="bg-slate-300 text-white">
// // //           <TableRow>
// // //             <TableHead>Image</TableHead>
// // //             <TableHead className="w-[100px]">Title</TableHead>
// // //             <TableHead>Description</TableHead>
// // //             <TableHead>Price</TableHead>
// // //             <TableHead>Category</TableHead>
// // //             <TableHead>Actions</TableHead>
// // //           </TableRow>
// // //         </TableHeader>
// // //         <TableBody>
// // //           {fetchedProducts.map((product) => (
// // //             <TableRow key={product._id}>
// // //               <TableCell className="text-right">
// // //                 <img src={product.imageUrl} alt={product.title} className="w-12 h-12 rounded-full" />
// // //               </TableCell>
// // //               <TableCell className="font-medium">{product.title}</TableCell>
// // //               <TableCell>{product.description}</TableCell>
// // //               <TableCell>{product.price}</TableCell>
// // //               <TableCell>
// // //                 {product.category ? product.category.title : "No Category"}
// // //               </TableCell>
// // //               <TableCell>
// // //                 <div style={{ display: 'flex', gap: '20px' }}>
// // //                   <Button onClick={() => onEditProduct(product)}>Edit</Button>
// // //                   <Button onClick={() => handleDeleteProduct(product._id)}>Delete</Button>
// // //                 </div>
// // //               </TableCell>
// // //             </TableRow>
// // //           ))}
// // //         </TableBody>
// // //       </Table>
// // //     </div>
// // //   );
// // // }







// "use client"

// import { useEffect, useState, useMemo } from "react"
// import {
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table"
// import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { fetchProducts as fetchProductsAction, deleteProduct as deleteProductAction } from "@/actions/addProductActions"

// export default function ProductsDataTable({ initialProducts = [], onEditProduct }) {
//   const [products, setProducts] = useState(initialProducts)
//   const [sorting, setSorting] = useState([])
//   const [columnFilters, setColumnFilters] = useState([])
//   const [columnVisibility, setColumnVisibility] = useState({})
//   const [rowSelection, setRowSelection] = useState({})
//   const [globalFilter, setGlobalFilter] = useState("")

//   useEffect(() => {
//     fetchProducts()
//   }, [])

//   const fetchProducts = async () => {
//     try {
//       const data = await fetchProductsAction()
//       setProducts(data)
//     } catch (error) {
//       console.error("Error fetching products:", error.message)
//     }
//   }

//   const handleDeleteProduct = async (productId) => {
//     try {
//       await deleteProductAction(productId)
//       setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId))
//     } catch (error) {
//       console.error("Error deleting product:", error.message)
//     }
//   }

//   const columns = useMemo(
//     () => [
//       {
//         id: "select",
//         header: ({ table }) => (
//           <Checkbox
//             checked={table.getIsAllPageRowsSelected()}
//             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//             aria-label="Select all"
//           />
//         ),
//         cell: ({ row }) => (
//           <Checkbox
//             checked={row.getIsSelected()}
//             onCheckedChange={(value) => row.toggleSelected(!!value)}
//             aria-label="Select row"
//           />
//         ),
//         enableSorting: false,
//         enableHiding: false,
//       },
//       {
//         accessorKey: "imageUrl",
//         header: "Image",
//         cell: ({ row }) => (
//           <img
//             src={row.getValue("imageUrl")}
//             alt={row.getValue("title")}
//             className="w-12 h-12 rounded-full"
//           />
//         ),
//       },
//       {
//         accessorKey: "title",
//         header: ({ column }) => {
//           return (
//             <Button
//               variant="ghost"
//               onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//             >
//               Title
//               <ArrowUpDown className="ml-2 h-4 w-4" />
//             </Button>
//           )
//         },
//         cell: ({ row }) => <div className="lowercase">{row.getValue("title")}</div>,
//       },
//       {
//         accessorKey: "description",
//         header: "Description",
//         cell: ({ row }) => <div>{row.getValue("description")}</div>,
//       },
//       {
//         accessorKey: "price",
//         header: ({ column }) => {
//           return (
//             <Button
//               variant="ghost"
//               onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//             >
//               Price
//               <ArrowUpDown className="ml-2 h-4 w-4" />
//             </Button>
//           )
//         },
//         cell: ({ row }) => <div>{row.getValue("price")}</div>,
//       },
//       {
//         accessorKey: "category",
//         header: "Category",
//         cell: ({ row }) => {
//           const category = row.getValue("category")
//           return <div>{category ? category.title : "No Category"}</div>
//         },
//       },
//       {
//         id: "actions",
//         enableHiding: false,
//         cell: ({ row }) => {
//           const product = row.original

//           return (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="h-8 w-8 p-0">
//                   <span className="sr-only">Open menu</span>
//                   <MoreHorizontal className="h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                 <DropdownMenuItem onClick={() => onEditProduct(product)}>
//                   Edit
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => handleDeleteProduct(product._id)}>
//                   Delete
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           )
//         },
//       },
//     ],
//     [onEditProduct]
//   )

//   const table = useReactTable({
//     data: products,
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
//       globalFilter,
//     },
//   })

//   return (
//     <div className="min-h-screen mx-10">
//       <div className="flex justify-between items-center my-4">
//         <h1 className="font-bold text-xl">Products</h1>
//       </div>
//       <div className="flex items-center py-4">
//         <Input
//           placeholder="Search products..."
//           value={globalFilter ?? ""}
//           onChange={(event) => setGlobalFilter(event.target.value)}
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
//                     onCheckedChange={(value) => column.toggleVisibility(!!value)}
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












"use client"

import { useEffect, useState, useMemo } from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { fetchProducts as fetchProductsAction, deleteProduct as deleteProductAction } from "@/actions/addProductActions"

export default function ProductsDataTable({ initialProducts = [], onEditProduct }) {
  const [products, setProducts] = useState(initialProducts)
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})
  const [globalFilter, setGlobalFilter] = useState("")

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const data = await fetchProductsAction()
      setProducts(data)
    } catch (error) {
      console.error("Error fetching products:", error.message)
    }
  }

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProductAction(productId)
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId))
    } catch (error) {
      console.error("Error deleting product:", error.message)
    }
  }

  // Function to truncate the description to 20-25 words
  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 25 ? words.slice(0, 25).join(" ") + "..." : description;
  }

  const columns = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "imageUrl",
        header: "Image",
        cell: ({ row }) => (
          <img
            src={row.getValue("imageUrl")}
            alt={row.getValue("title")}
            className="w-12 h-12 rounded-full shadow-lg"
          />
        ),
      },
      {
        accessorKey: "title",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-gray-800 font-semibold hover:text-black"
            >
              Title
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => <div className="font-medium text-gray-900">{row.getValue("title")}</div>,
      },
      {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => <div className="text-gray-700 text-sm">{truncateDescription(row.getValue("description"))}</div>,
      },
      {
        accessorKey: "price",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-gray-800 font-semibold hover:text-black"
            >
              Price
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => <div className="font-medium text-gray-900">{row.getValue("price")}</div>,
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => {
          const category = row.getValue("category")
          return <div className="text-gray-600">{category ? category.title : "No Category"}</div>
        },
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const product = row.original

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
                <DropdownMenuItem onClick={() => onEditProduct(product)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDeleteProduct(product._id)}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
    ],
    [onEditProduct]
  )

  const table = useReactTable({
    data: products,
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
      globalFilter,
    },
  })

  return (
    <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl text-gray-800">Products</h1>
      </div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Search products..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
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
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border bg-white shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-gray-600">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-gray-700">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>No products available.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {/* <div className="mt-4">
        <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div> */}

        <div className="flex items-center justify-end space-x-2 py-4 px-10">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              className='bg-gray-300 text-black hover:bg-gray-700 hover:text-white'
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              className='bg-gray-700 text-white hover:bg-gray-300 hover:text-black'
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
