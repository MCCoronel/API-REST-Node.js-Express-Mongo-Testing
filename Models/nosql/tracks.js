const mongoose = require('mongoose');

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
  },
  {
    timestamps: true, //Registra el createdAt y el updatedAt
    versionKey: 'false', //Elimina el __v
  }
);

module.exports = mongoose.model("tracks", TracksScheme);
