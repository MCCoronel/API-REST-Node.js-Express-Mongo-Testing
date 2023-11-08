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
    }
  },
  {
    timestamps: true, //Registra el createdAt y el updatedAt
    versionKey: 'false', //Elimina el __v
  }
);

TracksScheme.plugin(mongooseDelete, { overrideMethods: 'all' }); // Esto implementacion sirve para habilitar el delete, o los metodos nativos de mongoose

module.exports = mongoose.model("tracks", TracksScheme);
