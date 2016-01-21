// Home Page

var moment = require('moment');
var db = require('./database.js');

module.exports = function(req, res, next) {
  db.query('SELECT id, name, start_time, end_time, place FROM events ORDER BY start_time DESC LIMIT 2', { type: db.QueryTypes.SELECT }).then(function(data) {
    data = data.map(function(event) {
      event.at = moment(event.start_time).format('MMMM Do YYYY, h:mm a');
      return event;
    });
    res.render('home', {  title: 'Home' , events: data });
  });
};
