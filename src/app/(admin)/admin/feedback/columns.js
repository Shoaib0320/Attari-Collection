"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export const columns = [
  {
    accessorKey: "userId.firstName",
    header: "Name",
  },
  {
    accessorKey: "productId.title",
    header: "Product",
  },
  {
    accessorKey: "feedback",
    header: "Feedback",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const feedback = row.original

      return (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">View Details</Button>
          </SheetTrigger>
          <SheetContent className='overflow-y-auto'>
            <h2 className="text-lg font-bold">Feedback Details</h2>
            <div className="mt-4 space-y-2">
              <p className="flex justify-between">
                <strong>User Name:</strong>{" "}
                {feedback.userId.firstName} {feedback.userId.lastName}
              </p>
              <p className="flex justify-between">
                <strong>User Email:</strong>
                {feedback.userId.email}
              </p>
              <p className="flex justify-between gap-3">
                <strong>Product:</strong> {" "}
                {feedback.productId.title || "No Product"}
              </p>
              <p>
                <strong>Category:</strong> {feedback.productId.category.title}
              </p>
              <img
                src={feedback.productId.imageUrl}
                alt={feedback.productId.title}
                className="w-full max-h-64 object-cover mt-4 rounded"
              />
              <p>
                <strong>Feedback:</strong> {feedback.feedback}
              </p>
              <img src={feedback.imageUrl} alt={feedback.feedback} className="w-full max-h-64 object-cover mt-4 rounded" />
            </div>
          </SheetContent>
        </Sheet>
      )
    },
  },
]

