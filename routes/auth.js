const express = require('express');
const router = express.Router();
const {
  validatorRegister,
  validatorLogin,
} = require('../validators/auth_validation');
const controller_users = require('../controllers/controller_users');

/**
 * http://localhost:3001/api
 * 
 * Route register new user
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Register nuevo usario"
 *          description: "Esta ruta es para registrar un nuevo usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authRegister"
 *          responses:
 *                  '201':
 *                      description: El usuario se registra de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */
router.post('/register', validatorRegister, controller_users.register);

/**
 * http://localhost:3001/api
 * 
 * Login user
 * @openapi
 * /auth/login:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Login usario"
 *          description: "Esta ruta es para loguear a un usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authLogin"
 *          responses:
 *                  '201':
 *                      description: El usuario se loguea de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */
router.post('/login', validatorLogin, controller_users.login);

module.exports = router;
