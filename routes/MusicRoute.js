const express = require('express');
const { upload } = require('../utils/Upload');
const { createMusic, uploadMusic, getAllMusics, getMusic } = require('../controllers/MusicController');


const router = express.Router();

router.get('/', getAllMusics)

router.get('/:id', getMusic)


router.post('/upload', upload.single("musicfile"),uploadMusic )

module.exports = router;