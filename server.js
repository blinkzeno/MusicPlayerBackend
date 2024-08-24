// Importation des modules nécessaires
const express = require('express');   // Framework pour créer le serveur web
const dotenv = require('dotenv');     // Pour charger les variables d'environnement depuis un fichier .env
const path = require('path');         // Pour gérer les chemins de fichiers
const connectDB = require('./config/database.js'); // Fonction pour se connecter à la base de données (fichier: ./config/database.js)
const cors = require('cors');         // Middleware pour gérer les requêtes entre différents domaines (CORS)

dotenv.config();  // Chargement des variables d'environnement

// Initialisation de l'application Express
const app = express();
const port = process.env.PORT || 5000; // Définir le port à partir des variables d'environnement ou utiliser 5000 par défaut

// Connexion à la base de données
connectDB();  // Appel de la fonction pour se connecter à la base de données (fichier: ./config/database.js)

// Configuration des middlewares
app.use(cors());  // Activer CORS pour permettre les requêtes de différents domaines
app.use(express.json({ extended: false })); // Middleware pour parser les corps des requêtes JSON
app.use(express.urlencoded({ extended: true })); // Middleware pour parser les corps des requêtes URL-encodées

// Rendre le dossier uploads public
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Définition des routes
app.use('/api/users', require('./routes/UserRoute')); // Route pour la gestion des utilisateurs (fichier: ./routes/UserRoute.js)
app.use('/api/musics', require('./routes/MusicRoute')); // Route pour la gestion des musiques (fichier: ./routes/MusicRoute.js)
app.use('/api/playlists', require('./routes/PlaylistRoute')); // Route pour la gestion des playlists (fichier: ./routes/PlaylistRoute.js) 
// Démarrage du serveur
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Message dans la console indiquant que le serveur est en cours d'exécution
});
