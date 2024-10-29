import mongoose from "mongoose";

export async function connectDB() {
  try {
    let connection = await mongoose.connect(process.env.MONGODB_URI);
    console.info("Mongodb Connected");
  } catch (err) {
    console.log("err in connection=>", err);
  }
}





// // lib/connectDB.js
// const mongoose = require('mongoose');

// export async function connectDB() {
//   try {
//     // Ensure environment variables are loaded
//     if (!process.env.MONGODB_URI) {
//       throw new Error('MONGODB_URI is undefined'); // This helps debug the issue
//     }

//     // Connect to MongoDB
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1); // Exit the process if there is an error
//   }
// };

