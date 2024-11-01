// // "use client"

// // // /app/ProductDetail/[id]/page.js
// // import { useEffect, useState } from 'react';
// // import Navbar from "@/components/Root-Navbar/Navbar";
// // // import SeeDetail from '@/components/SeeDetail/[id]';
// // import { Button } from '@/components/ui/button';

// // const ProductDetail = ({ params }) => {
// //     const { id } = params;  // Retrieve the ID from params
// //     const [product, setProduct] = useState(null);

// //     useEffect(() => {
// //         const fetchProduct = async () => {
// //             const response = await fetch(`/api/products/${id}`);
// //             const data = await response.json();
// //             setProduct(data);
// //         };

// //         if (id) {
// //             fetchProduct();
// //         }
// //     }, [id]);

// //     if (!product) return <div className='flex items-center justify-center my-20'>Loading...</div>;

// //     return (
// //         <div>
// //             <Navbar />
// //             {/* <h1>{product.title}</h1>
// //             <p>{product.description}</p>
// //             <p>{product.price}</p> */}

// // <section className="text-gray-600 body-font overflow-hidden">
// //   <div className="container px-5 py-24 mx-auto">
// //     <div className="lg:w-4/5 mx-auto flex flex-wrap">
// //       <img
// //         alt="ecommerce"
// //         className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
// //         src={product.imageUrl}
// //       />
// //       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
// //         <h2 className="text-sm title-font text-gray-500 tracking-widest">
// //         {product.category?.title}
// //         </h2>
// //         <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// //         {product.title}
// //         </h1>
// //         <div className="flex mb-4">
// //           <span className="flex items-center">
// //             <svg
// //               fill="currentColor"
// //               stroke="currentColor"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               className="w-4 h-4 text-indigo-500"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //             </svg>
// //             <svg
// //               fill="currentColor"
// //               stroke="currentColor"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               className="w-4 h-4 text-indigo-500"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //             </svg>
// //             <svg
// //               fill="currentColor"
// //               stroke="currentColor"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               className="w-4 h-4 text-indigo-500"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //             </svg>
// //             <svg
// //               fill="currentColor"
// //               stroke="currentColor"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               className="w-4 h-4 text-indigo-500"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //             </svg>
// //             <svg
// //               fill="none"
// //               stroke="currentColor"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               className="w-4 h-4 text-indigo-500"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //             </svg>
// //             <span className="text-gray-600 ml-3">4 Reviews</span>
// //           </span>
// //           <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
// //             <a className="text-gray-500">
// //               <svg
// //                 fill="currentColor"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 className="w-5 h-5"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
// //               </svg>
// //             </a>
// //             <a className="text-gray-500">
// //               <svg
// //                 fill="currentColor"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 className="w-5 h-5"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
// //               </svg>
// //             </a>
// //             <a className="text-gray-500">
// //               <svg
// //                 fill="currentColor"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 className="w-5 h-5"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
// //               </svg>
// //             </a>
// //           </span>
// //         </div>
// //         <p className="leading-relaxed">
// //             {product.description}
// //         </p>
// //         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
// //           {/* <div className="flex">
// //             <span className="mr-3">Color</span>
// //             <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
// //             <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
// //             <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
// //           </div> */}
// //           <div className="flex ml-6 items-center">
// //             <span className="mr-3">Size</span>
// //             <div className="relative">
// //               <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
// //                 <option>SM</option>
// //                 <option>M</option>
// //                 <option>L</option>
// //                 <option>XL</option>
// //               </select>
// //               <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
// //                 <svg
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   className="w-4 h-4"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M6 9l6 6 6-6" />
// //                 </svg>
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="flex items-center justify-center gap-5">
// //           <span className="title-font font-medium text-2xl text-gray-900">
// //            PKR: {product.price}
// //           </span>
// //           <button className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-black">
// //             -
// //           </button>
// //           <p>
// //             0
// //           </p>
// //           <button className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black">
// //             +
// //           </button>
// //         </div>
// //         <Button className={'w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black'}>Add To Cart</Button>
// //       </div>
// //     </div>
// //   </div>
// // </section>

// //         </div>
// //     );
// // };

// // export default ProductDetail;




// "use client"

// // /app/ProductDetail/[id]/page.js
// import { useEffect, useState } from 'react';
// import Navbar from "@/components/Root-Navbar/Navbar";
// import { Button } from '@/components/ui/button';

// const ProductDetail = ({ params }) => {
//     const { id } = params;  // Retrieve the ID from params
//     const [product, setProduct] = useState(null);
//     const [quantity, setQuantity] = useState(1); // Add quantity state

//     useEffect(() => {
//         const fetchProduct = async () => {
//             const response = await fetch(`/api/products/${id}`);
//             const data = await response.json();
//             setProduct(data);
//         };

//         if (id) {
//             fetchProduct();
//         }
//     }, [id]);

//     if (!product) return <div className='flex items-center justify-center my-20'>Loading...</div>;

//     const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
//     const handleDecrease = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

//     const totalPrice = product.price * quantity; // Calculate total price

//     return (
//         <div>
//             <Navbar />
//             <section className="text-gray-600 body-font overflow-hidden">
//                 <div className="container px-5 py-24 mx-auto">
//                     <div className="lg:w-4/5 mx-auto flex flex-wrap">
//                         <img
//                             alt="ecommerce"
//                             className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//                             src={product.imageUrl}
//                         />
//                         <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                             <h2 className="text-sm title-font text-gray-500 tracking-widest mb-7">
//                               Category: {product.category?.title}
//                             </h2>
//                             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//                                 {product.title}
//                             </h1>
//                             <p className="leading-relaxed">{product.description}</p>
//                             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//                                 <div className="flex ml-6 items-center">
//                                     <span className="mr-3">Size</span>
//                                     <div className="relative">
//                                         <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
//                                             <option>SM</option>
//                                             <option>M</option>
//                                             <option>L</option>
//                                             <option>XL</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex items-center justify-center gap-5">
//                                 <span className="title-font font-medium text-2xl text-gray-900">
//                                     PKR: {totalPrice.toFixed(2)} {/* Display updated total price */}
//                                 </span>
//                                 <button
//                                     onClick={handleDecrease}
//                                     className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-black"
//                                 >
//                                     -
//                                 </button>
//                                 <p>{quantity}</p>
//                                 <button
//                                     onClick={handleIncrease}
//                                     className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black"
//                                 >
//                                     +
//                                 </button>
//                             </div>
//                             <Button className={'w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black'}>
//                                 Add To Cart
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default ProductDetail;







"use client"

// /app/ProductDetail/[id]/page.js
import { useEffect, useState } from 'react';
import Navbar from "@/components/Root-Navbar/Navbar";
import { Button } from '@/components/ui/button';

const ProductDetail = ({ params }) => {
    const { id } = params;  // Retrieve the ID from params
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    if (!product) return <div className='flex items-center justify-center my-20'>Loading...</div>;

    const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
    const handleDecrease = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

    const totalPrice = product.price * quantity;

    // Function to handle "Add to Cart" action
    const handleAddToCart = async () => {
        try {
            const response = await fetch('/api/addToCart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId: id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    quantity,
                    imageUrl: product.imageUrl,
                    category: product.category?.title
                })
            });

            if (response.ok) {
                alert("Product added to cart successfully!");
            } else {
                alert("Failed to add product to cart.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while adding the product to cart.");
        }
    };

    return (
        <div>
            <Navbar />
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
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-5">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    PKR: {totalPrice.toFixed(2)}
                                </span>
                                <button
                                    onClick={handleDecrease}
                                    className="rounded-full w-10 h-10 flex items-center justify-center ml-auto font-bold text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-black"
                                >
                                    -
                                </button>
                                <p>{quantity}</p>
                                <button
                                    onClick={handleIncrease}
                                    className="rounded-full font-bold w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-white hover:bg-gray-300 hover:text-black"
                                >
                                    +
                                </button>
                            </div>
                            <Button
                                onClick={handleAddToCart}
                                className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black"
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
