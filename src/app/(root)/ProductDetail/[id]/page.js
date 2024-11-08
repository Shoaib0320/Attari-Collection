// // // // // "use client"

// // // // // // /app/ProductDetail/[id]/page.js
// // // // // import { useEffect, useState } from 'react';
// // // // // import Navbar from "@/components/Root-Navbar/Navbar";
// // // // // import { Button } from '@/components/ui/button';

// // // // // const ProductDetail = ({ params }) => {
// // // // //     const { id } = params;  // Retrieve the ID from params
// // // // //     const [product, setProduct] = useState(null);
// // // // //     const [quantity, setQuantity] = useState(1);

// // // // //     useEffect(() => {
// // // // //         const fetchProduct = async () => {
// // // // //             const response = await fetch(`/api/products/${id}`);
// // // // //             const data = await response.json();
// // // // //             setProduct(data);
// // // // //         };

// // // // //         if (id) {
// // // // //             fetchProduct();
// // // // //         }
// // // // //     }, [id]);

// // // // //     if (!product) return <div className='flex items-center justify-center my-20'>Loading...</div>;

// // // // //     const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
// // // // //     const handleDecrease = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

// // // // //     const totalPrice = product.price * quantity;

// // // // //     // Function to handle "Add to Cart" action
// // // // //     const handleAddToCart = async () => {
// // // // //         try {
// // // // //             const response = await fetch('/api/addToCart', {
// // // // //                 method: 'POST',
// // // // //                 headers: {
// // // // //                     'Content-Type': 'application/json'
// // // // //                 },
// // // // //                 body: JSON.stringify({
// // // // //                     productId: id,
// // // // //                     title: product.title,
// // // // //                     description: product.description,
// // // // //                     price: product.price,
// // // // //                     quantity,
// // // // //                     imageUrl: product.imageUrl,
// // // // //                     category: product.category?.title
// // // // //                 })
// // // // //             });

// // // // //             if (response.ok) {
// // // // //                 alert("Product added to cart successfully!");
// // // // //             } else {
// // // // //                 alert("Failed to add product to cart.");
// // // // //             }
// // // // //         } catch (error) {
// // // // //             console.error(error);
// // // // //             alert("An error occurred while adding the product to cart.");
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <div>
// // // // //             <Navbar />
// // // // //             <section className="text-gray-600 body-font overflow-hidden">
// // // // //                 <div className="container px-5 py-24 mx-auto">
// // // // //                     <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // // // //                         <img
// // // // //                             alt="ecommerce"
// // // // //                             className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
// // // // //                             src={product.imageUrl}
// // // // //                         />
// // // // //                         <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // // // //                             <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
// // // // //                                 Category: {product.category?.title}
// // // // //                             </h2>
// // // // //                             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// // // // //                                 {product.title}
// // // // //                             </h1>
// // // // //                             <p className="leading-relaxed">{product.description}</p>
// // // // //                             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
// // // // //                                 <div className="flex ml-6 items-center">
// // // // //                                     <span className="mr-3">Size</span>
// // // // //                                     <div className="relative">
// // // // //                                         <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
// // // // //                                             <option>SM</option>
// // // // //                                             <option>M</option>
// // // // //                                             <option>L</option>
// // // // //                                             <option>XL</option>
// // // // //                                         </select>
// // // // //                                     </div>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                             <div className="flex items-center justify-center gap-5">
// // // // //                                 <span className="title-font font-medium text-2xl text-gray-900">
// // // // //                                     PKR: {totalPrice.toFixed(2)}
// // // // //                                 </span>
// // // // //                                 <button
// // // // //                                     onClick={handleDecrease}
// // // // //                                     className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-black"
// // // // //                                 >
// // // // //                                     -
// // // // //                                 </button>
// // // // //                                 <p>{quantity}</p>
// // // // //                                 <button
// // // // //                                     onClick={handleIncrease}
// // // // //                                     className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black"
// // // // //                                 >
// // // // //                                     +
// // // // //                                 </button>
// // // // //                             </div>
// // // // //                             <Button
// // // // //                                 onClick={handleAddToCart}
// // // // //                                 className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black"
// // // // //                             >
// // // // //                                 Add To Cart
// // // // //                             </Button>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </section>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default ProductDetail;




// // // // // // "use client"

// // // // // // // app/components/ProductDetail.js
// // // // // // import { useEffect, useState } from "react";
// // // // // // import { useParams } from "next/navigation";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { fetchProductById } from "@/actions/ProductDetailAction";
// // // // // // import { auth } from "@/app/auth";

// // // // // // const ProductDetail = () => {
// // // // // //   const { id } = useParams();
// // // // // //   const session = auth();
// // // // // //   const [product, setProduct] = useState(null);
// // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // //   const [error, setError] = useState('');

// // // // // //   useEffect(() => {
// // // // // //     const fetchProduct = async () => {
// // // // // //       try {
// // // // // //         const data = await fetchProductById(id);
// // // // // //         setProduct(data);
// // // // // //       } catch (err) {
// // // // // //         setError(err.message);
// // // // // //       }
// // // // // //     };
// // // // // //     if (id) fetchProduct();
// // // // // //   }, [id]);

// // // // // //   const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
// // // // // //   const handleDecrease = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

// // // // // //   const totalPrice = product?.price * quantity;

// // // // // //   const handleAddToCart = async () => {
// // // // // //     if (!session?.user) {
// // // // // //       alert("You need to log in to add items to your cart.");
// // // // // //       return;
// // // // // //     }

// // // // // //     const cartData = {
// // // // // //       userId: session.user._id,  // Send user ID with cart data
// // // // // //       productId: product.id,
// // // // // //       quantity: quantity,
// // // // // //       totalPrice: totalPrice,
// // // // // //       description: product.description,
// // // // // //       price: product.price,
// // // // // //       title: product.title,
// // // // // //       imageUrl: product.imageUrl,
// // // // // //       category: product.category?.title,
// // // // // //     };

// // // // // //     try {
// // // // // //       const res = await fetch("/api/cart/add-to-cart", {
// // // // // //         method: "POST",
// // // // // //         headers: {
// // // // // //           "Content-Type": "application/json",
// // // // // //         },
// // // // // //         body: JSON.stringify(cartData),
// // // // // //       });

// // // // // //       const result = await res.json();
// // // // // //       if (res.ok) {
// // // // // //         alert(result.message);
// // // // // //       } else {
// // // // // //         alert(result.error);
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       alert("Error adding to cart");
// // // // // //     }
// // // // // //   };

// // // // // //   if (error) return <div>Error: {error}</div>;
// // // // // //   if (!product) return <div>Loading...</div>;

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <section className="text-gray-600 body-font overflow-hidden">
// // // // // //         <div className="container px-5 py-24 mx-auto">
// // // // // //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // // // // //             <img
// // // // // //               alt="ecommerce"
// // // // // //               className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
// // // // // //               src={product.imageUrl}
// // // // // //             />
// // // // // //             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // // // // //               <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
// // // // // //                 Category: {product.category?.title}
// // // // // //               </h2>
// // // // // //               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// // // // // //                 {product.title}
// // // // // //               </h1>
// // // // // //               <p className="leading-relaxed">{product.description}</p>
// // // // // //               <div className="flex items-center justify-center gap-5">
// // // // // //                 <span className="title-font font-medium text-2xl text-gray-900">
// // // // // //                   PKR: {totalPrice?.toFixed(2)}
// // // // // //                 </span>
// // // // // //                 <button
// // // // // //                   onClick={handleDecrease}
// // // // // //                   className="border-2 border-gray-300 rounded-md px-4 py-1"
// // // // // //                 >
// // // // // //                   -
// // // // // //                 </button>
// // // // // //                 <span>{quantity}</span>
// // // // // //                 <button
// // // // // //                   onClick={handleIncrease}
// // // // // //                   className="border-2 border-gray-300 rounded-md px-4 py-1"
// // // // // //                 >
// // // // // //                   +
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //               <Button onClick={handleAddToCart} className="mt-5">
// // // // // //                 Add to Cart
// // // // // //               </Button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductDetail;








// // // // // // /app/ProductDetail/[id]/page.js

'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
// import { auth } from '@/app/auth'

export default function ProductDetail({ params }) {
  // const session = await auth();

  // console.log("session =>" , session)

  const { id } = params // Get product id from URL params
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1) // Initialize quantity to 1

  // Fetch the session asynchronously
  // useEffect(() => {
  //   const logSession = async () => {
  //     try {
  //       const session = await auth(); // Fetch the session using auth()
  //       console.log("Session: ", session);
  //     } catch (error) {
  //       console.error("Error fetching session: ", error);
  //     }
  //   };
  //   logSession();
  // }, []); // Only run once when the component is mounted

  // Fetch product details based on the id
  const fetchProductDetail = async () => {
    try {
      const response = await fetch(`/api/products/${id}`) // Fetch the product by `id`
      if (!response.ok) {
        throw new Error("Failed to fetch product details")
      }
      const data = await response.json()
      setProduct(data) // Update state with product data
    } catch (error) {
      setError(error.message) // Set error message in state
    } finally {
      setLoading(false) // Set loading to false after the fetch completes
    }
  }

  // Fetch product details when component mounts or `id` changes
  useEffect(() => {
    fetchProductDetail()
  }, [id])

  const handleAddToCart = () => {
    // Implement add to cart functionality here
    alert("Added to cart!")
  }

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1)
    }
  }

  if (loading) {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Skeleton Loader */}
            <div className="lg:w-1/2 w-full h-96 bg-gray-300 rounded animate-pulse"></div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded mb-6 animate-pulse"></div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <span className="h-8 w-1/4 bg-gray-300 rounded animate-pulse"></span>
              </div>
              <div className="flex items-center mb-4">
                <button className="h-10 w-12 bg-gray-300 rounded animate-pulse"></button>
                <span className="mx-4 h-6 bg-gray-300 w-12 rounded animate-pulse"></span>
                <button className="h-10 w-12 bg-gray-300 rounded animate-pulse"></button>
              </div>
              <div className="h-12 w-32 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }


  if (error) {
    return <div>Error loading product details: {error}</div>
  }

  // Calculate the total price based on quantity and product price
  const totalPrice = product.price * quantity

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.title}
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product.imageUrl || "/placeholder.svg?height=400&width=720"}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
                 Category: {product.category?.title}
              </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <p className="leading-relaxed">
              {product.description || "No description available"}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <span className="title-font font-medium text-2xl text-gray-900">
                PKR: {totalPrice.toFixed(2)} {/* Show the total price based on quantity */}
              </span>
            </div>

            {/* Quantity adjustment controls */}
            <div className="flex items-center mb-4">
              <Button onClick={handleDecrement} className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-black">-</Button>
              <span className="mx-4 text-xl">{quantity}</span>
              <Button onClick={handleIncrement} className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black">+</Button>
            </div>

            <Button onClick={handleAddToCart} className="bg-gray-700 hover:bg-gray-300 hover:text-black">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}







// "use client";
// import { auth } from "@/app/auth";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";

// // Fetch the session for logged-in user
// // const fetchSession = async () => {
// //   try {
// //     const session = await auth(); // Get user session
// //     if (session) {
// //       // Aapka code jahan User ko access karna hai
// //       console.log(session)
// //     } else {
// //       // Agar user data available nahi hai toh yahan handle kar lo (for example, redirect ya message show karna)
// //       console.log('User data not available');
// //     }
// //     return session;
// //   } catch (error) {
// //     console.error("Error fetching session:", error);
// //     return null;
// //   }  
// // };



// const handleAddToCart = async (product, quantity, session) => {
//   if (!session) {
//     alert("Please log in to add items to your cart.");
//     return;
//   }

//   try {
//     // Construct the cart item data with the product and user data
//     const cartItem = {
//       userId: session?.user?._id, // Assuming session contains user._id
//       productId: product._id,
//       title: product.title,
//       imageUrl: product.imageUrl,
//       price: product.price,
//       quantity: quantity,
//     };

//     // Add to cart API request (Make sure the backend API route exists to handle this)
//     const response = await fetch("/api/addToCart", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(cartItem),
//     });

//     if (response.ok) {
//       alert("Added to cart successfully!");
//     } else {
//       throw new Error("Failed to add to cart.");
//     }
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//     alert("Something went wrong while adding the item to the cart.");
//   }
// };

// export default async function ProductDetail({ params }) {

//   // const session = await auth();

//   // console.log("session =>" , session)

//   const { id } = params;
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [session, setSession] = useState(null); // Initialize session state

//   // Fetch session on mount
//   useEffect(() => {
//     const fetchSession = async () => {
//       const session = await auth();
//       if (session) {
//         setSession(session);
//       }
//     };
  
//     fetchSession();
//   }, []);
  

//   // Fetch product details based on the id
//   const fetchProductDetail = async () => {
//     try {
//       const response = await fetch(`/api/products/${id}`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch product details");
//       }
//       const data = await response.json();
//       setProduct(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProductDetail();
//   }, [id]); // Re-fetch product details when `id` changes

//   if (loading) {
//     return (
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="lg:w-4/5 mx-auto flex flex-wrap">
//             <div className="lg:w-1/2 w-full h-96 bg-gray-300 rounded animate-pulse"></div>
//             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//               <div className="h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>
//               <div className="h-4 bg-gray-300 rounded mb-6 animate-pulse"></div>
//               <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
//                 <span className="h-8 w-1/4 bg-gray-300 rounded animate-pulse"></span>
//               </div>
//               <div className="flex items-center mb-4">
//                 <button className="h-10 w-12 bg-gray-300 rounded animate-pulse"></button>
//                 <span className="mx-4 h-6 bg-gray-300 w-12 rounded animate-pulse"></span>
//                 <button className="h-10 w-12 bg-gray-300 rounded animate-pulse"></button>
//               </div>
//               <div className="h-12 w-32 bg-gray-300 rounded animate-pulse"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return <div>Error loading product details: {error}</div>;
//   }

//   const totalPrice = product.price * quantity;

//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           <img
//             alt={product.title}
//             className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
//             src={product.imageUrl || "/placeholder.svg?height=400&width=720"}
//           />
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
//               Category: {product.category?.title}
//             </h2>
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//               {product.title}
//             </h1>
//             <p className="leading-relaxed">{product.description || "No description available"}</p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
//               <span className="title-font font-medium text-2xl text-gray-900">
//                 PKR: {totalPrice.toFixed(2)}
//               </span>
//             </div>

//             <div className="flex items-center mb-4">
//               <Button
//                 onClick={() => setQuantity(prev => prev - 1)}
//                 className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-black"
//               >
//                 -
//               </Button>
//               <span className="mx-4 text-xl">{quantity}</span>
//               <Button
//                 onClick={() => setQuantity(prev => prev + 1)}
//                 className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black"
//               >
//                 +
//               </Button>
//             </div>

//             <Button
//               onClick={() => handleAddToCart(product, quantity, session)}
//               className="bg-gray-700 hover:bg-gray-300 hover:text-black"
//             >
//               Add to Cart
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
