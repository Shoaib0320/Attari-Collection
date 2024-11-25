//File: ./src/app/(root)/customerOrders/MyOrders.js


'use client';

import { useState, useEffect } from 'react';
import { deleteOrder, getUserOrders } from '@/actions/ordersActions'; // API to fetch orders
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

    // useEffect(() => {
    //     fetchUserOrders();
    // }, [userId]);

    useEffect(() => {
        if (userId) fetchUserOrders();
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

    const handleDeleteOrder = async (orderId) => {
        try {
            setLoadingOrderId(orderId);
            await deleteOrder(orderId);
            fetchUserOrders();
        } catch (error) {
            console.error('Error deleting order:', error);
        } finally {
            setLoadingOrderId(null);
        }
    };


    const handleViewDetailsClick = (order) => {
        setSelectedOrder(order);
        setIsOrderDetailOpen(true);
    };

    if (isLoading)
        return (
            <div className="max-w-7xl mx-auto mt-12 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="animate-pulse border rounded-2xl shadow-lg p-6 bg-gradient-to-r from-gray-50 to-gray-100 flex flex-col space-y-4"
                    >
                        <div className="h-6 w-1/3 bg-gray-300 rounded-md"></div>
                        <div className="h-4 w-2/3 bg-gray-300 rounded-md"></div>
                        <div className="h-4 w-1/2 bg-gray-300 rounded-md"></div>
                        <div className="h-24 bg-gray-300 rounded-md"></div>
                        <div className="flex justify-between mt-4">
                            <div className="h-8 w-1/3 bg-gray-300 rounded-md"></div>
                            <div className="h-8 w-1/3 bg-gray-300 rounded-md"></div>
                            <div className="h-8 w-1/4 bg-gray-300 rounded-md"></div>
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
                        <p className="text-gray-700 mt-1">
                            <strong>Address:</strong> {order.address}
                        </p>
                        {/* <div className="mt-4 flex space-x-4 items-center justify-between">
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
                            {order.status === 'pending' && (
                                <button
                                    className={`text-red-500 hover:text-red-400 transition-colors disabled:opacity-50 flex items-center`}
                                    onClick={() => handleDeleteOrder(order._id)}
                                    disabled={loadingOrderId === order._id}
                                >
                                    {loadingOrderId === order._id ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        <Trash2 className="h-5 w-5" />
                                    )}
                                </button>
                            )}
                        </div> */}
                        <div className="mt-4 flex flex-wrap gap-2 items-center justify-between">
                            {order.status === 'delivered' && (
                                <Button
                                    onClick={() => handleFeedbackClick(order)}
                                    className="flex-1 bg-gray-300 text-black hover:bg-gray-700 hover:text-white md:flex-grow-0"
                                >
                                    Leave Feedback
                                </Button>
                            )}
                            <Button
                                onClick={() => handleViewDetailsClick(order)}
                                className="flex-1 bg-gray-700 text-white hover:bg-gray-300 hover:text-black md:flex-grow-0"
                            >
                                View Details
                            </Button>
                            {order.status === 'pending' && (
                                <button
                                    className={`flex-1 text-red-500 hover:text-red-400 transition-colors disabled:opacity-50 flex items-center justify-center md:flex-grow-0`}
                                    onClick={() => handleDeleteOrder(order._id)}
                                    disabled={loadingOrderId === order._id}
                                >
                                    {loadingOrderId === order._id ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        <Trash2 className="h-5 w-5" />
                                    )}
                                </button>
                            )}
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
                        className="w-full my-10 bg-gray-700 text-white hover:bg-gray-300 hover:text-black"
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
