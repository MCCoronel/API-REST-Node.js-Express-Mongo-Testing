const request = require('supertest');
const app = require('../app');
const { usersModel } = require('../models');
const { storageModel } = require('../models');
const { testAuthRegister} = require('./helperData/helper_data');
const { tokenSign } = require('../utils/handlers/handle_jwt');
let JWT_TOKEN = '';
const filePath = `${__dirname}/file/test_dump_track.mp3`;

beforeAll(async () => {
  await usersModel.deleteMany({});
  await storageModel.deleteMany({});
  const user = usersModel.create(testAuthRegister);
  JWT_TOKEN = await tokenSign(user);
});

/**
 * Test para el POST => Upload File
 */

test('should upload file', async () => {
  const res = await request(app)
    .post('/api/storage')
    .set('Authorization', `Bearer ${JWT_TOKEN}`) //el set sirve para enviar el token
    .attach('file', filePath);
  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty('data');
  expect(res.body).toHaveProperty('data.url');
});

/**
 * Test para el GET de todos los archivos
 */
test('should create a return all', async () => {
  const res = await request(app)
    .get('/api/storage')
    .set('Authorization', `Bearer ${JWT_TOKEN}`);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  const { data } = body;
  expect(body).toHaveProperty('data');
});

/**
 * Test para el GET de un item
 */

test('debe retornar todo el detalle del item', async () => {
  const { _id } = await storageModel.findOne();
  id = _id.toString();

  const res = await request(app)
    .get(`/api/storage/${id}`)
    .set('Authorization', `Bearer ${JWT_TOKEN}`);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty('data');
});

/**
 * Test para el DELETE => Delete File
 */
test('debe eliminar el item', async () => {
  const { _id } = await storageModel.findOne();
  id = _id.toString();

  const res = await request(app)
    .delete(`/api/storage/${id}`)
    .set('Authorization', `Bearer ${JWT_TOKEN}`);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty('data');
  expect(body).toHaveProperty('data.deleted', 1);
});
