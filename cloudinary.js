const cloudinary = require("cloudinary"),
  dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

cloudinary.config({
  cloud_name: "duetomqjz",
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
  secure: true,
});
