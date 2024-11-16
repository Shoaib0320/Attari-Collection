// import Navbar from "@/components/Root-Navbar/Navbar";


// export default function CustomerOrders(){
//     return(
//         <div>
//             <Navbar />
          
//             <h1 className="text-3xl text-center font-serif my-20">Your Orders</h1>
//         </div>

//     )
// }


import MyOrders from "./MyOrders";
import { auth } from "@/app/auth";

export default function CustomerOrders() {
  const userId = auth(); // Replace with actual logic to get the logged-in user's ID

  return (
    <div>
      <h1 className="text-3xl text-center font-serif my-20">Your Orders</h1>
      <MyOrders userId={userId} />
    </div>
  );
}
