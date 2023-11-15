const request = require('supertest'); //supertest se utiliza para hacer peticiones HTTP

const app = require('../app');

describe('[AUTH] This is de /api/test test', () => {
  test('esto deberia retornal 404', async () => {
    const response = await request(app).post('/api/auth/login').send(
        {
            email: 'Moca@gmail.com',
            password: 'gatita123456',   
        }
    );
    expect(response.statusCode).toEqual(200);
  });
});
