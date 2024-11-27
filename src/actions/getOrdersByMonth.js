'use server'

import { connectDB } from '@/lib/db/connectDB'
import { OrdersModel } from '@/lib/models/OrdersModal'

export async function getOrdersByMonth() {
  await connectDB()

  const ordersByMonth = await OrdersModel.aggregate([
    {
      $group: {
        _id: { $month: "$createdAt" },
        count: { $sum: 1 }
      }
    },
    {
      $project: {
        month: "$_id",
        count: 1,
        _id: 0
      }
    },
    {
      $sort: { month: 1 }
    }
  ])

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]

  const formattedData = monthNames.map((name, index) => ({
    name,
    orders: ordersByMonth.find(item => item.month === index + 1)?.count || 0
  }))

  return formattedData
}

