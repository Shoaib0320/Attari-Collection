// // // // // "use client";

// // // // // import { useState, useEffect } from "react";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { useSession } from "next-auth/react";
// // // // // import { toast } from "react-hot-toast";
// // // // // import { addCarts } from "@/actions/addToCartAction"; // Assuming the function is imported from actions

// // // // // export default function ProductDetail({ params }) {
// // // // //   const { id } = params;
// // // // //   const { data: session } = useSession();

// // // // //   const [product, setProduct] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [quantity, setQuantity] = useState(1);

// // // // //   const fetchProductDetail = async () => {
// // // // //     try {
// // // // //       const response = await fetch(`/api/products/${id}`);
// // // // //       if (!response.ok) {
// // // // //         throw new Error("Failed to fetch product details");
// // // // //       }
// // // // //       const data = await response.json();
// // // // //       console.log("Fetched product data:", data); // Add logging here
// // // // //       setProduct(data);
// // // // //     } catch (error) {
// // // // //       setError(error.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     console.log("Fetching product details for:", id);  // Log the product ID
// // // // //     fetchProductDetail();
// // // // //   }, [id]);

// // // // //   const handleAddToCart = async () => {
// // // // //     try {
// // // // //       // Log product and session data for debugging
// // // // //       console.log("Product:", product);
// // // // //       console.log("Session:", session);

// // // // //       // Validate product and session data
// // // // //       if (!product || !product._id || !session || !session.user || !session.user._id) {
// // // // //         alert('Add To Cart Error')
// // // // //         throw new Error("Missing product or session data");
// // // // //       }

// // // // //       // Add product to cart
// // // // //       const res = await addCarts(product);

// // // // //       if (!res.ok) {
// // // // //         alert('Failed to add to cart')
// // // // //         throw new Error('Failed to add to cart');
// // // // //       }

// // // // //       const data = await res.json();  // Assuming server returns the cart details
// // // // //       toast.success('Added to cart!');
// // // // //       console.log('Cart response:', data);

// // // // //     } catch (error) {
// // // // //       toast.error(error.message);  // Display error message from catch block
// // // // //     }
// // // // //   };


// // // // //   const handleIncrement = () => {
// // // // //     setQuantity(prevQuantity => prevQuantity + 1);
// // // // //   };

// // // // //   const handleDecrement = () => {
// // // // //     if (quantity > 1) {
// // // // //       setQuantity(prevQuantity => prevQuantity - 1);
// // // // //     }
// // // // //   };

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <section className="text-gray-600 body-font">
// // // // //         <div className="container px-5 py-24 mx-auto">
// // // // //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // // // //             {/* Skeleton Loader */}
// // // // //             <div className="lg:w-1/2 w-full h-96 bg-gray-300 rounded animate-pulse"></div>
// // // // //             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // // // //               <div className="h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>
// // // // //               <div className="h-4 bg-gray-300 rounded mb-6 animate-pulse"></div>
// // // // //               <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
// // // // //                 <span className="h-8 w-1/4 bg-gray-300 rounded animate-pulse"></span>
// // // // //               </div>
// // // // //               <div className="flex items-center mb-4">
// // // // //                 <button className="h-10 w-12 bg-gray-300 rounded animate-pulse"></button>
// // // // //                 <span className="mx-4 h-6 bg-gray-300 w-12 rounded animate-pulse"></span>
// // // // //                 <button className="h-10 w-12 bg-gray-300 rounded animate-pulse"></button>
// // // // //               </div>
// // // // //               <div className="h-12 w-32 bg-gray-300 rounded animate-pulse"></div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     );
// // // // //   }

// // // // //   if (error) {
// // // // //     return <div>Error loading product details: {error}</div>;
// // // // //   }

// // // // //   const totalPrice = product?.price * quantity;

// // // // //   return (
// // // // //     <section>
// // // // //       {product ? (
// // // // //         <div className="container px-5 py-24 mx-auto">
// // // // //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // // // //             <img
// // // // //               alt={product.title}
// // // // //               className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
// // // // //               src={product.imageUrl || "/placeholder.svg?height=400&width=720"}
// // // // //             />
// // // // //             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // // // //               <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
// // // // //                 Category: {product.category?.title}
// // // // //               </h2>
// // // // //               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// // // // //                 {product.title}
// // // // //               </h1>
// // // // //               <p className="leading-relaxed">{product.description || "No description available"}</p>

// // // // //               <div className="flex items-center justify-between gap-5 mt-5">
// // // // //                 <span className="title-font font-medium text-2xl text-gray-900">
// // // // //                   PKR: {totalPrice?.toFixed(2)}
// // // // //                 </span>
// // // // //                 <button
// // // // //                   onClick={handleDecrement}
// // // // //                   className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 focus:outline-none hover:bg-gray-300 hover:text-black"
// // // // //                 >
// // // // //                   -
// // // // //                 </button>
// // // // //                 <p>{quantity}</p>
// // // // //                 <button
// // // // //                   onClick={handleIncrement}
// // // // //                   className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black mr-5"
// // // // //                 >
// // // // //                   +
// // // // //                 </button>
// // // // //               </div>

// // // // //               <Button
// // // // //                 onClick={() => handleAddToCart({ productId: product.id, quantity: 1 })}
// // // // //                 className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black"
// // // // //               >
// // // // //                 Add to Cart
// // // // //               </Button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <p>Product not found.</p>
// // // // //       )}
// // // // //     </section>
// // // // //   );
// // // // // }







// // // // // /app/ProductDetail/[id]/page.js

// // // // "use client";

// // // // import { useState, useEffect } from "react";
// // // // import { Button } from "@/components/ui/button";
// // // // import { useSession } from "next-auth/react";
// // // // import { toast } from "react-hot-toast";
// // // // import { addCarts } from "@/actions/addToCartAction"; 

// // // // export default function ProductDetail({ params }) {
// // // //   const { id } = params;
// // // //   const { data: session } = useSession();

// // // //   const [product, setProduct] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [quantity, setQuantity] = useState(1);

// // // //   const fetchProductDetail = async () => {
// // // //     try {
// // // //       const response = await fetch(`/api/products/${id}`);
// // // //       if (!response.ok) throw new Error("Failed to fetch product details");
// // // //       const data = await response.json();
// // // //       setProduct(data);
// // // //     } catch (error) {
// // // //       setError(error.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchProductDetail();
// // // //   }, [id]);

// // // //   const handleAddToCart = async () => {
// // // //     console.log("handleAddToCart function called");

// // // //     try {
// // // //       // Check session and user data
// // // //       console.log("Session data:", session);
// // // //       if (!session || !session.user || !session.user._id) {
// // // //         throw new Error("User not authenticated");
// // // //       }

// // // //       // Check if product data is available
// // // //       if (!product) {
// // // //         throw new Error("Product not found");
// // // //       }
// // // //       console.log("Product data:", product);

// // // //       // Prepare cart item
// // // //       const cartItem = {
// // // //         productId: product._id,
// // // //         title: product.title,
// // // //         description: product.description,
// // // //         price: product.price,
// // // //         quantity,
// // // //         imageUrl: product.imageUrl,
// // // //         category: product.category?.title,
// // // //         user: session.user._id,  // Use _id instead of id
// // // //       };
// // // //       console.log("Prepared cartItem:", cartItem);
// // // //       console.log('session.user._id' , session.user._id);


// // // //       // Attempt to add item to the cart
// // // //       console.log("Calling addCarts function...");
// // // //       const res = await addCarts(cartItem);
// // // //       console.log("addCarts response:", res);

// // // //       if (!res.success) throw new Error("Failed to add to cart");

// // // //       // Success feedback
// // // //       toast.success("Added to cart!");
// // // //       alert("Added to cart!");
// // // //     } catch (error) {
// // // //       console.error("Error in handleAddToCart:", error);
// // // //       toast.error(error.message);
// // // //     }
// // // //   };

// // // //   const handleIncrement = () => setQuantity((prev) => prev + 1);
// // // //   const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

// // // //   const totalPrice = product?.price * quantity;

// // // //   if (loading){
// // // //     return (
// // // //       <section className="text-gray-600 body-font">
// // // //         <div className="container px-5 py-24 mx-auto">
// // // //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // // //             {/* Skeleton Loader */}
// // // //             <div className="lg:w-1/2 w-full h-96 bg-gray-300 rounded animate-pulse"></div>
// // // //             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // // //               <div className="h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>
// // // //               <div className="h-4 bg-gray-300 rounded mb-6 animate-pulse"></div>
// // // //               <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
// // // //                 <span className="h-8 w-1/4 bg-gray-300 rounded animate-pulse"></span>
// // // //               </div>
// // // //               <div className="flex items-center mb-4">
// // // //                 <button className="h-10 w-12 bg-gray-300 rounded animate-pulse"></button>
// // // //                 <span className="mx-4 h-6 bg-gray-300 w-12 rounded animate-pulse"></span>
// // // //                 <button className="h-10 w-12 bg-gray-300 rounded animate-pulse"></button>
// // // //               </div>
// // // //               <div className="h-12 w-32 bg-gray-300 rounded animate-pulse"></div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     )
// // // //   }
// // // //      ;
// // // //   if (error) return <p>Error loading product details: {error}</p>;

// // // //   return (
// // // //     <section>
// // // //       {product ? (
// // // //         <div className="container px-5 py-24 mx-auto">
// // // //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // // //             <img
// // // //               alt={product.title}
// // // //               className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
// // // //               src={product.imageUrl || "/placeholder.svg?height=400&width=720"}
// // // //             />
// // // //             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // // //               <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
// // // //                 Category: {product.category?.title}
// // // //               </h2>
// // // //               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// // // //                 {product.title}
// // // //               </h1>
// // // //               <p className="leading-relaxed">{product.description || "No description available"}</p>

// // // //               <div className="flex items-center justify-between gap-5 mt-5">
// // // //                 <span className="title-font font-medium text-2xl text-gray-900">
// // // //                   PKR: {totalPrice?.toFixed(2)}
// // // //                 </span>
// // // //                 <button
// // // //                   onClick={handleDecrement}
// // // //                   className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 focus:outline-none hover:bg-gray-300 hover:text-black"
// // // //                 >
// // // //                   -
// // // //                 </button>
// // // //                 <p>{quantity}</p>
// // // //                 <button
// // // //                   onClick={handleIncrement}
// // // //                   className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black mr-5"
// // // //                 >
// // // //                   +
// // // //                 </button>
// // // //               </div>

// // // //               <Button
// // // //                 onClick={() => handleAddToCart({ productId: product.id, quantity: 1 })}
// // // //                 className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black"
// // // //               >
// // // //                 Add to Cart
// // // //               </Button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       ) : (
// // // //         <p>Product not found.</p>
// // // //       )}
// // // //     </section>
// // // //   );
// // // // }










// // // // // /app/ProductDetail/[id]/page.js

// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { Button } from "@/components/ui/button";
// // // import { useSession } from "next-auth/react";
// // // import { toast } from "react-hot-toast";
// // // import { addCarts } from "@/actions/addToCartAction";

// // // export default function ProductDetail({ params }) {
// // //   const { id } = params;
// // //   const { data: session } = useSession();

// // //   const [product, setProduct] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [quantity, setQuantity] = useState(1);

// // //   const fetchProductDetail = async () => {
// // //     try {
// // //       const response = await fetch(`/api/products/${id}`);
// // //       if (!response.ok) throw new Error("Failed to fetch product details");
// // //       const data = await response.json();
// // //       setProduct(data);
// // //     } catch (error) {
// // //       setError(error.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchProductDetail();
// // //   }, [id]);

// // //   const handleAddToCart = async () => {
// // //     try {
// // //       // Check if session exists
// // //       if (!session || !session.user || !session.user._id) {
// // //         throw new Error("User not authenticated");
// // //       }

// // //       // Ensure product exists
// // //       if (!product) {
// // //         throw new Error("Product not found");
// // //       }

// // //       // Prepare cart item
// // //       const cartItem = {
// // //         productId: product._id,
// // //         title: product.title,
// // //         description: product.description,
// // //         price: product.price,
// // //         quantity,
// // //         imageUrl: product.imageUrl,
// // //         category: product.category?.title,
// // //         user: session.user._id,  // Use session user _id
// // //       };


// // //       console.log('Session:', session);
// // //       console.log('Cart Item:', cartItem);

// // //       // Call addCarts to add item to cart
// // //       const res = await addCarts(cartItem);
// // //       if (!res.success) throw new Error("Failed to add to cart");

// // //       // Success feedback
// // //       toast.success("Added to cart!");
// // //     } catch (error) {
// // //       toast.error(error.message);
// // //     }
// // //   };

// // //   const handleIncrement = () => setQuantity((prev) => prev + 1);
// // //   const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

// // //   const totalPrice = product?.price * quantity;

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
// // //     );
// // //   }

// // //   if (error) return <p>Error loading product details: {error}</p>;

// // //   return (
// // //     <section>
// // //       {product ? (
// // //         <div className="container px-5 py-24 mx-auto">
// // //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // //             <img
// // //               alt={product.title}
// // //               className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
// // //               src={product.imageUrl || "/placeholder.svg?height=400&width=720"}
// // //             />
// // //             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // //               <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
// // //                 Category: {product.category?.title}
// // //               </h2>
// // //               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// // //                 {product.title}
// // //               </h1>
// // //               <p className="leading-relaxed">{product.description || "No description available"}</p>
// // //               <div className="flex items-center justify-between gap-5 mt-5">
// // //                 <span className="title-font font-medium text-2xl text-gray-900">
// // //                   PKR: {totalPrice?.toFixed(2)}
// // //                 </span>
// // //                 <button onClick={handleDecrement} className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 focus:outline-none hover:bg-gray-300 hover:text-black">
// // //                   -
// // //                 </button>
// // //                 <p>{quantity}</p>
// // //                 <button onClick={handleIncrement} className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black">
// // //                   +
// // //                 </button>
// // //               </div>
// // //               <Button onClick={handleAddToCart} 
// // //                 className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black"
// // //                 >
// // //                 Add to Cart
// // //               </Button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       ) : (
// // //         <div>Product not found</div>
// // //       )}
// // //     </section>
// // //   );
// // // }









// // "use client";

// // import { useState, useEffect } from "react";
// // import { Button } from "@/components/ui/button";
// // import { useSession } from "next-auth/react";
// // import { toast } from "react-hot-toast";
// // import { addCarts } from "@/actions/addToCartAction";
// // import Image from "next/image";

// // export default function ProductDetail({ params }) {
// //   const { id } = params;
// //   const { data: session } = useSession();

// //   const [product, setProduct] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [quantity, setQuantity] = useState(1);

// //   useEffect(() => {
// //     const fetchProductDetail = async () => {
// //       try {
// //         const response = await fetch(`/api/products/${id}`);
// //         if (!response.ok) throw new Error("Failed to fetch product details");
// //         const data = await response.json();
// //         setProduct(data);
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchProductDetail();
// //   }, [id]);

// //   const handleAddToCart = async () => {
// //     try {
// //       if (!session || !session.user || !session.user._id) {
// //         throw new Error("User not authenticated");
// //       }
// //       if (!product) throw new Error("Product not found");

// //       const cartItem = {
// //         productId: product._id,
// //         title: product.title,
// //         description: product.description,
// //         price: product.price,
// //         quantity,
// //         imageUrl: product.imageUrl,
// //         category: product.category?.title,
// //         user: session.user._id,
// //       };

// //       const res = await addCarts(cartItem);
// //       if (!res.success) throw new Error("Failed to add to cart");

// //       toast.success("Added to cart!");
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   const handleIncrement = () => setQuantity((prev) => prev + 1);
// //   const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));
// //   const totalPrice = product?.price * quantity;

// //   if (loading) {
// //     return (
// //       <section className="text-gray-600 body-font">
// //         <div className="container px-5 py-24 mx-auto">
// //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// //             <div className="lg:w-1/2 w-full h-96 bg-gray-300 rounded animate-pulse"></div>
// //             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// //               <div className="h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>
// //               <div className="h-4 bg-gray-300 rounded mb-6 animate-pulse"></div>
// //               <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
// //                 <span className="h-8 w-1/4 bg-gray-300 rounded animate-pulse"></span>
// //               </div>
// //               <div className="flex items-center mb-4">
// //                 <button className="h-10 w-12 bg-gray-300 rounded animate-pulse"></button>
// //                 <span className="mx-4 h-6 bg-gray-300 w-12 rounded animate-pulse"></span>
// //                 <button className="h-10 w-12 bg-gray-300 rounded animate-pulse"></button>
// //               </div>
// //               <div className="h-12 w-32 bg-gray-300 rounded animate-pulse"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     );
// //   }

// //   if (error) return <p>Error loading product details: {error}</p>;

// //   return (
// //     <section>
// //       {product ? (
// //         <div className="container px-5 py-24 mx-auto">
// //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// //             <img
// //               alt={product.title}
// //               className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
// //               src={product.imageUrl || "/placeholder.svg?height=400&width=720"}
// //             />
// //             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// //               <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
// //                 Category: {product.category?.title}
// //               </h2>
// //               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// //                 {product.title}
// //               </h1>
// //               <p className="leading-relaxed">{product.description || "No description available"}</p>
// //               <div className="flex items-center justify-between gap-5 mt-5">
// //                 <span className="title-font font-medium text-2xl text-gray-900">
// //                   PKR: {totalPrice?.toFixed(2)}
// //                 </span>
// //                 <button onClick={handleDecrement} className="rounded-full w-10 h-10 flex items-center justify-center font-bold text-white bg-gray-700 border-0 focus:outline-none hover:bg-gray-300 hover:text-black">
// //                   -
// //                 </button>
// //                 <p>{quantity}</p>
// //                 <button onClick={handleIncrement} className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black">
// //                   +
// //                 </button>
// //               </div>
// //               <Button onClick={handleAddToCart} className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black">
// //                 Add to Cart
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       ) : (
// //         <div>Product not found</div>
// //       )}
// //     </section>
// //   );
// // }






// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { useSession } from "next-auth/react";
// import { useToast } from "@/hooks/use-toast"
// import { addCarts } from "@/actions/addToCartAction";
// import Image from "next/image";

// export default function ProductDetail({ params }) {
//   const { id } = params;
//   const { data: session } = useSession();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   const { toast } = useToast()

//   useEffect(() => {
//     const fetchProductDetail = async () => {
//       try {
//         const response = await fetch(`/api/products/${id}`);
//         if (!response.ok) throw new Error("Failed to fetch product details");
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProductDetail();
//   }, [id]);

//   const handleAddToCart = async () => {
//     try {
//       if (!session || !session.user || !session.user._id) {
//         throw new Error("User not authenticated");
//       }
//       if (!product) throw new Error("Product not found");

//       const cartItem = {
//         productId: product._id,
//         title: product.title,
//         description: product.description,
//         price: product.price,
//         quantity,
//         imageUrl: product.imageUrl,
//         category: product.category?.title,
//         user: session.user._id,
//       };

//       const res = await addCarts(cartItem);
//       if (!res.success) throw new Error("Failed to add to cart");

//       toast({
//         title: "Added to cart!",
//       })
//       alert('Added to cart!')
//     } catch (error) {
//       toast(error.message);
//     }
//   };

//   const handleIncrement = () => setQuantity((prev) => prev + 1);
//   const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));
//   const totalPrice = product?.price * quantity;

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

//   if (error) return <p>Error loading product details: {error}</p>;

//   return (
//     <section>
//       {product ? (
//         <div className="container px-5 py-24 mx-auto">
//           <div className="lg:w-4/5 mx-auto flex flex-wrap">
//             <img
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
//               <p className="leading-relaxed">{product.description || "No description available"}</p>
//               <div className="flex items-center justify-between gap-5 mt-5">
//                 <span className="title-font font-medium text-2xl text-gray-900">
//                   PKR: {totalPrice?.toFixed(2)}
//                 </span>
//                 <button onClick={handleDecrement} className="rounded-full w-10 h-10 flex items-center justify-center font-bold text-white bg-gray-700 border-0 focus:outline-none hover:bg-gray-300 hover:text-black">
//                   -
//                 </button>
//                 <p>{quantity}</p>
//                 <button onClick={handleIncrement} className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black">
//                   +
//                 </button>
//               </div>
//               <Button onClick={handleAddToCart} className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black">
//                 Add to Cart
//               </Button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>Product not found</div>
//       )}
//     </section>
//   );
// }











"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast"
import { addCarts } from "@/actions/addToCartAction";
import Feedback from "@/components/ProductsFeedback/Feedback";

export default function ProductDetail({ params }) {
  const { id } = params;
  const { data: session } = useSession();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { toast } = useToast()

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product details");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetail();
  }, [id]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch(`/api/feedback/${id}`);
        const data = await response.json();
        if (data.success) {
          setFeedbackList(data.feedbacks);
        } else {
          console.error("Failed to fetch feedback");
        }
      } catch (error) {
        console.error("Error fetching feedback", error);
      }
    };

    fetchFeedback();
  }, [id]);


  const handleAddToCart = async () => {
    try {
      if (!session || !session.user || !session.user._id) {
        throw new Error("User not authenticated");
      }
      if (!product) throw new Error("Product not found");

      const cartItem = {
        productId: product._id,
        title: product.title,
        description: product.description,
        price: product.price,
        quantity,
        imageUrl: product.imageUrl,
        category: product.category?.title,
        user: session.user._id,
      };

      const res = await addCarts(cartItem);
      if (!res.success) throw new Error("Failed to add to cart");

      toast({
        title: "Added to cart!",
      })
      alert('Added to cart!')
    } catch (error) {
      toast(error.message);
    }
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));
  const totalPrice = product?.price * quantity;

  if (loading) {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
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

  if (error) return <p>Error loading product details: {error}</p>;

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
              <div className="flex items-center justify-between gap-5 mt-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  PKR: {totalPrice?.toFixed(2)}
                </span>
                <button onClick={handleDecrement} className="rounded-full w-10 h-10 flex items-center justify-center font-bold text-white bg-gray-700 border-0 focus:outline-none hover:bg-gray-300 hover:text-black">
                  -
                </button>
                <p>{quantity}</p>
                <button onClick={handleIncrement} className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black">
                  +
                </button>
              </div>
              <Button onClick={handleAddToCart} className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black">
                Add to Cart
              </Button>
              {/* <FeedbackComponent productId={product._id} session={session} /> */}
              <Feedback productId={id} />
            </div>
          </div>
          {/* <div>
            <h3>Customer Feedback</h3>
            {feedbackList.map((feedback) => (
              <div key={feedback._id} className="feedback">
                <p>{feedback.feedback}</p>
                {feedback.fileUrl && (
                  <Image src={feedback.fileUrl} alt="Feedback file" width={200} height={200} />
                )}
              </div>
            ))}
          </div> */}
        </div>

      ) : (
        <div>Product not found</div>
      )}
    </section>
  );
}