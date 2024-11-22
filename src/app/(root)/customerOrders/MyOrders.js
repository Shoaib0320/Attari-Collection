// // // 'use client';

// // // import { useEffect, useState } from 'react';
// // // import { getUserOrders, deleteOrder } from '@/actions/ordersActions';
// // // import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
// // // import { Button } from '@/components/ui/button';
// // // import { Loader2,  Trash2 } from 'lucide-react';

// // // export default function MyOrders({ userId }) {
// // //     const [orders, setOrders] = useState([]);
// // //     const [isLoading, setIsLoading] = useState(true);
// // //     const [selectedOrder, setSelectedOrder] = useState(null);
// // //     const [isSheetOpen, setIsSheetOpen] = useState(false);
// // //     const [loadingOrderId, setLoadingOrderId] = useState(null); // Track the order being deleted

// // //     useEffect(() => {
// // //         fetchUserOrders();
// // //     }, [userId]);

// // //     const fetchUserOrders = async () => {
// // //         try {
// // //             const userOrders = await getUserOrders(userId);
// // //             setOrders(userOrders);
// // //         } catch (error) {
// // //             console.error('Error fetching user orders:', error);
// // //         } finally {
// // //             setIsLoading(false);
// // //         }
// // //     };


// // //     const handleDeleteOrder = async (orderId) => {
// // //         try {
// // //             setLoadingOrderId(orderId); // Set the loader for the specific order
// // //             await deleteOrder(orderId); // Call the API to delete the order
// // //             fetchUserOrders(); // Refresh the orders list
// // //         } catch (error) {
// // //             console.error('Error deleting order:', error);
// // //         } finally {
// // //             setLoadingOrderId(null); // Stop the loader after the operation
// // //         }
// // //     };


// // //     if (isLoading)
// // //         return (
// // //             <div className="max-w-5xl mx-auto mt-12">
// // //                 <div className="space-y-6">
// // //                     {[...Array(5)].map((_, index) => (
// // //                         <div
// // //                             key={index}
// // //                             className="animate-pulse flex items-center space-x-4 border border-gray-200 rounded-xl shadow-lg p-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
// // //                         >
// // //                             <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
// // //                             <div className="flex-1 space-y-3">
// // //                                 <div className="h-4 bg-gray-300 rounded w-3/4"></div>
// // //                                 <div className="h-4 bg-gray-300 rounded w-1/2"></div>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </div>
// // //         );

// // //     if (!orders.length) {
// // //         return <p className="text-center mt-12 text-gray-500">No orders found.</p>;
// // //     }

// // //     const handleViewDetails = (order) => {
// // //         setSelectedOrder(order);
// // //         setIsSheetOpen(true);
// // //     };

// // //     return (
// // //         <div className="max-w-5xl mx-auto mt-12 px-6">
// // //             <ul className="space-y-8">
// // //                 {orders.map((order) => (
// // //                     <li
// // //                         key={order._id}
// // //                         className="border border-gray-300 rounded-2xl shadow-xl p-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 hover:shadow-2xl transition-all duration-300"
// // //                     >
// // //                         <div className="flex justify-between items-center">
// // //                             <p className="text-lg font-semibold text-gray-800">
// // //                                 <strong>Order ID:</strong> {order._id}
// // //                             </p>
// // //                             <span
// // //                                 className={`text-sm px-4 py-1 rounded-full ${order.status === 'delivered'
// // //                                     ? 'bg-green-100 text-green-700'
// // //                                     : order.status === 'cancelled'
// // //                                         ? 'bg-red-400 text-white'
// // //                                         : order.status === 'pending'
// // //                                             ? 'bg-yellow-100 text-yellow-700'
// // //                                             : ''
// // //                                     }`}
// // //                             >
// // //                                 {order.status}
// // //                             </span>
// // //                         </div>
// // //                         <p className="text-gray-700 mt-2">
// // //                             <strong>Customer:</strong> {order.user.firstName} {order.user.lastName}
// // //                         </p>
// // //                         <p className="text-gray-700 mt-1">
// // //                             <strong>Phone:</strong> {order.number}
// // //                         </p>
// // //                         <div className="flex items-center justify-between align-middle">
// // //                             <Button
// // //                                 onClick={() => handleViewDetails(order)}
// // //                                 className="mt-6 bg-gray-700 text-gray-300 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 hover:text-black transition-all duration-200"
// // //                             >
// // //                                 View Details
// // //                             </Button>
// // //                             {order.status === 'pending' && (
// // //                                 <button
// // //                                     className={`text-red-400 hover:text-red-300 transition-colors disabled:opacity-50 flex items-center`}
// // //                                     onClick={() => handleDeleteOrder(order._id)}
// // //                                     disabled={loadingOrderId === order._id} // Disable the button if it's loading
// // //                                 >
// // //                                     {loadingOrderId === order._id ? (
// // //                                         <Loader2 className="h-5 w-5 animate-spin" />
// // //                                 ) : (
// // //                                         <Trash2 className="h-5 w-5" />
// // //                                     )}
// // //                                 </button>
// // //                             )}
// // //                         </div>
// // //                     </li>
// // //                 ))}
// // //             </ul>

// // //             {/* Modal */}
// // //             {selectedOrder && (
// // //                 <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
// // //                     <SheetContent className="bg-gray-100 overflow-y-auto p-8 max-w-lg mx-auto rounded-lg shadow-xl">
// // //                         <SheetHeader>
// // //                             <SheetTitle className="text-2xl font-bold text-gray-900">Order Details</SheetTitle>
// // //                         </SheetHeader>
// // //                         <div className="space-y-6 mt-6">
// // //                             <p><strong>Order ID:</strong> {selectedOrder._id}</p>
// // //                             <p><strong>Status:</strong> {selectedOrder.status}</p>
// // //                             <p><strong>Number:</strong> {selectedOrder.number}</p>
// // //                             <p><strong>Address:</strong> {selectedOrder.address}</p>
// // //                             <p className="font-semibold mt-4">Items:</p>
// // //                             <ul className="space-y-4">
// // //                                 {selectedOrder.items.map((item, index) => (
// // //                                     <li
// // //                                         key={index}
// // //                                         className="flex items-center gap-6 bg-white p-4 rounded-lg shadow-md border border-gray-200"
// // //                                     >
// // //                                         <img
// // //                                             src={item.imageUrl || '/placeholder.png'}
// // //                                             alt={item.title}
// // //                                             className="w-16 h-16 rounded-lg object-cover"
// // //                                         />
// // //                                         <div>
// // //                                             <p className="font-semibold text-gray-800">{item.title}</p>
// // //                                             <p className="text-gray-600">Quantity: {item.quantity}</p>
// // //                                             <p className="text-gray-600">Price: PKR {item.price}</p>
// // //                                         </div>
// // //                                     </li>
// // //                                 ))}
// // //                             </ul>
// // //                         </div>
// // //                     </SheetContent>
// // //                 </Sheet>
// // //             )}
// // //         </div>
// // //     );
// // // }


// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { getUserOrders, deleteOrder } from '@/actions/ordersActions';
// // import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
// // import { Button } from '@/components/ui/button';
// // import { Loader2, Trash2 } from 'lucide-react';

// // export default function MyOrders({ userId }) {
// //     const [orders, setOrders] = useState([]);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [selectedOrder, setSelectedOrder] = useState(null);
// //     const [isSheetOpen, setIsSheetOpen] = useState(false);
// //     const [loadingOrderId, setLoadingOrderId] = useState(null);

// //     useEffect(() => {
// //         fetchUserOrders();
// //     }, [userId]);

// //     const fetchUserOrders = async () => {
// //         try {
// //             const userOrders = await getUserOrders(userId);
// //             setOrders(userOrders);
// //         } catch (error) {
// //             console.error('Error fetching user orders:', error);
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     const handleDeleteOrder = async (orderId) => {
// //         try {
// //             setLoadingOrderId(orderId);
// //             await deleteOrder(orderId);
// //             fetchUserOrders();
// //         } catch (error) {
// //             console.error('Error deleting order:', error);
// //         } finally {
// //             setLoadingOrderId(null);
// //         }
// //     };

// //     const handleViewDetails = (order) => {
// //         setSelectedOrder(order);
// //         setIsSheetOpen(true);
// //     };

// //     if (isLoading)
// //         return (
// //             <div className="max-w-5xl mx-auto mt-12">
// //                 <div className="space-y-6">
// //                     {[...Array(5)].map((_, index) => (
// //                         <div
// //                             key={index}
// //                             className="animate-pulse flex items-center space-x-4 border border-gray-200 rounded-xl shadow-lg p-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
// //                         >
// //                             <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
// //                             <div className="flex-1 space-y-3">
// //                                 <div className="h-4 bg-gray-300 rounded w-3/4"></div>
// //                                 <div className="h-4 bg-gray-300 rounded w-1/2"></div>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         );

// //     if (!orders.length) {
// //         return <p className="text-center mt-12 text-gray-500">No orders found.</p>;
// //     }

// //     return (
// //         <div className="max-w-7xl mx-auto mt-12 px-4 md:px-8">
// //             <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                 {orders.map((order) => (
// //                     <li
// //                         key={order._id}
// //                         className="border border-gray-300 rounded-2xl shadow-xl p-6 bg-gradient-to-r from-gray-50 via-white to-gray-50 hover:shadow-2xl transition-all duration-300"
// //                     >
// //                         <div className="flex justify-between items-center">
// //                             <p className="text-lg font-semibold text-gray-800">
// //                                 <strong>Order No:</strong> {order._id}
// //                             </p>
// //                             <span
// //                                 className={`text-sm px-4 py-1 rounded-full ${order.status === 'delivered'
// //                                     ? 'bg-green-100 text-green-700'
// //                                     : order.status === 'cancelled'
// //                                         ? 'bg-red-400 text-white'
// //                                         : order.status === 'pending'
// //                                             ? 'bg-yellow-100 text-yellow-700'
// //                                             : ''
// //                                     }`}
// //                             >
// //                                 {order.status}
// //                             </span>
// //                         </div>
// //                         <p className="text-gray-700 mt-2">
// //                             <strong>Customer:</strong> {order.user.firstName} {order.user.lastName}
// //                         </p>
// //                         <p className="text-gray-700 mt-1">
// //                             <strong>Phone:</strong> {order.number}
// //                         </p>
// //                         <div className="flex items-center justify-between align-middle">
// //                             <Button
// //                                 onClick={() => handleViewDetails(order)}
// //                                 className="mt-6 bg-gray-700 text-gray-300 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 hover:text-black transition-all duration-200"
// //                             >
// //                                 View Details
// //                             </Button>
// //                             {order.status === 'pending' && (
// //                                 <button
// //                                     className={`text-red-400 hover:text-red-300 transition-colors disabled:opacity-50 flex items-center`}
// //                                     onClick={() => handleDeleteOrder(order._id)}
// //                                     disabled={loadingOrderId === order._id}
// //                                 >
// //                                     {loadingOrderId === order._id ? (
// //                                         <Loader2 className="h-5 w-5 animate-spin" />
// //                                     ) : (
// //                                         <Trash2 className="h-5 w-5" />
// //                                     )}
// //                                 </button>
// //                             )}
// //                         </div>
// //                     </li>
// //                 ))}
// //             </ul>

// //             {selectedOrder && (
// //                 <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
// //                     <SheetContent className="bg-gray-100 overflow-y-auto p-6 max-w-lg mx-auto rounded-lg shadow-xl">
// //                         <SheetHeader>
// //                             <SheetTitle className="text-2xl font-bold text-gray-900">Order Details</SheetTitle>
// //                         </SheetHeader>
// //                         <div className="space-y-6 mt-6">
// //                             <p><strong>Order No:</strong> {selectedOrder._id}</p>
// //                             <p><strong>Status:</strong> {selectedOrder.status}</p>
// //                             <p><strong>Number:</strong> {selectedOrder.number}</p>
// //                             <p><strong>Address:</strong> {selectedOrder.address}</p>
// //                             <p className="font-semibold mt-4">Items:</p>
// //                             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                                 {selectedOrder.items.map((item, index) => (
// //                                     <li
// //                                         key={index}
// //                                         className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-200"
// //                                     >
// //                                         <img
// //                                             src={item.imageUrl || '/placeholder.png'}
// //                                             alt={item.title}
// //                                             className="w-20 h-20 rounded-lg object-cover"
// //                                         />
// //                                         <div>
// //                                             <p className="font-semibold text-gray-800">{item.title}</p>
// //                                             <p className="text-gray-600">Qty: {item.quantity}</p>
// //                                             <p className="text-gray-600">PKR {item.price}</p>
// //                                         </div>
// //                                     </li>
// //                                 ))}
// //                             </ul>
// //                         </div>
// //                     </SheetContent>
// //                 </Sheet>
// //             )}
// //         </div>
// //     );
// // }





// 'use client';

// import { useEffect, useState } from 'react';
// import { getUserOrders, deleteOrder } from '@/actions/ordersActions';
// import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
// import { Button } from '@/components/ui/button';
// import { Loader2, Trash2 } from 'lucide-react';

// export default function MyOrders({ userId }) {
//     const [orders, setOrders] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [isSheetOpen, setIsSheetOpen] = useState(false);
//     const [loadingOrderId, setLoadingOrderId] = useState(null);

//     useEffect(() => {
//         fetchUserOrders();
//     }, [userId]);

//     const fetchUserOrders = async () => {
//         try {
//             const userOrders = await getUserOrders(userId);
//             setOrders(userOrders);
//         } catch (error) {
//             console.error('Error fetching user orders:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleDeleteOrder = async (orderId) => {
//         try {
//             setLoadingOrderId(orderId);
//             await deleteOrder(orderId);
//             fetchUserOrders();
//         } catch (error) {
//             console.error('Error deleting order:', error);
//         } finally {
//             setLoadingOrderId(null);
//         }
//     };

//     const handleViewDetails = (order) => {
//         setSelectedOrder(order);
//         setIsSheetOpen(true);
//     };

//     if (isLoading)
//         return (
//             <div className="max-w-5xl mx-auto mt-12 space-y-6">
//                 {[...Array(5)].map((_, index) => (
//                     <div
//                         key={index}
//                         className="animate-pulse flex items-center space-x-4 border rounded-xl shadow-md p-6 bg-gradient-to-r from-gray-100 to-gray-200"
//                     >
//                         <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
//                         <div className="flex-1 space-y-3">
//                             <div className="h-4 bg-gray-300 rounded w-3/4"></div>
//                             <div className="h-4 bg-gray-300 rounded w-1/2"></div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         );

//     if (!orders.length) {
//         return <p className="text-center mt-12 text-gray-500">No orders found.</p>;
//     }

//     return (
//         <div className="max-w-7xl mx-auto mt-12 px-4 md:px-8">
//             <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {orders.map((order, index) => (
//                     <li
//                         key={order._id}
//                         className="border rounded-2xl shadow-lg p-6 bg-gradient-to-r from-gray-50 to-white hover:shadow-xl transition-all"
//                     >
//                         <div className="flex justify-between items-center">
//                             <p className="text-lg font-semibold text-gray-800">
//                                 <strong>Order No:</strong> {index + 1}
//                             </p>
//                             <span
//                                 className={`text-sm px-4 py-1 rounded-full ${order.status === 'delivered'
//                                     ? 'bg-green-100 text-green-700'
//                                     : order.status === 'cancelled'
//                                         ? 'bg-red-400 text-white'
//                                         : order.status === 'pending'
//                                             ? 'bg-yellow-100 text-yellow-700'
//                                             : ''
//                                     }`}
//                             >
//                                 {order.status}
//                             </span>
//                         </div>
//                         <p className="text-gray-700 mt-2">
//                             <strong>Customer:</strong> {order.user.firstName} {order.user.lastName}
//                         </p>
//                         <p className="text-gray-700 mt-1">
//                             <strong>Phone:</strong> {order.number}
//                         </p>
//                         <div className="flex items-center justify-between">
//                             <Button
//                                 onClick={() => handleViewDetails(order)}
//                                 className="mt-6 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 hover:text-black transition-all"
//                             >
//                                 View Details
//                             </Button>
//                             {order.status === 'pending' && (
//                                 <button
//                                     className={`text-red-500 hover:text-red-400 transition-colors disabled:opacity-50 flex items-center`}
//                                     onClick={() => handleDeleteOrder(order._id)}
//                                     disabled={loadingOrderId === order._id}
//                                 >
//                                     {loadingOrderId === order._id ? (
//                                         <Loader2 className="h-5 w-5 animate-spin" />
//                                     ) : (
//                                         <Trash2 className="h-5 w-5" />
//                                     )}
//                                 </button>
//                             )}
//                         </div>
//                     </li>
//                 ))}
//             </ul>

//             {selectedOrder && (
//                 <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
//                     <SheetContent className="bg-gray-100 overflow-y-auto p-6 max-w-lg mx-auto rounded-lg shadow-xl">
//                         <SheetHeader>
//                             <SheetTitle className="text-2xl font-bold text-gray-900">Order Details</SheetTitle>
//                         </SheetHeader>
//                         <div className="space-y-6 mt-6">
//                             <p><strong>Order No:</strong> {selectedOrder._id}</p>
//                             <p><strong>Status:</strong> {selectedOrder.status}</p>
//                             <p><strong>Number:</strong> {selectedOrder.number}</p>
//                             <p><strong>Address:</strong> {selectedOrder.address}</p>
//                             <p className="font-semibold mt-4">Items:</p>
//                             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                 {selectedOrder.items.map((item, index) => (
//                                     <li
//                                         key={index}
//                                         className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
//                                     >
//                                         <img
//                                             src={item.imageUrl || '/placeholder.png'}
//                                             alt={item.title}
//                                             className="w-20 h-20 rounded-lg object-cover"
//                                         />
//                                         <div>
//                                             <p className="font-semibold">{item.title}</p>
//                                             <p>Qty: {item.quantity}</p>
//                                             <p>PKR {item.price}</p>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </SheetContent>
//                 </Sheet>
//             )}
//         </div>
//     );
// }







'use client';

import { useState, useEffect } from 'react';
import { getUserOrders } from '@/actions/ordersActions'; // API to fetch orders
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Trash2 } from 'lucide-react';
import { addStoreFeedback } from '@/actions/storeFeedbackAction';

export default function MyOrders({ userId }) {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [loadingOrderId, setLoadingOrderId] = useState(null);
    const [isOrderDetailOpen, setIsOrderDetailOpen] = useState(false);

    useEffect(() => {
        fetchUserOrders();
    }, [userId]);

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

    const handleFeedbackClick = (order) => {
        setSelectedOrder(order);
        setIsFeedbackOpen(true);
    };

    const handleFeedbackSubmit = async () => {
        if (!feedback.trim()) return;

        if (selectedOrder.items.length === 0) {
            console.error('No products found in the order');
            return;
        }
    
        const productIds = selectedOrder.items.map(item => item._id);
        console.log('Product IDs:', productIds);
    
        // Check if productIds is empty
        if (productIds.length === 0) {
            alert('Please select at least one product.');
            return;
        }

        // try {
        //     await addStoreFeedback({
        //         userId,
        //         productId: selectedOrder.items.map((item) => item._id),
        //         feedback,
        //     });
        //     alert('Feedback submitted successfully!');
        //     setIsFeedbackOpen(false);
        //     setFeedback('');
        // } catch (error) {
        //     console.error('Error submitting feedback:', error);
        // }

        try {
            await addStoreFeedback({
                userId,
                productId: selectedOrder.items.map((item) => item._id),
                feedback,
            });
            alert('Feedback submitted successfully!');
            setIsFeedbackOpen(false);
            setFeedback('');
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert(`Failed to submit feedback: ${error.message || error}`);
        }
        
    };

    const handleViewDetailsClick = (order) => {
        setSelectedOrder(order);
        setIsOrderDetailOpen(true);
    };

    if (isLoading)
        return (
            <div className="max-w-5xl mx-auto mt-12 space-y-6">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className="animate-pulse flex items-center space-x-4 border rounded-xl shadow-md p-6 bg-gradient-to-r from-gray-100 to-gray-200"
                    >
                        <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
                        <div className="flex-1 space-y-3">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    </div>
                ))}
            </div>
        );

    if (!orders.length) {
        return <p className="text-center mt-12 text-gray-500">No orders found.</p>;
    }

    return (
        <div className="max-w-7xl mx-auto mt-12 px-4 md:px-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {orders.map((order, index) => (
                    <li
                        key={order._id}
                        className="border rounded-2xl shadow-lg p-6 bg-gradient-to-r from-gray-50 to-white hover:shadow-xl transition-all"
                    >
                        <div className="flex justify-between items-center">
                            <p className="text-lg font-semibold text-gray-800">
                                <strong>Order No:</strong> {index + 1}
                            </p>
                            <span
                                className={`text-sm px-4 py-1 rounded-full ${order.status === 'delivered'
                                    ? 'bg-green-200 text-green-700'
                                    : order.status === 'pending'
                                        ? 'bg-yellow-100 text-yellow-700'
                                        : order.status === 'cancelled'
                                            ? 'bg-red-400 text-white'
                                            : ''
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
                        <div className="mt-4 flex space-x-4">
                            {order.status === 'delivered' && (
                                <Button
                                    onClick={() => handleFeedbackClick(order)}
                                    className="bg-gray-300 text-black hover:bg-gray-700 hover:text-white"
                                >
                                    Leave Your Feedback
                                </Button>
                            )}
                            <Button
                                onClick={() => handleViewDetailsClick(order)}
                                className="bg-gray-700 text-white hover:bg-gray-300 hover:text-black"
                            >
                                View Details
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Feedback Sheet */}
            <Sheet open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen}>
                <SheetContent className="bg-gray-100 overflow-y-auto p-6 max-w-lg mx-auto rounded-lg shadow-xl">
                    <SheetHeader>
                        <SheetTitle className="text-2xl font-bold text-gray-900">
                            Feedback About Store
                        </SheetTitle>
                    </SheetHeader>
                    <Textarea
                        placeholder="Write your feedback here..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="mt-4"
                    />
                    <Button
                        onClick={handleFeedbackSubmit}
                        className="mt-4 bg-blue-600 text-white"
                    >
                        Add Feedback
                    </Button>
                </SheetContent>
            </Sheet>

            {/* Order Detail Sheet */}
            <Sheet open={isOrderDetailOpen} onOpenChange={setIsOrderDetailOpen}>
                <SheetContent className="bg-gray-100 overflow-y-auto p-6 max-w-lg mx-auto rounded-lg shadow-xl">
                    <SheetHeader>
                        <SheetTitle className="text-2xl font-bold text-gray-900">
                            Order Details
                        </SheetTitle>
                    </SheetHeader>
                    <div className="space-y-4">
                        <p>
                            <strong>Order Number:</strong> {selectedOrder?.orderNumber}
                        </p>
                        <p>
                            <strong>Status:</strong> {selectedOrder?.status}
                        </p>
                        <p>
                            <strong>Customer:</strong> {selectedOrder?.user.firstName} {selectedOrder?.user.lastName}
                        </p>
                        <p>
                            <strong>Phone:</strong> {selectedOrder?.number}
                        </p>
                        <div>
                            <strong>Items:</strong>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                
                                {selectedOrder?.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
                                    >
                                        <img
                                            src={item.imageUrl || '/placeholder.png'}
                                            alt={item.title}
                                            className="w-20 h-20 rounded-lg object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold">{item.title}</p>
                                            <p>Qty: {item.quantity}</p>
                                            <p>PKR {item.price}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="mt-4">
                            <strong>Total:</strong> ${selectedOrder?.totalPrice}
                        </p>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
