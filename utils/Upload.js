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
