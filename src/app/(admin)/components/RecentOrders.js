// "use client";

// import { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Button } from "@/components/ui/button"; // Assuming you're using a button component for "View Details"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"; // ShadCN UI Dialog/Modal components

// export default function RecentOrders() {
//   const [orders, setOrders] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedOrder, setSelectedOrder] = useState(null); // Track selected order for modal

//   // Fetch orders from the API
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch("/api/todayOrders");
//         if (!response.ok) {
//           throw new Error("Failed to fetch orders");
//         }
//         const data = await response.json();
//         setOrders(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setError("Failed to load orders. Please try again later.");
//         setIsLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // Handle "View Details" button click to show the order details in a modal
//   const handleViewDetails = (order) => {
//     setSelectedOrder(order);
//   };

//   // Close the modal
//   const handleCloseModal = () => {
//     setSelectedOrder(null);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <>
//       <Card className="col-span-1 md:col-span-2 bg-gradient-to-r from-gray-800 to-gray-900 shadow-md hover:shadow-lg">
//         <CardHeader>
//           <CardTitle className="text-gray-100 text-center">Today's Orders</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="text-gray-300">Order ID</TableHead>
//                 <TableHead className="text-gray-300">Customer</TableHead>
//                 <TableHead className="text-gray-300">Product</TableHead>
//                 <TableHead className="text-gray-300">Total</TableHead>
//                 <TableHead className="text-gray-300">Status</TableHead>
//                 <TableHead className="text-gray-300">Action</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {orders.map((order) => (
//                 <TableRow key={order._id}>
//                   <TableCell className="text-gray-200">{order._id.substring(0, 8)}</TableCell>
//                   <TableCell className="text-gray-200">{order.user.firstName}</TableCell>
//                   <TableCell className="text-gray-200">
//                     {order.items.map((item) => (
//                       <div key={item.productId._id}>
//                         {item.title} (x{item.quantity})
//                       </div>
//                     ))}
//                   </TableCell>
//                   <TableCell className="text-gray-200">PKR {order.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</TableCell>
//                   <TableCell className="text-gray-200">{order.status}</TableCell>
//                   <TableCell>
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <Button onClick={() => handleViewDetails(order)}>View Details</Button>
//                       </DialogTrigger>
//                       {selectedOrder && (
//                         <DialogContent className="sm:max-w-[500px] overflow-y-auto">
//                           <DialogHeader>
//                             <DialogTitle>Order Details</DialogTitle>
//                           </DialogHeader>
//                           <div>
//                             <h3>Customer: {selectedOrder.user.firstName}</h3>
//                             <p>Email: {selectedOrder.user.email}</p>
//                             <h4>Products:</h4>
//                             <ul>
//                               {selectedOrder.items.map((item) => (
//                                 <li key={item.productId._id}>
//                                   <img src={item.productId.imageUrl} alt={item.title} style={{ width: "50px" }} />
//                                   <span>{item.title} (x{item.quantity})</span> - PKR {item.price * item.quantity}
//                                 </li>
//                               ))}
//                             </ul>
//                             <h4>Total: PKR {selectedOrder.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h4>
//                             <p>Status: {selectedOrder.status}</p>
//                             <p>Address: {selectedOrder.address}</p>
//                           </div>
//                         </DialogContent>
//                       )}
//                     </Dialog>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </>
//   );
// }






"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button"; // Assuming you're using a button component for "View Details"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"; // ShadCN UI Dialog/Modal components

export default function RecentOrders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null); // Track selected order for modal

  // Fetch orders from the API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/todayOrders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to load orders. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Handle "View Details" button click to show the order details in a modal
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {/* Skeleton Loader for Card */}
        <Card className="col-span-1 md:col-span-2 bg-gradient-to-r from-gray-800 to-gray-900 shadow-md hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-100 text-center">
              <div className="h-6 w-24 bg-gray-600 rounded animate-pulse"></div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-300">Order ID</TableHead>
                  <TableHead className="text-gray-300">Customer</TableHead>
                  <TableHead className="text-gray-300">Product</TableHead>
                  <TableHead className="text-gray-300">Total</TableHead>
                  <TableHead className="text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-300">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Skeleton Loader for Table Rows */}
                {[...Array(5)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-gray-200">
                      <div className="h-4 w-20 bg-gray-600 rounded animate-pulse"></div>
                    </TableCell>
                    <TableCell className="text-gray-200">
                      <div className="h-4 w-24 bg-gray-600 rounded animate-pulse"></div>
                    </TableCell>
                    <TableCell className="text-gray-200">
                      <div className="h-4 w-48 bg-gray-600 rounded animate-pulse"></div>
                    </TableCell>
                    <TableCell className="text-gray-200">
                      <div className="h-4 w-20 bg-gray-600 rounded animate-pulse"></div>
                    </TableCell>
                    <TableCell className="text-gray-200">
                      <div className="h-4 w-16 bg-gray-600 rounded animate-pulse"></div>
                    </TableCell>
                    <TableCell className="text-gray-200">
                      <div className="h-4 w-24 bg-gray-600 rounded animate-pulse"></div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Card className="col-span-1 md:col-span-2 bg-gradient-to-r from-gray-800 to-gray-900 shadow-md hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-100 text-center">Today's Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-300">Order ID</TableHead>
                <TableHead className="text-gray-300">Customer</TableHead>
                <TableHead className="text-gray-300">Product</TableHead>
                <TableHead className="text-gray-300">Total</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order._id}>
                  <TableCell className="text-gray-200">{order._id.substring(0, 8)}</TableCell>
                  <TableCell className="text-gray-200">{order.user.firstName}</TableCell>
                  <TableCell className="text-gray-200">
                    {order.items.map((item) => (
                      <div key={item.productId._id}>
                        {item.title} (x{item.quantity})
                      </div>
                    ))}
                  </TableCell>
                  <TableCell className="text-gray-200">PKR {order.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</TableCell>
                  <TableCell className="text-gray-200">{order.status}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={() => handleViewDetails(order)}>View Details</Button>
                      </DialogTrigger>
                      {selectedOrder && (
                        <DialogContent className="sm:max-w-[500px] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Order Details</DialogTitle>
                          </DialogHeader>
                          <div>
                            <h3>Customer: {selectedOrder.user.firstName}</h3>
                            <p>Email: {selectedOrder.user.email}</p>
                            <h4>Products:</h4>
                            <ul>
                              {selectedOrder.items.map((item) => (
                                <li key={item.productId._id}>
                                  <img src={item.productId.imageUrl} alt={item.title} style={{ width: "50px" }} />
                                  <span>{item.title} (x{item.quantity})</span> - PKR {item.price * item.quantity}
                                </li>
                              ))}
                            </ul>
                            <h4>Total: PKR {selectedOrder.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h4>
                            <p>Status: {selectedOrder.status}</p>
                            <p>Address: {selectedOrder.address}</p>
                          </div>
                        </DialogContent>
                      )}
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
