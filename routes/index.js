// All routes

var express = require('express');
var router = express.Router();

var TeamPage = require('./team');
var HomePage = require('./home');
var JoinPage = require('./join');
var EventsPage = require('./events');
var CalendarPage = require('./calendar');


router.get('/', HomePage);
router.get('/team', TeamPage);
router.get('/join', JoinPage); 
router.get('/calendar', CalendarPage); 
router.get('/events(/:page((\\d+)))?', EventsPage);

module.exports = router;
