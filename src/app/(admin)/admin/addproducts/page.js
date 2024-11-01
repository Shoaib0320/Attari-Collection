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
  console.log("Form Submitted"); // Check if this logs on button click
  try {
    if (newProduct._id) {
      // Edit existing product
      await axios.put(`/api/products/${newProduct._id}`, newProduct);
      console.log("Product Updated:", newProduct);
    } else {
      // Add new product
      const response = await axios.post("/api/products", newProduct); // POST request to add product
      console.log("Product Added:", response.data);
    }
    // Reset form data
    setNewProduct({
      _id: null,
      title: "",
      description: "",
      category: "",
      price: 0,
      imageUrl: "",
    });
    setProductDialogOpen(false); // Close dialog after successful submission
    loadData(); // Refresh product list to show the newly added or updated product
  } catch (error) {
    if (error.response) {
      console.error("Server responded with error:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
  }
};
  
  // Delete Product
const handleDeleteProduct = async (productId) => {
  if (confirm("Are you sure you want to delete this product?")) {
    try {
      const response = await axios.delete(`/api/products/${productId}`);
      if (response.status === 200) {
        console.log("Product deleted successfully");
        // Update products state to remove the deleted product
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
      }
    } catch (error) {
      console.error("Error deleting product: ", error.message);
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
                  <Button onClick={handleProductSubmit} type="submit" className="bg-green-600 text-white">
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