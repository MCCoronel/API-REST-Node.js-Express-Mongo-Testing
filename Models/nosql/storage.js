const mongoose = require('mongoose');

//Esta es una coleccion, en mysql seria una tabla

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: Number,
    }
  },
  {
    timestamps: true, //Registra el createdAt y el updatedAt
    versionKey:"false" //Elimina el __v
  }
);

module.exports = mongoose.model("storage", StorageScheme)