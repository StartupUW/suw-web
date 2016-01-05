//sample form
var mockEvents = [
  {
    name: 'Winter Info Night',
    at: '5:00pm - 7:00pm',
    date: 'Jan 07, 2015',
    location: 'Startup Hall',
    link: 'https://www.facebook.com/events/1637507709870963/',
    desc: 'This week’s Startup UW Night will feature a new, fun activity! Nathan For You, an entrepreneur saving businesses from their low’s, does so with some interesting approaches. We will have breakout sessions after viewing the episode where YOU decide the best way to save the company!'
  }
];

var Sequelize = require('sequelize');
var sequelize = new Sequelize('suw', 'postgres', 'postgres', {dialect: 'mysql', port: 5432});
var bbInfo = sequelize.define('events', {
	name: {
		type: Sequelize.TEXT
	},
	at:{
		type: Sequelize.TIME
	},
	date:{
		type: Sequelize.DATE
	},
	location:{
		type: Sequelize.TEXT
	},
	link:{
		type: Sequelize.TEXT 
	},
	desc:{
		type: Sequelize.TEXT
	}	


	},

	{
	  freezeTableName: true // Model tableName will be the same as the model name
	});
module.exports = events;
