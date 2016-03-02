//environment variable that detects development or production
//config variable that retrieves config settings
//export the connection

var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
