// /lib/cloudinary.js
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// export const cloudinaryUpload = async (file) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.v2.uploader.upload(file.path, { resource_type: "auto" }, (err, result) => {
//       if (err) reject(err);
//       resolve(result);
//     });
//   });
// };


export async function cloudinaryUpload(file) {
  if (!file) {
    throw new Error('No file provided for upload');
  }

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    uploadStream.end(file.buffer);
  });
}