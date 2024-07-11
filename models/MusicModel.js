const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: [String],
    required: true,
  },
  album: {
    type: String,
  },
  genre: {
    type: [String],
  },
  duration: {
    type: Number, // Duration in seconds
  },
  fileUrl: {
    type: String,
    required: true,
  },
  coverUrl: {
    type: String, // URL to the cover image
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MusicModel = mongoose.model('Music', musicSchema);

module.exports = MusicModel;