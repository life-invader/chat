import { v2 as cloudinary } from 'cloudinary'

export const cloudinaryApi = cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
})