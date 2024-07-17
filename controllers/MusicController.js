const path = require("path");
const { getMusicMetadata } = require("../utils/Metadata");
const MusicModel = require("../models/MusicModel");
const userModel = require("../models/UserModel");

exports.getAllMusics = async (req, res) => {
  try {
    const musics = await MusicModel.find();
    res.status(200).json({ musics });
  } catch (error) {
    res.status(404).json({ message: "No musics found" });
  }
};

exports.getMusic = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Music ID is required" });
  }
  try {
    const music = await MusicModel.findById(id);
    res.status(200).json({ music });
  } catch (error) {
    res.status(404).json({ message: "Music not found" });
  }
};

exports.getMusicsByUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }
  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const musics = await MusicModel.find({ user: id });
    res.status(200).json({ musics });
  } catch (error) {
    res.status(404).json({ message: "Musics not found" });
  }
};

exports.uploadMusic = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const userId = req.headers["user-id"];

  try {
    const userFind = await userModel.findById(userId);
    if (!userFind) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(404).json({ message: "User not found" });
  }
  const filePath = path.join("./uploads/musics", req.file.filename);
  console.log(req.file.filename);
  let { title, artist, album, genre, duration, fileUrl, coverUrl } =
    await getMusicMetadata(filePath);

  if (title == "Unknown") {
    title = req.file.filename;
  }

  const musicFind = await MusicModel.findOne({ title });
  if (musicFind) {
    return res.status(400).json({ message: "Music already exists" });
  }
  const music = new MusicModel({
    title,
    artist,
    album,
    genre,
    duration,
    fileUrl,
    coverUrl,
    uploadedBy: userId,
  });
  try {
    const newMusic = await music.save();
    res.status(201).json(newMusic);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMusic = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Music ID is required" });
  }
  try {
    const music = await MusicModel.findByIdAndDelete(id);
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    res.status(200).json({ message: "Music deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Music not found" });
  }
};

exports.updateMusic = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Music ID is required" });
  }
  try {
    const music = await MusicModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    res.status(200).json(music);
  } catch (error) {
    res.status(404).json({ message: "Music not found" });
  }
};

exports.searchMusic = async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  }
  try {
    const musics = await MusicModel.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { artist: { $regex: query, $options: "i" } },
        { album: { $regex: query, $options: "i" } },
        { genre: { $regex: query, $options: "i" } },
      ],
    });
    res.status(200).json({ musics });
  } catch (error) {
    res.status(404).json({ message: "Musics not found" });
  }
};
