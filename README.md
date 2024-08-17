
---

## Guide d'Installation du Projet

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