// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const AddCategory = () => {
//   const [newCategory, setNewCategory] = useState({
//     _id: null,
//     title: "",
//     description: "",
//     thumbnail: "",
//   });
//   const [categories, setCategories] = useState([]);
//   const [open, setOpen] = useState(false);

//   // Fetch categories from the API
//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get("/api/categories");
//       setCategories(response.data);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   // Handle input changes for each input field
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewCategory({ ...newCategory, [name]: value });
//   };

//   // Handle form submission for adding or editing a category
//   const handleCategorySubmit = async (event) => {
//     event.preventDefault();  // Prevent the form from refreshing the page
//     console.log("Submitting category:", newCategory);

//     try {
//       if (newCategory._id) {
//         // If the category has an ID, it's an edit
//         await axios.put(`/api/categories/${newCategory._id}`, newCategory);
//       } else {
//         // Otherwise, it's a new category
//         await axios.post("/api/categories", newCategory);
//       }
//       // Reset the form
//       setNewCategory({ _id: null, title: "", description: "", thumbnail: "" });
//       // Re-fetch the categories after the submission
//       fetchCategories();
//       // Close the dialog
//       setOpen(false);
//     } catch (error) {
//       console.error("Error saving category:", error.response?.data || error.message);
//     }
//   };

//   return (
//     <div>
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <Button className="bg-indigo-600 text-white">
//             {newCategory._id ? "Edit Category" : "Add Category"}
//           </Button>
//         </DialogTrigger>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>{newCategory._id ? "Edit Category" : "Add Category"}</DialogTitle>
//           </DialogHeader>
//           {/* Adding onSubmit handler to the form */}
//           <form className="space-y-4" onSubmit={handleCategorySubmit}>
//             <Input
//               placeholder="Title"
//               name="title"   // Add name attribute for proper handling
//               value={newCategory.title}
//               onChange={handleInputChange}
//               required
//             />
//             <Input
//               placeholder="Description"
//               name="description"  // Add name attribute
//               value={newCategory.description}
//               onChange={handleInputChange}
//               required
//             />
//             <Input
//               placeholder="Thumbnail URL"
//               name="thumbnail"   // Add name attribute
//               value={newCategory.thumbnail}
//               onChange={handleInputChange}
//               required
//             />
//             <DialogFooter>
//               <Button type="submit" className="bg-indigo-600 text-white">
//                 {newCategory._id ? "Update Category" : "Add Category"}
//               </Button>
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default AddCategory;



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
