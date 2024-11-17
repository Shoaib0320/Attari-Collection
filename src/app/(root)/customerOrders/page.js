import MyOrders from "./MyOrders";
import { auth } from "@/app/auth";

export default async function CustomerOrders() {
  const session = await auth()
  const userId = session?.user?._id; // Replace with actual logic to get the logged-in user's ID

  return (
    <div>
      <h1 className="text-3xl text-center font-serif my-20">Your Orders</h1>
      <MyOrders userId={userId} />
    </div>
  );
}
