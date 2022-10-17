import Song from "../models/Music.js";
import SongService from "../services/music.js";
import { BadRequestError } from "../helpers/apiError.js";

// POST /songs
export const createSong = async (req, res, next) => {
  try {
    const { songName, movieName, singer, language, thumbNail, audioUrl } =
      req.body;

    const song = new Song({
      songName,
      movieName,
      singer,
      language,
      thumbNail,
      audioUrl,
    });

    var g = await SongService.create(song);
    res.json(g);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// PUT /songs/:songId
export const updateSong = async (req, res, next) => {
  try {
    const update = req.body;
    const songId = req.params.songId;
    const updatedSong = await SongService.update(songId, update);
    res.json(updatedSong);
  } catch (error) {
    if (error instanceof Error && error.songName == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// DELETE /songs/:songId
export const deleteSong = async (req, res, next) => {
  try {
    await SongService.deleteSong(req.params.songId);
    res.status(204).end();
  } catch (error) {
    if (error instanceof Error && error.songName == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// GET /songs/:songId
export const findById = async (req, res, next) => {
  try {
    res.json(await SongService.findById(req.params.songId));
  } catch (error) {
    if (error instanceof Error && error.songName == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

// GET /songs
export const findAll = async (req, res, next) => {
  try {
    res.json(await SongService.findAll());
  } catch (error) {
    if (error instanceof Error && error.songName == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
