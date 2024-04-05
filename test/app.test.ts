import request from 'supertest';
import app from '../src/app';

// Test for the root route
describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});

// Test for the health route
describe('GET api/health', () => {
    it('responds with a json message', (done) => {
        request(app)
            .get('/api/health')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
