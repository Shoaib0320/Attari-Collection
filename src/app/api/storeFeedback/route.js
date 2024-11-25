import { connectDB } from '@/lib/db/connectDB';
import AddProduct from '@/lib/models/AddProduct';
import { StoreFeedbackModal } from '@/lib/models/StoreFeedback';

export async function POST(req) {
  await connectDB();
  const obj = await req.json();

  let newFeedback = await new StoreFeedbackModal({ ...obj })
  newFeedback = await newFeedback.save();

  return Response.json({
    error: false,
    Feedback: newFeedback,
  });
}

// export async function GET(req) {
//   await connectDB();
//   const { searchParams } = new URL(req.url);
//   const ids = searchParams.get('ids')?.split(',');

//   if (!ids) {
//     return new Response(JSON.stringify({ error: 'No product IDs provided' }), {
//       status: 400,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }

//   try {
//     const products = await AddProduct.find({ _id: { $in: ids } }).lean();
//     return new Response(JSON.stringify(products), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch all feedbacks
      const feedbacks = await StoreFeedbackModal.find().populate('userId').populate('productId');
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching feedbacks' });
    }
  }
}