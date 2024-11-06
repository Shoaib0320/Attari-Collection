// // // api/categories/route.js

// // import { connectDB } from "@/lib/db/connectDB";
// // import { CategoryModal } from "@/lib/models/Category";

// // export async function GET(request) {
// //   await connectDB();
// //   const categories = await CategoryModal.find();
// //   return Response.json(
// //     {
// //       msg: "Categories Fetched Successfully",
// //       categories,
// //     },
// //     { status: 200 }
// //   );
// // }

// // export async function POST(request) {
// //   await connectDB();
// //   const obj = await request.json();
// //   let newCategory = new CategoryModal(obj);
// //   await newCategory.save();

// //   return Response.json(
// //     {
// //       msg: "Category Added Successfully ",
// //       category: newCategory,
// //     },
// //     { status: 201 }
// //   );





// import { connectDB } from "@/lib/db/connectDB";
// import { CategoryModal } from "@/lib/models/Category";

// export async function GET(request) {
//   try {
//     await connectDB();
//     const categories = await CategoryModal.find();
//     return Response.json(
//       {
//         msg: "Categories Fetched Successfully",
//         categories,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return Response.json(
//       {
//         msg: "Error fetching categories",
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request) {
//   try {
//     await connectDB();
//     const obj = await request.json();
//     const newCategory = new CategoryModal(obj);
//     await newCategory.save();

//     return Response.json(
//       {
//         msg: "Category Added Successfully",
//         category: newCategory,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error adding category:", error);
//     return Response.json(
//       {
//         msg: "Error adding category",
//       },
//       { status: 500 }
//     );
//   }
// }


// //   // if (req.method === 'POST') {
// //   //   try {
// //   //     const { title, description, thumbnail } = req.body;
// //   //     const newCategory = new Category({ title, description, thumbnail });
// //   //     await newCategory.save();
// //   //     return res.status(201).json({ message: 'Category added successfully' });
// //   //   } catch (error) {
// //   //     console.error(error);
// //   //     return res.status(500).json({ message: 'Error adding category' });
// //   //   }
// //   // } else {
// //   //   return res.status(405).json({ message: 'Method not allowed' });
// //   // }

  
// // }

// // // export async function PUT(request, { params }) {

// // //   try {
// // //     await connectDB();

// // //     const { id } = params; // Extract the category ID from the URL
// // //     console.log("Category ID:", params.id); // Log the ID to verify it's correct
// // //     const updatedData = await request.json();

// // //     // Find the category by ID and update it
// // //     const updatedCategory = await CategoryModal.findByIdAndUpdate(id, updatedData, { new: true });

// // //     if (!updatedCategory) {
// // //       return new Response(JSON.stringify({ msg: "Category not found" }), { status: 404 });
// // //     }

// // //     return new Response(JSON.stringify({ msg: "Category updated successfully", category: updatedCategory }), { status: 200 });
// // //   } catch (error) {
// // //     return new Response(JSON.stringify({ msg: "Error updating category", error: error.message }), { status: 500 });
// // //   }
// // // }

// // // export async function DELETE(request) {}




// api/categories/route.js

import { connectDB } from "@/lib/db/connectDB";
import { CategoryModal } from "@/lib/models/Category";

export async function GET(request) {
  try {
    await connectDB();
    const categories = await CategoryModal.find();
    return Response.json(
      {
        msg: "Categories fetched successfully",
        categories,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return Response.json(
      {
        msg: "Error fetching categories",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const obj = await request.json();
    const newCategory = new CategoryModal(obj);
    await newCategory.save();

    return Response.json(
      {
        msg: "Category added successfully",
        category: newCategory,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding category:", error);
    return Response.json(
      {
        msg: "Error adding category",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    const obj = await request.json();
    const { _id, ...updateData } = obj;

    const updatedCategory = await CategoryModal.findByIdAndUpdate(_id, updateData, {
      new: true,
    });

    if (!updatedCategory) {
      return Response.json(
        {
          msg: "Category not found",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        msg: "Category updated successfully",
        category: updatedCategory,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating category:", error);
    return Response.json(
      {
        msg: "Error updating category",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await connectDB();
    const { _id } = await request.json();

    const deletedCategory = await CategoryModal.findByIdAndDelete(_id);
    if (!deletedCategory) {
      return Response.json(
        {
          msg: "Category not found",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        msg: "Category deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting category:", error);
    return Response.json(
      {
        msg: "Error deleting category",
      },
      { status: 500 }
    );
  }
}
