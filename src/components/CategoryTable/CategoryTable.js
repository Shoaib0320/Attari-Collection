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
// // // import axios from "axios";
// // // import { Button } from "../ui/button";
// // // import { Switch } from "../ui/switch";
// // // import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
// // // import { Input } from "@/components/ui/input";

// // // export default function CategoryTable() {
// // //   const [categories, setCategories] = useState([]);
// // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // //   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

// // //   useEffect(() => {
// // //     fetchCategories();
// // //   }, []);

// // //   const fetchCategories = async () => {
// // //     try {
// // //       const response = await axios.get("/api/categories");
// // //       setCategories(response.data.categories);
// // //     } catch (error) {
// // //       console.error("Error fetching categories:", error.message);
// // //     }
// // //   };

// // //   const handleCategoryToggle = async (id, isActive) => {
// // //     try {
// // //       await axios.put(`/api/categories/${id}`, { isActive });
// // //       fetchCategories();
// // //     } catch (error) {
// // //       console.error("Error toggling category:", error.response?.data || error.message);
// // //     }
// // //   };

// // //   const handleEditClick = (category) => {
// // //     setSelectedCategory(category);
// // //     setIsEditDialogOpen(true);
// // //   };

// // //   const handleCategoryUpdate = async (event) => {
// // //     event.preventDefault();
// // //     try {
// // //       await axios.put(`/api/categories/${selectedCategory._id}`, selectedCategory);
// // //       fetchCategories();
// // //       setIsEditDialogOpen(false);
// // //     } catch (error) {
// // //       console.error("Error updating category:", error.response?.data || error.message);
// // //     }
// // //   };

// // //   const handleDeleteClick = async (id) => {
// // //     if (confirm("Are you sure you want to delete this category?")) {
// // //       try {
// // //         await axios.delete(`/api/categories/${id}`);
// // //         fetchCategories(); // Refresh the category list
// // //       } catch (error) {
// // //         console.error("Error deleting category:", error.response?.data || error.message);
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen mx-10">
// // //       <div className="flex justify-between items-center my-4">
// // //         <h1 className="font-bold text-xl">Categories</h1>
// // //       </div>

// // //       <Table>
// // //         <TableCaption>A list of your Categories.</TableCaption>
// // //         <TableHeader className={"bg-slate-300 text-white"}>
// // //           <TableRow>
// // //             <TableHead>Category Name</TableHead>
// // //             <TableHead className="w-[100px]">Image</TableHead>
// // //             <TableHead>Description</TableHead>
// // //             <TableHead>Status</TableHead>
// // //             <TableHead>Actions</TableHead>
// // //           </TableRow>
// // //         </TableHeader>
// // //         <TableBody>
// // //           {categories.map((category) => (
// // //             <TableRow key={category._id}>
// // //               <TableCell className="font-medium">{category.title}</TableCell>
// // //               <TableCell className="text-right">
// // //                 <img
// // //                   src={category.thumbnail}
// // //                   alt={category.title}
// // //                   className="w-12 h-12 rounded-full"
// // //                 />
// // //               </TableCell>
// // //               <TableCell className="font-normal">
// // //                 {category.description}
// // //               </TableCell>
// // //               <TableCell className="font-medium">
// // //                 {category.isActive ? "Active" : "Inactive"}
// // //                 <Switch
// // //                   checked={category.isActive}
// // //                   onChange={() => handleCategoryToggle(category._id, !category.isActive)}
// // //                   className="bg-gray-200"
// // //                 />
// // //               </TableCell>
// // //               <TableCell>
// // //                 <div style={{ display: "flex", gap: "20px" }}>
// // //                   <Button className="bg-blue-500 text-white" onClick={() => handleEditClick(category)}>
// // //                     Edit
// // //                   </Button>
// // //                   <Button className="bg-red-500 text-white" onClick={() => handleDeleteClick(category._id)}>
// // //                     Delete
// // //                   </Button>
// // //                 </div>
// // //               </TableCell>
// // //             </TableRow>
// // //           ))}
// // //         </TableBody>
// // //       </Table>

// // //       {/* Modal for Editing Category */}
// // //       {selectedCategory && (
// // //         <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
// // //           <DialogContent>
// // //             <DialogHeader>
// // //               <DialogTitle>Edit Category</DialogTitle>
// // //             </DialogHeader>
// // //             <form onSubmit={handleCategoryUpdate} className="space-y-4">
// // //               <Input
// // //                 placeholder="Title"
// // //                 value={selectedCategory.title}
// // //                 onChange={(e) =>
// // //                   setSelectedCategory({ ...selectedCategory, title: e.target.value })
// // //                 }
// // //                 required
// // //               />
// // //               <Input
// // //                 placeholder="Description"
// // //                 value={selectedCategory.description}
// // //                 onChange={(e) =>
// // //                   setSelectedCategory({ ...selectedCategory, description: e.target.value })
// // //                 }
// // //                 required
// // //               />
// // //               <Input
// // //                 placeholder="Thumbnail URL"
// // //                 value={selectedCategory.thumbnail}
// // //                 onChange={(e) =>
// // //                   setSelectedCategory({ ...selectedCategory, thumbnail: e.target.value })
// // //                 }
// // //                 required
// // //               />
// // //               <DialogFooter>
// // //                 <Button type="submit" className="bg-blue-600 text-white">
// // //                   Update Category
// // //                 </Button>
// // //               </DialogFooter>
// // //             </form>
// // //           </DialogContent>
// // //         </Dialog>
// // //       )}
// // //     </div>
// // //   );
// // // }










//File: ./src/components/CategoryTable/CategoryTable.js

"use client"

import { useEffect, useState, useMemo } from "react"
import axios from "axios"
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
  DropdownMenuSeparator,
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
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function CategoryDataTable() {
  const [categories, setCategories] = useState([])
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})
  const [globalFilter, setGlobalFilter] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/categories")
      setCategories(response.data.categories)
    } catch (error) {
      console.error("Error fetching categories:", error.message)
    }
  }

  const handleCategoryToggle = async (id, isActive) => {
    try {
      await axios.put(`/api/categories/${id}`, { isActive })
      fetchCategories()
    } catch (error) {
      console.error("Error toggling category:", error.response?.data || error.message)
    }
  }

  const handleEditClick = (category) => {
    setSelectedCategory(category)
    setIsEditDialogOpen(true)
  }

  const handleCategoryUpdate = async (event) => {
    event.preventDefault()
    try {
      await axios.put(`/api/categories/${selectedCategory._id}`, selectedCategory)
      fetchCategories()
      setIsEditDialogOpen(false)
    } catch (error) {
      console.error("Error updating category:", error.response?.data || error.message)
    }
  }

  const handleDeleteClick = async (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`/api/categories/${id}`)
        fetchCategories()
      } catch (error) {
        console.error("Error deleting category:", error.response?.data || error.message)
      }
    }
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
        accessorKey: "title",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center gap-2 text-lg font-semibold text-gray-800"
            >
              Category Name
              <ArrowUpDown className="ml-2 h-4 w-4 text-gray-600" />
            </Button>
          )
        },
        cell: ({ row }) => <div className="text-sm text-gray-800">{row.getValue("title")}</div>,
      },
      {
        accessorKey: "thumbnail",
        header: "Image",
        cell: ({ row }) => (
          <img
            src={row.getValue("thumbnail")}
            alt={row.getValue("title")}
            className="w-16 h-16 rounded-lg shadow-lg transition-all transform hover:scale-105"
          />
        ),
      },
      {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => (
          <div className="text-sm text-gray-600">
            {truncateDescription(row.getValue("description"))}
          </div>
        ),
      },
      {
        accessorKey: "isActive",
        header: "Status",
        cell: ({ row }) => (
          <div className="flex items-center space-x-2">
            <span className={`text-sm ${row.getValue("isActive") ? "text-green-500" : "text-red-500"}`}>
              {row.getValue("isActive") ? "Active" : "Inactive"}
            </span>
            <Switch
              checked={row.getValue("isActive")}
              onCheckedChange={() => handleCategoryToggle(row.original._id, !row.getValue("isActive"))}
              className="bg-gray-300"
            />
          </div>
        ),
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const category = row.original

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0 text-gray-600">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44 bg-white shadow-xl rounded-lg">
                <DropdownMenuLabel className="text-gray-700 font-semibold">Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => handleEditClick(category)} className="text-blue-600 hover:text-blue-800">
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDeleteClick(category._id)} className="text-red-600 hover:text-red-800">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
    ],
    []
  )

  const truncateDescription = (description) => {
    const words = description.split(" ")
    return words.length > 25 ? words.slice(0, 25).join(" ") + "..." : description
  }

  const table = useReactTable({
    data: categories,
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
    <div className="min-h-screen mx-10 bg-gray-50 p-6 rounded-xl shadow-2xl">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search categories..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm border border-gray-300 p-2 rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto text-gray-600 hover:text-gray-800">
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
                    className="capitalize text-gray-600"
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
      <Table className="mt-6">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-blue-100">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="p-4 text-lg text-gray-700">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="border-b border-gray-200 hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="p-4">{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center text-gray-500">
                No categories found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>


      <div className="flex items-center justify-end space-x-2 py-4">
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

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCategoryUpdate} className="space-y-4">
            <Input
              placeholder="Title"
              value={selectedCategory?.title ?? ""}
              onChange={(e) =>
                setSelectedCategory({ ...selectedCategory, title: e.target.value })
              }
              required
            />
            <Input
              placeholder="Description"
              value={selectedCategory?.description ?? ""}
              onChange={(e) =>
                setSelectedCategory({ ...selectedCategory, description: e.target.value })
              }
              required
            />
            <Input
              placeholder="Thumbnail URL"
              value={selectedCategory?.thumbnail ?? ""}
              onChange={(e) =>
                setSelectedCategory({ ...selectedCategory, thumbnail: e.target.value })
              }
              required
            />
            <DialogFooter>
              <Button type="submit" className="bg-blue-600 text-white">
                Update Category
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
