// // // 'use client'

// // // import { addOrders } from '@/actions/ordersActions';
// // // import { useState } from 'react';

// // // export default function CheckoutForm({ cartItems, userId }) {
// // //   const [formData, setFormData] = useState({ address: '', number: '' });
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [success, setSuccess] = useState(null);

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError(null);
// // //     setSuccess(null);

// // //     const orderData = {
// // //       user: userId,
// // //       address: formData.address,
// // //       number: formData.number,
// // //       products: cartItems.map((item) => ({
// // //         productId: item._id,
// // //         title : item.title,
// // //         quantity: item.quantity,
// // //         category: item?.category?.title,
// // //         price: item.price
// // //       })),
// // //     };

// // //     const result = await addOrders(orderData);

// // //     if (result.success) {
// // //       setSuccess('Order placed successfully!');
// // //     } else {
// // //       setError(result.error || 'Failed to place order');
// // //     }

// // //     setLoading(false);
// // //   };

// // //   return (
// // //     <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
// // //       <h2 className="text-2xl font-semibold text-gold mb-4">Checkout Form</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <div className="mb-4">
// // //           <label htmlFor="address" className="block text-sm font-medium text-gray-200">
// // //             Address
// // //           </label>
// // //           <input
// // //             type="text"
// // //             name="address"
// // //             id="address"
// // //             value={formData.address}
// // //             onChange={handleInputChange}
// // //             required
// // //             className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm"
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label htmlFor="number" className="block text-sm font-medium text-gray-200">
// // //             Contact Number
// // //           </label>
// // //           <input
// // //             type="text"
// // //             name="number"
// // //             id="number"
// // //             value={formData.number}
// // //             onChange={handleInputChange}
// // //             required
// // //             className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm"
// // //           />
// // //         </div>
// // //         <button
// // //           type="submit"
// // //           disabled={loading}
// // //           className="mt-6 w-full bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-500 hover:text-white transition-colors shadow-md"
// // //         >
// // //           {loading ? 'Placing Order...' : 'Place Order'}
// // //         </button>
// // //         {error && <p className="text-red-500 mt-2">{error}</p>}
// // //         {success && <p className="text-green-500 mt-2">{success}</p>}
// // //       </form>
// // //     </div>
// // //   );
// // // }









// // // 'use client';

// // // import { addOrders } from '@/actions/ordersActions';
// // // import { useState } from 'react';

// // // export default function CheckoutForm({ cartItems, userId }) {
// // //   const [formData, setFormData] = useState({ address: '', number: '' });
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [success, setSuccess] = useState(null);

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError(null);
// // //     setSuccess(null);

// // //     // Preparing the order data
// // //     const orderData = {
// // //       user: userId,
// // //       address: formData.address,
// // //       number: formData.number,
// // //       products: cartItems.map((item) => ({
// // //         productId: item._id, // Ensure the item ID is passed correctly
// // //         title: item.title,
// // //         category: item.category?._id, // Pass the category as ObjectId
// // //         quantity: item.quantity,
// // //       })),
// // //     };

// // //     // Sending data to the backend
// // //     const result = await addOrders(orderData);

// // //     if (result?.error) {
// // //       setError(result.msg || 'Failed to place order');
// // //     } else {
// // //       setSuccess('Order placed successfully!');
// // //     }

// // //     setLoading(false);
// // //   };

// // //   return (
// // //     <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
// // //       <h2 className="text-2xl font-semibold text-gold mb-4">Checkout Form</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <div className="mb-4">
// // //           <label htmlFor="address" className="block text-sm font-medium text-gray-200">
// // //             Address
// // //           </label>
// // //           <input
// // //             type="text"
// // //             name="address"
// // //             id="address"
// // //             value={formData.address}
// // //             onChange={handleInputChange}
// // //             required
// // //             className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm"
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label htmlFor="number" className="block text-sm font-medium text-gray-200">
// // //             Contact Number
// // //           </label>
// // //           <input
// // //             type="text"
// // //             name="number"
// // //             id="number"
// // //             value={formData.number}
// // //             onChange={handleInputChange}
// // //             required
// // //             className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm"
// // //           />
// // //         </div>
// // //         <button
// // //           type="submit"
// // //           disabled={loading}
// // //           className="mt-6 w-full bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-500 hover:text-white transition-colors shadow-md"
// // //         >
// // //           {loading ? 'Placing Order...' : 'Place Order'}
// // //         </button>
// // //         {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
// // //         {success && <p className="text-green-500 mt-2 text-center">{success}</p>}
// // //       </form>
// // //     </div>
// // //   );
// // // }








// // 'use client'

// // import { addOrders } from '@/actions/ordersActions'
// // import { useState } from 'react'

// // export default function CheckoutForm({ cartItems, userId }) {
// //   const [formData, setFormData] = useState({ name: '', address: '', number: '' })
// //   const [loading, setLoading] = useState(false)
// //   const [error, setError] = useState(null)
// //   const [success, setSuccess] = useState(null)

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData({ ...formData, [name]: value })
// //   }

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError(null);
// //     setSuccess(null);
  
// //     // Preparing the order data
// //     const orderData = {
// //       user: userId,
// //       name: 'firstName',  // Replace with the user's name
// //       number: formData.number,
// //       address: formData.address,
// //       products: cartItems.map((item) => ({
// //         productId: item._id, // Ensure the item ID is passed correctly
// //         title: item.title,
// //         price: item.price,   // Ensure price is passed correctly
// //         quantity: item.quantity,
// //       })),
// //     };
  
// //     // Sending data to the backend
// //     const result = await addOrders(orderData);
  
// //     if (result?.error) {
// //       setError(result.msg || 'Failed to place order');
// //     } else {
// //       setSuccess('Order placed successfully!');
// //     }
  
// //     setLoading(false);
// //   };
  

// //   return (
// //     <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
// //       <h2 className="text-2xl font-semibold text-gold mb-4">Checkout Form</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="mb-4">
// //           <label htmlFor="name" className="block text-sm font-medium text-gray-200">
// //             Full Name
// //           </label>
// //           <input
// //             type="text"
// //             name="name"
// //             id="name"
// //             value={formData.name}
// //             onChange={handleInputChange}
// //             required
// //             className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label htmlFor="address" className="block text-sm font-medium text-gray-200">
// //             Address
// //           </label>
// //           <input
// //             type="text"
// //             name="address"
// //             id="address"
// //             value={formData.address}
// //             onChange={handleInputChange}
// //             required
// //             className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label htmlFor="number" className="block text-sm font-medium text-gray-200">
// //             Contact Number
// //           </label>
// //           <input
// //             type="text"
// //             name="number"
// //             id="number"
// //             value={formData.number}
// //             onChange={handleInputChange}
// //             required
// //             className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="mt-6 w-full bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-500 hover:text-white transition-colors shadow-md"
// //         >
// //           {loading ? 'Placing Order...' : 'Place Order'}
// //         </button>
// //         {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
// //         {success && <p className="text-green-500 mt-2 text-center">{success}</p>}
// //       </form>
// //     </div>
// //   )
// // }


// 'use client'

// import { addOrders } from "@/actions/ordersActions";
// import { useState } from "react";

// export default function CheckoutForm({ cartItems, userId }) {
//   const [formData, setFormData] = useState({ address: "", number: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     // Preparing the order data
//     const orderData = {
//       user: userId,
//       address: formData.address,
//       number: formData.number,
//       products: cartItems.map((item) => ({
//         productId: item._id,
//         title: item.title,
//         price: item.price,
//         quantity: item.quantity,
//       })),
//       totalAmount: cartItems.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//       ),
//       orderStatus: "Pending", // Default order status
//     };

//     // Sending data using getOrders
//     const result = await addOrders(orderData);

//     if (result.error) {
//       setError(result.msg || "Failed to place order");
//     } else {
//       setSuccess("Order placed successfully!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold text-gold mb-4">Checkout Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="address" className="block text-sm font-medium text-gray-200">
//             Address
//           </label>
//           <input
//             type="text"
//             name="address"
//             id="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             required
//             className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="number" className="block text-sm font-medium text-gray-200">
//             Contact Number
//           </label>
//           <input
//             type="text"
//             name="number"
//             id="number"
//             value={formData.number}
//             onChange={handleInputChange}
//             required
//             className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm"
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           className="mt-6 w-full bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-500 hover:text-white transition-colors shadow-md"
//         >
//           {loading ? "Placing Order..." : "Place Order"}
//         </button>
//         {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
//         {success && <p className="text-green-500 mt-2 text-center">{success}</p>}
//       </form>
//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutForm({ userId, cartItems }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const orderData = {
      user: userId,
      number: phoneNumber,
      address,
      items: cartItems.map((item) => ({
        productId: item._id,
        quantity: item.quantity,
        price: item.price,
        title: item.title,
        category: item.category,
      })),
    };

    console.log("orderData=>",orderData);
    

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.msg);

      alert('Order placed successfully!');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-gold">Checkout</h1>
        <form onSubmit={handleCheckout}>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-400">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full mt-2 p-2 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-400">Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mt-2 p-2 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <h2 className="text-lg font-bold mb-4 text-gold">Order Summary</h2>
          <ul className="mb-6">
            {cartItems.map((item) => (
              <li key={item._id} className="flex justify-between text-sm mb-2">
                <span>{item.title} (x{item.quantity})</span>
                <span>PKR {(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-200 text-gray-900 font-bold py-2 rounded hover:bg-gray-500 hover:text-white transition-colors"
          >
            {loading ? 'Processing...' : 'Place Order'}
          </button>
          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}
