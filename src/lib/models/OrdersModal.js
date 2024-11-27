// import mongoose from 'mongoose';

// const { Schema } = mongoose;

// const orderSchema = new Schema({
//   user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
//   status: {
//     type: String,
//     default: 'pending',
//     enum: ['pending', 'delivered', 'cancelled'],
//   },
//   items: [
//     {
//       productId: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
//       quantity: { type: Number, required: true },
//       price: { type: Number, required: true },
//       title: { type: String, required: true },
//       category: { type: String, required: true },
//       imageUrl: { type: String }, // assuming each product has an image URL
//     },
//   ],
//   number: { type: String, required: true },
//   address: { type: String, required: true },
//   totalAmount: {type: Number, required: true},
//   // date: String,
//   date: { type: Date, required: true },  // Changed from String to Date
// }, { timestamps: true });

import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  image: { type: String }, // Add this to store image URLs
});

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    number: { type: String, required: true },
    address: { type: String, required: true },
    totalAmount: { type: Number, required: true }, // Ensure this is defined
    items: [orderItemSchema],
    status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'delivered', 'cancelled'],
    },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const OrdersModel =
  mongoose.models.CustomerOrders || mongoose.model('CustomerOrders', orderSchema);
