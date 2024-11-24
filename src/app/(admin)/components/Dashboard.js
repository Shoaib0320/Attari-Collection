// // "use client";

// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";

// // export default function Dashboard() {
// //   const stats = [
// //     { title: "Total Revenue", value: "$45,231.89", icon: DollarSign, change: "+20.1%" },
// //     { title: "Orders", value: "1,234", icon: ShoppingCart, change: "+12.5%" },
// //     { title: "Customers", value: "5,678", icon: Users, change: "+3.2%" },
// //     { title: "Conversion Rate", value: "3.75%", icon: TrendingUp, change: "+0.5%" },
// //   ];

// //   return (
// //     <>
// //       {stats.map((stat, index) => (
// //         <Card
// //           key={index}
// //           className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
// //         >
// //           <CardHeader className="flex flex-row items-center justify-between pb-2">
// //             <CardTitle className="text-sm font-medium text-gray-300">{stat.title}</CardTitle>
// //             <stat.icon className="h-5 w-5 text-indigo-400" />
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-2xl font-extrabold text-gray-100">{stat.value}</div>
// //             <p className="text-xs text-gray-400">
// //               <span
// //                 className={
// //                   stat.change.startsWith("+")
// //                     ? "text-green-400"
// //                     : "text-red-400"
// //                 }
// //               >
// //                 {stat.change}
// //               </span>{" "}
// //               from last month
// //             </p>
// //           </CardContent>
// //         </Card>
// //       ))}
// //     </>
// //   );
// // }






// "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react";

// export default function Dashboard() {
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Simulating an API request
//         const response = await fetch('http://localhost:3000/api/stats');
//         const result = await response.json();
//         setStats(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); 

//   if (!stats) {
//     return <p>Loading...</p>;
//   }

//   const data = [
//     { title: "Total Products", value: stats.totalProducts, icon: DollarSign, change: "+15.0%" },
//     { title: "Total Orders", value: stats.totalOrders, icon: ShoppingCart, change: "+10.5%" },
//     { title: "Total Users", value: stats.totalUsers, icon: Users, change: "+5.3%" },
//     { title: "Total Feedbacks", value: stats.totalFeedbacks, icon: TrendingUp, change: "+2.8%" },
//   ];

//   return (
//     <>
//       {data.map((stat, index) => (
//         <Card
//           key={index}
//           className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
//         >
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm font-medium text-gray-300">{stat.title}</CardTitle>
//             <stat.icon className="h-5 w-5 text-indigo-400" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-extrabold text-gray-100">{stat.value}</div>
//             <p className="text-xs text-gray-400">
//               <span
//                 className={
//                   stat.change.startsWith("+")
//                     ? "text-green-400"
//                     : "text-red-400"
//                 }
//               >
//                 {stat.change}
//               </span>{" "}
//               from last month
//             </p>
//           </CardContent>
//         </Card>
//       ))}
//     </>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingCart, Package, MessageSquare, Users } from 'lucide-react';

export default function Dashboard() {
  const [stats, setStats] = useState([
    { title: "Total Revenue", value: "$0", icon: DollarSign, change: "N/A" },
    { title: "Total Orders", value: "0", icon: ShoppingCart, change: "N/A" },
    { title: "Total Products", value: "0", icon: Package, change: "N/A" },
    { title: "Total Feedbacks", value: "0", icon: MessageSquare, change: "N/A" },
    { title: "Total Users", value: "0", icon: Users, change: "N/A" },
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
            title: "Total Revenue", 
            value: `$${data.totalRevenue.toFixed(2)}`, 
            icon: DollarSign, 
            change: "N/A" 
          },
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
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">{stat.title}</CardTitle>
            <stat.icon className="h-5 w-5 text-indigo-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-extrabold text-gray-100">{stat.value}</div>
            {stat.change !== "N/A" && (
              <p className="text-xs text-gray-400">
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

