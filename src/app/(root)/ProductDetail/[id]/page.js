// // "use client";

// // import { useState, useEffect } from "react";
// // import { Button } from "@/components/ui/button";
// // import { useSession } from "next-auth/react";
// // import { useToast } from "@/hooks/use-toast";
// // import { addCarts } from "@/actions/addToCartAction";
// // import Feedback from "@/components/ProductsFeedback/Feedback";
// // import { useRouter } from "next/navigation";
// // import Image from "next/image";
// // import { ReletedProducts } from "@/components/RelatedProducts/ReletedProducts";

// // export default function ProductDetail({ params }) {
// //   const { id } = params;
// //   const { data: session } = useSession();
// //   const router = useRouter();

// //   const [product, setProduct] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [quantity, setQuantity] = useState(1);
// //   const [feedbacks, setFeedbacks] = useState([]);
// //   const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

// //   const { toast } = useToast();

// //   // Fetch product details
// //   useEffect(() => {
// //     const fetchProductDetail = async () => {
// //       try {
// //         const response = await fetch(`/api/products/${id}`);
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

// //   // Fetch feedbacks
// //   useEffect(() => {
// //     const fetchFeedbacks = async () => {
// //       try {
// //         const response = await fetch(`/api/feedback/${id}`);
// //         const data = await response.json();
// //         if (data.success) {
// //           setFeedbacks(data.feedbacks);
// //         }
// //       } catch (error) {
// //         console.error("Failed to fetch feedbacks:", error);
// //       }
// //     };
// //     fetchFeedbacks();
// //   }, [id]);

// //   // Auto-advance feedback slider
// //   useEffect(() => {
// //     if (feedbacks.length > 1) {
// //       const timer = setInterval(() => {
// //         setCurrentFeedbackIndex((prevIndex) =>
// //           prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
// //         );
// //       }, 5000); // Change feedback every 5 seconds

// //       return () => clearInterval(timer);
// //     }
// //   }, [feedbacks]);

// //   const handleAddToCart = async () => {
// //     try {
// //       if (!session) {
// //         router.push('/signin');
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

// //       toast({
// //         title: "Added to cart!",
// //       });
// //       alert('Added to cart!');
// //     } catch (error) {
// //       toast(error.message);
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
// //               {session && <Feedback productId={product?._id} userId={session?.user?._id} />}
// //             </div>
// //           </div>
// //           <div className="mt-12">
// //             <h3 className="text-3xl font-serif mb-6 text-center text-gray-800">Customer Feedbacks</h3>
// //             {feedbacks.length > 0 ? (
// //               <div className="relative overflow-hidden" style={{ height: '200px' }}>
// //                 {feedbacks.map((feedback, index) => (
// //                   <div
// //                     key={feedback._id}
// //                     className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
// //                       index === currentFeedbackIndex ? 'opacity-100' : 'opacity-0'
// //                     }`}
// //                   >
// //                     <div className="flex items-start space-x-6 border-b pb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-4">
// //                       <Image
// //                         src={feedback.imageUrl || "/placeholder-avatar.png"}
// //                         alt={feedback.userId.firstName}
// //                         className="w-16 h-16 rounded-full border-2 border-gray-300"
// //                         width={64}
// //                         height={64}
// //                       />
// //                       <div className="flex-1">
// //                         <p className="text-xl font-semibold text-gray-800">{feedback.userId.firstName} {feedback.userId.lastName || 'N/A'}</p>
// //                         <p className="text-sm text-gray-500">{feedback.userId.email}</p>
// //                         <p className="mt-4 text-lg text-gray-700">{feedback.feedback}</p>
// //                         <p className="text-gray-500 text-sm mt-3">
// //                           Added on: {new Date(feedback.createdAt).toLocaleString()}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //               <p className="text-center text-gray-500">No feedbacks yet.</p>
// //             )}
// //           </div>
// //           <ReletedProducts product={product}/>
// //         </div>
// //       ) : (
// //         <p>Product not found</p>
// //       )}
// //     </section>
// //   );
// // }








"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { addCarts } from "@/actions/addToCartAction";
import Feedback from "@/components/ProductsFeedback/Feedback";
import { useRouter } from "next/navigation";
import FeedbackSlider from "@/components/Slider/FeedbackSlider";
import { ReletedProducts } from "@/components/RelatedProducts/ReletedProducts";

export default function ProductDetail({ params }) {
  const { id } = params;
  const { data: session } = useSession();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  const { toast } = useToast();

  // Fetch product details
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
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

  // Fetch feedbacks
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(`/api/feedback/${id}`);
        const data = await response.json();
        if (data.success) {
          setFeedbacks(data.feedbacks);
        }
      } catch (error) {
        console.error("Failed to fetch feedbacks:", error);
      }
    };
    fetchFeedbacks();
  }, [id]);

  // Handle feedback navigation
  const handleNextFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const handleAddToCart = async () => {
    try {
      if (!session) {
        router.push("/signin");
        return;
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
        title: "Success",
        description: "Added to cart!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
      });
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

  if (error) {
    return (
      <div className="text-center py-20">
        <p>Error loading product details: {error}</p>
      </div>
    );
  }

  return (
    <section>
      {product ? (
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={product.title}
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={product.imageUrl || "/placeholder.svg"}
              width={720}
              height={400}
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
              <div className="flex items-center justify-between gap-5 mt-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  PKR: {totalPrice?.toFixed(2)}
                </span>
                <button
                  onClick={handleDecrement}
                  className="rounded-full w-10 h-10 flex items-center justify-center font-bold text-white bg-gray-700 hover:bg-gray-300 hover:text-black"
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={handleIncrement}
                  className="rounded-full font-bold w-10 h-10 bg-gray-700 flex items-center justify-center text-white hover:bg-gray-300 hover:text-black"
                >
                  +
                </button>
              </div>
              <Button
                onClick={handleAddToCart}
                className="w-full my-10 bg-gray-700 hover:bg-gray-300 hover:text-black"
              >
                Add to Cart
              </Button>
              {session && (
                <Feedback
                  productId={product._id}
                  userId={session.user._id}
                />
              )}
            </div>
          </div>
          <FeedbackSlider storeFeedbacks={feedbacks} />
          <ReletedProducts product={product}/>

        </div>
      ) : (
        <div className="text-center">
          <p className="text-2xl">Product not found!</p>
        </div>
      )}
    </section>
  );
}



