---
# Music Player Backend

## Description
Ce projet est le backend d'un lecteur de musique, conçu pour gérer des utilisateurs, stocker des fichiers audio, et offrir des services de lecture de musique. Le serveur est développé en **Node.js** en utilisant le framework **Express**. Ce backend inclut des fonctionnalités telles que l'authentification des utilisateurs, le téléchargement de fichiers audio et la gestion de la base de données.

## Structure du Projet
- **`main: "server.js"`** : Le fichier principal qui démarre l'application backend.
- **Scripts** :
  - **`start: "nodemon server.js"`** : Démarre le serveur en mode développement avec Nodemon, qui redémarre le serveur automatiquement en cas de modification.
  - **`test`** : Non implémenté pour le moment.

## Dépendances

### **bcrypt**
- Version : `^5.1.1`
- **Rôle** : Sert à hacher les mots de passe des utilisateurs avant de les stocker dans la base de données, garantissant ainsi leur sécurité.

### **cors**
- Version : `^2.8.5`
- **Rôle** : Active le partage des ressources entre origines (CORS), permettant à des clients sur différents domaines d’accéder aux API du backend.

### **dotenv**
- Version : `^16.4.5`
- **Rôle** : Charge les variables d'environnement à partir d'un fichier `.env`, facilitant la gestion des configurations sensibles (comme les clés API ou les informations de connexion à la base de données).

### **express**
- Version : `^4.19.2`
- **Rôle** : Framework minimaliste pour créer des applications web en Node.js. Il gère les requêtes HTTP et facilite la mise en place des routes et middlewares.

### **fs**
- Version : `^0.0.1-security`
- **Rôle** : Fournit des méthodes pour manipuler les fichiers sur le système de fichiers. Utilisé pour lire, écrire et gérer les fichiers côté serveur.

### **fs-extra**
- Version : `^11.2.0`
- **Rôle** : Étend les fonctionnalités de `fs` avec des méthodes supplémentaires pour la gestion des fichiers (comme la copie de répertoires ou la suppression de fichiers).

### **jsonwebtoken**
- Version : `^9.0.2`
- **Rôle** : Utilisé pour la création et la vérification de JSON Web Tokens (JWT), qui sont employés pour l'authentification et la sécurisation des sessions utilisateur.

### **mongoose**
- Version : `^8.4.5`
- **Rôle** : ORM pour MongoDB. Il permet de modéliser des objets et de gérer les opérations sur la base de données MongoDB (insertion, mise à jour, suppression, etc.).

### **multer**
- Version : `^1.4.5-lts.1`
- **Rôle** : Middleware utilisé pour gérer le téléchargement de fichiers. Dans ce projet, il gère notamment les fichiers audio (musique) téléchargés par les utilisateurs.

### **slugify**
- Version : `^1.6.6`
- **Rôle** : Transforme les titres de musique ou autres chaînes de texte en slugs (chaînes formatées pour être incluses dans des URL, par exemple, en remplaçant les espaces par des tirets).

## Dépendances de Développement

### **nodemon**
- Version : `^3.1.4`
- **Rôle** : Outil de développement qui redémarre automatiquement l'application Node.js chaque fois qu'un changement dans le code est détecté.

## Auteur
- **blinkzeno**

## Licence
- **ISC**


---

# Guide d'Installation du Projet

### Prérequis

Avant de commencer, assurez-vous que vous avez installé les éléments suivants sur votre système :

- [Node.js](https://nodejs.org/) (version LTS recommandée)
- [Python 3](https://www.python.org/downloads/)
- [MongoDB](https://www.mongodb.com/try/download/community) (ou utilisez un service cloud comme MongoDB Atlas)

### Étapes d'Installation

1. **Clonez le Répertoire du Projet**

   Ouvrez un terminal et clonez le dépôt Git contenant le projet :

   ```bash
   git clone https://github.com/blinkzeno/MusicPlayerBackend.git
   cd MusicPlayerBackend
   ```

2. **Installez les Dépendances Node.js**

   Assurez-vous d'être dans le répertoire du projet, puis installez les dépendances Node.js avec npm :

   ```bash
   npm install
   ```

   Cette commande installera toutes les dépendances listées dans le fichier `package.json`.

3. **Configurez les Variables d'Environnement**

   Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement nécessaires. Exemple de contenu pour `.env` :

   ```plaintext
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/votre_base_de_donnees
   JWT_SECRET=your_jwt_secret_key
   ```

   Modifiez `MONGODB_URI` pour correspondre à l'URI de votre instance MongoDB et `JWT_SECRET` pour définir une clé secrète pour JWT.

4. **Créez un Environnement de Développement Python**

   Pour isoler les dépendances Python, il est recommandé de créer un environnement virtuel. Voici comment le faire :

   - **Créez un Environnement Virtuel**

     Dans le répertoire du projet, créez un environnement virtuel Python :

     ```bash
     python3 -m venv venv
     ```

   - **Activez l'Environnement Virtuel**

     - **Sur macOS/Linux :**

       ```bash
       source venv/bin/activate
       ```

     - **Sur Windows :**

       ```bash
       .\venv\Scripts\activate
       ```

   - **Installez les Dépendances Python**

     Assurez-vous que le fichier `requirements.txt` est présent dans le répertoire du projet. Installez les dépendances Python requises :

     ```bash
     pip install -r requirements.txt
     ```

     Si `requirements.txt` n'est pas disponible, vous pouvez installer la bibliothèque nécessaire manuellement :

     ```bash
     pip install mutagen
     ```

   - **Testez le Script Python**

     Assurez-vous que le script Python `extract_metadata.py` fonctionne correctement en le testant avec un fichier audio.

5. **Configurez le Script Python pour l'Extraction des Métadonnées**

   Assurez-vous que le script Python `extract_metadata.py` est présent dans le répertoire. Vous devez également installer les dépendances Python nécessaires. Si vous n'avez pas encore installé les bibliothèques requises, vous pouvez les installer via `pip` :

   ```bash
   pip install mutagen
   ```

   Assurez-vous que le script Python fonctionne correctement en le testant avec un fichier audio.

6. **Démarrez le Serveur Node.js**

   Une fois les dépendances installées et les variables d'environnement configurées, vous pouvez démarrer le serveur :

   ```bash
   npm start
   ```

   Le serveur sera lancé sur le port spécifié dans votre fichier `.env` (par défaut, 5000).

7. **Vérifiez que le Serveur Fonctionne**

   Ouvrez un navigateur web ou utilisez un outil comme [Postman](https://www.postman.com/) pour vérifier que le serveur fonctionne en accédant à :

   ```plaintext
   http://localhost:5000/api/users
   ```

   Cette URL devrait répondre avec une liste d'utilisateurs (si votre base de données est configurée et que des utilisateurs existent).

### Dépannage

- **Problèmes de Connexion à MongoDB** : Vérifiez que MongoDB est en cours d'exécution et que l'URI dans `.env` est correct.
- **Problèmes avec les Dépendances Python** : Assurez-vous que `mutagen` est installé et que le script Python est correct.
- **Problèmes de Serveur** : Consultez les logs pour les erreurs et vérifiez les configurations dans le fichier `.env`.

---

Ce guide devrait vous aider à configurer et démarrer votre projet. N'hésitez pas à adapter les instructions en fonction des besoins spécifiques de votre projet.

---
# mise en place du serveur
Ce code configure une application Express.js avec certaines fonctionnalités clés telles que la gestion des routes, la connexion à une base de données, et l'activation de CORS. Voici une explication ligne par ligne :

### 1. **Imports et Configuration Environnementale**
```js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database.js');
const cors = require('cors');
const { upload } = require('./utils/Upload.js');
dotenv.config();
```
- **`express`** : Importe le framework Express.js pour créer le serveur web.
- **`dotenv`** : Importe `dotenv` pour charger les variables d'environnement depuis un fichier `.env`.
- **`connectDB`** : Importe une fonction pour connecter l'application à une base de données (possiblement MongoDB).
- **`cors`** : Importe CORS pour permettre les requêtes entre différents domaines (Cross-Origin Resource Sharing).
- **`upload`** : Importation potentielle de l'utilitaire `upload` (ex: pour gérer le téléchargement de fichiers, comme dans votre projet).
- **`dotenv.config()`** : Charge les variables d'environnement à partir du fichier `.env`.

### 2. **Initialisation d'Express**
```js
const app = express();
const port = process.env.PORT || 5000;
```
- **`app`** : Initialise l'application Express.
- **`port`** : Définit le port d'écoute de l'application, soit à partir des variables d'environnement, soit par défaut à `5000`.

### 3. **Connexion à la base de données**
```js
connectDB();
```
- **`connectDB()`** : Appelle la fonction pour se connecter à la base de données (généralement MongoDB ou une autre base de données).

### 4. **Middlewares**
```js
app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
```
- **`app.use(cors())`** : Active le partage des ressources entre domaines pour permettre aux clients d'autres origines de faire des requêtes HTTP.
- **`express.json()`** : Middleware qui parse les requêtes avec un corps JSON.
- **`express.urlencoded()`** : Middleware qui parse les requêtes avec des données encodées en URL (utile pour les formulaires).

### 5. **Définition des Routes**
```js
app.use('/api/users', require('./routes/UserRoute'));
app.use('/api/musics', require('./routes/MusicRoute'));
```
- **`app.use('/api/users', require('./routes/UserRoute'))`** : Associe le routeur des utilisateurs à l'URL `/api/users`. Cela gère les requêtes comme l'inscription, la connexion, etc.
- **`app.use('/api/musics', require('./routes/MusicRoute'))`** : Associe le routeur de gestion de musique à l'URL `/api/musics`. Cela peut gérer des fonctionnalités comme le téléchargement de musique.

### 6. **Écoute du Serveur**
```js
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```
- **`app.listen(port)`** : Démarre le serveur sur le port spécifié et affiche un message dans la console pour indiquer que l'application est en cours d'exécution.

### Résumé
- Ce code initialise un serveur Express.js, connecte une base de données, configure les middlewares pour le CORS et le parsing de requêtes, et met en place deux routes pour les utilisateurs et les musiques.


> server.js

```js
// Importation des modules nécessaires
const express = require('express');   // Framework pour créer le serveur web
const dotenv = require('dotenv');     // Pour charger les variables d'environnement depuis un fichier .env
const connectDB = require('./config/database.js'); // Fonction pour se connecter à la base de données
const cors = require('cors');         // Middleware pour gérer les requêtes entre différents domaines (CORS)
const { upload } = require('./utils/Upload.js');  // Utilitaire pour le téléchargement de fichiers (si nécessaire)
dotenv.config();  // Chargement des variables d'environnement

// Initialisation de l'application Express
const app = express();
const port = process.env.PORT || 5000; // Définir le port à partir des variables d'environnement ou utiliser 5000 par défaut

// Connexion à la base de données
connectDB();  // Appel de la fonction pour se connecter à la base de données

// Configuration des middlewares
app.use(cors());  // Activer CORS pour permettre les requêtes de différents domaines
app.use(express.json({ extended: false })); // Middleware pour parser les corps des requêtes JSON
app.use(express.urlencoded({ extended: true })); // Middleware pour parser les corps des requêtes URL-encodées

// Définition des routes
app.use('/api/users', require('./routes/UserRoute')); // Route pour la gestion des utilisateurs
app.use('/api/musics', require('./routes/MusicRoute')); // Route pour la gestion des musiques

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Message dans la console indiquant que le serveur est en cours d'exécution
});
```
---
# config
## Database

Ce code est une configuration pour se connecter à une base de données MongoDB en utilisant Mongoose, une bibliothèque pour MongoDB et Node.js. Voici une explication détaillée :

```js
// Importation de Mongoose
const mongoose = require('mongoose');
```
- **`mongoose`** : Importe Mongoose, qui est une bibliothèque pour interagir avec MongoDB depuis Node.js.

```js
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
```
- **`connectDB`** : Fonction asynchrone pour établir une connexion à MongoDB.
- **`await mongoose.connect(process.env.MONGODB_URI)`** : Utilise `mongoose.connect` pour se connecter à MongoDB en utilisant l'URL de connexion stockée dans `process.env.MONGODB_URI`. La connexion est asynchrone, donc `await` est utilisé pour attendre que la connexion soit établie.
- **`console.log('MongoDB connecteD..')`** : Affiche un message dans la console si la connexion est réussie.
- **`catch (err)`** : Si une erreur se produit lors de la connexion, elle est capturée ici.
- **`console.error(err.message)`** : Affiche le message d'erreur dans la console.
- **`process.exit(1)`** : Termine le processus Node.js avec un code de sortie de `1`, ce qui indique une erreur.

```js
// Exportation de la fonction de connexion
module.exports = connectDB;
```
- **`module.exports = connectDB`** : Exporte la fonction `connectDB` pour qu'elle puisse être utilisée dans d'autres fichiers du projet.

### Résumé
- Ce code définit une fonction pour se connecter à MongoDB en utilisant Mongoose, gère les erreurs potentielles et exporte cette fonction pour utilisation ailleurs dans le projet.
---
# Models

## User model
Ce code définit un modèle Mongoose pour un utilisateur dans une base de données MongoDB. Voici une explication détaillée :

```js
// Importation de Mongoose
const mongoose = require('mongoose');

// Définition du schéma pour un utilisateur
const userSchema = new mongoose.Schema({
  // Définition du champ 'username'
  username: {
    type: String,       // Le type de données est une chaîne de caractères
    required: true,     // Ce champ est requis
    unique: true,       // Ce champ doit être unique dans la collection
  },
  // Définition du champ 'email'
  email: {
    type: String,       // Le type de données est une chaîne de caractères
    required: true,     // Ce champ est requis
    unique: true,       // Ce champ doit être unique dans la collection
  },
  // Définition du champ 'password'
  password: {
    type: String,       // Le type de données est une chaîne de caractères
    required: true,     // Ce champ est requis
  },
  // Définition du champ 'createdAt'
  createdAt: {
    type: Date,         // Le type de données est une date
    default: Date.now,  // La valeur par défaut est la date et l'heure actuelles
  },
  // Définition du champ 'musicUploads'
  musicUploads: {
    type: Array,        // Le type de données est un tableau
    default: [],        // La valeur par défaut est un tableau vide
  },
  // Définition du champ 'favPlaylists'
  favPlaylists: {
    type: Array,        // Le type de données est un tableau
    default: [],        // La valeur par défaut est un tableau vide
  }
});

// Création du modèle 'User' à partir du schéma défini
const userModel = mongoose.model('User', userSchema);

// Exportation du modèle pour qu'il soit utilisé dans d'autres fichiers
module.exports = userModel;
```

### Explication détaillée

1. **Importation de Mongoose**
   ```js
   const mongoose = require('mongoose');
   ```
   - Importation de Mongoose pour créer des modèles et interagir avec la base de données MongoDB.

2. **Définition du schéma `userSchema`**
   ```js
   const userSchema = new mongoose.Schema({
     username: {
       type: String,
       required: true,
       unique: true,
     },
     email: {
       type: String,
       required: true,
       unique: true,
     },
     password: {
       type: String,
       required: true,
     },
     createdAt: {
       type: Date,
       default: Date.now,
     },
     musicUploads: {
       type: Array,
       default: [],
     },
     favPlaylists: {
       type: Array,
       default: [],
     }
   });
   ```
   - **`username`** : Le nom d'utilisateur, de type chaîne, requis et unique.
   - **`email`** : L'adresse email, de type chaîne, requise et unique.
   - **`password`** : Le mot de passe, de type chaîne, requis.
   - **`createdAt`** : La date de création du compte, de type date, avec une valeur par défaut de la date et l'heure actuelles.
   - **`musicUploads`** : Un tableau pour stocker les téléchargements de musique de l'utilisateur, initialisé avec un tableau vide par défaut.
   - **`favPlaylists`** : Un tableau pour stocker les playlists favorites de l'utilisateur, initialisé avec un tableau vide par défaut.

3. **Création du modèle `userModel`**
   ```js
   const userModel = mongoose.model('User', userSchema);
   ```
   - Création d'un modèle `User` basé sur le schéma `userSchema`. Ce modèle permet de créer, lire, mettre à jour et supprimer des documents dans la collection MongoDB correspondante.

4. **Exportation du modèle**
   ```js
   module.exports = userModel;
   ```
   - Exportation du modèle `userModel` pour qu'il puisse être utilisé dans d'autres parties de l'application.

### Résumé
- Ce code définit un modèle Mongoose pour un utilisateur avec des champs spécifiques comme `username`, `email`, `password`, `createdAt`, `musicUploads`, et `favPlaylists`. Le modèle est ensuite exporté pour une utilisation ultérieure dans l'application.



## Music model

Ce code définit un modèle Mongoose pour une musique dans une base de données MongoDB. Voici une explication détaillée de chaque partie du code :

```js
// Importation de Mongoose
const mongoose = require('mongoose');

// Définition du schéma pour une musique
const musicSchema = new mongoose.Schema({
  // Définition du champ 'title'
  title: {
    type: String,       // Le type de données est une chaîne de caractères
    required: true,     // Ce champ est requis
  },
  // Définition du champ 'artist'
  artist: {
    type: [String],     // Le type de données est un tableau de chaînes de caractères
    required: true,     // Ce champ est requis
  },
  // Définition du champ 'album'
  album: {
    type: String,       // Le type de données est une chaîne de caractères
  },
  // Définition du champ 'genre'
  genre: {
    type: [String],     // Le type de données est un tableau de chaînes de caractères
  },
  // Définition du champ 'duration'
  duration: {
    type: Number,       // Le type de données est un nombre
    // La durée est en secondes
  },
  // Définition du champ 'fileUrl'
  fileUrl: {
    type: String,       // Le type de données est une chaîne de caractères
    required: true,     // Ce champ est requis
  },
  // Définition du champ 'coverUrl'
  coverUrl: {
    type: String,       // Le type de données est une chaîne de caractères
    // URL pour l'image de couverture
  },
  // Définition du champ 'views'
  views: {
    type: Number,       // Le type de données est un nombre
    default: 0,         // La valeur par défaut est 0
  },
  // Définition du champ 'likes'
  likes: {
    type: Number,       // Le type de données est un nombre
    default: 0,         // La valeur par défaut est 0
  },
  // Définition du champ 'uploadedBy'
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId, // Le type de données est un identifiant d'objet MongoDB
    ref: 'User',       // Référence au modèle 'User'
    required: true,    // Ce champ est requis
  },
  // Définition du champ 'createdAt'
  createdAt: {
    type: Date,        // Le type de données est une date
    default: Date.now, // La valeur par défaut est la date et l'heure actuelles
  },
});

// Création du modèle 'Music' à partir du schéma défini
const MusicModel = mongoose.model('Music', musicSchema);

// Exportation du modèle pour qu'il soit utilisé dans d'autres fichiers
module.exports = MusicModel;
```

### Explication détaillée

1. **Importation de Mongoose**
   ```js
   const mongoose = require('mongoose');
   ```
   - Importation de Mongoose pour interagir avec MongoDB.

2. **Définition du schéma `musicSchema`**
   ```js
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
   ```
   - **`title`** : Le titre de la musique, requis et de type chaîne.
   - **`artist`** : Le ou les artistes de la musique, requis et sous forme de tableau de chaînes.
   - **`album`** : L'album dans lequel la musique est publiée, optionnel et de type chaîne.
   - **`genre`** : Les genres de musique, optionnels et sous forme de tableau de chaînes.
   - **`duration`** : La durée de la musique en secondes, optionnelle et de type nombre.
   - **`fileUrl`** : L'URL du fichier de musique, requis et de type chaîne.
   - **`coverUrl`** : L'URL de l'image de couverture de la musique, optionnelle et de type chaîne.
   - **`views`** : Le nombre de vues de la musique, initialisé à 0 par défaut.
   - **`likes`** : Le nombre de likes de la musique, initialisé à 0 par défaut.
   - **`uploadedBy`** : Référence à l'utilisateur qui a téléchargé la musique, requis et de type ObjectId avec référence au modèle `User`.
   - **`createdAt`** : La date de création de la musique, initialisée à la date et l'heure actuelles par défaut.

3. **Création du modèle `MusicModel`**
   ```js
   const MusicModel = mongoose.model('Music', musicSchema);
   ```
   - Création du modèle `Music` basé sur le schéma `musicSchema`.

4. **Exportation du modèle**
   ```js
   module.exports = MusicModel;
   ```
   - Exportation du modèle `MusicModel` pour l'utiliser dans d'autres parties de l'application.

### Résumé
- Ce code définit un modèle Mongoose pour une musique avec des champs comme `title`, `artist`, `album`, `genre`, `duration`, `fileUrl`, `coverUrl`, `views`, `likes`, `uploadedBy`, et `createdAt`. Le modèle est ensuite exporté pour une utilisation dans d'autres parties de l'application.
---
# Routes

## user routes

Ce code configure les routes pour la gestion des utilisateurs dans une application Node.js utilisant le framework Express. Voici une explication détaillée :

```js
const express = require('express'); // Importation du framework Express
const { registerUser, loginUser } = require('../controllers/UserController'); // Importation des contrôleurs pour les actions d'enregistrement et de connexion
const router = express.Router(); // Création d'un nouveau routeur Express

// Route pour l'enregistrement des utilisateurs
router.post('/register', registerUser); // Lorsque la méthode POST est utilisée sur /register, la fonction registerUser du contrôleur est appelée

// Route pour la connexion des utilisateurs
router.post('/login', loginUser); // Lorsque la méthode POST est utilisée sur /login, la fonction loginUser du contrôleur est appelée

module.exports = router; // Exportation du routeur pour qu'il puisse être utilisé dans d'autres parties de l'application
```

### Explication des parties principales

1. **Importation des modules**
   ```js
   const express = require('express');
   const { registerUser, loginUser } = require('../controllers/UserController');
   ```
   - **`express`** : Le framework pour créer des serveurs web et définir des routes.
   - **`registerUser` et `loginUser`** : Fonctions importées depuis le fichier `UserController`, qui contiennent la logique pour l'enregistrement et la connexion des utilisateurs.

2. **Création d'un routeur**
   ```js
   const router = express.Router();
   ```
   - **`express.Router()`** : Crée un nouvel objet routeur pour définir des routes modulaires et gérer les requêtes HTTP.

3. **Définition des routes**
   ```js
   router.post('/register', registerUser);
   router.post('/login', loginUser);
   ```
   - **`router.post('/register', registerUser)`** : Configure la route `/register` pour accepter les requêtes POST. Lorsque cette route est accédée, la fonction `registerUser` est appelée pour gérer la logique d'enregistrement des utilisateurs.
   - **`router.post('/login', loginUser)`** : Configure la route `/login` pour accepter les requêtes POST. Lorsque cette route est accédée, la fonction `loginUser` est appelée pour gérer la logique de connexion des utilisateurs.

4. **Exportation du routeur**
   ```js
   module.exports = router;
   ```
   - **`module.exports = router`** : Exporte le routeur configuré pour qu'il puisse être utilisé dans d'autres fichiers, par exemple dans le fichier principal de l'application où les routes sont intégrées.

### Résumé
- Ce code crée un routeur Express pour gérer les routes `/register` et `/login`. Les requêtes POST vers ces routes invoquent respectivement les fonctions `registerUser` et `loginUser` du contrôleur `UserController`. Le routeur est exporté pour être utilisé ailleurs dans l'application.

## music routes

Ce code configure les routes pour la gestion des musiques dans une application Node.js utilisant le framework Express. Voici une explication détaillée :

```js
const express = require('express');  // Importation du framework Express
const { upload } = require('../utils/Upload');  // Importation du middleware pour gérer les uploads de fichiers
const { createMusic, uploadMusic, getAllMusics, getMusic, deleteMusic, updateMusic, searchMusic, getMusicsByUser } = require('../controllers/MusicController');  // Importation des contrôleurs pour les actions liées aux musiques

const router = express.Router();  // Création d'un nouveau routeur Express

// Route pour obtenir toutes les musiques
router.get('/', getAllMusics);  // Lorsque la méthode GET est utilisée sur '/', la fonction getAllMusics du contrôleur est appelée

// Route pour obtenir une musique spécifique par son ID
router.get('/:id', getMusic);  // Lorsque la méthode GET est utilisée sur '/:id', la fonction getMusic du contrôleur est appelée avec l'ID de la musique

// Route pour obtenir toutes les musiques d'un utilisateur spécifique par son ID
router.get('/user/:id', getMusicsByUser);  // Lorsque la méthode GET est utilisée sur '/user/:id', la fonction getMusicsByUser du contrôleur est appelée avec l'ID de l'utilisateur

// Route pour uploader une musique
router.post('/upload', upload.single("audioFile"), uploadMusic);  // Lorsque la méthode POST est utilisée sur '/upload', le middleware upload est utilisé pour gérer le fichier audio, puis la fonction uploadMusic du contrôleur est appelée

// Route pour supprimer une musique par son ID
router.delete('/delete/:id', deleteMusic);  // Lorsque la méthode DELETE est utilisée sur '/delete/:id', la fonction deleteMusic du contrôleur est appelée avec l'ID de la musique

// Route pour mettre à jour une musique par son ID
router.put('/update/:id', updateMusic);  // Lorsque la méthode PUT est utilisée sur '/update/:id', la fonction updateMusic du contrôleur est appelée avec l'ID de la musique

// Route pour rechercher des musiques
router.put('/search/', searchMusic);  // Lorsque la méthode PUT est utilisée sur '/search/', la fonction searchMusic du contrôleur est appelée

module.exports = router;  // Exportation du routeur pour qu'il puisse être utilisé dans d'autres parties de l'application
```

### Explication des parties principales

1. **Importation des modules**
   ```js
   const express = require('express');
   const { upload } = require('../utils/Upload');
   const { createMusic, uploadMusic, getAllMusics, getMusic, deleteMusic, updateMusic, searchMusic, getMusicsByUser } = require('../controllers/MusicController');
   ```
   - **`express`** : Framework pour créer des serveurs web et définir des routes.
   - **`upload`** : Middleware pour gérer les uploads de fichiers, importé depuis le fichier `Upload`.
   - **`createMusic`, `uploadMusic`, `getAllMusics`, `getMusic`, `deleteMusic`, `updateMusic`, `searchMusic`, `getMusicsByUser`** : Fonctions contrôleur importées depuis le fichier `MusicController` pour gérer la logique des différentes actions sur les musiques.

2. **Création d'un routeur**
   ```js
   const router = express.Router();
   ```
   - **`express.Router()`** : Crée un nouvel objet routeur pour définir des routes modulaires.

3. **Définition des routes**
   - **`router.get('/', getAllMusics)`** : Configure la route `/` pour obtenir toutes les musiques avec une méthode GET.
   - **`router.get('/:id', getMusic)`** : Configure la route `/:id` pour obtenir une musique spécifique par son ID avec une méthode GET.
   - **`router.get('/user/:id', getMusicsByUser)`** : Configure la route `/user/:id` pour obtenir toutes les musiques d'un utilisateur spécifique par son ID avec une méthode GET.
   - **`router.post('/upload', upload.single("audioFile"), uploadMusic)`** : Configure la route `/upload` pour uploader une musique. Utilise le middleware `upload` pour gérer le fichier audio avant d'appeler `uploadMusic`.
   - **`router.delete('/delete/:id', deleteMusic)`** : Configure la route `/delete/:id` pour supprimer une musique spécifique par son ID avec une méthode DELETE.
   - **`router.put('/update/:id', updateMusic)`** : Configure la route `/update/:id` pour mettre à jour une musique spécifique par son ID avec une méthode PUT.
   - **`router.put('/search/', searchMusic)`** : Configure la route `/search/` pour rechercher des musiques avec une méthode PUT.

4. **Exportation du routeur**
   ```js
   module.exports = router;
   ```
   - **`module.exports = router`** : Exporte le routeur configuré pour qu'il puisse être utilisé dans d'autres parties de l'application, par exemple dans le fichier principal de l'application.

### Résumé
- Ce code configure un routeur Express pour gérer les opérations liées aux musiques : obtenir toutes les musiques, obtenir une musique par ID, obtenir les musiques d'un utilisateur, uploader une musique, supprimer une musique, mettre à jour une musique, et rechercher des musiques. Le routeur est exporté pour être utilisé ailleurs dans l'application.

---
# utils
## jwtoken( user)
Ce code configure un utilitaire pour générer des tokens JWT (JSON Web Tokens) dans une application Node.js. Voici une explication détaillée :

```js
// /utils/token.js
const jwt = require('jsonwebtoken');  // Importation du module jsonwebtoken pour créer et vérifier des tokens JWT

// Fonction pour générer un token JWT
exports.generateToken = (user) => {
  // Création de la charge utile du token, contenant les informations de l'utilisateur
  const payload = {
    user: {
      id: user.id,  // ID de l'utilisateur
    },
  };

  // Création du token JWT avec la charge utile, la clé secrète et les options
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' });
};
```

### Explication des parties principales

1. **Importation du module `jsonwebtoken`**
   ```js
   const jwt = require('jsonwebtoken');
   ```
   - **`jsonwebtoken`** : Une bibliothèque utilisée pour créer et vérifier des JSON Web Tokens.

2. **Fonction `generateToken`**
   ```js
   exports.generateToken = (user) => {
     const payload = {
       user: {
         id: user.id,
       },
     };

     return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' });
   };
   ```
   - **`payload`** : La charge utile du token contient les informations que vous souhaitez encoder dans le token. Ici, il inclut l'ID de l'utilisateur.
   - **`jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' })`** : Crée un token JWT en utilisant :
     - **`payload`** : Les données à inclure dans le token.
     - **`process.env.JWT_SECRET`** : La clé secrète utilisée pour signer le token, stockée dans les variables d'environnement pour la sécurité.
     - **`{ expiresIn: '5d' }`** : Option pour définir la durée de vie du token, ici 5 jours. Après cette période, le token expire.

### Résumé
- Ce code définit une fonction `generateToken` qui crée un JSON Web Token pour un utilisateur en utilisant `jsonwebtoken`. Le token encode l'ID de l'utilisateur et est signé avec une clé secrète. Il est configuré pour expirer après 5 jours.

---
## upload

Ce code configure le traitement des téléchargements de fichiers audio dans une application Node.js en utilisant le middleware `multer`. Voici une explication détaillée de chaque partie du code :

```js
// Importation des modules nécessaires
const express = require('express');    // Framework pour créer des serveurs web
const multer = require('multer');      // Middleware pour la gestion des uploads de fichiers
const path = require('path');          // Module pour gérer les chemins de fichiers
const fs = require('fs-extra');        // Module pour gérer le système de fichiers avec des fonctionnalités supplémentaires

// Répertoire où les fichiers seront stockés
const uploadDir = 'uploads/musics/';

// Configuration du stockage avec Multer
const storage = multer.diskStorage({
    // Fonction pour définir le répertoire de destination du fichier uploadé
    destination: (req, file, cb) => {
        fs.ensureDir(uploadDir)  // Assure que le répertoire de destination existe
            .then(() => cb(null, uploadDir))  // Si le répertoire existe ou a été créé, continue l'upload
            .catch(err => cb(err));  // Sinon, retourne l'erreur
    },
    // Fonction pour définir le nom du fichier uploadé
    filename: (req, file, cb) => {
        // Traite le nom du fichier pour éviter les doublons
        const originalName = file.originalname;
        const fileName = originalName.replace(/\s+/g, '-').toLowerCase();  // Remplace les espaces par des tirets et convertit en minuscule
        const ext = path.extname(fileName);  // Obtenez l'extension du fichier
        const baseName = path.basename(fileName, ext);  // Obtenez le nom de base sans l'extension
        const finalName = `${baseName}${ext}`;  // Nom final du fichier avec extension
        
        const filePath = path.join(uploadDir, finalName);

        // Vérifie si le fichier existe déjà dans le répertoire
        fs.pathExists(filePath)
            .then(exists => {
                if (exists) {
                    cb(new Error('Le fichier existe déjà.'));  // Si le fichier existe déjà, retourne une erreur
                } else {
                    cb(null, finalName);  // Sinon, continue l'upload avec le nom du fichier
                }
            })
            .catch(err => cb(err));  // Retourne l'erreur en cas de problème de vérification
    }
});

// Initialisation de l'upload avec multer
const upload = multer({
    storage: storage,  // Configuration du stockage
    fileFilter: (req, file, cb) => {
        // Vérifie le type de fichier (formats audio acceptés)
        const fileTypes = /m4a|mp3|aac|wav|flac/;  // Extensions de fichiers audio autorisées
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());  // Vérifie si l'extension est valide

        // Vérifie les types MIME pour les formats audio
        const mimetype = /audio\/mp4|audio\/x-m4a|audio\/mpeg|audio\/mp3|audio\/aac|audio\/wav|audio\/flac/.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);  // Si le type MIME et l'extension sont valides, autorise l'upload
        } else {
            cb(new Error('Type de fichier non supporté. Seuls les fichiers audio sont acceptés.'));  // Sinon, retourne une erreur
        }
    }
});

// Exportation du middleware d'upload pour être utilisé dans d'autres fichiers
module.exports = { upload };
```

#### Explication des parties principales

1. **Configuration de Multer pour le stockage**
   - **`destination`** : Spécifie le répertoire où les fichiers seront sauvegardés. Utilise `fs.ensureDir` pour créer le répertoire si nécessaire.
   - **`filename`** : Définit le nom du fichier uploadé. Remplace les espaces par des tirets et vérifie si un fichier avec le même nom existe déjà. Si le fichier existe, une erreur est retournée.

2. **Initialisation de Multer avec des options**
   - **`fileFilter`** : Filtre les fichiers selon leur type. Vérifie que le fichier est un fichier audio en validant l'extension et le type MIME.

3. **Exportation**
   - **`module.exports = { upload }`** : Exporte le middleware `upload` configuré avec Multer pour qu'il puisse être utilisé dans d'autres parties de l'application.

#### Résumé
Ce code configure `multer` pour gérer les téléchargements de fichiers audio, en s'assurant que les fichiers sont stockés dans un répertoire spécifique, que les noms des fichiers sont uniques, et que seuls les types de fichiers audio spécifiés sont acceptés.

---
# extration des metadonées 

> extract_metadata.py

Ce code Python extrait les métadonnées des fichiers audio (MP3 et M4A) et les enregistre dans un format JSON. Il utilise les bibliothèques `mutagen` pour lire les tags ID3 des fichiers MP3 et les tags MP4 des fichiers M4A. Voici une explication détaillée du code :

```python
import sys  # Pour la gestion des arguments de ligne de commande et des erreurs
import json  # Pour la conversion des données en format JSON
import os  # Pour les opérations liées au système de fichiers
from mutagen.id3 import ID3, ID3NoHeaderError, APIC  # Pour lire les tags ID3 des fichiers MP3
from mutagen.mp4 import MP4  # Pour lire les tags MP4 des fichiers M4A
from mutagen.mp3 import MP3  # Pour lire la durée des fichiers MP3

def get_audio_metadata(file_path):
    try:
        # Extraire le nom de base du fichier sans l'extension
        base_name = os.path.splitext(os.path.basename(file_path))[0]

        # Dossier pour enregistrer les couvertures
        cover_dir = 'uploads/covers'
        if not os.path.exists(cover_dir):
            os.makedirs(cover_dir)

        metadata = {
            'title': 'Unknown',
            'artist': 'Unknown',
            'album': 'Unknown',
            'genre': 'Unknown',
            'duration': 'Unknown',
            'cover_url': None
        }

        if file_path.endswith('.mp3'):
            try:
                tags = ID3(file_path)
                metadata['title'] = tags.get('TIT2', ['Unknown'])[0]
                metadata['artist'] = tags.get('TPE1', ['Unknown'])[0]
                metadata['album'] = tags.get('TALB', ['Unknown'])[0]
                metadata['genre'] = tags.get('TCON', ['Unknown'])[0]

                # Récupération de la durée
                audio = MP3(file_path)
                duration = audio.info.length  # Durée en secondes
                metadata['duration'] = str(int(duration))  # Convertir en secondes entières

                # Récupération de la couverture
                for tag in tags.values():
                    if isinstance(tag, APIC):
                        cover_data = tag.data
                        cover_filename = os.path.join(cover_dir, f'{base_name}.jpg')  # Nom du fichier de couverture
                        with open(cover_filename, 'wb') as cover_file:
                            cover_file.write(cover_data)
                        metadata['cover_url'] = cover_filename

            except ID3NoHeaderError:
                print(f"Warning: No ID3 header found in '{file_path}'", file=sys.stderr)

        elif file_path.endswith('.m4a'):
            tags = MP4(file_path)
            metadata['title'] = tags.get('\xa9nam', ['Unknown'])[0]
            metadata['artist'] = tags.get('\xa9ART', ['Unknown'])[0]
            metadata['album'] = tags.get('\xa9alb', ['Unknown'])[0]
            metadata['genre'] = tags.get('\xa9gen', ['Unknown'])[0]
            metadata['duration'] = str(int(tags.info.length)) if tags.info else 'Unknown'

            # Récupération de la couverture
            if 'covr' in tags:
                cover_data = tags['covr'][0]
                cover_filename = os.path.join(cover_dir, f'{base_name}.jpg')  # Nom du fichier de couverture
                with open(cover_filename, 'wb') as cover_file:
                    cover_file.write(cover_data)
                metadata['cover_url'] = cover_filename

        return metadata

    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python extract_metadata.py <file_path>", file=sys.stderr)
        sys.exit(1)
    
    file_path = sys.argv[1]
    if not os.path.isfile(file_path):
        print(f"Error: File '{file_path}' does not exist.", file=sys.stderr)
        sys.exit(1)
    
    metadata = get_audio_metadata(file_path)
    print(json.dumps(metadata))
```

#### Explication des parties principales

1. **Imports**
   - **`sys`** : Pour gérer les arguments de ligne de commande et les erreurs.
   - **`json`** : Pour convertir les métadonnées en format JSON.
   - **`os`** : Pour les opérations sur les fichiers et les répertoires.
   - **`mutagen.id3`** : Pour lire les tags ID3 des fichiers MP3.
   - **`mutagen.mp4`** : Pour lire les tags MP4 des fichiers M4A.
   - **`mutagen.mp3`** : Pour lire la durée des fichiers MP3.

2. **Fonction `get_audio_metadata`**
   - **`base_name`** : Extrait le nom de base du fichier sans son extension.
   - **`cover_dir`** : Création d'un répertoire pour stocker les couvertures d'album.
   - **`metadata`** : Dictionnaire initialisé avec des valeurs par défaut.
   - **Gestion des fichiers MP3** :
     - **`ID3`** : Lit les tags ID3 du fichier MP3 pour extraire les informations de titre, artiste, album, genre.
     - **`MP3`** : Lit la durée du fichier MP3.
     - **Récupération de la couverture** : Cherche un tag APIC pour extraire l'image de couverture et l'enregistrer.
   - **Gestion des fichiers M4A** :
     - **`MP4`** : Lit les tags MP4 pour extraire les informations de titre, artiste, album, genre, et la durée.
     - **Récupération de la couverture** : Cherche le tag 'covr' pour extraire l'image de couverture et l'enregistrer.

3. **Bloc `if __name__ == "__main__"`**
   - **Vérifie les arguments de ligne de commande** : Assure qu'un seul argument (le chemin du fichier) est passé.
   - **Vérifie si le fichier existe** : Assure que le fichier spécifié existe.
   - **Exécute la fonction `get_audio_metadata`** : Récupère les métadonnées et les affiche en format JSON.

#### Résumé
- Ce script Python extrait les métadonnées des fichiers audio MP3 et M4A, telles que le titre, l'artiste, l'album, le genre, la durée, et la couverture d'album. Les métadonnées sont ensuite converties en JSON et affichées. Le script prend un chemin de fichier en argument et gère les erreurs potentielles, comme l'absence de fichier ou de tags.

---
# Controllers 
## user controller

### Imports
Voici un aperçu détaillé des imports utilisés dans votre code pour la gestion des utilisateurs et l'authentification :
```javascript
const userModel = require('../models/UserModel');
const { generateToken } = require('../utils/jwtoken');
const bcrypt = require('bcrypt');
```

#### 1. `userModel`
- **Description** : Ce module est une représentation de votre modèle de données pour les utilisateurs, probablement défini avec Mongoose pour interagir avec une base de données MongoDB.
- **Utilisation** : Il est utilisé pour accéder et manipuler les données des utilisateurs dans la base de données. Les opérations typiques incluent la recherche, la création, la mise à jour et la suppression des utilisateurs.

#### 2. `generateToken`
- **Description** : Cette fonction est importée depuis un fichier utilitaire (`../utils/jwtoken`) et est responsable de la génération des tokens JWT (JSON Web Tokens).
- **Utilisation** : Elle est utilisée pour créer un token sécurisé qui permet l'authentification de l'utilisateur. Le token JWT est généralement envoyé au client après l'authentification réussie pour être utilisé dans les futures requêtes pour valider l'identité de l'utilisateur.

#### 3. `bcrypt`
- **Description** : `bcrypt` est une bibliothèque pour le hashage des mots de passe. Elle fournit des fonctions pour sécuriser les mots de passe en les convertissant en hash (cryptogrammes) qui sont stockés dans la base de données.
- **Utilisation** : 
  - **Hashage des mots de passe** : Lors de l'enregistrement d'un nouvel utilisateur, le mot de passe est hashé avant d'être stocké. Cela garantit que les mots de passe ne sont jamais stockés en clair.
  - **Vérification des mots de passe** : Lors de la connexion, le mot de passe fourni par l'utilisateur est comparé au hash stocké dans la base de données pour vérifier sa validité.


### Fonction `registerUser`

```javascript
const userModel = require('../models/UserModel');
const { generateToken } = require('../utils/jwtoken');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    let user = await userModel.findOne({ $or: [{ email }, { username }] });

    if (user) {
      return res.status(400).send('User already exists');
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = new userModel({
      email,
      username,
      password: hashedPassword
    });

    // Enregistrer l'utilisateur dans la base de données
    await newUser.save();

    // Générer un token JWT pour l'utilisateur
    const jwToken = generateToken(newUser);

    // Répondre avec les détails de l'utilisateur et le token JWT
    res.status(201).json({
      message: 'User created',
      user: newUser,
      token: jwToken
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
};
```

#### Explication

1. **Vérification de l'existence de l'utilisateur** :
   - `await userModel.findOne({ $or: [{ email }, { username }] })` : Cherche un utilisateur existant avec le même email ou nom d'utilisateur.
   - Si un utilisateur est trouvé, renvoie un message d'erreur indiquant que l'utilisateur existe déjà.

2. **Hashage du mot de passe** :
   - `await bcrypt.hash(password, 10)` : Utilise `bcrypt` pour créer un hash sécurisé du mot de passe avec un facteur de coût de 10.

3. **Création et sauvegarde de l'utilisateur** :
   - `const newUser = new userModel({ ... })` : Crée un nouvel utilisateur avec les détails fournis, y compris le mot de passe hashé.
   - `await newUser.save()` : Enregistre le nouvel utilisateur dans la base de données.

4. **Génération du token JWT** :
   - `const jwToken = generateToken(newUser)` : Génère un token JWT pour l'utilisateur nouvellement créé.

5. **Réponse** :
   - Renvoie une réponse JSON avec un message de confirmation, les détails de l'utilisateur et le token JWT.

6. **Gestion des erreurs** :
   - Capture et affiche les erreurs potentielles et renvoie une réponse d'erreur appropriée.

### Fonction `loginUser`

```javascript
exports.loginUser = async (req, res) => {
   const { email, password } = req.body;

   try {
    // Vérifier si l'utilisateur existe
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).send('User not found');
    }
    // Vérifier si le mot de passe est correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).send('Invalid password');
    }
    // Générer un token JWT pour l'utilisateur
    const jwToken = generateToken(user);
    // Répondre avec les détails de l'utilisateur et le token JWT
    res.status(200).json({
      message: 'Login successful',
      user,
      token: jwToken
    });

   } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).send('Error logging in user');
  }
}
```

#### Explication

1. **Vérification de l'existence de l'utilisateur** :
   - `await userModel.findOne({ email })` : Cherche un utilisateur avec l'email fourni.
   - Si aucun utilisateur n'est trouvé, renvoie un message d'erreur indiquant que l'utilisateur n'existe pas.

2. **Vérification du mot de passe** :
   - `await bcrypt.compare(password, user.password)` : Compare le mot de passe fourni avec le mot de passe hashé stocké dans la base de données.
   - Si le mot de passe est incorrect, renvoie un message d'erreur indiquant un mot de passe invalide.

3. **Génération du token JWT** :
   - `const jwToken = generateToken(user)` : Génère un token JWT pour l'utilisateur authentifié.

4. **Réponse** :
   - Renvoie une réponse JSON avec un message de succès, les détails de l'utilisateur et le token JWT.

5. **Gestion des erreurs** :
   - Capture et affiche les erreurs potentielles et renvoie une réponse d'erreur appropriée.

Ces fonctions permettent respectivement l'enregistrement d'un nouvel utilisateur et la connexion d'un utilisateur existant en utilisant des tokens JWT pour l'authentification.


## music controller


```javascript
const path = require("path");
const MusicModel = require("../models/MusicModel");
const userModel = require("../models/UserModel");
const { exec } = require("child_process");
const { stdout, stderr } = require("process");

// Récupère toutes les musiques
exports.getAllMusics = async (req, res) => {
  try {
    // Recherche de toutes les musiques dans la base de données
    const musics = await MusicModel.find();
    res.status(200).json({ musics });
  } catch (error) {
    // Si une erreur survient, envoie un message d'erreur
    res.status(404).json({ message: "No musics found" });
  }
};

// Récupère une musique par son ID
exports.getMusic = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Music ID is required" });
  }
  try {
    // Recherche de la musique par son ID
    const music = await MusicModel.findById(id);
    res.status(200).json({ music });
  } catch (error) {
    // Si la musique n'est pas trouvée, envoie un message d'erreur
    res.status(404).json({ message: "Music not found" });
  }
};

// Récupère toutes les musiques uploadées par un utilisateur
exports.getMusicsByUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }
  try {
    // Recherche de l'utilisateur par son ID
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Recherche des musiques uploadées par cet utilisateur
    const musics = await MusicModel.find({ uploadedBy: id });
    res.status(200).json({ musics });
  } catch (error) {
    // Si les musiques ne sont pas trouvées, envoie un message d'erreur
    res.status(404).json({ message: "Musics not found" });
  }
};

// Téléverse une musique et extrait ses métadonnées
exports.uploadMusic = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const userId = req.headers["user-id"];

  try {
    // Vérifie si l'utilisateur existe
    const userFind = await userModel.findById(userId);
    if (!userFind) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(404).json({ message: "User not found" });
  }

  const filePath = path.join("./uploads/musics", req.file.filename);
  exec(`python3 extract_metadata.py "${filePath}"`, async (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to extract metadata" });
    }
    let metadata;
    try {
      // Parse les métadonnées extraites par le script Python
      metadata = JSON.parse(stdout);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ message: "Failed to extract metadata" });
    }

    console.log(req.file.filename);

    let { title, artist, album, genre, duration, cover_url } = metadata;
    const fileUrl = filePath;
    const coverUrl = cover_url ? cover_url : null;

    // Si le titre est inconnu, utilise le nom du fichier comme titre
    if (title === "Unknown") {
      title = req.file.filename;
    }

    // Vérifie si la musique existe déjà
    const musicFind = await MusicModel.findOne({ title });
    if (musicFind) {
      return res.status(400).json({ message: "Music already exists" });
    }

    // Crée un nouvel enregistrement de musique
    const music = new MusicModel({
      title,
      artist,
      album,
      genre,
      duration,
      fileUrl,
      coverUrl,
      uploadedBy: userId,
    });

    try {
      // Sauvegarde la musique dans la base de données
      const newMusic = await music.save();
      if (newMusic) {
        // Ajoute l'ID de la musique à la liste des uploads de l'utilisateur
        const user = await userModel.findById(userId);
        if (user) {
          user.musicUploads.push(newMusic._id);
          await user.save();
        }
      }
      res.status(201).json(newMusic);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
    }
  });
};

// Supprime une musique par son ID
exports.deleteMusic = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Music ID is required" });
  }
  try {
    // Supprime la musique par son ID
    const music = await MusicModel.findByIdAndDelete(id);
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    res.status(200).json({ message: "Music deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Music not found" });
  }
};

// Met à jour les informations d'une musique par son ID
exports.updateMusic = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Music ID is required" });
  }
  try {
    // Met à jour la musique avec les nouvelles données
    const music = await MusicModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    res.status(200).json(music);
  } catch (error) {
    res.status(404).json({ message: "Music not found" });
  }
};

// Recherche des musiques en fonction de la requête
exports.searchMusic = async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  }
  try {
    // Recherche des musiques correspondant à la requête
    const musics = await MusicModel.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { artist: { $regex: query, $options: "i" } },
        { album: { $regex: query, $options: "i" } },
        { genre: { $regex: query, $options: "i" } },
      ],
    });
    res.status(200).json({ musics });
  } catch (error) {
    res.status(404).json({ message: "Musics not found" });
  }
};
```

### importation

```javascript
const path = require("path");
const MusicModel = require("../models/MusicModel");
const userModel = require("../models/UserModel");
const { exec } = require("child_process");
const { stdout, stderr } = require("process");
```

#### Explication

1. **`const path = require("path");`** :
   - **Description** : Importe le module `path` de Node.js. Ce module fournit des utilitaires pour travailler avec les chemins de fichiers et de répertoires.
   - **Utilité** : Vous l'utiliserez pour manipuler et résoudre les chemins de fichiers, par exemple, pour créer des chemins de fichiers absolus ou pour obtenir l'extension de fichiers.

2. **`const MusicModel = require("../models/MusicModel");`** :
   - **Description** : Importe le modèle Mongoose `MusicModel` depuis le fichier `MusicModel.js` situé dans le répertoire `models` (chemin relatif).
   - **Utilité** : Ce modèle représente la collection de musiques dans la base de données MongoDB et vous l'utiliserez pour interagir avec les documents de cette collection (ex : créer, lire, mettre à jour, supprimer des musiques).

3. **`const userModel = require("../models/UserModel");`** :
   - **Description** : Importe le modèle Mongoose `UserModel` depuis le fichier `UserModel.js` situé dans le répertoire `models` (chemin relatif).
   - **Utilité** : Ce modèle représente la collection d'utilisateurs dans la base de données MongoDB et vous l'utiliserez pour interagir avec les documents de cette collection (ex : trouver un utilisateur, mettre à jour un utilisateur).

4. **`const { exec } = require("child_process");`** :
   - **Description** : Importe la fonction `exec` du module `child_process` de Node.js.
   - **Utilité** : La fonction `exec` permet d'exécuter des commandes système (comme des scripts Python) depuis votre code Node.js. Vous l'utilisez ici pour exécuter le script Python `extract_metadata.py` pour extraire des métadonnées des fichiers audio.

5. **`const { stdout, stderr } = require("process");`** :
   - **Description** : Importe les objets `stdout` et `stderr` du module `process` de Node.js.
   - **Utilité** : `stdout` et `stderr` sont des flux de sortie qui permettent de lire la sortie standard et les erreurs générées par les processus en cours. Vous pouvez utiliser ces flux pour capturer et afficher les sorties et erreurs des commandes exécutées (comme celles de `exec`).



### fonction getAllMusics

Voici une explication détaillée de la fonction `getAllMusics` :

```javascript
exports.getAllMusics = async (req, res) => {
  try {
    // Recherche de toutes les musiques dans la base de données
    const musics = await MusicModel.find();
    
    // Envoi de la réponse avec le statut 200 (OK) et les musiques trouvées
    res.status(200).json({ musics });
  } catch (error) {
    // En cas d'erreur, envoi d'un message d'erreur avec le statut 404 (Non trouvé)
    res.status(404).json({ message: "No musics found" });
  }
};
```

#### Explication détaillée :

1. **`exports.getAllMusics = async (req, res) => { ... }`** :
   - Cette ligne définit la fonction `getAllMusics` comme une fonction asynchrone qui sera exportée pour être utilisée ailleurs dans votre application (par exemple, dans les routes).

2. **`try { ... } catch (error) { ... }`** :
   - Le bloc `try` est utilisé pour exécuter du code qui pourrait générer des erreurs. Si une erreur se produit dans ce bloc, l'exécution passe au bloc `catch`.

3. **`const musics = await MusicModel.find();`** :
   - Utilise `MusicModel.find()` pour récupérer toutes les entrées de musique dans la collection `MusicModel` de la base de données. Le mot-clé `await` attend que la promesse soit résolue avant de continuer. Cela permet d'obtenir les données avant de les traiter.

4. **`res.status(200).json({ musics });`** :
   - Envoie une réponse HTTP au client avec un statut 200 (OK) et les données des musiques récupérées sous forme de JSON.

5. **`catch (error) { ... }`** :
   - Si une erreur survient pendant l'exécution du bloc `try`, elle est capturée ici. Dans ce cas, une réponse HTTP avec un statut 404 (Non trouvé) est envoyée, accompagnée d'un message d'erreur indiquant que les musiques n'ont pas été trouvées.

#### Utilité
Cette fonction est utilisée pour récupérer et envoyer toutes les musiques disponibles dans la base de données. C'est souvent utilisé pour afficher une liste complète des musiques dans une application.

###  function getMusic
Voici une explication détaillée de la fonction `getMusic` :

```javascript
exports.getMusic = async (req, res) => {
  const { id } = req.params;
  
  // Vérifie si l'ID de la musique est fourni
  if (!id) {
    return res.status(400).json({ message: "Music ID is required" });
  }
  
  try {
    // Recherche la musique par ID dans la base de données
    const music = await MusicModel.findById(id);
    
    // Vérifie si la musique a été trouvée
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    
    // Envoie la réponse avec le statut 200 (OK) et la musique trouvée
    res.status(200).json({ music });
  } catch (error) {
    // En cas d'erreur, envoie une réponse avec le statut 404 (Non trouvé) et un message d'erreur
    res.status(404).json({ message: "Music not found" });
  }
};
```

#### Explication détaillée :

1. **`exports.getMusic = async (req, res) => { ... }`** :
   - Définit `getMusic` comme une fonction asynchrone qui sera exportée pour être utilisée dans d'autres parties de l'application, comme les routes.

2. **`const { id } = req.params;`** :
   - Extrait l'ID de la musique à partir des paramètres de la requête (`req.params`). Cet ID est utilisé pour identifier la musique spécifique à récupérer.

3. **`if (!id) { return res.status(400).json({ message: "Music ID is required" }); }`** :
   - Vérifie si l'ID est présent dans les paramètres. Si l'ID est absent, envoie une réponse HTTP avec le statut 400 (Mauvaise requête) et un message d'erreur indiquant que l'ID de la musique est requis.

4. **`const music = await MusicModel.findById(id);`** :
   - Utilise `MusicModel.findById(id)` pour rechercher la musique dans la base de données en utilisant l'ID fourni. Le mot-clé `await` attend que la promesse soit résolue pour obtenir les résultats.

5. **`if (!music) { return res.status(404).json({ message: "Music not found" }); }`** :
   - Vérifie si une musique a été trouvée avec l'ID donné. Si aucune musique n'est trouvée, envoie une réponse HTTP avec le statut 404 (Non trouvé) et un message d'erreur.

6. **`res.status(200).json({ music });`** :
   - Envoie une réponse HTTP avec le statut 200 (OK) et les détails de la musique trouvée sous forme de JSON.

7. **`catch (error) { res.status(404).json({ message: "Music not found" }); }`** :
   - En cas d'erreur (par exemple, un problème de connexion à la base de données), envoie une réponse HTTP avec le statut 404 (Non trouvé) et un message d'erreur. 

#### Utilité
Cette fonction est utilisée pour récupérer une musique spécifique en fonction de son ID. C'est souvent utilisé pour afficher les détails d'une musique particulière dans une application.

### function getMusicsByUser
Voici une explication détaillée de la fonction `getMusicsByUser` :

```javascript
exports.getMusicsByUser = async (req, res) => {
  const { id } = req.params;
  
  // Vérifie si l'ID de l'utilisateur est fourni
  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }
  
  try {
    // Recherche l'utilisateur par ID dans la base de données
    const user = await userModel.findById(id);
    
    // Vérifie si l'utilisateur a été trouvé
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Recherche toutes les musiques associées à cet utilisateur
    const musics = await MusicModel.find({ uploadedBy: id });
    
    // Envoie la réponse avec le statut 200 (OK) et les musiques trouvées
    res.status(200).json({ musics });
  } catch (error) {
    // En cas d'erreur, envoie une réponse avec le statut 404 (Non trouvé) et un message d'erreur
    res.status(404).json({ message: "Musics not found" });
  }
};
```

#### Explication détaillée :

1. **`exports.getMusicsByUser = async (req, res) => { ... }`** :
   - Définit la fonction `getMusicsByUser` comme une fonction asynchrone. Cette fonction sera exportée pour être utilisée dans les routes ou ailleurs dans l'application.

2. **`const { id } = req.params;`** :
   - Extrait l'ID de l'utilisateur à partir des paramètres de la requête (`req.params`). Cet ID est utilisé pour rechercher les musiques associées à cet utilisateur.

3. **`if (!id) { return res.status(400).json({ message: "User ID is required" }); }`** :
   - Vérifie si l'ID de l'utilisateur est présent dans les paramètres de la requête. Si l'ID est absent, renvoie une réponse HTTP avec le statut 400 (Mauvaise requête) et un message d'erreur indiquant que l'ID de l'utilisateur est requis.

4. **`const user = await userModel.findById(id);`** :
   - Recherche l'utilisateur dans la base de données en utilisant `userModel.findById(id)`. Le mot-clé `await` attend que la promesse soit résolue pour obtenir l'utilisateur.

5. **`if (!user) { return res.status(404).json({ message: "User not found" }); }`** :
   - Vérifie si l'utilisateur a été trouvé. Si l'utilisateur n'existe pas, renvoie une réponse HTTP avec le statut 404 (Non trouvé) et un message d'erreur.

6. **`const musics = await MusicModel.find({ uploadedBy: id });`** :
   - Recherche toutes les musiques dans `MusicModel` qui ont été téléchargées par l'utilisateur dont l'ID est fourni. La propriété `uploadedBy` dans `MusicModel` est utilisée pour associer les musiques à l'utilisateur.

7. **`res.status(200).json({ musics });`** :
   - Renvoie une réponse HTTP avec le statut 200 (OK) et les musiques trouvées sous forme de JSON.

8. **`catch (error) { res.status(404).json({ message: "Musics not found" }); }`** :
   - En cas d'erreur (par exemple, problème de connexion à la base de données), renvoie une réponse HTTP avec le statut 404 (Non trouvé) et un message d'erreur indiquant que les musiques n'ont pas été trouvées.

#### Utilité
Cette fonction est utilisée pour récupérer toutes les musiques téléchargées par un utilisateur spécifique. C'est utile pour afficher les musiques que chaque utilisateur a uploadées dans une application.

### function UploadMusic
Voici une explication détaillée de la fonction `uploadMusic` :

```javascript
exports.uploadMusic = async (req, res) => {
  // Vérifie si un fichier a été uploadé
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  
  // Récupère l'ID de l'utilisateur à partir des en-têtes de la requête
  const userId = req.headers["user-id"];

  try {
    // Recherche l'utilisateur dans la base de données
    const userFind = await userModel.findById(userId);
    
    // Vérifie si l'utilisateur existe
    if (!userFind) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(404).json({ message: "User not found" });
  }

  // Détermine le chemin complet du fichier uploadé
  const filePath = path.join("./uploads/musics", req.file.filename);

  // Exécute un script Python pour extraire les métadonnées du fichier audio
  exec(`python3 extract_metadata.py "${filePath}"`, async (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to extract metadata" });
    }
    
    let metadata;
    try {
      // Parse les métadonnées extraites du script Python
      metadata = JSON.parse(stdout);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ message: "Failed to extract metadata" });
    }

    console.log(req.file.filename);

    let { title, artist, album, genre, duration, cover_url } = metadata;
    const fileUrl = filePath;
    const coverUrl = cover_url ? cover_url : null;

    // Si le titre est "Unknown", utilise le nom du fichier comme titre
    if (title === "Unknown") {
      title = req.file.filename;
    }

    // Vérifie si une musique avec ce titre existe déjà
    const musicFind = await MusicModel.findOne({ title });
    if (musicFind) {
      return res.status(400).json({ message: "Music already exists" });
    }

    // Crée un nouvel objet de musique
    const music = new MusicModel({
      title,
      artist,
      album,
      genre,
      duration,
      fileUrl,
      coverUrl,
      uploadedBy: userId,
    });

    try {
      // Sauvegarde la nouvelle musique dans la base de données
      const newMusic = await music.save();
      if (newMusic) {
        // Met à jour les informations de l'utilisateur avec la musique uploadée
        const user = await userModel.findById(userId);
        if (user) {
          user.musicUploads.push(newMusic._id);
          await user.save();
        }
      }
      // Renvoie la réponse avec la musique nouvellement créée
      res.status(201).json(newMusic);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
    }
  });
};
```

#### Explication détaillée :

1. **Vérification du fichier uploadé** :
   - `if (!req.file) { return res.status(400).send("No file uploaded."); }` :
     - Vérifie si un fichier a été uploadé dans la requête. Si ce n'est pas le cas, renvoie une réponse avec le statut 400 (Mauvaise requête) et un message indiquant qu'aucun fichier n'a été uploadé.

2. **Récupération et validation de l'utilisateur** :
   - `const userId = req.headers["user-id"];` :
     - Récupère l'ID de l'utilisateur à partir des en-têtes de la requête.
   - `const userFind = await userModel.findById(userId);` :
     - Recherche l'utilisateur dans la base de données.
   - `if (!userFind) { return res.status(404).json({ message: "User not found" }); }` :
     - Vérifie si l'utilisateur existe. Si l'utilisateur n'est pas trouvé, renvoie une réponse avec le statut 404 (Non trouvé).

3. **Extraction des métadonnées** :
   - `const filePath = path.join("./uploads/musics", req.file.filename);` :
     - Détermine le chemin complet du fichier uploadé.
   - `exec(`python3 extract_metadata.py "${filePath}"`, ...);` :
     - Exécute un script Python pour extraire les métadonnées du fichier audio.
   - `if (err) { ... }` :
     - En cas d'erreur lors de l'exécution du script, renvoie une réponse avec le statut 500 (Erreur serveur).

4. **Traitement des métadonnées** :
   - `metadata = JSON.parse(stdout);` :
     - Parse les métadonnées extraites du script Python.
   - `if (title === "Unknown") { title = req.file.filename; }` :
     - Si le titre est "Unknown", utilise le nom du fichier comme titre.

5. **Vérification de la musique existante** :
   - `const musicFind = await MusicModel.findOne({ title });` :
     - Vérifie si une musique avec le même titre existe déjà.
   - `if (musicFind) { return res.status(400).json({ message: "Music already exists" }); }` :
     - Si la musique existe déjà, renvoie une réponse avec le statut 400 (Mauvaise requête).

6. **Création et sauvegarde de la musique** :
   - `const music = new MusicModel({ ... });` :
     - Crée un nouvel objet de musique avec les métadonnées extraites.
   - `const newMusic = await music.save();` :
     - Sauvegarde la nouvelle musique dans la base de données.
   - `if (newMusic) { ... }` :
     - Si la musique est sauvegardée avec succès, met à jour les informations de l'utilisateur pour inclure la musique uploadée.

7. **Réponse finale** :
   - `res.status(201).json(newMusic);` :
     - Renvoie une réponse avec le statut 201 (Créé) et les détails de la musique nouvellement créée.

8. **Gestion des erreurs** :
   - `catch (error) { ... }` :
     - En cas d'erreur lors de la sauvegarde de la musique ou de la mise à jour de l'utilisateur, renvoie une réponse avec le statut 500 (Erreur serveur) et le message d'erreur. 

### Utilité
Cette fonction gère le processus d'upload d'une musique, y compris l'extraction des métadonnées, la vérification des duplicatas, et l'association de la musique avec un utilisateur spécifique.

### function deleteMusic
Voici une explication détaillée de la fonction `deleteMusic` :

```javascript
exports.deleteMusic = async (req, res) => {
  // Récupère l'ID de la musique à partir des paramètres de la requête
  const { id } = req.params;

  // Vérifie si l'ID a été fourni dans la requête
  if (!id) {
    return res.status(400).json({ message: "Music ID is required" });
  }

  try {
    // Cherche et supprime la musique de la base de données en utilisant l'ID
    const music = await MusicModel.findByIdAndDelete(id);

    // Vérifie si la musique a été trouvée et supprimée
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }

    // Renvoie une réponse confirmant que la musique a été supprimée avec succès
    res.status(200).json({ message: "Music deleted successfully" });
  } catch (error) {
    // En cas d'erreur, renvoie une réponse avec le statut 404 (Non trouvé)
    res.status(404).json({ message: "Music not found" });
  }
};
```

#### Explication détaillée :

1. **Récupération de l'ID de la musique** :
   - `const { id } = req.params;` :
     - Extrait l'ID de la musique des paramètres de la requête (`req.params`).

2. **Vérification de la présence de l'ID** :
   - `if (!id) { return res.status(400).json({ message: "Music ID is required" }); }` :
     - Vérifie si l'ID a été fourni. Si l'ID est manquant, renvoie une réponse avec le statut 400 (Mauvaise requête) et un message indiquant que l'ID de la musique est requis.

3. **Suppression de la musique** :
   - `const music = await MusicModel.findByIdAndDelete(id);` :
     - Utilise la méthode `findByIdAndDelete` de Mongoose pour trouver la musique par son ID et la supprimer de la base de données.

4. **Vérification si la musique a été trouvée et supprimée** :
   - `if (!music) { return res.status(404).json({ message: "Music not found" }); }` :
     - Vérifie si une musique avec l'ID fourni a été trouvée et supprimée. Si aucune musique n'a été trouvée, renvoie une réponse avec le statut 404 (Non trouvé) et un message indiquant que la musique n'a pas été trouvée.

5. **Réponse de succès** :
   - `res.status(200).json({ message: "Music deleted successfully" });` :
     - Renvoie une réponse avec le statut 200 (OK) et un message confirmant que la musique a été supprimée avec succès.

6. **Gestion des erreurs** :
   - `catch (error) { res.status(404).json({ message: "Music not found" }); }` :
     - En cas d'erreur lors de la suppression, renvoie une réponse avec le statut 404 (Non trouvé) et un message indiquant que la musique n'a pas été trouvée. Cela peut couvrir les cas où une erreur s'est produite dans la recherche ou la suppression de la musique.

#### Utilité
Cette fonction gère la suppression d'une musique spécifique en se basant sur son ID. Elle vérifie d'abord la présence de l'ID, puis tente de supprimer la musique correspondante de la base de données, tout en fournissant des messages appropriés en cas de succès ou d'erreur.

### function updateMusic
Voici une explication détaillée de la fonction `updateMusic` :

```javascript
exports.updateMusic = async (req, res) => {
  // Récupère l'ID de la musique à partir des paramètres de la requête
  const { id } = req.params;

  // Vérifie si l'ID a été fourni dans la requête
  if (!id) {
    return res.status(400).json({ message: "Music ID is required" });
  }

  try {
    // Met à jour la musique avec l'ID spécifié en utilisant les données fournies dans le corps de la requête
    const music = await MusicModel.findByIdAndUpdate(id, req.body, {
      new: true, // Retourne le document mis à jour
    });

    // Vérifie si la musique a été trouvée et mise à jour
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }

    // Renvoie le document mis à jour
    res.status(200).json(music);
  } catch (error) {
    // En cas d'erreur, renvoie une réponse avec le statut 404 (Non trouvé)
    res.status(404).json({ message: "Music not found" });
  }
};
```

#### Explication détaillée :

1. **Récupération de l'ID de la musique** :
   - `const { id } = req.params;` :
     - Extrait l'ID de la musique des paramètres de la requête (`req.params`).

2. **Vérification de la présence de l'ID** :
   - `if (!id) { return res.status(400).json({ message: "Music ID is required" }); }` :
     - Vérifie si l'ID a été fourni. Si l'ID est manquant, renvoie une réponse avec le statut 400 (Mauvaise requête) et un message indiquant que l'ID de la musique est requis.

3. **Mise à jour de la musique** :
   - `const music = await MusicModel.findByIdAndUpdate(id, req.body, { new: true });` :
     - Utilise la méthode `findByIdAndUpdate` de Mongoose pour trouver la musique par son ID et la mettre à jour avec les données fournies dans `req.body`. L'option `{ new: true }` indique que la méthode doit retourner le document mis à jour plutôt que l'original.

4. **Vérification si la musique a été trouvée et mise à jour** :
   - `if (!music) { return res.status(404).json({ message: "Music not found" }); }` :
     - Vérifie si une musique avec l'ID fourni a été trouvée et mise à jour. Si aucune musique n'a été trouvée, renvoie une réponse avec le statut 404 (Non trouvé) et un message indiquant que la musique n'a pas été trouvée.

5. **Réponse de succès** :
   - `res.status(200).json(music);` :
     - Renvoie le document mis à jour avec le statut 200 (OK).

6. **Gestion des erreurs** :
   - `catch (error) { res.status(404).json({ message: "Music not found" }); }` :
     - En cas d'erreur lors de la mise à jour, renvoie une réponse avec le statut 404 (Non trouvé) et un message indiquant que la musique n'a pas été trouvée. Cela peut couvrir les cas où une erreur s'est produite dans la recherche ou la mise à jour de la musique.

#### Utilité
Cette fonction gère la mise à jour des informations d'une musique spécifique en se basant sur son ID. Elle vérifie la présence de l'ID, met à jour les données de la musique dans la base de données en utilisant les informations fournies, et fournit des réponses appropriées en cas de succès ou d'erreur.

### function searchMusic
Voici une explication détaillée de la fonction `searchMusic` :

```javascript
exports.searchMusic = async (req, res) => {
  // Récupère la valeur de la requête de recherche depuis les paramètres de la requête
  const { query } = req.query;

  // Vérifie si la requête de recherche est fournie
  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  }

  try {
    // Effectue une recherche dans la collection MusicModel
    const musics = await MusicModel.find({
      $or: [
        { title: { $regex: query, $options: "i" } }, // Recherche par titre (insensible à la casse)
        { artist: { $regex: query, $options: "i" } }, // Recherche par artiste (insensible à la casse)
        { album: { $regex: query, $options: "i" } }, // Recherche par album (insensible à la casse)
        { genre: { $regex: query, $options: "i" } }, // Recherche par genre (insensible à la casse)
      ],
    });

    // Renvoie les musiques trouvées avec un statut 200 (OK)
    res.status(200).json({ musics });
  } catch (error) {
    // En cas d'erreur, renvoie une réponse avec le statut 404 (Non trouvé)
    res.status(404).json({ message: "Musics not found" });
  }
};
```

#### Explication détaillée :

1. **Récupération de la requête de recherche** :
   - `const { query } = req.query;` :
     - Extrait le paramètre `query` des paramètres de la requête (`req.query`). Cela correspond à la chaîne de caractères utilisée pour rechercher des musiques.

2. **Vérification de la présence de la requête de recherche** :
   - `if (!query) { return res.status(400).json({ message: "Query is required" }); }` :
     - Vérifie si le paramètre de recherche `query` est fourni. Si ce n'est pas le cas, renvoie une réponse avec le statut 400 (Mauvaise requête) et un message indiquant que la requête est requise.

3. **Recherche des musiques** :
   - `const musics = await MusicModel.find({ $or: [...] });` :
     - Utilise la méthode `find` de Mongoose pour rechercher des documents dans la collection `MusicModel` où au moins un des critères dans le tableau `$or` est vrai. Les critères de recherche incluent :
       - `title`: Titre de la musique, utilisant une expression régulière (`$regex`) pour effectuer une recherche insensible à la casse (`$options: "i"`).
       - `artist`: Artiste de la musique.
       - `album`: Album de la musique.
       - `genre`: Genre de la musique.
     - Les expressions régulières permettent de trouver des correspondances partielles dans les champs spécifiés.

4. **Réponse de succès** :
   - `res.status(200).json({ musics });` :
     - Renvoie les musiques trouvées en réponse avec le statut 200 (OK). Les musiques sont envoyées sous forme d'objet JSON.

5. **Gestion des erreurs** :
   - `catch (error) { res.status(404).json({ message: "Musics not found" }); }` :
     - En cas d'erreur lors de la recherche des musiques, renvoie une réponse avec le statut 404 (Non trouvé) et un message indiquant que les musiques n'ont pas été trouvées.

#### Utilité
La fonction `searchMusic` permet de rechercher des musiques dans la base de données en fonction de différents critères (titre, artiste, album, genre) et renvoie les résultats correspondant à la requête de recherche fournie. Cela permet aux utilisateurs de trouver des musiques basées sur des termes de recherche partiels ou complets dans différents champs de la collection de musiques.



#### Résumé des fonctionnalités

1. **`getAllMusics`** : Récupère toutes les musiques présentes dans la base de données.
2. **`getMusic`** : Récupère une musique spécifique par son ID.
3. **`getMusicsByUser`** : Récupère toutes les musiques uploadées par un utilisateur spécifique.
4. **`uploadMusic`** : Téléverse une nouvelle musique, extrait ses métadonnées via un script Python, et enregistre la musique dans la base de données. Associe également la musique à l'utilisateur qui l'a uploadée.
5. **`deleteMusic`** : Supprime une musique de la base de données par son ID.
6. **`updateMusic`** : Met à jour les informations d'une musique existante par son ID.
7. **`searchMusic`** : Recherche des musiques en fonction d'une requête de recherche (titre, artiste, album, genre).
