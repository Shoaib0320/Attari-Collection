// // import mongoose from "mongoose";
// // import { number } from "zod";

// // const { Schema } = mongoose;

// // const userSchema = new Schema({
// //   firstName: String,
// //   lastName: String,
// //   email: String,
// //   picture: String,
// //   role: { type: String, default: "user", enum: ["user", "admin"] },
// // });

// // export const UserModal =
// //   mongoose.models.Users || mongoose.model("Users", userSchema);





// // lib/models/User.js

// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema(
//   {
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     picture: { type: String },
//     role: { type: String, default: "user", enum: ["user", "admin"] },
//     // You can assign different roles like 'admin' or 'user'
//   },
//   { timestamps: true }
// );

// const UserModal = mongoose.models.User || mongoose.model("User", UserSchema);

// export { UserModal };

import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  picture: String,
  role: { type: String, default: "user", enum: ["user", "admin"] },
}, { timestamps: true });

export const UserModel =
  mongoose.models.User || mongoose.model("User", userSchema);
