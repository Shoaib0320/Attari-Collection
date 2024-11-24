// 'use client';

// import { useEffect, useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { DollarSign, ShoppingCart, Package, MessageSquare, Users } from 'lucide-react';

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

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
//       {stats.map((stat, index) => (
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
//             {stat.change !== "N/A" && (
//               <p className="text-xs text-gray-400">
//                 <span className={stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}>
//                   {stat.change}
//                 </span>{" "}
//                 from last month
//               </p>
//             )}
//           </CardContent>
//         </Card>
//       ))}
//     </div>
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
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
