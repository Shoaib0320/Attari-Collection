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




// // // // "use client";

// // // // // /app/ProductDetail/[id]/page.js
// // // // import { useEffect, useState } from 'react';
// // // // import Navbar from "@/components/Root-Navbar/Navbar";
// // // // import { Button } from '@/components/ui/button';
// // // // import { useRouter } from 'next/navigation'; // Import useRouter

// // // // const ProductDetail = ({ params }) => {
// // // //     const { id } = params;  // Retrieve the ID from params
// // // //     const [product, setProduct] = useState(null);
// // // //     const [quantity, setQuantity] = useState(1);
// // // //     const router = useRouter(); // Initialize router

// // // //     useEffect(() => {
// // // //         const fetchProduct = async () => {
// // // //             try {
// // // //                 console.log("Fetching product details...");
// // // //                 const response = await fetch(`/api/products/${id}`);
                
// // // //                 // Log the response status
// // // //                 console.log(`Response status: ${response.status}`);
    
// // // //                 if (!response.ok) {
// // // //                     // Log and alert the specific error
// // // //                     const errorMessage = await response.text(); // Get error message text
// // // //                     console.error(`Error: ${response.status} - ${errorMessage}`);
// // // //                     alert("Failed to load product details: " + errorMessage);
// // // //                     return;
// // // //                 }
                
// // // //                 const data = await response.json();
// // // //                 console.log("Product data:", data);
// // // //                 setProduct(data);
// // // //             } catch (error) {
// // // //                 console.error("An unexpected error occurred:", error);
// // // //                 alert("An error occurred while fetching the product details.");
// // // //             }
// // // //         };
    
// // // //         if (id) {
// // // //             fetchProduct();
// // // //         }
// // // //     }, [id]);
    

// // // //     if (!product) return <div className='flex items-center justify-center my-20'>Loading...</div>;

// // // //     const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
// // // //     const handleDecrease = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

// // // //     const totalPrice = product.price * quantity;

// // // //     // Function to handle "Add to Cart" action
// // // //     const handleAddToCart = async () => {
// // // //         try {
// // // //             const response = await fetch('/api/addToCart', {
// // // //                 method: 'POST',
// // // //                 headers: {
// // // //                     'Content-Type': 'application/json'
// // // //                 },
// // // //                 body: JSON.stringify({
// // // //                     productId: id,
// // // //                     title: product.title,
// // // //                     description: product.description,
// // // //                     price: product.price,
// // // //                     quantity,
// // // //                     imageUrl: product.imageUrl,
// // // //                     category: product.category?.title
// // // //                 })
// // // //             });

// // // //             if (response.ok) {
// // // //                 alert("Product added to cart successfully!");
// // // //                 // Redirect to cart page
// // // //                 router.push('/addToCart'); // Replace '/cart' with your cart page path
// // // //             } else {
// // // //                 alert("Failed to add product to cart.");
// // // //             }
// // // //         } catch (error) {
// // // //             console.error(error);
// // // //             alert("An error occurred while adding the product to cart.");
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div>
// // // //             <Navbar />
// // // //             <section className="text-gray-600 body-font overflow-hidden">
// // // //                 <div className="container px-5 py-24 mx-auto">
// // // //                     <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // // //                         <img
// // // //                             alt="ecommerce"
// // // //                             className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
// // // //                             src={product.imageUrl}
// // // //                         />
// // // //                         <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // // //                             <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
// // // //                                 Category: {product.category?.title}
// // // //                             </h2>
// // // //                             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// // // //                                 {product.title}
// // // //                             </h1>
// // // //                             <p className="leading-relaxed">{product.description}</p>
// // // //                             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
// // // //                                 <div className="flex ml-6 items-center">
// // // //                                     <span className="mr-3">Size</span>
// // // //                                     <div className="relative">
// // // //                                         <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
// // // //                                             <option>SM</option>
// // // //                                             <option>M</option>
// // // //                                             <option>L</option>
// // // //                                             <option>XL</option>
// // // //                                         </select>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                             <div className="flex items-center justify-center gap-5">
// // // //                                 <span className="title-font font-medium text-2xl text-gray-900">
// // // //                                     PKR: {totalPrice.toFixed(2)}
// // // //                                 </span>
// // // //                                 <button
// // // //                                     onClick={handleDecrease}
// // // //                                     className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 focus:outline-none hover:bg-gray-300 hover:text-black"
// // // //                                 >
// // // //                                     -
// // // //                                 </button>
// // // //                                 <p>{quantity}</p>
// // // //                                 <button
// // // //                                     onClick={handleIncrease}
// // // //                                     className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black"
// // // //                                 >
// // // //                                     +
// // // //                                 </button>
// // // //                             </div>
// // // //                             <Button
// // // //                                 onClick={handleAddToCart}
// // // //                                 className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black"
// // // //                             >
// // // //                                 Add To Cart
// // // //                             </Button>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </section>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default ProductDetail;




















// // // "use client"

// // // // src/app/(root)/ProductDetail/[id]/page.js

// // // import React, { useEffect, useState } from 'react';
// // // import { useParams } from 'next/navigation'; // Use useParams from next/navigation
// // // import { Button } from '@/components/ui/button';

// // // const ProductDetail = () => {
// // //   const { id } = useParams(); // Get the product ID from URL parameters
// // //   const [product, setProduct] = useState(null);
// // //   const [error, setError] = useState('');
// // //   const [quantity, setQuantity] = useState(1);

// // //   // Fetch product details
// // //   useEffect(() => {
// // //     if (id) {
// // //       fetch(`/api/products/${id}`)
// // //         .then(response => {
// // //           if (!response.ok) {
// // //             throw new Error('Failed to fetch product details');
// // //           }
// // //           return response.json();
// // //         })
// // //         .then(data => setProduct(data))
// // //         .catch(error => setError(error.message));
// // //     }
// // //   }, [id]);

// // //     const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
// // //     const handleDecrease = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

// // //     const totalPrice = product.price * quantity;

// // //   if (error) {
// // //     return <div>Error: {error}</div>;
// // //   }

// // //   if (!product) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   return (
// // //             <div>
// // //                  <section className="text-gray-600 body-font overflow-hidden">
// // //                      <div className="container px-5 py-24 mx-auto">
// // //                           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // //                               <img
// // //                                     alt="ecommerce"
// // //                                     className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
// // //                                     src={product.imageUrl}
// // //                                 />
// // //                                 <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// // //                                     <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
// // //                                         Category: {product.category?.title}
// // //                                     </h2>
// // //                                     <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// // //                                         {product.title}
// // //                                     </h1>
// // //                                     <p className="leading-relaxed">{product.description}</p>
// // //                                     <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
// // //                                         <div className="flex ml-6 items-center">
// // //                                             <span className="mr-3">Size</span>
// // //                                             <div className="relative">
// // //                                                 <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
// // //                                                     <option>SM</option>
// // //                                                     <option>M</option>
// // //                                                     <option>L</option>
// // //                                                     <option>XL</option>
// // //                                                 </select>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                     <div className="flex items-center justify-center gap-5">
// // //                                         <span className="title-font font-medium text-2xl text-gray-900">
// // //                                             PKR: {totalPrice.toFixed(2)}
// // //                                         </span>
// // //                                         <button
// // //                                             onClick={handleDecrease}
// // //                                             className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 focus:outline-none hover:bg-gray-300 hover:text-black"
// // //                                         >
// // //                                             -
// // //                                         </button>
// // //                                         <p>{quantity}</p>
// // //                                         <button
// // //                                             onClick={handleIncrease}
// // //                                             className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black"
// // //                                         >
// // //                                             +
// // //                                         </button>
// // //                                     </div>
// // //                                     <Button
// // //                                         // onClick={handleAddToCart}
// // //                                         className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black"
// // //                                     >
// // //                                         Add To Cart
// // //                                     </Button>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </section>
// // //                 </div>
// // //   );
// // // };

// // // export default ProductDetail;




// // "use client"

// // // src/app/(root)/ProductDetail/[id]/page.js

// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'next/navigation'; // Use useParams from next/navigation
// // import { Button } from '@/components/ui/button';
// // import { auth } from '@/app/auth';

// // const ProductDetail = () => {
// //   const { id } = useParams(); // Get the product ID from URL parameters
// //   const  session  = auth(); // Get the session data from NextAuth
// //   const [product, setProduct] = useState(null);
// //   const [error, setError] = useState('');
// //   const [quantity, setQuantity] = useState(1);

// //   // Fetch product details
// //   useEffect(() => {
// //     if (id) {
// //       fetch(`/api/products/${id}`)
// //         .then(response => {
// //           if (!response.ok) {
// //             throw new Error('Failed to fetch product details');
// //           }
// //           return response.json();
// //         })
// //         .then(data => setProduct(data))
// //         .catch(error => setError(error.message));
// //     }
// //   }, [id]);

// //   const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
// //   const handleDecrease = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

// //   const totalPrice = product?.price * quantity;

// //   const handleAddToCart = async () => {
// //     if (!session?.user) {
// //       alert("You need to log in to add items to your cart.");
// //       return;
// //     }

// //     // Prepare cart data
// //     const cartData = {
// //       productId: product.id,
// //       quantity: quantity,
// //       totalPrice: totalPrice,
// //       description: product.description,
// //       price: product.price,
// //       title: product.title,
// //       imageUrl: product.imageUrl,
// //       category: product.category?.title
// //     };

// //     // Send request to API route to handle cart logic
// //     const response = await fetch('/api/addToCart', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ userEmail: session.user.email, cartData }),
// //     });

// //     if (response.ok) {
// //       alert('Item added to cart successfully!');
// //     } else {
// //       alert('Error adding to cart');
// //     }
// //   };

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   if (!product) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <section className="text-gray-600 body-font overflow-hidden">
// //         <div className="container px-5 py-24 mx-auto">
// //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// //             <img
// //               alt="ecommerce"
// //               className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
// //               src={product.imageUrl}
// //             />
// //             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// //               <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
// //                 Category: {product.category?.title}
// //               </h2>
// //               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// //                 {product.title}
// //               </h1>
// //               <p className="leading-relaxed">{product.description}</p>
// //               <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
// //                 <div className="flex ml-6 items-center">
// //                   <span className="mr-3">Size</span>
// //                   <div className="relative">
// //                     <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
// //                       <option>SM</option>
// //                       <option>M</option>
// //                       <option>L</option>
// //                       <option>XL</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="flex items-center justify-center gap-5">
// //                 <span className="title-font font-medium text-2xl text-gray-900">
// //                   PKR: {totalPrice?.toFixed(2)}
// //                 </span>
// //                 <button
// //                   onClick={handleDecrease}
// //                   className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 focus:outline-none hover:bg-gray-300 hover:text-black"
// //                 >
// //                   -
// //                 </button>
// //                 <p>{quantity}</p>
// //                 <button
// //                   onClick={handleIncrease}
// //                   className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black"
// //                 >
// //                   +
// //                 </button>
// //               </div>
// //               <Button
// //                 onClick={handleAddToCart}
// //                 className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black"
// //               >
// //                 Add To Cart
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ProductDetail;








"use client"

// app/components/ProductDetail.js
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { fetchProductById } from "@/actions/ProductDetailAction";
import { auth } from "@/app/auth";

const ProductDetail = () => {
  const { id } = useParams();
  const session = auth();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrease = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

  const totalPrice = product?.price * quantity;

  const handleAddToCart = async () => {
    if (!session?.user) {
      alert("You need to log in to add items to your cart.");
      return;
    }

    const cartData = {
      userId: session.user._id,  // Send user ID with cart data
      productId: product.id,
      quantity: quantity,
      totalPrice: totalPrice,
      description: product.description,
      price: product.price,
      title: product.title,
      imageUrl: product.imageUrl,
      category: product.category?.title,
    };

    try {
      const res = await fetch("/api/cart/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      });

      const result = await res.json();
      if (res.ok) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert("Error adding to cart");
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.imageUrl}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
                Category: {product.category?.title}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex items-center justify-center gap-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  PKR: {totalPrice?.toFixed(2)}
                </span>
                <button
                  onClick={handleDecrease}
                  className="border-2 border-gray-300 rounded-md px-4 py-1"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="border-2 border-gray-300 rounded-md px-4 py-1"
                >
                  +
                </button>
              </div>
              <Button onClick={handleAddToCart} className="mt-5">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
