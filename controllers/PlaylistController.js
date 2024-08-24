const PlaylistModel = require("../models/PlaylistModel");
const userModel = require("../models/UserModel");

exports.getAllPlaylists = async (req, res) => {
    try {
      const playlists = await PlaylistModel.find();
      res.json(playlists);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch playlists' });
    }
  };

exports.getPlaylist = async (req, res) => {
    try {
      const playlist = await PlaylistModel.findById(req.params.id);
      if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
      }
      res.json(playlist);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch playlist' });
    }
  };

  exports.getPlaylistsByUser = async (req, res) => {
    try {
      const playlists = await PlaylistModel.find({ createdBy: req.params.id });
      res.json(playlists);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch playlists' });
    }
  }

  exports.createPlaylist = async (req, res) => {
    try {
      const createdBy = req.headers['user-id'];

      const user = await userModel.findById(createdBy);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
    
      const { name, description, musics } = req.body;
      //verifier si musics contient plus d'une musique
  
      if (musics && musics.length < 2) {
        return res.status(400).json({ error: 'playlist doit contenir au moins 2 musiques' });
      }
      // create playlist
      const playlist = new PlaylistModel({ name, description, musics, createdBy });
      await playlist.save();
      // update user with  new playlist
      user.favPlaylists.push(playlist._id);
      await user.save();
    
      res.json(playlist);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create playlist' });
    }
  };

  exports.updatePlaylist = async (req, res) => {
    try {
      const { name, description, musics } = req.body;
      const playlist = await PlaylistModel.findByIdAndUpdate(req.params.id, { name, description, musics });
      if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
      }
      res.json(playlist);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update playlist' });
    }
  };

  exports.deletePlaylist = async (req, res) => {
    try {
      const playlist = await PlaylistModel.findByIdAndDelete(req.params.id);
      if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
      }
      const user = await userModel.findById(playlist.createdBy);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      user.favPlaylists = user.favPlaylists.filter(playlistId => playlistId.toString() !== req.params.id);
      await user.save();

      res.json({ message: 'Playlist deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete playlist' });
    }
  };

