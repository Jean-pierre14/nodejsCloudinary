import exp from "express";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";

dotenv.config({ path: `./.env` });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const app = exp(),
  PORT = process.env.PORT || 3004;

app.use(
  fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 2024 * 1024 },
  })
);

app.use(exp.json());
app.use(exp.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("index");
});

app.post("/", async (request, response) => {
  const file = request.files.image;

  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "images",
    });

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
