const request = require('supertest'); //supertest se utiliza para hacer peticiones HTTP

const app = require('../app');
const { usersModel } = require('../models');
const {testAuthLogin, testAuthRegister} = require('./helperData/helper_data');

// const testAuthRegister = {
//   name: 'Tinisima',
//   age: 20,
//   email: 'tina23@test23.com',
//   password: 'testing1234455',
// };

// const testAuthLogin = {
//   email: 'tina23@test23.com',
//   password: 'testing1234455',
// };

//ESTO SE EJECUTA ANTES DE LA SPRUEBAS
beforeAll(async () => {
  await usersModel.deleteMany();
});

describe('[AUTH] This is de /api/test test', () => {
  test('esto deberia retornar 201', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send(testAuthRegister);
    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('data.token');
    expect(response.body).toHaveProperty('data.user');
  });

  test('esto deberia retornar 200', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send(testAuthLogin);
    expect(response.statusCode).toEqual(200);
  });
});
