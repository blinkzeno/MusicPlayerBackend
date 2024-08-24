const path = require("path");
const MusicModel = require("../models/MusicModel");
const userModel = require("../models/UserModel");
const { exec } = require("child_process");
const { stdout, stderr } = require("process");
const fs = require("fs");

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
  exec(
    `python3 extract_metadata.py "${filePath}"`,
    async (err, stdout, stderr) => {
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
    }
  );
};

exports.deleteMusic = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "L'ID de la musique est requis" });
  }

  try {
    const music = await MusicModel.findByIdAndDelete(id);

    if (!music) {
      return res.status(404).json({ message: "Musique non trouvée" });
    }

    // Fonction pour supprimer un fichier si il existe
    const deleteFileIfExists = (filePath) => {
      if (filePath && fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    };

    // Supprimer la musique et son cover
    deleteFileIfExists(music.fileUrl);
    deleteFileIfExists(music.coverUrl);

    // Mettre à jour l'utilisateur
    const user = await userModel.findById(music.uploadedBy);
    if (user) {
      user.musicUploads.pull(music._id);
      await user.save();
    }

    res.status(200).json({ message: "Musique supprimée avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la suppression de la musique",
        error: error.message,
      });
  }
};

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
