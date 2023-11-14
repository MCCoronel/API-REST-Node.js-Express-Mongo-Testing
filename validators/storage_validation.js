const { check } = require('express-validator');
const validateResults = require('../utils/Middlewares/validator_middleware');

const validatorIdStorage = [
  check('id').exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = validatorIdStorage;
