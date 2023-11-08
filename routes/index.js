const express = require('express')
const router = express.Router()
const fs = require('fs') // Libreria de fs sirve para leer archivos



const PATH_ROUTES = __dirname; //Constatnte de node que nos va a dar la ruta absoluta donde se encuentra el archivo dentro de la computadora

const removeExtension = (fileName) =>{ //esto lo hago para quitar la extension del archivo es decir el ".js"
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file)=>{ // filter sirve para que nos de solo los archivos que terminen en .js
const name = removeExtension(file)
console.log(file);
console.log(name);
if(name !== 'index'){
    console.log(`./${file}`);
    console.log(`Cargando ruta ${name}`)
    router.use(`/${name}`, require(`./${file}`));  //el primer parametro es la ruta y el segundo es el archivo
}
}); //Esto es un array que devuelve el nombre de los file que se encuentran dentro de Routes


module.exports = router