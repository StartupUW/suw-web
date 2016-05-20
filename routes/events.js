// Events Page

var moment = require('moment');
var db = require('./database.js');

module.exports = function(req, res, next) {
  var no = req.params.page;
  var offset = 5*no;
  console.log(no)
  db.query('SELECT * FROM events ORDER BY start_time DESC' + ' LIMIT 5 OFFSET ' + offset, { type: db.QueryTypes.SELECT }).then(function(data) {
    data = data.map(function(event) {
      event.at = moment(event.start_time).format('MMMM Do YYYY, h:mm a');
      return event;
    });
    res.render('events', {  title: 'Events' , events: data,  page:parseInt(no)});
  });
};
