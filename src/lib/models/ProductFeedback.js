import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    feedback: { type: String, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export const FeedbackModal = mongoose.models.ProductsFeedback ||
  mongoose.model("ProductsFeedback", FeedbackSchema);
