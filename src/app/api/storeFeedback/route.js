import { connectDB } from '@/lib/db/connectDB';
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