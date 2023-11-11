const bcrypt = require('bcryptjs')

//Esta es la contrasena sin encriptar passwordPlain
const encrypt = async(passwordPlain)=>{
    try {
        console.log('esto es la contrasena:',passwordPlain);
        const hash = await bcrypt.hash(passwordPlain, 10)  //aqui obtenemos la contrasena encriptada
        console.log('este es el hash:',hash);
        return hash;        
    } catch (error) {
        console.error(encryptError);
        throw new Error( 'Error al encriptar la contraseña');
    }
}

//Esta funcion recibe la contrasena sin encriptar y la encriptada
const compare = async( passwordPlain, hashPassword)=>{
    console.log('compare',hashPassword, 'y ',passwordPlain);
   const compare = await bcrypt.compare(passwordPlain, hashPassword)
   console.log(compare)
   return compare

}

module.exports = {
    encrypt,
    compare
}