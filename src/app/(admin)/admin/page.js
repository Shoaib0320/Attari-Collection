// // // // // // import { auth } from "@/app/auth";
// // // // // // import AnalyticsChart from "@/components/BarChart/BarChart";
// // // // // // import { redirect } from "next/navigation";

// // // // // // export default async function Admin() {
// // // // // //   const session = await auth();
// // // // // //   if (!session && session?.user?.role != "admin") redirect("/");

// // // // // //   return (
// // // // // //     <div className="min-h-screen">
// // // // // //       <h1 className="font-bold text-3xl p-20 text-center">Admin</h1>
// // // // // //       <div className="min-h-screen">
// // // // // //         <AnalyticsChart />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }



import { redirect } from "next/navigation";
import Dashboard from "../components/Dashboard";
import TopProducts from "../components/TopProducts";
import SalesSummary from "../components/SalesSummary";
import { auth } from "@/app/auth";
import RecentOrders from "../components/RecentOrders";

export default async function Admin() {
  const session = await auth();
  // Uncomment to enable redirection if not admin
  if (!session || session?.user?.role !== "admin") redirect("/");

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100">
      <div className="p-8 space-y-8">
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold text-center bg-gray-300 text-transparent bg-clip-text">
          Admin Dashboard
        </h1>

        {/* Cards Section */}
        <div className="">
          <Dashboard />
          <br />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RecentOrders />
          <TopProducts />
          <div className="lg:col-span-3">
            <SalesSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
