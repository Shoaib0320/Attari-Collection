import { FeedbackModal } from "@/lib/models/ProductFeedback";
import { connectDB } from "@/lib/db/connectDB";

export async function POST(req) {
  await connectDB();
  const obj = await req.json();

  let newFeedback = await new FeedbackModal({ ...obj });
  newFeedback = await newFeedback.save();

  return Response.json({
    error: false,
    Feedback: newFeedback,
  });
}


