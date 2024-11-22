import { FeedbackModal } from "@/lib/models/ProductFeedback";
import { connectDB } from "@/lib/db/connectDB";

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


// export async function GET() {
//   await connectDB();
//   const feedbacks = await FeedbackModal.find({})
//     .populate("userId", "firstName email picture") // Adjust fields based on User schema
//     .populate("productId", "title category imageUrl") // Adjust fields based on Product schema
//     .exec();

//     console.log('userId', userId)

//   return Response.json(feedbacks);
// }

export async function GET(req) {
  try {
    await connectDB();

    const feedbacks = await FeedbackModal.find()
      .populate('userId') // Populate user details
      .populate('productId'); // Populate product details

    return Response.json({
      success: true,
      feedbacks,
    });
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to fetch feedbacks",
      },
      { status: 500 }
    );
  }
}