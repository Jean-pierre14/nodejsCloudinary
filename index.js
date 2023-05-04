import exp from "express";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config({ path: `./.env` });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

const app = exp(),
  PORT = process.env.PORT || 3004;

app.use(exp.json());
app.use(exp.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("index");
});

app.post("/", async (request, response) => {
  const { username, image } = request.body;

  try {
    const result = await cloudinary.uploader.upload(image);

    console.log(result);

    response.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, (error) => {
  if (error) throw error.message;
  console.log(`Server is running on port: ${PORT}`);
});