// // // import connectDB from "../../../lib/db/connectDB"
// // // import AddProduct from '../../../lib/models/AddProduct';

// // // // Connect to database and handle GET requests
// // // export async function GET(req) {
// // //   await connectDB();
// // //   const AddProduct = await Product.find().populate('category');
// // //   return new Response(JSON.stringify(products), { status: 200 });
// // // }

// // // // Handle POST requests
// // // export async function POST(req) {
// // //   await connectDB();
// // //   const { title, description, category, price, imageUrl } = await req.json();
  
// // //   const AddProduct = new Product({ title, description, category, price, imageUrl });
// // //   await AddProduct.save();
  
// // //   return new Response(JSON.stringify(AddProduct), { status: 201 });
// // // }










// // import { connectDB } from '@/lib/db/connectDB';
// // import { AddProduct } from '@/lib/models/AddProduct';

// // // Connect to database and handle GET requests
// // export async function GET(req) {
// //   await connectDB();
// //   const products = await AddProduct.find().populate('category'); // Using AddProduct model
// //   return new Response(JSON.stringify(products), { status: 200 });
// // }

// // // Handle POST requests
// // export async function POST(req) {
// //   await connectDB();
// //   const { title, description, category, price, imageUrl } = await req.json();
  
// //   const newProduct = new AddProduct({ title, description, category, price, imageUrl });
// //   await newProduct.save();
  
// //   return new Response(JSON.stringify(newProduct), { status: 201 });
// // }








// // api/products/route.js

// import { connectDB } from '@/lib/db/connectDB';
// import AddProduct from '@/lib/models/AddProduct';

// export async function GET(req) {
//   await connectDB();
//   const products = await AddProduct.find().populate('category');
//   // console.log("products=>", products);
//   return new Response(JSON.stringify(products), { status: 200 });
// }

// export async function POST(req) {
//   await connectDB();
//   const { title, description, category, price, imageUrl } = await req.json();

//   const newProduct = new AddProduct({ title, description, category, price, imageUrl });
//   await newProduct.save();

//   return new Response(JSON.stringify(newProduct), { status: 201 });
// }

// api/products/route.js
import { connectDB } from '@/lib/db/connectDB';
import AddProduct from '@/lib/models/AddProduct';

// Handle GET request: Fetch all products
export async function GET(req) {
  await connectDB();
  const products = await AddProduct.find().populate('category');
  // console.log("products=>", products);
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
  await connectDB();
  const { title, description, category, price, imageUrl } = await req.json();

  const newProduct = new AddProduct({ title, description, category, price, imageUrl });
  await newProduct.save();

  return Response.json(
    {
      msg: "Product Added Successfully",
      product: newProduct,
    },
    { status: 201 }
  );
}

// Handle PUT request: Update an existing product by ID
// export async function PUT(req) {
//   await connectDB();
//   const { id, title, description, category, price, imageUrl } = await req.json(); // Get product ID from request body or query

//   try {
//     // Find the product by ID and update it
//     const updatedProduct = await AddProduct.findByIdAndUpdate(
//       id, 
//       { title, description, category, price, imageUrl },
//       { new: true } // Returns the updated product
//     );

//     if (!updatedProduct) {
//       return new Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
//     }

//     return new Response(JSON.stringify(updatedProduct), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: 'Error updating product' }), { status: 500 });
//   }
// }

// // Handle PUT request: Update an existing product by ID
// export async function PUT(req) {
//   await connectDB();
  
//   try {
//     const { id, title, description, category, price, imageUrl } = await req.json(); // Get product data from request body
    
//     // Log incoming data to check if it's correct
//     console.log("Product ID: ", id);
//     console.log("Update Data: ", { title, description, category, price, imageUrl });

//     // Check if the product exists
//     const productExists = await AddProduct.findById(id);
//     if (!productExists) {
//       return new Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
//     }

//     // Update the product
//     const updatedProduct = await AddProduct.findByIdAndUpdate(
//       id, 
//       { title, description, category, price, imageUrl },
//       { new: true } // Return the updated product
//     );

//     return new Response(JSON.stringify(updatedProduct), { status: 200 });

//   } catch (error) {
//     console.error("Error updating product: ", error);
//     return new Response(JSON.stringify({ message: 'Error updating product' }), { status: 500 });
//   }
// }


// export async function DELETE(req) {
//   await connectDB();
  
//   const { id } = req.params; // Extract the product ID from request params

//   try {
//     // Check if the ID is a valid ObjectId
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return new Response(JSON.stringify({ message: 'Invalid Product ID' }), { status: 400 });
//     }

//     // Try to find and delete the product by its ID
//     const deletedProduct = await AddProduct.findByIdAndDelete(id);
    
//     if (!deletedProduct) {
//       return new Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
//     }

//     return new Response(JSON.stringify({ message: 'Product deleted successfully' }), { status: 200 });
//   } catch (error) {
//     console.error("Error deleting product: ", error);
//     return new Response(JSON.stringify({ message: 'Error deleting product' }), { status: 500 });
//   }
// }