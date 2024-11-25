import { FeedbackModal } from "@/lib/models/ProductFeedback";
import { connectDB } from "@/lib/db/connectDB";
import AddProduct from "@/lib/models/AddProduct";
import { CategoryModal } from "@/lib/models/Category";

export async function POST(req) {
  await connectDB();
  const obj = await req.json();

  let newFeedback = await new FeedbackModal({ ...obj })
  newFeedback = await newFeedback.save();

  return Response.json({
    error: false,
    Feedback: newFeedback,
  });
}



export async function GET(req) {
  await connectDB();

  try {
    const feedbacks = await FeedbackModal.find({})
      .populate("userId", "firstName lastName email")
      // .populate("productId", "title category imageUrl");
      .populate({
        path: "productId", // Populate product details
        select: "title imageUrl category", // Select specific fields
        populate: {
          path: "category", // Populate nested category details
          select: "title", // Select category title
        },
      });

    return Response.json({
      feedbacks,
    });
  } catch (error) {
    return Response.json(
      { error: true, message: error.message },
      { status: 500 }
    );
  }
}
