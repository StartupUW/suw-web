// Home Page
var moment = require('moment');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:asdfasdf@localhost:5432/suw'); // Change this part
var Events = require('../models/events');
module.exports = function(req, res, next) {
    sequelize.query('SELECT id, name, start_time, end_time, place FROM events ORDER BY start_time DESC LIMIT 2', { type: sequelize.QueryTypes.SELECT })
      .then(function(data) {
        data = data.map(function(event) {
                event.at = moment(event.start_time).format('MMMM Do YYYY, h:mm a');
                return event;
        });
        console.log(data[0]);
        res.render('home', {  title: 'Events' , events: data });
      });
};
