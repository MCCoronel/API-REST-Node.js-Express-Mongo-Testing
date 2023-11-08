const { StorageScheme, storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;
const handlehttpError = require('../utils/handlers/handle_Error');


const getFiles = async(req, res) => {
  try {
    const data = await storageModel.find({})
    res.send({ data })
  } catch (error) {
    handlehttpError(res, 'Error en la peticion', 404);
  }
}

const getFile = async(req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);
    console.log(id);
    console.log({ data });
    res.send({ data });
  } catch (error) {
    handlehttpError(res, 'Error en la peticion', 404);
  }
}
const UploadFile = async(req, res) => {
  const { file } = req;
  const fileData = {
    fileName: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  /*console.log(file);*/
  const data = await storageModel.create(fileData);
  res.send({ data });
};

const updatefile = async(req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await storageModel.findByIdAndUpdate(id, body);
    res.send({ data });
    
  } catch (error) {
    handlehttpError(res, 'Error en la peticion', 404);
  }
};

const deleteFile = async(req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.delete({_id:id});
    res.send('Eliminado');    
  } catch (error) {
    handlehttpError(res, 'Error en la peticion', 404);
  }
};

module.exports = {
  getFiles,
  getFile,
  UploadFile,
  updatefile,
  deleteFile,
};
