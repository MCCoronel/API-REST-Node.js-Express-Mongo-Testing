const { check } = require('express-validator');
const validateResults = require('../utils/Middlewares/validator_middleware');

const validatorLogin = [
  check('email')
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage('El email es obligatorio'),
  check('password')
    .exists()
    .notEmpty()
    .isLength({ min: 8, max: 15 })
    .withMessage('La contraseña es obligatoria'),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorRegister = [
  check('name')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 100 })
    .withMessage('El nombre es obligatorio'),
  check('age')
    .exists()
    .notEmpty()
    .isNumeric()
    .withMessage('La edad es obligatoria'),
  check('email')
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage('El email es obligatorio'),
  check('password')
    .exists()
    .notEmpty()
    .isLength({ min: 8, max: 15 })
    .withMessage('La contraseña es obligatoria'),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorLogin, validatorRegister };
