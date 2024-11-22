import mongoose from 'mongoose';

const StoreFeedbackSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        productId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AddProduct', required: true }],
        feedback: { type: String, required: true },
    },
    { timestamps: true }
);

export const StoreFeedbackModal = 
    mongoose.models.StoreFeedback || mongoose.model('StoreFeedback', StoreFeedbackSchema);
