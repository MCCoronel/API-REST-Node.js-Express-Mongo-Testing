const multer = require("multer");

const storage = multer.diskStorage({  //Esto es un middleware que sirve para subir archivos
    destination: function(req, file, cb) { //El parametro req es el request, el file es el archivo, el cb es el callback
        const pathStorage  = `${__dirname}/../../storage`; // Aqui es donde se van aguardar tofos los archivos
        cb(null, pathStorage); //el primer armento es el error y el segundo es el directorio o direccion de almacenamiento
    },
    filename: function(req, file, cb){
        const ext = file.originalname.split(".").pop(); // [name, ext] con pop agarra el png
        const fileName = `file-${Date.now()}.${ext}`;  //DateNow me devuelve en formato UNIX, esto me devuelve el archivo asi file-541854.png
        cb(null, fileName);
    },
})

const upload = multer({storage});

module.exports = upload