var Sequelize = require('sequelize');
var connStr = 'postgres://' + process.env.PG_USER + ':' +
    process.env.PG_PASSOWRD + '@localhost:5432/suw';

module.exports = new Sequelize(connStr);
