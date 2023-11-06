const { StorageScheme, storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

const UploadFile = async(req, res) => {
  const { body, file } = req;
  const fileData = {
    fileName: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
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
