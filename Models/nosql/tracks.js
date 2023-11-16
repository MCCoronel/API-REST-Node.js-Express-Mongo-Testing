const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

//Esta es una coleccion, en mysql seria una tabla

const TracksScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: 'La url no es válida',
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true, //Registra el createdAt y el updatedAt
    versionKey: 'false', //Elimina el __v
  }
);

/**
 * Implementar metodo propio con relacion a Storage
 */

TracksScheme.statics.findAllData = function () {
  //findAllData es un metodo customizado
  const joinData = this.aggregate([
    // este es el join
    {
      // Dentro de este join estos son los filtros que se van a aplicar, desde el modelo de canciones(modelo padre)
      $lookup: {
        from: 'storages', // vamos a hacer una relacion con storage,
        localField: 'mediaId', //donde en el padre vamos a utilizar Tracks.mediaId
        foreignField: '_id', //que lo va a relacioar con el id del storage storage._id
        as: 'media' /*todo el resultado lo va a colocar en media*/,
      },
    },
    {
      $unwind: '$media', // esto es para que no venga como array
    },
    
  ]);
  return joinData;
};

/**
 * 
 * @param {*} id 
 * @returns 
 */

TracksScheme.statics.findOneData = function (id) {
  // findAllData es un método personalizado
  const joinData = this.aggregate([
    // este es el join
    {
      $lookup: {
        from: 'storages', // vamos a hacer una relación con storage,
        localField: 'mediaId', // donde en el padre vamos a utilizar Tracks.mediaId
        foreignField: '_id', // que lo va a relacionar con el id del storage storage._id
        as: 'media' /* todo el resultado lo va a colocar en media */,
      },
    },
    {
      $unwind: '$media', // esto es para que no venga como array
    },
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id),
      },
    },
  ]);
  return joinData;
};


TracksScheme.plugin(mongooseDelete, { overrideMethods: 'all' }); // Esto implementacion sirve para habilitar el delete, o los metodos nativos de mongoose

// module.exports = {
//   tracksScheme: TracksScheme,
//   tracksModel: mongoose.model('tracksModel', TracksScheme),
// };

module.exports= mongoose.model("tracks",TracksScheme)
