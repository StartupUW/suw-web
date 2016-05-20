// Events Page

var moment = require('moment');
var db = require('./database.js');

var PAGE_LIMIT = 5;

module.exports = function(req, res) {
  var page = parseInt(req.params.page || 1);
  var offset = PAGE_LIMIT * (page - 1);
  var total = 'SELECT COUNT(*) FROM events';
  db.query(total, { type: db.QueryTypes.SELECT }).then(function(data) {
    var count = data[0].count;
    var query = 'SELECT * FROM events ORDER BY start_time DESC' + ' LIMIT ' + PAGE_LIMIT + ' OFFSET ' + offset;
    db.query(query, { type: db.QueryTypes.SELECT }).then(function(data) {
      if (data.length == 0) {
        res.render('error', { message: 'Not found' });
        return;
      }
      var events = data.map(function(event) {
        event.at = moment(event.start_time).format('MMMM Do YYYY, h:mm a');
        return event;
      });
      res.render('events', {
        title: 'Events',
        events: events,
        numEvents: count,
        PAGE_LIMIT: PAGE_LIMIT,
        page: page,
      });
    });
  });
};
