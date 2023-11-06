const {validationResult} = require('express-validators')

const validateResults = (req,res,next)=>{
    try {
        validationResults(req).throw();
        return next();  //Si no existe errores continua hacia el controllador
    } catch (error) {
        res.status(403);
        res.send({
            error: error.array() //lanza un array de errores
        })
    }}

module.exports =  validateResults