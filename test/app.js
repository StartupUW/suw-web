var app = require('../app');
var request = require('supertest')(app);

describe('Homepage route', function() {
  it('responds with 200 OK', function(done) {
    request
      .get('/')
      .expect(200, done);
  });

  checkGoogleAnalytics('/');
});

describe('Events route', function() {
  it('responds with 200 OK', function(done) {
    request
      .get('/events')
      .expect(200, done);
  });

  checkGoogleAnalytics('/events');
});

describe('Team route', function() {
  it('responds with 200 OK', function(done) {
    request
      .get('/team')
      .expect(200, done);
  });

  checkGoogleAnalytics('/team');
});

function checkGoogleAnalytics(endpoint) {
  it('has Google Analytics', function(done) {
    request
      .get(endpoint)
      .expect(200)
      .expect(/google-analytics.com/)
      .expect(/UA-53889740-1/)
      .end(done);
  });
}
