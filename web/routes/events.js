// Events Page
var mockEvents = [
  {
   "desc": "Startup UW is ready to bring you a killer Winter Quarter! From our own Startup Weekend to a Demo Day at the end of the quarter, come check out what we have to offer you!",
      "end_time": "2016-01-06T19:30:00-0800",
      "name": "Startup UW Info Night!",
      "place": "Bank of America Exed 420 ",
      "start_time": "2016-01-06T18:00:00-0800",
      "id": "210210119316613",
      "cover":"https://scontent.xx.fbcdn.net/hphotos-xfp1/t31.0-8/s720x720/12487027_716529258447416_2424456285400238697_o.jpg"
  },
  {
   "desc": "Startup UW is ready to bring you a killer Winter Quarter! From our own Startup Weekend to a Demo Day at the end of the quarter, come check out what we have to offer you!",
      "end_time": "2016-01-06T19:30:00-0800",
      "name": "Startup UW Info Night!",
      "place": "Bank of America Exed 420 ",
      "start_time": "2016-01-06T18:00:00-0800",
      "id": "210210119316613",
      "cover":"https://scontent.xx.fbcdn.net/hphotos-xfp1/t31.0-8/s720x720/12487027_716529258447416_2424456285400238697_o.jpg"
  },
  {
   "desc": "Startup UW is ready to bring you a killer Winter Quarter! From our own Startup Weekend to a Demo Day at the end of the quarter, come check out what we have to offer you!",
      "end_time": "2016-01-06T19:30:00-0800",
      "name": "Startup UW Info Night!",
      "place": "Bank of America Exed 420 ",
      "start_time": "2016-01-06T18:00:00-0800",
      "id": "210210119316613",
      "cover":"https://scontent.xx.fbcdn.net/hphotos-xfp1/t31.0-8/s720x720/12487027_716529258447416_2424456285400238697_o.jpg"
  },
  {
   "desc": "Startup UW is ready to bring you a killer Winter Quarter! From our own Startup Weekend to a Demo Day at the end of the quarter, come check out what we have to offer you!",
      "end_time": "2016-01-06T19:30:00-0800",
      "name": "Startup UW Info Night!",
      "place": "Bank of America Exed 420 ",
      "start_time": "2016-01-06T18:00:00-0800",
      "id": "210210119316613",
      "cover":"https://scontent.xx.fbcdn.net/hphotos-xfp1/t31.0-8/s720x720/12487027_716529258447416_2424456285400238697_o.jpg"
  },
  {
   "desc": "Startup UW is ready to bring you a killer Winter Quarter! From our own Startup Weekend to a Demo Day at the end of the quarter, come check out what we have to offer you!",
      "end_time": "2016-01-06T19:30:00-0800",
      "name": "Startup UW Info Night!",
      "place": "Bank of America Exed 420 ",
      "start_time": "2016-01-06T18:00:00-0800",
      "id": "210210119316613",
      "cover":"https://scontent.xx.fbcdn.net/hphotos-xfp1/t31.0-8/s720x720/12487027_716529258447416_2424456285400238697_o.jpg"
  },
  {
   "desc": "Startup UW is ready to bring you a killer Winter Quarter! From our own Startup Weekend to a Demo Day at the end of the quarter, come check out what we have to offer you!",
      "end_time": "2016-01-06T19:30:00-0800",
      "name": "Startup UW Info Night!",
      "place": "Bank of America Exed 420 ",
      "start_time": "2016-01-06T18:00:00-0800",
      "id": "210210119316613",
      "cover":"https://scontent.xx.fbcdn.net/hphotos-xfp1/t31.0-8/s720x720/12487027_716529258447416_2424456285400238697_o.jpg"
  },
  {
   "desc": "Startup UW is ready to bring you a killer Winter Quarter! From our own Startup Weekend to a Demo Day at the end of the quarter, come check out what we have to offer you!",
      "end_time": "2016-01-06T19:30:00-0800",
      "name": "Startup UW Info Night!",
      "place": "Bank of America Exed 420 ",
      "start_time": "2016-01-06T18:00:00-0800",
      "id": "210210119316613",
      "cover":"https://scontent.xx.fbcdn.net/hphotos-xfp1/t31.0-8/s720x720/12487027_716529258447416_2424456285400238697_o.jpg"
  },
  {
   "desc": "Startup UW is ready to bring you a killer Winter Quarter! From our own Startup Weekend to a Demo Day at the end of the quarter, come check out what we have to offer you!",
      "end_time": "2016-01-06T19:30:00-0800",
      "name": "Startup UW Info Night!",
      "place": "Bank of America Exed 420 ",
      "start_time": "2016-01-06T18:00:00-0800",
      "id": "210210119316613",
      "cover":"https://scontent.xx.fbcdn.net/hphotos-xfp1/t31.0-8/s720x720/12487027_716529258447416_2424456285400238697_o.jpg"
  },
  {
   "desc": "Startup UW is ready to bring you a killer Winter Quarter! From our own Startup Weekend to a Demo Day at the end of the quarter, come check out what we have to offer you!",
      "end_time": "2016-01-06T19:30:00-0800",
      "name": "Startup UW Info Night!",
      "place": "Bank of America Exed 420 ",
      "start_time": "2016-01-06T18:00:00-0800",
      "id": "210210119316613",
      "cover":"https://scontent.xx.fbcdn.net/hphotos-xfp1/t31.0-8/s720x720/12487027_716529258447416_2424456285400238697_o.jpg"
  }
];

var moment = require('moment');
//var Sequelize = require('sequelize');
//var sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/suw'); // Change this part
//var Events = require('../models/Events');
module.exports = function(req, res, next) {
    //sequelize.query('SELECT id, name, start_time, end_time, place, desc FROM events ORDER BY start_time DESC', { type: sequelize.QueryTypes.SELECT })
      //.then(function(data) {
        //res.render('events', {  title: 'Events' , events: data });    
      //});
    mockEvents.map(function(event) {
      event.at = moment(event.start_time).format('MMMM Do YYYY, h:mm a');
      return event;
    })
    res.render('events', {  title: 'Events' , events: mockEvents }); 
};
