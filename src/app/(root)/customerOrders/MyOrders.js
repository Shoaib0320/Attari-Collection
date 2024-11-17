// 'use client';

// import { useEffect, useState } from 'react';
// import { getUserOrders } from '@/actions/ordersActions';
// import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

// export default function MyOrders({ userId }) {
//   const [orders, setOrders] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [isSheetOpen, setIsSheetOpen] = useState(false);

//   useEffect(() => {
//     const fetchUserOrders = async () => {
//       try {
//         const userOrders = await getUserOrders(userId);
//         setOrders(userOrders);
//       } catch (error) {
//         console.error('Error fetching user orders:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (userId) fetchUserOrders();
//   }, [userId]);

//   if (isLoading)
//     return (
//       <div className="max-w-4xl mx-auto mt-10">
//         <div className="space-y-4">
//           {[...Array(5)].map((_, index) => (
//             <div
//               key={index}
//               className="animate-pulse flex items-center space-x-4 border rounded-lg shadow-md p-4 bg-white"
//             >
//               <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
//               <div className="flex-1 space-y-2">
//                 <div className="h-4 bg-gray-300 rounded w-3/4"></div>
//                 <div className="h-4 bg-gray-300 rounded w-1/2"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );

//   if (!orders.length) {
//     return <p className="text-center mt-10 text-gray-500">No orders found.</p>;
//   }

//   const handleViewDetails = (order) => {
//     setSelectedOrder(order);
//     setIsSheetOpen(true);
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Your Orders</h2>
//       <h1>{userId.firstName}</h1>
//       <ul className="space-y-4">
//         {orders.map((order) => (
//           <li
//             key={order._id}
//             className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition"
//           >
//             <p><strong>Order ID:</strong> {order._id}</p>
//             <p><strong>Customer ID:</strong> {order.user.firstName} {order.user.lastName} </p>
//             <p><strong>Status:</strong> {order.status}</p>
//             <p><strong>Number:</strong> {order.number}</p>
//             <button
//               onClick={() => handleViewDetails(order)}
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//             >
//               View Details
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* Modal */}
//       {selectedOrder && (
//         <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
//           <SheetContent className="bg-gray-100 overflow-y-auto">
//             <SheetHeader>
//               <SheetTitle>Order Details</SheetTitle>
//             </SheetHeader>
//             <div className="space-y-4 mt-4">
//               <p><strong>Order ID:</strong> {selectedOrder._id}</p>
//               <p><strong>Status:</strong> {selectedOrder.status}</p>
//               <p><strong>Number:</strong> {selectedOrder.number}</p>
//               <p><strong>Address:</strong> {selectedOrder.address}</p>
//               <p><strong>Items:</strong></p>
//               <ul className="space-y-4">
//                 {selectedOrder.items.map((item, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
//                   >
//                     <img
//                       src={item.imageUrl || '/placeholder.png'}
//                       alt={item.title}
//                       className="w-16 h-16 rounded object-cover"
//                     />
//                     <div>
//                       <p className="font-semibold">{item.title}</p>
//                       <p>Quantity: {item.quantity}</p>
//                       <p>Price: PKR {item.price}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </SheetContent>
//         </Sheet>
//       )}
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { getUserOrders } from '@/actions/ordersActions';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export default function MyOrders({ userId }) {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    useEffect(() => {
        const fetchUserOrders = async () => {
            try {
                const userOrders = await getUserOrders(userId);
                setOrders(userOrders);
            } catch (error) {
                console.error('Error fetching user orders:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (userId) fetchUserOrders();
    }, [userId]);

    if (isLoading)
        return (
            <div className="max-w-5xl mx-auto mt-12">
                <div className="space-y-6">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className="animate-pulse flex items-center space-x-4 border border-gray-200 rounded-xl shadow-lg p-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
                        >
                            <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
                            <div className="flex-1 space-y-3">
                                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );

    if (!orders.length) {
        return <p className="text-center mt-12 text-gray-500">No orders found.</p>;
    }

    const handleViewDetails = (order) => {
        setSelectedOrder(order);
        setIsSheetOpen(true);
    };

    return (
        <div className="max-w-5xl mx-auto mt-12 px-6">
            <ul className="space-y-8">
                {orders.map((order) => (
                    <li
                        key={order._id}
                        className="border border-gray-300 rounded-2xl shadow-xl p-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex justify-between items-center">
                            <p className="text-lg font-semibold text-gray-800">
                                <strong>Order ID:</strong> {order._id}
                            </p>
                            <span
                                className={`text-sm px-4 py-1 rounded-full ${order.status === 'Completed'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                    }`}
                            >
                                {order.status}
                            </span>
                        </div>
                        <p className="text-gray-700 mt-2">
                            <strong>Customer:</strong> {order.user.firstName} {order.user.lastName}
                        </p>
                        <p className="text-gray-700 mt-1">
                            <strong>Phone:</strong> {order.number}
                        </p>
                        <button
                            onClick={() => handleViewDetails(order)}
                            className="mt-6 bg-gray-700 text-gray-300 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 hover:text-black transition-all duration-200"
                        >
                            View Details
                        </button>
                    </li>
                ))}
            </ul>

            {/* Modal */}
            {selectedOrder && (
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetContent className="bg-gray-100 overflow-y-auto p-8 max-w-lg mx-auto rounded-lg shadow-xl">
                        <SheetHeader>
                            <SheetTitle className="text-2xl font-bold text-gray-900">Order Details</SheetTitle>
                        </SheetHeader>
                        <div className="space-y-6 mt-6">
                            <p><strong>Order ID:</strong> {selectedOrder._id}</p>
                            <p><strong>Status:</strong> {selectedOrder.status}</p>
                            <p><strong>Number:</strong> {selectedOrder.number}</p>
                            <p><strong>Address:</strong> {selectedOrder.address}</p>
                            <p className="font-semibold mt-4">Items:</p>
                            <ul className="space-y-4">
                                {selectedOrder.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-6 bg-white p-4 rounded-lg shadow-md border border-gray-200"
                                    >
                                        <img
                                            src={item.imageUrl || '/placeholder.png'}
                                            alt={item.title}
                                            className="w-16 h-16 rounded-lg object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-800">{item.title}</p>
                                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                                            <p className="text-gray-600">Price: PKR {item.price}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </SheetContent>
                </Sheet>
            )}
        </div>
    );
}







