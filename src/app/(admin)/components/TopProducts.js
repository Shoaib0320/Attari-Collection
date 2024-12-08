// // // // 'use client'

// // // // import { useState, useEffect } from 'react'
// // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // // // import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts"
// // // // import { getTopProducts } from '@/actions/getTopProducts'

// // // // export default function TopProducts() {
// // // //   const [data, setData] = useState([])
// // // //   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1) // Default to current month

// // // //   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

// // // //   useEffect(() => {
// // // //     async function fetchData() {
// // // //       const topProducts = await getTopProducts(selectedMonth) // Pass selectedMonth to fetch data
// // // //       console.log(`Fetched Top Products for Month ${selectedMonth}:`, topProducts)
// // // //       setData(topProducts)
// // // //     }
// // // //     fetchData()
// // // //   }, [selectedMonth]) // Re-fetch when selectedMonth changes

// // // //   // Month Options
// // // //   const months = [
// // // //     "January", "February", "March", "April", "May", "June",
// // // //     "July", "August", "September", "October", "November", "December"
// // // //   ]

// // // //   const handleMonthChange = (event) => {
// // // //     setSelectedMonth(parseInt(event.target.value))
// // // //   }

// // // //   return (
// // // //     <Card>
// // // //       <CardHeader>
// // // //         <CardTitle className={'text-center'}>Top Products</CardTitle>
// // // //       </CardHeader>
// // // //       <CardContent>
// // // //         <div style={{ marginBottom: "1rem" }}>
// // // //           <label htmlFor="month-select">Select Month: </label>
// // // //           <select
// // // //             id="month-select"
// // // //             value={selectedMonth}
// // // //             onChange={handleMonthChange}
// // // //             className="bg-white border border-gray-300 text-gray-700 rounded-lg p-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
// // // //           >
// // // //             {months.map((month, index) => (
// // // //               <option key={index} value={index + 1}>
// // // //                 {month}
// // // //               </option>
// // // //             ))}
// // // //           </select>
// // // //         </div>
// // // //         <ResponsiveContainer width="100%" height={400}>
// // // //           <PieChart>
// // // //             <Pie
// // // //               data={data}
// // // //               cx="50%"
// // // //               cy="50%"
// // // //               labelLine={false}
// // // //               outerRadius={80}
// // // //               fill="#8884d8"
// // // //               dataKey="value"
// // // //             >
// // // //               {data.map((entry, index) => (
// // // //                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // //               ))}

// // // //             </Pie>
// // // //             <Legend />
// // // //           </PieChart>
// // // //           {/* <div>
// // // //           {data.map((entry, index) => (
// // // //             <span
// // // //               key={`label-${index}`}
// // // //               className="inline-flex items-center px-2 py-1 text-xs font-medium leading-4 text-white rounded-full"
// // // //               style={{ backgroundColor: COLORS[index % COLORS.length] }}
// // // //             >
// // // //               {entry.value}
// // // //             </span>
// // // //           ))}
// // // //         </div> */}
// // // //         </ResponsiveContainer>
// // // //       </CardContent>
// // // //     </Card>
// // // //   )
// // // // }



// // // "use client"

// // // import { useState, useEffect } from 'react'
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // // import { PieChart, Pie, Cell } from "recharts"
// // // import { getTopProducts } from '@/actions/getTopProducts'
// // // import { ChartContainer, ChartLegend } from "@/components/ui/chart"

// // // export default function TopProducts() {
// // //   const [data, setData] = useState([])
// // //   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)

// // //   useEffect(() => {
// // //     async function fetchData() {
// // //       const topProducts = await getTopProducts(selectedMonth)
// // //       setData(topProducts)
// // //     }
// // //     fetchData()
// // //   }, [selectedMonth])

// // //   const months = [
// // //     "January", "February", "March", "April", "May", "June",
// // //     "July", "August", "September", "October", "November", "December"
// // //   ]

// // //   const handleMonthChange = (event) => {
// // //     setSelectedMonth(parseInt(event.target.value))
// // //   }

// // //   return (
// // //     <Card>
// // //       <CardHeader>
// // //         <CardTitle className="text-center">Top Products</CardTitle>
// // //       </CardHeader>
// // //       <CardContent>
// // //         <div className="mb-4">
// // //           <label htmlFor="month-select" className="mr-2">Select Month: </label>
// // //           <select
// // //             id="month-select"
// // //             value={selectedMonth}
// // //             onChange={handleMonthChange}
// // //             className="bg-background border border-input text-foreground rounded-md p-2"
// // //           >
// // //             {months.map((month, index) => (
// // //               <option key={index} value={index + 1}>
// // //                 {month}
// // //               </option>
// // //             ))}
// // //           </select>
// // //         </div>
// // //         <ChartContainer
// // //           config={{
// // //             product1: { label: "Product 1", color: "hsl(var(--chart-1))" },
// // //             product2: { label: "Product 2", color: "hsl(var(--chart-2))" },
// // //             product3: { label: "Product 3", color: "hsl(var(--chart-3))" },
// // //             product4: { label: "Product 4", color: "hsl(var(--chart-4))" },
// // //           }}
// // //           className="h-[300px]"
// // //         >
// // //           <PieChart>
// // //             <Pie
// // //               data={data}
// // //               dataKey="value"
// // //               nameKey="name"
// // //               cx="50%"
// // //               cy="50%"
// // //               outerRadius={80}
// // //               fill="var(--chart-1)"
// // //             >
// // //               {data.map((entry, index) => (
// // //                 <Cell 
// // //                   key={`cell-${index}`} 
// // //                   fill={`var(--color-product${index + 1})`} 
// // //                 />
// // //               ))}
// // //             </Pie>
// // //             <ChartLegend />
// // //           </PieChart>
// // //         </ChartContainer>
// // //       </CardContent>
// // //     </Card>
// // //   )
// // // }







// // "use client"

// // import { useState, useEffect } from 'react'
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // import { PieChart, Pie, Cell, Tooltip, Label } from "recharts"
// // import { getTopProducts } from '@/actions/getTopProducts'
// // import { ChartContainer, ChartLegend } from "@/components/ui/chart"

// // const CustomTooltip = ({ active, payload }) => {
// //   if (active && payload && payload.length) {
// //     return (
// //       <div className="bg-background border border-input p-2 rounded-md shadow-md">
// //         <p className="text-foreground">{`${payload[0].name}: ${payload[0].value} orders`}</p>
// //       </div>
// //     );
// //   }
// //   return null;
// // };

// // export default function TopProducts() {
// //   const [data, setData] = useState([])
// //   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)

// //   useEffect(() => {
// //     async function fetchData() {
// //       const topProducts = await getTopProducts(selectedMonth)
// //       setData(topProducts)
// //     }
// //     fetchData()
// //   }, [selectedMonth])

// //   const months = [
// //     "January", "February", "March", "April", "May", "June",
// //     "July", "August", "September", "October", "November", "December"
// //   ]

// //   const handleMonthChange = (event) => {
// //     setSelectedMonth(parseInt(event.target.value))
// //   }

// //   return (
// //     <Card>
// //       <CardHeader>
// //         <CardTitle className="text-center">Top Products</CardTitle>
// //       </CardHeader>
// //       <CardContent>
// //         <div className="mb-4">
// //           <label htmlFor="month-select" className="mr-2">Select Month: </label>
// //           <select
// //             id="month-select"
// //             value={selectedMonth}
// //             onChange={handleMonthChange}
// //             className="bg-background border border-input text-foreground rounded-md p-2"
// //           >
// //             {months.map((month, index) => (
// //               <option key={index} value={index + 1}>
// //                 {month}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //         <ChartContainer
// //           config={{
// //             product1: { label: "Product 1", color: "hsl(var(--chart-1))" },
// //             product2: { label: "Product 2", color: "hsl(var(--chart-2))" },
// //             product3: { label: "Product 3", color: "hsl(var(--chart-3))" },
// //             product4: { label: "Product 4", color: "hsl(var(--chart-4))" },
// //           }}
// //           className="h-[300px]"
// //         >
// //           <PieChart>
// //             <Pie
// //               data={data}
// //               dataKey="value"
// //               nameKey="name"
// //               cx="50%"
// //               cy="50%"
// //               outerRadius={80}
// //               fill="var(--chart-1)"
// //               label
// //             >
// //               {data.map((entry, index) => (
// //                 <Cell 
// //                   key={`cell-${index}`} 
// //                   fill={`var(--color-product${index + 1})`} 
// //                   className="group"
// //                 />
// //               ))}
// //               <Label
// //                 position="center"
// //                 content={({ viewBox: { cx, cy } }) => (
// //                   <text 
// //                     x={cx} 
// //                     y={cy} 
// //                     fill="var(--foreground)" 
// //                     textAnchor="middle" 
// //                     dominantBaseline="central"
// //                     className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// //                   >
// //                     Total Orders
// //                   </text>
// //                 )}
// //               />
// //             </Pie>
// //             <Tooltip content={<CustomTooltip />} />
// //             <ChartLegend />
// //           </PieChart>
// //         </ChartContainer>
// //       </CardContent>
// //     </Card>
// //   )
// // }








// "use client"

// import { useState, useEffect } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { PieChart, Pie, Cell, Tooltip, Label } from "recharts"
// import { getTopProducts } from '@/actions/getTopProducts'
// import { ChartContainer, ChartLegend } from "@/components/ui/chart"

// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-background border border-input p-2 rounded-md shadow-md">
//         <p className="text-foreground">{`${payload[0].name}: ${payload[0].value} orders`}</p>
//       </div>
//     );
//   }
//   return null;
// };

// export default function TopProducts() {
//   const [data, setData] = useState([])
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)

//   useEffect(() => {
//     async function fetchData() {
//       const topProducts = await getTopProducts(selectedMonth)
//       setData(topProducts)
//     }
//     fetchData()
//   }, [selectedMonth])

//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ]

//   const handleMonthChange = (event) => {
//     setSelectedMonth(parseInt(event.target.value))
//   }

//   return (
//     <Card className="w-full max-w-4xl mx-auto"> {/* Ensure card is responsive */}
//       <CardHeader>
//         <CardTitle className="text-center">Top Products</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="mb-4">
//           <label htmlFor="month-select" className="mr-2">Select Month: </label>
//           <select
//             id="month-select"
//             value={selectedMonth}
//             onChange={handleMonthChange}
//             className="bg-background border border-input text-foreground rounded-md p-2 w-full sm:w-auto" 
//           >
//             {months.map((month, index) => (
//               <option key={index} value={index + 1}>
//                 {month}
//               </option>
//             ))}
//           </select>
//         </div>
//         <ChartContainer
//           config={{
//             product1: { label: "Product 1", color: "hsl(var(--chart-1))" },
//             product2: { label: "Product 2", color: "hsl(var(--chart-2))" },
//             product3: { label: "Product 3", color: "hsl(var(--chart-3))" },
//             product4: { label: "Product 4", color: "hsl(var(--chart-4))" },
//           }}
//           className="h-[300px] sm:h-[400px] lg:h-[500px]" 
//         >
//           <PieChart>
//             <Pie
//               data={data}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius="80%"
//               fill="var(--chart-1)"
//               label
//             >
//               {data.map((entry, index) => (
//                 <Cell 
//                   key={`cell-${index}`} 
//                   fill={`var(--color-product${index + 1})`} 
//                   className="group"
//                 />
//               ))}
//               <Label
//                 position="center"
//                 content={({ viewBox: { cx, cy } }) => (
//                   <text 
//                     x={cx} 
//                     y={cy} 
//                     fill="var(--foreground)" 
//                     textAnchor="middle" 
//                     dominantBaseline="central"
//                     className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   >
//                     Total Orders
//                   </text>
//                 )}
//               />
//             </Pie>
//             <Tooltip content={<CustomTooltip />} />
//             <ChartLegend />
//           </PieChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   )
// }








"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, Tooltip, Label } from "recharts"
import { getTopProducts } from '@/actions/getTopProducts'
import { ChartContainer, ChartLegend } from "@/components/ui/chart"

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-input p-2 rounded-md shadow-md">
        <p className="text-foreground">{`${payload[0].name}: ${payload[0].value} orders`}</p>
      </div>
    );
  }
  return null;
};

export default function TopProducts() {
  const [data, setData] = useState([])
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)

  useEffect(() => {
    async function fetchData() {
      const topProducts = await getTopProducts(selectedMonth)
      setData(topProducts)
    }
    fetchData()
  }, [selectedMonth])

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value))
  }

  return (
    <Card className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8"> {/* Adjust padding for responsiveness */}
      <CardHeader>
        <div className='flex justify-between items-center'>
          <CardTitle
            className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold"
          >
            Top Products
          </CardTitle>
          <div className="mb-6 sm:mb-8">
            <label htmlFor="month-select" className="mr-2 text-sm sm:text-base font-medium">Select Month: </label>
            <select
              id="month-select"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="bg-background border border-input text-foreground rounded-md p-2 w-full sm:w-auto text-sm sm:text-base"
            >
              {months.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent className='flex justify-center items-center'>
        <ChartContainer
          config={{
            product1: { label: "Product 1", color: "hsl(var(--chart-1))" },
            product2: { label: "Product 2", color: "hsl(var(--chart-2))" },
            product3: { label: "Product 3", color: "hsl(var(--chart-3))" },
            product4: { label: "Product 4", color: "hsl(var(--chart-4))" },
          }}
          className="h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[600px] "
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="80%"
              fill="var(--chart-1)"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`var(--color-product${index + 1})`}
                  className="group"
                />
              ))}
              <Label
                position="center"
                content={({ viewBox: { cx, cy } }) => (
                  <text
                    x={cx}
                    y={cy}
                    fill="var(--foreground)"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Total Orders
                  </text>
                )}
              />
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <ChartLegend />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
