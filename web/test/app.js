var request = require('supertest');

var app = require('../app');

describe('GET /', function() {
  it('responds with 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /events', function() {
  it('responds with 200 OK', function(done) {
    request(app)
      .get('/events')
      .expect(200, done);
  });
});

describe('GET /team', function() {
  it('responds with 200 OK', function(done) {
    request(app)
      .get('/team')
      .expect(200, done);
  });
});
