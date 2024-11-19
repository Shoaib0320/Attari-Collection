// lib/uploadToCloudinary.js
import cloudinary from "@/lib/cloudinary";

// This function uploads a file to Cloudinary and returns the result (URL of the file)
export const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.v2.uploader.upload(file, {
      folder: "product_feedback", // Store in a specific folder in Cloudinary
      resource_type: "auto", // Auto-detects the file type (image/video)
    });
    return result.secure_url; // Return the secure URL of the uploaded file
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload file to Cloudinary");
  }
};
