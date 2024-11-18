import MyOrders from "./MyOrders";
import { auth } from "@/app/auth";

export default async function CustomerOrders({ searchParams }) {
  const session = await auth()
  const userId = session?.user?._id; // Replace with actual logic to get the logged-in user's ID

  return (
    <div>
      <h1 className="text-3xl text-center font-serif my-20">Your Orders</h1>
      <MyOrders userId={userId} />
    </div>
  );
}






// 'use server'  // Server-side part

// import { getUserOrders } from "@/actions/ordersActions";
// import MyOrders from "./MyOrders";
// import { auth } from "@/app/auth";
// import OrderStats from "./orderStats";
// import StatusFilter from "./OrderFilter";

// export default async function CustomerOrders({ query }) {

//   const session = await auth();
//   const userId = session?.user?._id; // Get the logged-in user's ID

//   const status = query?.status || 'all'; // Get the status query parameter or default to 'all'
//   const { stats } = await getUserOrders(userId, status); // Fetch orders and stats based on the status

//   return (
//     <div>
//       <h1 className="text-3xl text-center font-serif my-20">Your Orders</h1>

//       {/* Status Filter Component */}
//       {/* <StatusFilter setStatusFilter={(newStatus) => { 
//         // You can perform client-side navigation or trigger a state update here.
//         // You could use a router push or update a context state.
//       }} /> */}

//       {/* Order Stats Component */}
//       <OrderStats stats={stats} />

//       {/* My Orders List */}
//       <MyOrders userId={userId} status={status} />
//     </div>
//   );
// }
