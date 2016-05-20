// All routes

var express = require('express');
var router = express.Router();

var TeamPage = require('./team');
var HomePage = require('./home');
var EventsPage = require('./events');

router.get('/', HomePage);
router.get('/team', TeamPage);
router.get('/events(/:page((\\d+)))?', EventsPage);

module.exports = router;
