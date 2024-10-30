// // "use client";

// // import { useState, useEffect } from "react";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Dialog,
// //   DialogTrigger,
// //   DialogContent,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogFooter,
// // } from "@/components/ui/dialog";
// // import { Input } from "@/components/ui/input";
// // import { Form } from "@/components/ui/form";
// // import axios from "axios";
// // import ProductsTable from "@/components/ProductsTable/ProductsTable";

// // export default function AddProduct({ categories, fetchProducts }) {
// //     const [products, setProducts] = useState([]);
// //   const [newProduct, setNewProduct] = useState({
// //     _id: null,
// //     title: "",
// //     description: "",
// //     category: "",
// //     price: 0,
// //     imageUrl: "",
// //   });
// //   const [isProductDialogOpen, setProductDialogOpen] = useState(false);

// //   // Handle Add or Edit Product
// //   const handleProductSubmit = async (event) => {
// //     event.preventDefault();
// //     try {
// //       if (newProduct._id) {
// //         // Edit existing product
// //         await axios.put(`/api/products/${newProduct._id}`, newProduct);
// //       } else {
// //         // Add new product
// //         await axios.post("/api/products", newProduct);
// //       }
// //       setNewProduct({
// //         _id: null,
// //         title: "",
// //         description: "",
// //         category: "",
// //         price: 0,
// //         imageUrl: "",
// //       });
// //       setProductDialogOpen(false); // Close dialog after successful submission
// //       fetchProducts(); // Refresh products list
// //     } catch (error) {
// //       console.error("Error saving product:", error.response?.data || error.message);
// //     }
// //   };

// //   // Set product data in the form for editing
// //   const handleEditProduct = (product) => {
// //     setNewProduct(product); // Pre-populate the form with product data
// //     setProductDialogOpen(true); // Open the dialog for editing
// //   };

// // //     // Delete Product
// // //   const handleDeleteProduct = async (productId) => {
   
// // //     if (confirm("Are you sure you want to delete this category?")) {
// // //       try {
// // //         const response = await axios.delete(`/api/products/${productId}`);
// // //         if (response.status === 200) {
// // //           console.log("Product deleted successfully");
// // //           fetchProducts(); // Refresh the products list after deletion
// // //         }
// // //       } catch (error) {
// // //         console.error("Error deleting product: ", error.message);
// // //       }
// // //     }
// // //   };

// //   return (
// //     <>
// //     <div>

// //       {/* Product Dialog */}
// //       <Dialog open={isProductDialogOpen} onOpenChange={setProductDialogOpen}>
// //         <DialogTrigger asChild>
// //           <Button className="bg-green-600 text-white">
// //             {newProduct._id ? "Edit Product" : "Add Product"}
// //           </Button>
// //         </DialogTrigger>
// //         <DialogContent>
// //           <DialogHeader>
// //             <DialogTitle>{newProduct._id ? "Edit Product" : "Add Product"}</DialogTitle>
// //           </DialogHeader>
// //           <Form onSubmit={handleProductSubmit} className="space-y-4">
// //             <Input
// //               placeholder="Title"
// //               value={newProduct.title}
// //               onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
// //               required
// //             />
// //             <Input
// //               placeholder="Description"
// //               value={newProduct.description}
// //               onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
// //               required
// //             />
// //             <select
// //               value={newProduct.category}
// //               onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
// //               required
// //               className="w-full p-2 border rounded"
// //             >
// //               <option value="">Select Category</option>
// //               {categories.map((category) => (
// //                 <option key={category._id} value={category._id}>
// //                   {category.title}
// //                 </option>
// //               ))}
// //             </select>
// //             <Input
// //               type="number"
// //               placeholder="Price"
// //               value={newProduct.price}
// //               onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
// //               required
// //             />
// //             <Input
// //               placeholder="Image URL"
// //               value={newProduct.imageUrl}
// //               onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
// //               required
// //             />
// //             <DialogFooter>
// //               <Button type="submit" className="bg-green-600 text-white">
// //                 {newProduct._id ? "Update Product" : "Add Product"}
// //               </Button>
// //             </DialogFooter>
// //           </Form>
// //         </DialogContent>
// //       </Dialog>
// //     </div>
// //     </>
// //   );
// // }







// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Form } from "@/components/ui/form";

// export default function AddProduct({ categories, fetchProducts }) {
//   const [newProduct, setNewProduct] = useState({
//     _id: null,
//     title: "",
//     description: "",
//     category: "",
//     price: 0,
//     imageUrl: "",
//   });
//   const [isProductDialogOpen, setProductDialogOpen] = useState(false); // Track dialog visibility

//   // Add or Edit Product
//   const handleProductSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       if (newProduct._id) {
//         // Edit existing product
//         await axios.put(`/api/products/${newProduct._id}`, newProduct);
//       } else {
//         // Add new product
//         await axios.post("/api/products", newProduct);
//       }
//       setNewProduct({
//         _id: null,
//         title: "",
//         description: "",
//         category: "",
//         price: 0,
//         imageUrl: "",
//       });
//       setProductDialogOpen(false); // Close dialog after submission
//       fetchProducts(); // Refresh product list
//     } catch (error) {
//       console.error("Error saving product:", error.response?.data || error.message);
//     }
//   };

//   // Set product data in the form for editing
//   const handleEditProduct = (product) => {
//     setNewProduct(product); // Pre-populate the form with product data
//     setProductDialogOpen(true); // Open the dialog for editing
//   };

//   return (
//     <div>
//       {/* Product Dialog */}
//       <Dialog open={isProductDialogOpen} onOpenChange={setProductDialogOpen}>
//         <DialogTrigger asChild>
//           <Button className="bg-green-600 text-white">
//             {newProduct._id ? "Edit Product" : "Add Product"}
//           </Button>
//         </DialogTrigger>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>{newProduct._id ? "Edit Product" : "Add Product"}</DialogTitle>
//           </DialogHeader>
//           <Form onSubmit={handleProductSubmit} className="space-y-4">
//             <Input
//               placeholder="Title"
//               value={newProduct.title}
//               onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
//               required
//             />
//             <Input
//               placeholder="Description"
//               value={newProduct.description}
//               onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
//               required
//             />
//             <select
//               value={newProduct.category}
//               onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
//               required
//               className="w-full p-2 border rounded"
//             >
//               <option value="">Select Category</option>
//               {categories.map((category) => (
//                 <option key={category._id} value={category._id}>
//                   {category.title}
//                 </option>
//               ))}
//             </select>
//             <Input
//               type="number"
//               placeholder="Price"
//               value={newProduct.price}
//               onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//               required
//             />
//             <Input
//               placeholder="Image URL"
//               value={newProduct.imageUrl}
//               onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
//               required
//             />
//             <DialogFooter>
//               <Button type="submit" className="bg-green-600 text-white">
//                 {newProduct._id ? "Update Product" : "Add Product"}
//               </Button>
//             </DialogFooter>
//           </Form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }










// components/AddProduct.js

"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";

export default function AddProduct({ categories, fetchProducts, productToEdit, setProductToEdit }) {
  const [newProduct, setNewProduct] = useState({
    _id: null,
    title: "",
    description: "",
    category: "",
    price: 0,
    imageUrl: "",
  });

  const [isProductDialogOpen, setProductDialogOpen] = useState(false);

  // Open dialog for adding or editing a product
  const openDialog = () => {
    if (productToEdit) {
      setNewProduct(productToEdit);
    } else {
      setNewProduct({
        _id: null,
        title: "",
        description: "",
        category: "",
        price: 0,
        imageUrl: "",
      });
    }
    setProductDialogOpen(true);
  };

  // Add or Edit Product
  const handleProductSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newProduct._id) {
        // Edit existing product
        await axios.put(`/api/products/${newProduct._id}`, newProduct);
      } else {
        // Add new product
        await axios.post("/api/products", newProduct);
      }
      setProductDialogOpen(false);
      fetchProducts(); // Refresh the products list after submission
      setProductToEdit(null); // Reset the edit state
    } catch (error) {
      console.error("Error saving product:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <Dialog open={isProductDialogOpen} onOpenChange={setProductDialogOpen}>
        <DialogTrigger asChild>
          <Button className="bg-green-600 text-white" onClick={openDialog}>
            {newProduct._id ? "Edit Product" : "Add Product"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{newProduct._id ? "Edit Product" : "Add Product"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleProductSubmit} className="space-y-4">
            <Input
              placeholder="Title"
              value={newProduct.title}
              onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
              required
            />
            <Input
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              required
            />
            <select
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))}
            </select>
            <Input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              required
            />
            <Input
              placeholder="Image URL"
              value={newProduct.imageUrl}
              onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
              required
            />
            <DialogFooter>
              <Button type="submit" className="bg-green-600 text-white">
                {newProduct._id ? "Update Product" : "Add Product"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
