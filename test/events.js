var app = require('../app');
var request = require('supertest')(app);

describe('Events view', function() {
  it('uses the correct css files', function(done) {
    request
        .get('/events')
        .expect(200)
        .expect(/events.css/)
        .end(done);
  });

  it('loads the correct mock events', function(done) {
      request
        .get('/events')
        .expect(200)
        .expect(/Test Event/)
        .expect(/Test description/)
        .expect(/Test place/)
        .end(done);
  });
});
