const express = require("express");
const {
  getAllPlaylists,
  getPlaylist,
  getPlaylistsByUser,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
} = require("../controllers/PlaylistController");

const router = express.Router();

// retourne toutes les playlists
router.get("/", getAllPlaylists);
// retourne une playlist par son id
router.get("/:id", getPlaylist);
// retourne toutes les playlists d'un utilisateur
router.get("/user/:id", getPlaylistsByUser);
// crée une playlist
router.post("/createPlaylist/", createPlaylist);
// met à jour une playlist
router.put("/update/:id", updatePlaylist);
// supprime une playlist
router.delete("/delete/:id", deletePlaylist);

module.exports = router;
