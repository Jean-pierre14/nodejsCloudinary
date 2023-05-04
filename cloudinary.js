const cloudinary = require("cloudinary").V2,
  dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

module.exports = cloudinary;
