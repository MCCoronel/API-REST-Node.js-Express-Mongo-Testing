const express = require('express');
const router = express.Router();
const {validatorRegister, validatorLogin} = require('../validators/auth_validation')
const controller_users = require('../controllers/controller_users')

router.post('/register',validatorRegister, controller_users.register)
router.post('/login',validatorLogin ,controller_users.login)

module.exports = router;