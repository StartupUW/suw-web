// Home Page

var mockEvents = [
  {
    name: 'Event 1',
    start: 'Jan 1, 1970',
    end: 'Jan 2, 1970',
    description: 'This is an event description!'
  },
  {
    name: 'Event 1',
    start: 'Jan 1, 1970',
    end: 'Jan 2, 1970',
    description: 'This is an event description!'
  }
];

module.exports = function(req, res, next) {
    res.render('home', { title: 'Startup UW', events: mockEvents });
};
