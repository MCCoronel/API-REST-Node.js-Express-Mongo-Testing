const mongoose = require('mongoose');
const { tracksScheme, tracksModel } = require('../models')


const getTracksNames = async (req,res) => {
    const data = await tracksModel.find({});  //Me trae todo lo que hay en esa collection 

    res.send({data})
}

const getTrack = (req,res) => {

}

const createTrack = async (req,res) => {
    const {body} = req
    console.log(body);
   const data = await tracksModel.create(body)
    res.send({data})
    
}

const updateTrack = (req,res) => {

}

const deleteTrack = (req,res) => { 

}

module.exports = {
    getTracksNames,
    getTrack,
    createTrack,
    updateTrack,
    deleteTrack
}