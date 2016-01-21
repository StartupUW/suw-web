var Sequelize = require('sequelize');

var user = process.env.PG_USER;
var password = process.env.PG_PASSWORD;
var database = process.env.PG_DATABASE || 'suw';

module.exports = new Sequelize(database, user, password, { dialect: 'postgres' });
