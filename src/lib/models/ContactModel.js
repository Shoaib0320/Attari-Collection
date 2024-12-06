import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
    {
        contactUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        productId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AddProduct', required: true }],
        Message: { type: String, required: true },
    },
    { timestamps: true }
);

export const ContactModal = 
    mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
