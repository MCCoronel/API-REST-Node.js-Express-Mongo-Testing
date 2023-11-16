const bcrypt = require('bcryptjs');
const { handlehttpError } = require('../handlers/handle_error');

//Esta es la contrasena sin encriptar passwordPlain
const encrypt = async (passwordPlain) => {
  try {
    const hash = await bcrypt.hash(passwordPlain, 10); //aqui obtenemos la contrasena encriptada

    return hash;
    
  } catch (error) {
    handlehttpError(res,'Error al encriptar la contraseña', 500);
  }
};

//Esta funcion recibe la contrasena sin encriptar y la encriptada
const compare = async (passwordPlain, hashPassword) => {
  const compare = await bcrypt.compare(passwordPlain, hashPassword);

  return compare;
};

module.exports = {
  encrypt,
  compare,
};
