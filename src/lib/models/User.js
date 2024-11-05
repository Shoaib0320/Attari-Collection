// import mongoose from "mongoose";
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   fullname: String,
//   email: String,
//   password: String,
//   profileImg: String,
//   address: String,
//   bio: String,
// });

// export const UserModal =
//   mongoose.models.Users || mongoose.model("Users", userSchema);






import mongoose from "mongoose";
import { number } from "zod";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  picture: String,
  role: { type: String, default: "user", enum: ["user", "doctor", "admin"] },
});

export const UserModal =
  mongoose.models.Users || mongoose.model("Users", userSchema);