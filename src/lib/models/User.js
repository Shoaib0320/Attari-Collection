import mongoose from "mongoose";
import { number } from "zod";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  picture: String,
  role: { type: String, default: "user", enum: ["user", "admin"] },
});

export const UserModal =
  mongoose.models.Users || mongoose.model("Users", userSchema);