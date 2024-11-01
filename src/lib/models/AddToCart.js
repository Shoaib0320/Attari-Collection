// models/Cart.js
import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    imageUrl: {
        type: String,
    },
    category: {
        type: String,
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.Cart || mongoose.model('AddToCart', CartSchema);
