// // //@/lib/models/AddToCart.js
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
// // export const CartModal = 
// //     mongoose.models.Cart || mongoose.model('Cart', CartSchema);

// import mongoose from 'mongoose'

// const CartSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   productId: { type: String, required: true },
//   quantity: { type: Number, required: true, min: 1 },
//   price: { type: Number, required: true },
//   title: { type: String, required: true },
//   imageUrl: { type: String },
// }, { timestamps: true })

// export const CartModel = mongoose.models.Cart || mongoose.model('Cart', CartSchema)








import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
    imageUrl: { type: String },
    category: { type: String },
    addedAt: { type: Date, default: Date.now }
});

// Export the Cart model
const CartModal = mongoose.models.Cart || mongoose.model('Cart', CartSchema);

export default CartModal;
