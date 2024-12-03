'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Image from 'next/image'

// This is just sample data. Replace with your actual product data.
const products = [
  { id: 1, name: 'Luxury Watch', image: '/placeholder.svg?height=600&width=800' },
  { id: 2, name: 'Designer Handbag', image: '/placeholder.svg?height=600&width=800' },
  { id: 3, name: 'Premium Sunglasses', image: '/placeholder.svg?height=600&width=800' },
  { id: 4, name: 'Elegant Jewelry', image: '/placeholder.svg?height=600&width=800' },
  { id: 5, name: 'Exclusive Perfume', image: '/placeholder.svg?height=600&width=800' },
]

export default function Slider() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop
        className="h-[600px]"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative w-full h-full">
              <img
                src={product.image}
                alt={product.name}
                // layout="fill"
                // objectFit="cover"
                className="brightness-75"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-4xl font-bold text-white">{product.name}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

