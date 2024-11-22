
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getFeedback } from '@/actions/productsFeedbackAction'
import { DataTable } from './data-Table'
import { columns } from './columns'

export default function FeedbackPage() {
  const [data, setData] = useState([])
  const router = useRouter()

  const loadFeedback = async () => {
    const feedback = await getFeedback()
    setData(feedback)
  }

  // Load feedback data on component mount
  useState(() => {
    loadFeedback()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

