// "use client";

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import { Button } from "../ui/button";

// export default function ProductsTable({ products = [], onEditProduct, onDeleteProduct }) {
//   const [fetchedProducts, setFetchedProducts] = useState(products);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('/api/products');
//       setFetchedProducts(response.data); // Update the state with fetched data
//     } catch (error) {
//       console.error("Error fetching products:", error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen mx-10">
//       <div className="flex justify-between items-center my-4">
//         <h1 className="font-bold text-xl">Products</h1>
//       </div>
//       <Table>
//         <TableCaption>A list of your Products.</TableCaption>
//         <TableHeader className="bg-slate-300 text-white">
//           <TableRow>
//             <TableHead>Image</TableHead>
//             <TableHead className="w-[100px]">Title</TableHead>
//             <TableHead>Description</TableHead>
//             <TableHead>Price</TableHead>
//             <TableHead>Category</TableHead>
//             <TableHead>Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {fetchedProducts.map((product) => (
//             <TableRow key={product.title}>
//               <TableCell className="text-right">
//                 <img src={product.imageUrl} alt={product.title} className="w-12 h-12 rounded-full" />
//               </TableCell>
//               <TableCell className="font-medium">{product.title}</TableCell>
//               <TableCell>{product.description}</TableCell>
//               <TableCell>{product.price}</TableCell>
//               <TableCell>{product.category?.title}</TableCell>
//               <TableCell>
//                 <div style={{ display: 'flex', gap: '20px' }}>
//                   <Button onClick={() => onEditProduct(product)}>Edit</Button> 
//                   <Button onClick={() => onDeleteProduct(product._id)}>Delete</Button>
//                 </div>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }









"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Button } from "../ui/button";

export default function ProductsTable({ products = [], onEditProduct, onDeleteProduct }) {
  const [fetchedProducts, setFetchedProducts] = useState(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setFetchedProducts(response.data); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  return (
    <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">Products</h1>
      </div>
      <Table>
        <TableCaption>A list of your Products.</TableCaption>
        <TableHeader className="bg-slate-300 text-white">
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fetchedProducts.map((product) => (
            <TableRow key={product._id}>
              <TableCell className="text-right">
                <img src={product.imageUrl} alt={product.title} className="w-12 h-12 rounded-full" />
              </TableCell>
              <TableCell className="font-medium">{product.title}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                {/* Check if category exists and display title */}
                {product.category ? product.category.title : "No Category"}
              </TableCell>
              <TableCell>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <Button onClick={() => onEditProduct(product)}>Edit</Button>
                  <Button onClick={() => onDeleteProduct(product._id)}>Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
