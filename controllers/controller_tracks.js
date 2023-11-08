const mongoose = require('mongoose');
const { tracksScheme, tracksModel } = require('../models');
const handlehttpError = require('../utils/handlers/handleError');
const { matchedData } = require('express-validator');


//Listar todos los tracks
const getTracksNames = async (req, res) => {
  try {
    const data = await tracksModel.find({}); //Me trae todo lo que hay en esa collection

    res.send({ data });
  } catch (error) {
    handlehttpError(res, 'Error en la peticion', 404);
  }
};

//Obtener detalle de un track

const getTrack = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        console.log(id);
        const data = await tracksModel.findById(id);
        console.log({data});
        res.send({ data });
    } catch (error) {
     handlehttpError(res, 'Error en la peticion', 404);   
    }
};

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

const updateTrack = async(req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await tracksModel.findByIdAndUpdate(id, body);
        res.send({ data });
    } catch (error) {
        handlehttpError(res, 'Error en la peticion', 404);
    }
};

const deleteTrack = async(req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await tracksModel.delete({_id:id});
        res.send('Eliminado');
    } catch (error) {
        handlehttpError(res, 'Error en la peticion', 404);
    }
};

module.exports = {
  getTracksNames,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
};
