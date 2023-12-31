const { StorageScheme, storageModel } = require('../models');
const handlehttpError = require('../utils/handlers/handle_error');
const fs = require('fs');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getFiles = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (error) {
    handlehttpError(res, 'Error en la peticion', 404);
  }
};

const getFile = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await storageModel.findById(id);

    res.send({ data });
  } catch (error) {
    handlehttpError(res, 'Error en la peticion', 404);
  }
};
const UploadFile = async (req, res) => {

  try {
    const { file } = req;
    const headers = req.headers;
    // console.log("headers: ", headers);
    // console.log("file: ", file);

    const fileData = {
      fileName: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };
    /*console.log(file);*/
    const data = await storageModel.create(fileData);
    res.status(201).send({ data });
    
  } catch (error) {
    handlehttpError(res, 'Error en la peticion', 404);
  }
};


const deleteFile = async (req, res) => {
  try {
    console.log('0');
    const { id } = req.params;
    console.log('1');
    const datafile = await storageModel.findById(id);
    console.log(datafile);
    console.log('2');
    const filename = datafile.url.split('/').pop();
    console.log(filename);
    console.log('3');
    const filePath = `${MEDIA_PATH}/${filename}`;
    console.log(filePath);
    console.log('4');
    fs.unlinkSync(filePath); 
    console.log('5');
    
    const data = {
      filePath,
      deleted: 1,
    };

    console.log(data);

    res.send({data});
  } catch (error) {
    console.log(error);
    handlehttpError(res, 'Error en la peticion', 404);
  }
};

module.exports = {
  getFiles,
  getFile,
  UploadFile,
  deleteFile,
};
