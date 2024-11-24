// "use client"

// import { useState } from "react"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import Image from "next/image"


// export function DetailSheet({ children, feedback }) {
//   const [products, setProducts] = useState([])

//   const fetchProducts = async () => {
//     const res = await fetch(`/api/products?ids=${feedback.productId.join(",")}`)
//     const data = await res.json()
//     setProducts(data)
//   }

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <div onClick={fetchProducts}>{children}</div>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Feedback Details</SheetTitle>
//         </SheetHeader>
//         <div className="mt-4 space-y-4">
//           <p><strong>User:</strong> {feedback.userId.firstName}</p>
//           <p><strong>Email:</strong> {feedback.userId.email}</p>
//           <p><strong>Feedback:</strong> {feedback.feedback}</p>
//           <h3 className="text-lg font-semibold">Products</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {products.map((product) => (
//               <Card key={product._id}>
//                 <CardHeader>
//                   <CardTitle>{product.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <img src={product.image} alt={product.title} width={100} height={100} className="mb-2" />
//                   <p><strong>Category:</strong> {product.category}</p>
//                   <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function DetailSheet({ children, feedback }) {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`/api/products?ids=${feedback.productId.join(",")}`)
      if (!res.ok) throw new Error('Failed to fetch products')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (feedback.productId && feedback.productId.length > 0) {
      fetchProducts()
    }
  }, [feedback])

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Feedback Details</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          <p><strong>User:</strong> {feedback.userId.firstName}</p>
          <p><strong>Email:</strong> {feedback.userId.email}</p>
          <p><strong>Feedback:</strong> {feedback.feedback}</p>
          <h3 className="text-lg font-semibold">Products</h3>
          {isLoading ? (
            <p>Loading products...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((product) => (
                <Card key={product._id}>
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={product.image} alt={product.title} width={100} height={100} className="mb-2" />
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

