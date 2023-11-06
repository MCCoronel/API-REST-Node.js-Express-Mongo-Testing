const express = require('express');
const router = express.Router();
const controller_storage = require('../controllers/controller_storage'); 
const UploadFileMiddleware = require('../utils/Middlewares/uploadMiddleware');   

router.post("/", UploadFileMiddleware.single("file"), controller_storage.UploadFile);

module.exports = router;