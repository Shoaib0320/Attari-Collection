'use client'

import { useState, useEffect } from 'react'
import { Loader2, Trash2 } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Component({ userId = '123' }) {
  const [cartItems, setCartItems] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [deleteLoading, setDeleteLoading] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [orderLoading, setOrderLoading] = useState(false)
  const [orderError, setOrderError] = useState(null)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`/api/addToCart?userId=${userId}`)
        const result = await response.json()
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


  const handleDelete = async (itemId) => {
    setDeleteLoading(itemId);
    try {
      const response = await fetch(`/api/addToCart?userId=${userId}&itemId=${itemId}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
        alert(result.message);
      } else {
        throw new Error(result.message || 'Failed to delete item');
      }      
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setDeleteLoading(null);
      setItemToDelete(null);
    }
  };

  // const handleCheckout = async (e) => {
  //   e.preventDefault()
  //   setOrderLoading(true)
  //   setOrderError(null)

  //   const orderData = {
  //     user: userId,
  //     number: phoneNumber,
  //     address,
  //     totalAmount: totalPrice,
  //     date: Date.now(),
  //     items: cartItems.map((item) => ({
  //       productId: item._id,
  //       quantity: item.quantity,
  //       price: item.price,
  //       title: item.title,
  //       category: item.category,
  //       image: item.imageUrl, // Include the image URL in the order data
  //     })),
  //   }

  //   try {
  //     const response = await fetch('/api/orders', {
  //       cache : 'no-cache',
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(orderData),
  //     })

  //     const result = await response.json()
  //     if (!response.ok) throw new Error(result.msg)

  //     // Clear the cart from MongoDB after successful order placement
  //     await fetch(`/api/addToCart?userId=${userId}`, {
  //       method: 'DELETE',
  //     })

  //     setOrderSuccess(true)
  //     setCartItems([])
  //     console.log("orderData =>", orderData)
  //   } catch (err) {
  //     setOrderError(err.message || 'Something went wrong')
  //   } finally {
  //     setOrderLoading(false)
  //   }
  // }

  const handleCheckout = async (e) => {
    e.preventDefault();
    setOrderLoading(true);
    setOrderError(null);

    const orderData = {
      user: userId,
      number: phoneNumber,
      address,
      totalAmount: totalPrice,
      date: Date.now(),
      items: cartItems.map((item) => ({
        productId: item._id,
        quantity: item.quantity,
        price: item.price,
        title: item.title,
        category: item.category,
        image: item.imageUrl, // Include the image URL in the order data
      })),
    };

    try {
      const response = await fetch('/api/orders', {
        cache: 'no-cache',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.msg);

      // Clear the cart after successful order placement
      await handleAllCartDelete(userId);

      setOrderSuccess(true);
      setCartItems([]);
      console.log("orderData =>", orderData);
    } catch (err) {
      setOrderError(err.message || 'Something went wrong');
    } finally {
      setOrderLoading(false);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

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
        ) : error ? (
          <div className="text-center text-red-500 text-xl">
            <p>Error fetching cart items: {error}</p>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Try Again
            </Button>
          </div>
        ) : cartItems.length === 0 ? (
          <p className="text-center text-gray-400 text-xl">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="hidden lg:block">
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
                                <div className="text-sm font-medium text-white">{item.title.slice(0,8)}</div>
                                <div className="text-sm text-gray-400">{item.category}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.quantity}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">PKR {item.price.toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">PKR {(item.price * item.quantity).toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <button
                                  onClick={() => setItemToDelete(item._id)}
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
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete the item from your cart.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleDelete(itemToDelete)}>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="lg:hidden space-y-4">
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
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button
                            onClick={() => setItemToDelete(item._id)}
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
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the item from your cart.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(itemToDelete)}>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold text-gold mb-4">Cart Summary</h2>
                <div className="space-y-2">
                  <p className="text-lg flex justify-between"><span>Total Items:</span> <span>{totalItems}</span></p>
                  <p className="text-lg font-bold flex justify-between"><span>Total Price:</span> <span>PKR {totalPrice.toFixed(2)}</span></p>
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="mt-6 w-full bg-gray-200 text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-500 hover:text-white transition-colors shadow-md">
                      Checkout
                    </Button>
                  </SheetTrigger>
                  <SheetContent className='overflow-y-auto'>
                    <SheetHeader>
                      <SheetTitle>Checkout</SheetTitle>
                      <SheetDescription>Complete your order details</SheetDescription>
                    </SheetHeader>
                    <form onSubmit={handleCheckout} className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Order Summary</h3>
                        <div className="mt-2 pt-2 border-t border-gray-200 font-bold flex justify-between">
                          <span>Total:</span>
                          <span>PKR {totalPrice.toFixed(2)}</span>
                        </div>
                      </div>
                      <Button type="submit" disabled={orderLoading} className="w-full">
                        {orderLoading ? 'Processing...' : 'Place Order'}
                      </Button>
                      {orderError && <p className="text-red-500 text-sm">{orderError}</p>}
                      {orderSuccess && <p className="text-green-500 text-sm">Order placed successfully!</p>}
                    </form>
                  </SheetContent>
                </Sheet>
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


// Function to delete all cart items for a given user
async function handleAllCartDelete(userId) {
  try {
    const response = await fetch(`/api/addToCart?userId=${userId}`, {
      method: 'DELETE',
    });

    const result = await response.json();

    if (result.success) {
      // Handle successful deletion, e.g., display a success message
      console.log('All cart items deleted successfully.');
    } else {
      console.error('Error deleting cart items:', result.message);
    }
  } catch (error) {
    console.error('Error deleting cart items:', error);
  }
}