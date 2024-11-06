// // api/products/route.js
// import { connectDB } from '@/lib/db/connectDB';
// import AddProduct from '@/lib/models/AddProduct';

// // Handle GET request: Fetch all products
// export async function GET(req) {
//   await connectDB();
//   const products = await AddProduct.find().populate('category');
//   // console.log("products=>", products);
//   return new Response(JSON.stringify(products), { status: 200 });
// }

// export async function POST(req) {
//   await connectDB();
//   const { title, description, category, price, imageUrl } = await req.json();
//   console.log("Data received:", { title, description, category, price, imageUrl });

//   const newProduct = new AddProduct({ title, description, category, price, imageUrl });
//   await newProduct.save();

//   return Response.json(
//     {
//       msg: "Product Added Successfully",
//       product: newProduct,
//     },
//     { status: 201 }
//   );
// }


import { connectDB } from '@/lib/db/connectDB';
import AddProduct from '@/lib/models/AddProduct';

export async function GET() {
  await connectDB();
  const products = await AddProduct.find().populate('category');
  return Response.json(products);
}

export async function POST(request) {
  await connectDB();
  const newProductData = await request.json();
  const newProduct = new AddProduct(newProductData);
  await newProduct.save();
  return Response.json(newProduct, { status: 201 });
}

export async function PUT(request) {
  await connectDB();
  const updatedProductData = await request.json();
  const updatedProduct = await AddProduct.findByIdAndUpdate(updatedProductData._id, updatedProductData, {
    new: true,
  });
  if (!updatedProduct) {
    return Response.json({ message: 'Product not found' }, { status: 404 });
  }
  return Response.json(updatedProduct);
}

export async function DELETE(request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  
  const deletedProduct = await AddProduct.findByIdAndDelete(id);
  if (!deletedProduct) {
    return Response.json({ message: 'Product not found' }, { status: 404 });
  }
  
  return Response.json({ message: 'Product deleted' });
}
