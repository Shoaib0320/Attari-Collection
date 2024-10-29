// // import connectDB from "../../../lib/db/connectDB"
// // import AddProduct from '../../../lib/models/AddProduct';

// // // Connect to database and handle GET requests
// // export async function GET(req) {
// //   await connectDB();
// //   const AddProduct = await Product.find().populate('category');
// //   return new Response(JSON.stringify(products), { status: 200 });
// // }

// // // Handle POST requests
// // export async function POST(req) {
// //   await connectDB();
// //   const { title, description, category, price, imageUrl } = await req.json();
  
// //   const AddProduct = new Product({ title, description, category, price, imageUrl });
// //   await AddProduct.save();
  
// //   return new Response(JSON.stringify(AddProduct), { status: 201 });
// // }










// import { connectDB } from '@/lib/db/connectDB';
// import { AddProduct } from '@/lib/models/AddProduct';

// // Connect to database and handle GET requests
// export async function GET(req) {
//   await connectDB();
//   const products = await AddProduct.find().populate('category'); // Using AddProduct model
//   return new Response(JSON.stringify(products), { status: 200 });
// }

// // Handle POST requests
// export async function POST(req) {
//   await connectDB();
//   const { title, description, category, price, imageUrl } = await req.json();
  
//   const newProduct = new AddProduct({ title, description, category, price, imageUrl });
//   await newProduct.save();
  
//   return new Response(JSON.stringify(newProduct), { status: 201 });
// }










import { connectDB } from '@/lib/db/connectDB';
import AddProduct from '@/lib/models/AddProduct';

export async function GET(req) {
  await connectDB();
  const products = await AddProduct.find().populate('category');
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
  await connectDB();
  const { title, description, category, price, imageUrl } = await req.json();

  const newProduct = new AddProduct({ title, description, category, price, imageUrl });
  await newProduct.save();

  return new Response(JSON.stringify(newProduct), { status: 201 });
}
