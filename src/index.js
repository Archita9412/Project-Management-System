import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // Must run before any other import reads env vars

import app from "./app.js";
import connectDB from "./db/index.js";

const port = process.env.PORT || 8000; // Fix — added fallback

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
    process.exit(1);
  });