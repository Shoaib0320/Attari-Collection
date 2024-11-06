// admin/addCategory/page.js

"use client";

import { useState, useEffect } from "react";
import { addCategory, updateCategory } from "@/actions/addCategoryActions";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddCategory = ({ categoryToEdit }) => {
  const [newCategory, setNewCategory] = useState({
    _id: null,
    title: "",
    description: "",
    thumbnail: "",
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (categoryToEdit) {
      setNewCategory(categoryToEdit);
      setOpen(true);
    }
  }, [categoryToEdit]);

  // Handle input changes for each input field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  // Handle form submission for adding or editing a category
  const handleCategorySubmit = async (event) => {
    event.preventDefault();
    try {
      if (newCategory._id) {
        await updateCategory(newCategory);
      } else {
        await addCategory(newCategory);
      }
      // Reset the form
      setNewCategory({ _id: null, title: "", description: "", thumbnail: "" });
      // Close the dialog
      setOpen(false);
    } catch (error) {
      console.error("Error saving category:", error.message);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-indigo-600 text-white">
            {newCategory._id ? "Edit Category" : "Add Category"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{newCategory._id ? "Edit Category" : "Add Category"}</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleCategorySubmit}>
            <Input
              placeholder="Title"
              name="title"
              value={newCategory.title}
              onChange={handleInputChange}
              required
            />
            <Input
              placeholder="Description"
              name="description"
              value={newCategory.description}
              onChange={handleInputChange}
              required
            />
            <Input
              placeholder="Thumbnail URL"
              name="thumbnail"
              value={newCategory.thumbnail}
              onChange={handleInputChange}
              required
            />
            <DialogFooter>
              <Button type="submit" className="bg-indigo-600 text-white">
                {newCategory._id ? "Update Category" : "Add Category"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddCategory;


