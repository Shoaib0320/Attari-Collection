// // "use client"


// // import Navbar from '@/components/Root-Navbar/Navbar';
// // import { useEffect, useState } from 'react';

// // export default function CartPage() {
// //     const [cartItems, setCartItems] = useState([]);
// //     const [error, setError] = useState(null);
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         const fetchCartItems = async () => {
// //             try {
// //                 const response = await fetch('/api/addToCart'); // Adjust endpoint as necessary
// //                 if (!response.ok) {
// //                     throw new Error(`HTTP error! Status: ${response.status}`);
// //                 }

// //                 const data = await response.json();
// //                 setCartItems(data);
// //             } catch (err) {
// //                 setError(err.message);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchCartItems();
// //     }, []);

// //     if (loading) return <p>Loading...</p>;
// //     if (error) return <p>Error fetching cart items: {error}</p>;

// //     return (
// //     <>
// //         <Navbar />
// //             <div>
// //                 <h1 className='flex items-center justify-center my-10 text-gray-700'>Your Cart</h1>
// //                 {cartItems.length === 0 ? (
// //                     <p>Your cart is empty.</p>
// //                 ) : (
// //                     <div className='flex items-center justify-center my-10 gap-20'>
// //                         {cartItems.map(item => (
// //                             <div className='flex items-center justify-center my-10'>
// //                                 <div key={item._id} className="border border-gray-300 shadow-lg rounded-lg p-4 w-80">
// //                                     <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
// //                                     <h2 className="font-bold text-xl">{item.title}</h2>
// //                                     <p className="text-gray-500">{item.category}</p>
// //                                     <p className="text-gray-500">{item.description}</p>
// //                                     <p className="text-lg font-semibold">Price: ${item.price}</p>
// //                                 </div>
// //                             </div>
// //                     ))}
// //                     </div>
// //                 )}
// //             </div>
// //     </>
// //     );
// // }

// "use client";

// import Navbar from '@/components/Root-Navbar/Navbar';
// import { useEffect, useState } from 'react';

// export default function CartPage() {
//     const [cartItems, setCartItems] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchCartItems = async () => {
//             try {
//                 const response = await fetch('/api/addToCart');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 const data = await response.json();
//                 setCartItems(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCartItems();
//     }, []);

//     const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
//     const totalItems = cartItems.length;

//     if (loading) return <p className="text-center text-gray-700">Loading...</p>;
//     if (error) return <p className="text-center text-red-500">Error fetching cart items: {error}</p>;

//     return (
//         <>
//             <Navbar />
//             <div className="mx-auto max-w-7xl px-4 my-10">
//                 <h1 className='text-center text-3xl font-bold text-gray-800 mb-10'>Your Cart</h1>
//                 {cartItems.length === 0 ? (
//                     <p className="text-center text-gray-500">Your cart is empty.</p>
//                 ) : (
//                     <div className="flex">
//                         <div className="flex-1">
//                             <table className="min-w-full bg-white border border-gray-300 px-15">
//                                 <thead>
//                                     <tr className="bg-gray-100">
//                                         <th className="py-2 text-left text-gray-600">Item</th>
//                                         <th className="py-2 text-left text-gray-600">Price</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {cartItems.map(item => (
//                                         <tr key={item._id} className="border-b">
//                                             <td className="py-4 flex items-center">
//                                                 <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
//                                                 <div>
//                                                     <h2 className="font-bold">{item.title}</h2>
//                                                     <p className="text-gray-500">{item.category}</p>
//                                                     <p className="text-gray-500">{item.description}</p>
//                                                     <p className="text-gray-500">Quantity:{item.quantity}</p>
//                                                 </div>
//                                             </td>
//                                             <td className="py-4 text-lg font-semibold">${item.price}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                         <div className="w-1/4 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-lg sticky top-20 ml-4">
//                             <h2 className="text-xl font-semibold text-gray-700 mb-4">Cart Summary</h2>
//                             <p className="text-lg">Total Items: {totalItems}</p>
//                             <p className="text-lg font-bold mt-2">Total Price: ${totalPrice.toFixed(2)}</p>
//                             <button className="mt-4 w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition-colors">
//                                 Checkout
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// }




"use client";

import Navbar from '@/components/Root-Navbar/Navbar';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch('/api/addToCart');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setCartItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleDelete = async (itemId) => {
        try {
            const response = await fetch('/api/addToCart', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: itemId }), // Send the item ID to the server
            });
    
            const result = await response.json(); // Log the response
    
            if (response.ok) {
                // Remove the deleted item from cartItems state
                setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
            } else {
                throw new Error(result.message || 'Failed to delete item'); // Use the error message from the server if available
            }
        } catch (err) {
            setError(err.message);
        }
    };
    

    if (loading) return <p className="text-center text-gray-700">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error fetching cart items: {error}</p>;

    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 my-10">
                <h1 className='text-center text-4xl font-bold text-gray-800 mb-10'>Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500 text-xl">Your cart is empty.</p>
                ) : (
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-1">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="py-3 px-4 text-left text-gray-600">Item</th>
                                        <th className="py-3 px-4 text-left text-gray-600">Quantity</th>
                                        <th className="py-3 px-4 text-left text-gray-600">Price</th>
                                        <th className="py-3 px-4 text-left text-gray-600">Total</th>
                                        <th className="py-3 px-4 text-left text-gray-600">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(item => (
                                        <tr key={item._id} className="border-b hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-4 flex items-center">
                                                <Image src={item.imageUrl} alt={item.title} height={100} width={100} className="w-20 h-20 object-cover rounded mr-4" />
                                                <div>
                                                    <h2 className="font-bold text-lg">{item.title}</h2>
                                                    <p className="text-gray-500">{item.category}</p>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                <span className="text-lg">{item.quantity}</span>
                                            </td>
                                            <td className="py-4 px-4 text-lg font-semibold">PKR:{item.price.toFixed(2)}</td>
                                            <td className="py-4 px-4 text-lg font-semibold">PKR:{(item.price * item.quantity).toFixed(2)}</td>
                                            <td className="py-4 px-4 text-center">
                                                <button 
                                                    className="bg-red-600 text-white font-bold py-1 px-3 rounded hover:bg-red-700 transition-colors"
                                                    onClick={() => handleDelete(item._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full md:w-1/4 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-lg sticky top-20 mt-4 md:mt-0 md:ml-4">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cart Summary</h2>
                            <p className="text-lg">Total Items: {totalItems}</p>
                            <p className="text-lg font-bold mt-2">Total Price: PKR:{totalPrice.toFixed(2)}</p>
                            <button className="mt-6 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
