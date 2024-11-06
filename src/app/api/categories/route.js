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