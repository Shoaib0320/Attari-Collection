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

  // // Handle feedback navigation
  // const handleNextFeedback = () => {
  //   setCurrentFeedbackIndex((prevIndex) =>
  //     prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const handlePreviousFeedback = () => {
  //   setCurrentFeedbackIndex((prevIndex) =>
  //     prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
  //   );
  // };

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
//       <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
//   <div class="flex">
//     <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
//     <div>
//       <p class="font-bold">Our privacy policy has changed</p>
//       <p class="text-sm">Make sure you know how these changes affect you.</p>
//     </div>
//   </div>
// </div>
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
          <FeedbackSlider productFeedbacks={feedbacks} />
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



