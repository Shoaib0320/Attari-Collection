// // "use client";

// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// // export default function SalesSummary() {
// //   const data = [
// //     { name: "Jan", sales: 4000, revenue: 2400 },
// //     { name: "Feb", sales: 3000, revenue: 1398 },
// //     { name: "Mar", sales: 2000, revenue: 9800 },
// //     { name: "Apr", sales: 2780, revenue: 3908 },
// //     { name: "May", sales: 1890, revenue: 4800 },
// //     { name: "Jun", sales: 2390, revenue: 3800 },
// //     { name: "Jul", sales: 3490, revenue: 4300 },
// //     { name: "Aug", sales: 4000, revenue: 2400 },
// //     { name: "Sep", sales: 3000, revenue: 1398 },
// //     { name: "Oct", sales: 2000, revenue: 19800 },
// //     { name: "Nov", sales: 2780, revenue: 3908 },
// //     { name: "Dec", sales: 1890, revenue: 4800 },
// //   ];

// //   return (
// //     <Card className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 shadow-xl hover:shadow-2xl">
// //       <CardHeader>
// //         <CardTitle className="text-gray-100">Sales Summary</CardTitle>
// //       </CardHeader>
// //       <CardContent>
// //         <ResponsiveContainer width="100%" height={300}>
// //           <LineChart
// //             data={data}
// //             margin={{
// //               top: 5,
// //               right: 30,
// //               left: 20,
// //               bottom: 5,
// //             }}
// //           >
// //             <CartesianGrid strokeDasharray="3 3" stroke="#444" />
// //             <XAxis dataKey="name" stroke="#ddd" />
// //             <YAxis stroke="#ddd" />
// //             <Tooltip />
// //             <Legend />
// //             <Line type="monotone" dataKey="sales" stroke="#82ca9d" activeDot={{ r: 8 }} />
// //             <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
// //           </LineChart>
// //         </ResponsiveContainer>
// //       </CardContent>
// //     </Card>
// //   );
// // }










// 'use client'

// import { useEffect, useState } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
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
//           className="h-[300px]"
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
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            orders: {
              label: "Orders",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="min-h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[500px]" // Adjust height based on screen size
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="var(--color-orders)"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
