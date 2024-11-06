// // // // // // (admin)/admin/addProducts/page.js

// // // // // "use client"

// // // // // import { useState, useEffect } from "react";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import {
// // // // //   Dialog,
// // // // //   DialogTrigger,
// // // // //   DialogContent,
// // // // //   DialogHeader,
// // // // //   DialogTitle,
// // // // //   DialogFooter,
// // // // // } from "@/components/ui/dialog";
// // // // // import { Input } from "@/components/ui/input";
// // // // // import { Form } from "@/components/ui/form";
// // // // // import axios from "axios";
// // // // // import ProductTable from "@/components/ProductsTable/ProductsTable";
// // // // // import CategoryTable from "@/components/CategoryTable/CategoryTable";
// // // // // import AddCategory from "./addCategory/page";

// // // // // export default function AddProducts() {
// // // // //   const [categories, setCategories] = useState([]); // Initialize as an empty array
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [newCategory, setNewCategory] = useState({
// // // // //     _id: null,
// // // // //     title: "",
// // // // //     description: "",
// // // // //     thumbnail: "",
// // // // //   });
// // // // //   const [newProduct, setNewProduct] = useState({
// // // // //     _id: null,
// // // // //     title: "",
// // // // //     description: "",
// // // // //     category: "",
// // // // //     price: 0,
// // // // //     imageUrl: "",
// // // // //   });
// // // // //   const [isProductDialogOpen, setProductDialogOpen] = useState(false); // Track product dialog visibility

// // // // //   // Fetch categories and products from the backend
// // // // //   useEffect(() => {
// // // // //     loadData();
// // // // //   }, []);

// // // // //   const loadData = async () => {
// // // // //     const categoriesData = await fetchCategories();
// // // // //     setCategories(categoriesData);
// // // // //     const productsData = await fetchProducts();
// // // // //     setProducts(productsData);
// // // // //   };

// // // // //   const fetchCategories = async () => {
// // // // //     try {
// // // // //       const response = await axios.get("/api/categories");
// // // // //       console.log("Fetched categories:", response.data); // Log to check the structure
// // // // //       return response.data.categories || []; // Ensure it returns an array
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching categories:", error.message);
// // // // //       return []; // Return an empty array on error
// // // // //     }
// // // // //   };

// // // // //   const fetchProducts = async () => {
// // // // //     try {
// // // // //       const response = await axios.get("/api/products");
// // // // //       return response.data || []; // Ensure it returns an array
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching products:", error.message);
// // // // //       return []; // Return an empty array on error
// // // // //     }
// // // // //   };

// // // // //   // Add or Edit Category
// // // // //   const handleCategorySubmit = async (event) => {
// // // // //     event.preventDefault();
// // // // //     try {
// // // // //       if (newCategory._id) {
// // // // //         // Edit existing category
// // // // //         await axios.put(`/api/categories/${newCategory._id}`, newCategory);
// // // // //       } else {
// // // // //         // Add new category
// // // // //         await axios.post("/api/categories", newCategory);
// // // // //       }
// // // // //       setNewCategory({ _id: null, title: "", description: "", thumbnail: "" });
// // // // //       loadData(); // Reload categories
// // // // //     } catch (error) {
// // // // //       console.error("Error saving category:", error.response?.data || error.message);
// // // // //     }
// // // // //   };

// // // // //   // Add or Edit Product
// // // // // const handleProductSubmit = async (event) => {
// // // // //   event.preventDefault();
// // // // //   console.log("Form Submitted"); // Check if this logs on button click
// // // // //   try {
// // // // //     if (newProduct._id) {
// // // // //       // Edit existing product
// // // // //       await axios.put(`/api/products/${newProduct._id}`, newProduct);
// // // // //       console.log("Product Updated:", newProduct);
// // // // //     } else {
// // // // //       // Add new product
// // // // //       const response = await axios.post("/api/products", newProduct); // POST request to add product
// // // // //       console.log("Product Added:", response.data);
// // // // //     }
// // // // //     // Reset form data
// // // // //     setNewProduct({
// // // // //       _id: null,
// // // // //       title: "",
// // // // //       description: "",
// // // // //       category: "",
// // // // //       price: 0,
// // // // //       imageUrl: "",
// // // // //     });
// // // // //     setProductDialogOpen(false); // Close dialog after successful submission
// // // // //     loadData(); // Refresh product list to show the newly added or updated product
// // // // //   } catch (error) {
// // // // //     if (error.response) {
// // // // //       console.error("Server responded with error:", error.response.data);
// // // // //     } else if (error.request) {
// // // // //       console.error("No response received:", error.request);
// // // // //     } else {
// // // // //       console.error("Error setting up request:", error.message);
// // // // //     }
// // // // //   }
// // // // // };
  
// // // // //   // Delete Product
// // // // // const handleDeleteProduct = async (productId) => {
// // // // //   if (confirm("Are you sure you want to delete this product?")) {
// // // // //     try {
// // // // //       const response = await axios.delete(`/api/products/${productId}`);
// // // // //       if (response.status === 200) {
// // // // //         console.log("Product deleted successfully");
// // // // //         // Update products state to remove the deleted product
// // // // //         setProducts((prevProducts) =>
// // // // //           prevProducts.filter((product) => product._id !== productId)
// // // // //         );
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error deleting product: ", error.message);
// // // // //     }
// // // // //   }
// // // // // };


// // // // //   // Set category data in the form for editing
// // // // //   const handleEditCategory = (category) => {
// // // // //     setNewCategory(category); // Pre-populate the form with category data
// // // // //   };

// // // // //   // Set product data in the form for editing
// // // // //   const handleEditProduct = (product) => {
// // // // //     setNewProduct(product); // Pre-populate the form with product data
// // // // //     setProductDialogOpen(true); // Open the dialog for editing
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-4 bg-gray-100 min-h-screen">
// // // // //       <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
// // // // //         Product & Category Management
// // // // //       </h1>
// // // // //       <div>
// // // // //         {/* Add Category & Product Buttons with Dialogs */}
// // // // //         <div className="flex justify-between mb-4 mx-10">
// // // // //           <AddCategory />
// // // // //           {/* Product Dialog */}
// // // // //           <Dialog open={isProductDialogOpen} onOpenChange={setProductDialogOpen}>
// // // // //             <DialogTrigger asChild>
// // // // //               <Button className="bg-green-600 text-white">
// // // // //                 {newProduct._id ? "Edit Product" : "Add Product"}
// // // // //               </Button>
// // // // //             </DialogTrigger>
// // // // //             <DialogContent>
// // // // //               <DialogHeader>
// // // // //                 <DialogTitle>{newProduct._id ? "Edit Product" : "Add Product"}</DialogTitle>
// // // // //               </DialogHeader>
// // // // //               <Form onSubmit={handleProductSubmit} className="space-y-4">
// // // // //                 <Input
// // // // //                   placeholder="Title"
// // // // //                   value={newProduct.title}
// // // // //                   onChange={(e) =>
// // // // //                     setNewProduct({ ...newProduct, title: e.target.value })
// // // // //                   }
// // // // //                   required
// // // // //                 />
// // // // //                 <Input
// // // // //                   placeholder="Description"
// // // // //                   value={newProduct.description}
// // // // //                   onChange={(e) =>
// // // // //                     setNewProduct({ ...newProduct, description: e.target.value })
// // // // //                   }
// // // // //                   required
// // // // //                 />
// // // // //                 <select
// // // // //                   value={newProduct.category}
// // // // //                   onChange={(e) =>
// // // // //                     setNewProduct({ ...newProduct, category: e.target.value })
// // // // //                   }
// // // // //                   required
// // // // //                   className="w-full p-2 border rounded"
// // // // //                 >
// // // // //                   <option value="">Select Category</option>
// // // // //                   {categories.map((category) => (
// // // // //                     <option key={category._id} value={category._id}>
// // // // //                       {category.title}
// // // // //                     </option>
// // // // //                   ))}
// // // // //                 </select>
// // // // //                 <Input
// // // // //                   type="number"
// // // // //                   placeholder="Price"
// // // // //                   value={newProduct.price}
// // // // //                   onChange={(e) =>
// // // // //                     setNewProduct({ ...newProduct, price: e.target.value })
// // // // //                   }
// // // // //                   required
// // // // //                 />
// // // // //                 <Input
// // // // //                   placeholder="Image URL"
// // // // //                   value={newProduct.imageUrl}
// // // // //                   onChange={(e) =>
// // // // //                     setNewProduct({ ...newProduct, imageUrl: e.target.value })
// // // // //                   }
// // // // //                   required
// // // // //                 />
// // // // //                 <DialogFooter>
// // // // //                   <Button onClick={handleProductSubmit} type="submit" className="bg-green-600 text-white">
// // // // //                     {newProduct._id ? "Update Product" : "Add Product"}
// // // // //                   </Button>
// // // // //                 </DialogFooter>
// // // // //               </Form>
// // // // //             </DialogContent>
// // // // //           </Dialog>
// // // // //         </div>

// // // // //         {/* Category and Product Tables */}
// // // // //         <CategoryTable onEditCategory={handleEditCategory} />
// // // // //         <ProductTable
// // // // //           products={products}
// // // // //           onEditProduct={handleEditProduct}
// // // // //           onDeleteProduct={handleDeleteProduct}
// // // // //         />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }



// // // "use client";
// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   fetchProducts,
// // //   addProduct,
// // //   updateProduct,
// // //   deleteProduct,
// // //   // fetchCategories, // Import the fetchCategories function
// // // } from "@/actions/addProductActions";
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
// // // import ProductsTable from "@/components/ProductsTable/ProductsTable";
// // // import AddCategory from "./addCategory/page";
// // // import CategoryTable from "@/components/CategoryTable/CategoryTable";
// // // import { fetchCategories, deleteCategory } from "@/actions/addCategoryActions";

// // // const AddProductsPage = () => {
// // //   const [products, setProducts] = useState([]);
// // //   const [categories, setCategories] = useState([]); // State to hold categories
// // //   const [formData, setFormData] = useState({
// // //     title: "",
// // //     description: "",
// // //     category: "",
// // //     price: "",
// // //     imageUrl: "",
// // //   });
// // //   const [editingProduct, setEditingProduct] = useState(null);
// // //   const [isProductDialogOpen, setProductDialogOpen] = useState(false);

// // //   // Load products and categories on component mount
// // //   const loadCategories = async () => {
// // //     try {
// // //       const data = await fetchCategories();
// // //       setCategories(data.categories);
// // //     } catch (error) {
// // //       console.error("Error loading categories:", error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     loadCategories();
// // //   }, []);
  

// // //   // Handle form input changes
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   // Handle product submission (add or update)
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       if (editingProduct) {
// // //         // Update product
// // //         const updatedProduct = await updateProduct({
// // //           ...formData,
// // //           _id: editingProduct._id,
// // //         });
// // //         setProducts((prevProducts) =>
// // //           prevProducts.map((product) =>
// // //             product._id === updatedProduct._id ? updatedProduct : product
// // //           )
// // //         );
// // //         setEditingProduct(null);
// // //       } else {
// // //         // Add new product
// // //         const newProduct = await addProduct(formData);
// // //         setProducts((prevProducts) => [...prevProducts, newProduct]);
// // //       }
// // //       setFormData({
// // //         title: "",
// // //         description: "",
// // //         category: "",
// // //         price: "",
// // //         imageUrl: "",
// // //       });
// // //       setProductDialogOpen(false); // Close the dialog after submission
// // //     } catch (error) {
// // //       console.error("Error adding/updating product:", error);
// // //     }
// // //   };

// // //   // Handle product deletion
// // //   const handleDelete = async (productId) => {
// // //     try {
// // //       await deleteProduct(productId);
// // //       setProducts((prevProducts) =>
// // //         prevProducts.filter((product) => product._id !== productId)
// // //       );
// // //     } catch (error) {
// // //       console.error("Error deleting product:", error);
// // //     }
// // //   };

// // //   // Load product data into form for editing
// // //   const handleEdit = (product) => {
// // //     setEditingProduct(product);
// // //     setFormData({
// // //       title: product.title,
// // //       description: product.description,
// // //       category: product.category,
// // //       price: product.price,
// // //       imageUrl: product.imageUrl,
// // //     });
// // //     setProductDialogOpen(true); // Open dialog for editing
// // //   };

// // //   return (
// // //     <div>
// // //      <div className="flex justify-between items-center">

// // //       <AddCategory />
// // //       {/* Product Dialog */}
// // //       <Dialog open={isProductDialogOpen} onOpenChange={setProductDialogOpen}>
// // //         <DialogTrigger asChild>
// // //           <Button className="bg-green-600 text-white">
// // //             Add Product
// // //           </Button>
// // //         </DialogTrigger>
// // //         <DialogContent>
// // //           <DialogHeader>
// // //             <DialogTitle>
// // //               {editingProduct ? "Edit Product" : "Add Product"}
// // //             </DialogTitle>
// // //           </DialogHeader>
// // //           <Form onSubmit={handleSubmit} className="space-y-4">
// // //             <Input
// // //               placeholder="Title"
// // //               name="title"
// // //               value={formData.title}
// // //               onChange={handleChange}
// // //               required
// // //             />
// // //             <Input
// // //               placeholder="Description"
// // //               name="description"
// // //               value={formData.description}
// // //               onChange={handleChange}
// // //               required
// // //             />
// // //             <select
// // //               name="category"
// // //               value={formData.category}
// // //               onChange={handleChange}
// // //               required
// // //               className="w-full p-2 border rounded"
// // //             >
// // //               <option value="">Select Category</option>
// // //               {categories.map((category) => (
// // //                 <option key={category._id} value={category._id}>
// // //                   {category.title}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //             <Input
// // //               type="number"
// // //               placeholder="Price"
// // //               name="price"
// // //               value={formData.price}
// // //               onChange={handleChange}
// // //               required
// // //             />
// // //             <Input
// // //               placeholder="Image URL"
// // //               name="imageUrl"
// // //               value={formData.imageUrl}
// // //               onChange={handleChange}
// // //               required
// // //             />
// // //             <DialogFooter>
// // //               <Button onClick={handleSubmit} type="submit" className="bg-green-600 text-white">
// // //                 {editingProduct ? "Update Product" : "Add Product"}
// // //               </Button>
// // //             </DialogFooter>
// // //           </Form>
// // //         </DialogContent>
// // //       </Dialog>
// // //      </div>


// // //       <CategoryTable />

// // //       <ProductsTable 
// // //         products={products}
// // //         onEditProduct={handleEdit}
// // //         onDeleteProduct={handleDelete}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default AddProductsPage;




// // "use client";
// // import React, { useEffect, useState } from "react";
// // import {
// //   fetchProducts,
// //   addProduct,
// //   updateProduct,
// //   deleteProduct,
// // } from "@/actions/addProductActions";
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
// // import ProductsTable from "@/components/ProductsTable/ProductsTable";
// // import AddCategory from "./addCategory/page";
// // import CategoryTable from "@/components/CategoryTable/CategoryTable";
// // import { fetchCategories, deleteCategory } from "@/actions/addCategoryActions";

// // const AddProductsPage = () => {
// //   const [products, setProducts] = useState([]);
// //   const [categories, setCategories] = useState([]);
// //   const [formData, setFormData] = useState({
// //     title: "",
// //     description: "",
// //     category: "",
// //     price: "",
// //     imageUrl: "",
// //   });
// //   const [editingProduct, setEditingProduct] = useState(null);
// //   const [isProductDialogOpen, setProductDialogOpen] = useState(false);

// //   // Load categories on component mount
// //   const loadCategories = async () => {
// //     try {
// //       const data = await fetchCategories();
// //       console.log("Fetched categories:", data); // Log the fetched categories
// //       setCategories(data.categories);
// //     } catch (error) {
// //       console.error("Error loading categories:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     loadCategories();
// //   }, []);
  
// //   // Add this useEffect to monitor categories state
// //   useEffect(() => {
// //     console.log("Current categories state:", categories);
// //   }, [categories]);

// //   useEffect(() => {
// //     const loadProducts = async () => {
// //       try {
// //         const data = await fetchProducts(); // Your fetching logic
// //         setProducts(data.products); // Ensure this is correct
// //       } catch (error) {
// //         console.error("Error fetching products:", error);
// //       }
// //     };
  
// //      loadProducts();
// //     console.log("Current products state:", products); // Log the products state
// //   }, [products]);// The empty array ensures it runs only once when the component mounts
  

  
  
// //   // Handle form input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   // Handle product submission (add or update)
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (editingProduct) {
// //         // Update product
// //         const updatedProduct = await updateProduct({
// //           ...formData,
// //           _id: editingProduct._id,
// //         });
// //         setProducts((prevProducts) =>
// //           prevProducts.map((product) =>
// //             product._id === updatedProduct._id ? updatedProduct : product
// //           )
// //         );
// //         setEditingProduct(null);
// //       } else {
// //         // Add new product
// //         const newProduct = await addProduct(formData);
// //         setProducts((prevProducts) => [...prevProducts, newProduct]);
// //       }
// //       setFormData({
// //         title: "",
// //         description: "",
// //         category: "",
// //         price: "",
// //         imageUrl: "",
// //       });
// //       setProductDialogOpen(false); // Close the dialog after submission
// //     } catch (error) {
// //       console.error("Error adding/updating product:", error);
// //     }
// //   };

// //   // Handle product deletion
// //   const handleDelete = async (productId) => {
// //     try {
// //       await deleteProduct(productId);
// //       setProducts((prevProducts) =>
// //         prevProducts.filter((product) => product._id !== productId)
// //       );
// //     } catch (error) {
// //       console.error("Error deleting product:", error);
// //     }
// //   };

// //   // Load product data into form for editing
// //   const handleEdit = (product) => {
// //     setEditingProduct(product);
// //     setFormData({
// //       title: product.title,
// //       description: product.description,
// //       category: product.category,
// //       price: product.price,
// //       imageUrl: product.imageUrl,
// //     });
// //     setProductDialogOpen(true); // Open dialog for editing
// //   };

// //   return (
// //     <div>
// //       <div className="flex justify-between items-center">
// //         <AddCategory />
// //         {/* Product Dialog */}
// //         <Dialog open={isProductDialogOpen} onOpenChange={setProductDialogOpen}>
// //           <DialogTrigger asChild>
// //             <Button className="bg-green-600 text-white">
// //               Add Product
// //             </Button>
// //           </DialogTrigger>
// //           <DialogContent>
// //             <DialogHeader>
// //               <DialogTitle>
// //                 {editingProduct ? "Edit Product" : "Add Product"}
// //               </DialogTitle>
// //             </DialogHeader>
// //             <Form onSubmit={handleSubmit} className="space-y-4">
// //               <Input
// //                 placeholder="Title"
// //                 name="title"
// //                 value={formData.title}
// //                 onChange={handleChange}
// //                 required
// //               />
// //               <Input
// //                 placeholder="Description"
// //                 name="description"
// //                 value={formData.description}
// //                 onChange={handleChange}
// //                 required
// //               />
// //               <select
// //                 name="category"
// //                 value={formData.category}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full p-2 border rounded"
// //               >
// //                 <option value="">Select Category</option>
// //                 {categories.length > 0 ? (
// //                   categories.map((category) => (
// //                     <option key={category._id} value={category._id}>
// //                       {category.title}
// //                     </option>
// //                   ))
// //                 ) : (
// //                   <option value="" disabled>No available categories</option>
// //                 )}
// //               </select>
// //               <Input
// //                 type="number"
// //                 placeholder="Price"
// //                 name="price"
// //                 value={formData.price}
// //                 onChange={handleChange}
// //                 required
// //               />
// //               <Input
// //                 placeholder="Image URL"
// //                 name="imageUrl"
// //                 value={formData.imageUrl}
// //                 onChange={handleChange}
// //                 required
// //               />
// //               <DialogFooter>
// //                 <Button onClick={handleSubmit} type="submit" className="bg-green-600 text-white">
// //                   {editingProduct ? "Update Product" : "Add Product"}
// //                 </Button>
// //               </DialogFooter>
// //             </Form>
// //           </DialogContent>
// //         </Dialog>
// //       </div>

// //       <CategoryTable />

// //       <ProductsTable 
// //         products={products}
// //         onEditProduct={handleEdit}
// //         onDeleteProduct={handleDelete}
// //       />
// //     </div>
// //   );
// // };

// // export default AddProductsPage;











// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   fetchProducts,
//   addProduct,
//   updateProduct,
//   deleteProduct,
// } from "@/actions/addProductActions";
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
// import ProductsTable from "@/components/ProductsTable/ProductsTable";
// import AddCategory from "./addCategory/page";
// import CategoryTable from "@/components/CategoryTable/CategoryTable";
// import { fetchCategories, deleteCategory } from "@/actions/addCategoryActions";

// const AddProductsPage = () => {
//   const [products, setProducts] = useState([]); // Initialized as an empty array
//   const [categories, setCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category: "",
//     price: "",
//     imageUrl: "",
//   });
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [isProductDialogOpen, setProductDialogOpen] = useState(false);

//   const loadCategories = async () => {
//     try {
//       const data = await fetchCategories();
//       console.log("Fetched categories:", data);
//       setCategories(data.categories);
//     } catch (error) {
//       console.error("Error loading categories:", error);
//     }
//   };

//   useEffect(() => {
//     loadCategories();
//   }, []);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data.products || []); // Ensure data.products is always an array
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     loadProducts();
//   }, []); // Only fetch products on initial mount

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         const updatedProduct = await updateProduct({
//           ...formData,
//           _id: editingProduct._id,
//         });
//         setProducts((prevProducts) =>
//           (prevProducts || []).map((product) =>
//             product._id === updatedProduct._id ? updatedProduct : product
//           )
//         );
//         setEditingProduct(null);
//       } else {
//         const newProduct = await addProduct(formData);
//         setProducts((prevProducts) => [...(prevProducts || []), newProduct]);
//       }
//       setFormData({
//         title: "",
//         description: "",
//         category: "",
//         price: "",
//         imageUrl: "",
//       });
//       setProductDialogOpen(false);
//     } catch (error) {
//       console.error("Error adding/updating product:", error);
//     }
//   };

//   const handleDelete = async (productId) => {
//     try {
//       await deleteProduct(productId);
//       setProducts((prevProducts) =>
//         (prevProducts || []).filter((product) => product._id !== productId)
//       );
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//     setFormData({
//       title: product.title,
//       description: product.description,
//       category: product.category,
//       price: product.price,
//       imageUrl: product.imageUrl,
//     });
//     setProductDialogOpen(true);
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center">
//         <AddCategory />
//         <Dialog open={isProductDialogOpen} onOpenChange={setProductDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="bg-green-600 text-white">Add Product</Button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>{editingProduct ? "Edit Product" : "Add Product"}</DialogTitle>
//             </DialogHeader>
//             <Form onSubmit={handleSubmit} className="space-y-4">
//               <Input
//                 placeholder="Title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//               />
//               <Input
//                 placeholder="Description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//               />
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="">Select Category</option>
//                 {categories.length > 0 ? (
//                   categories.map((category) => (
//                     <option key={category._id} value={category._id}>
//                       {category.title}
//                     </option>
//                   ))
//                 ) : (
//                   <option value="" disabled>No available categories</option>
//                 )}
//               </select>
//               <Input
//                 type="number"
//                 placeholder="Price"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 required
//               />
//               <Input
//                 placeholder="Image URL"
//                 name="imageUrl"
//                 value={formData.imageUrl}
//                 onChange={handleChange}
//                 required
//               />
//               <DialogFooter>
//                 <Button onClick={handleSubmit} type="submit" className="bg-green-600 text-white">
//                   {editingProduct ? "Update Product" : "Add Product"}
//                 </Button>
//               </DialogFooter>
//             </Form>
//           </DialogContent>
//         </Dialog>
//       </div>
//       <CategoryTable />
//       <ProductsTable
//         products={products}
//         onEditProduct={handleEdit}
//         onDeleteProduct={handleDelete}
//       />
//     </div>
//   );
// };

// export default AddProductsPage;






"use client";
import React, { useEffect, useState } from "react";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "@/actions/addProductActions";
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
import ProductsTable from "@/components/ProductsTable/ProductsTable";
import AddCategory from "./addCategory/page";
import CategoryTable from "@/components/CategoryTable/CategoryTable";
import { fetchCategories, addCategory, deleteCategory } from "@/actions/addCategoryActions";

const AddProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    imageUrl: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [isProductDialogOpen, setProductDialogOpen] = useState(false);

  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data.categories);
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        const updatedProduct = await updateProduct({
          ...formData,
          _id: editingProduct._id,
        });
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === updatedProduct._id ? updatedProduct : product
          )
        );
        setEditingProduct(null);
      } else {
        const newProduct = await addProduct(formData);
        setProducts((prevProducts) => [...prevProducts, newProduct]);
      }
      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        imageUrl: "",
      });
      setProductDialogOpen(false);
    } catch (error) {
      console.error("Error adding/updating product:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    setProductDialogOpen(true);
  };

  // Adding a category without refreshing
  const handleAddCategory = async (newCategoryData) => {
    try {
      const newCategory = await addCategory(newCategoryData);
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  // Deleting a category without refreshing
  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category._id !== categoryId)
      );
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <AddCategory onAddCategory={handleAddCategory} />
        <Dialog open={isProductDialogOpen} onOpenChange={setProductDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 text-white">Add Product</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingProduct ? "Edit Product" : "Add Product"}</DialogTitle>
            </DialogHeader>
            <Form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
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
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Image URL"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
              <DialogFooter>
                <Button type="submit" className="bg-green-600 text-white">
                  {editingProduct ? "Update Product" : "Add Product"}
                </Button>
              </DialogFooter>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
      <CategoryTable categories={categories} onDeleteCategory={handleDeleteCategory} />
      <ProductsTable
        products={products}
        onEditProduct={handleEdit}
        onDeleteProduct={handleDelete}
      />
    </div>
  );
};

export default AddProductsPage;
