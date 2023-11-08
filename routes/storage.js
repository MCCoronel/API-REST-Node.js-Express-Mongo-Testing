const express = require('express');
const router = express.Router();
const controller_storage = require('../controllers/controller_storage'); 
const UploadFileMiddleware = require('../utils/Middlewares/uploadMiddleware');   
const validatorIdStorage = require('../validators/storage_validation');


router.get("/", controller_storage.getFiles);
router.get("/:id",validatorIdStorage, controller_storage.getFile);
router.post("/", UploadFileMiddleware.single('file'), controller_storage.UploadFile);
router.delete("/:id", validatorIdStorage , controller_storage.deleteFile);


module.exports = router;