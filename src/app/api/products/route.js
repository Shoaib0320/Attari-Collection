// //src/app/api/products/route.js

// import { connectDB } from '@/lib/db/connectDB';
// import AddProduct from '@/lib/models/AddProduct';
// import { CategoryModal } from '@/lib/models/Category';

// // export async function GET() {
// //   try {
// //     await connectDB();
// //     const products = await AddProduct.find().populate('category')
// //     // .populate('category') // Replace 'category' with the field name you're populating
// //     // .exec((err, products) => {
// //     //     if (err) {
// //     //         console.error('Error populating categories:', err);
// //     //     } else {
// //     //         console.log(products);
// //     //     });
// //     return Response.json(products);
// //   } catch (error) {
// //     console.error("Database error:", error);
// //     return Response.json({ message: "Failed to fetch products" }, { status: 500 });
// //   }
// // }

// export async function GET() {
//   try {
//     await connectDB();

//     // Check if there are any products
//     const products = await AddProduct.find().populate('category');
//     if (!products || products.length === 0) {
//       return Response.json({ message: "No products found" });
//     }

//     return Response.json(products);
//   } catch (error) {
//     console.error("Database error:", error);
//     return Response.json({ message: "Failed to fetch products" }, { status: 500 });
//   }
// }



// export async function POST(request) {
//   try {
//     await connectDB();
//     const newProductData = await request.json();
//     const newProduct = new AddProduct(newProductData);
//     await newProduct.save();
//     return Response(JSON.stringify(newProduct), { status: 201 });
//   } catch (error) {
//     return Response(JSON.stringify({ message: 'Error creating product', error }), { status: 500 });
//   }
// }

// export async function PUT(request) {
//   try {
//     await connectDB();
//     const updatedProductData = await request.json();
//     const updatedProduct = await AddProduct.findByIdAndUpdate(updatedProductData._id, updatedProductData, {
//       new: true,
//     });
//     if (!updatedProduct) {
//       return Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
//     }
//     return Response(JSON.stringify(updatedProduct));
//   } catch (error) {
//     return Response(JSON.stringify({ message: 'Error updating product', error }), { status: 500 });
//   }
// }

// export async function DELETE(request) {
//   try {
//     await connectDB();
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get('id');
//     const deletedProduct = await AddProduct.findByIdAndDelete(id);
//     if (!deletedProduct) {
//       return Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
//     }
//     return Response(JSON.stringify({ message: 'Product deleted' }));
//   } catch (error) {
//     return Response(JSON.stringify({ message: 'Error deleting product', error }), { status: 500 });
//   }
// }















// src/app/api/products/route.js
import { connectDB } from '@/lib/db/connectDB';
import AddProduct from '@/lib/models/AddProduct';
import { CategoryModal } from '@/lib/models/Category';
import { corsHeaders } from '@/lib/cors'; // Import CORS headers for specific use

export async function GET(req) {
  try {
    // Create response headers
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", corsHeaders["Access-Control-Allow-Origin"]);
    headers.set("Access-Control-Allow-Methods", corsHeaders["Access-Control-Allow-Methods"]);
    headers.set("Access-Control-Allow-Headers", corsHeaders["Access-Control-Allow-Headers"]);

    await connectDB();
    const products = await AddProduct.find().populate('category');
    
    if (!products || products.length === 0) {
      return new Response(JSON.stringify({ message: "No products found" }), { headers, status: 404 });
    }

    return new Response(JSON.stringify(products), { headers });
  } catch (error) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch products" }), { headers, status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const newProductData = await request.json();
    const newProduct = new AddProduct(newProductData);
    await newProduct.save();
    return new Response(JSON.stringify(newProduct), {
      headers: corsHeaders, // Attach CORS headers
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error creating product', error }), {
      headers: corsHeaders, // Attach CORS headers
      status: 500,
    });
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    const updatedProductData = await request.json();
    const updatedProduct = await AddProduct.findByIdAndUpdate(updatedProductData._id, updatedProductData, {
      new: true,
    });
    if (!updatedProduct) {
      return new Response(JSON.stringify({ message: 'Product not found' }), {
        headers: corsHeaders, // Attach CORS headers
        status: 404,
      });
    }
    return new Response(JSON.stringify(updatedProduct), {
      headers: corsHeaders, // Attach CORS headers
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error updating product', error }), {
      headers: corsHeaders, // Attach CORS headers
      status: 500,
    });
  }
}

export async function DELETE(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const deletedProduct = await AddProduct.findByIdAndDelete(id);
    if (!deletedProduct) {
      return new Response(JSON.stringify({ message: 'Product not found' }), {
        headers: corsHeaders, // Attach CORS headers
        status: 404,
      });
    }
    return new Response(JSON.stringify({ message: 'Product deleted' }), {
      headers: corsHeaders, // Attach CORS headers
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error deleting product', error }), {
      headers: corsHeaders, // Attach CORS headers
      status: 500,
    });
  }
}
