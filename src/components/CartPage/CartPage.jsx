// 'use client'

// import { deleteCarts, getCarts } from '@/actions/addToCartAction'
// import { useEffect, useState } from 'react'
// import { Loader2, Trash2 } from 'lucide-react'

// export default function Component({ userId = '123' }) {
//   const [cartItems, setCartItems] = useState([])
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const result = await getCarts(userId)
//         if (result.success) {
//           setCartItems(result.data)
//         } else {
//           throw new Error(result.message)
//         }
//       } catch (err) {
//         setError(err.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchCartItems()
//   }, [userId])

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

//   const handleDelete = async (itemId) => {
//     try {
//       const result = await deleteCarts(itemId)
//       if (result.success) {
//         setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId))
//       } else {
//         throw new Error(result.message || 'Failed to delete item')
//       }
//     } catch (err) {
//       setError(err.message)
//     }
//   }

//   if (error) return (
//     <div className="flex items-center justify-center h-screen bg-gray-900">
//       <p className="text-center text-red-500 text-xl">Error fetching cart items: {error}</p>
//     </div>
//   )

//   return (
//     <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-center text-4xl font-bold mb-10 text-gold">Your VIP Cart</h1>
//         {loading ? (
//           <CartSkeleton />
//         ) : cartItems.length === 0 ? (
//           <p className="text-center text-gray-400 text-xl">Your VIP cart is empty.</p>
//         ) : (
//           <div className="flex flex-col lg:flex-row gap-8">
//             <div className="flex-1">
//               <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
//                 <table className="min-w-full divide-y divide-gray-700">
//                   <thead className="bg-gray-700">
//                     <tr>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Item</th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Quantity</th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total</th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-gray-800 divide-y divide-gray-700">
//                     {cartItems.map((item) => (
//                       <tr key={item._id} className="transition-colors hover:bg-gray-700">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="flex-shrink-0 h-20 w-20">
//                               <img className="h-20 w-20 rounded-md object-cover" src={item.imageUrl} alt={item.title} />
//                             </div>
//                             <div className="ml-4">
//                               <div className="text-sm font-medium text-white">{item.title}</div>
//                               <div className="text-sm text-gray-400">{item.category}</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.quantity}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-white">PKR {item.price.toFixed(2)}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-white">PKR {(item.price * item.quantity).toFixed(2)}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                           <button
//                             onClick={() => handleDelete(item._id)}
//                             className="text-red-400 hover:text-red-300 transition-colors"
//                           >
//                             <Trash2 className="h-5 w-5" />
//                             <span className="sr-only">Delete</span>
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className="lg:w-1/3">
//               <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
//                 <h2 className="text-2xl font-semibold text-gold mb-4">VIP Cart Summary</h2>
//                 <div className="space-y-2">
//                   <p className="text-lg flex justify-between"><span>Total Items:</span> <span>{totalItems}</span></p>
//                   <p className="text-lg font-bold flex justify-between"><span>Total Price:</span> <span>PKR {totalPrice.toFixed(2)}</span></p>
//                 </div>
//                 <button className="mt-6 w-full bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-500 hover:text-white transition-colors shadow-md">
//                   Checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// function CartSkeleton() {
//   return (
//     <div className="animate-pulse">
//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="flex-1">
//           <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
//             <div className="h-16 bg-gray-700"></div>
//             {[...Array(3)].map((_, i) => (
//               <div key={i} className="flex items-center p-4 border-b border-gray-700">
//                 <div className="w-20 h-20 bg-gray-700 rounded-md mr-4"></div>
//                 <div className="flex-1">
//                   <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
//                   <div className="h-4 bg-gray-700 rounded w-1/2"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="lg:w-1/3">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
//             <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
//             <div className="space-y-2">
//               <div className="h-4 bg-gray-700 rounded"></div>
//               <div className="h-4 bg-gray-700 rounded"></div>
//             </div>
//             <div className="mt-6 h-12 bg-gray-700 rounded"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



'use client'

import { deleteCarts, getCarts } from '@/actions/addToCartAction'
import { useEffect, useState } from 'react'
import { Loader2, Trash2 } from 'lucide-react'

export default function Component({ userId = '123' }) {
  const [cartItems, setCartItems] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [deleteLoading, setDeleteLoading] = useState(null)

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const result = await getCarts(userId)
        if (result.success) {
          setCartItems(result.data)
        } else {
          throw new Error(result.message)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCartItems()
  }, [userId])

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleDelete = async (itemId) => {
    setDeleteLoading(itemId)
    try {
      const result = await deleteCarts(itemId)
      if (result.success) {
        setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId))
      } else {
        throw new Error(result.message || 'Failed to delete item')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setDeleteLoading(null)
    }
  }

  if (error) return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <p className="text-center text-red-500 text-xl">Error fetching cart items: {error}</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-10 text-gold">Your Cart</h1>
        {loading ? (
          <CartSkeleton />
        ) : cartItems.length === 0 ? (
          <p className="text-center text-gray-400 text-xl">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="hidden lg:block"> {/* Desktop view */}
                <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Item</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Quantity</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                      {cartItems.map((item) => (
                        <tr key={item._id} className="transition-colors hover:bg-gray-700">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-20 w-20">
                                <img className="h-20 w-20 rounded-md object-cover" src={item.imageUrl} alt={item.title} />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-white">{item.title}</div>
                                <div className="text-sm text-gray-400">{item.category}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.quantity}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">PKR {item.price.toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">PKR {(item.price * item.quantity).toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => handleDelete(item._id)}
                              disabled={deleteLoading === item._id}
                              className="text-red-400 hover:text-red-300 transition-colors disabled:opacity-50"
                            >
                              {deleteLoading === item._id ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                              ) : (
                                <Trash2 className="h-5 w-5" />
                              )}
                              <span className="sr-only">Delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="lg:hidden space-y-4"> {/* Mobile view */}
                {cartItems.map((item) => (
                  <div key={item._id} className="bg-gray-800 rounded-lg p-4 shadow-xl">
                    <div className="flex items-center mb-4">
                      <img className="h-20 w-20 rounded-md object-cover mr-4" src={item.imageUrl} alt={item.title} />
                      <div>
                        <h3 className="text-sm font-medium text-white">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.category}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-white">Quantity: {item.quantity}</p>
                      <p className="text-sm text-white">Price: PKR {item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm font-bold text-white">Total: PKR {(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => handleDelete(item._id)}
                        disabled={deleteLoading === item._id}
                        className="text-red-400 hover:text-red-300 transition-colors disabled:opacity-50"
                      >
                        {deleteLoading === item._id ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <Trash2 className="h-5 w-5" />
                        )}
                        <span className="sr-only">Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold text-gold mb-4">VIP Cart Summary</h2>
                <div className="space-y-2">
                  <p className="text-lg flex justify-between"><span>Total Items:</span> <span>{totalItems}</span></p>
                  <p className="text-lg font-bold flex justify-between"><span>Total Price:</span> <span>PKR {totalPrice.toFixed(2)}</span></p>
                </div>
                 <button className="mt-6 w-full bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-500 hover:text-white transition-colors shadow-md">
                    Checkout
                 </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function CartSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="h-16 bg-gray-700"></div>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center p-4 border-b border-gray-700">
                <div className="w-20 h-20 bg-gray-700 rounded-md mr-4"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-700 rounded"></div>
            </div>
            <div className="mt-6 h-12 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}