// @/components/ProductsCard/ProductsCard.jsx

'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CategoryChips from "@/components/CategoryChips/CategoryChips";
import { fetchProducts } from "@/actions/addProductActions";

export default function ProductsCard() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
    fetchCategories();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data); // Initially, show all products
    } catch (error) {
      console.error("Error fetching products:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || 'Unknown error'}`);
      }
      const data = await response.json();
      
      console.log(data);  // Log the whole response to inspect its structure
  
      // Check if categories is in the expected format
      if (Array.isArray(data.categories)) {
        setCategories(data.categories);  // Assuming 'categories' is a key in the response
      } else {
        console.error('Fetched categories is not an array', data);
        setError('Invalid categories format');
      }
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      setError(error.message);
    }
  };

  const handleCategoryClick = (category) => {
    const filtered = products.filter(product => product.category._id === category._id);
    setFilteredProducts(filtered);
  };

  const handleAllClick = () => {
    setFilteredProducts(products); // Show all products
  };

  if (loading) {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="p-4 md:w-1/2 lg:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="bg-gray-200 animate-pulse h-48 w-full"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="flex items-center flex-wrap">
                      <Button className="bg-gray-300 hover:bg-gray-400 text-transparent cursor-not-allowed">See Details</Button>
                      <div className="h-4 bg-gray-200 rounded ml-auto"></div>
                    </div>
                    <div className="mt-2">
                      <span className="h-4 bg-gray-200 rounded w-16 inline-block"></span>
                      <span className="h-4 bg-gray-200 rounded w-16 ml-3 inline-block"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </section>
    );
  }


  if (error) {
    return (
      <div>
        <p className="flex justify-center items-center">Error fetching products: {error}</p>
        <Button 
          className="flex justify-center items-center mx-auto my-10"
          onClick={() => window.location.reload()} // Reloads the page when clicked
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-6">
          {/* Add an 'All' category chip */}
          <Button
            className="bg-gray-700 text-white px-4 py-2 rounded-full mr-2 mb-4"
            onClick={handleAllClick}
          >
            All
          </Button>
          {/* Render other category chips */}
          <CategoryChips categories={categories} onCategoryClick={handleCategoryClick} />
        </div>
        <div className="flex flex-wrap -m-4 mt-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={product.imageUrl || "/placeholder.svg?height=400&width=720"}
                  alt={product.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {product.category?.title}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {product.title || "Product Name"}
                  </h1>
                  <div className="flex items-center flex-wrap">
                    <Link href={`/ProductDetail/${product._id}`}>
                      <Button className="bg-gray-700 hover:bg-gray-300 hover:text-black">See Details</Button>
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      {product.views || "1.2K"}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      {product.comments || "6"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
