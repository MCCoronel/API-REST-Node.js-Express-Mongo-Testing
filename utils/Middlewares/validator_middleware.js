const { validationResult } = require('express-validator');

const validateResults = async (req, res, next) => {
  try {
    await validationResult(req).throw();
    return next(); //Si no existe errores continua hacia el controllador
  } catch (error) {
    res.status(403).json({
      error: error.array(), //lanza un array de errores
    });
  }
};

module.exports = validateResults;
