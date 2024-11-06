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
import { fetchCategories, deleteCategory } from "@/actions/addCategoryActions";
import TableSkeleton from "@/components/TableSkeleton/TableSkeleton";

const AddProductsPage = () => {
  const [products, setProducts] = useState([]); // Initialized as an empty array
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
  const [loading, setLoading] = useState(false); // Loader state

  const loadCategories = async () => {
    setLoading(true); // Set loading true when fetching data
    try {
      const data = await fetchCategories();
      console.log("Fetched categories:", data);
      setCategories(data.categories);
    } catch (error) {
      console.error("Error loading categories:", error);
    } finally {
      setLoading(false); // Set loading false when done
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true); // Set loading true when fetching data
      try {
        const data = await fetchProducts();
        setProducts(data.products || []); // Ensure data.products is always an array
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading false when done
      }
    };

    loadProducts();
  }, []); // Only fetch products on initial mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading true when submitting form
    try {
      if (editingProduct) {
        const updatedProduct = await updateProduct({
          ...formData,
          _id: editingProduct._id,
        });
        // Optimistic UI update: Immediately update UI before request completes
        setProducts((prevProducts) =>
          (prevProducts || []).map((product) =>
            product._id === updatedProduct._id ? updatedProduct : product
          )
        );
        setEditingProduct(null);
      } else {
        const newProduct = await addProduct(formData);
        // Optimistic UI update: Immediately update UI before request completes
        setProducts((prevProducts) => [...(prevProducts || []), newProduct]);
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
    } finally {
      setLoading(false); // Set loading false when done
    }
  };

  const handleDelete = async (productId) => {
    setLoading(true); // Set loading true when deleting product
    try {
      await deleteProduct(productId);
      // Optimistic UI update: Immediately update UI before request completes
      setProducts((prevProducts) =>
        (prevProducts || []).filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setLoading(false); // Set loading false when done
    }
  };

  // const handleEdit = (product) => {
  //   setEditingProduct(product);
  //   setFormData({
  //     title: product.title,
  //     description: product.description,
  //     category: product?.category?.title,
  //     price: product.price,
  //     imageUrl: product.imageUrl,
  //   });
  //   setProductDialogOpen(true);
  // };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      category: product?.category?._id, // Change here: Set the category ID, not the title
      price: product.price,
      imageUrl: product.imageUrl,
    });
    setProductDialogOpen(true);
  };
  

  return (
    <div>
      <div className="flex justify-between items-center my-20">
        <AddCategory />
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
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.title}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>No available categories</option>
                )}
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
                <Button onClick={handleSubmit} type="submit" className="bg-green-600 text-white">
                  {editingProduct ? "Update Product" : "Add Product"}
                </Button>
              </DialogFooter>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Loader component is displayed when loading is true */}
      {loading ? (
        <TableSkeleton /> // Show loader when the loading state is true
      ) : (
        <>
          <CategoryTable />
          <ProductsTable
            products={products}
            onEditProduct={handleEdit}
            onDeleteProduct={handleDelete}
          />
        </>
      )}
    </div>
  );
};

export default AddProductsPage;
