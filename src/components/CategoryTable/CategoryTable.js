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
import axios from "axios";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function CategoryTable() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };

  const handleCategoryToggle = async (id, isActive) => {
    try {
      await axios.put(`/api/categories/${id}`, { isActive });
      fetchCategories();
    } catch (error) {
      console.error("Error toggling category:", error.response?.data || error.message);
    }
  };

  const handleEditClick = (category) => {
    setSelectedCategory(category);
    setIsEditDialogOpen(true);
  };

  const handleCategoryUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/categories/${selectedCategory._id}`, selectedCategory);
      fetchCategories();
      setIsEditDialogOpen(false);
    } catch (error) {
      console.error("Error updating category:", error.response?.data || error.message);
    }
  };

  const handleDeleteClick = async (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`/api/categories/${id}`);
        fetchCategories(); // Refresh the category list
      } catch (error) {
        console.error("Error deleting category:", error.response?.data || error.message);
      }
    }
  };

  return (
    <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">Categories</h1>
      </div>

      <Table>
        <TableCaption>A list of your Categories.</TableCaption>
        <TableHeader className={"bg-slate-300 text-white"}>
          <TableRow>
            <TableHead>Category Name</TableHead>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category._id}>
              <TableCell className="font-medium">{category.title}</TableCell>
              <TableCell className="text-right">
                <img
                  src={category.thumbnail}
                  alt={category.title}
                  className="w-12 h-12 rounded-full"
                />
              </TableCell>
              <TableCell className="font-normal">
                {category.description}
              </TableCell>
              <TableCell className="font-medium">
                {category.isActive ? "Active" : "Inactive"}
                <Switch
                  checked={category.isActive}
                  onChange={() => handleCategoryToggle(category._id, !category.isActive)}
                  className="bg-gray-200"
                />
              </TableCell>
              <TableCell>
                <div style={{ display: "flex", gap: "20px" }}>
                  <Button className="bg-blue-500 text-white" onClick={() => handleEditClick(category)}>
                    Edit
                  </Button>
                  <Button className="bg-red-500 text-white" onClick={() => handleDeleteClick(category._id)}>
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal for Editing Category */}
      {selectedCategory && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Category</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCategoryUpdate} className="space-y-4">
              <Input
                placeholder="Title"
                value={selectedCategory.title}
                onChange={(e) =>
                  setSelectedCategory({ ...selectedCategory, title: e.target.value })
                }
                required
              />
              <Input
                placeholder="Description"
                value={selectedCategory.description}
                onChange={(e) =>
                  setSelectedCategory({ ...selectedCategory, description: e.target.value })
                }
                required
              />
              <Input
                placeholder="Thumbnail URL"
                value={selectedCategory.thumbnail}
                onChange={(e) =>
                  setSelectedCategory({ ...selectedCategory, thumbnail: e.target.value })
                }
                required
              />
              <DialogFooter>
                <Button type="submit" className="bg-blue-600 text-white">
                  Update Category
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
