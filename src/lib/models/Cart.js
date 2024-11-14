// models/Cart.js
import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'addproducts', required: true },
        title: String,
        description: String,
        price: Number,
        quantity: { type: Number, default: 1 },
        imageUrl: String,
        category: String,
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);

export default Cart;
