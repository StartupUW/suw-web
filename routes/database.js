var Sequelize = require('sequelize');

var user = process.env.PG_USER;
var password = process.env.PG_PASSOWRD;
var database = process.env.PG_DATABASE || 'suw';

var connStr = 'postgres://' + user + ':' + password + '@localhost:5432/' + database;

module.exports = new Sequelize(connStr);
