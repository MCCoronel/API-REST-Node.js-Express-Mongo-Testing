const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

//Esta es una coleccion, en mysql seria una tabla

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    }
  },
  {
    timestamps: true, //Registra el createdAt y el updatedAt
    versionKey:"false" //Elimina el __v
  }
);

StorageScheme.plugin(mongooseDelete, { overrideMethods: 'all' }); // Esto implementacion sirve para habilitar el delete, o los metodos nativos de mongoose

module.exports = mongoose.model("storage", StorageScheme)