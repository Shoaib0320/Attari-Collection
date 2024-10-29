// // import mongoose from "mongoose";
// // const { Schema } = mongoose;

// // const eventSchema = new Schema({
// //   title: String,
// //   description: String,
// //   startTime: String,
// //   endTime: String,
// //   startDate: String,
// //   endDate: String,
// //   location: {
// //     lat: Number,
// //     long: Number,
// //   },
// //   address: String,
// //   createdBy: { type: mongoose.Types.ObjectId, ref: "Users" },
// //   going: [{ type: mongoose.Types.ObjectId, ref: "Users" }],
// // });

// // export const EventModal = mongoose.models.Events || mongoose.model("Events", eventSchema);










// import mongoose from "mongoose";
// const { Schema } = mongoose;

// const AddProductSchema = new Schema({
//   title: { type: String, required: true },
//   description: String,
//   category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
//   price: Number,
//   imageUrl: String,
// });

// export const AddProduct = mongoose.models.AddProduct || mongoose.model("AddProduct", AddProductSchema);








// src/lib/models/AddProduct.js
import mongoose from 'mongoose';

const AddProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories', // Ensure Category is correctly referenced
    required: true,
  },
  price: Number,
  imageUrl: String,
});

// Export as default to ensure correct import in other files
export default mongoose.models.AddProduct || mongoose.model('AddProduct', AddProductSchema);
