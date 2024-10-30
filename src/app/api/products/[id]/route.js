// api/products/[id]/route.js
import { connectDB } from '@/lib/db/connectDB';
import AddProduct from '@/lib/models/AddProduct';
import mongoose from 'mongoose';
export async function PUT(req, { params }) {
    await connectDB();
    const { id } = params;
  
    try {
      const updatedData = await req.json();
      console.log("Attempting update with data:", updatedData);
  
      // Basic operation: Just finding the product for now
      const product = await AddProduct.findById(id);
      if (!product) {
        console.log("Product not found with ID:", id);
        return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404 });
      }
  
      // Returning a successful dummy response for test purposes
      return new Response(JSON.stringify({ message: 'Update route reached successfully' }), { status: 200 });
    } catch (error) {
      console.error("Error during PUT request:", error);
      return new Response(JSON.stringify({ error: 'Error in PUT route' }), { status: 500 });
    }
  }
  

// Handle DELETE requests for deleting a product
export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: 'Invalid Product ID' }), { status: 400 });
    }

    const deletedProduct = await AddProduct.findByIdAndDelete(id);

    if (!deletedProduct) {
      return new Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'Product deleted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return new Response(JSON.stringify({ message: 'Error deleting product' }), { status: 500 });
  }
}
