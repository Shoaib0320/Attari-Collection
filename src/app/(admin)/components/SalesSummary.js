// 'use client'

// import { useEffect, useState } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts"
// import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
// import { getOrdersByMonth } from '@/actions/getOrdersByMonth'

// export default function OrderSummary() {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     async function fetchData() {
//       const orderData = await getOrdersByMonth()
//       setData(orderData)
//     }
//     fetchData()
//   }, [])

//   return (
//     <Card className="w-full">
//       <CardHeader>
//         <CardTitle>Order Summary</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer
//           config={{
//             orders: {
//               label: "Orders",
//               color: "hsl(var(--chart-1))",
//             },
//           }}
//           className="min-h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[500px]" // Adjust height based on screen size
//         >
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <ChartTooltip content={<ChartTooltipContent />} />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="orders"
//                 stroke="var(--color-orders)"
//                 activeDot={{ r: 8 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   )
// }


'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { getOrdersByMonth } from '@/actions/getOrdersByMonth'

export default function OrderSummary() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const orderData = await getOrdersByMonth()
      setData(orderData)
    }
    fetchData()
  }, [])

  return (
    <div className="w-full p-4 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-xl">
      <Card className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-purple-800 dark:text-purple-300">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              orders: {
                label: "Orders",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="min-h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[500px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <defs>
                  <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="name" 
                  stroke="#888" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ strokeWidth: 0 }}
                />
                <YAxis 
                  stroke="#888" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ strokeWidth: 0 }}
                  tickFormatter={(value) => `${value}`}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  wrapperClassName="bg-white/90 dark:bg-gray-800/90 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 p-2"
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="url(#colorOrders)"
                  strokeWidth={3}
                  dot={{ fill: '#8884d8', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, strokeWidth: 2 }}
                  fillOpacity={1}
                  fill="url(#colorOrders)"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

