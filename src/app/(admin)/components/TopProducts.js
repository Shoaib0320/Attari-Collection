'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts"
import { getTopProducts } from '@/actions/getTopProducts'

export default function TopProducts() {
  const [data, setData] = useState([])
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1) // Default to current month

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  useEffect(() => {
    async function fetchData() {
      const topProducts = await getTopProducts(selectedMonth) // Pass selectedMonth to fetch data
      console.log(`Fetched Top Products for Month ${selectedMonth}:`, topProducts)
      setData(topProducts)
    }
    fetchData()
  }, [selectedMonth]) // Re-fetch when selectedMonth changes

  // Month Options
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className={'text-center'}>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="month-select">Select Month: </label>
          <select
            id="month-select"
            value={selectedMonth}
            onChange={handleMonthChange}
            className="bg-white border border-gray-300 text-gray-700 rounded-lg p-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            {months.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}

            </Pie>
            <Legend />
          </PieChart>
          {/* <div>
          {data.map((entry, index) => (
            <span
              key={`label-${index}`}
              className="inline-flex items-center px-2 py-1 text-xs font-medium leading-4 text-white rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            >
              {entry.value}
            </span>
          ))}
        </div> */}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}



// 'use client'

// import { useState, useEffect } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts"
// import { getTopProducts } from '@/actions/getTopProducts'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// export default function TopProducts() {
//   const [data, setData] = useState([])
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1) // Default to current month

//   const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]

//   useEffect(() => {
//     async function fetchData() {
//       const topProducts = await getTopProducts(selectedMonth)
//       console.log(`Fetched Top Products for Month ${selectedMonth}:`, topProducts)
//       setData(topProducts)
//     }
//     fetchData()
//   }, [selectedMonth])

//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ]

//   const handleMonthChange = (value) => {
//     setSelectedMonth(parseInt(value))
//   }

//   const totalValue = data.reduce((sum, item) => sum + item.value, 0)

//   return (
//     <Card className="w-full max-w-4xl mx-auto overflow-x-auto">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-center">Top Products</CardTitle>
//       </CardHeader>
//       <CardContent className="p-6">
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//           <p className="text-lg font-semibold mb-2 sm:mb-0">
//             {months[selectedMonth - 1]} Overview
//           </p>
//           <Select onValueChange={handleMonthChange} defaultValue={selectedMonth.toString()}>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Select month" />
//             </SelectTrigger>
//             <SelectContent>
//               {months.map((month, index) => (
//                 <SelectItem key={index} value={(index + 1).toString()}>
//                   {month}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="w-full flex justify-center">
//           <div className="w-full md:w-[80%]">
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={data}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   outerRadius={100}
//                   fill="#8884d8"
//                   dataKey="value"
//                 >
//                   {data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Legend layout="horizontal" align="center" verticalAlign="bottom" />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {data.map((entry, index) => (
//             <div key={`summary-${index}`} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
//               <span className="font-medium">{entry.name}</span>
//               <span
//                 className="px-2 py-1 text-xs font-semibold text-white rounded-full"
//                 style={{ backgroundColor: COLORS[index % COLORS.length] }}
//               >
//                 {((entry.value / totalValue) * 100).toFixed(1)}%
//               </span>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
