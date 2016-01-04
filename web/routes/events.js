// Events Page
var mockEvents = [
  {
    name: 'Winter Info Night',
    at: '5:00pm - 7:00pm',
    date: 'Jan 07, 2015',
    location: 'Startup Hall',
    link: 'https://www.facebook.com/events/1637507709870963/',
    desc: 'This week’s Startup UW Night will feature a new, fun activity! Nathan For You, an entrepreneur saving businesses from their low’s, does so with some interesting approaches. We will have breakout sessions after viewing the episode where YOU decide the best way to save the company!'
  },
  {
    name: 'Speed Networking',
    at: '5:00pm - 7:00pm',
    date: 'Nov 21, 2015',
    location: 'Startup Hall',
    link: 'https://www.facebook.com/events/1637507709870963/',
    desc: 'This week’s Startup UW Night will feature a new, fun activity! Nathan For You, an entrepreneur saving businesses from their low’s, does so with some interesting approaches. We will have breakout sessions after viewing the episode where YOU decide the best way to save the company!'
  },
  {
    name: 'Speed Networking',
    at: '5:00pm - 7:00pm',
    date: 'Nov 21, 2015',
    location: 'Startup Hall',
    link: 'https://www.facebook.com/events/1637507709870963/',
    desc: 'This week’s Startup UW Night will feature a new, fun activity! Nathan For You, an entrepreneur saving businesses from their low’s, does so with some interesting approaches. We will have breakout sessions after viewing the episode where YOU decide the best way to save the company!'
  },
  {
    name: 'Speed Networking',
    at: '5:00pm - 7:00pm',
    date: 'Nov 21, 2015',
    location: 'Startup Hall',
    link: 'https://www.facebook.com/events/1637507709870963/',
    desc: 'This week’s Startup UW Night will feature a new, fun activity! Nathan For You, an entrepreneur saving businesses from their low’s, does so with some interesting approaches. We will have breakout sessions after viewing the episode where YOU decide the best way to save the company!'
  },
  {
    name: 'Speed Networking',
    at: '5:00pm - 7:00pm',
    date: 'Nov 21, 2015',
    location: 'Startup Hall',
    link: 'https://www.facebook.com/events/1637507709870963/',
    desc: 'This week’s Startup UW Night will feature a new, fun activity! Nathan For You, an entrepreneur saving businesses from their low’s, does so with some interesting approaches. We will have breakout sessions after viewing the episode where YOU decide the best way to save the company!'
  }
];
module.exports = function(req, res, next) {
    res.render('events', { 
    title: 'Events' ,
	events: mockEvents
});
};
