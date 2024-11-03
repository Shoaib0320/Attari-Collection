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
  console.log("Data received:", { title, description, category, price, imageUrl });

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
