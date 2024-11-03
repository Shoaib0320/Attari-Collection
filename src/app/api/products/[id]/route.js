import { connectDB } from '@/lib/db/connectDB';
import AddProduct from '@/lib/models/AddProduct';
import mongoose from 'mongoose';


// export async function GET(req, { params }) {
//   await connectDB();
//   const { id } = params;

//   try {
//       // Validate the ID
//       if (!mongoose.Types.ObjectId.isValid(id)) {
//           return new Response(JSON.stringify({ message: 'Invalid Product ID' }), { status: 400 });
//       }

//       const product = await AddProduct.findById(id).populate('category');

//       if (!product) {
//           return new Response(JSON.stringify({ message: "Product not found" }), { status: 404 });
//       }

//       return new Response(JSON.stringify(product), { status: 200 });
//   } catch (error) {
//       console.error("Error fetching product:", error);
//       return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
//   }
// }


export async function PUT(req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    // Parse the updated data from the request
    const updatedData = await req.json();
    console.log("Attempting update with data:", updatedData);

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: 'Invalid product ID' }), { status: 400 });
    }

    // Find and update the product
    const product = await AddProduct.findByIdAndUpdate(id, updatedData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation is applied to updated data
    });

    if (!product) {
      console.log("Product not found with ID:", id);
      return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404 });
    }

    console.log("Product updated successfully:", product);
    return new Response(JSON.stringify({ message: 'Product updated successfully', product }), { status: 200 });
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
