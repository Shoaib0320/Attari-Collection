// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { Button } from "@/components/ui/button";
// // // import {
// // //   Dialog,
// // //   DialogTrigger,
// // //   DialogContent,
// // //   DialogHeader,
// // //   DialogTitle,
// // //   DialogFooter,
// // // } from "@/components/ui/dialog";
// // // import { Input } from "@/components/ui/input";
// // // import { Form } from "@/components/ui/form";
// // // import axios from "axios";
// // // import ProductTable from "@/components/ProductsTable/ProductsTable";
// // // import CategoryTable from "@/components/CategoryTable/CategoryTable";
// // // import AddCategory from "./addCategory/page";

// // // export default function AddProducts() {
// // //   const [categories, setCategories] = useState([]);
// // //   const [products, setProducts] = useState([]);
// // //   const [newCategory, setNewCategory] = useState({
// // //     _id: null,
// // //     title: "",
// // //     description: "",
// // //     thumbnail: "",
// // //   });
// // //   const [newProduct, setNewProduct] = useState({
// // //     _id: null,
// // //     title: "",
// // //     description: "",
// // //     category: "",
// // //     price: 0,
// // //     imageUrl: "",
// // //   });

// // //   // Fetch categories and products from the backend
// // //   useEffect(() => {
// // //     fetchCategories();
// // //     fetchProducts();
// // //   }, []);

// // //   const fetchCategories = async () => {
// // //     try {
// // //       const response = await axios.get("/api/categories");
// // //       setCategories(response.data.categories);
// // //     } catch (error) {
// // //       console.error("Error fetching categories:", error.message);
// // //     }
// // //   };

// // //   const fetchProducts = async () => {
// // //     try {
// // //       const response = await axios.get("/api/products");
// // //       setProducts(response.data);
// // //     } catch (error) {
// // //       console.error("Error fetching products:", error.message);
// // //     }
// // //   };

// // //   // Add or Edit Category
// // //   const handleCategorySubmit = async (event) => {
// // //     event.preventDefault();
// // //     try {
// // //       if (newCategory._id) {
// // //         // Edit existing category
// // //         await axios.put(`/api/categories/${newCategory._id}`, newCategory);
// // //       } else {
// // //         // Add new category
// // //         await axios.post("/api/categories", newCategory);
// // //       }
// // //       // Reset the newCategory state after successful submission
// // //       setNewCategory({ _id: null, title: "", description: "", thumbnail: "" });
// // //       fetchCategories();
// // //     } catch (error) {
// // //       console.error("Error saving category:", error.response?.data || error.message);
// // //     }
// // //   };

// // //   // Add or Edit Product
// // //   const handleProductSubmit = async (event) => {
// // //     event.preventDefault();
// // //     try {
// // //       if (newProduct._id) {
// // //         // Edit existing product
// // //         await axios.put(`/api/products/${newProduct._id}`, newProduct);
// // //       } else {
// // //         // Add new product
// // //         await axios.post("/api/products", newProduct);
// // //       }
// // //       // Reset the newProduct state after successful submission
// // //       setNewProduct({
// // //         _id: null,
// // //         title: "",
// // //         description: "",
// // //         category: "",
// // //         price: 0,
// // //         imageUrl: "",
// // //       });
// // //       fetchProducts();
// // //     } catch (error) {
// // //       console.error("Error saving product:", error.response?.data || error.message);
// // //     }
// // //   };

// // //   // Set category data in the form for editing
// // //   const handleEditCategory = (category) => {
// // //     setNewCategory(category); // Pre-populate the form with category data
// // //   };

// // //   // Set product data in the form for editing
// // //   const handleEditProduct = (product) => {
// // //     setNewProduct(product); // Pre-populate the form with product data
// // //   };

// // //   return (
// // //     <div className="p-4 bg-gray-100 min-h-screen">
// // //       <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
// // //         Product & Category Management
// // //       </h1>
// // //       <div>
// // //         {/* Add Category & Product Buttons with Dialogs */}
// // //         <div className="flex justify-between mb-4 mx-10">
// // //           <AddCategory />
// // //           {/* Product Dialog */}
// // //           <Dialog>
// // //             <DialogTrigger asChild>
// // //               <Button className="bg-green-600 text-white">
// // //                 {newProduct._id ? "Edit Product" : "Add Product"}
// // //               </Button>
// // //             </DialogTrigger>
// // //             <DialogContent>
// // //               <DialogHeader>
// // //                 <DialogTitle>{newProduct._id ? "Edit Product" : "Add Product"}</DialogTitle>
// // //               </DialogHeader>
// // //               <Form onSubmit={handleProductSubmit} className="space-y-4">
// // //                 <Input
// // //                   placeholder="Title"
// // //                   value={newProduct.title}
// // //                   onChange={(e) =>
// // //                     setNewProduct({ ...newProduct, title: e.target.value })
// // //                   }
// // //                   required
// // //                 />
// // //                 <Input
// // //                   placeholder="Description"
// // //                   value={newProduct.description}
// // //                   onChange={(e) =>
// // //                     setNewProduct({ ...newProduct, description: e.target.value })
// // //                   }
// // //                   required
// // //                 />
// // //                 <select
// // //                   value={newProduct.category}
// // //                   onChange={(e) =>
// // //                     setNewProduct({ ...newProduct, category: e.target.value })
// // //                   }
// // //                   required
// // //                   className="w-full p-2 border rounded"
// // //                 >
// // //                   <option value="">Select Category</option>
// // //                   {categories.map((category) => (
// // //                     <option key={category._id} value={category._id}>
// // //                       {category.title}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //                 <Input
// // //                   type="number"
// // //                   placeholder="Price"
// // //                   value={newProduct.price}
// // //                   onChange={(e) =>
// // //                     setNewProduct({ ...newProduct, price: e.target.value })
// // //                   }
// // //                   required
// // //                 />
// // //                 <Input
// // //                   placeholder="Image URL"
// // //                   value={newProduct.imageUrl}
// // //                   onChange={(e) =>
// // //                     setNewProduct({ ...newProduct, imageUrl: e.target.value })
// // //                   }
// // //                   required
// // //                 />
// // //                 <DialogFooter>
// // //                   <Button type="submit" className="bg-green-600 text-white">
// // //                     {newProduct._id ? "Update Product" : "Add Product"}
// // //                   </Button>
// // //                 </DialogFooter>
// // //               </Form>
// // //             </DialogContent>
// // //           </Dialog>
// // //         </div>

// // //         {/* Category and Product Tables */}
// // //         <CategoryTable onEditCategory={handleEditCategory} />
// // //         <ProductTable onEditProduct={handleEditProduct} />
// // //       </div>
// // //     </div>
// // //   );
// // // }








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
// // import ProductTable from "@/components/ProductsTable/ProductsTable";
// // import CategoryTable from "@/components/CategoryTable/CategoryTable";
// // import AddCategory from "./addCategory/page";

// // export default function AddProducts() {
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [newCategory, setNewCategory] = useState({
// //     _id: null,
// //     title: "",
// //     description: "",
// //     thumbnail: "",
// //   });
// //   const [newProduct, setNewProduct] = useState({
// //     _id: null,
// //     title: "",
// //     description: "",
// //     category: "",
// //     price: 0,
// //     imageUrl: "",
// //   });
// //   const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);

// //   // Fetch categories and products from the backend
// //   useEffect(() => {
// //     fetchCategories();
// //     fetchProducts();
// //   }, []);

// //   const fetchCategories = async () => {
// //     try {
// //       const response = await axios.get("/api/categories");
// //       setCategories(response.data.categories);
// //     } catch (error) {
// //       console.error("Error fetching categories:", error.message);
// //     }
// //   };

// //   const fetchProducts = async () => {
// //     try {
// //       const response = await axios.get("/api/products");
// //       setProducts(response.data);
// //     } catch (error) {
// //       console.error("Error fetching products:", error.message);
// //     }
// //   };

// //   // Add or Edit Category
// //   // const handleCategorySubmit = async (event) => {
// //   //   event.preventDefault();
// //   //   try {
// //   //     if (newCategory._id) {
// //   //       await axios.put(`/api/categories/${newCategory._id}`, newCategory);
// //   //     } else {
// //   //       await axios.post("/api/categories", newCategory);
// //   //     }
// //   //     setNewCategory({ _id: null, title: "", description: "", thumbnail: "" });
// //   //     fetchCategories();
// //   //   } catch (error) {
// //   //     console.error("Error saving category:", error.response?.data || error.message);
// //   //   }
// //   // };

// //   // Add or Edit Product
// //   const handleProductSubmit = async (event) => {
// //     event.preventDefault();
// //     try {
// //       if (newProduct._id) {
// //         await axios.put(`/api/products/${newProduct._id}`, newProduct);
// //       } else {
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
// //       setIsProductDialogOpen(false);
// //       fetchProducts();
// //     } catch (error) {
// //       console.error("Error saving product:", error.response?.data || error.message);
// //     }
// //   };

// //   // Delete Product
// //   const handleDeleteProduct = async (productId) => {
   
// //     if (confirm("Are you sure you want to delete this category?")) {
// //       try {
// //         const response = await axios.delete(`/api/products/${productId}`);
// //         if (response.status === 200) {
// //           console.log("Product deleted successfully");
// //           fetchProducts(); // Refresh the products list after deletion
// //         }
// //       } catch (error) {
// //         console.error("Error deleting product: ", error.message);
// //       }
// //     }
// //   };
  

// //   // // Set product data in the form for editing
// //   // const handleEditProduct = (product) => {
// //   //   setNewProduct(product);
// //   //   setIsProductDialogOpen(true); // Open dialog when editing a product
// //   // };

// //  // Function to handle the product update (PUT request)
// // const handleEditProduct = async (productId, updatedProductData) => {
// //       setNewProduct(productId);
// //       setIsProductDialogOpen(true); // Open dialog when editing a product
// //   try {
// //     const response = await axios.put(`/api/products/${productId}`, updatedProductData);
// //     if (response.status === 200) {
// //       console.log('Product updated successfully!');
// //       // Close the dialog
// //       setIsProductDialogOpen(false);
// //       // Optionally, refresh the product list or UI
// //     }
// //   } catch (error) {
// //     console.error('Error updating product:', error);
// //   }
// // };


// //   return (
// //     <div className="p-4 bg-gray-100 min-h-screen">
// //       <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
// //         Product & Category Management
// //       </h1>
// //       <div>
// //         {/* Add Category & Product Buttons with Dialogs */}
// //         <div className="flex justify-between mb-4 mx-10">
// //           <AddCategory />
// //           {/* Product Dialog */}
// //           <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
// //             <DialogTrigger asChild>
// //               <Button className="bg-green-600 text-white">
// //                 {newProduct._id ? "Edit Product" : "Add Product"}
// //               </Button>
// //             </DialogTrigger>
// //             <DialogContent>
// //               <DialogHeader>
// //                 <DialogTitle>{newProduct._id ? "Edit Product" : "Add Product"}</DialogTitle>
// //               </DialogHeader>
// //               <Form onSubmit={handleProductSubmit} className="space-y-4">
// //                 <Input
// //                   placeholder="Title"
// //                   value={newProduct.title}
// //                   onChange={(e) =>
// //                     setNewProduct({ ...newProduct, title: e.target.value })
// //                   }
// //                   required
// //                 />
// //                 <Input
// //                   placeholder="Description"
// //                   value={newProduct.description}
// //                   onChange={(e) =>
// //                     setNewProduct({ ...newProduct, description: e.target.value })
// //                   }
// //                   required
// //                 />
// //                 <select
// //                   value={newProduct.category}
// //                   onChange={(e) =>
// //                     setNewProduct({ ...newProduct, category: e.target.value })
// //                   }
// //                   required
// //                   className="w-full p-2 border rounded"
// //                 >
// //                   <option value="">Select Category</option>
// //                   {categories.map((category) => (
// //                     <option key={category._id} value={category._id}>
// //                       {category.title}
// //                     </option>
// //                   ))}
// //                 </select>
// //                 <Input
// //                   type="number"
// //                   placeholder="Price"
// //                   value={newProduct.price}
// //                   onChange={(e) =>
// //                     setNewProduct({ ...newProduct, price: e.target.value })
// //                   }
// //                   required
// //                 />
// //                 <Input
// //                   placeholder="Image URL"
// //                   value={newProduct.imageUrl}
// //                   onChange={(e) =>
// //                     setNewProduct({ ...newProduct, imageUrl: e.target.value })
// //                   }
// //                   required
// //                 />
// //                 <DialogFooter>
// //                   <Button type="submit" className="bg-green-600 text-white">
// //                     {newProduct._id ? "Update Product" : "Add Product"}
// //                   </Button>
// //                 </DialogFooter>
// //               </Form>
// //             </DialogContent>
// //           </Dialog>
// //         </div>

// //         {/* Category and Product Tables */}
// //         <CategoryTable onEditCategory={setNewCategory} />
// //         <ProductTable
// //           products={products}
// //           onEditProduct={handleEditProduct}
// //           onDeleteProduct={handleDeleteProduct}
// //           // products={products}
// //         />
// //       </div>
// //     </div>
// //   );
// // }






// "use client";

// import { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Form } from "@/components/ui/form";
// import axios from 'axios';
// import ProductTable from '@/components/ProductsTable/ProductsTable';
// import CategoryTable from '@/components/CategoryTable/CategoryTable';
// import AddCategory from './addCategory/page';

// export default function AddProducts() {
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [newCategory, setNewCategory] = useState({ title: '', description: '', thumbnail: '' });
//   const [newProduct, setNewProduct] = useState({ title: '', description: '', category: '', price: 0, imageUrl: '' });
//   const [editingProduct, setEditingProduct] = useState(null); // State to hold the product being edited

//   // Fetch categories and products from the backend
//   useEffect(() => {
//     fetchCategories();
//     fetchProducts();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('/api/categories');
//       setCategories(response.data.categories);
//     } catch (error) {
//       console.error("Error fetching categories:", error.message);
//     }
//   };

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('/api/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error.message);
//     }
//   };

//   const handleCategorySubmit = async (event) => {
//     event.preventDefault();
//     try {
//       console.log(newCategory);
//       const response = await axios.post('/api/categories', newCategory);
//       setNewCategory({ title: '', description: '', thumbnail: '' });
//       fetchCategories();
//     } catch (error) {
//       console.error("Error adding category:", error.response?.data || error.message);
//     }
//   };

//   const handleProductSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post('/api/products', newProduct);
//       setNewProduct({ title: '', description: '', category: '', price: 0, imageUrl: '' });
//       fetchProducts();
//     } catch (error) {
//       console.error("Error adding product:", error.response?.data || error.message);
//     }
//   };

//   const handleProductEditSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.put(`/api/products/${editingProduct._id}`, editingProduct);
//       setEditingProduct(null); // Close the edit dialog
//       fetchProducts(); // Refresh product list
//     } catch (error) {
//       console.error("Error updating product:", error.response?.data || error.message);
//     }
//   };

//   const openEditDialog = (product) => {
//     setEditingProduct(product); // Set the product to be edited
//   };

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">Product & Category Management</h1>
//       <div>
//         {/* Add Category & Product Buttons with Dialogs */}
//         <div className="flex justify-between mb-4 mx-10">

//           <AddCategory />
//           {/* Product Dialog */}
//           <Dialog>
//             <DialogTrigger asChild>
//               <Button className="bg-green-600 text-white">Add Product</Button>
//             </DialogTrigger>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Add Product</DialogTitle>
//               </DialogHeader>
//               <Form onSubmit={handleProductSubmit} className="space-y-4">
//                 <Input
//                   placeholder="Title"
//                   value={newProduct.title}
//                   onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
//                   required
//                 />
//                 <Input
//                   placeholder="Description"
//                   value={newProduct.description}
//                   onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
//                   required
//                 />
//                 <select
//                   value={newProduct.category}
//                   onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
//                   required
//                   className="w-full p-2 border rounded"
//                 >
//                   <option value="">Select Category</option>
//                   {categories.map((category) => (
//                     <option key={category._id} value={category._id}>{category.title}</option>
//                   ))}
//                 </select>
//                 <Input
//                   type="number"
//                   placeholder="Price"
//                   value={newProduct.price}
//                   onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//                   required
//                 />
//                 <Input
//                   placeholder="Image URL"
//                   value={newProduct.imageUrl}
//                   onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
//                   required
//                 />
//                 <DialogFooter>
//                   <Button type="submit" className="bg-green-600 text-white">Add Product</Button>
//                 </DialogFooter>
//               </Form>
//             </DialogContent>
//           </Dialog>
//         </div>

//         {/* Edit Product Dialog */}
//         {editingProduct && (
//           <Dialog open onOpenChange={() => setEditingProduct(null)}>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Edit Product</DialogTitle>
//               </DialogHeader>
//               <Form onSubmit={handleProductEditSubmit} className="space-y-4">
//                 <Input
//                   placeholder="Title"
//                   value={editingProduct.title}
//                   onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
//                   required
//                 />
//                 <Input
//                   placeholder="Description"
//                   value={editingProduct.description}
//                   onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
//                   required
//                 />
//                 <select
//                   value={editingProduct.category}
//                   onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
//                   required
//                   className="w-full p-2 border rounded"
//                 >
//                   <option value="">Select Category</option>
//                   {categories.map((category) => (
//                     <option key={category._id} value={category._id}>{category.title}</option>
//                   ))}
//                 </select>
//                 <Input
//                   type="number"
//                   placeholder="Price"
//                   value={editingProduct.price}
//                   onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
//                   required
//                 />
//                 <Input
//                   placeholder="Image URL"
//                   value={editingProduct.imageUrl}
//                   onChange={(e) => setEditingProduct({ ...editingProduct, imageUrl: e.target.value })}
//                   required
//                 />
//                 <DialogFooter>
//                   <Button type="submit" className="bg-green-600 text-white">Update Product</Button>
//                 </DialogFooter>
//               </Form>
//             </DialogContent>
//           </Dialog>
//         )}

//         {/* Category Table */}
//         <CategoryTable categories={categories} />
//         <ProductTable products={products} onEdit={openEditDialog} /> {/* Pass onEdit function as prop */}
//       </div>
//     </div>
//   );
// }








// (admin)/admin/addProducts/page.js

"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import axios from "axios";
import ProductTable from "@/components/ProductsTable/ProductsTable";
import CategoryTable from "@/components/CategoryTable/CategoryTable";
import AddCategory from "./addCategory/page";

export default function AddProducts() {
  const [categories, setCategories] = useState([]); // Initialize as an empty array
  const [products, setProducts] = useState([]);
  const [newCategory, setNewCategory] = useState({
    _id: null,
    title: "",
    description: "",
    thumbnail: "",
  });
  const [newProduct, setNewProduct] = useState({
    _id: null,
    title: "",
    description: "",
    category: "",
    price: 0,
    imageUrl: "",
  });
  const [isProductDialogOpen, setProductDialogOpen] = useState(false); // Track product dialog visibility

  // Fetch categories and products from the backend
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const categoriesData = await fetchCategories();
    setCategories(categoriesData);
    const productsData = await fetchProducts();
    setProducts(productsData);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/categories");
      console.log("Fetched categories:", response.data); // Log to check the structure
      return response.data.categories || []; // Ensure it returns an array
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      return []; // Return an empty array on error
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      return response.data || []; // Ensure it returns an array
    } catch (error) {
      console.error("Error fetching products:", error.message);
      return []; // Return an empty array on error
    }
  };

  // Add or Edit Category
  const handleCategorySubmit = async (event) => {
    event.preventDefault();
    try {
      if (newCategory._id) {
        // Edit existing category
        await axios.put(`/api/categories/${newCategory._id}`, newCategory);
      } else {
        // Add new category
        await axios.post("/api/categories", newCategory);
      }
      setNewCategory({ _id: null, title: "", description: "", thumbnail: "" });
      loadData(); // Reload categories
    } catch (error) {
      console.error("Error saving category:", error.response?.data || error.message);
    }
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
      setNewProduct({
        _id: null,
        title: "",
        description: "",
        category: "",
        price: 0,
        imageUrl: "",
      });
      setProductDialogOpen(false); // Close dialog after successful submission
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Error saving product:", error.response?.data || error.message);
    }
  };

  // Delete Product
  const handleDeleteProduct = async (productId) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await axios.delete(`/api/products/${productId}`);
        if (response.status === 200) {
          console.log("Product deleted successfully");
          fetchProducts(); // Refresh the products list after deletion
        }
      } catch (error) {
        console.error("Error deleting product:", error.message);
      }
    }
  };

  // Set category data in the form for editing
  const handleEditCategory = (category) => {
    setNewCategory(category); // Pre-populate the form with category data
  };

  // Set product data in the form for editing
  const handleEditProduct = (product) => {
    setNewProduct(product); // Pre-populate the form with product data
    setProductDialogOpen(true); // Open the dialog for editing
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        Product & Category Management
      </h1>
      <div>
        {/* Add Category & Product Buttons with Dialogs */}
        <div className="flex justify-between mb-4 mx-10">
          <AddCategory />
          {/* Product Dialog */}
          <Dialog open={isProductDialogOpen} onOpenChange={setProductDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 text-white">
                {newProduct._id ? "Edit Product" : "Add Product"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{newProduct._id ? "Edit Product" : "Add Product"}</DialogTitle>
              </DialogHeader>
              <Form onSubmit={handleProductSubmit} className="space-y-4">
                <Input
                  placeholder="Title"
                  value={newProduct.title}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, title: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, description: e.target.value })
                  }
                  required
                />
                <select
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
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
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="Image URL"
                  value={newProduct.imageUrl}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, imageUrl: e.target.value })
                  }
                  required
                />
                <DialogFooter>
                  <Button type="submit" className="bg-green-600 text-white">
                    {newProduct._id ? "Update Product" : "Add Product"}
                  </Button>
                </DialogFooter>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Category and Product Tables */}
        <CategoryTable onEditCategory={handleEditCategory} />
        <ProductTable
          products={products}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      </div>
    </div>
  );
}