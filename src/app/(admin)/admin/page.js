import { auth } from "@/app/auth";
import AnalyticsChart from "@/components/BarChart/BarChart";
import { redirect } from "next/navigation";

export default async function Admin() {
  // const session = await auth();
  // if (!session && session?.user?.role != "admin") redirect("/");

  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-3xl p-20 text-center">Admin</h1>
      <div className="min-h-screen">
        <AnalyticsChart />
      </div>
    </div>
  );
}

