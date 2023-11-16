const request = require('supertest'); //supertest se utiliza para hacer peticiones HTTP
const mongoose = require('mongoose');
const app = require('../app');
const { usersModel } = require('../models');
//const {testAuthLogin, testAuthRegister} = require('./helperData/helper_data');


//Falta refactorizar(poner en otra carpeta) estas variables
const testAuthRegister = {
  name: 'Tinisima',
  age: 20,
  email: 'tina2023@test2023.com',
  password: 'testing1234455',
};

const testAuthRegisterExist = {
  name: 'Tinisima',
  age: 20,
  email: 'tina2023@test2023.com',
  password: 'testing1234455',
};

const testAuthLogin = {
  email: 'tina2023@test2023.com',
  password: 'testing1234455',
};

const testAuthLoginNotExists = {
  email: 'tina2021@test2021.com',
  password: 'testing1234455',
};

//ESTO SE EJECUTA ANTES DE LA SPRUEBAS
beforeAll(async () => {
  await usersModel.deleteMany();
},10000);



describe('[AUTH] This is de /api/test test', () => {
  test('Registro de usuario, esto deberia retornar 201', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send(testAuthRegister);
    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('data.token');
    expect(response.body).toHaveProperty('data.user');
  });

  test('Testeando existencia de usuario', async () =>{
    const response = await request(app)
    .post('/api/auth/register')
    .send(testAuthRegisterExist);
    expect(response.body).toEqual({error:'El usuario ya existe en la base de datos'});
  })

  test('esto deberia retornar 200', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send(testAuthLogin);
      expect(response.statusCode).toEqual(200);
    });

    test('Test Login cuando un usuario no existe', async()=>{
    const response = await request(app)
      .post('/api/auth/login')
      .send(testAuthLoginNotExists);
    expect(response.statusCode).toEqual(404);
  })


});

/**
 * despues de todo le indico que cierre la conexion, con esto aun va a seguir el error, pero todo es por las versiones de mongo
 */
afterAll(async () => {
  await mongoose.connection.close();
},10000)