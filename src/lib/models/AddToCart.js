// // //@/lib/models/AddToCart.js

import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  imageUrl: { type: String },
  category: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  addedAt: { type: Date, default: Date.now },
});

const CartModal = mongoose.models.Carts || mongoose.model('Carts', CartSchema);
export default CartModal;