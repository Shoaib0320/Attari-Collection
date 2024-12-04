'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react'
import { Button } from '../ui/button';

export const ReletedProducts = ({ product }) => {
    const [relatedProducts, setRelatedProducts] = useState([]); // State to store related products
    useEffect(() => {
        const fetchRelatedProducts = async () => {
            if (product?.category?.title) {
                try {
                    const response = await fetch(`/api/products?category=${product.category.title}`);
                    const data = await response.json();
                    // Filter out the current product from related products and ensure they are from the same category
                    const relatedItems = data.filter(item => item._id !== product._id && item.category?.title === product.category.title);
                    setRelatedProducts(relatedItems);
                } catch (error) {
                    console.error("Failed to fetch related products:", error);
                }
            }
        };
        fetchRelatedProducts();
    }, [product]);

    return (
        <>
            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <div className="mt-12">
                    <h3 className="text-3xl font-serif mb-6 text-center text-gray-800">Related Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {relatedProducts.map((relatedProduct) => (
                            <div key={relatedProduct._id} className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={relatedProduct.imageUrl || "/placeholder.svg?height=300&width=300"}
                                    alt={relatedProduct.title}
                                    className="w-full h-48 object-cover mb-6 rounded"
                                />
                                <h4 className="text-xl text-gray-800">{relatedProduct.title}</h4>
                                <h4 className="text-normal my-6 text-gray-600">Category: {relatedProduct.category.title}</h4>
                                <p className="text-lg text-gray-900 mt-3">PKR: {relatedProduct.price}</p>

                                {/* <Link href={`/ProductDetail/${product._id}`}>
                                    <Button className="bg-gray-700 hover:bg-gray-300 hover:text-black mt-10">See Details</Button>
                                </Link> */}
                                <Link href={`/ProductDetail/${relatedProduct._id}`}>
                                    <Button className="bg-gray-700 hover:bg-gray-300 hover:text-black mt-10">See Details</Button>
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            )}

        </>
    )
}
