// /utils/token.js
const jwt = require("jsonwebtoken"); // Importation du module jsonwebtoken pour créer et vérifier des tokens JWT

// Fonction pour générer un token JWT
exports.generateToken = (user) => {
  // Création de la charge utile du token, contenant les informations de l'utilisateur
  const payload = {
    user: {
      id: user.id, // ID de l'utilisateur
    },
  };

  // Création du token JWT avec la charge utile, la clé secrète et les options
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5d" });
};
