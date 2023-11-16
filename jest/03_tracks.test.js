const request = require('supertest');
const app = require('../app');
const { usersModel, storageModel, tracksModel} = require('../models');
const {
  testAuthRegisterAdmin,
  testAuthRegiste,
  testStorageRegister,
  testDataTrack,
  testUpdateDataTrack,
  testAuthRegister,
} = require('./helperData/helper_data');
const { tokenSign } = require('../utils/handlers/handle_jwt');
let STORAGE_ID = '';
let JWT_TOKEN = '';

beforeAll(async () => {
  await usersModel.deleteMany();
  console.log('Users deleted.');

  await storageModel.deleteMany();
  console.log('Storage deleted.');

  const userAdmin = await usersModel.create(testAuthRegisterAdmin);
  console.log('Admin user created.');

  const storage = await storageModel.create(testStorageRegister);
  console.log('Storage created.');

  STORAGE_ID = storage._id.toString();

  JWT_TOKEN = await tokenSign(userAdmin);
  console.log('JWT token signed.');
},15000);

/**
 * Test POST Track
 */

test('Deberia registrar un track', async () => {
  const dataTrackNew = { ...testDataTrack, mediaId: STORAGE_ID };

  const res = await request(app)
    .post('/api/tracks')
    .set('Authorization', `Bearer ${JWT_TOKEN}`)
    .send(dataTrackNew);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty('data');
  expect(body).toHaveProperty('data.name');
  expect(body).toHaveProperty('data.cover');
});

/**
 * Test GET de todos los tracks
 */

test("Should return all tracks", async()=>{
    const res = await request (app)
    .get('/api/tracks')
    .set('Authorization', `Bearer ${JWT_TOKEN}`)
    const {body} = res
    const {data} = body
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body).toHaveProperty('user');
})

/**
 * Test GET detalle de un track
 */

test('Detalle de un item', async()=>{
    const {_id} = await tracksModel.findOne({})
    id = _id.toString()
    const res = await request(app)
    .get(`/api/tracks/${id}`)
    .set('Authorization',`Bearer ${JWT_TOKEN}`)
    const {body} = res
    expect(res.statusCode).toEqual(200)
    expect(body).toHaveProperty('data')
})

/**
 * Test UPDATE Track
 */

test('Deberia actualizar el track', async()=>{
    const {_id} = await tracksModel.findOne({})
    id = _id.toString()
    const res = await request(app)
    .get(`/api/tracks/${id}`)
    .set('Authorization',`Bearer ${JWT_TOKEN}`)
    .send(testUpdateDataTrack)
    const{body} = res
    expect(res.statusCode).toEqual(200)
    expect(body).toHaveProperty('data')
})

/**
 * Test DELETE track
 */

test('Delete track', async()=>{
    const {_id} = await tracksModel.findOne({})
    id = _id.toString()
    const res = await request(app)
    .get(`/api/tracks/${id}`)
    .set('Authorization',`Bearer ${JWT_TOKEN}`)
    const {body} = res
    expect(res.statusCode).toEqual(200)
    expect(body).toHaveProperty("data")
    expect(body).toStrictEqual({"data":[]})
})