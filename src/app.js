import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import songRouter from "./routes/music.js";
import apiErrorHandler from "./middlewares/apiErrorHandler.js";
import apiContentType from "./middlewares/apiContentType.js";

dotenv.config({ path: ".env" });
const app = express();

// Express configuration
app.use(apiContentType);

// Use common 3rd-party middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}
// Use movie router
app.use("/api/v1/songs", songRouter);

// Custom API error handler
app.use(apiErrorHandler);

export default app;
