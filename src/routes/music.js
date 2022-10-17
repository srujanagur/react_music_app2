import express from "express";

import {
  createSong,
  findById,
  deleteSong,
  findAll,
  updateSong,
} from "../controllers/music.js";

const router = express.Router();

// Every path we define here will get /api/v1/Songs prefix
router.get("/", findAll);
router.get("/:songId", findById);
router.put("/:songId", updateSong);
router.delete("/:songId", deleteSong);
router.post("/", createSong);

export default router;
