// // // // // // // // "use client"

// // // // // // // // // /app/ProductDetail/[id]/page.js
// // // // // // // // import { useEffect, useState } from 'react';
// // // // // // // // import Navbar from "@/components/Root-Navbar/Navbar";
// // // // // // // // import { Button } from '@/components/ui/button';

// // // // // // // // const ProductDetail = ({ params }) => {
// // // // // // // //     const { id } = params;  // Retrieve the ID from params
// // // // // // // //     const [product, setProduct] = useState(null);
// // // // // // // //     const [quantity, setQuantity] = useState(1);

// // // // // // // //     useEffect(() => {
// // // // // // // //         const fetchProduct = async () => {
// // // // // // // //             const response = await fetch(`/api/products/${id}`);
// // // // // // // //             const data = await response.json();
// // // // // // // //             setProduct(data);
// // // // // // // //         };

// // // // // // // //         if (id) {
// // // // // // // //             fetchProduct();
// // // // // // // //         }
// // // // // // // //     }, [id]);

// // // // // // // //     if (!product) return <div className='flex items-center justify-center my-20'>Loading...</div>;

// // // // // // // //     const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
// // // // // // // //     const handleDecrease = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

// // // // // // // //     const totalPrice = product.price * quantity;

// // // // // // // //     // Function to handle "Add to Cart" action
// // // // // // // //     const handleAddToCart = async () => {
// // // // // // // //         try {
// // // // // // // //             const response = await fetch('/api/addToCart', {
// // // // // // // //                 method: 'POST',
// // // // // // // //                 headers: {
// // // // // // // //                     'Content-Type': 'application/json'
// // // // // // // //                 },
// // // // // // // //                 body: JSON.stringify({
// // // // // // // //                     productId: id,
// // // // // // // //                     title: product.title,
// // // // // // // //                     description: product.description,
// // // // // // // //                     price: product.price,
// // // // // // // //                     quantity,
// // // // // // // //                     imageUrl: product.imageUrl,
// // // // // // // //                     category: product.category?.title
// // // // // // // //                 })
// // // // // // // //             });

// // // // // // // //             if (response.ok) {
// // // // // // // //                 alert("Product added to cart successfully!");
// // // // // // // //             } else {
// // // // // // // //                 alert("Failed to add product to cart.");
// // // // // // // //             }
// // // // // // // //         } catch (error) {
// // // // // // // //             console.error(error);
// // // // // // // //             alert("An error occurred while adding the product to cart.");
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <div>
// // // // // // // //             <Navbar />
// // // // // // // //             <section className="text-gray-600 body-font overflow-hidden">
// // // // // // // //                 <div className="container px-5 py-24 mx-auto">
// // // // // // // //                     <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // // // // // // //                         <img
// // // // // // // //                             alt="ecommerce"
// // // // // // // //                             className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
// // // // // // // //                             src={product.imageUrl}
// // // // // // // //                         />
// // // // // // // //                         <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // // // // // // //                             <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
// // // // // // // //                                 Category: {product.category?.title}
// // // // // // // //                             </h2>
// // // // // // // //                             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// // // // // // // //                                 {product.title}
// // // // // // // //                             </h1>
// // // // // // // //                             <p className="leading-relaxed">{product.description}</p>
// // // // // // // //                             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
// // // // // // // //                                 <div className="flex ml-6 items-center">
// // // // // // // //                                     <span className="mr-3">Size</span>
// // // // // // // //                                     <div className="relative">
// // // // // // // //                                         <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
// // // // // // // //                                             <option>SM</option>
// // // // // // // //                                             <option>M</option>
// // // // // // // //                                             <option>L</option>
// // // // // // // //                                             <option>XL</option>
// // // // // // // //                                         </select>
// // // // // // // //                                     </div>
// // // // // // // //                                 </div>
// // // // // // // //                             </div>
// // // // // // // //                             <div className="flex items-center justify-center gap-5">
// // // // // // // //                                 <span className="title-font font-medium text-2xl text-gray-900">
// // // // // // // //                                     PKR: {totalPrice.toFixed(2)}
// // // // // // // //                                 </span>
// // // // // // // //                                 <button
// // // // // // // //                                     onClick={handleDecrease}
// // // // // // // //                                     className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-black"
// // // // // // // //                                 >
// // // // // // // //                                     -
// // // // // // // //                                 </button>
// // // // // // // //                                 <p>{quantity}</p>
// // // // // // // //                                 <button
// // // // // // // //                                     onClick={handleIncrease}
// // // // // // // //                                     className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black"
// // // // // // // //                                 >
// // // // // // // //                                     +
// // // // // // // //                                 </button>
// // // // // // // //                             </div>
// // // // // // // //                             <Button
// // // // // // // //                                 onClick={handleAddToCart}
// // // // // // // //                                 className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black"
// // // // // // // //                             >
// // // // // // // //                                 Add To Cart
// // // // // // // //                             </Button>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                 </div>
// // // // // // // //             </section>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default ProductDetail;




// // // // // // // // // "use client"

// // // // // // // // // // app/components/ProductDetail.js
// // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // import { useParams } from "next/navigation";
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { fetchProductById } from "@/actions/ProductDetailAction";
// // // // // // // // // import { auth } from "@/app/auth";

// // // // // // // // // const ProductDetail = () => {
// // // // // // // // //   const { id } = useParams();
// // // // // // // // //   const session = auth();
// // // // // // // // //   const [product, setProduct] = useState(null);
// // // // // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // // // // //   const [error, setError] = useState('');

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchProduct = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const data = await fetchProductById(id);
// // // // // // // // //         setProduct(data);
// // // // // // // // //       } catch (err) {
// // // // // // // // //         setError(err.message);
// // // // // // // // //       }
// // // // // // // // //     };
// // // // // // // // //     if (id) fetchProduct();
// // // // // // // // //   }, [id]);

// // // // // // // // //   const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
// // // // // // // // //   const handleDecrease = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

// // // // // // // // //   const totalPrice = product?.price * quantity;

// // // // // // // // //   const handleAddToCart = async () => {
// // // // // // // // //     if (!session?.user) {
// // // // // // // // //       alert("You need to log in to add items to your cart.");
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     const cartData = {
// // // // // // // // //       userId: session.user._id,  // Send user ID with cart data
// // // // // // // // //       productId: product.id,
// // // // // // // // //       quantity: quantity,
// // // // // // // // //       totalPrice: totalPrice,
// // // // // // // // //       description: product.description,
// // // // // // // // //       price: product.price,
// // // // // // // // //       title: product.title,
// // // // // // // // //       imageUrl: product.imageUrl,
// // // // // // // // //       category: product.category?.title,
// // // // // // // // //     };

// // // // // // // // //     try {
// // // // // // // // //       const res = await fetch("/api/cart/add-to-cart", {
// // // // // // // // //         method: "POST",
// // // // // // // // //         headers: {
// // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // //         },
// // // // // // // // //         body: JSON.stringify(cartData),
// // // // // // // // //       });

// // // // // // // // //       const result = await res.json();
// // // // // // // // //       if (res.ok) {
// // // // // // // // //         alert(result.message);
// // // // // // // // //       } else {
// // // // // // // // //         alert(result.error);
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       alert("Error adding to cart");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   if (error) return <div>Error: {error}</div>;
// // // // // // // // //   if (!product) return <div>Loading...</div>;

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <section className="text-gray-600 body-font overflow-hidden">
// // // // // // // // //         <div className="container px-5 py-24 mx-auto">
// // // // // // // // //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // // // // // // // //             <img
// // // // // // // // //               alt="ecommerce"
// // // // // // // // //               className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
// // // // // // // // //               src={product.imageUrl}
// // // // // // // // //             />
// // // // // // // // //             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // // // // // // // //               <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
// // // // // // // // //                 Category: {product.category?.title}
// // // // // // // // //               </h2>
// // // // // // // // //               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// // // // // // // // //                 {product.title}
// // // // // // // // //               </h1>
// // // // // // // // //               <p className="leading-relaxed">{product.description}</p>
// // // // // // // // //               <div className="flex items-center justify-center gap-5">
// // // // // // // // //                 <span className="title-font font-medium text-2xl text-gray-900">
// // // // // // // // //                   PKR: {totalPrice?.toFixed(2)}
// // // // // // // // //                 </span>
// // // // // // // // //                 <button
// // // // // // // // //                   onClick={handleDecrease}
// // // // // // // // //                   className="border-2 border-gray-300 rounded-md px-4 py-1"
// // // // // // // // //                 >
// // // // // // // // //                   -
// // // // // // // // //                 </button>
// // // // // // // // //                 <span>{quantity}</span>
// // // // // // // // //                 <button
// // // // // // // // //                   onClick={handleIncrease}
// // // // // // // // //                   className="border-2 border-gray-300 rounded-md px-4 py-1"
// // // // // // // // //                 >
// // // // // // // // //                   +
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //               <Button onClick={handleAddToCart} className="mt-5">
// // // // // // // // //                 Add to Cart
// // // // // // // // //               </Button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ProductDetail;








// // // // // // // // // /app/ProductDetail/[id]/page.js

// // // 'use client'

// // // import { useState, useEffect } from 'react'
// // // import { Button } from "@/components/ui/button"
// // // // import { auth } from '@/app/auth'

// // // export default function ProductDetail({ params }) {
// // //   // const session = await auth();

// // //   // console.log("session =>" , session)

// // //   const { id } = params // Get product id from URL params
// // //   const [product, setProduct] = useState(null)
// // //   const [loading, setLoading] = useState(true)
// // //   const [error, setError] = useState(null)
// // //   const [quantity, setQuantity] = useState(1) // Initialize quantity to 1

// // //   // Fetch the session asynchronously
// // //   // useEffect(() => {
// // //   //   const logSession = async () => {
// // //   //     try {
// // //   //       const session = await auth(); // Fetch the session using auth()
// // //   //       console.log("Session: ", session);
// // //   //     } catch (error) {
// // //   //       console.error("Error fetching session: ", error);
// // //   //     }
// // //   //   };
// // //   //   logSession();
// // //   // }, []); // Only run once when the component is mounted

// // //   // Fetch product details based on the id
// // //   const fetchProductDetail = async () => {
// // //     try {
// // //       const response = await fetch(`/api/products/${id}`) // Fetch the product by `id`
// // //       if (!response.ok) {
// // //         throw new Error("Failed to fetch product details")
// // //       }
// // //       const data = await response.json()
// // //       setProduct(data) // Update state with product data
// // //     } catch (error) {
// // //       setError(error.message) // Set error message in state
// // //     } finally {
// // //       setLoading(false) // Set loading to false after the fetch completes
// // //     }
// // //   }

// // //   // Fetch product details when component mounts or `id` changes
// // //   useEffect(() => {
// // //     fetchProductDetail()
// // //   }, [id])

// // //   const handleAddToCart = () => {
// // //     // Implement add to cart functionality here
// // //     alert("Added to cart!")
// // //   }

// // //   const handleIncrement = () => {
// // //     setQuantity(prevQuantity => prevQuantity + 1)
// // //   }

// // //   const handleDecrement = () => {
// // //     if (quantity > 1) {
// // //       setQuantity(prevQuantity => prevQuantity - 1)
// // //     }
// // //   }

// // //   if (loading) {
// // //     return (
// // //       <section className="text-gray-600 body-font">
// // //         <div className="container px-5 py-24 mx-auto">
// // //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // //             {/* Skeleton Loader */}
// // //             <div className="lg:w-1/2 w-full h-96 bg-gray-300 rounded animate-pulse"></div>
// // //             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // //               <div className="h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>
// // //               <div className="h-4 bg-gray-300 rounded mb-6 animate-pulse"></div>
// // //               <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
// // //                 <span className="h-8 w-1/4 bg-gray-300 rounded animate-pulse"></span>
// // //               </div>
// // //               <div className="flex items-center mb-4">
// // //                 <button className="h-10 w-12 bg-gray-300 rounded animate-pulse"></button>
// // //                 <span className="mx-4 h-6 bg-gray-300 w-12 rounded animate-pulse"></span>
// // //                 <button className="h-10 w-12 bg-gray-300 rounded animate-pulse"></button>
// // //               </div>
// // //               <div className="h-12 w-32 bg-gray-300 rounded animate-pulse"></div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     )
// // //   }


// // //   if (error) {
// // //     return <div>Error loading product details: {error}</div>
// // //   }

// // //   // Calculate the total price based on quantity and product price
// // //   const totalPrice = product.price * quantity

// // //   return (
// // //     <section className="text-gray-600 body-font">
// // //       <div className="container px-5 py-24 mx-auto">
// // //         <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // //           <img
// // //             alt={product.title}
// // //             className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
// // //             src={product.imageUrl || "/placeholder.svg?height=400&width=720"}
// // //           />
// // //           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // //               <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
// // //                  Category: {product.category?.title}
// // //               </h2>
// // //             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// // //               {product.title}
// // //             </h1>
// // //             <p className="leading-relaxed">
// // //               {product.description || "No description available"}
// // //             </p>
// // //             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
// // //               <span className="title-font font-medium text-2xl text-gray-900">
// // //                 PKR: {totalPrice.toFixed(2)} {/* Show the total price based on quantity */}
// // //               </span>
// // //             </div>

// // //             {/* Quantity adjustment controls */}
// // //             <div className="flex items-center mb-4">
// // //               <Button onClick={handleDecrement} className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-black">-</Button>
// // //               <span className="mx-4 text-xl">{quantity}</span>
// // //               <Button onClick={handleIncrement} className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black">+</Button>
// // //             </div>

// // //             <Button onClick={handleAddToCart} className="bg-gray-700 hover:bg-gray-300 hover:text-black">
// // //               Add to Cart
// // //             </Button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }






// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { useSession } from "next-auth/react";
// import { toast } from "react-hot-toast";

// export default function ProductDetail({ params }) {
//   const { id } = params;
//   const { data: session } = useSession();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [quantity, setQuantity] = useState(1);

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
//   }, [id]);

 
  
//   const handleAddToCart = async () => {
//     try {
//       // Log the product and session to ensure they're correct
//       console.log("Product:", product);
//       console.log("Session:", session);
  
//       // Check if product and session are defined and have the correct ids
//       if (!product || !product._id || !session || !session.user || !session.user._id) {
//         throw new Error("Missing product or session data");
//       }
  
//       const res = await fetch('/api/addToCart', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           productId: product._id,  // Use product._id instead of product.id
//           userId: session.user._id,  // Use session.user._id instead of session.user.id
//           quantity,
//         }),
//       });
  
//       if (!res.ok) throw new Error('Failed to add to cart');
//       toast.success('Added to cart!');
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
  
  
  
//   const handleIncrement = () => {
//     setQuantity(prevQuantity => prevQuantity + 1)
//   }

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(prevQuantity => prevQuantity - 1)
//     }
//   }

//   if (loading) {
//     return(
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="lg:w-4/5 mx-auto flex flex-wrap">
//             {/* Skeleton Loader */}
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
//     )
//   }

//   if (error) {
//     return <div>Error loading product details: {error}</div>
//   }

//     const totalPrice = product?.price * quantity;
  

//   return (
//     <section>
//       {product ? (
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//            <img
//               alt={product.title}
//               className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
//               src={product.imageUrl || "/placeholder.svg?height=400&width=720"}
//             />
//             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//               <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
//                 Category: {product.category?.title}
//               </h2>
//               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//                 {product.title}
//               </h1>
//               <p className="leading-relaxed">
//                 {product.description || "No description available"}
//               </p>
//               {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
//                 <span className="title-font font-medium text-2xl text-gray-900">
//                   PKR: {totalPrice.toFixed(2)}
//                 </span>
//               </div>

//               <div className="flex items-center mb-4">
//                 <Button onClick={handleDecrement} className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-black">-</Button>
//                 <span className="mx-4 text-xl">{quantity}</span>
//                 <Button onClick={handleIncrement} className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black">+</Button>
//               </div>

//               <Button onClick={handleAddToCart} className="bg-gray-700 hover:bg-gray-300 hover:text-black">
//                 Add to Cart
//               </Button> */}
//             <div className="flex items-center justify-between gap-5">
//                <span className="title-font font-medium text-2xl text-gray-900">
//                    PKR: {totalPrice?.toFixed(2)}
//                  </span>
//                     <button
//                       onClick={handleDecrement}
//                       className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 focus:outline-none hover:bg-gray-300 hover:text-black"
//                       >
//                         -
//                     </button>
//                       <p>{quantity}</p>
//                       <button
//                         onClick={handleIncrement}
//                         className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black mr-5"
//                           >
//                         +
//                     </button>
//                </div>
//                <Button onClick={handleAddToCart} 
//                   className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black">
//                  Add to Cart
//                </Button>
//              </div>              
//           </div>
//         </div>                
//       ) : (
//         <p>Product not found.</p>
//       )}
//     </section>
//   );
// }















"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { addCarts, addToCart } from "@/actions/addToCartAction"; // Assuming the function is imported from actions

export default function ProductDetail({ params }) {
  const { id } = params;
  const { data: session } = useSession();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const fetchProductDetail = async () => {
    try {
      const response = await fetch(`/api/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }
      const data = await response.json();
      console.log("Fetched product data:", data); // Add logging here
      setProduct(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Fetching product details for:", id);  // Log the product ID
    fetchProductDetail();
  }, [id]);

  // const handleAddToCart = async () => {
  //   // console.log(values);
  //   // values.user = session.user._id;
  //   // console.log("values=>", values);
  //   // const response = await addCarts(values);
  //   // console.log("response=>", response);
  //   // if (response.error) {
  //   //   form.reset();
  //   //   toast({
  //   //     title: "Sorry , Your application cannot be submitted.",
  //   //     description: response.msg,
  //   //   });
  //   // } else {
  //   //   form.reset();
  //   //   toast({
  //   //     title: "Your application is submitted.",
  //   //     description: "You will be informed by email in 3 business days.",
  //   //   });
  //   // }
  //    try {
  //     // Log the product and session to ensure they're correct
  //     console.log("Product:", product);
  //     console.log("Session:", session);
  
  //     // Check if product and session are defined and have the correct ids
  //     if (!product || !product._id || !session || !session.user || !session.user._id) {
  //       throw new Error("Missing product or session data");
  //     }
  
  //     const res = await addCarts(product)

  //     if (!res.ok) throw new Error('Failed to add to cart');
  //     const data = await res.json();  // To handle any data sent back from the API
  //     toast.success('Added to cart!');
  //     console.log('Cart response:', data);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };


  const handleAddToCart = async () => {
    try {
      // Log product and session data for debugging
      console.log("Product:", product);
      console.log("Session:", session);
  
      // Validate product and session data
      if (!product || !product._id || !session || !session.user || !session.user._id) {
        throw new Error("Missing product or session data");
      }
  
      // Add product to cart
      const res = await addCarts(product);
  
      if (!res.ok) {
        throw new Error('Failed to add to cart');
      }
  
      const data = await res.json();  // Assuming server returns the cart details
      toast.success('Added to cart!');
      console.log('Cart response:', data);
  
    } catch (error) {
      toast.error(error.message);  // Display error message from catch block
    }
  };
  

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

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
    );
  }

  if (error) {
    return <div>Error loading product details: {error}</div>;
  }

  const totalPrice = product?.price * quantity;

  return (
    <section>
      {product ? (
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
              <p className="leading-relaxed">{product.description || "No description available"}</p>
              
              <div className="flex items-center justify-between gap-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  PKR: {totalPrice?.toFixed(2)}
                </span>
                <button
                  onClick={handleDecrement}
                  className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 focus:outline-none hover:bg-gray-300 hover:text-black"
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={handleIncrement}
                  className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black mr-5"
                >
                  +
                </button>
              </div>

              <Button
                onClick={() => handleAddToCart({ productId: product.id, quantity: 1 })}
                className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </section>
  );
}
