var express = require('express');
var app = express();

require('./bootstrap/bootstrap')(app);
require('./bootstrap/routes')(app);
require('./bootstrap/error')(app);

module.exports = app;
