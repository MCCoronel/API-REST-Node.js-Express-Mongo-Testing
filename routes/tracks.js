const express = require('express');
const router = express.Router();
const controller_tracks = require('../controllers/controller_tracks');
const {validationCreateTracks, validatorId} = require('../validators/tracks_validation')

//Rutas TRACKS
router.get('/', controller_tracks.getTracksNames);
router.get('/:id',validatorId , controller_tracks.getTrack);
router.post('/',validationCreateTracks ,controller_tracks.createTrack);
router.put('/:id',validatorId,validationCreateTracks, controller_tracks.updateTrack);
router.delete('/:id',validatorId , controller_tracks.deleteTrack);

module.exports = router;
