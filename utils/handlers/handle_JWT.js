const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

//Debe pasar el objeto del usuario
const tokenSign = async (user) => {
  try {
    //Esto va a retornar el token
    const sign = await jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      {
        expiresIn: '2h',
      }
    );
    return sign;
  } catch (error) {
    console.error(tokenError);
    throw new Error('Error al generar el token');
  }
};

const verifyToken = async (tokenJWT) => {
  //Esto verifica que este firmado
  try {
    return jwt.verify(tokenJWT, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = {
  tokenSign,
  verifyToken,
};
