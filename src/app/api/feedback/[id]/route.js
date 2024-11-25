import { connectDB } from "@/lib/db/connectDB";
import { FeedbackModal } from "@/lib/models/ProductFeedback";

// GET Feedback
// export async function GET(req) {
//     try {
//       await connectDB();
  
//       const { productId } = new URL(req.url).searchParams;
  
//       // Fetch feedbacks for the given product
//       const feedbacks = await FeedbackModal.find({ productId });
  
//       return new Response(
//         JSON.stringify({
//           success: true,
//           message: "Feedbacks fetched successfully",
//           feedbacks,
//         }),
//         { status: 200 }
//       );
//     } catch (error) {
//       return new Response(
//         JSON.stringify({
//           success: false,
//           error: error.message,
//         }),
//         { status: 500 }
//       );
//     }
//   }
  


export async function GET(req, { params }) {
    const { id } = params; // Product ID
  
    try {
      await connectDB(); // Connect to the database
  
      const feedbacks = await FeedbackModal.find({ productId: id })
      .populate("userId", "firstName lastName email picture") // Populate specific fields
      .exec();  
      if (!feedbacks.length) {
        return new Response(
          JSON.stringify({ success: false, message: "No feedback found" }),
          { status: 404 }
        );
      }
  
      return new Response(
        JSON.stringify({ success: true, feedbacks }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error fetching feedback:", error);
      return new Response(
        JSON.stringify({ success: false, message: "Server error" }),
        { status: 500 }
      );
    }
  }