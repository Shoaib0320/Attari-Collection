import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'delivered', 'cancelled'],
  },
  items: [
    {
      productId: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      title: { type: String, required: true },
      category: { type: String, required: true },
      imageUrl: { type: String }, // assuming each product has an image URL
    },
  ],
  number: { type: String, required: true },
  address: { type: String, required: true },
  date: String,
}, { timestamps: true });

export const OrdersModel =
  mongoose.models.Orders || mongoose.model('Orders', orderSchema);
