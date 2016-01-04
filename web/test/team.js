var app = require('../app');
var request = require('supertest')(app);

describe('Team view', function() {
	it('uses the correct css files', function(done) {
	  request
        .get('/team')
        .expect(200)
        .expect(/team.css/)
        .end(done);
	});

	it('uses the correct images', function(done) {
      request
        .get('/team')
        .expect(200)
        .expect(/\/img\/malia.jpg/)
        .expect(/\/img\/mahir.jpg/)
        .expect(/\/img\/eric.jpg/)
        .expect(/\/img\/dan.jpg/)
        .expect(/\/img\/vard.jpg/)
        .expect(/\/img\/riya.jpg/)
        .expect(/\/img\/kathy.jpg/)
        .expect(/\/img\/sachin.jpg/)
        .expect(/\/img\/divye.jpg/)
        .expect(/\/img\/daniel.jpg/)
        .expect(/\/img\/ayush.jpg/)
        .expect(/\/img\/mike.jpg/)
        .expect(/\/img\/krish.jpg/)
        .end(done);
	});

	it('uses the correct names', function(done) {
		request
		  .get('/team')
		  .expect(200)
		  .expect(/Malia Imayama/)
		  .expect(/Mahir Kothary/)
		  .expect(/Eric Wang/)
		  .expect(/Daniel Fang/)
		  .expect(/Vardhman Mehta/)
		  .expect(/Riya Nath/)
		  .expect(/Kathy Tuan/)
		  .expect(/Sachin Makaram/)
		  .expect(/Divye Pratap Jain/)
		  .expect(/Daniel Ho/)
		  .expect(/Ayush Saraf/)
		  .expect(/Mike Guevarra/)
		  .expect(/Krishang Swami/)
		  .end(done);
	});
});