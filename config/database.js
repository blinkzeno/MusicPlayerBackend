
// Importation de Mongoose
const mongoose = require('mongoose');

// Fonction asynchrone pour connecter à la base de données
const connectDB = async () => {
  try {
    // Tentative de connexion à MongoDB avec l'URL spécifiée dans les variables d'environnement
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connecteD..'); // Message dans la console pour indiquer que la connexion a réussi
  } catch (err) {
    // En cas d'erreur, afficher le message d'erreur et terminer le processus
    console.error(err.message);
    process.exit(1); // Code de sortie 1 pour indiquer une erreur
  }
};

// Exportation de la fonction de connexion
module.exports = connectDB;


// Fonction asynchrone pour connecter à la base de données
