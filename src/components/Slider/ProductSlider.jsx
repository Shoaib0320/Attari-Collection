'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function ProductSlider() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // Function to shuffle the array
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5)
    }

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`api/products`) // Replace with your API endpoint
                const data = await response.json()
                const shuffledProducts = shuffleArray(data).slice(0, 7) // Shuffle and take 7 products
                setProducts(shuffledProducts)
            } catch (error) {
                console.error('Error fetching products:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-md p-4 animate-pulse"
                        >
                            <div className="h-48 bg-gray-300 rounded-md"></div>
                            <div className="mt-4 h-6 bg-gray-300 rounded w-3/4"></div>
                            <div className="mt-2 h-6 bg-gray-300 rounded w-1/2"></div>
                            <div className="mt-4 h-10 bg-gray-300 rounded w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-7xl mx-auto my-12 px-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="pb-12">
                        <div className="bg-gray-100 text-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <div className="relative h-64 w-full">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                                />
                                <div className="absolute top-2 right-2 bg-gray-700 text-white font-bold py-1 px-2 rounded-full text-xs">
                                    Premium
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-black truncate">{product.title}</h3>
                                <p className="text-xl font-bold text-gray-700 mt-2">PKR:{product.price}</p>
                                <Link href={'/products'}>
                                    <Button className="mt-4 w-full bg-gray-700 hover:bg-gray-300 text-white hover:text-black font-bold py-2 px-4 rounded-full transition-colors duration-300">
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
