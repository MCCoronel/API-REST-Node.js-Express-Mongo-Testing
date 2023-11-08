const mongoose = require('mongoose');
const { usersScheme, usersModel } = require('../models');
const handlehttpError = require('../utils/handlers/handleError');
const { matchedData } = require('express-validator');
const handlePassword = require('../utils/handlers/handlePassword');

//Listar todos los tracks
const register = async (req, res) => {
  try {
    req = matchedData(req);

    const password = await handlePassword.encrypt(req.password);

    const body = { ...req, password };

    const data = await usersModel.create(body);
    data.set('password', undefined, { strict: false });/*El primer parámetro 'password' indica el nombre de la propiedad que se va a modificar.
    El segundo parámetro undefined establece el nuevo valor de la propiedad. En este caso, se está estableciendo como undefined, lo que significa que se está eliminando el valor de la propiedad.
    El tercer parámetro { strict: false } es una opción que permite realizar modificaciones en propiedades que están configuradas como estrictas en el esquema de mongoose. Estableciendo strict como false, se permite la modificación de la propiedad password a pesar de que pueda estar configurada como estricta en el esquema.
    En resumen, esta línea de código está eliminando el valor de la propiedad password en el objeto data, y lo hace permitiendo la modificación de una propiedad estricta.*/
    res.send({ data });

  } catch (error) {

    handlehttpError(res, 'Error en la peticion', 404);

  }
};

module.exports = { register };
