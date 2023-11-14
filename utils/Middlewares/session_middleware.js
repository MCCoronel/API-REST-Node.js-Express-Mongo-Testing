const handlehttpError = require('../handlers/handle_error');
const { verifyToken } = require('../handlers/handle_JWT');
const { usersModel } = require("../../models");

const authMiddleware = async (req, res, next) => {
  try {
    console.log("Inicio del middleware");
    
    if (!req.headers.authorization) {
      console.log("No hay autorización en las cabeceras");
      handlehttpError(res, 'Not session', 403);
    }

    const token = req.headers.authorization.split(' ').pop();
    console.log("Token:", token);

    const dataToken = await verifyToken(token);
    console.log("Data Token:", dataToken);

    if (!dataToken._id) {
      console.log("Error en el ID del token");
      handlehttpError(res, 'Error ID Token', 403);
      return;
    }

    const user = await usersModel.findById(dataToken._id);
    req.user = user;

  
    next();

  } catch (error) {
    console.error("Error en el catch:", error);
    handlehttpError(res, 'Not sessiondfhkbv', 403);
  }
};



module.exports =  authMiddleware 