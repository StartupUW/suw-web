var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:asdfasdf@localhost:5432/suw'); // Change this part

var User = sequelize.define('events', {
    id: {
        type: Sequelize.STRING,
        field: 'id',
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull: false
    },
    desc: {
        type: Sequelize.STRING,
        field: 'desc',
        allowNull: true
    },
    cover: {
    	type: Sequelize.STRING,
	field: 'cover',
	allowNull: true
    },
    place : {
        type : Sequelize.STRING,
        field : 'place',
        allowNull : false
    },
    lat : {
        type : Sequelize.DOUBLE,
        field : 'lat',
        allowNull : true
    },
    lng : {
        type : Sequelize.DOUBLE,
        field : 'lng',
        allowNull : true
    },
    start_time : {
        type : Sequelize.DATE,
        field : 'start_time',
        allowNull : false
    },
    end_time : {
        type : Sequelize.DATE,
        field : 'end_time',
        allowNull : true
    }
});

//module.exports = Events;


/* Python Model
events = Table('events', metadata,
	Column('id', BigInteger, primary_key=True),
	Column('name', String, nullable=False),
	Column('desc', String),
	Column('place', String, nullable=False),
	Column('lat', Numeric, nullable=True),
	Column('lng', Numeric, nullable=True),
	Column('start_time', DateTime, nullable=False),
	Column('end_time', DateTime, nullable=True),
	Column('timestamp', TIMESTAMP(timezone=True), default=func.now())
)
*/
