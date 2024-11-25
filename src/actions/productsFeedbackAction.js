


'use server'

import { connectDB } from "@/lib/db/connectDB";
import { FeedbackModal } from "@/lib/models/ProductFeedback";
import { UserModel } from "@/lib/models/User"; // Assuming you have a User model
import { AddProduct } from "@/lib/models/AddProduct"; // Assuming you have a Product model

// export async function getFeedback() {
//   await connectDB();

//   const feedbacks = await FeedbackModal.find()
//     .populate('userId')
//     .populate('productId')
//     .sort({ createdAt: -1 })
//     .lean();

//     console.log('feedbacks',feedbacks)


//   return feedbacks
//   // feedbacks.map(feedback => ({
//   //   id: feedback._id.toString(),
//   //   userName: feedback.userId.firstName,
//   //   userEmail: feedback.userId.email,
//   //   userPicture: feedback.userId.picture,
//   //   productName: feedback.productId.title,
//   //   productCategory: feedback.productId.category,
//   //   productImage: feedback.productId.image,
//   //   feedback: feedback.feedback,
//   //   imageUrl: feedback.imageUrl,
//   //   createdAt: feedback.createdAt.toISOString(),
//   // })
// // );

// }

// export async function addFeedback(feedbackData) {
//   const response = await fetch("/api/feedback", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(feedbackData),
//   });
//   return await response.json();
// }


// export async function addFeedback(feedbackData) {
//   console.log("Payload being sent:", feedbackData); // Add this line to debug

//   try {
//     const response = await fetch(`${process.env.BASE_URL}api/feedback`, {
//       method: "POST",
//       body: JSON.stringify(feedbackData),
//     });

//     const data = await response.json();

//     return data;
    
//   } catch (error) {
//     console.error("Error adding feedback:", error);
//     throw error;
//   }
// }

export async function getFeedback() {
  try {
    const response = await fetch(`${process.env.BASE_URL}api/feedback`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding feedback:", error.message);
    throw error;
  }
}


export async function addFeedback(feedbackData) {
  console.log("Payload being sent:", feedbackData);

  try {
    const response = await fetch(`${process.env.BASE_URL}api/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedbackData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding feedback:", error.message);
    throw error;
  }
}

export async function fetchFeedbacks() {
  const res = await fetch(`${process.env.BASE_URL}/api/feedback`);
  return res.json();
}
