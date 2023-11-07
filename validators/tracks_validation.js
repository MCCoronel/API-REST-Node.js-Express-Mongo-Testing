const  { check } = require('express-validator') 
const validateResults = require('../utils/Middlewares/validatorMiddleware');

const validationCreateTracks = [
  check('name')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 100 })
    .withMessage('El nombre es obligatorio'),
  check('album')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 100 })
    .withMessage('El album es obligatorio'),
  check('cover').exists().notEmpty().withMessage('La imagen es obligatoria'),
  check('artist.name')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 100 })
    .withMessage('El nombre del artista es obligatorio'),
  check('artist.nickname')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 20 })
    .withMessage('El nickname del artista es obligatorio'),
  check('artist.nationality')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 10 })
    .withMessage('La nacionalidad del artista es obligatorio'),
  check('duration.start')
    .exists()
    .notEmpty()
    .isNumeric()
    .withMessage('La duracion es obligatoria'),
  check('duration.end')
    .exists()
    .notEmpty()
    .isNumeric({ max: 5 })
    .withMessage('La duracion es obligatoria'),
  check('mediaId')
    .exists()
    .notEmpty()
    .isMongoId()
    .withMessage('La media es obligatoria'),
  (req, res, next) => {
    validateResults(req,res,next);
  },
];

module.exports = { validationCreateTracks }
