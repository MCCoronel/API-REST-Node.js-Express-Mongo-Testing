const bcrypt = require('bcryptjs')

//Esta es la contrasena sin encriptar passwordPlain
const encrypt = async(passwordPlain)=>{
    try {
        const hash = await bcrypt.hash(passwordPlain, 10)  //aqui obtenemos la contrasena encriptada
        return hash;        
    } catch (error) {
        console.error(encryptError);
        throw new Error( 'Error al encriptar la contraseña');
    }
}

//Esta funcion recibe la contrasena sin encriptar y la encriptada
const compare = async(hashPassword, passwordPlain)=>{
    return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports = {
    encrypt,
    compare
}