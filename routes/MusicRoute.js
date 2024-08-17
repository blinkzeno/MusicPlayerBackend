const express = require('express');
const { upload } = require('../utils/Upload');
const { createMusic, uploadMusic, getAllMusics, getMusic, deleteMusic, updateMusic, searchMusic, getMusicsByUser } = require('../controllers/MusicController');


const router = express.Router();

router.get('/', getAllMusics)

router.get('/:id', getMusic)

router.get('/user/:id', getMusicsByUser)


router.post('/upload', upload.single("audioFile"),uploadMusic )

router.delete('/delete/:id', deleteMusic)

router.put('/update/:id', updateMusic)

router.put('/search/', searchMusic)

module.exports = router;