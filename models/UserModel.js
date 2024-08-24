// Importation de Mongoose
const mongoose = require("mongoose");

// Définition du schéma pour un utilisateur
const userSchema = new mongoose.Schema({
  // Définition du champ 'username'
  username: {
    type: String, // Le type de données est une chaîne de caractères
    required: true, // Ce champ est requis
    unique: true, // Ce champ doit être unique dans la collection
  },
  // Définition du champ 'email'
  email: {
    type: String, // Le type de données est une chaîne de caractères
    required: true, // Ce champ est requis
    unique: true, // Ce champ doit être unique dans la collection
  },
  // Définition du champ 'password'
  password: {
    type: String, // Le type de données est une chaîne de caractères
    required: true, // Ce champ est requis
  },
  // Définition du champ 'createdAt'
  createdAt: {
    type: Date, // Le type de données est une date
    default: Date.now, // La valeur par défaut est la date et l'heure actuelles
  },
  // Définition du champ 'musicUploads'
  musicUploads: {
    type: Array, // Le type de données est un tableau
    default: [], // La valeur par défaut est un tableau vide
  },
  // Définition du champ 'favPlaylists'
  favPlaylists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Playlist",
    },
  ],
});

// Création du modèle 'User' à partir du schéma défini
const userModel = mongoose.model("User", userSchema);

// Exportation du modèle pour qu'il soit utilisé dans d'autres fichiers
module.exports = userModel;
