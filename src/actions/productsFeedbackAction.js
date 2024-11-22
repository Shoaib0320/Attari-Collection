


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
  await connectDB();

  const feedbacks = await FeedbackModal.find()
    .populate('userId')
    .populate('productId')
    .sort({ createdAt: -1 })
    .lean();

  // Serialize the feedbacks to plain objects
  const serializedFeedbacks = feedbacks.map(feedback => ({
    id: feedback._id.toString(),
    userName: feedback.userId?.firstName || null,
    userEmail: feedback.userId?.email || null,
    userPicture: feedback.userId?.picture || null,
    productName: feedback.productId?.title || null,
    productCategory: feedback.productId?.category || null,
    productImage: feedback.productId?.image || null,
    feedback: feedback.feedback,
    imageUrl: feedback.imageUrl,
    createdAt: feedback.createdAt.toISOString(),
    updatedAt: feedback.updatedAt.toISOString(),
  }));

  console.log('Serialized feedbacks:', serializedFeedbacks);

  return serializedFeedbacks;
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
