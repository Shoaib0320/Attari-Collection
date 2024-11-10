import mongoose from "mongoose";

export async function connectDB() {
  try {
    let connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 20000, // 20 seconds
    });
    //  mongoose.connect(process.env.MONGODB_URI);
    console.info("Mongodb Connected");
  } catch (err) {
    console.log("err in connection=>", err);
  }
}