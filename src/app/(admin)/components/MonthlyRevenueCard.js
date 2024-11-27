'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, ShoppingCart, Package, XCircle } from 'lucide-react';

export default function MonthlyRevenueCard() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [monthlyStats, setMonthlyStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMonthlyStats = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/monthly-stats?month=${selectedMonth}`);
        if (!response.ok) {
          throw new Error('Failed to fetch monthly stats');
        }
        const data = await response.json();
        setMonthlyStats(data);
      } catch (error) {
        console.error('Error fetching monthly stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMonthlyStats();
  }, [selectedMonth]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <Card className="col-span-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-medium text-gray-300">Monthly Revenue</CardTitle>
        <Select value={selectedMonth.toString()} onValueChange={(value) => setSelectedMonth(parseInt(value))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent>
            {months.map((month, index) => (
              <SelectItem key={index + 1} value={(index + 1).toString()}>
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
      {isLoading ? (
          <div className="grid grid-cols-2 gap-4 py-3 animate-pulse">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="h-5 w-5 bg-gray-600 rounded-full"></div>
                <div>
                  <div className="w-24 h-3 bg-gray-600 rounded-md mb-2"></div>
                  <div className="w-16 h-5 bg-gray-700 rounded-md"></div>
                </div>
              </div>
            ))}
          </div>

        ) : monthlyStats ? (
          <div className="grid grid-cols-2 gap-4 py-3">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Total Earning</p>
                <p className="text-xl font-bold text-gray-100">PKR: {monthlyStats.totalAmount.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Total Orders</p>
                <p className="text-xl font-bold text-gray-100">{monthlyStats.totalOrders}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Delivered Orders</p>
                <p className="text-xl font-bold text-gray-100">{monthlyStats.deliveredOrders}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <XCircle className="h-5 w-5 text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Cancelled Orders</p>
                <p className="text-xl font-bold text-gray-100">{monthlyStats.cancelledOrders}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-400">No data available</div>
        )}
      </CardContent>
    </Card>
  );
}

