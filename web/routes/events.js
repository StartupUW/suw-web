// Events Page
var mockEvents = [
  {
    name: 'Winter Info Night',
    at: '5:00pm - 7:00pm',
    date: 'Jan 07, 2015',
    location: 'Startup Hall',
    link: 'https://www.facebook.com/events/1637507709870963/'
  },
  {
    name: 'Speed Networking',
    at: '5:00pm - 7:00pm',
    date: 'Nov 21, 2015',
    location: 'Startup Hall',
    link: 'https://www.facebook.com/events/1637507709870963/'
  },
  {
    name: 'Speed Networking',
    at: '5:00pm - 7:00pm',
    date: 'Nov 21, 2015',
    location: 'Startup Hall',
    link: 'https://www.facebook.com/events/1637507709870963/'
  },
  {
    name: 'Speed Networking',
    at: '5:00pm - 7:00pm',
    date: 'Nov 21, 2015',
    location: 'Startup Hall',
    link: 'https://www.facebook.com/events/1637507709870963/'
  },
  {
    name: 'Speed Networking',
    at: '5:00pm - 7:00pm',
    date: 'Nov 21, 2015',
    location: 'Startup Hall',
    link: 'https://www.facebook.com/events/1637507709870963/'
  }
];
module.exports = function(req, res, next) {
    res.render('events', { 
    title: 'Events' ,
	events: mockEvents
});
};
