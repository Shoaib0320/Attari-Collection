'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { ViewDetailsSheet } from './view-details-sheet'

export const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'userName',
    header: 'User Name',
  },
  {
    accessorKey: 'feedback',
    header: 'Feedback',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const feedback = row.original

      return (
        <ViewDetailsSheet feedback={feedback}>
          <Button variant="outline">View Details</Button>
        </ViewDetailsSheet>
      )
    },
  },
]