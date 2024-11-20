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
