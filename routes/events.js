// Events Page

var moment = require('moment');
var db = require('./database.js');

module.exports = function(req, res, next) {
  console.log(req.path)
  var no = req.path.split("/");
  var num = no[no.length - 1];
  var offset = 5*num;
  db.query('SELECT * FROM events ORDER BY start_time DESC' + ' LIMIT 5 OFFSET ' + offset, { type: db.QueryTypes.SELECT }).then(function(data) {
    data = data.map(function(event) {
      event.at = moment(event.start_time).format('MMMM Do YYYY, h:mm a');
      return event;
    });
    res.render('events', {  title: 'Events' , events: data });
  });
};
