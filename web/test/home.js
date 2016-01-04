var app = require('../app');
var request = require('supertest')(app);

describe('Homepage view', function() {

  it('uses the correct css files', function(done) {
    request
      .get('/')
      .expect(200)
      .expect(/base.css/)
      .expect(/home.css/)
      .end(done);
  });

  it('has a header and footer', function(done) {
    request
      .get('/')
      .expect(200)
      .expect(/<div id="header">/)
      .expect(/<div id="footer">/)
      .end(done);
  });

  it('has all the correct sections', function(done) {
    request
      .get('/')
      .expect(200)
      .expect(/<section id="about">/)
      .expect(/<section id="mission">/)
      .expect(/<section id="event-overview">/)
      .expect(/<section id="launch-overview">/)
      .expect(/<section id="newsletter">/)
      .end(done);
  });

  it('has the correct page title', function(done) {
    request
      .get('/')
      .expect(200)
      .expect(/<title>Startup UW \| Home<\/title>/)
      .end(done);
  });

  it('has a link to Launch', function(done) {
    request
      .get('/')
      .expect(200)
      .expect(/launch.startupuw.com/)
      .end(done);
  });

  it('has a link to the blog', function(done) {
    request
      .get('/')
      .expect(200)
      .expect(/blog.startupuw.com/)
      .end(done);
  });

  it('has events', function(done) {
    request
      .get('/')
      .expect(200)
      .expect(/View All Events/)
      .end(done);
  });

  it('prompts newsletter subscription', function(done) {
    request
      .get('/')
      .expect(200)
      .expect(/Subscribe/)
      .end(done);
  });

});
