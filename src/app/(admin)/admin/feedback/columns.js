// 'use client'

// import { ColumnDef } from '@tanstack/react-table'
// import { Button } from '@/components/ui/button'
// import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
// import { Input } from '@/components/ui/input'
// import { useEffect } from 'react'

// export const columns = [
//   {
//     accessorKey: 'id',
//     header: 'ID',
//   },
//   {
//     accessorKey: 'userName',
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         >
//           User Name
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//   },
//   {
//     accessorKey: 'feedback',
//     header: 'Feedback',
//   },
//   {
//     id: 'actions',
//     cell: ({ row }) => {
//       const feedback = row.original

//       return (
//         <>
//          {/* <div className="flex items-center py-4">
//         <Input
//           placeholder="Filter orders..."
//           value={(table.getColumn("_id")?.getFilterValue()) ?? ""}
//           onChange={(event) =>
//             table.getColumn("_id")?.setFilterValue(event.target.value)
//           }
//           className="max-w-sm rounded-lg shadow-md"
//         />
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" className="ml-auto mx-auto rounded-lg shadow-md hover:shadow-lg">
//               Columns <ChevronDown className="ml-2 h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table
//               .getAllColumns()
//               .filter((column) => column.getCanHide())
//               .map((column) => (
//                 <DropdownMenuCheckboxItem
//                   key={column.id}
//                   checked={column.getIsVisible()}
//                   onCheckedChange={(value) => column.toggleVisibility(!!value)}
//                 >
//                   {column.id}
//                 </DropdownMenuCheckboxItem>
//               ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div> */}
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button variant="ghost">View Details</Button>
//           </SheetTrigger>
//           <SheetContent className='overflow-y-auto'>
//             <SheetHeader>
//               <SheetTitle>Feedback Details</SheetTitle>
//               <SheetDescription>
//                 Detailed information about the feedback
//               </SheetDescription>
//             </SheetHeader>
//             <div className="mt-4 space-y-4">
//               <div>
//                 <h3 className="font-semibold">User Information</h3>
//                 <p>Name: {feedback.userId?.firstName}</p>
//                 <p>Email: {feedback.email}</p>
//               </div>
//               <div>
//                 <h3 className="font-semibold">Product Information</h3>
//                 <p>Name: {feedback.title}</p>
//                 <p>Category: {feedback.category}</p>
//                 <img src={feedback.image} alt={feedback.title} className="mt-2 max-w-full h-auto" />
//               </div>
//               <div>
//                 <h3 className="font-semibold">Feedback</h3>
//                 <p>{feedback.feedback}</p>
//                 {feedback.imageUrl && (
//                   <img src={feedback.imageUrl} alt="Feedback Image" className="mt-2 max-w-full h-auto" />
//                 )}
//               </div>
//               <div>
//                 <h3 className="font-semibold">Date</h3>
//                 <p>{new Date(feedback.createdAt).toLocaleString()}</p>
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//         </>
//       )
//     },
//   },
// ]

'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'userName',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        User Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: 'feedback',
    header: 'Feedback',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const feedback = row.original;

      return (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">View Details</Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Feedback Details</SheetTitle>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">User Information</h3>
                <p>Name: {feedback.userName}</p>
                <p>Email: {feedback.email}</p>
                {feedback.picture && (
                  <img
                    src={feedback?.userId?.picture}
                    alt={feedback.userName}
                    className="mt-2 max-w-full h-auto rounded-full"
                  />
                )}
              </div>
              <div>
                <h3 className="font-semibold">Product Information</h3>
                <p>Name: {feedback.productName}</p>
                <p>Category: {feedback.category}</p>
                <p>Price: Rs. {feedback.price}</p>
                {feedback.feedbackImage && (
                  <img
                    src={feedback.feedbackImage}
                    alt={feedback.productName}
                    className="mt-2 max-w-full h-auto"
                  />
                )}
              </div>
              <div>
                <h3 className="font-semibold">Feedback</h3>
                <p>{feedback.feedback}</p>
                {feedback.imageUrl && (
                  <img
                    src={feedback.imageUrl}
                    alt="Feedback Image"
                    className="mt-2 max-w-full h-auto"
                  />
                )}
              </div>
              <div>
                <h3 className="font-semibold">Date</h3>
                <p>{new Date(feedback.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      );
    },
  },
];
