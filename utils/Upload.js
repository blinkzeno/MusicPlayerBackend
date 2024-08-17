const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');

const uploadDir = 'uploads/musics/';
// Configuration du stockage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       
        

        fs.ensureDir(uploadDir)
            .then(() => cb(null, uploadDir))
            .catch(err => cb(err));
    },
    filename: (req, file, cb) => {
        // Traite le nom du fichier pour éviter les doublons
        const originalName = file.originalname;
        const fileName = originalName.replace(/\s+/g, '-').toLowerCase();
        const ext = path.extname(fileName);
        const baseName = path.basename(fileName, ext);
        const finalName = `${baseName}${ext}`;
        
        const filePath = path.join(uploadDir, finalName);

        // Vérifier si le fichier existe déjà dans le répertoire 
        fs.pathExists(filePath)
            .then(exists => {
                if (exists) {
                    cb(new Error('Le fichier existe déjà.'));
                } else {
                    cb(null, finalName); // Si le fichier n'existe pas, continue l'upload
                }
            })
            .catch(err => cb(err));
    }
});

// Initialisation de l'upload avec multer
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Vérification du type de fichier (formats audio)
        const fileTypes = /m4a|mp3|aac|wav|flac/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

        // Ajout de plusieurs types MIME pour .m4a
        const mimetype = /audio\/mp4|audio\/x-m4a|audio\/mpeg|audio\/mp3|audio\/aac|audio\/wav|audio\/flac/.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Type de fichier non supporté. Seuls les fichiers audio sont acceptés.'));
        }
    }
});




module.exports = { upload };
