// Home Page

var mockEvents = [
  {
    name: 'Winter Info Night',
    at: '5:00pm - 7:00pm',
    date: 'Jan 07, 2015',
    location: 'Startup Hall'
  },
  {
    name: 'Speed Networking',
    at: '5:00pm - 7:00pm',
    date: 'Nov 21, 2015',
    location: 'Startup Hall'
  }
];

module.exports = function(req, res, next) {
  res.render('home', {
    title: 'Startup UW',
    events: mockEvents
  });
};
