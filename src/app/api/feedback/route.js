// import Feedback from "@/lib/models/ProductFeedback";
// import { connectDB } from "@/lib/db/connectDB";

// // POST Feedback
// // POST Feedback
// // export async function POST(req) {
// //   try {
// //     await connectDB();

// //     const { userId, feedback, media } = await req.json();
// //     const { productId } = new URL(req.url).searchParams;

// //     // Validate input
// //     if (!userId || !feedback || !productId) {
// //       return new Response(
// //         JSON.stringify({
// //           success: false,
// //           error: "Missing required fields: userId, feedback, or productId.",
// //         }),
// //         { status: 400 }
// //       );
// //     }

// //     // Create feedback
// //     const newFeedback = await Feedback.create({
// //       userId,
// //       productId,
// //       feedback,
// //       media,
// //     });

// //     return new Response(
// //       JSON.stringify({
// //         success: true,
// //         message: "Feedback added successfully",
// //         feedback: newFeedback,
// //       }),
// //       { status: 201 }
// //     );
// //   } catch (error) {
// //     return new Response(
// //       JSON.stringify({
// //         success: false,
// //         error: error.message,
// //       }),
// //       { status: 500 }
// //     );
// //   }
// // }

// export async function POST(req) {
//   try {
//     const body = await req.json(); // Parse incoming request body
//     console.log("Parsed Request Body:", body);
//     // Proceed with further logic...
//   } catch (error) {
//     console.error("Error parsing request body:", error.message);
//     return new Response(
//       JSON.stringify({ success: false, error: "Invalid JSON payload" }),
//       { status: 400 }
//     );
//   }
// }


// // GET Feedback
// export async function GET(req) {
//   try {
//     await connectDB();

//     const { productId } = new URL(req.url).searchParams;

//     // Fetch feedbacks for the given product
//     const feedbacks = await Feedback.find({ productId });

//     return new Response(
//       JSON.stringify({
//         success: true,
//         message: "Feedbacks fetched successfully",
//         feedbacks,
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({
//         success: false,
//         error: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// }


// // export default async function handler(req, res) {
// //   const { method } = req;

// //   if (method === "POST") {
// //     await postFeedback(req, res);
// //   } else if (method === "GET") {
// //     await getFeedbacks(req, res);
// //   } else {
// //     return res.status(405).json({
// //       success: false,
// //       error: "Method Not Allowed",
// //     });
// //   }
// // }

import Feedback from "@/lib/models/ProductFeedback";
import { connectDB } from "@/lib/db/connectDB";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const feedback = new Feedback(req.body);
      await feedback.save();
      res.status(201).json({ success: true, data: feedback });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const feedbacks = await Feedback.find({ productId: req.query.productId });
      res.status(200).json({ success: true, data: feedbacks });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
