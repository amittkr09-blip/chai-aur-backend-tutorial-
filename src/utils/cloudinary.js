import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLAUDINARY_CLAUD_NAME,
  api_key: process.env.CLAUDINARY_API_KEY,
  API_SECRET: process.env.CLAUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File uploaded to Cloudinary:", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the file from local saved temporary file if upload operation got failed
    return null;
  }
};
