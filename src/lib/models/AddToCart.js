// // // models/Cart.js
// // import mongoose from 'mongoose';

// // const CartSchema = new mongoose.Schema({
// //     productId: {
// //         type: String,
// //         required: true
// //     },
// //     title: {
// //         type: String,
// //         required: true
// //     },
// //     description: {
// //         type: String,
// //     },
// //     price: {
// //         type: Number,
// //         required: true
// //     },
// //     quantity: {
// //         type: Number,
// //         required: true,
// //         default: 1
// //     },
// //     imageUrl: {
// //         type: String,
// //     },
// //     category: {
// //         type: String,
// //     },
// //     addedAt: {
// //         type: Date,
// //         default: Date.now
// //     }
// // });

// // // Check if the Cart model already exists to prevent overwrite errors
// // export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);



// // src/models/Cart.js
// import mongoose from "mongoose";

// const CartSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   productId: { type: String, required: true },
//   productTitle: { type: String, required: true },
//   productDescription: { type: String, required: true },
//   productPrice: { type: Number, required: true },
//   quantity: { type: Number, required: true },
//   totalPrice: { type: Number, required: true },
//   productImageUrl: { type: String, required: true },
// });

// const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);

// export default Cart;

// models/Cart.js

import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users', // Referring to the 'Users' collection in MongoDB
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'addproducts', // Referring to the 'Product' model
        required: true,
      },
      title: String,
      price: Number,
      quantity: { type: Number, required: true, default: 1 },
      imageUrl: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);

export default Cart;
