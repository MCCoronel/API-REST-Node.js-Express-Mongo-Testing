const express = require('express');
const router = express.Router();
const controller_tracks = require('../controllers/controller_tracks');

//Rutas TRACKS
router.get('/', controller_tracks.getTracksNames);
router.get('/:id', controller_tracks.getTrack);
router.post('/', controller_tracks.createTrack);
router.put('/:id', controller_tracks.updateTrack);
router.delete('/:id', controller_tracks.deleteTrack);

module.exports = router;
