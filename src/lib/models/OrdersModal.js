// // // // import mongoose from "mongoose";

// // // // const { Schema } = mongoose;

// // // // const orderSchema = new Schema({
// // // //   user: { type: mongoose.Types.ObjectId, ref: "User" },
// // // //   status: {
// // // //     type: String,
// // // //     default: "pending",
// // // //     enum: ["pending", "deliverd", "cancelled"],
// // // //   },
// // // //   productId: { type: mongoose.Types.ObjectId, ref: "AddProduct" },
// // // //   quantity : String ,
// // // //   title: { type: String, required: true },
// // // //   category : { type: mongoose.Types.ObjectId, ref: "Categories" },
// // // //   number: String,
// // // //   address: String,
// // // //   createdAt: { type: Date, default: Date.now },
// // // // });

// // // // export const OrdersModal =
// // // //   mongoose.models.Orders || mongoose.model("Orders", orderSchema);







// // // import mongoose from 'mongoose'

// // // const OrderSchema = new mongoose.Schema({
// // //   user: {
// // //     type: mongoose.Schema.Types.ObjectId,
// // //     ref: 'User',
// // //     required: true,
// // //   },
// // //   name: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   address: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   number: {
// // //     type: String,
// // //     required: true,
// // //   },
// // //   products: [
// // //     {
// // //       productId: {
// // //         type: mongoose.Schema.Types.ObjectId,
// // //         ref: 'AddProduct',
// // //         required: true,
// // //       },
// // //       title: {
// // //         type: String,
// // //         required: true,
// // //       },
// // //     //   category: {
// // //     //     type: mongoose.Schema.Types.ObjectId,
// // //     //     ref: 'Categories',
// // //     //   },
// // //       quantity: {
// // //         type: Number,
// // //         required: true,
// // //       },
// // //       price: {
// // //         type: Number,
// // //         required: true,
// // //       },
// // //     },
// // //   ],
// // //   totalAmount: {
// // //     type: Number,
// // //     required: true,
// // //   },
// // //   createdAt: {
// // //     type: Date,
// // //     default: Date.now,
// // //   },
// // // })

// // // export const OrdersModel = mongoose.models.Order || mongoose.model('Order', OrderSchema)





// // import mongoose from 'mongoose';

// // const OrderSchema = new mongoose.Schema({
// //   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// //   name: { type: String, required: true }, // Ensure name is marked as required
// //   address: { type: String, required: true },
// //   number: { type: String, required: true },
// //   products: [
// //     {
// //       productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
// //       title: { type: String, required: true },
// //       category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
// //       quantity: { type: Number, required: true },
// //       price: { type: Number, required: true },
// //     },
// //   ],
// //   orderStatus: {
// //         type: String,
// //         default: "pending",
// //         enum: ["pending", "deliverd", "cancelled"],
// //       },
// //   totalAmount: { type: Number, required: true },
// // }, { timestamps: true });

// // export default mongoose.models.Order || mongoose.model('Order', OrderSchema);





// import mongoose from 'mongoose';

// const OrderSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Assuming you have a User model
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   number: {
//     type: String,
//     required: true,
//   },
//   orderStatus: {
//         type: String,
//         default: "pending",
//         enum: ["pending", "deliverd", "cancelled"],
//       },
//       items: [
//         {
//           productId: String,
//           title: String,
//           price: Number,
//           quantity: Number,
//         },],
    
// //   products: [{
// //     productId: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: 'AddProduct',
// //       required: true,
// //     },
// //     title: {
// //       type: String,
// //       required: true,
// //     },
// //     category: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: 'Categories',
// //       required: true,
// //     },
// //     quantity: {
// //       type: Number,
// //       required: true,
// //     },
// //     price: {
// //       type: Number,
// //       required: true,
// //     },
// //     totalAmount: {
// //       type: Number,
// //       required: true,
// //     },
// //   }],
// totalAmount: { type: Number, required: true },


// }, { timestamps: true });

// export const OrdersModel = mongoose.models.Order || mongoose.model('Order', OrderSchema)

















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
    },
  ],
  number: { type: String, required: true },
  address: { type: String, required: true },
  date: String,
}, { timestamps: true });

export const OrdersModel =
  mongoose.models.Orders || mongoose.model('Orders', orderSchema);
