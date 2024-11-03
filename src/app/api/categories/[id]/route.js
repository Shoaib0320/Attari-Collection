import { connectDB } from "@/lib/db/connectDB";
import { CategoryModal } from "@/lib/models/Category";

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const categoryId = params.id;
    const updatedData = await request.json();

    const updatedCategory = await CategoryModal.findByIdAndUpdate(categoryId, updatedData, { new: true });
    if (!updatedCategory) {
      return Response(JSON.stringify({ msg: "Category not found" }), { status: 404 });
    }

    return Response(
      JSON.stringify({ msg: "Category updated successfully", category: updatedCategory }),
      { status: 200 }
    );
  } catch (error) {
    return Response(
      JSON.stringify({ msg: "Error updating category", error: error.message }),
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const categoryId = params.id;

    const deletedCategory = await CategoryModal.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return new Response(JSON.stringify({ msg: "Category not found" }), { status: 404 });
    }

    return new Response(
      JSON.stringify({ msg: "Category deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ msg: "Error deleting category", error: error.message }),
      { status: 500 }
    );
  }
}
