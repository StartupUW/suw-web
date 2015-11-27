var app = require('../app');
var request = require('supertest')(app);

describe('GET /', function() {
  it('responds with 200 OK', function(done) {
    request
      .get('/')
      .expect(200, done);
  });
});

describe('GET /events', function() {
  it('responds with 200 OK', function(done) {
    request
      .get('/events')
      .expect(200, done);
  });
});

describe('GET /team', function() {
  it('responds with 200 OK', function(done) {
    request
      .get('/team')
      .expect(200, done);
  });
});
