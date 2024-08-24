// Importation de Mongoose
const mongoose = require("mongoose");

// Définition du schéma pour une musique
const musicSchema = new mongoose.Schema({
  // Définition du champ 'title'
  title: {
    type: String, // Le type de données est une chaîne de caractères
    required: true, // Ce champ est requis
  },
  // Définition du champ 'artist'
  artist: {
    type: [String], // Le type de données est un tableau de chaînes de caractères
    required: true, // Ce champ est requis
  },
  // Définition du champ 'album'
  album: {
    type: String, // Le type de données est une chaîne de caractères
  },
  // Définition du champ 'genre'
  genre: {
    type: [String], // Le type de données est un tableau de chaînes de caractères
  },
  // Définition du champ 'duration'
  duration: {
    type: Number, // Le type de données est un nombre
    // La durée est en secondes
  },
  // Définition du champ 'fileUrl'
  fileUrl: {
    type: String, // Le type de données est une chaîne de caractères
    required: true, // Ce champ est requis
  },
  // Définition du champ 'coverUrl'
  coverUrl: {
    type: String, // Le type de données est une chaîne de caractères
    // URL pour l'image de couverture
  },
  // Définition du champ 'views'
  views: {
    type: Number, // Le type de données est un nombre
    default: 0, // La valeur par défaut est 0
  },
  // Définition du champ 'likes'
  likes: {
    type: Number, // Le type de données est un nombre
    default: 0, // La valeur par défaut est 0
  },
  // Définition du champ 'uploadedBy'
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId, // Le type de données est un identifiant d'objet MongoDB
    ref: "User", // Référence au modèle 'User'
    required: true, // Ce champ est requis
  },
  // Définition du champ 'createdAt'
  createdAt: {
    type: Date, // Le type de données est une date
    default: Date.now, // La valeur par défaut est la date et l'heure actuelles
  },
});

// Création du modèle 'Music' à partir du schéma défini
const MusicModel = mongoose.model("Music", musicSchema);

// Exportation du modèle pour qu'il soit utilisé dans d'autres fichiers
module.exports = MusicModel;
