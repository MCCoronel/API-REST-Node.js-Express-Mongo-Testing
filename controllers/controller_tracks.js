const mongoose = require('mongoose');
const { tracksScheme, tracksModel } = require('../models');
const handlehttpError = require('../utils/handlers/handle_Error');
const { matchedData } = require('express-validator');

const getTracksNames = async (req, res) => {
  try {
    const data = await tracksModel.find({}); //Me trae todo lo que hay en esa collection

    res.send({ data });
  } catch (error) {
    handlehttpError(res, 'Error en la peticion', 404);
  }
};

const getTrack = (req, res) => {};

const createTrack = async (req, res) => {
  try {
   const body = matchedData(req) //Esto lo que hace es devolverme la data totalmente limpia, por ejemplo si envio un dato que no fue especificado o si envio un string en ves de un number
    /*console.log(body);*/
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (error) {
    handlehttpError(res, 'Error en la peticion', 404);
  }
};

const updateTrack = (req, res) => {};

const deleteTrack = (req, res) => {};

module.exports = {
  getTracksNames,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
};
