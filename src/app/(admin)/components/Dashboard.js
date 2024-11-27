'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Package, MessageSquare, Users } from 'lucide-react';
import MonthlyRevenueCard from '../components/MonthlyRevenueCard';

const SkeletonCard = ({ className = "" }) => (
  <Card className={`bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-xl rounded-lg ${className}`}>
    <CardHeader className="flex flex-row items-center justify-between pb-3">
      <div className="w-1/2 h-5 bg-gray-600 rounded-md animate-pulse"></div>
      <div className="h-6 w-6 bg-gray-600 rounded-full animate-pulse"></div>
    </CardHeader>
    <CardContent>
      <div className="h-8 w-1/3 bg-gray-600 rounded-md animate-pulse mb-3"></div>
      <div className="h-4 w-1/2 bg-gray-700 rounded-md animate-pulse"></div>
    </CardContent>
  </Card>
);

function DashboardSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Skeleton for Monthly Revenue */}
      <SkeletonCard className="col-span-2" />

      {/* Skeleton for stats */}
      {[...Array(5)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}

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
    return DashboardSkeleton();
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

