const express = require('express');
const router = express.Router();
const {validatorRegister} = require('../validators/auth_validation')
const controller_users = require('../controllers/controller_users')
const handleError = require('../utils/handlers/handleError');

router.post('/register',validatorRegister, controller_users.register)
//router.post('/login',controller_users.login)

module.exports = router;