const { StorageScheme, storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

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

const updatefile = (req, res) => {};

const deleteFile = (req, res) => {};

module.exports = {
  UploadFile,
  updatefile,
  deleteFile,
};
