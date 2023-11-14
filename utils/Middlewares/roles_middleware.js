const handlehttpError = require('../handlers/handle_error');

/**
 * Verifica si el usuario tiene el rol especificado antes de permitir el acceso al siguiente middleware.
 *
 * @param {Array} rol - Los roles para verificar con el rol del usuario.
 * @return {Promise} Una promesa que se resuelve si el usuario tiene el rol especificado, o se rechaza con un error si el usuario no tiene el rol especificado.
 */
const checkRol = (rol) => async (req, res, next) => {
  try {
    const user = req.user;
    const role = user.role;
    console.log(user, role);

    const checkValueRole = role.includes('admin');

    if (!checkValueRole) {
      handlehttpError(res, 'No autorizado', 403);
      return;
    }

    next();
  } catch (error) {
    handlehttpError(res, 'No autorizado', 403);
  }
};

module.exports = checkRol;
