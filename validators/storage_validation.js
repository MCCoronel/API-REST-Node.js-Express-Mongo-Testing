const { check } = require('express-validator');
const validateResults = require('../utils/Middlewares/validatorMiddleware');

const validatorIdStorage = [
  check('id').exists().notEmpty().isMongoId(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

module.exports = { validatorIdStorage };
