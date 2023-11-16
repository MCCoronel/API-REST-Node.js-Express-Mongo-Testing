const mongoose = require('mongoose');
const { usersScheme, usersModel } = require('../models');
const {handlehttpError} = require('../utils/handlers/handle_error');
const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../utils/handlers/handle_password');
const { tokenSign } = require('../utils/handlers/handle_jwt');

/**
 * Registers a user in the system.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} Returns a promise that resolves when the user is registered successfully.
 */
const register = async (req, res) => {
  try {
    req = matchedData(req);

    const existUser = await usersModel.findOne({ email: req.email });

    if (existUser) {
      handlehttpError(res, 'El usuario ya existe en la base de datos', 409);
      return;
    }

    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await usersModel.create(body);
    dataUser.set('password', undefined, { strict: false });

    if (!dataUser) {
      handlehttpError(res, 'Error al registrar el usuario', 400);
      return;
    }

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };

    if (!data.token) {
      handlehttpError(res, 'Error al generar el token', 400);
      return;
    }

    res.status(201).send({ data });
  } catch (error) {
    console.error(error);
    handlehttpError(res, 'Error interno en el servidor', 500);
    
  }
};

/**
 * Este controlador se encarga de loguear a una persona
 *
 * @param {type} req - description of parameter
 * @param {type} res - description of parameter
 * @return {type} description of return value
 */
const login = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel
      .findOne({ email: req.email })
      .select('password name role email'); //con el select defino que campos quiero mostrar

    if (!user) {
      handlehttpError(res, 'El usuario no existe en la base de datos', 404);
      return;
    }

    const hashPassword = user.get('password'); //Lo hacemos asi ya que no se puede ir directamente a la prop como user.password

    const check = await compare(req.password, hashPassword);

    if (!check) {
      handlehttpError(res, 'La contraseña es incorrecta', 401);
      return;
    }

    user.set('password', undefined, { strict: false });

    const data = {
      token: await tokenSign(user),
      user: user,
    };

    res.status(200).send({ data });
  } catch (error) {
    console.error(error);
    handlehttpError(res, 'Error interno en el servidor', 500);
  }
};

module.exports = { register, login };
