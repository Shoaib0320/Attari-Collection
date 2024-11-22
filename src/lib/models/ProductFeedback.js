// import mongoose from "mongoose";

// const FeedbackSchema = new mongoose.Schema(
//   {
//     // userId: { type: mongoose.Schema.Types.ObjectId, required: true },
//     // productId: { type: mongoose.Schema.Types.ObjectId, required: true },
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Users', // Reference to the User collection
//       required: true,
//     },
//     productId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'AddProduct', // Reference to the Product collection
//       required: true,
//     },
//     feedback: { type: String, required: true },
//     imageUrl: { type: String },
//   },
//   { timestamps: true }
// );

// export const FeedbackModal = mongoose.models.ProductsFeedback ||
//   mongoose.model("ProductsFeedback", FeedbackSchema);

import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Users", // Reference to the Users collection
    //   required: true,
    // },
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    // productId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "AddProduct", // Reference to the Product collection
    //   required: true,
    // },
    productId: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
    feedback: { type: String, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export const FeedbackModal =
  mongoose.models.ProductsFeedback ||
  mongoose.model("ProductsFeedback", FeedbackSchema);
