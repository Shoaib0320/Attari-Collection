// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { DollarSign, ShoppingCart, Package, MessageSquare, Users } from 'lucide-react';

// // export default function Dashboard() {
// //   const [stats, setStats] = useState([
// //     { title: "Total Revenue", value: "$0", icon: DollarSign, change: "N/A" },
// //     { title: "Total Orders", value: "0", icon: ShoppingCart, change: "N/A" },
// //     { title: "Total Products", value: "0", icon: Package, change: "N/A" },
// //     { title: "Total Feedbacks", value: "0", icon: MessageSquare, change: "N/A" },
// //     { title: "Total Users", value: "0", icon: Users, change: "N/A" },
// //   ]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchDashboardStats = async () => {
// //       try {
// //         setIsLoading(true);
// //         const response = await fetch('/api/stats');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch dashboard stats');
// //         }
// //         const data = await response.json();
// //         console.log('Fetched data:', data);

// //         setStats([
// //           { 
// //             title: "Total Revenue", 
// //             value: `$${data.totalRevenue.toFixed(2)}`, 
// //             icon: DollarSign, 
// //             change: "N/A" 
// //           },
// //           { 
// //             title: "Total Users", 
// //             value: data.totalUsers.toString(), 
// //             icon: Users, 
// //             change: "N/A" 
// //           },
// //           { 
// //             title: "Total Orders", 
// //             value: data.totalOrders.toString(), 
// //             icon: ShoppingCart, 
// //             change: "N/A" 
// //           },
// //           { 
// //             title: "Total Products", 
// //             value: data.totalProducts.toString(), 
// //             icon: Package, 
// //             change: "N/A" 
// //           },
// //           { 
// //             title: "Total Products Feedbacks", 
// //             value: (data.totalProductFeedbacks).toString(), 
// //             icon: MessageSquare, 
// //             change: "N/A" 
// //           },
// //           { 
// //             title: "Total Store Feedbacks", 
// //             value: (data.totalStoreFeedbacks).toString(), 
// //             icon: MessageSquare, 
// //             change: "N/A" 
// //           },
// //         ]);
// //         setIsLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching dashboard stats:', error);
// //         setError(error.message);
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchDashboardStats();
// //   }, []);

// //   if (isLoading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
// //       {stats.map((stat, index) => (
// //         <Card
// //           key={index}
// //           className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 rounded-lg"
// //         >
// //           <CardHeader className="flex flex-row items-center justify-between pb-3">
// //             <CardTitle className="text-lg font-medium text-gray-300">{stat.title}</CardTitle>
// //             <stat.icon className="h-6 w-6 text-indigo-400" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-3xl font-extrabold text-gray-100">{stat.value}</div>
// //             {stat.change !== "N/A" && (
// //               <p className="text-sm text-gray-400 mt-2">
// //                 <span className={stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}>
// //                   {stat.change}
// //                 </span>{" "}
// //                 from last month
// //               </p>
// //             )}
// //           </CardContent>
// //         </Card>
// //       ))}
// //     </div>
// //   );
// // }








// 'use client';

// import { useEffect, useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { DollarSign, ShoppingCart, Package, MessageSquare, Users } from 'lucide-react';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// export default function Dashboard() {
//   const [stats, setStats] = useState([
//     { title: "Total Revenue", value: "$0", icon: DollarSign, change: "N/A" },
//     { title: "Total Orders", value: "0", icon: ShoppingCart, change: "N/A" },
//     { title: "Total Products", value: "0", icon: Package, change: "N/A" },
//     { title: "Total Feedbacks", value: "0", icon: MessageSquare, change: "N/A" },
//     { title: "Total Users", value: "0", icon: Users, change: "N/A" },
//   ]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7)); // Default to current month
//   const [monthlyData, setMonthlyData] = useState(null);

//   useEffect(() => {
//     const fetchDashboardStats = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch('/api/stats');
//         if (!response.ok) {
//           throw new Error('Failed to fetch dashboard stats');
//         }
//         const data = await response.json();
//         console.log('Fetched data:', data);

//         setStats([
//           { 
//             title: "Total Revenue", 
//             value: `$${data.totalRevenue.toFixed(2)}`, 
//             icon: DollarSign, 
//             change: "N/A" 
//           },
//           { 
//             title: "Total Users", 
//             value: data.totalUsers.toString(), 
//             icon: Users, 
//             change: "N/A" 
//           },
//           { 
//             title: "Total Orders", 
//             value: data.totalOrders.toString(), 
//             icon: ShoppingCart, 
//             change: "N/A" 
//           },
//           { 
//             title: "Total Products", 
//             value: data.totalProducts.toString(), 
//             icon: Package, 
//             change: "N/A" 
//           },
//           { 
//             title: "Total Products Feedbacks", 
//             value: (data.totalProductFeedbacks).toString(), 
//             icon: MessageSquare, 
//             change: "N/A" 
//           },
//           { 
//             title: "Total Store Feedbacks", 
//             value: (data.totalStoreFeedbacks).toString(), 
//             icon: MessageSquare, 
//             change: "N/A" 
//           },
//         ]);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching dashboard stats:', error);
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };

//     fetchDashboardStats();
//   }, []);

//   useEffect(() => {
//     const fetchMonthlyData = async () => {
//       try {
//         setIsLoading(true);
//         setError(null);
//         const response = await fetch(`/api/monthly-stats?month=${selectedMonth}`);
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.error || 'Failed to fetch monthly stats');
//         }
//         const data = await response.json();
//         setMonthlyData(data);
//       } catch (error) {
//         console.error('Error fetching monthly stats:', error);
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchMonthlyData();
//   }, [selectedMonth]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="space-y-4">
//       {error && (
//         <Alert variant="destructive">
//           <AlertTitle>Error</AlertTitle>
//           <AlertDescription>{error}</AlertDescription>
//         </Alert>
//       )}
//       <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
//         <Card className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 rounded-lg col-span-2">
//           <CardHeader className="flex flex-row items-center justify-between pb-3">
//             <CardTitle className="text-lg font-medium text-gray-300">Monthly Revenue</CardTitle>
//             <DollarSign className="h-6 w-6 text-indigo-400" />
//           </CardHeader>
//           <CardContent>
//             <Select value={selectedMonth} onValueChange={setSelectedMonth}>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Select month" />
//               </SelectTrigger>
//               <SelectContent>
//                 {Array.from({ length: 12 }, (_, i) => {
//                   const date = new Date(new Date().getFullYear(), i, 1);
//                   return (
//                     <SelectItem key={i} value={date.toISOString().slice(0, 7)}>
//                       {date.toLocaleString('default', { month: 'long' })}
//                     </SelectItem>
//                   );
//                 })}
//               </SelectContent>
//             </Select>
//             {monthlyData && (
//               <div className="mt-4">
//                 <div className="text-3xl font-extrabold text-gray-100">${monthlyData.totalRevenue?.toFixed(2) || '0.00'}</div>
//                 <div className="text-sm text-gray-400 mt-2">
//                   Total Orders: {monthlyData.totalOrders || 0}
//                 </div>
//                 <div className="text-sm text-gray-400">
//                   Pending: {monthlyData.pendingOrders || 0} | Delivered: {monthlyData.deliveredOrders || 0} | Cancelled: {monthlyData.cancelledOrders || 0}
//                 </div>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//         {stats.slice(1).map((stat, index) => (
//           <Card
//             key={index}
//             className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 rounded-lg"
//           >
//             <CardHeader className="flex flex-row items-center justify-between pb-3">
//               <CardTitle className="text-lg font-medium text-gray-300">{stat.title}</CardTitle>
//               <stat.icon className="h-6 w-6 text-indigo-400" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-3xl font-extrabold text-gray-100">{stat.value}</div>
//               {stat.change !== "N/A" && (
//                 <p className="text-sm text-gray-400 mt-2">
//                   <span className={stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}>
//                     {stat.change}
//                   </span>{" "}
//                   from last month
//                 </p>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Package, MessageSquare, Users } from 'lucide-react';
import MonthlyRevenueCard from '../components/MonthlyRevenueCard';

export default function Dashboard() {
  const [stats, setStats] = useState([
    { title: "Total Users", value: "0", icon: Users, change: "N/A" },
    { title: "Total Orders", value: "0", icon: ShoppingCart, change: "N/A" },
    { title: "Total Products", value: "0", icon: Package, change: "N/A" },
    { title: "Total Products Feedbacks", value: "0", icon: MessageSquare, change: "N/A" },
    { title: "Total Store Feedbacks", value: "0", icon: MessageSquare, change: "N/A" },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard stats');
        }
        const data = await response.json();
        console.log('Fetched data:', data);

        setStats([
          { 
            title: "Total Users", 
            value: data.totalUsers.toString(), 
            icon: Users, 
            change: "N/A" 
          },
          { 
            title: "Total Orders", 
            value: data.totalOrders.toString(), 
            icon: ShoppingCart, 
            change: "N/A" 
          },
          { 
            title: "Total Products", 
            value: data.totalProducts.toString(), 
            icon: Package, 
            change: "N/A" 
          },
          { 
            title: "Total Products Feedbacks", 
            value: (data.totalProductFeedbacks).toString(), 
            icon: MessageSquare, 
            change: "N/A" 
          },
          { 
            title: "Total Store Feedbacks", 
            value: (data.totalStoreFeedbacks).toString(), 
            icon: MessageSquare, 
            change: "N/A" 
          },
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <MonthlyRevenueCard />
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 rounded-lg"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg font-medium text-gray-300">{stat.title}</CardTitle>
            <stat.icon className="h-6 w-6 text-indigo-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-gray-100">{stat.value}</div>
            {stat.change !== "N/A" && (
              <p className="text-sm text-gray-400 mt-2">
                <span className={stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}>
                  {stat.change}
                </span>{" "}
                from last month
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

