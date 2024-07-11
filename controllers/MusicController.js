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
  try {
    const music = await MusicModel.findById(id);
    res.status(200).json({ music });
  } catch (error) {
    res.status(404).json({ message: "Music not found" });
  }
  
};




exports.uploadMusic= async (req, res) => {
   if (!req.file) {
     return res.status(400).send("No file uploaded.");
   }
   const userId =  req.headers['user-id'];

 try {
    const userfind = await userModel.findById(userId);
    if(!userfind) {
      return res.status(404).json({ message: "User not found" });
    }
   
 } catch (error) {
    return res.status(404).json({ message: "User not found" });
 }
   const filePath = path.join("./uploads/musics", req.file.filename);
   console.log(req.file.filename);
   let { title, artist, album, genre, duration, fileUrl, coverUrl } = await getMusicMetadata(filePath);

   if(title == "Unknown" ) {
     title = req.file.filename;
   }

   const musicfind =  await MusicModel.findOne({ title });
   if (musicfind) {
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

