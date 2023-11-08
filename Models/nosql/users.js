const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

//Esta es una coleccion, en mysql seria una tabla

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false  // Me permite que no me traiga la contrasena en una consulta
    },
    role: {
      type: ["user","admin"],  // es como el ENUM
      default: "user",
    },
  },
  {
    timestamps: true, //Registra el createdAt y el updatedAt
    versionKey:"false" //Elimina el __v
  }
);

UserScheme.plugin(mongooseDelete, { overrideMethods: 'all' }); // Esto implementacion sirve para habilitar el delete, o los metodos nativos de mongoose

module.exports = mongoose.model("users", UserScheme)