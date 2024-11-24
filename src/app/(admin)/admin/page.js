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



// // // // import { redirect } from "next/navigation"
// // // // import DashboardOverview from "../components/DashboardOverview"
// // // // import RecentOrders from "../components/RecentOrders"
// // // // import TopSellingProducts from "../components/TopSellingProducts"
// // // // import RevenueChart from "../components/RevenueChart"
// // // // import { auth } from "@/app/auth"

// // // // export default async function Admin() {
// // // //   const session = await auth()
// // // //   // if (!session || session?.user?.role !== "admin") redirect("/")

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100">
// // // //       <div className="p-8">
// // // //         <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // // //           <DashboardOverview />
// // // //         </div>
// // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // // //           <RevenueChart />
// // // //           <RecentOrders />
// // // //         </div>
// // // //         <div className="mt-8">
// // // //           <TopSellingProducts />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // import { redirect } from "next/navigation"
// // import Dashboard from "../components/Dashboard"
// // import RecentOrders from "../components/RecentOrders"
// // import TopProducts from "../components/TopProducts"
// // import SalesSummary from "../components/SalesSummary"
// // import { auth } from "@/app/auth"
// // import { Header } from "./New-Components/Header"
// // import { Stats } from "./New-Components/Stats"
// // import { Charts } from "./New-Components/Charts"

// // export default async function Admin() {
// //   const session = await auth()
// //   // if (!session || session?.user?.role !== "admin") redirect("/")

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <div className="p-8">
// //         <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
// //         {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
// //         <div className="flex-1 ">
// //         <Header />
// //         <main className="p-6">
// //           <Stats />
// //           <div className="mt-6">
// //             <Charts />
// //           </div>
// //         </main>
// //       </div>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// //           <Dashboard />
// //       </div>
// //           {/* <RecentOrders /> */}
// //           <TopProducts />
// //           <div className="lg:col-span-3">
// //             <SalesSummary />
// //           </div>
// //         </div>
// //       </div>
// //     // </div>
// //   )
// // }








// import { redirect } from "next/navigation";
// import Dashboard from "../components/Dashboard";
// import RecentOrders from "../components/RecentOrders";
// import TopProducts from "../components/TopProducts";
// import SalesSummary from "../components/SalesSummary";
// import { auth } from "@/app/auth";
// import { Header } from "./New-Components/Header";
// import { Stats } from "./New-Components/Stats";
// import { Charts } from "./New-Components/Charts";
// import DashboardOverview from "../components/DashboardOverview";

// export default async function Admin() {
//   const session = await auth();

//   // Redirect if the user is not an admin
//   // if (!session || session?.user?.role !== "admin") redirect("/");

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header Section */}
//       <Header />

//       <main className="p-6">
//         {/* Stats Section */}
//         <Stats />

//         {/* Charts Section */}
//         <div className="mt-6">
//           <Charts />
//         </div>

//         <DashboardOverview />

//         {/* Dashboard Cards */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//           <Dashboard />
//           <TopProducts />
//         </div>

//         <SalesSummary />


//         {/* Recent Orders Section */}
//         <div className="mt-8">
//           <RecentOrders />
//         </div>
//       </main>
//     </div>
//   );
// }





import { redirect } from "next/navigation";
import Dashboard from "../components/Dashboard";
import RecentOrders from "../components/RecentOrders";
import TopProducts from "../components/TopProducts";
import SalesSummary from "../components/SalesSummary";
import { auth } from "@/app/auth";

export default async function Admin() {
  const session = await auth();
  // Uncomment to enable redirection if not admin
  // if (!session || session?.user?.role !== "admin") redirect("/");

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100">
      <div className="p-8 space-y-8">
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Admin Dashboard
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Dashboard />
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
