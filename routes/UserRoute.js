const express = require("express"); // Importation du framework Express
const { registerUser, loginUser } = require("../controllers/UserController"); // Importation des contrôleurs pour les actions d'enregistrement et de connexion
const router = express.Router(); // Création d'un nouveau routeur Express

// Route pour l'enregistrement des utilisateurs
router.post("/register", registerUser); // Lorsque la méthode POST est utilisée sur /register, la fonction registerUser du contrôleur est appelée

// Route pour la connexion des utilisateurs
router.post("/login", loginUser); // Lorsque la méthode POST est utilisée sur /login, la fonction loginUser du contrôleur est appelée

module.exports = router; // Exportation du routeur pour qu'il puisse être utilisé dans d'autres parties de l'application
