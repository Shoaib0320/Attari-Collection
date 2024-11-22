// import { auth } from "@/app/auth";
// import AnalyticsChart from "@/components/BarChart/BarChart";
// import { redirect } from "next/navigation";

// export default async function Admin() {
//   const session = await auth();
//   if (!session && session?.user?.role != "admin") redirect("/");

//   return (
//     <div className="min-h-screen">
//       <h1 className="font-bold text-3xl p-20 text-center">Admin</h1>
//       <div className="min-h-screen">
//         <AnalyticsChart />
//       </div>
//     </div>
//   );
// }



import { auth } from "@/app/auth";
// import Sidebar from "../components/Sidebar";
import { redirect } from "next/navigation";
import Categories from "../components/FileCategories";
import Files from "../components/RecentFiles";
import StorageInfo from "../components/StorageStatus";

export default async function Admin() {
  const session = await auth();
  if (!session || session?.user?.role !== "admin") redirect("/");

  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <h1 className="font-bold text-3xl mb-6">My Cloud</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Categories */}
            <Categories />

            {/* Files */}
            <Files />
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <StorageInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
