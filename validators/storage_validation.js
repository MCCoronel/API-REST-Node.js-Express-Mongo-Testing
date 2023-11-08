const { check } = require("express-validator");
const validateResults = require("../utils/Middlewares/validatorMiddleware")


const validatorIdStorage = [
    check('id')
    .exists()
    .notEmpty(),
    (req, res, next) => {
      console.log(req.params.id);
        return validateResults(req, res, next)
    }
];


module.exports =  validatorIdStorage 