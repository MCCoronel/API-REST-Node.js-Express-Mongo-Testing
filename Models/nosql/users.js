const mongoose = require('mongoose');

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

module.exports = mongoose.model("users", UserScheme)