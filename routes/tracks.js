const express = require('express');
const router = express.Router();
const controller_tracks = require('../controllers/controller_tracks');
const {
  validationCreateTracks,
  validatorId,
} = require('../validators/tracks_validation');
const authMiddleware = require('../utils/Middlewares/session_Middleware');
const checkRol = require('../utils/Middlewares/roles_middleware');

//Rutas TRACKS

router.get('/', 
authMiddleware, 
controller_tracks.getTracksNames);

router.get('/:id', 
authMiddleware,
validatorId, 
controller_tracks.getTrack);

router.post(
  '/',
  authMiddleware,
  checkRol(['admin']),
  validationCreateTracks,
  controller_tracks.createTrack
);

router.put(
  '/:id',
  authMiddleware,
  validatorId,
  validationCreateTracks,
  controller_tracks.updateTrack
);

router.delete(
  '/:id',
  authMiddleware,
  validatorId,
  controller_tracks.deleteTrack
);

module.exports = router;
