const express = require("express"); // Importation du framework Express
const { upload } = require("../utils/Upload"); // Importation du middleware pour gérer les uploads de fichiers
const {
  uploadMusic,
  getAllMusics,
  getMusic,
  deleteMusic,
  updateMusic,
  searchMusic,
  getMusicsByUser,
} = require("../controllers/MusicController"); // Importation des contrôleurs pour les actions liées aux musiques

const router = express.Router(); // Création d'un nouveau routeur Express

// Route pour obtenir toutes les musiques
router.get("/", getAllMusics); // Lorsque la méthode GET est utilisée sur '/', la fonction getAllMusics du contrôleur est appelée

// Route pour obtenir une musique spécifique par son ID
router.get("/:id", getMusic); // Lorsque la méthode GET est utilisée sur '/:id', la fonction getMusic du contrôleur est appelée avec l'ID de la musique

// Route pour obtenir toutes les musiques d'un utilisateur spécifique par son ID
router.get("/user/:id", getMusicsByUser); // Lorsque la méthode GET est utilisée sur '/user/:id', la fonction getMusicsByUser du contrôleur est appelée avec l'ID de l'utilisateur

// Route pour uploader une musique
router.post("/upload", upload.single("audioFile"), uploadMusic); // Lorsque la méthode POST est utilisée sur '/upload', le middleware upload est utilisé pour gérer le fichier audio, puis la fonction uploadMusic du contrôleur est appelée

// Route pour supprimer une musique par son ID
router.delete("/delete/:id", deleteMusic); // Lorsque la méthode DELETE est utilisée sur '/delete/:id', la fonction deleteMusic du contrôleur est appelée avec l'ID de la musique

// Route pour mettre à jour une musique par son ID
router.put("/update/:id", updateMusic); // Lorsque la méthode PUT est utilisée sur '/update/:id', la fonction updateMusic du contrôleur est appelée avec l'ID de la musique

// Route pour rechercher des musiques
router.put("/search/", searchMusic); // Lorsque la méthode PUT est utilisée sur '/search/', la fonction searchMusic du contrôleur est appelée

module.exports = router; // Exportation du routeur pour qu'il puisse être utilisé dans d'autres parties de l'application
