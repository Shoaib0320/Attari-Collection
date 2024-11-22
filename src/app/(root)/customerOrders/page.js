import MyOrders from "./MyOrders";
import { auth } from "@/app/auth";

export default async function CustomerOrders({ searchParams }) {
  const session = await auth()
  const userId = session?.user?._id; // Replace with actual logic to get the logged-in user's ID

  if (!session) {
    return (
      <>
        <div className="mx-auto max-w-7xl px-4 my-10">
          <p className="text-center text-red-500 text-xl">Please log in to view your Orders.</p>
        </div>
      </>
    )
  }

  console.log("session=> Orders", session);

  return (
    <div>
      <h1 className="text-3xl text-center font-serif my-20">Your Orders</h1>
      <MyOrders userId={userId} />
    </div>
  );
}


