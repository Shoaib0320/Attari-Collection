// import { connectDB } from "@/lib/db/connectDB";
// import { CategoryModal } from "@/lib/models/Category";

// // export async function PUT(request, { params }) {
// //   try {
// //     await connectDB();
// //     const categoryId = params.id;
// //     const updatedData = await request.json();

// //     const updatedCategory = await CategoryModal.findByIdAndUpdate(categoryId, updatedData, { new: true });
// //     if (!updatedCategory) {
// //       return Response(JSON.stringify({ msg: "Category not found" }), { status: 404 });
// //     }

// //     return Response(
// //       JSON.stringify({ msg: "Category updated successfully", category: updatedCategory }),
// //       { status: 200 }
// //     );
// //   } catch (error) {
// //     return Response(
// //       JSON.stringify({ msg: "Error updating category", error: error.message }),
// //       { status: 500 }
// //     );
// //   }
// // }


// // Update an existing category
// export async function PUT(request, res) {
//   try {
//     await connectDB();
//     const obj = await request.json();
//     const { _id, ...updateData } = obj;

//     const updatedCategory = await CategoryModal.findByIdAndUpdate(_id, updateData, {
//       new: true,
//     });

//     if (!updatedCategory) {
//       return res.status(404).json({
//         msg: "Category not found",
//       });
//     }

//     return res.status(200).json({
//       msg: "Category updated successfully",
//       category: updatedCategory,
//     });
//   } catch (error) {
//     console.error("Error updating category:", error);
//     return res.status(500).json({
//       msg: "Error updating category",
//     });
//   }
// }


// export async function DELETE(request, { params }) {
//   try {
//     await connectDB();
//     const categoryId = params.id;

//     const deletedCategory = await CategoryModal.findByIdAndDelete(categoryId);
//     if (!deletedCategory) {
//       return new Response(JSON.stringify({ msg: "Category not found" }), { status: 404 });
//     }

//     return new Response(
//       JSON.stringify({ msg: "Category deleted successfully" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ msg: "Error deleting category", error: error.message }),
//       { status: 500 }
//     );
//   }
// }


import { connectDB } from "@/lib/db/connectDB";
import { CategoryModal } from "@/lib/models/Category";

// Update an existing category
export async function PUT(request, { params }) {
  try {
    // Connect to the database
    await connectDB();

    // Get category ID and updated data from the request body
    const categoryId = params.id;
    const updatedData = await request.json();

    // Update the category in the database
    const updatedCategory = await CategoryModal.findByIdAndUpdate(categoryId, updatedData, { new: true });

    // Check if category was found and updated
    if (!updatedCategory) {
      return new Response(
        JSON.stringify({ msg: "Category not found" }),
        { status: 404 }
      );
    }

    // Return success response with updated category
    return new Response(
      JSON.stringify({ msg: "Category updated successfully", category: updatedCategory }),
      { status: 200 }
    );
  } catch (error) {
    // Handle any errors
    console.error("Error updating category:", error);
    return new Response(
      JSON.stringify({ msg: "Error updating category", error: error.message }),
      { status: 500 }
    );
  }
}

// Delete an existing category
export async function DELETE(request, { params }) {
  try {
    // Connect to the database
    await connectDB();

    // Get the category ID from the request params
    const categoryId = params.id;

    // Delete the category
    const deletedCategory = await CategoryModal.findByIdAndDelete(categoryId);

    // Check if category was found and deleted
    if (!deletedCategory) {
      return new Response(
        JSON.stringify({ msg: "Category not found" }),
        { status: 404 }
      );
    }

    // Return success response for deletion
    return new Response(
      JSON.stringify({ msg: "Category deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    // Handle any errors
    console.error("Error deleting category:", error);
    return new Response(
      JSON.stringify({ msg: "Error deleting category", error: error.message }),
      { status: 500 }
    );
  }
}
