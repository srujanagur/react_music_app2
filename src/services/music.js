import Song from "../models/Music.js";
import { NotFoundError } from "../helpers/apiError.js";

const create = async (song) => {
  song.save();
  return { status: "saved successfully" };
};

const findById = async (songId) => {
  const foundSong = await Song.findById(songId);

  if (!foundSong) {
    throw new NotFoundError(`Song ${songId} not found`);
  }

  return foundSong;
};

const findAll = async () => {
  return Song.find().sort({ songName: 1, audioUrl: -1 });
};

const update = async (songId, update) => {
  const foundSong = await Song.findByIdAndUpdate(songId, update, {
    new: true,
  });

  if (!foundSong) {
    throw new NotFoundError(`Song ${songId} not found`);
  }

  return foundSong;
};

const deleteSong = async (songId) => {
  const foundSong = Song.findByIdAndDelete(songId);

  if (!foundSong) {
    throw new NotFoundError(`Song ${songId} not found`);
  }

  return foundSong;
};

export default {
  create,
  findById,
  findAll,
  update,
  deleteSong,
};
