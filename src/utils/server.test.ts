import request from 'supertest';
import { Express } from 'express';
import { setupExpressServer } from './server';

let server: Express;
beforeAll(() => {
  setupExpressServer().then((ser) => {
    server = ser;
    console.log('Received Server');
  });
});

describe('GET /', () => {
  it('should return 200 & hello world', (done) => {
    request(server)
      .get(`/`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).toContain('Hello World!');
        console.log(res.body);
        return done();
      });
  });
});

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
