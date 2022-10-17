import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
  songName: {
    type: String,
    required: [true, "Please enter the song name"],
    index: true,
  },
  movieName: {
    type: String,
    required: [true, "Please enter movie name"],
    index: true,
  },
  singer: [String],
  language: {
    type: String,
    index: true,
  },
  thumbNail: {
    type: String,
    required: [true, "Please add url of the image"],
    unique: true,
  },
  audioUrl: {
    type: String,
    required: [true, "Please add url of the image"],
  },
});

export default mongoose.model("Song", SongSchema);
